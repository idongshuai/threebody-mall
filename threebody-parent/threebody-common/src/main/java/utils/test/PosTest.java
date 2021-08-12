package com.processon.test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.processon.action.entity.Chart;
import com.processon.common.util.DateUtil;
import com.processon.common.util.DuplicateNodeUtil;
import com.processon.common.util.FileUtil;
import com.processon.common.util.HttpClientResult;
import com.processon.common.util.HttpUtil;
import com.processon.common.util.StringUtil;
import org.junit.Test;

import java.io.File;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 处理脑图重复节点
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/3/12
 */
public class PosTest {

    //1.下载文件定义，2.检测重复节点，3.生成POS文件
    @Test
    public void testDownloadDefAndDupNodeAndGeneratePos() {
        String url = "https://tdocs.processon.com/diagrams/edit?encrypted_session=CVJUHIHKMUULIHMURHRW9G&file_id=KNfYBEkuEKwz&user_id=cdf4d07e9e5e42d89ba6aff9c342d1c8&client_id=processon&scene=cooperation&category=mind&trace_id=cdf4d07e9e5e42d89ba6aff9c342d1c8_1628754951779&platform=1000&agent=8000";
//        String url = "https://wps.processon.com/diagrams/edit?encrypted_session=nxKKaU8Ly-7L-ka0K6FG5GAIlzNbQaOfXu7YdQqt4S25gW_prt4ZmqP1sTyDAZ6MEWdTzIXf0A_Ifcdif2eu4z%3D%3D&file_id=127674835885&group_id=22751178&parent_id=0&user_id=757586";

        String def = getDefinitionNew(url);

        long start = System.currentTimeMillis();
        JSONObject json = JSON.parseObject(def);
        String[] errorIdArr = DuplicateNodeUtil.getErrorIdArr(def);
        System.out.println("重复节点：" + Arrays.toString(errorIdArr));
        String delDef = DuplicateNodeUtil.delDupNode(json, errorIdArr);
        long end = System.currentTimeMillis();

        System.out.println("耗时：" + ((end - start) / 1000.0));

        JSONObject from = JSONObject.parseObject(delDef);
        JSONObject page = from.getJSONObject("page");
        if (page != null) {
            //如果文件定义中没有richText，则设置richText为false
            boolean richText = page.getBooleanValue("richText");
            if (!richText) {
                page.put("richText", false);
            }
        }
        Map<String, Object> to = new HashMap<String, Object>();

        //元数据
        Map<String, Object> meta = getDiagramMetadata(null);
        to.put("meta", meta);
        //图形
        Map<String, Object> diagram = new HashMap<String, Object>();
        diagram.put("elements", from);
        //图形-图片
        Map<String, Object> image = new HashMap<String, Object>();
        image.put("x", 0);
        image.put("y", 0);
        image.put("width", 100);
        image.put("height", 100);
        image.put("pngdata", "");
        diagram.put("image", image);
        to.put("diagram", diagram);
        String posStr = JSONObject.toJSONString(to);

        String pos = "POS文件_" + delDef.length() + ".pos";
        System.out.println(pos);
        FileUtil.createTxtFile("C:\\Users\\Administrator\\Desktop\\" + pos, posStr);

        System.out.println("保存POS完成");
    }



    //检测文件定义是否存在重复节点
    @Test
    public void testDupNode() {
        String path = "C:\\Users\\Administrator\\Desktop\\WPS脑图def (1).json";
        String text = FileUtil.getTextFromFile(new File(path));
        long start = System.currentTimeMillis();
        JSONObject json = JSON.parseObject(text);
        String[] errorIdArr = DuplicateNodeUtil.getErrorIdArr(text);
        System.out.println(Arrays.toString(errorIdArr));
        String s = DuplicateNodeUtil.delDupNode(json, errorIdArr);
        long end = System.currentTimeMillis();

        System.out.println(end - start);

        FileUtil.createTxtFile(path + ".json", s);
        System.out.println(path + ".json");
    }

    //根据文件定义生成POS文件
    @Test
    public void generatePos() {

        String path = "C:\\Users\\Administrator\\Desktop\\WPS脑图def (1).json.json";
        String definitionStr = FileUtil.getTextFromFile(new File(path));

        JSONObject from = JSONObject.parseObject(definitionStr);
        JSONObject page = from.getJSONObject("page");
        if (page != null) {
            //如果文件定义中没有richText，则设置richText为false
            boolean richText = page.getBooleanValue("richText");
            if (!richText) {
                page.put("richText", false);
            }
        }
        Map<String, Object> to = new HashMap<String, Object>();

        //元数据
        Map<String, Object> meta = getDiagramMetadata(null);
        to.put("meta", meta);
        //图形
        Map<String, Object> diagram = new HashMap<String, Object>();
        diagram.put("elements", from);
        //图形-图片
        Map<String, Object> image = new HashMap<String, Object>();
        image.put("x", 0);
        image.put("y", 0);
        image.put("width", 100);
        image.put("height", 100);
        image.put("pngdata", "");
        diagram.put("image", image);
        to.put("diagram", diagram);
        String posStr = JSONObject.toJSONString(to);

        FileUtil.createTxtFile("C:\\Users\\Administrator\\Desktop\\mind-修复5.pos", posStr);

        System.out.println("保存POS完成");
    }

    /**
     * 获取文件元数据
     * @param chart
     * @return
     */
    private Map<String, Object> getDiagramMetadata(Chart chart){
        Map<String, Object> meta = new HashMap<String, Object>();
        if(chart == null){
            meta.put("member", "");
            meta.put("version", "1.0");
            meta.put("id", "");
            meta.put("type", "ProcessOn Schema File");
            meta.put("exportTime", DateUtil.currentTimeString());
            //元数据-文件信息
            Map<String, Object> diagramInfo = new HashMap<String, Object>();
            diagramInfo.put("title", "");
            diagramInfo.put("creator", "");
            diagramInfo.put("category", "");
            diagramInfo.put("created", "");
            diagramInfo.put("modified", "");
            diagramInfo.put("attributes", null);
            meta.put("diagramInfo", diagramInfo);
        }else{
            //元数据-文件信息
            Map<String, Object> diagramInfo = new HashMap<String, Object>();
            diagramInfo.put("title", chart.getTitle());
            diagramInfo.put("category", chart.getCategory());
            diagramInfo.put("created", chart.getCreateTime());
            diagramInfo.put("modified", chart.getLastModify());
            diagramInfo.put("attributes", chart.getAttribute());
            if(chart.getOwner() != null){
                meta.put("member", chart.getOwner().getUserName());
                diagramInfo.put("creator", chart.getOwner().getUserName());
            }else{
                meta.put("member", "");
                diagramInfo.put("creator", "");
            }
            meta.put("version", "1.0");
            meta.put("id", chart.getChartId());
            meta.put("type", "ProcessOn Schema File");
            meta.put("exportTime", DateUtil.currentTimeString());
            meta.put("diagramInfo", diagramInfo);
        }
        return meta;
    }

    private String getDefinitionNew(String processonUrl) {
        try {
            System.out.println(processonUrl);

            HttpClientResult processonResult = HttpUtil.doGet(processonUrl);
            String content = processonResult.getContent();

            List<String> htmlLines = StringUtil.readLinesFromString(content);
            for (String htmlLine : htmlLines) {
                if (htmlLine.contains("children") && htmlLine.contains("leftChildren") && htmlLine.contains("structure") && htmlLine.contains("theme")) {
                    htmlLine = htmlLine.substring(htmlLine.indexOf("{"), htmlLine.length() - 1);
                    return htmlLine;
                }
            }
            return null;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 解码 Unicode \\uXXXX
     * @param str
     * @return
     */
    public static String decodeUnicode(String str) {
        Charset set = Charset.forName("UTF-16");
        Pattern p = Pattern.compile("\\\\u([0-9a-fA-F]{4})");
        Matcher m = p.matcher( str );
        int start = 0 ;
        int start2 = 0 ;
        StringBuffer sb = new StringBuffer();
        while( m.find( start ) ) {
            start2 = m.start() ;
            if( start2 > start ){
                String seg = str.substring(start, start2) ;
                sb.append( seg );
            }
            String code = m.group( 1 );
            int i = Integer.valueOf( code , 16 );
            byte[] bb = new byte[ 4 ] ;
            bb[ 0 ] = (byte) ((i >> 8) & 0xFF );
            bb[ 1 ] = (byte) ( i & 0xFF ) ;
            ByteBuffer b = ByteBuffer.wrap(bb);
            sb.append( String.valueOf( set.decode(b) ).trim() );
            start = m.end() ;
        }
        start2 = str.length() ;
        if( start2 > start ){
            String seg = str.substring(start, start2) ;
            sb.append( seg );
        }
        return sb.toString() ;
    }



    @Test
    public void testStr() {
        final String definitionStr = "a";
        try {
            ExecutorService executor = Executors.newFixedThreadPool(1);
            Future<String> future = executor.submit(new Callable<String>() {
                @Override
                public String call() throws Exception {
                    String def = definitionStr;
                    for (int j = 0; j < 5; j++) {
                        System.out.println(def);
                        //一条消息，即用户的一个动作
                        def = def + j;
                        System.out.println(def);
                    }
                    return def;
                }
            });
            String definition = future.get(5000, TimeUnit.MILLISECONDS);
            executor.shutdown();

            //更新定义
            System.out.println(definition);
            while (!executor.isTerminated()) {
                Thread.yield();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
