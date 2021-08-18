package com.processon.action.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.processon.action.entity.ref.Sharer;

@Document(collection="profile_view_history")
public class ProfileViewHistory {

	@Id
	private String profileId;
	private String viewedUserId;	//被查看者
	@DBRef
	private Sharer viewer;	//查看者
	private String viewTime;
	
	
	public String getProfileId() {
		return profileId;
	}
	public void setProfileId(String profileId) {
		this.profileId = profileId;
	}
	public String getViewedUserId() {
		return viewedUserId;
	}
	public void setViewedUserId(String viewedUserId) {
		this.viewedUserId = viewedUserId;
	}
	public Sharer getViewer() {
		return viewer;
	}
	public void setViewer(Sharer viewer) {
		this.viewer = viewer;
	}
	public String getViewTime() {
		return viewTime;
	}
	public void setViewTime(String viewTime) {
		this.viewTime = viewTime;
	}
	
	
	
}
