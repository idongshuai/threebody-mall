package com.processon.framework.taglib;

import com.processon.common.util.DateUtil;
import com.processon.common.util.UserContextUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;
import java.io.IOException;
import java.util.Date;

/**
 * 处理日期格式展示的taglib
 * @author zy
 *
 */
public class DateFormatTag extends TagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private String date;
	private boolean onlyDate;
	
	@Override
	public int doStartTag() throws JspException {
		HttpServletRequest request = (HttpServletRequest)super.pageContext.getRequest();
		if(super.pageContext.getAttribute("date_format") == null){
			String dateFormat = UserContextUtil.getDateFormat(request);
			super.pageContext.setAttribute("date_format", dateFormat);
		}
		JspWriter out = super.pageContext.getOut();
		String dateFormat = super.pageContext.getAttribute("date_format").toString();
		try {
			if(onlyDate){
				Date parseTime = DateUtil.parseDate(date);
				String output = DateUtil.formatTime(parseTime, dateFormat);
				out.print(output);
			}else{
				Date parseTime = DateUtil.parseTime(date);
				String output = DateUtil.formatTime(parseTime, dateFormat + " HH:mm");
				out.print(output);
			}
		} catch (Exception e) {
			try {
				out.print("-");
			} catch (IOException e1) {
			}
		}
		return TagSupport.SKIP_BODY;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public boolean isOnlyDate() {
		return onlyDate;
	}

	public void setOnlyDate(boolean onlyDate) {
		this.onlyDate = onlyDate;
	}

}
