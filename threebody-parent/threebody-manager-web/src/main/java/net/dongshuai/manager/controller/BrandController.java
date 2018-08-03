package net.dongshuai.manager.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;

import entity.PageResult;
import entity.Result;
import net.dongshuai.pojo.TbBrand;
import net.dongshuai.sellergoods.service.BrandService;

/**
 * 品牌
 * @author 董帅
 */
@RestController
@RequestMapping("/brand")
public class BrandController {
    
    @Reference
    private BrandService brandService;

    /**
     * 查询所有品牌
     * @return
     */
    @RequestMapping("/findAll")
    public List<TbBrand> findAll(){
        return brandService.findAll();
    }
    
    /**
     * 分页查询品牌
     * @param page 当前页
     * @param size 每页记录数
     * @return
     */
    @RequestMapping("/findPage")
    public PageResult findPage(int page, int size) {
        return brandService.findPage(page, size);
    }
    
    @RequestMapping("/add")
    public Result add(@RequestBody TbBrand brand) {
        try {
            brandService.add(brand);
            return new Result(true,"添加成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"添加失败!");
        }
    }
    
    /**
     * 根据id查询品牌
     * @param id
     * @return
     */
    @RequestMapping("/findOne")
    public TbBrand findOne(Long id) {
        return brandService.findOne(id);
    }
    
    /**
     * 根据id修改品牌
     * @param brand
     * @return
     */
    @RequestMapping("/update")
    public Result update(@RequestBody TbBrand brand) {
        try {
            brandService.update(brand);
            return new Result(true,"修改成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"修改失败!");
        }
    }
    
    /**
     * 批量删除品牌
     * @param ids
     * @return
     */
    @RequestMapping("/delete")
    public Result delete(Long[] ids) {
        try {
            brandService.delete(ids);
            return new Result(true,"删除成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false,"删除失败!");
        }
    }
    
    /**
     * 条件查询, 分页
     * @return
     */
    @RequestMapping("/search")
    public PageResult search(@RequestBody TbBrand brand, int page, int size) {
        return brandService.findPage(brand, page, size);
    }
    
    /**
     * 返回品牌的下拉列表数据
     * @return
     */
    @RequestMapping("/selectOptionList")
    public List<Map> selectOptionList() {
        return brandService.selectOptionList();
    }
}
