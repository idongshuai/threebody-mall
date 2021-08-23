package com.processon.action.controller.manager;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.action.entity.UserConfig;
import com.processon.action.service.UserConfigService;
import com.processon.common.util.QiniuUtil;
import com.processon.common.util.Validator;
import com.processon.persistence.redis.RedisChartManager;
import com.processon.web.annotation.ManageAuth;
import com.processon.web.annotation.SystemLog;
import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * a
 *
 * @author ds
 * @version 1.0.0
 * @date 2020/12/30
 */
@Controller
@RequestMapping("/a")
public class NewFunctionController {

    @ManageAuth
    @SystemLog("s")
    @RequestMapping("/setStatus/{status}")
    public ModelAndView setStatus(HttpServletRequest request, ModelMap modelMap, @PathVariable String status) {
        try {
            RedisChartManager redis = RedisChartManager.getInstance();
            redis.set(NEW_FUNCTION_STATUS_PREFIX, status);

            modelMap.put("result", "success");
        } catch (Exception e) {
            e.printStackTrace();
            modelMap.put("result", "error");
            modelMap.put("msg", "系统异常");
        }

        return new ModelAndView("jsonView");
    }

}
