package net.dongshuai.sellergoods.service;
import java.util.List;

import entity.PageResult;
import net.dongshuai.pojo.TbGoods;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojogroup.GoodsGroup;
/**
 * 服务层接口
 * @author Administrator
 *
 */
public interface GoodsService {

	/**
	 * 返回全部列表
	 * @return
	 */
	public List<TbGoods> findAll();
	
	
	/**
	 * 返回分页列表
	 * @return
	 */
	public PageResult findPage(int pageNum,int pageSize);
	
	
	/**
	 * 增加
	*/
	public void add(GoodsGroup goodsGroup);
	
	
	/**
	 * 修改
	 */
	public void update(GoodsGroup goodsGroup);
	

	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	public GoodsGroup findOne(Long id);
	
	
	/**
	 * 批量删除
	 * @param ids
	 */
	public void delete(Long [] ids);

	/**
	 * 分页
	 * @param pageNum 当前页 码
	 * @param pageSize 每页记录数
	 * @return
	 */
	public PageResult findPage(TbGoods goods, int pageNum,int pageSize);
	
	
	/**
	 * 批量修改状态
	 */
	public void updateStatus(Long[] ids, String status);
	
	/**
    * 批量修改上下架状态
    */
   public void updateMarketableStatus(Long[] ids, String status);
	
   /**
    * 根据SPU的id集合查询SKU列表
    * @param goodsIds
    * @param status
    * @return
    */
   public List<TbItem> findItemListByGoodsIdListAndStatus(Long[] goodsIds, String status);
}
