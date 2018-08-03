package net.dongshuai.search.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.dubbo.config.annotation.Reference;

import net.dongshuai.search.service.ItemSearchService;

/**
 * 搜索
 * @author 董帅
 */
@RestController
@RequestMapping("/itemSearch")
public class ItemSearchController {
    
    @Reference
    private ItemSearchService itemSearchService;

    /**
     * 搜索
     * @param searchMap
     * @return
     */
    @RequestMapping("/search")
    public Map search(@RequestBody Map searchMap) {
        return itemSearchService.srearch(searchMap);
    }
}
