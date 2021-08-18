package com.processon.action.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.processon.action.entity.ref.Sharer;

/**
 * @author Administrator
 * 登录日志
 *
 */
@Document(collection="user_login_log")
public class LoginLog {

	@Id
	private String logId;
	private Sharer user;
	private String loginTime;
	private String registDate;

	public LoginLog() {
	}
	
	public LoginLog(Sharer user, String loginTime, String registDate) {
		this.user = user;
		this.loginTime = loginTime;
		this.registDate = registDate;
	}

	public String getLogId() {
		return logId;
	}
	public void setLogId(String logId) {
		this.logId = logId;
	}
	public Sharer getUser() {
		return user;
	}
	public void setUser(Sharer user) {
		this.user = user;
	}
	public String getLoginTime() {
		return loginTime;
	}
	public void setLoginTime(String loginTime) {
		this.loginTime = loginTime;
	}
	public String getRegistDate() {
		return registDate;
	}
	public void setRegistDate(String registDate) {
		this.registDate = registDate;
	}

}
