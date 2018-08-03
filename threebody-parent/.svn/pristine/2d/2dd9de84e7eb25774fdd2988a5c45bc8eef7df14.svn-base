package net.dongshuai.sellergoods.service.impl;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbItemCatMapper;
import net.dongshuai.pojo.TbItemCat;
import net.dongshuai.pojo.TbItemCatExample;
import net.dongshuai.pojo.TbItemCatExample.Criteria;
import net.dongshuai.sellergoods.service.ItemCatService;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class ItemCatServiceImpl implements ItemCatService {

	@Autowired
	private TbItemCatMapper itemCatMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbItemCat> findAll() {
		return itemCatMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbItemCat> page=   (Page<TbItemCat>) itemCatMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(TbItemCat itemCat) {
		itemCatMapper.insert(itemCat);		
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbItemCat itemCat){
		itemCatMapper.updateByPrimaryKey(itemCat);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbItemCat findOne(Long id){
		return itemCatMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 * @throws Exception 
	 */
	@Override
	public void delete(Long[] ids) throws Exception {
		for(Long id:ids){
		    TbItemCatExample example = new TbItemCatExample();
		    Criteria criteria = example.createCriteria();
		    criteria.andParentIdEqualTo(id);
			List<TbItemCat> itemlist = itemCatMapper.selectByExample(example);
			
			if(itemlist.size() > 0) {
			    throw new RuntimeException();
			} else {
			    itemCatMapper.deleteByPrimaryKey(id);
			}
		    
		}		
	}
	
	
		@Override
	public PageResult findPage(TbItemCat itemCat, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbItemCatExample example=new TbItemCatExample();
		Criteria criteria = example.createCriteria();
		
		if(itemCat!=null){			
						if(itemCat.getName()!=null && itemCat.getName().length()>0){
				criteria.andNameLike("%"+itemCat.getName()+"%");
			}
	
		}
		
		Page<TbItemCat> page= (Page<TbItemCat>)itemCatMapper.selectByExample(example);		
		    return new PageResult(page.getTotal(), page.getResult());
		}
		
		@Autowired
		private RedisTemplate redisTemplate;

		/**
		 * 根据上级id查询商品分类列表
		 */
        @Override
        public List<TbItemCat> findByParentId(Long parentId) {
            TbItemCatExample example = new TbItemCatExample();
            Criteria criteria = example.createCriteria();
            criteria.andParentIdEqualTo(parentId);
            
            //将模板id存入缓存 (以商品分类名称作为key)
            List<TbItemCat> itemCatList = findAll();
            for (TbItemCat itemCat : itemCatList) {
                redisTemplate.boundHashOps("itemCat").put(itemCat.getName(), itemCat.getTypeId());
            }
            System.out.println("将模板id放入缓存");
            
            return itemCatMapper.selectByExample(example);
        }
	
}
