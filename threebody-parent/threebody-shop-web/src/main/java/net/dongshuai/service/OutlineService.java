package com.processon.action.service;

import com.alibaba.fastjson.JSONObject;
import com.processon.action.entity.Chart;
import com.processon.web.request.RequestParamKS;
import org.springframework.ui.ModelMap;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * 脑图大纲业务逻辑类
 *
 * @author ds
 * @version 1.0.0
 * @date 2020/5/14
 */
public interface OutlineService {

    /**
     * 脑图大纲增量存储
     *
     * @date 2020/5/14
     * @return void
     */
    ModelAndView msg(String msgStr, RequestParamKS requestParamKS, ModelMap map) throws Exception;

    void msg_local(JSONObject msgObj, HttpServletRequest request, Chart chart);
}
