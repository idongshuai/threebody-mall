package com.processon.framework.taglib;

import java.util.HashMap;
import java.util.Map;


/**
 * 静态资源版本控制
 * @author wx
 *
 */
public class StaticResourceVersionHolder {
	
	private static final Map<String, Long> resourceVersions = new HashMap<String, Long>();
	
	public static void setVersion(String resource, Long version){
		resourceVersions.put(resource, version);
	}
	
	public static Long getVersion(String resource){
		return resourceVersions.get(resource);
	}
	
}
