package com.processon.common.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.action.service.impl.DiagramsServiceImpl;
import com.processon.common.config.AppConfig;
import com.processon.common.config.constants.TdocsConstants;
import com.processon.persistence.redis.RedisChartManager;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.Duration;
import java.util.HashMap;
import java.util.Map;

/**
 * 搜狗开放平台工具类
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/8/13
 */
public class SougouUtil {

    private static final Logger logger = LoggerFactory.getLogger(DiagramsServiceImpl.class);

    /**
     * 获取token
     * @date 2021/8/13
     * @param
     * @return java.lang.String
     */
    public static String getToken() {
        try {
            RedisChartManager redis = RedisChartManager.getInstance();
            String tokenKey = "sougou_ocr_token";
            String redisToken = redis.get(tokenKey);
            if (StringUtils.isNotBlank(redisToken)) {
                return redisToken;
            } else {
                JSONObject jsonRequestBody = new JSONObject();
                jsonRequestBody.put("appid", AppConfig.getProperty("tdocs.ocr.appid"));
                jsonRequestBody.put("appkey", AppConfig.getProperty("tdocs.ocr.appkey"));
                jsonRequestBody.put("exp", String.format("%ds", Duration.ofHours(1).getSeconds()));

                HttpClientResult result = HttpUtil.doPost(TdocsConstants.SOUGOU_TOKEN_URL,
                        jsonRequestBody.toJSONString());
                if (result.getCode() == 200) {
                    JSONObject jsonResponseBody = JSON.parseObject(result.getContent());
                    String token = jsonResponseBody.getString("token");
                    if (StringUtils.isNotBlank(token)) {
                        redis.setex(tokenKey, 55 * 60, token);
                    }
                    return token;
                }
                logger.error("[搜狗获取token] error, result: {}", JSON.toJSONString(result));
            }
        } catch (Exception e) {
            logger.error("[搜狗获取token] error", e);
        }
        return null;
    }

    /**
     * 搜狗OCR解析图片为流程图/脑图
     * @date 2021/8/13
     * @return java.lang.String
     */
    public static String imageOcr(byte[] bytes, String type, String reqId) {
        try {
            //请求头
            Map<String, String> headers = new HashMap<>();
            headers.put("appid", AppConfig.getProperty("tdocs.ocr.appid"));
            headers.put("authorization", getToken());
            headers.put("uuid", reqId);

            //参数
            String imageBase64 = ImageUtil.encode(bytes);

            int featureType = "flow".equals(type) ? 33 : 34;

            JSONObject param = new JSONObject();
            JSONArray requests = new JSONArray();
            JSONObject requestJson = new JSONObject();
            JSONObject imageJson = new JSONObject();
            JSONArray features = new JSONArray();
            JSONObject featureObj = new JSONObject();
            JSONObject imageContext = new JSONObject();

            imageJson.put("content", imageBase64);
            requestJson.put("image", imageJson);

            featureObj.put("type", featureType);
            features.add(featureObj);
            requestJson.put("features", features);

            if ("flow".equals(type)) {
                imageContext.put("font", 1);
            }
            if ("mind".equals(type)) {
                JSONObject mindMapRootCoord = new JSONObject();
                mindMapRootCoord.put("x", 0);
                mindMapRootCoord.put("y", 0);
                imageContext.put("mind_map_root_coord", mindMapRootCoord);
            }
            JSONArray languageHints = new JSONArray();
            languageHints.add("zh-cmn-Hans");
            imageContext.put("language_hints", languageHints);
            requestJson.put("image_context", imageContext);

            requests.add(requestJson);
            param.put("requests", requests);
            param.put("req_id", reqId);

            System.out.println(param.toJSONString());

            HttpClientResult result = HttpUtil.doPostJson(TdocsConstants.SOUGOU_OCR_BATCH_ANNOTATE_IMAGES,
                    headers, param.toJSONString());
            if (result.getCode() == 200) {
                return result.getContent();
            } else {
                System.out.println(JSON.toJSONString(result));
                logger.error("[搜狗OCR解析图片为流程图/脑图] error, reqId:{}, type: {}, result: {}", reqId, type, JSON.toJSONString(result));
            }
        } catch (Exception e) {
            logger.error("[搜狗OCR解析图片为流程图/脑图] error, reqId:{}, type: {}", reqId, type, e);
        }
        return null;
    }

}
