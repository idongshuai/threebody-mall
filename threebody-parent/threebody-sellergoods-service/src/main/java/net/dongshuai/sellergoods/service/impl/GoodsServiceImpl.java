package net.dongshuai.sellergoods.service.impl;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbBrandMapper;
import net.dongshuai.mapper.TbGoodsDescMapper;
import net.dongshuai.mapper.TbGoodsMapper;
import net.dongshuai.mapper.TbItemCatMapper;
import net.dongshuai.mapper.TbItemMapper;
import net.dongshuai.mapper.TbSellerMapper;
import net.dongshuai.pojo.TbBrand;
import net.dongshuai.pojo.TbGoods;
import net.dongshuai.pojo.TbGoodsDesc;
import net.dongshuai.pojo.TbGoodsExample;
import net.dongshuai.pojo.TbGoodsExample.Criteria;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojo.TbItemCat;
import net.dongshuai.pojo.TbItemExample;
import net.dongshuai.pojo.TbSeller;
import net.dongshuai.pojogroup.GoodsGroup;
import net.dongshuai.sellergoods.service.GoodsService;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class GoodsServiceImpl implements GoodsService {

	@Autowired
	private TbGoodsMapper goodsMapper;
	
	@Autowired
	private TbGoodsDescMapper goodsDescMapper;
	
	@Autowired
	private TbItemMapper itemMapper;
	
	@Autowired
	private TbItemCatMapper itemCatMapper;
	
	@Autowired
	private TbBrandMapper brandMapper;
	
	@Autowired
	private TbSellerMapper sellerMapper;
	
	
	@Autowired
	private TbBrandMapper brandMapper;
	
	@Autowired
	private TbSellerMapper sellerMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbGoods> findAll() {
		return goodsMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		
		
        Page<TbGoods> page=   (Page<TbGoods>) goodsMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(GoodsGroup goodsGroup) {
	    //设置状态为未审核
	    goodsGroup.getGoods().setAuditStatus("0");
	    
	    //设置为上架状态
	    goodsGroup.getGoods().setIsMarketable("1");
	    
	    //插入商品基本表数据
		goodsMapper.insert(goodsGroup.getGoods());
		
		//将商品基本表的id给商品扩展表
		goodsGroup.getGoodsDesc().setGoodsId(goodsGroup.getGoods().getId());
		//插入商品扩展表数据
		goodsDescMapper.insert(goodsGroup.getGoodsDesc());
		
		
		//插入SKU商品数据
		saveItemList(goodsGroup);
		
	}

	
	private void setItemValues(TbItem item, GoodsGroup goodsGroup) {
	    //设置商品分类
        item.setCategoryid(goodsGroup.getGoods().getCategory3Id());

        //设置创建日期
        item.setCreateTime(new Date());
        //设置更新日期
        item.setUpdateTime(new Date());
        
        //设置商品id
        item.setGoodsId(goodsGroup.getGoods().getId());
        
        //设置商家id
        item.setSellerId(goodsGroup.getGoods().getSellerId());
        
        //设置分类名称
        TbItemCat itemCat = itemCatMapper.selectByPrimaryKey(goodsGroup.getGoods().getCategory3Id());
        item.setCategory(itemCat.getName());
        
        //设置品牌名称
        TbBrand brand = brandMapper.selectByPrimaryKey(goodsGroup.getGoods().getBrandId());
        item.setBrand(brand.getName());
        
        //设置商家名称(店铺名称)
        TbSeller seller = sellerMapper.selectByPrimaryKey(goodsGroup.getGoods().getSellerId());
        item.setSeller(seller.getNickName());
        
        //设置图片
        List<Map> imageList = JSON.parseArray(goodsGroup.getGoodsDesc().getItemImages(),Map.class);
        if(imageList.size() > 0) {
            item.setImage((String)imageList.get(0).get("url"));
        }
	}
	
	
	/**
	 * 插入SKU列表数据
	 */
	private void saveItemList(GoodsGroup goodsGroup) {
	  //如果启用规格
        if ("1".equals(goodsGroup.getGoods().getIsEnableSpec())) {
            for (TbItem item : goodsGroup.getItemList()) {
                //构建标题 SPU名称+规格选项值
                String title = goodsGroup.getGoods().getGoodsName();
                
                Map<String,Object> map = JSON.parseObject(item.getSpec());
                for (String key : map.keySet()) {
                    title += " " + map.get(key);
                }
                item.setTitle(title);
                
                setItemValues(item, goodsGroup);
                
                itemMapper.insert(item);
            }
        } else {
            //如果没有启用规格
            TbItem item = new TbItem();
            //标题
            item.setTitle(goodsGroup.getGoods().getGoodsName());
            //价格
            item.setPrice(goodsGroup.getGoods().getPrice());
            //库存
            item.setNum(99999);
            //状态
            item.setStatus("1");
            item.setIsDefault("1");
            
            item.setSpec("{}");
            
            setItemValues(item, goodsGroup);
            
            itemMapper.insert(item);
        }
	}
	
	
	/**
	 * 修改
	 */
	@Override
	public void update(GoodsGroup goodsGroup){
	    //更新基本表数据
		goodsMapper.updateByPrimaryKey(goodsGroup.getGoods());
		//更新扩展表数据
		goodsDescMapper.updateByPrimaryKey(goodsGroup.getGoodsDesc());
		
		TbItemExample example = new TbItemExample();
		net.dongshuai.pojo.TbItemExample.Criteria criteria = example.createCriteria();
		criteria.andGoodsIdEqualTo(goodsGroup.getGoods().getId());
        //删除原有的SKU列表数据
		itemMapper.deleteByExample(example );
		
		//插入SKU商品数据
        saveItemList(goodsGroup);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public GoodsGroup findOne(Long id){
	    GoodsGroup goodsGroup = new GoodsGroup();
	    
	    //商品基本表
	    TbGoods goods = goodsMapper.selectByPrimaryKey(id);
	    goodsGroup.setGoods(goods);
	    
	    //商品扩展表
	    TbGoodsDesc goodsDesc = goodsDescMapper.selectByPrimaryKey(id);
	    goodsGroup.setGoodsDesc(goodsDesc);
	    
	    TbItemExample example = new TbItemExample();
	    net.dongshuai.pojo.TbItemExample.Criteria criteria = example.createCriteria();
	    criteria.andGoodsIdEqualTo(id);
        //读取SKU列表
	    List<TbItem> itemList = itemMapper.selectByExample(example );
	    goodsGroup.setItemList(itemList);
	    
		return goodsGroup;
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
		    TbGoods goods = goodsMapper.selectByPrimaryKey(id);
		    goods.setIsDelete("1");
		    goodsMapper.updateByPrimaryKey(goods);
		}		
	}
	
	
	/**
	 * 根据查询条件分页查询
	 */
		@Override
	public PageResult findPage(TbGoods goods, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbGoodsExample example=new TbGoodsExample();
		Criteria criteria = example.createCriteria();
		
		criteria.andIsDeleteIsNull();
		
		if(goods!=null){			
			if(goods.getSellerId()!=null && goods.getSellerId().length()>0){
				criteria.andSellerIdEqualTo(goods.getSellerId());
			}
			if(goods.getGoodsName()!=null && goods.getGoodsName().length()>0){
				criteria.andGoodsNameLike("%"+goods.getGoodsName()+"%");
			}
			if(goods.getAuditStatus()!=null && goods.getAuditStatus().length()>0){
				criteria.andAuditStatusLike("%"+goods.getAuditStatus()+"%");
			}
			if(goods.getIsMarketable()!=null && goods.getIsMarketable().length()>0){
				criteria.andIsMarketableLike("%"+goods.getIsMarketable()+"%");
			}
			if(goods.getCaption()!=null && goods.getCaption().length()>0){
				criteria.andCaptionLike("%"+goods.getCaption()+"%");
			}
			if(goods.getSmallPic()!=null && goods.getSmallPic().length()>0){
				criteria.andSmallPicLike("%"+goods.getSmallPic()+"%");
			}
			if(goods.getIsEnableSpec()!=null && goods.getIsEnableSpec().length()>0){
				criteria.andIsEnableSpecLike("%"+goods.getIsEnableSpec()+"%");
			}
			if(goods.getIsDelete()!=null && goods.getIsDelete().length()>0){
				criteria.andIsDeleteLike("%"+goods.getIsDelete()+"%");
			}
	
		}
		
		Page<TbGoods> page= (Page<TbGoods>)goodsMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}

		
		/**
		 * 批量修改状态
		 */
        @Override
        public void updateStatus(Long[] ids, String status) {
            for (Long id : ids) {
                TbGoods goods = goodsMapper.selectByPrimaryKey(id);
                goods.setAuditStatus(status);
                goodsMapper.updateByPrimaryKey(goods);
            }
        }

        /**
         * 修改上下架状态
         */
        @Override
        public void updateMarketableStatus(Long[] ids, String status) {
            for (Long id : ids) {
                TbGoods goods = goodsMapper.selectByPrimaryKey(id);
                goods.setIsMarketable(status);
                goodsMapper.updateByPrimaryKey(goods);
                
            }
            
        }
	
        
        /**
         * 根据SPU的id集合查询SKU列表
         * @param goodsIds
         * @param status
         * @return
         */
        public List<TbItem> findItemListByGoodsIdListAndStatus(Long[] goodsIds, String status) {
            TbItemExample example = new TbItemExample();
            net.dongshuai.pojo.TbItemExample.Criteria criteria = example.createCriteria();
            //已审核
            criteria.andStatusEqualTo(status);
            //指定条件: SPU的id集合 
            criteria.andGoodsIdIn(Arrays.asList(goodsIds));
            return itemMapper.selectByExample(example);
        }
}
