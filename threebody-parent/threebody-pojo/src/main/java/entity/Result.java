package com.processon.web.response;

import com.processon.common.config.constants.ResultCode;

import java.io.Serializable;
import java.util.HashMap;

/**
 * 控制器类返回结果
 * @author ds
 * @date 2020/1/3
 * @version 1.0.0
 */
public class Result<T> implements Serializable {

    private static final long serialVersionUID = 2991039497165570450L;

    private String code;//响应码
    private String result;//是否成功
    private String msg;//返回信息
    private T data;//返回数据

    public Result() {
    }

    public Result(String result, String msg) {
        this.result = result;
        this.msg = msg;
    }

    public Result(String result, String msg, T data) {
        this.result = result;
        this.msg = msg;
        this.data = data;
    }

    public Result(String code, String result, String msg, T data) {
        this.code = code;
        this.result = result;
        this.msg = msg;
        this.data = data;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    // 自定义响应信息 ----------------------------------------------------------------
    public static <T> Result response(String result, String code, String msg, T data) {
        Result<Object> responseResult = new Result<>(code, result, msg, null);
        if (data == null) {
            // 若返回数据为null 统一返回给前端{}
            responseResult.setData(new HashMap<>(1));
        } else {
            responseResult.setData(data);
        }
        return responseResult;
    }

    // 返回成功信息 ----------------------------------------------------------------
    public static Result success() {
        return Result.response(ResultCode.SUCCESS, ResultCode.code_success, ResultCode.SUCCESS, null);
    }

    public static Result success(String msg) {
        return Result.response(ResultCode.SUCCESS, ResultCode.code_success, msg, null);
    }

    public static Result success(String result, String msg) {
        return Result.response(result, ResultCode.code_success, msg, null);
    }

    public static <T> Result success(T data) {
        return Result.response(ResultCode.SUCCESS, ResultCode.code_success, ResultCode.SUCCESS, data);
    }

    public static <T> Result success(String result, String msg, T data) {
        return Result.response(result, ResultCode.code_success, msg, data);
    }



    // 返回失败信息 ----------------------------------------------------------------
    public static Result failure() {
        return Result.response(ResultCode.ERROR, "", ResultCode.ERROR, null);
    }

    public static Result failure(String msg) {
        return Result.response(ResultCode.ERROR, "", msg, null);
    }

    public static Result failure(String result, String msg) {
        return Result.response(result, "", msg, null);
    }

    public static <T> Result failure(T data) {
        return Result.response(ResultCode.ERROR, "", ResultCode.ERROR, data);
    }

    public static <T> Result failure(String result, String msg, T data) {
        return Result.response(result, "", msg, data);
    }

}
