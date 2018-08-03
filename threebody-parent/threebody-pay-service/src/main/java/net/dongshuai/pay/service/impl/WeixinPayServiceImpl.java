package net.dongshuai.pay.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;

import com.alibaba.dubbo.config.annotation.Service;
import com.github.wxpay.sdk.WXPayUtil;

import net.dongshuai.pay.service.WeixinPayService;
import utils.HttpClient;

/**
 * 微信支付
 * @author 董帅
 */
@Service
public class WeixinPayServiceImpl implements WeixinPayService {

    @Value("${appid}")
    private String appid;
    
    @Value("${partner}")
    private String partner;
    
    @Value("${partnerkey}")
    private String partnerkey;
    
    /**
     * 创建支付二维码
     */
    @Override
    public Map createNative(String out_trade_no, String total_fee) {
        //1.参数封装
        Map param = new HashMap();
        //公众号id
        param.put("appid", appid);
        //商户号
        param.put("mch_id", partner);
        //随机字符串
        param.put("nonce_str", WXPayUtil.generateNonceStr());
        //签名, 经过SDK后, 会自动加上签名
        //param.put("sign", "");
        //商品描述
        param.put("body", "aaa");
        //商户订单号
        param.put("out_trade_no", out_trade_no);
        //标价金额
        param.put("total_fee", total_fee);
        //终端ip, 并没有什么用
        param.put("spbill_create_ip", "127.0.0.1");
        //通知地址  / 回调地址,  由于使用的是第二种支付方式, 所有这个用不到, 可以随便写
        param.put("notify_url", "http://www.dongshuai.net");
        param.put("trade_type", "NATIVE");
        
        try {
            String xmlParam = WXPayUtil.generateSignedXml(param, partnerkey);
            
            System.out.println("请求的参数:" + xmlParam);
            
            //2.发送请求
            HttpClient httpClient = new HttpClient("https://api.mch.weixin.qq.com/pay/unifiedorder");
            httpClient.setHttps(true);
            httpClient.setXmlParam(xmlParam);
            httpClient.post();
            
            //3.获取结果
            String xmlResult = httpClient.getContent();
            Map<String, String> mapResult = WXPayUtil.xmlToMap(xmlResult);
            
            System.out.println("微信返回的结果:" + mapResult);
            
            Map map = new HashMap();
            //支付二维码的链接, 目前获取不到, 总是返回签名错误
            //map.put("code_url", mapResult.get("code_url"));
            map.put("code_url", "https://www.dongshuai.net");
            map.put("out_trade_no", out_trade_no);
            map.put("total_fee", total_fee);
            
            return map;
            
        } catch (Exception e) {
            e.printStackTrace();
            return new HashMap();
        }
        
    }

    
    /**
     * 查询支付订单状态
     */
    @Override
    public Map queryPayStatus(String out_trade_no) {
        //1.封装参数
        Map param = new HashMap();
        param.put("appid", appid);
        param.put("mch_id", partner);
        param.put("out_trade_no", out_trade_no);
        param.put("nonce_str", WXPayUtil.generateNonceStr());
        
        try {
            String xmlParam = WXPayUtil.generateSignedXml(param, partnerkey);
            
            //2.发送请求
            HttpClient httpClient = new HttpClient("https://api.mch.weixin.qq.com/pay/orderquery");
            httpClient.setHttps(true);
            httpClient.setXmlParam(xmlParam);
            httpClient.post();
            
            //3.获取结果
            String xmlResult = httpClient.getContent();
            Map<String, String> map = WXPayUtil.xmlToMap(xmlResult);
            
            System.out.println("调用查询api, 返回结果:" + xmlResult);
            
            return map;
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
        
       
        
    }


    /**
     * 关闭订单
     */
    @Override
    public Map closePay(String out_trade_no) {
      //1.封装参数
        Map param = new HashMap();
        param.put("appid", appid);
        param.put("mch_id", partner);
        param.put("out_trade_no", out_trade_no);
        param.put("nonce_str", WXPayUtil.generateNonceStr());
        
        try {
            String xmlParam = WXPayUtil.generateSignedXml(param, partnerkey);
            
            //2.发送请求
            HttpClient httpClient = new HttpClient("https://api.mch.weixin.qq.com/pay/closeorder");
            httpClient.setHttps(true);
            httpClient.setXmlParam(xmlParam);
            httpClient.post();
            
            //3.获取结果
            String xmlResult = httpClient.getContent();
            Map<String, String> map = WXPayUtil.xmlToMap(xmlResult);
            
            System.out.println("调用关闭订单查询api, 返回结果:" + xmlResult);
            
            return map;
            
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
   
}
