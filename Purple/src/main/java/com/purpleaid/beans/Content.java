package com.purpleaid.beans;

import java.util.List;

public class Content {

	double contentProductId;

	String contentName;
	
	String contentDesc;
	
	double contentId;
	
	boolean contentActiveFlag;
	
	double recid;
	
	boolean contentPresence;
	
	double contentDPCOLiquidRate;
	
	double contentDPCOLiquidUnit;
	
	double contentDPCOTabletRate;
	
	double contentDPCOTabletUnit;
	
	double contentDPCOInjectionRate;
	
	double contentDPCOInjectionUnit;	
	
	List<ContentType> contentTypeList;
	
	String contentUnit;
	
	double contentStrength;
	
	double contentTypeId;
	
	String contentTypes;
	
	
	
	

	public String getContentTypes() {
		return contentTypes;
	}

	public void setContentTypes(String contentTypes) {
		this.contentTypes = contentTypes;
	}

	public double getContentTypeId() {
		return contentTypeId;
	}

	public void setContentTypeId(double contentTypeId) {
		this.contentTypeId = contentTypeId;
	}

	/**
	 * @return the contentPresence
	 */
	public boolean isContentPresence() {
		return contentPresence;
	}

	/**
	 * @param contentPresence the contentPresence to set
	 */
	public void setContentPresence(boolean contentPresence) {
		this.contentPresence = contentPresence;
	}

	/**
	 * @return the contentProductId
	 */
	public double getContentProductId() {
		return contentProductId;
	}

	/**
	 * @param contentProductId the contentProductId to set
	 */
	public void setContentProductId(double contentProductId) {
		this.contentProductId = contentProductId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getContentId() {
		return contentId;
	}

	public void setContentId(double contentId) {
		this.contentId = contentId;
	}

	public boolean isContentActiveFlag() {
		return contentActiveFlag;
	}

	public void setContentActiveFlag(boolean contentActiveFlag) {
		this.contentActiveFlag = contentActiveFlag;
	}

	public String getContentName() {
		return contentName;
	}

	public void setContentName(String contentName) {
		this.contentName = contentName;
	}

	public String getContentDesc() {
		return contentDesc;
	}

	public void setContentDesc(String contentDesc) {
		this.contentDesc = contentDesc;
	}

	public double getContentDPCOLiquidRate() {
		return contentDPCOLiquidRate;
	}

	public void setContentDPCOLiquidRate(double contentDPCOLiquidRate) {
		this.contentDPCOLiquidRate = contentDPCOLiquidRate;
	}

	public double getContentDPCOLiquidUnit() {
		return contentDPCOLiquidUnit;
	}

	public void setContentDPCOLiquidUnit(double contentDPCOLiquidUnit) {
		this.contentDPCOLiquidUnit = contentDPCOLiquidUnit;
	}

	public double getContentDPCOTabletRate() {
		return contentDPCOTabletRate;
	}

	public void setContentDPCOTabletRate(double contentDPCOTabletRate) {
		this.contentDPCOTabletRate = contentDPCOTabletRate;
	}

	public double getContentDPCOTabletUnit() {
		return contentDPCOTabletUnit;
	}

	public void setContentDPCOTabletUnit(double contentDPCOTabletUnit) {
		this.contentDPCOTabletUnit = contentDPCOTabletUnit;
	}

	public double getContentDPCOInjectionRate() {
		return contentDPCOInjectionRate;
	}

	public void setContentDPCOInjectionRate(double contentDPCOInjectionRate) {
		this.contentDPCOInjectionRate = contentDPCOInjectionRate;
	}

	public double getContentDPCOInjectionUnit() {
		return contentDPCOInjectionUnit;
	}

	public void setContentDPCOInjectionUnit(double contentDPCOInjectionUnit) {
		this.contentDPCOInjectionUnit = contentDPCOInjectionUnit;
	}

	public List<ContentType> getContentTypeList() {
		return contentTypeList;
	}

	public void setContentTypeList(List<ContentType> contentTypeList) {
		this.contentTypeList = contentTypeList;
	}

	public String getContentUnit() {
		return contentUnit;
	}

	public void setContentUnit(String contentUnit) {
		this.contentUnit = contentUnit;
	}

	public double getContentStrength() {
		return contentStrength;
	}

	public void setContentStrength(double contentStrength) {
		this.contentStrength = contentStrength;
	}
	
	
}
