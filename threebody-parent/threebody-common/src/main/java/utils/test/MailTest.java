package com.processon.test;

import com.processon.common.util.MailUtil;
import org.junit.Test;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/4/6
 */
public class MailTest {

    @Test
    public void testMail() {
        String msg = "[{\"action\":\"create\",<br>\n" + "\n\n" +
                "\"content\":{\"content\":[{\"id\":\"fd575edea469\",\"parent\":\"root\"," + "\n\n" +
                "\"children\":[],\"title\":\"<div class=\"errorText\" style=\"margin-top: 20px;letter-spacing:1px;\">" + "\n\n" +
                "分支\n\n主题</div>\"}],\"parts\":{\"fd575edea469\":2},\"updates\":{},\"original\":{},\"updateTps\":{}}}]";
        //发送邮件
        MailUtil.mail("idongshuai@88.com", "test 0408", msg);
    }
}
