package net.dongshuai.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.alibaba.dubbo.config.annotation.Reference;

import net.dongshuai.pojo.TbSeller;
import net.dongshuai.sellergoods.service.SellerService;

/**
 * 认证类
 * @author 董帅
 */
public class UserDetailsServiceImpl implements UserDetailsService {
    
    private SellerService sellerService;
    

    public void setSellerService(SellerService sellerService) {
        this.sellerService = sellerService;
    }


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        TbSeller seller = sellerService.findOne(username);
        
        //构建一个角色列表
        List<GrantedAuthority> grantAuths = new ArrayList<>();
        grantAuths.add(new SimpleGrantedAuthority("ROLE_SELLER"));
        
        if (seller != null) {
            if ("1".equals(seller.getStatus())) {
                return new User(username, seller.getPassword(), grantAuths);
            } else {
                return null;
            }
        } else {
            return null;
        }
    }

}
