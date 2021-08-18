package com.processon.action.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.processon.action.entity.ref.Sharer;

/**
 * 用户文件目录对象
 * @author zy
 *
 */
@Document(collection="user_folder")
public class Folder {
	
	@Id
	private String folderId;
	@Indexed(direction=IndexDirection.DESCENDING)
	private String parentId;
	@Indexed(direction=IndexDirection.ASCENDING)
	private String title;
	@DBRef
	private Sharer creator;
	private String createDate;
	private int itemCount = 0;
	@Indexed(direction=IndexDirection.DESCENDING)
	private boolean isDeleted = false;
	private boolean isTrashRoot = false;
	private String deleteTime;
	@Indexed(direction=IndexDirection.DESCENDING)
	private String teamId;

	public String getFolderId() {
		return folderId;
	}
	public void setFolderId(String folderId) {
		this.folderId = folderId;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Sharer getCreator() {
		return creator;
	}
	public void setCreator(Sharer creator) {
		this.creator = creator;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public int getItemCount() {
		return itemCount;
	}
	public void setItemCount(int itemCount) {
		this.itemCount = itemCount;
	}
	public boolean isDeleted() {
		return isDeleted;
	}
	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	public boolean isTrashRoot() {
		return isTrashRoot;
	}
	public void setTrashRoot(boolean isTrashRoot) {
		this.isTrashRoot = isTrashRoot;
	}
	public String getDeleteTime() {
		return deleteTime;
	}
	public void setDeleteTime(String deleteTime) {
		this.deleteTime = deleteTime;
	}
	public String getTeamId() {
		return teamId;
	}
	public void setTeamId(String teamId) {
		this.teamId = teamId;
	}
}
