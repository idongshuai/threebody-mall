package net.dongshuai.pay.service;

import java.util.Map;

/**
 * 微信支付
 * @author 董帅
 */
public interface WeixinPayService {

    /**
     * 生成二维码
     * @param out_trade_no
     * @param total_fee
     * @return
     */
    public Map createNative(String out_trade_no, String total_fee);
    
    /**
     * 查询支付订单状态
     * @return
     */
    public Map queryPayStatus(String out_trade_no);
    
    /**
     * 关闭订单
     */
    public Map closePay(String out_trade_no);
}
