package net.dongshuai.utils.http;

import org.apache.http.client.methods.HttpEntityEnclosingRequestBase;

import java.net.URI;

/**
 * HttpGet方式带请求体
 *
 * @author ds
 * @version 1.0.0
 * @date 2021/9/13
 */
public class HttpGetWithBody extends HttpEntityEnclosingRequestBase {

    public static final String METHOD_NAME = "GET";

    @Override
    public String getMethod() {
        return METHOD_NAME;
    }

    public HttpGetWithBody(final String uri) {
        super();
        setURI(URI.create(uri));
    }

    public HttpGetWithBody(final URI uri) {
        super();
        setURI(uri);
    }

    public HttpGetWithBody() {
        super();
    }
}
