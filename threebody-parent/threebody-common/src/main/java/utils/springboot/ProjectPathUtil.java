package net.dongshuai.utils.springboot;

import org.springframework.boot.system.ApplicationHome;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.util.ClassUtils;
import org.springframework.util.ResourceUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.File;

/**
 * 获取项目路径
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/7/29
 */
public class ProjectPathUtil {

    /**
     * 获取应用contextPath
     *
     * @return root path
     */
    public static String getContextPath(HttpServletRequest request) {
        request.getServletPath();
        String realPath = request.getServletContext().getRealPath(File.separator);
        System.out.println("servletContext path: " + realPath);
        return realPath;
    }

    /**
     * 获取Web工程容器路径<br>
     * 如果部署为ROOT将返回空字符串, 否则返回斜杠加工程名; 如工程名为cheetah-site-web, 返回/cheetah-site-web
     *
     * @return context path
     */
    public static String getContextPath() {
        return getRequest().getContextPath();
    }

    /**
     * 获取应用根目录
     *
     * @return root path
     */
    public static String getWebRoot() {
        return getRequest().getSession().getServletContext().getRealPath("/");
    }

    /**
     * 获取相对于根目录的路径
     *
     * @param path 相对路径
     * @return root path
     */
    public static String getWebRoot(String path) {
        return getRequest().getSession().getServletContext().getRealPath("/") + path;
    }

    /**
     * 返回当前请求对象
     *
     * @return 当前请求对象
     */
    public static HttpServletRequest getRequest() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
    }

    /**
     * 获得项目classpath
     */
    public static String getClassPath(HttpServletRequest request) {

        String path = null;
        try {
            Resource resource = new ClassPathResource("");
            System.out.println("ClassPathResource: " + resource.getFile().getAbsolutePath());


            String userDir = System.getProperty("user.dir");
            System.out.println("userDir: " + userDir);

            //获取classes目录绝对路径
            path = ClassUtils.getDefaultClassLoader().getResource("").getPath();
            System.out.println("ClassLoader classpath: " + path);

            path = ResourceUtils.getURL("classpath:").getPath();
            System.out.println("ResourceUtils classpath: " + path);
        } catch (Exception e) {
            e.printStackTrace();
        }

        return path;
    }


    /**
     * 获得项目工程的绝对路径
     */
    public static String getWebRoot(HttpServletRequest request) {
        return request.getSession().getServletContext().getRealPath("/");
    }

    /**
     * [Springboot应用]
     * idea启动，class路径
     * jar启动，jar路径
     *
     * @param
     * @return java.lang.String
     * @date 2021/4/15
     */
    public static String getWebRootPath() {
        try {
            ApplicationHome home = new ApplicationHome(ProjectPathUtil.class);
            return home.getSource().getAbsolutePath();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "/tmp";
    }


}
