package net.dongshuai.sellergoods.service.impl;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.alibaba.fastjson.JSON;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbSpecificationOptionMapper;
import net.dongshuai.mapper.TbTypeTemplateMapper;
import net.dongshuai.pojo.TbSpecificationOption;
import net.dongshuai.pojo.TbSpecificationOptionExample;
import net.dongshuai.pojo.TbTypeTemplate;
import net.dongshuai.pojo.TbTypeTemplateExample;
import net.dongshuai.pojo.TbTypeTemplateExample.Criteria;
import net.dongshuai.sellergoods.service.TypeTemplateService;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class TypeTemplateServiceImpl implements TypeTemplateService {

	@Autowired
	private TbTypeTemplateMapper typeTemplateMapper;
	
	@Autowired
	private TbSpecificationOptionMapper specificationOptionMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbTypeTemplate> findAll() {
		return typeTemplateMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbTypeTemplate> page=   (Page<TbTypeTemplate>) typeTemplateMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(TbTypeTemplate typeTemplate) {
		typeTemplateMapper.insert(typeTemplate);		
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbTypeTemplate typeTemplate){
		typeTemplateMapper.updateByPrimaryKey(typeTemplate);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbTypeTemplate findOne(Long id){
		return typeTemplateMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			typeTemplateMapper.deleteByPrimaryKey(id);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbTypeTemplate typeTemplate, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbTypeTemplateExample example=new TbTypeTemplateExample();
		Criteria criteria = example.createCriteria();
		
		if(typeTemplate!=null){			
						if(typeTemplate.getName()!=null && typeTemplate.getName().length()>0){
				criteria.andNameLike("%"+typeTemplate.getName()+"%");
			}
			if(typeTemplate.getSpecIds()!=null && typeTemplate.getSpecIds().length()>0){
				criteria.andSpecIdsLike("%"+typeTemplate.getSpecIds()+"%");
			}
			if(typeTemplate.getBrandIds()!=null && typeTemplate.getBrandIds().length()>0){
				criteria.andBrandIdsLike("%"+typeTemplate.getBrandIds()+"%");
			}
			if(typeTemplate.getCustomAttributeItems()!=null && typeTemplate.getCustomAttributeItems().length()>0){
				criteria.andCustomAttributeItemsLike("%"+typeTemplate.getCustomAttributeItems()+"%");
			}
	
		}
		
		Page<TbTypeTemplate> page= (Page<TbTypeTemplate>)typeTemplateMapper.selectByExample(example);		
		
		//缓存处理
		saveToRedis();
		
		return new PageResult(page.getTotal(), page.getResult());
	}
		
		@Autowired
		private RedisTemplate redisTemplate;
		
		/**
		 * 将品牌列表与规格列表放入缓存
		 */
		private void saveToRedis() {
		    List<TbTypeTemplate> typeTemplateList = findAll();
		    for (TbTypeTemplate typeTemplate : typeTemplateList) {
		        //得到品牌列表
		        List<Map> brandList = JSON.parseArray(typeTemplate.getBrandIds(), Map.class);
		        
		        redisTemplate.boundHashOps("brandList").put(typeTemplate.getId(), brandList);
		        
		        //得到规格列表
		        List<Map> specList = findSpecList(typeTemplate.getId());
		        redisTemplate.boundHashOps("specList").put(typeTemplate.getId(), specList);
            }
		    System.out.println("缓存品牌和规格列表");
		}

		/**
		 * 获取商品类型模板列表
		 */
        @Override
        public List<Map> selectTypeTemplateList() {
            return typeTemplateMapper.selectTypeTemplateList();
        }

        
        /**
         * 查找规格列表
         */
        @Override
        public List<Map> findSpecList(Long id) {
            TbTypeTemplate typeTemplate = typeTemplateMapper.selectByPrimaryKey(id);
            List<Map> specList = JSON.parseArray(typeTemplate.getSpecIds(), Map.class);
            
            for (Map map : specList) {
                //查询规格选项列表
                TbSpecificationOptionExample example = new TbSpecificationOptionExample();
                net.dongshuai.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
                criteria.andSpecIdEqualTo(new Long((Integer)map.get("id")));
                List<TbSpecificationOption> options = specificationOptionMapper.selectByExample(example);
                
                map.put("options", options);
            }
            
            return specList;
        }
	
}
