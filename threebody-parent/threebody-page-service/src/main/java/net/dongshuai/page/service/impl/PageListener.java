package net.dongshuai.page.service.impl;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.dongshuai.page.service.ItemPageService;

/**
 * 监听类 (用于生成网页)
 * @author 董帅
 */
@Component
public class PageListener implements MessageListener {
    
    @Autowired
    private ItemPageService itemPageService;

    @Override
    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage) message;
        try {
            String text = textMessage.getText();
            boolean b = itemPageService.genItemHtml(Long.parseLong(text));
        } catch (JMSException e) {
            e.printStackTrace();
        }
        
    }

}
