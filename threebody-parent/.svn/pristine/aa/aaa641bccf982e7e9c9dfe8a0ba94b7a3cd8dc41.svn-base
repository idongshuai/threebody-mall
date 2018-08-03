package net.dongshuai.sellergoods.service.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbBrandMapper;
import net.dongshuai.pojo.TbBrand;
import net.dongshuai.pojo.TbBrandExample;
import net.dongshuai.pojo.TbBrandExample.Criteria;
import net.dongshuai.sellergoods.service.BrandService;

/**
 * 品牌实现类
 * @author 董帅
 */
@Service
@Transactional
public class BrandServiceImpl implements BrandService {

    @Autowired
    private TbBrandMapper brandMapper;
    
    /**
     * 查询所在品牌
     */
    @Override
    public List<TbBrand> findAll() {
        return brandMapper.selectByExample(null);
    }

    /**
     * 品牌分页
     */
    @Override
    public PageResult findPage(int pageNum, int pageSize) {
        
        PageHelper.startPage(pageNum, pageSize);
        Page<TbBrand> brandPage = (Page<TbBrand>) brandMapper.selectByExample(null);
        
        return new PageResult(brandPage.getTotal(), brandPage.getResult());
    }

    /**
     * 增加品牌
     */
    @Override
    public void add(TbBrand brand) {
        brandMapper.insert(brand);
    }

    /**
     * 根据id查询品牌
     */
    @Override
    public TbBrand findOne(Long id) {
        return brandMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据id更新品牌
     */
    @Override
    public void update(TbBrand brand) {
        brandMapper.updateByPrimaryKey(brand);
    }

    /**
     * 批量删除品牌
     */
    @Override
    public void delete(Long[] ids) {
        for (Long id : ids) {
            brandMapper.deleteByPrimaryKey(id);
        }
    }
    
    /**
     * 根据条件查询品牌, 分页
     */
    @Override
    public PageResult findPage(TbBrand brand, int pageNum, int pageSize) {
        
        PageHelper.startPage(pageNum, pageSize);
        
        TbBrandExample example = new TbBrandExample();
        
        Criteria criteria = example.createCriteria();
        if(brand != null) {
            if(brand.getName() != null && brand.getName().length() > 0) {
                criteria.andNameLike("%" + brand.getName() + "%");
            }
            if(brand.getFirstChar() != null && brand.getFirstChar().length() > 0) {
                criteria.andFirstCharLike("%" + brand.getFirstChar() + "%");
            }
        }
        
        
        Page<TbBrand> brandPage = (Page<TbBrand>) brandMapper.selectByExample(example);
        
        return new PageResult(brandPage.getTotal(), brandPage.getResult());
    }

    /**
     * 返回品牌的下拉列表数据
     */
    @Override
    public List<Map> selectOptionList() {
        return brandMapper.selectOptionList();
    }

}
