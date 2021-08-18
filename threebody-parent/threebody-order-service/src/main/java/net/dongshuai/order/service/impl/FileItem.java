package com.processon.action.entity;

public class FileItem {

	private String name;
	private String bucketName;
	private byte[] bytes;
	private String contentType;
	
	public FileItem(String name, String bucketName, byte[] bytes,
			String contentType) {
		super();
		this.name = name;
		this.bucketName = bucketName;
		this.bytes = bytes;
		this.contentType = contentType;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBucketName() {
		return bucketName;
	}
	public void setBucketName(String bucketName) {
		this.bucketName = bucketName;
	}
	public byte[] getBytes() {
		return bytes;
	}
	public void setBytes(byte[] bytes) {
		this.bytes = bytes;
	}
	public String getContentType() {
		return contentType;
	}
	public void setContentType(String contentType) {
		this.contentType = contentType;
	}
}
