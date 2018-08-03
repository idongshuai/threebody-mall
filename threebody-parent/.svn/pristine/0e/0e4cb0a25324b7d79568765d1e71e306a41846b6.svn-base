package net.dongshuai.portal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;

import net.dongshuai.content.service.ContentService;
import net.dongshuai.pojo.TbContent;

/**
 * 广告
 * @author 董帅
 */
@RestController
@RequestMapping("/content")
public class ContentController {
    
    @Reference
    private ContentService contentService;
    
    /**
     * 根据广告分类id查询广告列表
     * @param categoryId
     * @return
     */
    @RequestMapping("/findByCategoryId")
    public List<TbContent> findByCategoryId(Long categoryId) {
        return contentService.findByCategoryId(categoryId);
        
    }
    

}
