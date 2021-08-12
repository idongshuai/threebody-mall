package com.processon.test;

import com.processon.common.util.SignUtil;
import org.junit.Test;

import java.util.HashMap;
import java.util.Map;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/3/4
 */
public class SignTest {

    @Test
    public void testSign() {
        //获取appKey, secretKey
        SignUtil.getThirdSecretKey();

        //签名
        String timestamp = String.valueOf(System.currentTimeMillis());
        System.out.println(timestamp);
        Map<String, String> map = new HashMap<>();
        map.put("encrypted_session", "Yd_bbOUJjjc1nBvVyAjm2mK9U5jJF5s23ic3h59oRoRNC9Rz0GVbKNb-r_kT7tncEWdTzIXf0A_Ifcdif2eu4z==");
        map.put("file_id", "67757781012");
        map.put("group_id", "22751178");
        map.put("parent_id", "0");
        map.put("user_id", "757586");
        map.put("timestamp", timestamp);//13位时间戳
        String auth = SignUtil.sign(map, "8c0f3d16fe1d41279f518a0e58e72d5f", "77dc6a827b256c8441704d76c07840963867e36df8db9058917ab731af1b0ff2");
        System.out.println("签名: " + auth);

        //验签
        boolean verify = SignUtil.verify(map, auth);
        System.out.println("验签: " + verify);

    }


    @Test
    public void testGetSign() {
        //获取appKey, secretKey
        SignUtil.getThirdSecretKey();
    }

}
