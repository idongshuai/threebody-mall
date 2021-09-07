package com.processon.framework.taglib;

import com.processon.common.config.AppConfig;
import com.processon.common.config.ConfigKeys;
import com.processon.common.config.constants.Constants;
import com.processon.common.util.FileUtil;
import com.processon.common.util.JSCompressor;
import com.processon.common.util.UserContextUtil;
import com.processon.common.util.Validator;
import com.processon.web.template.TemplateFactory;
import freemarker.template.Template;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.TagSupport;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.StringReader;
import java.io.StringWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;

/**
 * 处理script资源的taglib
 */
public class ScriptControllTag extends TagSupport {
	
	private static final long serialVersionUID = 1L;
	
	private String src;
	
	@Override
	public int doStartTag() throws JspException {
		if(Validator.isEmpty(src)){
			return TagSupport.SKIP_BODY;
		}
		HttpServletRequest request = (HttpServletRequest)super.pageContext.getRequest();
		if(super.pageContext.getAttribute("locale") == null){
			String locale = UserContextUtil.getLocale(request);
			super.pageContext.setAttribute("locale", locale);
		}
		String locale = super.pageContext.getAttribute("locale").toString();
		JspWriter out = super.pageContext.getOut();
		try {
			if(StaticResourceVersionHolder.getVersion(src) == null || AppConfig.getBooleanProperty("resource.always_build")){
				//如果版本未记录，则获取版本，并记录
				Long version = getResourceVersion();
				StaticResourceVersionHolder.setVersion(src, version);
				buildScript(Constants.LOCALE_EN);
				buildScript(Constants.LOCALE_ZH);
				buildScript(Constants.LOCALE_PT);
				buildScript(Constants.LOCALE_DE);
				buildScript(Constants.LOCALE_IT);
			}
			String outputSrc = "/wpsjs/" + locale + "/" + src + "?" + StaticResourceVersionHolder.getVersion(src);
			out.print("<script type='text/javascript' charset='UTF-8' src='" + outputSrc + "'></script>");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return TagSupport.SKIP_BODY;
	}
	
	/**
	 * 获取静态文件的版本，即上次修改时间秒数
	 * @return
	 */
	private Long getResourceVersion(){
		String scriptSrc = "scripts/" + src;
		String fileDir = AppConfig.getParam(ConfigKeys.WEB_ROOT_PATH) + scriptSrc;
		fileDir = fileDir.replace("/", File.separator);
		File scriptFile = new File(fileDir);
		return scriptFile.lastModified() / 1000;
	}
	
	/**
	 * 编辑JS
	 * @param locale
	 * @throws Exception
	 */
	private void buildScript(String locale) throws Exception{
		Template template = TemplateFactory.getTemplate(src);
		String scriptSrc = "wpsjs/" + locale + "/" + src;
		String fileDir = AppConfig.getParam(ConfigKeys.WEB_ROOT_PATH) + scriptSrc;
		fileDir = fileDir.replace("/", File.separator);
		FileUtil.makeFileDirs(fileDir);
		File scriptFile = new File(fileDir);
		Map<String, String> rootMap = new HashMap<String, String>();
		rootMap.put("locale", locale);
		OutputStream stream = new FileOutputStream(scriptFile);
		OutputStreamWriter writer = new OutputStreamWriter(stream, "UTF-8");
		if(AppConfig.getBooleanProperty("resource.compress_script")){
			//混淆压缩JS
			Writer stringWriter = new StringWriter();
			template.process(rootMap, stringWriter);
			String templateText = stringWriter.toString();
			stringWriter.close();
			StringReader reader = new StringReader(templateText);
			JSCompressor.compress(reader, writer);
			reader.close();
		}else{
			template.process(rootMap, writer);
		}
		writer.close();
		stream.close();
	}

	public String getSrc() {
		return src;
	}

	public void setSrc(String src) {
		this.src = src;
	}
}
