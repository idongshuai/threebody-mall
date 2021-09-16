package net.dongshuai.utils.http;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import net.dongshuai.utils.constants.ResultCode;
import net.dongshuai.utils.string.Validator;
import org.apache.commons.httpclient.DefaultHttpMethodRetryHandler;
import org.apache.commons.httpclient.MultiThreadedHttpConnectionManager;
import org.apache.commons.httpclient.cookie.CookiePolicy;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.ArrayUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpHead;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.config.Registry;
import org.apache.http.config.RegistryBuilder;
import org.apache.http.conn.socket.ConnectionSocketFactory;
import org.apache.http.conn.socket.PlainConnectionSocketFactory;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.InputStreamEntity;
import org.apache.http.entity.StringEntity;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.ByteArrayBody;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.entity.mime.content.InputStreamBody;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class HttpUtil {

    private static Logger logger = LoggerFactory.getLogger(HttpUtil.class);

    // 编码格式。发送编码格式统一用UTF-8
    private static final String ENCODING = "UTF-8";

    // 设置连接超时时间，单位毫秒。
    private static final int CONNECT_TIMEOUT = 60000;

    // 请求获取数据的超时时间(即响应时间)，单位毫秒。
    private static final int SOCKET_TIMEOUT = 60000;

    private static MultiThreadedHttpConnectionManager httpConnectionManager = null;

    private static org.apache.commons.httpclient.HttpClient httpClient = null;

    private static final Object obj = new Object();

    static {
        if (httpClient == null) {
            synchronized (obj) {
                if (httpClient == null)
                    httpConnectionManager = new MultiThreadedHttpConnectionManager();
                httpClient = new org.apache.commons.httpclient.HttpClient(httpConnectionManager);

                // 定义每台主机允许的最大连接数，默认为2
                httpClient.getHttpConnectionManager().getParams()
                        .setDefaultMaxConnectionsPerHost(30);
                // httpConnectionManager管理的最大连接数，默认为20
                httpClient.getHttpConnectionManager().getParams()
                        .setMaxTotalConnections(48);
                // 失败的情况下会进行3次尝试,成功之后不会再尝试
                httpClient.getHttpConnectionManager().getParams().setParameter(
                        HttpMethodParams.RETRY_HANDLER,
                        new DefaultHttpMethodRetryHandler());
                // 禁用cookie
                httpClient.getParams().setCookiePolicy(
                        CookiePolicy.IGNORE_COOKIES);
                // 设置链接超时时间
                httpClient.getHttpConnectionManager().getParams()
                        .setConnectionTimeout(5000);
                // 设置读取超时时间
                httpClient.getHttpConnectionManager().getParams().setSoTimeout(
                        30000);
                httpClient.getParams().setParameter(
                        HttpMethodParams.HTTP_CONTENT_CHARSET, "gbk");
            }
        }
    }

    /**
     * 根据response获得一个PrintWriter对象
     */
    public static PrintWriter getWriter(HttpServletResponse response) {
        PrintWriter out = null;
        try {
            out = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return out;
    }

    /**
     * 关闭printWriter对象,释放输出流
     */
    public static void closeWriter(PrintWriter out) {
        out.flush();
        out.close();
    }

    public static String decode(String str) {
        return decode(str, "utf-8");
    }

    public static String decode(String str, String decode) {
        String result = str;
        try {
            result = URLDecoder.decode(str, decode);
        } catch (Throwable e) {
        }
        return result;
    }

    /**
     * 将请求参数全部打印到控制台
     */
    @SuppressWarnings("rawtypes")
    public static String checkRequestParameter(HttpServletRequest request) {
        StringBuffer buffer = new StringBuffer();
        buffer.append(request.getRequestURL() + "\n  ");
        Iterator parameters = request.getParameterMap().keySet()
                .iterator();
        while (parameters.hasNext()) {
            String parameter = (String) parameters.next();
            buffer.append(parameter + "--" + request.getParameter(parameter) + "\n    ");
        }
        return buffer.toString();
    }

    /**
     * 将对字符串进行转义
     *
     * @param s
     * @return
     */
    public static String xssEncode(String s) {
        if (Validator.isEmpty(s)) {
            return "";
        }
        return s.replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&apos;")
                .replace("&", "&amp;");
    }

    /**
     * 特殊字符转义
     * @param text
     * @return
     */
    public static String htmlEncode(String text) {
        if(Validator.isEmpty(text)){
            return "";
        }
        text = text.replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&apos;")
                .replace("&", "&amp;");

        return text.replace("&amp;lt;", "&lt;")
                .replace("&amp;gt;", "&gt;")
                .replace("&amp;quot;", "&quot;")
                .replace("&amp;apos;", "&apos;");
    }

    /**
     * 将xss过滤之后的参数转义回去
     *
     * @param s
     * @return
     */
    public static String xssDecode(String s) {
        return s.replace("&lt;", "<")
                .replace("&gt;", ">")
                .replace("&quot;", "\"")
                .replace("&apos;", "'")
                .replace("&amp;", "&");
    }

    /**
     * 清理HTML，去除不安全的
     *
     * @param html
     * @return
     */
    public static String cleanUnsafeHTML(String html) {
        Whitelist wl = Whitelist.basic();
        wl.addTags("span");
        wl.addTags("h2");
        wl.addTags("h3");
        wl.addTags("h1");
        wl.addTags("embed");
        wl.addTags("img");
        wl.addTags("&nbsp;");
        wl.addAttributes("pre", "class");
        wl.addAttributes("img", "src", "alt", "width", "height");
        wl.addAttributes("embed", "src", "width", "height");
        wl.addAttributes(":all", "style");
        String safe = Jsoup.clean(html, wl);
        return safe;
    }

    /**
     * 获取HTML中的文本，去除HTML标签
     *
     * @param html
     * @return
     */
    public static String parseHtmlText(String html) {
        return Jsoup.parse(html).text();
    }

    /**
     * 获取一个html网页
     *
     * @param url
     * @return
     * @throws Exception
     */
    public static HtmlPage getHtmlPage(String url) throws Exception {
        WebClient wc = new WebClient();
        wc.setCssEnabled(false);
        wc.setJavaScriptEnabled(false);
        wc.setTimeout(5000);
        HtmlPage page = wc.getPage(url);
        wc.closeAllWindows();
        return page;
    }

    /**
     * 获取客户端的IP地址
     *
     * @param request
     * @return
     */
    public static String getIpAddress(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }




    /**
     * 判断请求是否是搜索引擎
     *
     * @param request
     * @return
     */
    public static boolean isSearchEngine(HttpServletRequest request) {
        String agent = request.getHeader("user-agent");
        if (agent != null) {
            if (agent.toLowerCase().indexOf("baiduspider") >= 0
                    || agent.toLowerCase().indexOf("googlebot") >= 0
                    || agent.toLowerCase().indexOf("360spider") >= 0
                    || agent.toLowerCase().indexOf("sosospider") >= 0
                    || agent.toLowerCase().indexOf("msnbot") >= 0
                    || agent.toLowerCase().indexOf("yodaobot") >= 0
                    || agent.toLowerCase().indexOf("sogou web spider") >= 0) {
                return true;
            }
        }
        return false;
    }

    /**
     * 绕过https请求
     *
     * @return
     * @throws Exception
     * @throws NoSuchAlgorithmException
     */
    public static HttpClient createTrustHttpClient() throws Exception, NoSuchAlgorithmException {
        //采用绕过验证的方式处理https请求
        System.setProperty("jdk.tls.client.protocols", "TLSv1.2");
        SSLContext sslcontext = createIgnoreVerifySSL();
        //SSLContext sslcontext =  SSLContexts.custom().loadTrustMaterial(new TrustSelfSignedStrategy()).build();;

		/*SSLEngine e = sslcontext.createSSLEngine();
		System.out.println("当前协议: " + sslcontext.getProtocol());
		System.out.println("支持的协议: " + Arrays.asList(e.getSupportedProtocols()));
		System.out.println("启用的协议: " + Arrays.asList(e.getEnabledProtocols()));*/
        Registry<ConnectionSocketFactory> socketFactoryRegistry = RegistryBuilder.<ConnectionSocketFactory>create()
                .register("http", PlainConnectionSocketFactory.INSTANCE)
                .register("https", new SSLConnectionSocketFactory(sslcontext))
                .build();
        PoolingHttpClientConnectionManager connManager = new PoolingHttpClientConnectionManager(socketFactoryRegistry);
        return HttpClients.custom().setConnectionManager(connManager).build();
    }

    public static SSLContext createIgnoreVerifySSL() throws NoSuchAlgorithmException, KeyManagementException {
        //SSLContext sc = SSLContext.getInstance("SSLv3.0");
        SSLContext sc = SSLContext.getInstance("TLSv1.2");
        // 实现一个X509TrustManager接口，用于绕过验证，不用修改里面的方法
        X509TrustManager trustManager = new X509TrustManager() {
            @Override
            public void checkClientTrusted(
                    java.security.cert.X509Certificate[] paramArrayOfX509Certificate,
                    String paramString) throws CertificateException {
            }

            @Override
            public void checkServerTrusted(
                    java.security.cert.X509Certificate[] paramArrayOfX509Certificate,
                    String paramString) throws CertificateException {
            }

            @Override
            public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                return null;
            }
        };
        sc.init(null, new TrustManager[]{trustManager}, null);
        return sc;
    }

    public static boolean judgeIsMoblie(HttpServletRequest request) {
        boolean isMoblie = false;
        String[] mobileAgents = {"iphone", "android", "phone", "mobile", "wap", "netfront", "java", "opera mobi"};
        if (request.getHeader("User-Agent") != null) {
            for (String mobileAgent : mobileAgents) {
                if (request.getHeader("User-Agent").toLowerCase().indexOf(mobileAgent) >= 0) {
                    isMoblie = true;
                    break;
                }
            }
        }
        return isMoblie;
    }

    public static String GET(String url, Header[] headers) {
        HttpUriRequest httpRequest = new HttpGet(url);
        try {
            HttpClient client = HttpUtil.createTrustHttpClient();
            if (!ArrayUtils.isEmpty(headers)) {
                httpRequest.setHeaders(headers);
            }
            HttpResponse response = client.execute(httpRequest);
            String content = IOUtils.toString(response.getEntity().getContent(), "utf-8");
            return content;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


    public static String POST(String url, String param, Header[] headers) {
        try {
			/*URL httpsURL = new URL(url);
			HttpsURLConnection con = (HttpsURLConnection) httpsURL.openConnection();
			SSLContext sc = SSLContext.getInstance("TLSv1.2");
			sc.init(null, null, new java.security.SecureRandom());
			con.setSSLSocketFactory(sc.getSocketFactory());

			con.setHostnameVerifier(new hostnameVerifier());
			if (!ArrayUtils.isEmpty(headers)) {

				//con.setRequestProperty();
			}*/


            HttpPost post = new HttpPost(url);
            if (Validator.notEmpty(param)) {
                HttpEntity entity = new StringEntity(param, "UTF-8");
                post.setEntity(entity);
            }
            if (!ArrayUtils.isEmpty(headers)) {
                post.setHeaders(headers);
            }
            HttpClient httpclient = HttpUtil.createTrustHttpClient();
            HttpResponse response = httpclient.execute(post);
            String returnVal = EntityUtils.toString(response.getEntity(),
                    "UTF-8");
            return returnVal;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }

    /**
     * @param request
     * @param flag    icon picture
     * @return
     */
    public static String getWPSRmsp(HttpServletRequest request, String flag) {
		/*平台_功能模块_请求端_版本_渠道_设备标识，下面字段如果为空，用null代替
		平台：pc、mac、android、ios、wx
		功能模块：newdoc、mall、picture、icon等
		请求端（区分接口是由哪一方主动发起）：app、web
		版本：客户端版本或页面版本
		渠道：客户端渠道或页面渠道
		设备标识：hdid（pc）或uuid（移动端）*/
        StringBuffer rmsp = new StringBuffer();
        String userAgent = request.getHeader("user-agent");
        if (userAgent.indexOf("Mac OS X") > -1) {
            rmsp.append("mac_" + flag + "_web_null_processon_pc");
        } else {
            rmsp.append("pc_" + flag + "_web_null_processon_pc");
        }
        return rmsp.toString();
    }

    /**
     * 发送get请求；不带请求头和请求参数
     *
     * @param url 请求地址
     * @return
     * @throws Exception
     */
    public static HttpClientResult doGet(String url) throws Exception {
        return doGet(url, null, null);
    }

    /**
     * 带cookie get请求
     *
     * @param urlString
     * @param cookie
     * @return java.lang.String
     * @date 2020/11/27
     */
    public static String doGet(String urlString, String cookie) {
        StringBuffer document = new StringBuffer();
        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Cookie", cookie);
            document.append(IOUtils.toString(new InputStreamReader(conn.getInputStream(), "UTF-8")));
            conn.getInputStream().close();
        } catch (MalformedURLException e) {
            logger.info("不能连接到地址： " + urlString);
        } catch (IOException e) {
            logger.info("连接超时：" + urlString);
        }
        return document.toString();
    }

    /**
     * 发送get请求；带请求参数
     *
     * @param url    请求地址
     * @param params 请求参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doGet(String url, Map<String, String> params) throws Exception {
        return doGet(url, null, params);
    }

    /**
     * 发送get请求；带请求头和请求参数
     *
     * @param url     请求地址
     * @param headers 请求头集合
     * @param params  请求参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doGet(String url, Map<String, String> headers, Map<String, String> params)
            throws Exception {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建访问的地址
        URIBuilder uriBuilder = new URIBuilder(url);
        if (params != null) {
            Set<Map.Entry<String, String>> entrySet = params.entrySet();
            for (Map.Entry<String, String> entry : entrySet) {
                uriBuilder.setParameter(entry.getKey(), entry.getValue());
            }
        }
        // 创建http对象
        HttpGet httpGet = new HttpGet(uriBuilder.build());
        /**
         * setConnectTimeout：设置连接超时时间，单位毫秒。
         * setConnectionRequestTimeout：设置从connect Manager(连接池)获取Connection
         * 超时时间，单位毫秒。这个属性是新加的属性，因为目前版本是可以共享连接池的。
         * setSocketTimeout：请求获取数据的超时时间(即响应时间)，单位毫秒。
         * 如果访问一个接口，多少时间内无法返回数据，就直接放弃此次调用。
         */
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpGet.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpGet);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpGet);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送get请求；带请求头和请求参数
     *
     * @param url     请求地址
     * @param headers 请求头集合
     * @param paramsJson  请求参数json
     * @return
     * @throws Exception
     */
    public static HttpClientResult doGetWithBody(String url, Map<String, String> headers, String paramsJson)
            throws Exception {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpGetWithBody httpGet = new HttpGetWithBody(url);

        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT).setSocketTimeout(SOCKET_TIMEOUT).build();
        httpGet.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpGet);

        // 封装json请求参数
        packageParam(paramsJson, httpGet);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpGet);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送post请求；不带请求头和请求参数
     *
     * @param url 请求地址
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPost(String url) throws Exception {
        return doPost(url, null, null);
    }

    /**
     * 发送post请求；带请求参数
     *
     * @param url    请求地址
     * @param params 参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPost(String url, Map<String, String> params) throws Exception {
        return doPost(url, null, params);
    }

    /**
     * 发送post请求；带请求头和请求参数
     *
     * @param url     请求地址
     * @param headers 请求头集合
     * @param params  请求参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPost(String url, Map<String, String> headers, Map<String, String> params)
            throws Exception {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpPost httpPost = new HttpPost(url);
        /**
         * setConnectTimeout：设置连接超时时间，单位毫秒。
         * setConnectionRequestTimeout：设置从connect Manager(连接池)获取Connection
         * 超时时间，单位毫秒。这个属性是新加的属性，因为目前版本是可以共享连接池的。
         * setSocketTimeout：请求获取数据的超时时间(即响应时间)，单位毫秒。
         * 如果访问一个接口，多少时间内无法返回数据，就直接放弃此次调用。
         */
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpPost.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPost);

        // 封装请求参数
        packageParam(params, httpPost);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpPost);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * json请求参数post请求
     *
     * @param url  请求地址
     * @param json 请求参数json
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPostJson(String url, Map<String, String> headers,  String json) throws Exception {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpPost httpPost = new HttpPost(url);

        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpPost.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPost);

        // 封装请求参数
        packageParam(json, httpPost);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpPost);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * json请求参数post请求
     *
     * @param url  请求地址
     * @param json 请求参数json
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPost(String url, String json) throws Exception {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpPost httpPost = new HttpPost(url);

        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpPost.setConfig(requestConfig);

        // 封装请求参数
        packageParam(json, httpPost);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpPost);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送put请求；不带请求参数
     *
     * @param url 请求地址
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPut(String url) throws Exception {
        return doPut(url, null);
    }

    /**
     * 发送put请求；带请求参数
     *
     * @param url    请求地址
     * @param params 参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPut(String url, Map<String, String> params) throws Exception {
        return doPut(url, null, params);
    }

    /**
     * 发送put请求；带请求头、请求参数
     *
     * @param url    请求地址
     * @param headers 请求头
     * @param params 参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doPut(String url, Map<String, String> headers, Map<String, String> params) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpPut httpPut = new HttpPut(url);
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpPut.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPut);
        //设置请求参数
        packageParam(params, httpPut);

        CloseableHttpResponse httpResponse = null;

        try {
            return getHttpClientResult(httpResponse, httpClient, httpPut);
        } finally {
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送delete请求；不带请求参数
     *
     * @param url 请求地址
     * @return
     * @throws Exception
     */
    public static HttpClientResult doDelete(String url) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpDelete httpDelete = new HttpDelete(url);
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpDelete.setConfig(requestConfig);

        CloseableHttpResponse httpResponse = null;
        try {
            return getHttpClientResult(httpResponse, httpClient, httpDelete);
        } finally {
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送delete请求；带请求参数
     *
     * @param url    请求地址
     * @param json 参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doDeleteWithBody(String url, Map<String, String> headers, String json) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建http对象
        HttpDeleteWithBody httpDelete = new HttpDeleteWithBody(url);

        /*
         * setConnectTimeout：设置连接超时时间，单位毫秒。
         * setConnectionRequestTimeout：设置从connect Manager(连接池)获取Connection
         * 超时时间，单位毫秒。这个属性是新加的属性，因为目前版本是可以共享连接池的。
         * setSocketTimeout：请求获取数据的超时时间(即响应时间)，单位毫秒。
         * 如果访问一个接口，多少时间内无法返回数据，就直接放弃此次调用。
         */
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT).setSocketTimeout(SOCKET_TIMEOUT).build();
        httpDelete.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpDelete);

        // 封装json请求参数
        packageParam(json, httpDelete);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpDelete);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 下载文件为字节数组
     *
     * @param url
     * @return byte[]
     * @date 2020/12/1
     */
    public static byte[] doDownloadFile(String url) throws IOException {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();
        // 创建http对象
        HttpGet httpGet = new HttpGet(url);
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(1000 * 180).setSocketTimeout(1000 * 180).build();
        httpGet.setConfig(requestConfig);
        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            // 执行请求并获得响应结果
            // 执行请求
            httpResponse = httpClient.execute(httpGet);

            // 获取返回结果
            if (httpResponse != null && httpResponse.getStatusLine() != null) {
                if (httpResponse.getEntity() != null) {
                    byte[] buff = new byte[1024 * 1024];//如果是大文件，此处配置可以大一些
                    int len = 0;
                    InputStream stream = httpResponse.getEntity().getContent();
                    while ((len = stream.read(buff)) > 0) {
                        //将读取到的文件流保存到ByteArrayOutputStream中
                        baos.write(buff, 0, len);
                        baos.flush();
                    }
                    stream.close();
                }
            }
            return baos.toByteArray();
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 下载文件为字节数组
     *
     * @param url
     * @return byte[]
     * @date 2020/12/1
     */
    public static byte[] doDownloadFile(String url, Map<String, String> headers, Map<String, String> params) throws IOException {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpPost httpPost = new HttpPost(url);
        /**
         * setConnectTimeout：设置连接超时时间，单位毫秒。
         * setConnectionRequestTimeout：设置从connect Manager(连接池)获取Connection
         * 超时时间，单位毫秒。这个属性是新加的属性，因为目前版本是可以共享连接池的。
         * setSocketTimeout：请求获取数据的超时时间(即响应时间)，单位毫秒。
         * 如果访问一个接口，多少时间内无法返回数据，就直接放弃此次调用。
         */
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(1000 * 180).setSocketTimeout(1000 * 180).build();
        httpPost.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPost);

        // 封装请求参数
        packageParam(params, httpPost);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            // 执行请求并获得响应结果
            // 执行请求
            httpResponse = httpClient.execute(httpPost);

            // 获取返回结果
            if (httpResponse != null && httpResponse.getStatusLine() != null) {
                if (httpResponse.getEntity() != null) {
                    byte[] buff = new byte[1024 * 1024];//如果是大文件，此处配置可以大一些
                    int len = 0;
                    InputStream stream = httpResponse.getEntity().getContent();
                    while ((len = stream.read(buff)) > 0) {
                        //将读取到的文件流保存到ByteArrayOutputStream中
                        baos.write(buff, 0, len);
                        baos.flush();
                    }
                    stream.close();
                }
            }
            return baos.toByteArray();
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 下载文件为字节数组
     *
     * @param url
     * @return byte[]
     * @date 2020/12/1
     */
    public static byte[] doDownloadFile(String url, Map<String, String> headers, String jsonParams) throws IOException {
        // 创建httpClient对象
        CloseableHttpClient httpClient = HttpClients.createDefault();

        // 创建http对象
        HttpPost httpPost = new HttpPost(url);
        /**
         * setConnectTimeout：设置连接超时时间，单位毫秒。
         * setConnectionRequestTimeout：设置从connect Manager(连接池)获取Connection
         * 超时时间，单位毫秒。这个属性是新加的属性，因为目前版本是可以共享连接池的。
         * setSocketTimeout：请求获取数据的超时时间(即响应时间)，单位毫秒。
         * 如果访问一个接口，多少时间内无法返回数据，就直接放弃此次调用。
         */
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(1000 * 180).setSocketTimeout(1000 * 180).build();
        httpPost.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPost);

        // 封装请求参数
        packageParam(jsonParams, httpPost);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        try {
            // 执行请求并获得响应结果
            // 执行请求
            httpResponse = httpClient.execute(httpPost);

            // 获取返回结果
            if (httpResponse != null && httpResponse.getStatusLine() != null) {
                if (httpResponse.getEntity() != null) {
                    byte[] buff = new byte[1024 * 1024];//如果是大文件，此处配置可以大一些
                    int len = 0;
                    InputStream stream = httpResponse.getEntity().getContent();
                    while ((len = stream.read(buff)) > 0) {
                        //将读取到的文件流保存到ByteArrayOutputStream中
                        baos.write(buff, 0, len);
                        baos.flush();
                    }
                    stream.close();
                }
            }
            return baos.toByteArray();
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * 发送delete请求；带请求参数
     *
     * @param url    请求地址
     * @param params 参数集合
     * @return
     * @throws Exception
     */
    public static HttpClientResult doDelete(String url, Map<String, String> params) throws Exception {
        if (params == null) {
            params = new HashMap<String, String>();
        }

        params.put("_method", "delete");
        return doPost(url, params);
    }


    /**
     * 发送head请求
     *
     * @param url
     * @param headers
     * @return com.processon.common.util.HttpClientResult
     * @date 2020/11/3
     */
    public static HttpClientResult doHead(String url, Map<String, String> headers) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpHead httpHead = new HttpHead(url);
        RequestConfig requestConfig = RequestConfig.custom().setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpHead.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpHead);

        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;

        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpHead);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }
    }

    /**
     * post发送form表单，带文件
     *  filePath, fileByte和inputStream 可以只传一个
     * @date 2020/12/3
     * @param url
     * @param fileName
     * @param filePath
     * @param fileByte
     * @param inputStream
     * @param params
     * @return com.processon.common.util.HttpClientResult
     */
    public static HttpClientResult doPostForm(String url, String fileName, 
                                              String filePath, byte[] fileByte, InputStream inputStream,
                                              Map<String, String> headers, Map<String, String> params) throws Exception {
        // 创建httpClient对象
//        CloseableHttpClient httpClient = HttpClientBuilder.create().setRedirectStrategy(new LaxRedirectStrategy()).build();
//        HttpClient httpClient = createTrustHttpClient();

        CloseableHttpClient httpClient = HttpClients.createDefault();


        // 腾讯文档上传图片，需要这样组装URL
        // 创建访问的地址
        URIBuilder uriBuilder = new URIBuilder(url);
        if (params != null) {
            Set<Map.Entry<String, String>> entrySet = params.entrySet();
            for (Map.Entry<String, String> entry : entrySet) {
                uriBuilder.setParameter(entry.getKey(), entry.getValue());
            }
        }

        // 创建http对象
        HttpPost httpPost = new HttpPost(uriBuilder.build());
        RequestConfig requestConfig = RequestConfig.custom()
                .setConnectTimeout(CONNECT_TIMEOUT)
                .setSocketTimeout(SOCKET_TIMEOUT).build();
        httpPost.setConfig(requestConfig);

        // 设置请求头
        packageHeader(headers, httpPost);

        MultipartEntityBuilder builder = MultipartEntityBuilder.create();

        // 把文件转换成流对象FileBody
        if (StringUtils.isNotBlank(filePath)) {
            FileBody fileBody = new FileBody(new File(filePath));
            // 相当于<input type="file" name="file"/>
            builder.addPart("image", fileBody);
        }
        if (fileByte != null) {
            ByteArrayBody byteArrayBody = new ByteArrayBody(fileByte, fileName);
            builder.addPart("image", byteArrayBody);
        }
        if (inputStream != null) {
            InputStreamBody inputStreamBody = new InputStreamBody(inputStream, fileName);
            builder.addPart("image", inputStreamBody);
        }
        
        // 相当于<input type="text" name="userName" value=userName>
//        builder.addPart("filesFileName", new StringBody(fileParamName, ContentType.create("text/plain", Consts.UTF_8)));
//        if (params != null) {
//            for (String key : params.keySet()) {
//                builder.addPart(key, new StringBody(params.get(key), ContentType.create("text/plain", Consts.UTF_8)));
//            }
//        }

        HttpEntity reqEntity = builder.build();
        httpPost.setEntity(reqEntity);

        // 发起请求 并返回请求的响应
        // 创建httpResponse对象
        CloseableHttpResponse httpResponse = null;
        try {
            // 执行请求并获得响应结果
            return getHttpClientResult(httpResponse, httpClient, httpPost);
        } finally {
            // 释放资源
            release(httpResponse, httpClient);
        }

    }

    /**
     * 封装请求头
     *
     * @param params
     * @param httpMethod
     */
    public static void packageHeader(Map<String, String> params, HttpRequestBase httpMethod) {
        // 封装请求头
        if (params != null) {
            Set<Map.Entry<String, String>> entrySet = params.entrySet();
            for (Map.Entry<String, String> entry : entrySet) {
                // 设置到请求头到HttpRequestBase对象中
                httpMethod.setHeader(entry.getKey(), entry.getValue());
            }
        }
    }

    /**
     * 封装请求参数
     *
     * @param params
     * @param httpMethod
     * @throws UnsupportedEncodingException
     */
    public static void packageParam(Map<String, String> params, HttpEntityEnclosingRequestBase httpMethod)
            throws UnsupportedEncodingException {
        // 封装请求参数
        if (params != null) {
            List<NameValuePair> nvps = new ArrayList<NameValuePair>();
            Set<Map.Entry<String, String>> entrySet = params.entrySet();
            for (Map.Entry<String, String> entry : entrySet) {
                nvps.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
            }
            // 设置到请求的http对象中
            httpMethod.setEntity(new UrlEncodedFormEntity(nvps, ENCODING));
        }
    }

    /**
     * 封装json请求参数
     *
     * @param json
     * @param httpMethod
     */
    private static void packageParam(String json, HttpEntityEnclosingRequestBase httpMethod) {
        // 封装请求参数
        if (StringUtils.isNotBlank(json)) {
            // 设置到请求的http对象中
            httpMethod.setEntity(new StringEntity(json, ContentType.APPLICATION_JSON));
        }

    }

    /**
     * 获得响应结果
     *
     * @param httpResponse
     * @param httpClient
     * @param httpMethod
     * @return
     * @throws Exception
     */
    public static HttpClientResult getHttpClientResult(CloseableHttpResponse httpResponse,
                                                       CloseableHttpClient httpClient, HttpRequestBase httpMethod) throws Exception {
        // 执行请求
        httpResponse = httpClient.execute(httpMethod);

        // 获取返回结果
        if (httpResponse != null && httpResponse.getStatusLine() != null) {
            String content = "";
            if (httpResponse.getEntity() != null) {
                content = EntityUtils.toString(httpResponse.getEntity(), ENCODING);
            }
            return new HttpClientResult(httpResponse.getStatusLine().getStatusCode(), content);
        }
        return new HttpClientResult(HttpStatus.SC_INTERNAL_SERVER_ERROR);
    }

    /**
     * 释放资源
     *
     * @param httpResponse
     * @param httpClient
     * @throws IOException
     */
    public static void release(CloseableHttpResponse httpResponse, CloseableHttpClient httpClient) throws IOException {
        // 释放资源
        if (httpResponse != null) {
            httpResponse.close();
        }
        if (httpClient != null) {
            httpClient.close();
        }
    }

    /**
     * 腾讯文档导出Word、PPT上传COS
     * @date 2021/5/27
     * @param cosUrl
     * @param bytes
     * @return java.lang.String
     */
    public static String doPutByte(String cosUrl, byte[] bytes) {
        try {
            HttpClient httpClient = HttpUtil.createTrustHttpClient();
            HttpPut put = new HttpPut(cosUrl);
            RequestConfig requestConfig = RequestConfig.custom()
                    .setConnectTimeout(60 * 1000)
                    .setSocketTimeout(60 * 1000).build();
            put.setConfig(requestConfig);

            put.addHeader("Origin", "https://tdocs.processon.com");
            InputStream inputStream = new ByteArrayInputStream(bytes);
            InputStreamEntity reqEntity = new InputStreamEntity(inputStream, inputStream.available(), ContentType.APPLICATION_OCTET_STREAM);
            put.setEntity(reqEntity);
            HttpResponse response = httpClient.execute(put);
            int statusCode = response.getStatusLine().getStatusCode();
            String resultContent = EntityUtils.toString(response.getEntity(), "utf-8");
            if (statusCode == 200) {
                return ResultCode.SUCCESS;
            } else {
                logger.error("[upload tdocs COS] error, statusCode: {}, resultContent: {}, cosUrl: {}", statusCode, resultContent, cosUrl);
                return ResultCode.ERROR;
            }
        } catch (Exception e) {
            logger.error("[upload tdocs COS] error,  cosUrl: {}", cosUrl, e);
        }
        return ResultCode.ERROR;
    }
}
