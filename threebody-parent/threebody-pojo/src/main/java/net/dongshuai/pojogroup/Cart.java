package net.dongshuai.pojogroup;

import java.io.Serializable;
import java.util.List;

import net.dongshuai.pojo.TbOrderItem;

/**
 * 购物车对象
 * @author 董帅
 */
public class Cart implements Serializable {
    private static final long serialVersionUID = 1L;
    private String sellerId;
    private String sellerName;
    //购物车明细列表
    private List<TbOrderItem> orderItemList;
    public String getSellerId() {
        return sellerId;
    }
    public void setSellerId(String sellerId) {
        this.sellerId = sellerId;
    }
    public String getSellerName() {
        return sellerName;
    }
    public void setSellerName(String sellerName) {
        this.sellerName = sellerName;
    }
    public List<TbOrderItem> getOrderItemList() {
        return orderItemList;
    }
    public void setOrderItemList(List<TbOrderItem> orderItemList) {
        this.orderItemList = orderItemList;
    }
    
    

}
