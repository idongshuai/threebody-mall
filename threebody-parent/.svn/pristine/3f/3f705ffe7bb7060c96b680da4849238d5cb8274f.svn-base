package net.dongshuai.cart.service.impl;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;

import com.alibaba.dubbo.config.annotation.Service;

import net.dongshuai.cart.service.CartService;
import net.dongshuai.mapper.TbItemMapper;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojo.TbOrderItem;
import net.dongshuai.pojogroup.Cart;

/**
 * 购物车实现类
 * @author 董帅
 */
@Service
public class CartServiceImpl implements CartService {
    
    @Autowired
    private TbItemMapper itemMapper;
    
    @Autowired
    private RedisTemplate redisTemplate;
    

    @Override
    public List<Cart> addGoodsToCartList(List<Cart> cartList, Long itemId, Integer num) {
        
        //1.根据SKU id查询商品明细SKU的对象
        TbItem item = itemMapper.selectByPrimaryKey(itemId);
        if (item == null) {
            throw new RuntimeException("商品不存在");
        }
        if (!"1".equals(item.getStatus())) {
            throw new RuntimeException("商品状态不合法");
        }
        
        //2.根据SKU对象得到商家id
        String sellerId = item.getSellerId();
        
        //3.根据商家id, 在购物车列表中查询购物车对象
        Cart cart = searchCartBySellerId(cartList, sellerId);

        //4.如果购物车列表中不存在该商家的购物车
        if (cart == null) {
            //4.1创建一个新的购物车对象
            cart = new Cart();
            //商家id
            cart.setSellerId(sellerId);
            //商家名称
            cart.setSellerName(item.getSeller());
            //创建购物车明细列表
            List<TbOrderItem> orderItemList = new ArrayList<>();
            orderItemList.add(createOrderItem(item, num));
            cart.setOrderItemList(orderItemList);
            
            //4.2将新的购物车对象添加到列表中
            cartList.add(cart);
            
        } else {
            //5.如果购物车列表中存在该商家的购物车
            //判断该商品是否在该购物车的明细列表中存在
            TbOrderItem orderItem = searchOrderItemByItemId(cart.getOrderItemList(), itemId);
            if (orderItem == null) {
                //5.1如果不存在, 创建新的购物车明细对象, 添加到该购物车的明细列表中
                orderItem = createOrderItem(item, num);
                cart.getOrderItemList().add(orderItem);
            } else {
                //5.2如果存在, 在原有的数量基础上 , 添加数量, 并且更新金额
                //更改数量
                orderItem.setNum(orderItem.getNum() + num);
                orderItem.setTotalFee(new BigDecimal(orderItem.getPrice().doubleValue() * orderItem.getNum()));
                //当明细的数量<=0, 移除此明细
                if (orderItem.getNum() <= 0) {
                    cart.getOrderItemList().remove(orderItem);
                }
                //当购物车的明细数量为0 , 在购物车列表中移除此购物车
                if (cart.getOrderItemList().size() == 0) {
                    cartList.remove(cart);
                }
            }
        }
        return cartList;
    }
    
    /**
     * 根据商家id查询购物车对象
     * @param cartList
     * @param sellerId
     * @return
     */
    private Cart searchCartBySellerId(List<Cart> cartList, String sellerId) {
        for (Cart cart : cartList) {
            if (cart.getSellerId().equals(sellerId)) {
                return cart;
            }
        }
        return null;
    }
    
    /**
     * 创建购物车明细对象
     * @param item
     * @param num
     * @return
     */
    private TbOrderItem createOrderItem(TbItem item, Integer num) {
        TbOrderItem orderItem = new TbOrderItem();
        orderItem.setGoodsId(item.getGoodsId());
        orderItem.setItemId(item.getId());
        orderItem.setNum(num);
        orderItem.setPicPath(item.getImage());
        orderItem.setPrice(item.getPrice());
        orderItem.setSellerId(item.getSellerId());
        orderItem.setTitle(item.getTitle());
        orderItem.setTotalFee(new BigDecimal(item.getPrice().doubleValue() * num));
        
        return orderItem;
    }
    
    /**
     * 根据SKU id 在购物车明细列表中 , 查询购物车明细对象
     * @param orderItemList
     * @param itemId
     * @return
     */
    private TbOrderItem searchOrderItemByItemId(List<TbOrderItem> orderItemList, Long itemId) {
        for (TbOrderItem orderItem : orderItemList) {
            // Long 比较的是地址, long 比较的是值
            if (orderItem.getItemId().longValue() == itemId.longValue()) {
                return orderItem;
            }
        }
        return null;
    }

    
   /**
    * 从redis中提取购物车列表 
    */
    @Override
    public List<Cart> findCartListFromRedis(String username) {
        List<Cart> cartList = (List<Cart>) redisTemplate.boundHashOps("cartList").get(username);
        if (cartList == null) {
            cartList = new ArrayList<>();
        }
        return cartList;
    }

    /**
     * 将购物车列表存入redis
     */
    @Override
    public void saveCartListToRedis(String username, List<Cart> cartList) {
        redisTemplate.boundHashOps("cartList").put(username, cartList);
    }

    /**
     * 合并购物车
     */
    @Override
    public List<Cart> mergeCartList(List<Cart> cartList1, List<Cart> cartList2) {
        for (Cart cart : cartList2) {
            for (TbOrderItem orderItem : cart.getOrderItemList()) {
                addGoodsToCartList(cartList1, orderItem.getItemId(), orderItem.getNum());
            }
        }
        
        return cartList1;
    }

}
