package net.dongshuai.seckill.service.impl;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.transaction.annotation.Transactional;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbSeckillGoodsMapper;
import net.dongshuai.mapper.TbSeckillOrderMapper;
import net.dongshuai.pojo.TbSeckillGoods;
import net.dongshuai.pojo.TbSeckillOrder;
import net.dongshuai.pojo.TbSeckillOrderExample;
import net.dongshuai.pojo.TbSeckillOrderExample.Criteria;
import net.dongshuai.seckill.service.SeckillOrderService;
import utils.IdWorker;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
@Transactional
public class SeckillOrderServiceImpl implements SeckillOrderService {

	@Autowired
	private TbSeckillOrderMapper seckillOrderMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbSeckillOrder> findAll() {
		return seckillOrderMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbSeckillOrder> page=   (Page<TbSeckillOrder>) seckillOrderMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(TbSeckillOrder seckillOrder) {
		seckillOrderMapper.insert(seckillOrder);		
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbSeckillOrder seckillOrder){
		seckillOrderMapper.updateByPrimaryKey(seckillOrder);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbSeckillOrder findOne(Long id){
		return seckillOrderMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(Long[] ids) {
		for(Long id:ids){
			seckillOrderMapper.deleteByPrimaryKey(id);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbSeckillOrder seckillOrder, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbSeckillOrderExample example=new TbSeckillOrderExample();
		Criteria criteria = example.createCriteria();
		
		if(seckillOrder!=null){			
						if(seckillOrder.getUserId()!=null && seckillOrder.getUserId().length()>0){
				criteria.andUserIdLike("%"+seckillOrder.getUserId()+"%");
			}
			if(seckillOrder.getSellerId()!=null && seckillOrder.getSellerId().length()>0){
				criteria.andSellerIdLike("%"+seckillOrder.getSellerId()+"%");
			}
			if(seckillOrder.getStatus()!=null && seckillOrder.getStatus().length()>0){
				criteria.andStatusLike("%"+seckillOrder.getStatus()+"%");
			}
			if(seckillOrder.getReceiverAddress()!=null && seckillOrder.getReceiverAddress().length()>0){
				criteria.andReceiverAddressLike("%"+seckillOrder.getReceiverAddress()+"%");
			}
			if(seckillOrder.getReceiverMobile()!=null && seckillOrder.getReceiverMobile().length()>0){
				criteria.andReceiverMobileLike("%"+seckillOrder.getReceiverMobile()+"%");
			}
			if(seckillOrder.getReceiver()!=null && seckillOrder.getReceiver().length()>0){
				criteria.andReceiverLike("%"+seckillOrder.getReceiver()+"%");
			}
			if(seckillOrder.getTransactionId()!=null && seckillOrder.getTransactionId().length()>0){
				criteria.andTransactionIdLike("%"+seckillOrder.getTransactionId()+"%");
			}
	
		}
		
		Page<TbSeckillOrder> page= (Page<TbSeckillOrder>)seckillOrderMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}

		
		@Autowired
		private RedisTemplate redisTemplate;
		
		@Autowired
		private TbSeckillGoodsMapper seckillGoodsMapper;
		
		@Autowired
		private IdWorker idWorker;
		
		/**
		 * 秒杀下单
		 */
        @Override
        public void submitOrder(Long seckillId, String userId) {
            //1.查询缓存中的商品
            TbSeckillGoods seckillGoods = (TbSeckillGoods) redisTemplate.boundHashOps("seckillGoods").get(seckillId);
            if (seckillGoods == null) {
                throw new RuntimeException("商品不存在");
            }
            
            if (seckillGoods.getStockCount() <= 0) {
                throw new RuntimeException("商品已经被秒杀完");
            }
            
            //2.减少库存
            seckillGoods.setStockCount(seckillGoods.getStockCount() - 1);
            
            
            //存入缓存
            redisTemplate.boundHashOps("seckillGoods").put(seckillId, seckillGoods);

            // 更新数据库
            if (seckillGoods.getStockCount() == 0) {
                seckillGoodsMapper.updateByPrimaryKey(seckillGoods);
                redisTemplate.boundHashOps("seckillGoods").delete(seckillId);
                
                System.out.println("将商品同步到数据库");
            }
            
            //3.存储秒杀订单 (不向数据库存, 只存到缓存)
            TbSeckillOrder seckillOrder = new TbSeckillOrder();
            seckillOrder.setId(idWorker.nextId());
            seckillOrder.setSeckillId(seckillId);
            seckillOrder.setMoney(seckillGoods.getCostPrice());
            seckillOrder.setUserId(userId);
            seckillOrder.setCreateTime(new Date());
            seckillOrder.setSellerId(seckillGoods.getSellerId());
            seckillOrder.setStatus("0");
            
            redisTemplate.boundHashOps("seckillOrder").put(userId, seckillOrder);
            System.out.println("保存订单成功--redis");
        }

        
        /**
         * 根据用户id从redis中查找订单
         */
        @Override
        public TbSeckillOrder searchOrderFromRedisByUserId(String userId) {
            return (TbSeckillOrder) redisTemplate.boundHashOps("seckillOrder").get(userId);
        }

        
        /**
         * 从redis中取出订单, 保存到数据库
         */
        @Override
        public void saveOrderFromRedisToDb(String userId, Long orderId, String transactionId) {
            //1. 从缓存中提取订单数据
            TbSeckillOrder seckillOrder = searchOrderFromRedisByUserId(userId);
            if (seckillOrder == null) {
                throw new RuntimeException("不存在该订单");
            }
            
            if (seckillOrder.getId().longValue() != orderId.longValue()) {
                throw new RuntimeException("订单号不符");
            }
            
            //2. 修改订单实体的属性
            //支付时间
            seckillOrder.setPayTime(new Date());
            //已支付
            seckillOrder.setStatus("1");
            seckillOrder.setTransactionId(transactionId);
            
            //3. 将订单存入数据库
            seckillOrderMapper.insert(seckillOrder);
            
            //4.清除缓存中的订单
            redisTemplate.boundHashOps("seckillOrder").delete(userId);
        }

        
        /**
         * 删除缓存中的订单
         */
        @Override
        public void deleteOrderFromRedis(String userId, Long orderId) {
            
            //1.查询出缓存中的订单
            TbSeckillOrder seckillOrder = searchOrderFromRedisByUserId(userId);
            if (seckillOrder != null) {
                //2.删除缓存中的订单
                redisTemplate.boundHashOps("seckillOrder").delete(userId);
                
                //3.库存回退
                TbSeckillGoods seckillGoods = (TbSeckillGoods) redisTemplate.boundHashOps("seckillGoods").get(seckillOrder.getSeckillId());
                //如果不为空
                if (seckillGoods != null) {
                    seckillGoods.setStockCount(seckillGoods.getStockCount() + 1);
                    redisTemplate.boundHashOps("seckillGoods").put(seckillOrder.getSeckillId(), seckillGoods);
                } else {
                    seckillGoods = new TbSeckillGoods();
                    seckillGoods.setId(seckillOrder.getSeckillId());
                    // 属性设置, 省略
                    
                    //数量设置为 1
                    seckillGoods.setStockCount(1);
                    
                    redisTemplate.boundHashOps("seckillGoods").put(seckillOrder.getSeckillId(), seckillGoods);
                }
                
                System.out.println("订单取消, " + orderId);
            }
            
        }
	
}
