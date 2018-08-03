package net.dongshuai.order.service.impl;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbOrderItemMapper;
import net.dongshuai.mapper.TbOrderMapper;
import net.dongshuai.mapper.TbPayLogMapper;
import net.dongshuai.order.service.OrderService;
import net.dongshuai.pojo.TbOrder;
import net.dongshuai.pojo.TbOrderExample;
import net.dongshuai.pojo.TbOrderExample.Criteria;
import net.dongshuai.pojo.TbOrderItem;
import net.dongshuai.pojo.TbPayLog;
import net.dongshuai.pojogroup.Cart;
import utils.IdWorker;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class OrderServiceImpl implements OrderService {

	@Autowired
	private TbOrderMapper orderMapper;
	
	@Autowired
	private TbPayLogMapper payLogMapper;
	
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbOrder> findAll() {
		return orderMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbOrder> page=   (Page<TbOrder>) orderMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}
	
	@Autowired
	private RedisTemplate redisTemplate;
	
	@Autowired
	private IdWorker idWorker;
	
	@Autowired
	private TbOrderItemMapper orderItemMapper;

	/**
	 * 增加
	 */
	@Override
	public void add(TbOrder order) {
	    //1.从redis中提取购物车列表
	    List<Cart> cartList = (List<Cart>) redisTemplate.boundHashOps("cartList").get(order.getUserId());	
	    
	    //订单id集合
	    List<String> orderIdList = new ArrayList<>();
	    //订单金额
	    double totalMoney = 0;
	    
	    //2. 循环购物车列表添加订单
	    for (Cart cart : cartList) {
	        TbOrder tbOrder = new TbOrder();
	        //生成订单id
	        long orderId = idWorker.nextId();
	        tbOrder.setOrderId(orderId);
	        //支付类型
	        tbOrder.setPaymentType(order.getPaymentType());
	        //未付款
	        tbOrder.setStatus("1");
	        //创建时间
	        tbOrder.setCreateTime(new Date());
	        //更新时间
	        tbOrder.setUpdateTime(new Date());
	        //当前登录用户
	        tbOrder.setUserId(order.getUserId());
	        //收货人地址
	        tbOrder.setReceiverAreaName(order.getReceiverAreaName());
	        //收货人电话
	        tbOrder.setReceiverMobile(order.getReceiverMobile());
	        //收货人
	        tbOrder.setReceiver(order.getReceiver());
	        //订单来源
	        tbOrder.setSourceType(order.getSourceType());
	        //商家id
	        tbOrder.setSellerId(cart.getSellerId());
	        
	        //合计数
	        double money = 0;
	        
	        //循环购物车中的每条明细记录
	        for (TbOrderItem orderItem : cart.getOrderItemList()) {
	            //主键
	            orderItem.setId(idWorker.nextId());
	            //订单编号
	            orderItem.setOrderId(orderId);
	            //商家id
	            orderItem.setSellerId(cart.getSellerId());
	            orderItemMapper.insert(orderItem);
	            
	            money += orderItem.getTotalFee().doubleValue();
	        }
	        
	        //合计金额
	        tbOrder.setPayment(new BigDecimal(money));
            orderMapper.insert(tbOrder);
            
            
            orderIdList.add(orderId + "");
            totalMoney += money;
        }
	    
	    
	    // 添加支付日志
	    if ("1".equals(order.getPaymentType())) {
	        TbPayLog payLog = new TbPayLog();
	        //支付订单号
	        payLog.setOutTradeNo(idWorker.nextId() + "");
	        payLog.setCreateTime(new Date());
	        payLog.setUserId(order.getUserId());
	        //订单id串
	        payLog.setOrderList(orderIdList.toString().replace("[", "").replace("]", ""));
	        payLog.setTotalFee((long)(totalMoney * 100));
	        //交易状态
	        payLog.setTradeState("0");
	        payLog.setPayType("1");
	        
            payLogMapper.insert(payLog );
            //放入缓存
            redisTemplate.boundHashOps("payLog").put(order.getUserId(), payLog);
	    }
	    
	    
	    
	    
	    //3.清除redis中的购物车
	    redisTemplate.boundHashOps("cartList").delete(order.getUserId());
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbOrder order){
		orderMapper.updateByPrimaryKey(order);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbOrder findOne(Long id){
		return orderMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			orderMapper.deleteByPrimaryKey(id);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbOrder order, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbOrderExample example=new TbOrderExample();
		Criteria criteria = example.createCriteria();
		
		if(order!=null){			
						if(order.getPaymentType()!=null && order.getPaymentType().length()>0){
				criteria.andPaymentTypeLike("%"+order.getPaymentType()+"%");
			}
			if(order.getPostFee()!=null && order.getPostFee().length()>0){
				criteria.andPostFeeLike("%"+order.getPostFee()+"%");
			}
			if(order.getStatus()!=null && order.getStatus().length()>0){
				criteria.andStatusLike("%"+order.getStatus()+"%");
			}
			if(order.getShippingName()!=null && order.getShippingName().length()>0){
				criteria.andShippingNameLike("%"+order.getShippingName()+"%");
			}
			if(order.getShippingCode()!=null && order.getShippingCode().length()>0){
				criteria.andShippingCodeLike("%"+order.getShippingCode()+"%");
			}
			if(order.getUserId()!=null && order.getUserId().length()>0){
				criteria.andUserIdLike("%"+order.getUserId()+"%");
			}
			if(order.getBuyerMessage()!=null && order.getBuyerMessage().length()>0){
				criteria.andBuyerMessageLike("%"+order.getBuyerMessage()+"%");
			}
			if(order.getBuyerNick()!=null && order.getBuyerNick().length()>0){
				criteria.andBuyerNickLike("%"+order.getBuyerNick()+"%");
			}
			if(order.getBuyerRate()!=null && order.getBuyerRate().length()>0){
				criteria.andBuyerRateLike("%"+order.getBuyerRate()+"%");
			}
			if(order.getReceiverAreaName()!=null && order.getReceiverAreaName().length()>0){
				criteria.andReceiverAreaNameLike("%"+order.getReceiverAreaName()+"%");
			}
			if(order.getReceiverMobile()!=null && order.getReceiverMobile().length()>0){
				criteria.andReceiverMobileLike("%"+order.getReceiverMobile()+"%");
			}
			if(order.getReceiverZipCode()!=null && order.getReceiverZipCode().length()>0){
				criteria.andReceiverZipCodeLike("%"+order.getReceiverZipCode()+"%");
			}
			if(order.getReceiver()!=null && order.getReceiver().length()>0){
				criteria.andReceiverLike("%"+order.getReceiver()+"%");
			}
			if(order.getInvoiceType()!=null && order.getInvoiceType().length()>0){
				criteria.andInvoiceTypeLike("%"+order.getInvoiceType()+"%");
			}
			if(order.getSourceType()!=null && order.getSourceType().length()>0){
				criteria.andSourceTypeLike("%"+order.getSourceType()+"%");
			}
			if(order.getSellerId()!=null && order.getSellerId().length()>0){
				criteria.andSellerIdLike("%"+order.getSellerId()+"%");
			}
	
		}
		
		Page<TbOrder> page= (Page<TbOrder>)orderMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}

		/**
		 * 根据用户id获取支付日志
		 */
        @Override
        public TbPayLog searchPayLogFromRedis(String userId) {
            return (TbPayLog) redisTemplate.boundHashOps("payLog").get(userId);
        }

        
        /**
         * 支付成功, 修改状态
         */
        @Override
        public void updateOrderStatus(String out_trade_no, String transaction_id) {
            //1. 修改支付日志的状态及相关字段
            TbPayLog payLog = payLogMapper.selectByPrimaryKey(out_trade_no);
            payLog.setPayTime(new Date());
            //交易成功
            payLog.setTradeState("1");
            payLog.setTransactionId(transaction_id);
            //修改
            payLogMapper.updateByPrimaryKey(payLog);
            
            //2.修改订单表的状态
            //订单id串
            String orderList = payLog.getOrderList();
            String[] orderIds = orderList.split(",");
            for (String orderId : orderIds) {
                TbOrder order = orderMapper.selectByPrimaryKey(Long.valueOf(orderId));
                //已付款状态
                order.setStatus("2");
                order.setPaymentTime(new Date());
                orderMapper.updateByPrimaryKey(order);
            }
            
            //3.清除缓存中的payLog
            redisTemplate.boundHashOps("payLog").delete(payLog.getUserId());
            
        }
	
}
