package net.dongshuai.search.service.impl;

import java.util.Arrays;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.ObjectMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import net.dongshuai.search.service.ItemSearchService;

/**
 * 删除索引库
 * @author 董帅
 */
@Component
public class ItemDeleteListener implements MessageListener {
    
    @Autowired
    private ItemSearchService itemSearchService;


    @Override
    public void onMessage(Message message) {
        ObjectMessage objectMessage = (ObjectMessage) message;
        
        try {
            Long[] goodsIds = (Long[]) objectMessage.getObject();
            itemSearchService.deleteByGoodsIds(Arrays.asList(goodsIds));
            
        } catch (JMSException e) {
            e.printStackTrace();
        }
    }

}
