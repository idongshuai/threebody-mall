package net.dongshuai.solrutil;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.solr.core.SolrTemplate;
import org.springframework.stereotype.Component;

import com.alibaba.fastjson.JSON;

import net.dongshuai.mapper.TbItemMapper;
import net.dongshuai.pojo.TbItem;
import net.dongshuai.pojo.TbItemExample;
import net.dongshuai.pojo.TbItemExample.Criteria;

/**
 * @author 董帅
 */
@Component
public class SolrUtils {
    
    @Autowired
    private TbItemMapper itemMapper;
    
    @Autowired
    private SolrTemplate solrTemplate;
    
    public void importItemData() {
        
        TbItemExample example = new TbItemExample();
        Criteria criteria = example.createCriteria();
        //审核通过的才导入
        criteria.andStatusEqualTo("1");
        
        List<TbItem> itemList = itemMapper.selectByExample(example);
        
        System.out.println("----商品列表--");
        for (TbItem item : itemList) {
            System.out.println(item.getId() + item.getTitle() + item.getPrice());
            
            //从数据库中提取规格json字符串, 转换成map
            Map specMap = JSON.parseObject(item.getSpec(), Map.class);
            item.setSpecMap(specMap);
            
        }
        solrTemplate.saveBeans(itemList);
        solrTemplate.commit();
        System.out.println("-----结束----");
    }

    public static void main(String[] args) {
        ApplicationContext context = 
                new ClassPathXmlApplicationContext("classpath*:spring/applicationContext*.xml");
        SolrUtils solrUtils = (SolrUtils) context.getBean("solrUtils");
        solrUtils.importItemData();
    }
	
	private InputStream process(String htmlPath) throws IOException {
        exeLocation = exeLocation.replace("/", File.separator);
        String phantomLocation;
        if(path.indexOf(":") < 0){
            //路径中不包含：，则是Linux环境
            phantomLocation = path + "phantomjs_linux ";
        }else{
            phantomLocation = path + "phantomjs ";
        }
        phantomLocation = phantomLocation.replace("/", File.separator);
        StringBuffer buffer = new StringBuffer(phantomLocation);
        //参数1：执行JS文件名
        buffer.append(exeLocation);
        //参数2：执行html文件的URL路径
        buffer.append(htmlPath.replace("\\", "/"));
        Process child = null;
        try{
            //开始执行
            String command = buffer.toString();
            child = Runtime.getRuntime().exec(command);
            System.out.println(command);
//            child.waitFor(10, TimeUnit.SECONDS);
        }catch(Exception ex){
            ex.printStackTrace();
            if (child != null) {
                child.getErrorStream().close();
                child.getInputStream().close();
                child.getOutputStream().close();
            }
            return null;
        }

        //读取控制台输出
        InputStream in = child.getInputStream();
        BufferedReader br = new BufferedReader(new InputStreamReader(in));
        String line = null;
        String imgBase64 = null;
        JSONObject props = null;
        long startTime = System.currentTimeMillis();
        long overTime = 30 * 1000;
        while((line = br.readLine()) != null ){
            if(line.startsWith("base64:")){
                //取到图片的base64串
                imgBase64 = line.substring(7, line.length());
            }else if(line.startsWith("props:")){
                //取到图片的属性
                String propsStr = line.substring(6, line.length());
                props = JSONObject.parseObject(propsStr);
                this.imagePropertity = new ChartImagePropertity();
                imagePropertity.setImageX(props.getIntValue("x"));
                imagePropertity.setImageY(props.getIntValue("y"));
                imagePropertity.setImageWidth(props.getIntValue("width"));
                imagePropertity.setImageHeight(props.getIntValue("height"));
            }
            if(System.currentTimeMillis() - startTime > overTime){
                log.error("draw Image time out");
                break;
            }
        }
        br.close();
        in.close();
        if (child != null) {
            child.destroy();
        }
        byte[] imgBytes = new BASE64Decoder().decodeBuffer(imgBase64);

        if (this.bucketName.equals(Constants.CHART_FULL_IMAGE)) {
            //删除html
            new File(htmlPath).delete();
            return new ByteArrayInputStream(imgBytes);
        }
        try {

            ByteArrayInputStream imgStream = new ByteArrayInputStream(imgBytes);
            BufferedImage sourceImg = ImageIO.read(imgStream);
            int resultSize = 200;
//            int resultSize = 400;

            Integer imgW = sourceImg.getWidth();
            Integer imgH = sourceImg.getHeight();
            int realWidth = isHeightDynamic ? 213 : resultSize;
            int realHeight = isHeightDynamic ? (int) Math.floor(imgH*realWidth*1.0/imgW) : resultSize;
            realHeight = realHeight < 140 ? 140 : realHeight;
            realHeight = realHeight > 700 ? 700 : realHeight;


            BufferedImage canvas = new BufferedImage(realWidth, realHeight, BufferedImage.TYPE_INT_RGB);
            Graphics2D graphics = canvas.createGraphics();
            //先填充背景

            if(props != null){
                String color = props.getString("background");
                if(color.equals("transparent")){
                    color = "255,255,255";
                }
                if (!color.startsWith("#")) {
                    String[] bgStr = color.split(",");
                    Color bgColor = new Color(Integer.parseInt(bgStr[0].trim()),
                            Integer.parseInt(bgStr[1].trim()),
                            Integer.parseInt(bgStr[2].trim()));
                    graphics.setColor(bgColor);
                }
            }


            graphics.fillRect(0, 0, realWidth, realHeight);
            int x = 0;
            int y = 0;
            int width = 0;
            int height = 0;
            if(imgW > imgH){
                width = realWidth;
                Double heightDouble = Double.parseDouble(imgH.toString()) / imgW * width;
                height = heightDouble.intValue();
                y = (realHeight - height) / 2;
            }else{
                height = realHeight;
                Double widthDouble = Double.parseDouble(imgW.toString()) / imgH * height;
                width = widthDouble.intValue();
                x = (realWidth - width) / 2;
            }
            // 将源文件缩放，很重要，否则会严重失真
            /*image.SCALE_SMOOTH //平滑优先
            image.SCALE_FAST//速度优先
            image.SCALE_AREA_AVERAGING //区域均值
            image.SCALE_REPLICATE //像素复制型缩放
            image.SCALE_DEFAULT //默认缩放模式*/
            Image scaledImg = sourceImg.getScaledInstance(width, height, Image.SCALE_SMOOTH);
            graphics.drawImage(scaledImg, x, y, width, height, null);
            //输出
            ByteArrayOutputStream out = new ByteArrayOutputStream();
            ImageIO.write(canvas, "png", out);
            byte[] byteArray = out.toByteArray();

            out.close();
            graphics.dispose();
            imgStream.close();
            //删除html
            new File(htmlPath).delete();
            return new ByteArrayInputStream(byteArray);
        } catch (Exception ex) {
            log.error("process error", ex);
        }

        return null;
    }
}
