package com.processon.framework.taglib;

import com.processon.common.config.constants.Constants;
import com.processon.common.config.data.MessageResource;
import com.processon.common.util.UserContextUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;

/**
 * 处理页面资源的taglib
 * @author wx
 *
 */
public class I18NMessageTag extends TagSupport {

	private static final long serialVersionUID = 1L;
	
	private String resource;
	private Object args;
	
	@Override
	public int doStartTag() throws JspException {
		HttpServletRequest request = (HttpServletRequest)super.pageContext.getRequest();
		if(super.pageContext.getAttribute("locale") == null){
			String locale = UserContextUtil.getLocale(request);
			super.pageContext.setAttribute("locale", locale);
		}
		String locale = Constants.LOCALE_ZH;//super.pageContext.getAttribute("locale").toString();
		JspWriter out = super.pageContext.getOut();
		try {
			String[] argsArray = null;
			if(args != null){
				argsArray = args.toString().split(",");
			}
			String message = MessageResource.getMessage(locale, resource, argsArray);
			out.print(message);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return TagSupport.SKIP_BODY;
	}

	public String getResource() {
		return resource;
	}

	public void setResource(String resource) {
		this.resource = resource;
	}

	public Object getArgs() {
		return args;
	}

	public void setArgs(Object args) {
		this.args = args;
	}

}
