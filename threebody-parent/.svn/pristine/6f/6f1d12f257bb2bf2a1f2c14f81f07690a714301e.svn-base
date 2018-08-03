package net.dongshuai.search.service.impl;

import java.util.List;

import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.MessageListener;
import javax.jms.TextMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;

import net.dongshuai.pojo.TbItem;
import net.dongshuai.search.service.ItemSearchService;

/**
 * 导入索引库
 * @author 董帅
 */
@Component
public class ItemSearchListener implements MessageListener {
    
    @Autowired
    private ItemSearchService itemSearchService;

    @Override
    public void onMessage(Message message) {
        TextMessage textMessage = (TextMessage)message;
        try {
            //json字符串
            String text = textMessage.getText();
            List<TbItem> itemList = JSON.parseArray(text, TbItem.class);
            itemSearchService.importList(itemList);
        } catch (JMSException e) {
            e.printStackTrace();
        }
    }

}
