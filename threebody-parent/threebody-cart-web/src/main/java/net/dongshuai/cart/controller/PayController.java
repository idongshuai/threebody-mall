package net.dongshuai.cart.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;

import entity.Result;
import net.dongshuai.order.service.OrderService;
import net.dongshuai.pay.service.WeixinPayService;
import net.dongshuai.pojo.TbPayLog;
import utils.IdWorker;

/**
 * 支付
 * @author 董帅
 */
@RestController
@RequestMapping("/pay")
public class PayController {
    
    @Reference
    private WeixinPayService weixinPayService;
    
    
    @Reference
    private OrderService orderService;

    /**
     * 创建支付二维码
     * @param out_trade_no
     * @return
     */
    @RequestMapping("/createNative")
    public Map createNative(){
        //1.获取当前登录用户
        String username = SecurityContextHolder.getContext().getAuthentication().getName();  
        //2.提取支付日志
        TbPayLog payLog = orderService.searchPayLogFromRedis(username);
        //3.调用微信支付接口
        if (payLog != null) {
            return weixinPayService.createNative(payLog.getOutTradeNo(), payLog.getTotalFee() + "");     
        } else {
            return new HashMap<>();
        }
    }
    
    /**
     * 查询支付状态
     * @return
     */
    @RequestMapping("/queryPayStatus")
    public Result queryPayStatus(String out_trade_no) {
        
        Result result = null;
        int x = 0;
        
        while (true) {
            //调用查询
            Map<String, String> map = weixinPayService.queryPayStatus(out_trade_no);
            
            if (map == null) {
                result = new Result(false, "支付发生错误!");
                break;
            }
            
            if("SUCCESS".equals(map.get("trade_state"))) {
                result = new Result(true, "支付成功!");
                //修改订单状态
                orderService.updateOrderStatus(out_trade_no, map.get("transaction_id"));
                break;
            }
            
            if("FAIL".equals(map.get("return_code"))) {
                //由于微信支付的商户key有误, 所有此处一直都是错误
                //修改订单状态
                orderService.updateOrderStatus(out_trade_no, map.get("transaction_id"));
                
                result = new Result(false, "支付发生错误!");
                break;
            }
            
            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            
            x++;
            if (x >= 100) {
                result = new Result(false, "二维码超时!");
                break;
            }
        }
        
        return result;
    }

}
