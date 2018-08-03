package net.dongshuai.solrutil;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;

import net.dongshuai.mapper.TbItemMapper;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojo.TbItemExample;
import net.dongshuai.pojo.TbItemExample.Criteria;

/**
 * @author 董帅
 */
@Component
public class SolrUtils {
    
    @Autowired
    private TbItemMapper itemMapper;
    
    @Autowired
    private SolrTemplate solrTemplate;
    
    public void importItemData() {
        
        TbItemExample example = new TbItemExample();
        Criteria criteria = example.createCriteria();
        //审核通过的才导入
        criteria.andStatusEqualTo("1");
        
        List<TbItem> itemList = itemMapper.selectByExample(example);
        
        System.out.println("----商品列表--");
        for (TbItem item : itemList) {
            System.out.println(item.getId() + item.getTitle() + item.getPrice());
            
            //从数据库中提取规格json字符串, 转换成map
            Map specMap = JSON.parseObject(item.getSpec(), Map.class);
            item.setSpecMap(specMap);
            
        }
        solrTemplate.saveBeans(itemList);
        solrTemplate.commit();
        System.out.println("-----结束----");
    }

    public static void main(String[] args) {
        ApplicationContext context = 
                new ClassPathXmlApplicationContext("classpath*:spring/applicationContext*.xml");
        SolrUtils solrUtils = (SolrUtils) context.getBean("solrUtils");
        solrUtils.importItemData();
    }
}
