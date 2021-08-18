package com.processon.action.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.processon.action.entity.ref.Sharer;

@Document(collection="feedback")
public class FeedBack {
	
	@Id
	private  String  feedbackId;
	private  String  url;
	@DBRef
	private  Sharer member;
	private  String  content;
	private  String  email;
	private  String  feedbackName;
	private  String  submitTime;
	// admin haven't been  reading is false,reading after modify true
	private boolean isReply = false;
	private String replyContent;
	private String lang;
	private String category;
	private boolean isWPS = true;
	
	public String getLang() {
		return lang;
	}
	public void setLang(String lang) {
		this.lang = lang;
	}
	
	public String getReplyContent() {
		return replyContent;
	}
	public void setReplyContent(String replyContent) {
		this.replyContent = replyContent;
	}
	public boolean isReply() {
		return isReply;
	}
	public void setReply(boolean isReply) {
		this.isReply = isReply;
	}
	public String getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(String feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Sharer getMember() {
		return member;
	}
	public void setMember(Sharer member) {
		this.member = member;
	}
	public String getFeedbackName() {
		return feedbackName;
	}
	public void setFeedbackName(String feedbackName) {
		this.feedbackName = feedbackName;
	}
	public String getSubmitTime() {
		return submitTime;
	}
	public void setSubmitTime(String submitTime) {
		this.submitTime = submitTime;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public boolean isWPS() {
		return isWPS;
	}
	public void setWPS(boolean isWPS) {
		this.isWPS = isWPS;
	}
	

}
