package com.processon.framework.taglib;

import com.processon.common.config.AppConfig;
import com.processon.common.config.ConfigKeys;
import com.processon.common.config.constants.Constants;
import com.processon.common.util.UserContextUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;
import java.io.File;
import java.io.IOException;

public class StylesheetControllTag  extends TagSupport {

	private String src;
	
	private static final long serialVersionUID = 1L;

	@Override
	public int doStartTag() throws JspException {
		HttpServletRequest request = (HttpServletRequest)super.pageContext.getRequest();
		if(super.pageContext.getAttribute("locale") == null){
			String locale = UserContextUtil.getLocale(request);
			super.pageContext.setAttribute("locale", locale);
		}
		String locale = super.pageContext.getAttribute("locale").toString();
		JspWriter out = super.pageContext.getOut();
		try {
			if(src.equals("/themes/default/global.css")){
				//如果加载的是global.css，输出一个global字体
				if(locale.equals(Constants.LOCALE_ZH)){
					out.println("<style type='text/css'>body{font-family:'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif;}</style>");
				}else{
					out.println("<style type='text/css'>body{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;}</style>");
				}
			}
			if(StaticResourceVersionHolder.getVersion(src) == null || AppConfig.getBooleanProperty("resource.always_build")){
				//如果版本未记录，则获取版本，并记录
				Long version = getResourceVersion();
				StaticResourceVersionHolder.setVersion(src, version);
			}
			out.println("<link type='text/css' rel='stylesheet' href='" + src + "?" +StaticResourceVersionHolder.getVersion(src) + "'/>");
		} catch (IOException e) {
			e.printStackTrace();
		}
		return TagSupport.SKIP_BODY;
	}
	
	/**
	 * 获取静态文件的版本，即上次修改时间秒数
	 * @return
	 */
	private Long getResourceVersion(){
		String fileDir = AppConfig.getParam(ConfigKeys.WEB_ROOT_PATH) + src;
		fileDir = fileDir.replace("/", File.separator);
		File styleFile = new File(fileDir);
		return styleFile.lastModified() / 1000;
	}
	
	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
