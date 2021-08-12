package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.action.entity.User;
import com.processon.action.entity.tencent.TdocFileData;
import com.processon.action.entity.tencent.TdocOrder;
import com.processon.action.entity.tencent.TdocParam;
import com.processon.action.entity.tencent.TdocUserInfo;
import com.processon.common.config.constants.TdocsConstants;
import com.processon.common.util.FileUtil;
import com.processon.common.util.HttpClientResult;
import com.processon.common.util.HttpUtil;
import com.processon.common.util.SignUtil;
import com.processon.common.util.TdocsUtil;
import com.processon.common.util.Validator;
import org.junit.Test;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

/**
 * tdoc
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/1/12
 */
public class TdocTest {

    //解析文件
    @Test
    public void testGetdef() {
        try {
//            String url = "http://localhost:8086/diagrams/getdef"; // 测试环境
            String url = "https://test-tdocs.processon.com/diagrams/getdef"; // 测试环境

            Map<String, String> params = new HashMap<>();
            params.put("category", "pos");
            params.put("file_url", "https://tencent-docs-1251316161.cos.ap-guangzhou.myqcloud.com/3b774aa8493544eabb19f4afdd2c8cb2?q-sign-algorithm=sha1&q-ak=AKIDOaU77sym0yh8BzgXnmnvnPcq66qIKEOH&q-sign-time=1625480724;1625487924&q-key-time=1625480724;1625487924&q-header-list=&q-url-param-list=&q-signature=324ec6187b6495d94a01452ab6d16800cb91c9e6");
            params.put("user_id", "9076875acb534ee48e43323be38e52c6");
            params.put("encrypted_session", "FLFTNAANMTEHHAA8DYHG-A");
            params.put("client_id", "processon");
            params.put("timestamp", String.valueOf(System.currentTimeMillis()));

            String auth = SignUtil.sign(params, "a6ec2d5a55d8469da85d8bc9dac8fc61", "83c8e0fa9fdc096448c5528db3d83c5ff5054563ace5f2384d2d8572be2aac94");
            System.out.println("签名: " + auth);

            Map<String, String> headers = new HashMap<>();
            headers.put("Content-Type", "application/json");
            headers.put("Authorization", auth);

            HttpClientResult result = HttpUtil.doPostJson(url, headers, JSON.toJSONString(params));
            System.out.println(result.getCode());
            System.out.println(result.getContent());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    //测试获取文件信息
    @Test
    public void testFileData2() {
        //encrypted_session=EM-PONW7OPW-DA0AUEFH1G
        // &file_id=GsplZpwaubBQ
        // &user_id=fbd63c5f31934148944c76b2486d3a1f
        // &client_id=processon
        // &scene=cooperation
        // &category=mind
        // &trace_id=fbd63c5f31934148944c76b2486d3a1f_1610332239609

        TdocParam tdocParam = new TdocParam();
        tdocParam.setEncrypted_session("EM-PONW7OPW-DA0AUEFH1G");
        tdocParam.setFile_id("GsplZpwaubBQ");
        tdocParam.setUser_id("fbd63c5f31934148944c76b2486d3a1f");
        tdocParam.setClient_id("processon");
        tdocParam.setScene("cooperation");
        tdocParam.setCategory("mind");
        tdocParam.setTrace_id("fbd63c5f31934148944c76b2486d3a1f_1610332239609");


        Map<String, String> headers = new HashMap<>();
        headers.put("Client-Id", "processon");
        headers.put("Access-Token", tdocParam.getEncrypted_session());
        headers.put("Open-Id", tdocParam.getUser_id());
        headers.put("Trace-Id", tdocParam.getTrace_id());


        Map<String, String> params = new HashMap<>();
        params.put("fileID", tdocParam.getFile_id());
        params.put("usage", "view");
        params.put("scene", tdocParam.getScene());

        try {
            HttpClientResult result = HttpUtil.doGet(TdocsConstants.BASE_URL + TdocsConstants.PROCESSON_FILE_DATA, headers, params);
            int code = result.getCode();
            if (code == 200) {
                String content = result.getContent();
                System.out.println(content);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }



    //解析文件
    @Test
    public void testOrderSync() {
        try {
            String url = "http://120.92.107.64/order/sync"; // 测试环境

            //duration:1 is_renew:1 order_id:1 pre_order_id:test price:1 timestamp:1610610666565 uid:9076875acb534ee48e43323be38e52c6 vip_level:8

            TdocOrder tdocOrder = new TdocOrder();
            tdocOrder.setUid("9076875acb534ee48e43323be38e52c6");
            tdocOrder.setDuration(1);
            tdocOrder.setIs_renew(true);
            tdocOrder.setOrder_id("1");
            tdocOrder.setPre_order_id("test");
            tdocOrder.setPrice(1);
            tdocOrder.setTimestamp(String.valueOf(System.currentTimeMillis()));
            tdocOrder.setVip_level(8);

            Map<String, String> params = new HashMap<>();
            params.put("duration", String.valueOf(tdocOrder.getDuration()));
            params.put("is_renew", String.valueOf(tdocOrder.getIs_renew()));
            params.put("order_id", tdocOrder.getOrder_id());
            params.put("pre_order_id", tdocOrder.getPre_order_id());
            params.put("price", String.valueOf(tdocOrder.getPrice()));
            params.put("uid", tdocOrder.getUid());
            params.put("vip_level", String.valueOf(tdocOrder.getVip_level()));
            params.put("timestamp", tdocOrder.getTimestamp());


            String auth = SignUtil.sign(params, "a6ec2d5a55d8469da85d8bc9dac8fc61", "83c8e0fa9fdc096448c5528db3d83c5ff5054563ace5f2384d2d8572be2aac94");
            System.out.println("签名: " + auth);

            Map<String, String> headers = new HashMap<>();
            headers.put("Content-Type", "application/json");
            headers.put("Authorization", auth);

            HttpClientResult result = HttpUtil.doPostJson(url, headers, JSON.toJSONString(tdocOrder));
            System.out.println(result.getCode());
            System.out.println(result.getContent());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    @Test
    public void testFileData() {
        //https://tdocs.processon.com/diagrams/edit?
        // encrypted_session=CNXFB5BSPJWF4D-PBQ5YYW
        // &file_id=AYuyKWAyQjlb
        // &user_id=cdf4d07e9e5e42d89ba6aff9c342d1c8
        // &client_id=processon
        // &scene=cooperation
        // &category=mind

        TdocParam tdocParam = new TdocParam();
        tdocParam.setEncrypted_session("CNXFB5BSPJWF4D-PBQ5YYW");
        tdocParam.setUser_id("cdf4d07e9e5e42d89ba6aff9c342d1c8");
        tdocParam.setClient_id("processon");
        tdocParam.setScene("cooperation");
        tdocParam.setFile_id("AYuyKWAyQjlb");

        TdocFileData fileData = TdocsUtil.getFileData(tdocParam, TdocsConstants.USAGE_EDIT);
        System.out.println(JSON.toJSONString(fileData));

        String s = TdocsUtil.downloadDef(fileData.getDataURL());
        System.out.println(s);
    }


    @Test
    public void testSyncData() {
        TdocParam tdocParam = new TdocParam();
        tdocParam.setEncrypted_session("9N-3MSJ7NTS6G57YASYSQQ");
        tdocParam.setUser_id("304c07afc34745298e3f71d2315c9071");
        tdocParam.setClient_id("processon");
        tdocParam.setScene("cooperation");
        tdocParam.setFile_id("AbAXMKlawNuL");

        String def = "{\"page\":{\"lineJumps\":false,\"gridSize\":15,\"showGrid\":true,\"orientation\":\"portrait\",\"height\":1000,\"backgroundColor\":\"transparent\",\"width\":1402,\"padding\":20},\"elements\":{\"175f3dd7903789\":{\"to\":{\"y\":177,\"x\":771},\"id\":\"175f3dd7903789\",\"text\":\"请求新建\",\"linkerType\":\"broken\",\"name\":\"linker\",\"lineStyle\":{},\"dataAttributes\":[],\"points\":[{\"y\":177,\"x\":654},{\"y\":177,\"x\":654}],\"locked\":false,\"from\":{\"y\":177,\"x\":537},\"group\":\"\",\"props\":{\"zindex\":4}},\"175f3f0a4f808c\":{\"id\":\"175f3f0a4f808c\",\"to\":{\"y\":375,\"x\":778},\"linkerType\":\"broken\",\"text\":\"返回上传成功\",\"lineStyle\":{\"lineColor\":\"50,50,50\",\"lineStyle\":\"dashed\"},\"name\":\"linker\",\"from\":{\"y\":375,\"x\":1006},\"locked\":false,\"points\":[{\"y\":375,\"x\":892},{\"y\":375,\"x\":892}],\"dataAttributes\":[],\"group\":\"\",\"props\":{\"zindex\":13}},\"175f3dd7903c66\":{\"textBlock\":[{\"position\":{\"w\":\"w-20\",\"h\":\"30\",\"y\":\"0\",\"x\":\"10\"},\"text\":\"processon 模板页\"}],\"link\":\"\",\"lineStyle\":{},\"attribute\":{\"linkable\":false,\"visible\":true,\"container\":false,\"rotatable\":true,\"markerOffset\":5,\"collapsable\":false,\"collapsed\":false},\"parent\":\"\",\"children\":[],\"resizeDir\":[\"tl\",\"tr\",\"br\",\"bl\"],\"fontStyle\":{},\"dataAttributes\":[],\"shapeStyle\":{\"alpha\":1},\"id\":\"175f3dd7903c66\",\"anchors\":[],\"title\":\"生命线\",\"category\":\"uml_sequence\",\"name\":\"sequenceLifeLine\",\"path\":[{\"lineStyle\":{\"lineStyle\":\"dot\",\"lineWidth\":2},\"fillStyle\":{\"type\":\"none\"},\"actions\":[{\"action\":\"move\",\"y\":\"30\",\"x\":\"w*(1/2)\"},{\"action\":\"line\",\"y\":\"h\",\"x\":\"w*(1/2)\"}]},{\"actions\":[{\"action\":\"move\",\"y\":\"0\",\"x\":\"0\"},{\"action\":\"line\",\"y\":\"0\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"0\"},{\"action\":\"close\"}]}],\"fillStyle\":{},\"locked\":false,\"group\":\"\",\"props\":{\"w\":129.96875,\"h\":429.75,\"y\":102.625,\"angle\":0,\"zindex\":9,\"x\":219.578125}},\"175f3ef15f1343\":{\"to\":{\"y\":236,\"x\":1009},\"id\":\"175f3ef15f1343\",\"text\":\"（2）没有上传参数，\\n请求获取文件上传信息\",\"linkerType\":\"broken\",\"name\":\"linker\",\"lineStyle\":{\"lineColor\":\"102,178,255\"},\"dataAttributes\":[],\"points\":[{\"y\":236,\"x\":892},{\"y\":236,\"x\":892}],\"locked\":false,\"from\":{\"y\":236,\"x\":775},\"group\":\"\",\"props\":{\"zindex\":12}},\"175f3dd79031af\":{\"to\":{\"y\":277,\"x\":780},\"id\":\"175f3dd79031af\",\"text\":\"返回上传信息\\n（包含上传URL）\",\"linkerType\":\"broken\",\"name\":\"linker\",\"lineStyle\":{\"lineColor\":\"102,178,255\",\"lineStyle\":\"dashed\"},\"dataAttributes\":[],\"points\":[{\"y\":277,\"x\":894},{\"y\":277,\"x\":894}],\"locked\":false,\"from\":{\"y\":277,\"x\":1008},\"group\":\"\",\"props\":{\"zindex\":5}},\"175f3dd7903bf8\":{\"textBlock\":[{\"position\":{\"w\":\"w-20\",\"h\":\"30\",\"y\":\"0\",\"x\":\"10\"},\"text\":\"用户\"}],\"link\":\"\",\"lineStyle\":{},\"attribute\":{\"linkable\":false,\"visible\":true,\"container\":false,\"rotatable\":true,\"markerOffset\":5,\"collapsable\":false,\"collapsed\":false},\"parent\":\"\",\"children\":[],\"resizeDir\":[\"tl\",\"tr\",\"br\",\"bl\"],\"fontStyle\":{},\"dataAttributes\":[],\"shapeStyle\":{\"alpha\":1},\"id\":\"175f3dd7903bf8\",\"anchors\":[],\"title\":\"生命线\",\"category\":\"uml_sequence\",\"name\":\"sequenceLifeLine\",\"path\":[{\"lineStyle\":{\"lineStyle\":\"dot\",\"lineWidth\":2},\"fillStyle\":{\"type\":\"none\"},\"actions\":[{\"action\":\"move\",\"y\":\"30\",\"x\":\"w*(1/2)\"},{\"action\":\"line\",\"y\":\"h\",\"x\":\"w*(1/2)\"}]},{\"actions\":[{\"action\":\"move\",\"y\":\"0\",\"x\":\"0\"},{\"action\":\"line\",\"y\":\"0\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"0\"},{\"action\":\"close\"}]}],\"fillStyle\":{},\"locked\":false,\"group\":\"\",\"props\":{\"w\":115.25,\"h\":426,\"y\":104.5,\"angle\":0,\"zindex\":1,\"x\":20}},\"175f3e683f54f3\":{\"id\":\"175f3e683f54f3\",\"to\":{\"y\":180,\"x\":1009},\"linkerType\":\"broken\",\"text\":\"（1）有可用于上传的参数，\\n直接上传\",\"lineStyle\":{},\"name\":\"linker\",\"from\":{\"y\":180,\"x\":775},\"locked\":false,\"points\":[{\"y\":180,\"x\":892},{\"y\":180,\"x\":892}],\"dataAttributes\":[],\"group\":\"\",\"props\":{\"zindex\":11}},\"175f3dd7903888\":{\"id\":\"175f3dd7903888\",\"to\":{\"y\":171.25,\"x\":529},\"linkerType\":\"broken\",\"text\":\"前端调用\",\"lineStyle\":{},\"name\":\"linker\",\"from\":{\"y\":171.25,\"x\":287},\"locked\":false,\"points\":[{\"y\":171.25,\"x\":408},{\"y\":171.25,\"x\":408}],\"dataAttributes\":[],\"group\":\"\",\"props\":{\"zindex\":10}},\"175f3f3a94a652\":{\"id\":\"175f3f3a94a652\",\"to\":{\"y\":380,\"x\":538},\"linkerType\":\"broken\",\"text\":\"返回新建成功\",\"lineStyle\":{\"lineColor\":\"50,50,50\",\"lineStyle\":\"dashed\"},\"name\":\"linker\",\"from\":{\"y\":380,\"x\":773},\"locked\":false,\"points\":[{\"y\":380,\"x\":655.5},{\"y\":380,\"x\":655.5}],\"dataAttributes\":[],\"group\":\"\",\"props\":{\"zindex\":15}},\"175f3dd7903194\":{\"to\":{\"y\":168.5,\"x\":280},\"id\":\"175f3dd7903194\",\"text\":\"模板页新建空白，\\n从模板新建\\n导入POS\",\"linkerType\":\"broken\",\"name\":\"linker\",\"lineStyle\":{},\"fontStyle\":{\"textAlign\":\"center\"},\"locked\":false,\"from\":{\"y\":168.5,\"x\":78.25},\"dataAttributes\":[],\"points\":[{\"y\":168.5,\"x\":179.125},{\"y\":168.5,\"x\":179.125}],\"group\":\"\",\"props\":{\"zindex\":6}},\"175f3dd7903fa9\":{\"textBlock\":[{\"position\":{\"w\":\"w-20\",\"y\":\"0\",\"h\":\"30\",\"x\":\"10\"},\"text\":\"processon后端\"}],\"link\":\"\",\"lineStyle\":{},\"attribute\":{\"linkable\":false,\"visible\":true,\"container\":false,\"rotatable\":true,\"markerOffset\":5,\"collapsable\":false,\"collapsed\":false},\"parent\":\"\",\"children\":[],\"resizeDir\":[\"tl\",\"tr\",\"br\",\"bl\"],\"fontStyle\":{},\"dataAttributes\":[],\"shapeStyle\":{\"alpha\":1},\"id\":\"175f3dd7903fa9\",\"anchors\":[],\"category\":\"uml_sequence\",\"title\":\"生命线\",\"name\":\"sequenceLifeLine\",\"fillStyle\":{},\"path\":[{\"lineStyle\":{\"lineStyle\":\"dot\",\"lineWidth\":2},\"fillStyle\":{\"type\":\"none\"},\"actions\":[{\"action\":\"move\",\"y\":\"30\",\"x\":\"w*(1/2)\"},{\"action\":\"line\",\"y\":\"h\",\"x\":\"w*(1/2)\"}]},{\"actions\":[{\"action\":\"move\",\"y\":\"0\",\"x\":\"0\"},{\"action\":\"line\",\"y\":\"0\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"0\"},{\"action\":\"close\"}]}],\"locked\":false,\"group\":\"\",\"props\":{\"w\":120.5,\"angle\":0,\"y\":102.625,\"h\":426,\"x\":715.5,\"zindex\":3}},\"175f3dd790321\":{\"textBlock\":[{\"position\":{\"w\":\"w-20\",\"h\":\"30\",\"y\":\"0\",\"x\":\"10\"},\"text\":\"腾讯文档模板页\"}],\"link\":\"\",\"lineStyle\":{},\"attribute\":{\"linkable\":false,\"visible\":true,\"container\":false,\"rotatable\":true,\"markerOffset\":5,\"collapsable\":false,\"collapsed\":false},\"parent\":\"\",\"children\":[],\"resizeDir\":[\"tl\",\"tr\",\"br\",\"bl\"],\"fontStyle\":{},\"dataAttributes\":[],\"shapeStyle\":{\"alpha\":1},\"id\":\"175f3dd790321\",\"anchors\":[],\"title\":\"生命线\",\"category\":\"uml_sequence\",\"name\":\"sequenceLifeLine\",\"path\":[{\"lineStyle\":{\"lineStyle\":\"dot\",\"lineWidth\":2},\"fillStyle\":{\"type\":\"none\"},\"actions\":[{\"action\":\"move\",\"y\":\"30\",\"x\":\"w*(1/2)\"},{\"action\":\"line\",\"y\":\"h\",\"x\":\"w*(1/2)\"}]},{\"actions\":[{\"action\":\"move\",\"y\":\"0\",\"x\":\"0\"},{\"action\":\"line\",\"y\":\"0\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"0\"},{\"action\":\"close\"}]}],\"fillStyle\":{},\"locked\":false,\"group\":\"\",\"props\":{\"w\":123.1875,\"h\":442.875,\"y\":102.625,\"angle\":0,\"zindex\":7,\"x\":474.8125}},\"175f3f0d7ca92c\":{\"id\":\"175f3f0d7ca92c\",\"to\":{\"y\":325,\"x\":1010},\"linkerType\":\"broken\",\"text\":\"上传文件\",\"lineStyle\":{\"lineColor\":\"102,178,255\"},\"name\":\"linker\",\"from\":{\"y\":325,\"x\":776},\"locked\":false,\"points\":[{\"y\":325,\"x\":893},{\"y\":325,\"x\":893}],\"dataAttributes\":[],\"group\":\"\",\"props\":{\"zindex\":14}},\"175f3dd7903c61\":{\"textBlock\":[{\"position\":{\"w\":\"w-20\",\"h\":\"30\",\"y\":\"0\",\"x\":\"10\"},\"text\":\"腾讯文档后端\"}],\"link\":\"\",\"lineStyle\":{},\"attribute\":{\"linkable\":false,\"visible\":true,\"container\":false,\"rotatable\":true,\"markerOffset\":5,\"collapsable\":false,\"collapsed\":false},\"parent\":\"\",\"children\":[],\"resizeDir\":[\"tl\",\"tr\",\"br\",\"bl\"],\"fontStyle\":{},\"dataAttributes\":[],\"shapeStyle\":{\"alpha\":1},\"id\":\"175f3dd7903c61\",\"anchors\":[],\"title\":\"生命线\",\"category\":\"uml_sequence\",\"name\":\"sequenceLifeLine\",\"path\":[{\"lineStyle\":{\"lineStyle\":\"dot\",\"lineWidth\":2},\"fillStyle\":{\"type\":\"none\"},\"actions\":[{\"action\":\"move\",\"y\":\"30\",\"x\":\"w*(1/2)\"},{\"action\":\"line\",\"y\":\"h\",\"x\":\"w*(1/2)\"}]},{\"actions\":[{\"action\":\"move\",\"y\":\"0\",\"x\":\"0\"},{\"action\":\"line\",\"y\":\"0\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"w\"},{\"action\":\"line\",\"y\":\"30\",\"x\":\"0\"},{\"action\":\"close\"}]}],\"fillStyle\":{},\"locked\":false,\"group\":\"\",\"props\":{\"w\":143.375,\"h\":442.875,\"y\":102.625,\"angle\":0,\"zindex\":2,\"x\":938.625}}}}";

        JSONObject syncData = TdocsUtil.syncData(tdocParam, def);
        System.out.println(syncData);

    }


    @Test
    public void testUploadImage() {
        TdocParam tdocParam = new TdocParam();
        tdocParam.setEncrypted_session("FLFTNAANMTEHHAA8DYHG-A");
        tdocParam.setUser_id("9076875acb534ee48e43323be38e52c6");
        tdocParam.setClient_id("processon");

        tdocParam.setFile_id("123$abc");
        tdocParam.setCategory("flowchart");
        tdocParam.setScene("cooperation");

//        String s = uploadImage(tdocParam, "C:\\Users\\ds\\Desktop\\所有图片格式\\无ssss标题.jpeg",
//                null, null, "无ssss标题.jpeg");

        String s = TdocsUtil.uploadImage(tdocParam, null,
                FileUtil.getBytesFromFile(new File("C:\\Users\\ds\\Desktop\\所有图片格式\\无ssss标题.jpeg")), null, "无ssss标题.jpeg");


        System.out.println(s);

    }


    @Test
    public void testUserInfo() {
        try {
            //https://test-tdocs.processon.com/diagrams/edit
            // ?encrypted_session=C936XTD9PIGGGVVI9RWP4A
            // &file_id=MOjOOzVvLKyx
            // &user_id=cdf4d07e9e5e42d89ba6aff9c342d1c8
            // &client_id=processon
            // &scene=cooperation
            // &category=mind
            // &trace_id=cdf4d07e9e5e42d89ba6aff9c342d1c8_1625561049146
            // &platform=1000&agent=8000

            TdocParam tdocParam = new TdocParam();
            tdocParam.setEncrypted_session("C936XTD9PIGGGVVI9RWP4A");
            tdocParam.setUser_id("cdf4d07e9e5e42d89ba6aff9c342d1c8");
            tdocParam.setClient_id("processon");
            tdocParam.setScene("cooperation");
            tdocParam.setFile_id("MOjOOzVvLKyx");
            tdocParam.setTrace_id("cdf4d07e9e5e42d89ba6aff9c342d1c8_1625561049146");


//        TdocUserInfo userInfo = getUserInfo(tdocParam);
            Map<String, String> headers = new HashMap<>();
            headers.put("Client-Id", "processon");
            headers.put("Access-Token", tdocParam.getEncrypted_session());
            headers.put("Open-Id", tdocParam.getUser_id());
            headers.put("Trace-Id", tdocParam.getTrace_id());
            //Cookie正式请求不需要带上
            headers.put("Cookie", "dev_route_id=600; fd=history;");

            Map<String, String> params = new HashMap<>();
            params.put("fileID", tdocParam.getFile_id());

            System.out.println(headers);
            System.out.println(params);

            HttpClientResult result = HttpUtil.doGet(TdocsConstants.BASE_URL + TdocsConstants.PROCESSON_USERINFO, headers, params);
            int code = result.getCode();
            if (code == 200) {
                String content = result.getContent();
                System.out.println("content:    " + content);
                JSONObject userInfoJson = JSONObject.parseObject(content);
                if (userInfoJson != null) {
                    int ret = userInfoJson.getIntValue("ret");//业务响应码，0为成功
                    if (ret == 0) {
                        JSONObject data = userInfoJson.getJSONObject("data");
                        if (data != null) {
                            TdocUserInfo userInfo = JSON.parseObject(data.toJSONString(), TdocUserInfo.class);
                            System.out.println("TdocUserInfo:    " + JSON.toJSONString(userInfo));
                        }
                    }
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        }


    }

    @Test
    public void testUpload() {

        /*HttpResponse response;
        HttpClient client = HttpClients.createDefault();



        MultipartEntityBuilder entityBuilder = MultipartEntityBuilder.create();

//        entityBuilder.addBinaryBody("img",file, ContentType.MULTIPART_FORM_DATA,fileName);
        entityBuilder.addTextBody("userTel", userTel);
        entityBuilder.addTextBody("distinctId", distinctId);
        entityBuilder.addTextBody("buildingId", buildingId);
        entityBuilder.addTextBody("roomId", roomId);
        entityBuilder.addTextBody("equipmentId", equipmentId);
        entityBuilder.addTextBody("listDescription", listDescription);

        HttpEntity entity = entityBuilder.build();


        HttpPost post = new HttpPost(url);
        post.setEntity(entity);

        try {
            response = client.execute(post);
            Document doc = Jsoup.parse(EntityUtils.toString(response.getEntity()).replace("&nbsp;", ""));
            System.out.println(response);
            System.out.println(doc.text());

        } catch (IOException e) {
            e.printStackTrace();
        }*/
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //测试环境解析文件定义
    @Test
    public void testGetdef2() {
        try {
            String timestamp = String.valueOf(System.currentTimeMillis());
            System.out.println(timestamp);
            Map<String, String> map = new HashMap<>();
            String json = "{\n" +
                    "    \"category\":\"xmind\",\n" +
                    "    \"file_url\":\"http://qiniu.dongshuai.net/editor/file/1339771375582396416/20201218/err.xmind\",\n" +
                    "    \"user_id\":\"cdf4d07e9e5e42d89ba6aff9c342d1c8\",\n" +
                    "    \"encrypted_session\":\"CNXFB5BSPJWF4D-PBQ5YYW\",\n" +
                    "    \"client_id\":\"processon\",\n" +
                    "    \"timestamp\":\""+timestamp+"\"" +
                    "}";
            JSONObject jsonObject = JSONObject.parseObject(json);
            map.put("category", jsonObject.getString("category"));
            map.put("file_url", jsonObject.getString("file_url"));
            map.put("user_id", jsonObject.getString("user_id"));
            map.put("encrypted_session", jsonObject.getString("encrypted_session"));
            map.put("client_id", jsonObject.getString("client_id"));
            map.put("timestamp", jsonObject.getString("timestamp"));

            String auth = SignUtil.sign(map, "a6ec2d5a55d8469da85d8bc9dac8fc61", "83c8e0fa9fdc096448c5528db3d83c5ff5054563ace5f2384d2d8572be2aac94");
            System.out.println("签名: " + auth);

            Map<String, String> headers = new HashMap<>();
            headers.put("Content-Type", "application/json");
            headers.put("Authorization", auth);

            //{
            //    "category":"vsd",
            //    "file_url":"http://qiniu.dongshuai.net/editor/file/1334087103869566976/20201202/%E6%A0%B7%E5%BC%A01.vsd",
            //    "user_id":"cdf4d07e9e5e42d89ba6aff9c342d1c8",
            //    "encrypted_session":"CNXFB5BSPJWF4D-PBQ5YYW",
            //    "client_id":"processon",
            //    "timestamp":"1608259444994"
            //}
            Map<String, String> params = new HashMap<>();


            HttpClientResult httpClientResult = HttpUtil.doPostJson("https://tdocs.processon.com/diagrams/getdef", headers, json);
            System.out.println(httpClientResult.getContent());

        } catch (Exception e) {
            e.printStackTrace();
        }

    }


    //测试环境新建
    @Test
    public void testNewEmpty() {
        try {
            String timestamp = String.valueOf(System.currentTimeMillis());
            System.out.println(timestamp);
            Map<String, String> map = new HashMap<>();
            String json = "{\n" +
                    "    \"category\":\"mind\",\n" +
                    "    \"user_id\":\"cdf4d07e9e5e42d89ba6aff9c342d1c8\",\n" +
                    "    \"encrypted_session\":\"CNXFB5BSPJWF4D-PBQ5YYW\",\n" +
                    "    \"client_id\":\"processon\",\n" +
                    "    \"template_id\":\"\",\n" +
                    "    \"def_temp_id\":\"5fdc600ae4b0ef2ae67bd904\",\n" +
                    "    \"timestamp\":\""+timestamp+"\"\n" +
                    "}";
            JSONObject jsonObject = JSONObject.parseObject(json);
            map.put("category", jsonObject.getString("category"));
            map.put("user_id", jsonObject.getString("user_id"));
            map.put("encrypted_session", jsonObject.getString("encrypted_session"));
            map.put("client_id", jsonObject.getString("client_id"));
            map.put("template_id", jsonObject.getString("template_id"));
            map.put("def_temp_id", jsonObject.getString("def_temp_id"));
            map.put("timestamp", jsonObject.getString("timestamp"));

            String auth = SignUtil.sign(map, "a6ec2d5a55d8469da85d8bc9dac8fc61", "83c8e0fa9fdc096448c5528db3d83c5ff5054563ace5f2384d2d8572be2aac94");
            System.out.println("签名: " + auth);

            Map<String, String> headers = new HashMap<>();
            headers.put("Content-Type", "application/json");
            headers.put("Authorization", auth);

            Map<String, String> params = new HashMap<>();


            HttpClientResult httpClientResult = HttpUtil.doPostJson("https://tdocs.processon.com/diagrams/new_empty", headers, json);
            System.out.println(httpClientResult.getContent());

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    //同步用户
    @Test
    public void testSyncUser() {
        try {
            String textFromFile = FileUtil.getTextFromFile(new File("/opt/allTdocUser.json"));
            JSONObject jsonObject = JSON.parseObject(textFromFile);
            JSONArray userList = jsonObject.getJSONArray("userList");


            for (int i = 0; i < userList.size(); i++) {
                JSONObject jsonObject1 = userList.getJSONObject(i);
                User user = JSON.parseObject(jsonObject1.toJSONString(), User.class);
                System.out.println(JSON.toJSONString(user));

//                HttpClientResult httpClientResult = HttpUtil.doPostJson("http://119.29.105.51/user/syncTmp", headers, jsonObject1.toJSONString());
//                System.out.println(httpClientResult.getContent());
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    //测试tdocs回滚文件
    @Test
    public void testFileDataRollback() {
        try {
            Map<String, String> headers = new HashMap<>();
            headers.put("Client-Id", "processon");
            headers.put("Access-Token", "C936XTD9PIGGGVVI9RWP4A");
            headers.put("Open-Id", "cdf4d07e9e5e42d89ba6aff9c342d1c8");
            headers.put("Trace-Id", "cdf4d07e9e5e42d89ba6aff9c342d1c8_1624935975992");
            //Cookie正式请求不需要带上
            headers.put("Cookie", "dev_route_id=600; fd=history;");

            Map<String, String> params = new HashMap<>();
            params.put("fileID", "MkFHcAPHtVAA");
            params.put("versionID", "33");

            HttpClientResult result = HttpUtil.doPut(TdocsConstants.BASE_URL + TdocsConstants.PROCESSON_FILE_DATA, headers, params);
            System.out.println(result.getContent());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testDownload() {
        String def = TdocsUtil.downloadDef("https://tencent-docs-1251316161.cos.ap-guangzhou.myqcloud.com/c91c1ac53a8447d087486f34403a5d67?q-sign-algorithm=sha1&q-ak=AKIDOaU77sym0yh8BzgXnmnvnPcq66qIKEOH&q-sign-time=1625558310;1625561910&q-key-time=1625558310;1625561910&q-header-list=&q-url-param-list=response-content-disposition;response-expires;versionid&q-signature=68d624ed054ef7076a5d5a8979eb792610ce37c2&response-content-disposition=attachment%3Bfilename%3D%22%E6%97%A0%E6%A0%87%E9%A2%98%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE1.mind%22&response-expires=3600&versionid=MTg0NDUxMTg1ODQxOTY3NTU3ODc");
        System.out.println(def);
    }

    @Test
    public void testTemplate() {
        try {
            Map<String, String> headers = new HashMap<>();
            headers.put("Cookie", "po_wps_manager_key=ProcessOn2019___admin");

            JSONObject params = new JSONObject();
            params.put("limit", 20);
            params.put("offset", 11);
            params.put("order", "desc");
            params.put("page", "upload_template");

            HttpClientResult result = HttpUtil.doPostJson("http://wpstest.processon.com/manage/chart/template/tempQuery", headers, params.toJSONString());
            int code = result.getCode();
            if (code == 200) {
                String content = result.getContent();
                JSONObject resultJson = JSONObject.parseObject(content);
                if (resultJson != null) {
                    JSONArray rows = resultJson.getJSONArray("rows");
                    for (int i = 0; i < rows.size(); i++) {
                        JSONObject tempJson = rows.getJSONObject(i);
                        String url = "http://wpstest.processon.com/wwpstemplate/getdef?tempId=" + tempJson.getString("id");
                        HttpClientResult getDefResult = HttpUtil.doGet(url);
                        JSONObject defJson = JSON.parseObject(getDefResult.getContent());
                        if (tempJson.getString("category").contains("mind")) {
                            String def = defJson.getString("def");
                            JSONObject defObj = JSONObject.parseObject(def);
                            String themeId = defObj.getString("theme");
                            if(themeId != null){
                                System.out.println(tempJson.getString("id"));
                                System.out.println(themeId);
                            }
                        }
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
/*
    @Test
    public void testGetTemplateDef() {
        try {
            String url = "http://wpstest.processon.com//back/template/edit/flow/60cc0c41206482303259d2b1";
            HttpClientResult result = HttpUtil.doGet(url);
            System.out.println(JSON.toJSONString(result));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/

    @Test
    public void testTemplateDef() {
        try {
            String url = "http://wpstest.processon.com/wwpstemplate/getdef?tempId=" + "60cc0c41206482303259d2b1";
            HttpClientResult result = HttpUtil.doGet(url);
            System.out.println(result.getContent());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testTemplateTag() {
        try {
            Map<String, String> headers = new HashMap<>();
            headers.put("Client-Id", "processon");
            headers.put("Access-Token", "ZGPAFDRMP3WGAML1SIDRIW");
            headers.put("Open-Id", "697d6425e43a4ad6bd182517b3e33539");
//            headers.put("Access-Token", "ZLNE88_7NJAX9HFKHHHIOG");
//            headers.put("Open-Id", "044716b569e548b1a3b36c9ae72eef01");
            //Cookie正式请求不需要带上
            String testCookie = "dev_route_id=600; fd=po;";
            if (Validator.notEmpty(testCookie)) {
                headers.put("Cookie", testCookie);
            }

            Map<String, String> params = new HashMap<>();
            params.put("tempID", "hnyoypbfqbgm5");

            HttpClientResult result = HttpUtil.doGet(TdocsConstants.BASE_URL + TdocsConstants.PROCESSON_MALL_ITEM_TAGS, headers, params);
            System.out.println(result.getContent());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
