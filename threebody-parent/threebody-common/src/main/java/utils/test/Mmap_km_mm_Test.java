package com.processon.test;

import com.alibaba.fastjson.JSONObject;
import com.processon.common.util.FileUtil;
import com.processon.common.util.FreeMindUtil;
import com.processon.common.util.KityMinderUtil;
import com.processon.common.util.MindManagerUtil;
import org.apache.commons.io.FileUtils;
import org.junit.Test;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

/**
 * .mmap  .km  .mm
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/5/10
 */
public class Mmap_km_mm_Test {

    @Test
    public void testMmap() {
        try {
            String mmapFilePath = "C:\\Users\\Administrator\\Desktop\\其他脑图\\Linux.mmap";
            FileInputStream inputStream = FileUtils.openInputStream(new File(mmapFilePath));
            JSONObject result = MindManagerUtil.mmap2Mind(inputStream);

            System.out.println(result.toJSONString());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @Test
    public void testMm() {
        try {
            String filePath = "C:\\Users\\Administrator\\Desktop\\其他脑图\\4P 分析.mm";
            String content = FileUtil.getTextFromFile(new File(filePath));
            JSONObject result = FreeMindUtil.mm2Mind(content);

            System.out.println(result.toJSONString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testKm() {
        try {
            String filePath = "C:\\Users\\Administrator\\Desktop\\其他脑图\\km-0511.km";
            String content = FileUtil.getTextFromFile(new File(filePath));
            JSONObject result = KityMinderUtil.km2Mind(content);

            System.out.println(result.toJSONString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
