package net.dongshuai.pojogroup;

import java.io.Serializable;
import java.util.List;

import net.dongshuai.pojo.TbGoods;
import net.dongshuai.pojo.TbGoodsDesc;
import net.dongshuai.pojo.TbItem;

/**
 * 商品的组合实体类
 * @author 董帅
 */
public class GoodsGroup implements Serializable{
    private static final long serialVersionUID = 1L;
    //商品SPU基本信息
    private TbGoods goods;
    //商品SPU扩展信息
    private TbGoodsDesc goodsDesc;
    //SKU列表
    private List<TbItem> itemList;
    
    public List<TbItem> getItemList() {
        return itemList;
    }
    public void setItemList(List<TbItem> itemList) {
        this.itemList = itemList;
    }
    public TbGoods getGoods() {
        return goods;
    }
    public void setGoods(TbGoods goods) {
        this.goods = goods;
    }
    public TbGoodsDesc getGoodsDesc() {
        return goodsDesc;
    }
    public void setGoodsDesc(TbGoodsDesc goodsDesc) {
        this.goodsDesc = goodsDesc;
    }
   
    

}
