package com.processon.web.response;

import com.processon.common.config.constants.ResultCode;

import java.util.LinkedHashMap;

/**
 * 返回结果map
 */
public class ResultMap extends LinkedHashMap<String, Object> {

    public static ResultMap success() {
        return ResultMap.success(ResultCode.SUCCESS, ResultCode.code_success, ResultCode.SUCCESS);
    }

    public static ResultMap success(String msg) {
        return ResultMap.success(ResultCode.SUCCESS, ResultCode.code_success, msg);
    }

    public static ResultMap success(String result, String code, String msg) {
        ResultMap re = new ResultMap();
        re.put("result", result);
        re.put("code", code);
        re.put("msg", msg);
        return re;
    }

    public static ResultMap failure() {
        return ResultMap.failure(ResultCode.ERROR, "", ResultCode.ERROR);
    }

    public static ResultMap failure(String msg) {
        return ResultMap.failure(ResultCode.ERROR, "", msg);
    }

    public static ResultMap failure(String result, String msg) {
        return ResultMap.failure(result, "", msg);
    }

    public static ResultMap failure(String result, String code, String msg) {
        ResultMap re = new ResultMap();
        re.put("result", result);
        re.put("code", code);
        re.put("msg", msg);
        return re;
    }

}
