package com.processon.action.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.processon.common.util.DateUtil;

/**
 * 用户收藏实体类
 * @author zy
 *
 */
@Document(collection="user_favourite")
public class Favourite {
	
	@Id
	private String favId;
	//用户名
	private String userId;
	//流程ID
	private String chartId;
	//收藏时间
	private String favouriteTime;
	
	/******Contructors****************************/
	
	public Favourite() {
		super();
	}
	public Favourite(String userId, String chartId) {
		super();
		this.userId = userId;
		this.chartId = chartId;
		favouriteTime = DateUtil.currentTimeString();
	}
	
	/******getter and setter************/
	
	public String getFavId() {
		return favId;
	}
	public void setFavId(String favId) {
		this.favId = favId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getChartId() {
		return chartId;
	}
	public void setChartId(String chartId) {
		this.chartId = chartId;
	}
	public String getFavouriteTime() {
		return favouriteTime;
	}
	public void setFavouriteTime(String favouriteTime) {
		this.favouriteTime = favouriteTime;
	}
	
}
