package net.dongshuai.sellergoods.service;

import java.util.List;
import java.util.Map;

import entity.PageResult;
import net.dongshuai.pojo.TbBrand;

/**
 * 品牌接口
 * @author 董帅
 */
public interface BrandService {

    /**
     * 查询所在品牌
     * @return
     */
    public List<TbBrand> findAll();
    
    /**
     * 品牌分页
     * @param pageNum 当前页码
     * @param pageSize 每页记录数
     * @return
     */
    public PageResult findPage(int pageNum, int pageSize);
    
    /**
     * 增加品牌
     * @param brand
     */
    public void add(TbBrand brand);
    
    /**
     * 根据id查询品牌
     * @param id
     * @return
     */
    public TbBrand findOne(Long id);
    
    /**
     * 修改品牌
     * @param brand
     */
    public void update(TbBrand brand);
    
    /**
     * 批量删除品牌
     * @param ids
     */
    public void delete(Long[] ids);
    
    /**
     * 品牌分页
     * @param brand 查询条件
     * @param pageNum 当前页码
     * @param pageSize 每页记录数
     * @return
     */
    public PageResult findPage(TbBrand brand, int pageNum, int pageSize);
    
    /**
     * 返回品牌的下拉列表数据
     * @return
     */
    public List<Map> selectOptionList();
}
