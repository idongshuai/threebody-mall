package net.dongshuai.sellergoods.service.impl;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbSpecificationMapper;
import net.dongshuai.mapper.TbSpecificationOptionMapper;
import net.dongshuai.pojo.TbSpecification;
import net.dongshuai.pojo.TbSpecificationExample;
import net.dongshuai.pojo.TbSpecificationExample.Criteria;
import net.dongshuai.pojo.TbSpecificationOption;
import net.dongshuai.pojo.TbSpecificationOptionExample;
import net.dongshuai.pojogroup.SpecificationGroup;
import net.dongshuai.sellergoods.service.SpecificationService;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class SpecificationServiceImpl implements SpecificationService {

	@Autowired
	private TbSpecificationMapper specificationMapper;
	
	@Autowired
	private TbSpecificationOptionMapper specificationOptionMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbSpecification> findAll() {
		return specificationMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbSpecification> page=   (Page<TbSpecification>) specificationMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(SpecificationGroup specificationGroup) {
	    //获取规格实体
	    TbSpecification specification = specificationGroup.getSpecification();
		specificationMapper.insert(specification);		
		
		List<TbSpecificationOption> specificationOptionList = specificationGroup.getSpecificationOptionList();
		for (TbSpecificationOption tbSpecificationOption : specificationOptionList) {
		    //设置规格id
		    tbSpecificationOption.setSpecId(specification.getId());
		    //新增规格选项
		    specificationOptionMapper.insert(tbSpecificationOption);
        }
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(SpecificationGroup specificationGroup){
	    //获取规格实体
        TbSpecification specification = specificationGroup.getSpecification();
		specificationMapper.updateByPrimaryKey(specification);
		
		//删除原来规格对应的规格选项
		TbSpecificationOptionExample example = new TbSpecificationOptionExample();
		net.dongshuai.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
		criteria.andSpecIdEqualTo(specification.getId());
		specificationOptionMapper.deleteByExample(example);
		
		//获取规格选项集合
		List<TbSpecificationOption> specificationOptionList = specificationGroup.getSpecificationOptionList();
        for (TbSpecificationOption tbSpecificationOption : specificationOptionList) {
            //设置规格id
            tbSpecificationOption.setSpecId(specification.getId());
            //新增规格选项
            specificationOptionMapper.insert(tbSpecificationOption);
        }
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public SpecificationGroup findOne(Long id){
	    
	    SpecificationGroup specificationGroup = new SpecificationGroup();
	    specificationGroup.setSpecification(specificationMapper.selectByPrimaryKey(id));
	    
	    //获取规格选项列表
	    TbSpecificationOptionExample example = new TbSpecificationOptionExample();
	    net.dongshuai.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
	    criteria.andSpecIdEqualTo(id);
	    
	    specificationGroup.setSpecificationOptionList(specificationOptionMapper.selectByExample(example));
	    
		return specificationGroup;
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
		    
		    //删除规格表数据
			specificationMapper.deleteByPrimaryKey(id);
			
			//删除规格选项表数据
			TbSpecificationOptionExample example = new TbSpecificationOptionExample();
			net.dongshuai.pojo.TbSpecificationOptionExample.Criteria criteria = example.createCriteria();
			criteria.andSpecIdEqualTo(id);
			specificationOptionMapper.deleteByExample(example);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbSpecification specification, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbSpecificationExample example=new TbSpecificationExample();
		Criteria criteria = example.createCriteria();
		
		if(specification!=null){			
						if(specification.getSpecName()!=null && specification.getSpecName().length()>0){
				criteria.andSpecNameLike("%"+specification.getSpecName()+"%");
			}
	
		}
		
		Page<TbSpecification> page= (Page<TbSpecification>)specificationMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}

		/**
		 * 获取规格列表
		 */
        @Override
        public List<Map> selectOptionList() {
            return specificationMapper.selectOptionList();
        }
	
}
