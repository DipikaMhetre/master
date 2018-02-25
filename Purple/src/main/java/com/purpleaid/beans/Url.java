package com.purpleaid.beans;

public class Url {

	double urlId;
	
	double urlTypeId;
	
	String url;
	
	String urlTypeDescription;
	
	EntityDetails entity;
	
	double urlCDID;
	
	boolean urlIsDeleted;
	
	

	public boolean isUrlIsDeleted() {
		return urlIsDeleted;
	}

	public void setUrlIsDeleted(boolean urlIsDeleted) {
		this.urlIsDeleted = urlIsDeleted;
	}

	public double getUrlCDID() {
		return urlCDID;
	}

	public void setUrlCDID(double urlCDID) {
		this.urlCDID = urlCDID;
	}

	public EntityDetails getEntity() {
		return entity;
	}

	public void setEntity(EntityDetails entity) {
		this.entity = entity;
	}

	public String getUrlTypeDescription() {
		return urlTypeDescription;
	}

	public void setUrlTypeDescription(String urlTypeDescription) {
		this.urlTypeDescription = urlTypeDescription;
	}

	public double getUrlId() {
		return urlId;
	}

	public void setUrlId(double urlId) {
		this.urlId = urlId;
	}

	public double getUrlTypeId() {
		return urlTypeId;
	}

	public void setUrlTypeId(double urlTypeId) {
		this.urlTypeId = urlTypeId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	
	
}
