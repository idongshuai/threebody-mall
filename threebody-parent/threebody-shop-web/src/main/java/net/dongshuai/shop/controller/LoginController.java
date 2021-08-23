package net.dongshuai.shop.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 登录
 * @author 董帅
 */
@RestController
@RequestMapping("/login")
public class LoginController {
    
    /**
     * 显示用户名1
     */
    @RequestMapping("/name")
    public Map name() {
       String name = SecurityContextHolder.getContext().getAuthentication().getName(); 
       Map map = new HashMap<>();
       map.put("loginName", name);
       return map;
    }

}
