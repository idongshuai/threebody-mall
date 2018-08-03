package net.dongshuai.shop.controller;
import java.util.List;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;

import entity.PageResult;
import entity.Result;
import net.dongshuai.pojo.TbGoods;
import net.dongshuai.pojogroup.GoodsGroup;
import net.dongshuai.sellergoods.service.GoodsService;
/**
 * controller
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/goods")
public class GoodsController {

	@Reference
	private GoodsService goodsService;
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/findAll")
	public List<TbGoods> findAll(){			
		return goodsService.findAll();
	}
	
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/findPage")
	public PageResult  findPage(int page,int rows){			
		return goodsService.findPage(page, rows);
	}
	
	/**
	 * 增加
	 * @param goods
	 * @return
	 */
	@RequestMapping("/add")
	public Result add(@RequestBody GoodsGroup goodsGroup){
	    
	    //获取商家id
	    String sellerId = SecurityContextHolder.getContext().getAuthentication().getName();
	    //设置商家id
	    goodsGroup.getGoods().setSellerId(sellerId);
	    
		try {
			goodsService.add(goodsGroup);
			return new Result(true, "增加成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "增加失败");
		}
	}
	
	/**
	 * 修改
	 * @param goods
	 * @return
	 */
	@RequestMapping("/update")
	public Result update(@RequestBody GoodsGroup goodsGroup){
	    
	    //当前商家id
	    String sellerId = SecurityContextHolder.getContext().getAuthentication().getName();
	    
	    //首先判断商品是否为该商家的商品
	    GoodsGroup goodsGroup2 = goodsService.findOne(goodsGroup.getGoods().getId());
	    if (!goodsGroup2.getGoods().getSellerId().equals(sellerId) || !goodsGroup.getGoods().getSellerId().equals(sellerId)) {
	        return new Result(false, "非法操作");
	    }
	    
		try {
			goodsService.update(goodsGroup);
			return new Result(true, "修改成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "修改失败");
		}
	}	
	
	/**
	 * 获取实体
	 * @param id
	 * @return
	 */
	@RequestMapping("/findOne")
	public GoodsGroup findOne(Long id){
		return goodsService.findOne(id);		
	}
	
	/**
	 * 批量删除
	 * @param ids
	 * @return
	 */
	@RequestMapping("/delete")
	public Result delete(Long [] ids){
		try {
			goodsService.delete(ids);
			return new Result(true, "删除成功"); 
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "删除失败");
		}
	}
	
	/**
	 * 查询+分页
	 * @param brand
	 * @param page
	 * @param rows
	 * @return
	 */
	@RequestMapping("/search")
	public PageResult search(@RequestBody TbGoods goods, int page, int rows  ){
	    //获取商家id
	    String name = SecurityContextHolder.getContext().getAuthentication().getName();
	    goods.setSellerId(name);
		return goodsService.findPage(goods, page, rows);		
	}
	
	/**
	 * 修改上下架状态
	 * @param ids
	 * @param status
	 */
	@RequestMapping("/updateMarketableStatus")
	public Result updateMarketableStatus(Long[] ids, String status) {
	    try {
            goodsService.updateMarketableStatus(ids, status);
            return new Result(true, "修改成功");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "修改失败");
        }
	    
	    
	}
}
