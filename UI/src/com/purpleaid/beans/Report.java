package com.purpleaid.beans;

import java.util.List;

public class Report {

	double reportCategoryId;
	
	String reportName;
	
	double reportId;
	
	double reportsubCategoryId;
	
	int reportCategoryPosition;
	
	String reportCategoryName;
	
	String reportDescription;
	
	boolean reportflgActive;
	
	String reportCategoryImageUrl;
	
	String reportUiUrl;
	
	String reportUrl;
	
	double reportNotificationId;
	
	String reportNotificationDate;
	
	int reportNotificationPriority;
	
	String reportNotification;
	
	boolean reportNotificationflgActive;
	
	double recid;
	
	List<Report> subCategoryList;
	
	

	public String getReportName() {
		return reportName;
	}

	public void setReportName(String reportName) {
		this.reportName = reportName;
	}

	public List<Report> getSubCategoryList() {
		return subCategoryList;
	}

	public void setSubCategoryList(List<Report> subCategoryList) {
		this.subCategoryList = subCategoryList;
	}

	public double getReportCategoryId() {
		return reportCategoryId;
	}

	public void setReportCategoryId(double reportCategoryId) {
		this.reportCategoryId = reportCategoryId;
	}

	public double getReportId() {
		return reportId;
	}

	public void setReportId(double reportId) {
		this.reportId = reportId;
	}

	public double getReportsubCategoryId() {
		return reportsubCategoryId;
	}

	public void setReportsubCategoryId(double reportsubCategoryId) {
		this.reportsubCategoryId = reportsubCategoryId;
	}

	public int getReportCategoryPosition() {
		return reportCategoryPosition;
	}

	public void setReportCategoryPosition(int reportCategoryPosition) {
		this.reportCategoryPosition = reportCategoryPosition;
	}

	public String getReportCategoryName() {
		return reportCategoryName;
	}

	public void setReportCategoryName(String reportCategoryName) {
		this.reportCategoryName = reportCategoryName;
	}

	public String getReportDescription() {
		return reportDescription;
	}

	public void setReportDescription(String reportDescription) {
		this.reportDescription = reportDescription;
	}

	public boolean isReportflgActive() {
		return reportflgActive;
	}

	public void setReportflgActive(boolean reportflgActive) {
		this.reportflgActive = reportflgActive;
	}

	public String getReportCategoryImageUrl() {
		return reportCategoryImageUrl;
	}

	public void setReportCategoryImageUrl(String reportCategoryImageUrl) {
		this.reportCategoryImageUrl = reportCategoryImageUrl;
	}

	public String getReportUiUrl() {
		return reportUiUrl;
	}

	public void setReportUiUrl(String reportUiUrl) {
		this.reportUiUrl = reportUiUrl;
	}

	public String getReportUrl() {
		return reportUrl;
	}

	public void setReportUrl(String reportUrl) {
		this.reportUrl = reportUrl;
	}

	public double getReportNotificationId() {
		return reportNotificationId;
	}

	public void setReportNotificationId(double reportNotificationId) {
		this.reportNotificationId = reportNotificationId;
	}

	public String getReportNotificationDate() {
		return reportNotificationDate;
	}

	public void setReportNotificationDate(String reportNotificationDate) {
		this.reportNotificationDate = reportNotificationDate;
	}

	public int getReportNotificationPriority() {
		return reportNotificationPriority;
	}

	public void setReportNotificationPriority(int reportNotificationPriority) {
		this.reportNotificationPriority = reportNotificationPriority;
	}

	public String getReportNotification() {
		return reportNotification;
	}

	public void setReportNotification(String reportNotification) {
		this.reportNotification = reportNotification;
	}

	public boolean isReportNotificationflgActive() {
		return reportNotificationflgActive;
	}

	public void setReportNotificationflgActive(boolean reportNotificationflgActive) {
		this.reportNotificationflgActive = reportNotificationflgActive;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

}