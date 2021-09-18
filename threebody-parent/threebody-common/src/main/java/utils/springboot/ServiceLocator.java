package net.dongshuai.utils.springboot;

import org.springframework.web.context.WebApplicationContext;

/**
 * Service类容器
 * @author wx
 *
 */
public class ServiceLocator {
	
	private static WebApplicationContext context;

	public static void setContext(WebApplicationContext ctx) {
		context = ctx;
	}
	
	public static <T> T getService(Class<T> clazz){
		return context.getBean(clazz);
	}
	
	public static Object getService(String name){
		return context.getBean(name);
	}
	
	public static <T> T getService(String name, Class<T> clazz){
		return context.getBean(name, clazz);
	}
	
	
}
