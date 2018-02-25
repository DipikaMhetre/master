package com.purpleaid.beans;

import java.util.List;

public class Division {

	String divisionCompanyName;
	
	double divisionCompanyId;
	
	String divisionCode;
	
	double divisionId;
	
	String divisionName;
	
	String divisionRemark;
	
	String divisionContactName;
	
	double divisionContactPhone;
	
	String divisionContactEmail;
	
	boolean divisionActiveFlag;
	
	List<MR> divisionMrsList;
	
	double recid;
	
	List<Division> divisionList;
	
	List<Product> productList;
	
	
	
	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getDivisionCompanyName() {
		return divisionCompanyName;
	}

	public void setDivisionCompanyName(String divisionCompanyName) {
		this.divisionCompanyName = divisionCompanyName;
	}

	public String getDivisionCode() {
		return divisionCode;
	}

	public void setDivisionCode(String divisionCode) {
		this.divisionCode = divisionCode;
	}

	public String getDivisionName() {
		return divisionName;
	}

	public void setDivisionName(String divisionName) {
		this.divisionName = divisionName;
	}

	public String getDivisionRemark() {
		return divisionRemark;
	}

	public void setDivisionRemark(String divisionRemark) {
		this.divisionRemark = divisionRemark;
	}

	public String getDivisionContactName() {
		return divisionContactName;
	}

	public void setDivisionContactName(String divisionContactName) {
		this.divisionContactName = divisionContactName;
	}

	

	public double getDivisionCompanyId() {
		return divisionCompanyId;
	}

	public void setDivisionCompanyId(double divisionCompanyId) {
		this.divisionCompanyId = divisionCompanyId;
	}

	public double getDivisionId() {
		return divisionId;
	}

	public void setDivisionId(double divisionId) {
		this.divisionId = divisionId;
	}

	public double getDivisionContactPhone() {
		return divisionContactPhone;
	}

	public void setDivisionContactPhone(double divisionContactPhone) {
		this.divisionContactPhone = divisionContactPhone;
	}

	public String getDivisionContactEmail() {
		return divisionContactEmail;
	}

	public void setDivisionContactEmail(String divisionContactEmail) {
		this.divisionContactEmail = divisionContactEmail;
	}

	public boolean isDivisionActiveFlag() {
		return divisionActiveFlag;
	}

	public void setDivisionActiveFlag(boolean divisionActiveFlag) {
		this.divisionActiveFlag = divisionActiveFlag;
	}

	public List<MR> getDivisionMrsList() {
		return divisionMrsList;
	}

	public void setDivisionMrsList(List<MR> divisionMrsList) {
		this.divisionMrsList = divisionMrsList;
	}

	public List<Division> getDivisionList() {
		return divisionList;
	}

	public void setDivisionList(List<Division> divisionList) {
		this.divisionList = divisionList;
	}
	
	
	
}
