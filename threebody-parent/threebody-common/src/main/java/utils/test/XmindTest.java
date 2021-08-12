package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.processon.action.entity.tencent.TdocParam;
import com.processon.common.config.constants.ResultCode;
import com.processon.common.config.constants.TdocsConstants;
import com.processon.common.util.DateUtil;
import com.processon.common.util.DiagramsUtil;
import com.processon.common.util.FileUtil;
import com.processon.common.util.HttpClientResult;
import com.processon.common.util.HttpUtil;
import com.processon.common.util.Validator;
import com.processon.common.util.XMindUtil;
import org.junit.Test;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

/**
 * 测试解析xmind
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/1/29
 */
public class XmindTest {

    @Test
    public void testXmind() {
        try {
            String url = "https://tdocs.processon.com/diagrams/edit?encrypted_session=7EPOP6XFM9GLF0W6D5WM0Q" +
                    "&file_id=KyZotcMFpmwe&user_id=cdf4d07e9e5e42d89ba6aff9c342d1c8&client_id=processon&scene=cooperation&category=mind&trace_id=cdf4d07e9e5e42d89ba6aff9c342d1c8_1611886240247";
            Map<String, String> urlMap = new HashMap<>();
            String substring = url.substring(url.indexOf("?") + 1);

            String[] split = substring.split("&");
            for (String s : split) {
                String[] split1 = s.split("=");
                urlMap.put(split1[0], split1[1]);
            }

//            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\xmind2020概要.xmind"; //json
//            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\xmind8（xml）.xmind";  //xml
            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\xmind8-概要bug.xmind";  //xml
//            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\测试导入xmindZen.xmind";  //xml
//            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\xmind-xml-另存.xmind";  //json
//            String xmindPath = "C:\\Users\\ds\\Desktop\\其他脑图\\xmind\\xmind2020子节点概要合并.xmind";  //json
            byte[] fileBytes = FileUtil.getBytesFromFile(new File(xmindPath));

            InputStream stream1 = new ByteArrayInputStream(fileBytes);
            InputStream stream2 = new ByteArrayInputStream(fileBytes);
            Map<String, String> resultMap = XMindUtil.analysisXMindAttachment(stream1);
            String result = resultMap.get("result");
            if (ResultCode.SUCCESS.equals(result)) {
                String def = XMindUtil.analysisXMindDef(stream2);

                JSONObject jsonObject = JSON.parseObject(def);
                //将自由主题移至JSONArray的后面
                JSONArray freeArr = new JSONArray();
                JSONArray children = jsonObject.getJSONArray("children");
                if (children != null && children.size() > 0) {
                    Iterator<Object> iterator = children.iterator();
                    while (iterator.hasNext()) {
                        JSONObject child = (JSONObject) iterator.next();
                        if (child.getBooleanValue("free")) {
                            freeArr.add(child);
                            iterator.remove();
                        }
                    }
                    if (freeArr.size() > 0) {
                        for (int i = 0; i < freeArr.size(); i++) {
                            JSONObject freeChild = freeArr.getJSONObject(i);
                            children.add(freeChild);
                        }
                    }
                }

                //合并分支主题的概要
                JSONArray summaries = jsonObject.getJSONArray("summaries");
                Set<String> removeSummaries = new HashSet<>();
                if (summaries != null && summaries.size() > 0) {
                    Iterator<Object> iterator = summaries.iterator();
                    while (iterator.hasNext()) {
                        JSONObject summary = (JSONObject) iterator.next();
                        String range = summary.getString("range");
                        String currId = summary.getString("id");
                        String currTitle = summary.getString("title");
                        if (Validator.notEmpty(range)) {
                            String[] rangeArr = range.split(",");
                            if (rangeArr.length == 2) {
                                int rangeStart = Integer.parseInt(rangeArr[0]);
                                int rangeEnd = Integer.parseInt(rangeArr[1]);

                                //和概要数组中的其他概要进行比较，当rangeStart相同时，rangeEnd小的舍弃，大的保留（或者合并）
                                for (int i = 0; i < summaries.size(); i++) {
                                    JSONObject otherSumm = summaries.getJSONObject(i);
                                    String otherRange = otherSumm.getString("range");
                                    String otherId = otherSumm.getString("id");
                                    if (Validator.notEmpty(otherRange)) {
                                        String[] otherRangeArr = otherRange.split(",");
                                        if (otherRangeArr.length == 2) {
                                            int otherRangeStart = Integer.parseInt(otherRangeArr[0]);
                                            int otherRangeEnd = Integer.parseInt(otherRangeArr[1]);
                                            if (!currId.equals(otherId)) {
                                                if (rangeStart >= otherRangeStart && rangeEnd <= otherRangeEnd) {
                                                    removeSummaries.add(currId);
                                                    JSONArray otherSummChilds = otherSumm.getJSONArray("children");
                                                    if (otherSummChilds == null) {
                                                        otherSummChilds = new JSONArray();
                                                    }
                                                    JSONObject currSumObj = new JSONObject();
                                                    currSumObj.put("id", currId);
                                                    currSumObj.put("title", currTitle);
                                                    currSumObj.put("parent", otherId);
                                                    currSumObj.put("children", summary.getJSONArray("children"));
                                                    otherSummChilds.add(currSumObj);
                                                    otherSumm.put("children", otherSummChilds);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    System.out.println("-- removeSummaries  ----------");
                    System.out.println(removeSummaries);
                    summaries = jsonObject.getJSONArray("summaries");
                    iterator = summaries.iterator();
                    while (iterator.hasNext()) {
                        JSONObject summary = (JSONObject) iterator.next();
                        String id = summary.getString("id");
                        if (removeSummaries.contains(id)) {
                            iterator.remove();
                        }
                    }

                }

                System.out.println(summaries.toJSONString());
                def = JSON.toJSONString(jsonObject, SerializerFeature.DisableCircularReferenceDetect);

                System.out.println(def);

                TdocParam tdocParam = new TdocParam();
                tdocParam.setEncrypted_session(urlMap.get("encrypted_session"));
                tdocParam.setUser_id(urlMap.get("user_id"));
                tdocParam.setClient_id("processon");
                tdocParam.setScene("cooperation");
                tdocParam.setFile_id(urlMap.get("file_id"));
                tdocParam.setTrace_id(urlMap.get("trace_id"));

                try {
                    Map<String, String> headers = new HashMap<>();
                    headers.put("Client-Id", "processon");
                    headers.put("Access-Token", tdocParam.getEncrypted_session());
                    headers.put("Open-Id", tdocParam.getUser_id());
                    headers.put("Trace-Id", tdocParam.getTrace_id());
                    headers.put("Cookie", "dev_route_id=600; fd=po;");

                    Map<String, String> params = new HashMap<>();
                    params.put("fileID", tdocParam.getFile_id());
                    params.put("fileData", def);
                    params.put("timestamp", String.valueOf(System.currentTimeMillis())); //时间戳,毫秒单位
                    params.put("scene", tdocParam.getScene());

                    HttpClientResult syncResult = HttpUtil.doPost(TdocsConstants.BASE_URL + TdocsConstants.PROCESSON_SYNC_DATA, headers, params);
                    System.out.println(JSON.toJSONString(syncResult));

                    //保存临时文件定义，用户编辑使用
                    JSONObject redisDef = new JSONObject();
                    redisDef.put("second", DateUtil.getCurrentSecond(new Date()));
                    redisDef.put("version", 1L);
                    redisDef.put("syncVersion", 1L);
                    redisDef.put("def", def);
                    DiagramsUtil.updateDefObjToRedis(tdocParam, JSON.toJSONString(redisDef));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            } else {
                System.out.println(resultMap.get("msg"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test1() throws Exception {
        InputStream inputStream = new FileInputStream(new File("c:\\Users\\Administrator\\Desktop\\x8_1.xmind"));
        InputStream inputStream2 = new FileInputStream(new File("c:\\Users\\Administrator\\Desktop\\x8_1.xmind"));
        Map<String, String> resultMap = XMindUtil.analysisXMindAttachment(inputStream);
        String result = resultMap.get("result");
        if (ResultCode.SUCCESS.equals(result)) {
            String def = XMindUtil.analysisXMindDef(inputStream2);
            System.out.println(def);
        }
    }
}
