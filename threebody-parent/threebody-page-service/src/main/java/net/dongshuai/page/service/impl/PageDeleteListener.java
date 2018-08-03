package net.dongshuai.page.service.impl;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.dongshuai.page.service.ItemPageService;

/**
 * 监听类, 删除商品详情页
 * @author 董帅
 */
@Component
public class PageDeleteListener implements MessageListener {
    
    @Autowired
    private ItemPageService itemPageService;

    @Override
    public void onMessage(Message message) {
        
        ObjectMessage objectMessage = (ObjectMessage) message;
        try {
            Long[] goodsIds = (Long[]) objectMessage.getObject();
            boolean b = itemPageService.deleteItemHtml(goodsIds);
            
        } catch (JMSException e) {
            e.printStackTrace();
        }
    }

}
