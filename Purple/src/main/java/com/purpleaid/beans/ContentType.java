package com.purpleaid.beans;


public class ContentType {

	double Id;
	
	double contentId;
	
	double contentTypeId;
	
	String contentTypeName;
	
	String contentTypeDescription;
	
	boolean contentTypeFlag;
	
	double contentTypeProductId;
	
	double recid;
	

	public double getRecid() {
		return recid;
	}

	/**
	 * @param recid the recid to set
	 */
	public void setRecid(double recid) {
		this.recid = recid;
	}

	/**
	 * @return the contentTypeProductId
	 */
	public double getContentTypeProductId() {
		return contentTypeProductId;
	}

	/**
	 * @param contentTypeProductId the contentTypeProductId to set
	 */
	public void setContentTypeProductId(double contentTypeProductId) {
		this.contentTypeProductId = contentTypeProductId;
	}

	public double getId() {
		return Id;
	}

	public void setId(double id) {
		Id = id;
	}

	public double getContentId() {
		return contentId;
	}

	public void setContentId(double contentId) {
		this.contentId = contentId;
	}

	public double getContentTypeId() {
		return contentTypeId;
	}

	public void setContentTypeId(double contentTypeId) {
		this.contentTypeId = contentTypeId;
	}

	public String getContentTypeName() {
		return contentTypeName;
	}

	public void setContentTypeName(String contentTypeName) {
		this.contentTypeName = contentTypeName;
	}

	

	/**
	 * @return the contentTypeDescription
	 */
	public String getContentTypeDescription() {
		return contentTypeDescription;
	}

	/**
	 * @param contentTypeDescription the contentTypeDescription to set
	 */
	public void setContentTypeDescription(String contentTypeDescription) {
		this.contentTypeDescription = contentTypeDescription;
	}

	/**
	 * @return the contentTypeFlag
	 */
	public boolean isContentTypeFlag() {
		return contentTypeFlag;
	}

	/**
	 * @param contentTypeFlag the contentTypeFlag to set
	 */
	public void setContentTypeFlag(boolean contentTypeFlag) {
		this.contentTypeFlag = contentTypeFlag;
	}
	
}
