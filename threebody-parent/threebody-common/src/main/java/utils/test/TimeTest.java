package com.processon.test;

import com.processon.common.util.DateUtil;
import org.junit.Test;

import java.util.Date;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/2/6
 */
public class TimeTest {

    @Test
    public void testEpoch() {
        long time = 1609952130;

        String s1 = DateUtil.timestamp10ToDateStr(String.valueOf(time), null);
        System.out.println(s1);

        String s = DateUtil.dateToTimeStamp10(new Date());
        System.out.println(s);

        long days = Long.parseLong(s) - time;
        System.out.println(days);

        System.out.println(days / 86400);



    }

}
