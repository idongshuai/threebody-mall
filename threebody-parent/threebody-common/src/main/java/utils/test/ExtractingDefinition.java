package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.processon.common.util.Validator;
import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 获取文件定义中的纯文本内容和图片链接
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/3/19
 */
public class ExtractingDefinition {

    public static void main(String[] args) {
        try {
            //脑图
            String mindDef = FileUtils.readFileToString(new File("C:\\Users\\Administrator\\Desktop\\mind.json"));
            Map<String, Object> textAndLink = getTextAndLink(mindDef);
            System.out.println(textAndLink.get("text"));        //文本
            System.out.println(textAndLink.get("image_url"));   //图片
            System.out.println(textAndLink.get("link"));        //附件链接

            //流程图
            String flowDef = FileUtils.readFileToString(new File("C:\\Users\\Administrator\\Desktop\\flow.json"));
            Map<String, Object> flowTextAndLink = getTextAndLink(flowDef);
            System.out.println(flowTextAndLink.get("text"));        //文本
            System.out.println(flowTextAndLink.get("image_url"));   //图片
            System.out.println(flowTextAndLink.get("link"));        //附件链接
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取文件定义中的纯文本内容和图片链接
     *
     * @param def
     * @date 2021/1/29
     */
    public static Map<String, Object> getTextAndLink(String def) {
        Map<String, Object> map = new HashMap<>();
        //解析文件定义
        StringBuilder text = new StringBuilder();
        List<String> links = new ArrayList<>();
        List<String> imageUrls = new ArrayList<>();
        JSONObject defObj = JSON.parseObject(def);
        JSONObject elements = defObj.getJSONObject("elements");
        JSONObject page = defObj.getJSONObject("page");
        //流程图
        if (elements != null && page != null) {
            getFlowTextAndLink(elements, text, links, imageUrls);
        } else {
            //脑图 获取节点文本和链接
            getNodeTextAndLink(defObj, text, links, imageUrls);
        }

        String regExHtml = "<[^>]+>"; //定义HTML标签的正则表达式
        Pattern pattern = Pattern.compile(regExHtml, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(text.toString());
        String textStr = matcher.replaceAll(""); //过滤html标签

        map.put("result", "success");
        map.put("text", textStr);
        map.put("image_url", imageUrls);
        map.put("link", links);
        return map;
    }

    /**
     * 获取流程图文本和链接
     *
     * @param elements
     * @return void
     * @date 2021/1/29
     */
    private static void getFlowTextAndLink(JSONObject elements, StringBuilder text, List<String> links, List<String> imageUrls) {
        Collection<Object> values = elements.values();
        if (CollectionUtils.isNotEmpty(values)) {
            for (Object value : values) {
                JSONObject ele = (JSONObject) value;
                //图片
                JSONObject fillStyle = ele.getJSONObject("fillStyle");
                if (fillStyle != null) {
                    String url = fillStyle.getString("fileId");
                    if (Validator.notEmpty(url)) {
                        imageUrls.add(url);
                    }
                }
                //图形链接
                JSONArray dataAttributes = ele.getJSONArray("dataAttributes");
                if (dataAttributes != null && dataAttributes.size() > 0) {
                    for (int i = 0; i < dataAttributes.size(); i++) {
                        JSONObject dataAttr = dataAttributes.getJSONObject(i);
                        String type = dataAttr.getString("type");
                        if (Validator.notEmpty(type) && "link".equals(type)) {
                            String dataAttrLink = dataAttr.getString("value");
                            if (Validator.notEmpty(dataAttrLink)) {
                                links.add(dataAttrLink);
                            }
                        }
                    }
                }

                //图形文本
                JSONArray textBlock = ele.getJSONArray("textBlock");
                if (textBlock != null && textBlock.size() > 0) {
                    for (int i = 0; i < textBlock.size(); i++) {
                        JSONObject textB = textBlock.getJSONObject(i);
                        String textBlockText = textB.getString("text");
                        if (Validator.notEmpty(textBlockText)) {
                            text.append(textBlockText).append(".");
                        }
                    }
                }

                //链接文本
                String linkerText = ele.getString("text");
                if (Validator.notEmpty(linkerText)) {
                    text.append(linkerText).append(".");
                }
            }
        }
    }

    /**
     * 获取节点文本和链接
     *
     * @param defObj
     * @return void
     * @date 2021/1/29
     */
    private static void getNodeTextAndLink(JSONObject defObj, StringBuilder sb, List<String> links, List<String> imageUrls) {
        try {
            if (defObj != null) {
                //tags
                JSONArray tags = defObj.getJSONArray("tags");
                if (tags != null && tags.size() > 0) {
                    for (int i = 0; i < tags.size(); i++) {
                        JSONObject tag = tags.getJSONObject(i);
                        String text = tag.getString("text");
                        if (Validator.notEmpty(text)) {
                            sb.append(text).append(".");
                        }
                    }
                }
                //title
                String title = defObj.getString("title");
                if (Validator.notEmpty(title)) {
                    sb.append(title).append(".");
                }
                //background
                String background = defObj.getString("background");
                if (Validator.notEmpty(background)) {
                    if (background.contains("(") && background.contains(")")) {
                        String backUrl = background.substring(background.indexOf("(") + 1, background.indexOf(")"));
                        imageUrls.add(backUrl);
                    }
                }
                //task
                JSONObject task = defObj.getJSONObject("task");
                if (task != null) {
                    String assigned = task.getString("assigned");
                    if (Validator.notEmpty(assigned)) {
                        sb.append(assigned).append(".");
                    }
                }
                //link
                JSONObject link = defObj.getJSONObject("link");
                if (link != null) {
                    String linkValue = link.getString("value");
                    if (Validator.notEmpty(linkValue)) {
                        links.add(linkValue);
                    }
                    String linkTitle = link.getString("title");
                    if (Validator.notEmpty(linkTitle)) {
                        sb.append(linkTitle).append(".");
                    }
                }
                //image
                JSONObject image = defObj.getJSONObject("image");
                if (image != null) {
                    String url = image.getString("url");
                    if (Validator.notEmpty(url)) {
                        imageUrls.add(url);
                    }
                }
                //note
                String note = defObj.getString("note");
                if (Validator.notEmpty(note)) {
                    sb.append(note).append(".");
                }

                //子节点
                JSONArray children = defObj.getJSONArray("children");
                if (children != null && children.size() > 0) {
                    for (int i = 0; i < children.size(); i++) {
                        JSONObject child = children.getJSONObject(i);
                        getNodeTextAndLink(child, sb, links, imageUrls);
                    }
                }
                //左侧子节点
                JSONArray leftChildren = defObj.getJSONArray("leftChildren");
                if (leftChildren != null && leftChildren.size() > 0) {
                    for (int i = 0; i < leftChildren.size(); i++) {
                        JSONObject child = leftChildren.getJSONObject(i);
                        getNodeTextAndLink(child, sb, links, imageUrls);
                    }
                }
                //概要
                JSONArray summaries = defObj.getJSONArray("summaries");
                if (summaries != null && summaries.size() > 0) {
                    for (int i = 0; i < summaries.size(); i++) {
                        JSONObject child = summaries.getJSONObject(i);
                        getNodeTextAndLink(child, sb, links, imageUrls);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
