package net.dongshuai.task;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import net.dongshuai.mapper.TbSeckillGoodsMapper;
import net.dongshuai.pojo.TbSeckillGoods;
import net.dongshuai.pojo.TbSeckillGoodsExample;
import net.dongshuai.pojo.TbSeckillGoodsExample.Criteria;

/**
 * 秒杀任务
 * @author 董帅
 */
@Component
public class SeckillTask {
    
    @Autowired
    private RedisTemplate redisTemplate;
    
    @Autowired
    private TbSeckillGoodsMapper seckillGoodsMapper;

    @Scheduled(cron="0/3 * * * * ?")
    public void refreshSeckillGoods() {
        System.out.println("执行了秒杀商品增量更新---任务调度---" + new Date());
        
        //查询缓存中的秒杀商品的id集合
        List goodsIdList = new ArrayList(redisTemplate.boundHashOps("seckillGoods").keys());
        
        TbSeckillGoodsExample example = new TbSeckillGoodsExample();
        Criteria criteria = example.createCriteria();
        //审核通过
        criteria.andStatusEqualTo("1");
        //库存数大于0
        criteria.andStockCountGreaterThan(0);
        //开始时间<=当前时间
        criteria.andStartTimeLessThanOrEqualTo(new Date());
        //截止时间>=当前时间
        criteria.andEndTimeGreaterThanOrEqualTo(new Date());
        
        //排除缓存中已经存在的商品id集合
        if (goodsIdList.size() > 0) {
            criteria.andIdNotIn(goodsIdList);
        }
        
        List<TbSeckillGoods> seckillGoodsList = seckillGoodsMapper.selectByExample(example);
        
        //将列表数据装入缓存
        for (TbSeckillGoods seckillGoods : seckillGoodsList) {
            redisTemplate.boundHashOps("seckillGoods").put(seckillGoods.getId(), seckillGoods);
            System.out.println("增量更新秒杀商品id:" + seckillGoods.getId());
        }
    }
    
    
    /**
     * 移除秒杀商品
     */
    @Scheduled(cron="* * * * * ?")
    public void removeSeckillGoods() {
        //查询出缓存中的数据, 扫描每条记录, 判断时间, 如果当前时间超过了截止时间, 移除此记录
        List<TbSeckillGoods> seckillGoodsList = redisTemplate.boundHashOps("seckillGoods").values();
        System.out.println("执行了清除秒杀商品的任务");
        
        for (TbSeckillGoods seckillGoods : seckillGoodsList) {
            if (seckillGoods.getEndTime().getTime() < new Date().getTime()) {
                //同步到数据库中
                seckillGoodsMapper.updateByPrimaryKey(seckillGoods);
                
                //清除缓存
                redisTemplate.boundHashOps("seckillGoods").delete(seckillGoods.getId());
                System.out.println("秒杀商品过期: " + seckillGoods.getId());
            }
        }
        System.out.println("执行清除秒杀商品------end");
    }
}
