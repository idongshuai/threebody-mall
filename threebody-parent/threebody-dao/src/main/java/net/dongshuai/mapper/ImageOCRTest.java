package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.common.config.AppConfig;
import com.processon.common.util.FileUtil;
import com.processon.common.util.ImageOcrUtil;
import com.processon.common.util.ImageUtil;
import com.processon.common.util.SougouUtil;
import org.bson.types.ObjectId;
import org.junit.Test;

import java.io.File;
import java.io.IOException;

/**
 * OCR
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/8/11
 */
public class ImageOCRTest {

    //OCR转流程图
    @Test
    public void testOcr2Flow() {
        String content = FileUtil.getTextFromFile(new File("C:\\Users\\Administrator\\Desktop\\ocr_json.txt"));
        JSONObject responseJson = JSON.parseObject(content);
        String def = "";

        JSONArray objects = responseJson.getJSONArray("objects");//flow
        JSONArray edges = responseJson.getJSONArray("edges");//flow
        if (objects != null || edges != null) {
            def = ImageOcrUtil.parseOcr2FlowDef(objects, edges);
        }

        System.out.println(def);
    }


    //OCR转脑图
    @Test
    public void testOcr2Mind() {
        String content = FileUtil.getTextFromFile(new File("C:\\Users\\Administrator\\Desktop\\ocr_mind.json"));
        JSONObject responseJson = JSON.parseObject(content);
        String def = "";

        JSONArray mindMapRootNode = responseJson.getJSONArray("mind_map_root_node");//mind
        if (mindMapRootNode != null) {
            def = ImageOcrUtil.parseOcr2MindDef(mindMapRootNode);
        }

        System.out.println(def);
    }

    //调用搜狗OCR
    @Test
    public void testSougouOcr() throws IOException {
        AppConfig.loadSysProperties("D:\\java_dev\\tencent\\ProcessOnTencent\\WebRoot\\WEB-INF\\config\\system\\");

        byte[] bytes = ImageUtil.image2byte("C:\\Users\\Administrator\\Desktop\\mind10.png");
        String reqId = new ObjectId().toString();
        String mind = SougouUtil.imageOcr(bytes, "mind", reqId);
        System.out.println(mind);

    }


}