package com.processon.test;

import com.processon.common.util.FileUtil;
import com.processon.common.util.HttpUtil;
import com.processon.common.util.ImageUtil;
import org.junit.Test;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/7/30
 */
public class ExportImageTest {


    @Test
    public void testExportImageOCR() throws Exception {
        String url = "https://tdocsexport.processon.com/diagram_export/image_ocr";
        Map<String, String> header = new HashMap<>();
        header.put("X-Token", "210fac11d1584ed480f0c4070d17c50d");
        Map<String, String> params = new HashMap<>();
        params.put("definition", FileUtil.getTextFromFile(new File("C:\\Users\\Administrator\\Desktop\\def-ocr.json")));
        params.put("ignore", "definition");

        byte[] bytes = HttpUtil.doDownloadFile(url, header, params);
        System.out.println(bytes.length);
        ImageUtil.byte2image(bytes, "C:\\Users\\Administrator\\Desktop\\image-ocr"+System.currentTimeMillis()+".png");

        System.out.println("success");
    }

}
