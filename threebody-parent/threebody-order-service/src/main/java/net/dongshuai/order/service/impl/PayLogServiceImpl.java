package net.dongshuai.order.service.impl;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;

import entity.PageResult;
import net.dongshuai.mapper.TbPayLogMapper;
import net.dongshuai.order.service.PayLogService;
import net.dongshuai.pojo.TbPayLog;
import net.dongshuai.pojo.TbPayLogExample;
import net.dongshuai.pojo.TbPayLogExample.Criteria;

/**
 * 服务实现层
 * @author Administrator
 *
 */
@Service
public class PayLogServiceImpl implements PayLogService {

	@Autowired
	private TbPayLogMapper payLogMapper;
	
	/**
	 * 查询全部
	 */
	@Override
	public List<TbPayLog> findAll() {
		return payLogMapper.selectByExample(null);
	}

	/**
	 * 按分页查询
	 */
	@Override
	public PageResult findPage(int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);		
		Page<TbPayLog> page=   (Page<TbPayLog>) payLogMapper.selectByExample(null);
		return new PageResult(page.getTotal(), page.getResult());
	}

	/**
	 * 增加
	 */
	@Override
	public void add(TbPayLog payLog) {
		payLogMapper.insert(payLog);		
	}


	/**
	 * 增加
	 */
	@Override
	public void add2(TbPayLog payLog) {
		payLogMapper.insert(payLog);		
	}

	
	/**
	 * 修改
	 */
	@Override
	public void update(TbPayLog payLog){
		payLogMapper.updateByPrimaryKey(payLog);
	}	
	
	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	@Override
	public TbPayLog findOne(String id){
		return payLogMapper.selectByPrimaryKey(id);
	}

	/**
	 * 批量删除
	 */
	@Override
	public void delete(String[] ids) {
		for(String id:ids){
			payLogMapper.deleteByPrimaryKey(id);
		}		
	}
	
	
		@Override
	public PageResult findPage(TbPayLog payLog, int pageNum, int pageSize) {
		PageHelper.startPage(pageNum, pageSize);
		
		TbPayLogExample example=new TbPayLogExample();
		Criteria criteria = example.createCriteria();
		
		if(payLog!=null){			
						if(payLog.getOutTradeNo()!=null && payLog.getOutTradeNo().length()>0){
				criteria.andOutTradeNoLike("%"+payLog.getOutTradeNo()+"%");
			}
			if(payLog.getUserId()!=null && payLog.getUserId().length()>0){
				criteria.andUserIdLike("%"+payLog.getUserId()+"%");
			}
			if(payLog.getCreateTime()!=null){
			    criteria.andCreateTimeBetween(getStartTime(payLog.getCreateTime()), getEndTime(payLog.getCreateTime()));
			}
			if(payLog.getTransactionId()!=null && payLog.getTransactionId().length()>0){
				criteria.andTransactionIdLike("%"+payLog.getTransactionId()+"%");
			}
			if(payLog.getTradeState()!=null && payLog.getTradeState().length()>0){
				criteria.andTradeStateLike("%"+payLog.getTradeState()+"%");
			}
			if(payLog.getOrderList()!=null && payLog.getOrderList().length()>0){
				criteria.andOrderListLike("%"+payLog.getOrderList()+"%");
			}
			if(payLog.getPayType()!=null && payLog.getPayType().length()>0){
				criteria.andPayTypeLike("%"+payLog.getPayType()+"%");
			}
	
		}
		
		Page<TbPayLog> page= (Page<TbPayLog>)payLogMapper.selectByExample(example);		
		return new PageResult(page.getTotal(), page.getResult());
	}
		
		
		
		private Date getStartTime(Date date) {
	        Calendar todayStart = Calendar.getInstance();
	        todayStart.setTime(date);
	        todayStart.set(Calendar.HOUR, 0);
	        todayStart.set(Calendar.MINUTE, 0);
	        todayStart.set(Calendar.SECOND, 0);
	        todayStart.set(Calendar.MILLISECOND, 0);
	        return todayStart.getTime();
	    }
	 
	    private Date getEndTime(Date date) {
	        Calendar todayEnd = Calendar.getInstance();
	        todayEnd.setTime(date);
	        todayEnd.set(Calendar.HOUR, 23);
	        todayEnd.set(Calendar.MINUTE, 59);
	        todayEnd.set(Calendar.SECOND, 59);
	        todayEnd.set(Calendar.MILLISECOND, 999);
	        return todayEnd.getTime();
	    }

	
}
