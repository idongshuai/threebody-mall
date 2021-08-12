package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.common.util.FileUtil;
import com.processon.common.util.ImageOcrUtil;
import org.junit.Test;

import java.io.File;

/**
 * TODO
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/8/11
 */
public class ImageOCRTest {

    @Test
    public void testOcr2Flow() {
        String content = FileUtil.getTextFromFile(new File("C:\\Users\\Administrator\\Desktop\\ocr_json2.txt"));
        JSONObject responseJson = JSON.parseObject(content);
        String def = "";

        JSONArray objects = responseJson.getJSONArray("objects");//flow
        JSONArray edges = responseJson.getJSONArray("edges");//flow
        if (objects != null || edges != null) {
            def = ImageOcrUtil.parseOcr2FlowDef(objects, edges);
        }

        System.out.println(def);
    }

    @Test
    public void testAngle() {
        //"w": 200,"angle": 0,	"y": 68,"h": 200,"x": 77,

        //center：(177, 168)， 右上角顶点：(277, 68), 左上角：（77,68），
        // 左下角（77,268），右下角（277,268）

        double angle = Math.atan2(68 - 168, 277 - 177);
        double degrees = Math.toDegrees(angle);
        System.out.println("右上角：" + degrees);
        System.out.println("左上角：" + Math.toDegrees(Math.atan2(68 - 168, 77 - 177)));
        System.out.println("左下角：" + Math.toDegrees(Math.atan2(268 - 168, 77 - 177)));
        System.out.println("右下角：" + Math.toDegrees(Math.atan2(268 - 168, 277 - 177)));

        //center
        double centerX = 0;
        double centerY = 0;

        double point1X = 0;
        double point1Y = 0;

        double point2X = 0;
        double point2Y = 0;

        double point3X = 0;
        double point3Y = 0;

        double point4X = 0;
        double point4Y = 0;

        double point5X = 0;
        double point5Y = 0;

        double point6X = 0;
        double point6Y = 0;

        double point7X = 0;
        double point7Y = 0;

        String content = FileUtil.getTextFromFile(new File("C:\\Users\\Administrator\\Desktop\\test_angle.json"));
        JSONObject responseJson = JSON.parseObject(content);
        JSONObject elements = responseJson.getJSONObject("elements");
        for (String key : elements.keySet()) {
            JSONObject ele = elements.getJSONObject(key);
            JSONArray textBlock = ele.getJSONArray("textBlock");
            if (textBlock != null && textBlock.size() > 0) {
                JSONObject text = textBlock.getJSONObject(0);
                String textStr = text.getString("text");
                if (textStr.contains("end")) {
                    centerX = ele.getJSONObject("props").getDoubleValue("x") + ele.getJSONObject("props").getDoubleValue("w") / 2.0;
                    centerY = ele.getJSONObject("props").getDoubleValue("y") + ele.getJSONObject("props").getDoubleValue("h") / 2.0;
                } else if (textStr.contains("1")) {
                    point1X = ele.getJSONObject("props").getDoubleValue("x");
                    point1Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("2")) {
                    point2X = ele.getJSONObject("props").getDoubleValue("x");
                    point2Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("3")) {
                    point3X = ele.getJSONObject("props").getDoubleValue("x");
                    point3Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("4")) {
                    point4X = ele.getJSONObject("props").getDoubleValue("x");
                    point4Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("5")) {
                    point5X = ele.getJSONObject("props").getDoubleValue("x");
                    point5Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("6")) {
                    point6X = ele.getJSONObject("props").getDoubleValue("x");
                    point6Y = ele.getJSONObject("props").getDoubleValue("y");
                } else if (textStr.contains("7")) {
                    point7X = ele.getJSONObject("props").getDoubleValue("x");
                    point7Y = ele.getJSONObject("props").getDoubleValue("y");
                }
            }
        }

        System.out.println("center: " + centerX + ", " + centerY);

        double degrees1 = Math.toDegrees(Math.atan2(point1Y - centerY, point1X - centerX));
        System.out.println("1: " + point1X + ", " + point1Y + ", " + degrees1);
        String direction = pointDirectionOfCenter(centerX, centerY, point1X, point1Y);
        //右
        if (degrees1 >= -45.0 && degrees1 <= 45.0) {
            System.out.println("右");
        }
        //
        if (degrees1 >= -45.0 && degrees1 <= 45.0) {
            System.out.println("右");
        }

        double degrees2 = Math.toDegrees(Math.atan2(point2Y - centerY, point2X - centerX));
        System.out.println("2: " + point2X + ", " + point2Y + ", " + degrees2);


        double degrees3 = Math.toDegrees(Math.atan2(point3Y - centerY, point3X - centerX));
        System.out.println("3: " + point3X + ", " + point3Y + ", " + degrees3);

        double degrees4 = Math.toDegrees(Math.atan2(point4Y - centerY, point4X - centerX));
        System.out.println("4: " + point4X + ", " + point4Y + ", " + degrees4);

        double degrees5 = Math.toDegrees(Math.atan2(point5Y - centerY, point5X - centerX));
        System.out.println("5: " + point5X + ", " + point5Y + ", " + degrees5);

        double degrees6 = Math.toDegrees(Math.atan2(point6Y - centerY, point6X - centerX));
        System.out.println("6: " + point6X + ", " + point6Y + ", " + degrees6);

        double degrees7 = Math.toDegrees(Math.atan2(point7Y - centerY, point7X - centerX));
        System.out.println("7: " + point7X + ", " + point7Y + ", " + degrees7);


    }

    /**
     * 目标点相对于中心点的方向
     * 规定目标点(1)位于中点上方，(2)位于中点右方，(3)位于中点下方，(4)位于中点左方
     *
     * \                 /
     *  \       (1)     /
     *   \            /
     *    \          /
     *     \       /
     *      \     /
     *       \  /      (2)
     *  (4)   \/
     *        /\
     *       /  \
     *      /    \
     *     /      \
     *    /        \
     *   /    (3)   \
     *  /            \
     * /              \
     *
     *
     *
     * @date 2021/8/12
     * @param centerX
     * @param centerY
     * @param point1X
     * @param point1Y
     * @return java.lang.String
     */
    private String pointDirectionOfCenter(double centerX, double centerY, double point1X, double point1Y) {
        return null;
    }
}