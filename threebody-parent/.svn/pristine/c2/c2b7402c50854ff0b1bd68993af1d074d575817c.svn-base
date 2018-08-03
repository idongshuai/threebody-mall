package net.dongshuai.manager.controller;
import java.util.List;

import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Message;
import javax.jms.Session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.jms.core.MessageCreator;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;
import com.alibaba.fastjson.JSON;

import entity.PageResult;
import entity.Result;
import net.dongshuai.pojo.TbGoods;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojogroup.GoodsGroup;
import net.dongshuai.sellergoods.service.GoodsService;
/**
 * controller
 * @author Administrator
 *
 */
@RestController
@RequestMapping("/goods")
public class GoodsController {

	@Reference
	private GoodsService goodsService;
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/findAll")
	public List<TbGoods> findAll(){			
		return goodsService.findAll();
	}
	
	
	/**
	 * 返回全部列表
	 * @return
	 */
	@RequestMapping("/findPage")
	public PageResult  findPage(int page,int rows){			
		return goodsService.findPage(page, rows);
	}
	
	/**
	 * 修改
	 * @param goods
	 * @return
	 */
	@RequestMapping("/update")
	public Result update(@RequestBody GoodsGroup goodsGroup){
		try {
			goodsService.update(goodsGroup);
			return new Result(true, "修改成功");
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "修改失败");
		}
	}	
	
	/**
	 * 获取实体
	 * @param id
	 * @return
	 */
	@RequestMapping("/findOne")
	public GoodsGroup findOne(Long id){
		return goodsService.findOne(id);		
	}
	
	
	@Autowired
	private Destination queueSolrDeleteDestination;
	
	@Autowired
	private Destination topicPageDeleteDestination;
	
	/**
	 * 批量删除
	 * @param ids
	 * @return
	 */
	@RequestMapping("/delete")
	public Result delete(final Long [] ids){
		try {
			goodsService.delete(ids);
			
			//从索引库中删除
			//itemSearchService.deleteByGoodsIds(Arrays.asList(ids));
			
			jmsTemplate.send(queueSolrDeleteDestination, new MessageCreator() {
                
                @Override
                public Message createMessage(Session session) throws JMSException {
                    return session.createObjectMessage(ids);
                }
            });
			
			
			//删除每个服务器上的商品详细页
			jmsTemplate.send(topicPageDeleteDestination, new MessageCreator() {
                
                @Override
                public Message createMessage(Session session) throws JMSException {
                    return session.createObjectMessage(ids);
                }
            });
			
			
			return new Result(true, "删除成功"); 
		} catch (Exception e) {
			e.printStackTrace();
			return new Result(false, "删除失败");
		}
	}
	
		/**
	 * 查询+分页
	 * @param brand
	 * @param page
	 * @param rows
	 * @return
	 */
	@RequestMapping("/search")
	public PageResult search(@RequestBody TbGoods goods, int page, int rows  ){
		return goodsService.findPage(goods, page, rows);		
	}
	
	
//	@Reference(timeout=100000)
//	private ItemSearchService itemSearchService;
	
	
	@Autowired
	private JmsTemplate jmsTemplate;
	
	//用于导入solr索引库的消息目标 (点对点)
	@Autowired
	private Destination queueSolrDestination;
	
	//用于生成商品详情页的消息目标 (发布订阅)
	@Autowired
	private Destination topicPageDestination;
	
	
	/**
	 * 批量修改状态
	 * @param ids
	 * @param status
	 */
	@RequestMapping("/updateStatus")
	public Result updateStatus(Long[] ids, String status) {
	    try {
            goodsService.updateStatus(ids, status);
            
            //如果审核通过
            if ("1".equals(status)) {
                //导入到索引库
                //得到需要导入的SKU列表
                List<TbItem> itemList = goodsService.findItemListByGoodsIdListAndStatus(ids, status);
                //转换为json 传输
                final String jsonString = JSON.toJSONString(itemList);
                
                //导入到solr
                //itemSearchService.importList(itemList);
                if(itemList.size()>0){              
                    //itemSearchService.importList(itemList);
                    
                    jmsTemplate.send(queueSolrDestination, new MessageCreator() {
                        
                        @Override
                        public Message createMessage(Session session) throws JMSException {
                            return session.createTextMessage(jsonString);
                        }
                    });
                    
                }else{
                    System.out.println("没有明细数据");
                }
                
                // 生成商品详细页
                for (final Long goodsId : ids) {
                    //itemPageService.genItemHtml(goodsId);
                    
                    jmsTemplate.send(topicPageDestination, new MessageCreator() {
                        
                        @Override
                        public Message createMessage(Session session) throws JMSException {
                            return session.createTextMessage(goodsId + "");
                        }
                    });
                }
            }
            
            return new Result(true, "修改状态成功!");
        } catch (Exception e) {
            e.printStackTrace();
            return new Result(false, "修改状态失败!");
        }
	}
	
	
	//@Reference(timeout=50000)
	//private ItemPageService itemPageService;
	
	
	/**
	 * 生成静态页面
	 * @param goodsId
	 */
	/*@RequestMapping("/genHtml")
	public void genHtml(Long goodsId) {
	    itemPageService.genItemHtml(goodsId);
	}*/
	
}
