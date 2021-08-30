package net.dongshuai.page.service;

/**
 * SPU页面
 * @author 董帅
 */
public interface ItemPageService {

    /**
     * 生成商品详细页
     * @param goodsId
     * @return
     */
    public boolean genItemHtml(Long goodsId);
    
    
    /**
     * 删除商品详细页
     * @param goodsIds
     * @return
     */
    public boolean deleteItemHtml(Long[] goodsIds);
	
	 
    /**
     * 商品详细页
     * @param goodsIds
     * @return
     */
    public boolean itemHtml(long goodsId);
}
