import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

/**
 * 处理jsp资源
 * jsp中JS、css加版本号
 */
public class JspAddVersion {
    private static String jsVersion = "-";
    private static String cssVersion = "-";

    private static String newUrl = "D:/java_soft/grunt/pages/";
    private static String oldUrl = "D:/java_dev/processon_web/ProcessOnWeb/WebRoot/WEB-INF/pages/";
    private static String newUrl1 = "D:/java_soft/grunt/WebRoot/";
    private static String oldUrl1 = "D:/java_dev/processon_web/ProcessOnWeb/WebRoot/";

    private static String baseJsUrl = "D:/java_soft/grunt/";

    public static void main(String[] args) {
        String version = "";
        File cssDir = new File("D:\\java_soft\\grunt\\assets\\css");
        File[] files = cssDir.listFiles();
        for (File cssFile : files) {
            if (cssFile.isFile()) {
                String cssFileName = cssFile.getName();
                cssFileName = cssFileName.substring(cssFileName.lastIndexOf("-") + 1, cssFileName.lastIndexOf("."));
                System.out.println(cssFileName);
                version = cssFileName;
                break;
            }
        }
        jsVersion = "-" + version;
        cssVersion = "-" + version;

        File file = new File(newUrl);
        if (file.exists()) {
            file.delete();
        }
        file = new File(newUrl);
        if (!file.exists()) {
            file.mkdirs();
        }

        File file2 = new File(newUrl1);
        if (file2.exists()) {
            file2.delete();
        }
        file2 = new File(newUrl1);
        if (!file2.exists()) {
            file2.mkdirs();
        }

        //		String baseUrl = "/Users/zhangy/Documents/processon/ProcessOnWeb/WebRoot/WEB-INF/pages/";
        //		String newUrl = "/Users/zhangy/Documents/processon/ProcessOnWeb/WebRoot/WEB-INF/pages-release/";
        //		String baseUrl = "/Users/zhangy/Documents/soft/";
        //		String newUrl = "/Users/zhangy/Documents/grunt/pages/";
        //		makeFileDirs(newUrl);

        System.out.println("开始处理jsp－－－－");
        getFolders(oldUrl, null, true);
        System.out.println("pages下jsp加version完成。");
        getFolders(oldUrl1, null, false);
        System.out.println("WebRoot下jsp加version完成。");
    }

    private static String getFile(String url){
        try {
            FileReader fr = new FileReader(url);
//            System.out.println("读取压缩后的JS文件内容：" + url);
            BufferedReader br = new BufferedReader(fr);
            String node = null;
            StringBuffer buffer = new StringBuffer();
            while ((node = br.readLine()) != null) {
                if(node.trim() != ""){
                    buffer.append(node + "\n");
                }
            }
            br.close();
            fr.close();
            return buffer.toString();
        } catch (Exception e) {

        }
        return "";
    }

    private static void processFile(File file, String folderUrl, boolean withChildren) {
        String path = file.getAbsolutePath();
        String npath ="";
        if(withChildren) {
            npath = newUrl + file.getName();
        }else {
            npath = newUrl1 + file.getName();
        }

        if(folderUrl != null){
            npath = folderUrl + file.getName();
        }
        npath = npath.replace("/", File.separator);
        if (file.isFile() && path.indexOf(".jsp") > 0) {
            try {
                StringBuffer buffer = new StringBuffer();
                StringBuffer minJs = new StringBuffer();

                List<String> list = readLines(new File(path), "UTF-8");

                for (String node : list) {

                    if(node.indexOf("href=\"/assets/css/") >= 0){
//                        System.out.println("----检测到css引用-----");
//                        System.out.println(node);
                        node = node.replace(".css", cssVersion + ".css");
                    }else if(node.indexOf("src=\"/assets/js/") >= 0){
//                        System.out.println("----检测到js引用-----");
//                        System.out.println(node);
                        if(node.indexOf("merge=true") >= 0){
                            String src = node.substring(node.indexOf("src=\"") + 5, node.indexOf(".js") + 3);
//                            System.out.println("----js src-----");
                            src = baseJsUrl + src;
                            src = src.replace(".js", jsVersion + ".js");
                            String content = getFile(src);
                            minJs.append(content + "\n");
                            node = "";
                        }else if(node.indexOf("main=true") >= 0){
                            String src = node.substring(node.indexOf("src=\"") + 5, node.indexOf(".js") + 3);
                            src = baseJsUrl + src;
                            src = src.replace(".js", jsVersion + ".js");
                            createFile(src, minJs.toString());
                            node = node.replace(".js", jsVersion + ".js");
                        }else{
                            node = node.replace(".js", jsVersion + ".js");
                        }
                    }
                    if(node.equals("\n")){
                        node = "";
                    }
                    if(!node.trim().equals("")){
                        buffer.append(node.trim() + "\n");
                    }

                }

                //创建新的jsp文件
                createFile(npath, buffer.toString());




                /*FileReader fr = new FileReader(path);
//                System.out.println("开始处理：" + path);
                BufferedReader br = new BufferedReader(fr);
                String node = null;
                StringBuffer buffer = new StringBuffer();
                StringBuffer minJs = new StringBuffer();
                while ((node = br.readLine()) != null) {
                    if(node.indexOf("href=\"/assets/css/") >= 0){
//                        System.out.println("----检测到css引用-----");
//                        System.out.println(node);
                        node = node.replace(".css", cssVersion + ".css");
                    }else if(node.indexOf("src=\"/assets/js/") >= 0){
//                        System.out.println("----检测到js引用-----");
//                        System.out.println(node);
                        if(node.indexOf("merge=true") >= 0){
                            String src = node.substring(node.indexOf("src=\"") + 5, node.indexOf(".js") + 3);
//                            System.out.println("----js src-----");
                            src = baseJsUrl + src;
                            src = src.replace(".js", jsVersion + ".js");
                            String content = getFile(src);
                            minJs.append(content + "\n");
                            node = "";
                        }else if(node.indexOf("main=true") >= 0){
                            String src = node.substring(node.indexOf("src=\"") + 5, node.indexOf(".js") + 3);
                            src = baseJsUrl + src;
                            src = src.replace(".js", jsVersion + ".js");
                            createFile(src, minJs.toString());
                            node = node.replace(".js", jsVersion + ".js");
                        }else{
                            node = node.replace(".js", jsVersion + ".js");
                        }
                    }
                    if(node.equals("\n")){
                        node = "";
                    }
                    if(!node.trim().equals("")){
                        buffer.append(node.trim() + "\n");
                    }
                }
                br.close();
                fr.close();
                //创建新的jsp文件
                createFile(npath, buffer.toString());*/
            } catch (Exception e) {
                e.printStackTrace();
            }
//            System.out.println("文件："+file.getAbsolutePath());
        }
        if (file.isDirectory() && withChildren) {
            npath = npath + File.separator;
            npath = npath.replace("/", File.separator);
            makeFileDirs(npath);
//            System.out.println("生成文件夹："+file.getName());
            getFolders(path, npath, withChildren);
        }
    }
    private static void getFolders(String url, String folderUrl, boolean withChildren){
        File files = new File(url);
        File[] fileArray = files.listFiles();
        for (int i = 0; i < fileArray.length; i++) {
            File file = fileArray[i];
            processFile(file, folderUrl, withChildren);
        }
    }

    /**
     * 将文本写入文件
     */
    private static void createFile(String filePath, String content){
        filePath = filePath.replace("/", File.separator);
        File file = new File(filePath); // 找到File类的实例
        try {
            makeFileDirs(filePath);
            if(file.exists())
                file.delete();
            // 创建文件
            file.createNewFile();
            // 声明字符输出流
            Writer out = null;
            // 通过子类实例化，表示可以追加
            out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8));
            // 写入数据
            out.write(content);
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void makeFileDirs(String filePath) {
        String dir = filePath.substring(0, filePath.lastIndexOf(File.separator));
        File dirFile = new File(dir);
        if (!dirFile.exists()) {
            dirFile.mkdirs();
        }
    }

    /**
     * 将文件的文本内容按行读成list
     * @date 2021/8/6
     * @param file
     * @param encoding
     * @return java.util.List<java.lang.String>
     */
    public static List<String> readLines(File file, String encoding) throws IOException {
        InputStream inputStream = new FileInputStream(file);
        InputStreamReader input = new InputStreamReader(inputStream, encoding);
        BufferedReader reader = new BufferedReader(input);
        List<String> list = new ArrayList<>();
        for(String line = reader.readLine(); line != null; line = reader.readLine()) {
            list.add(line);
        }
        return list;
    }
}
