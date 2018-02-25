package com.purpleaid.beans;

import java.util.List;

public class EntityDetails {

	double entityDetailsId;
	
	double entityDetailsTypeId;
	
	String entityDeatilsDescription;
	
	List<Company> entityCompanyList;
	
	
	
	
	public List<Company> getEntityCompanyList() {
		return entityCompanyList;
	}



	public void setEntityCompanyList(List<Company> entityCompanyList) {
		this.entityCompanyList = entityCompanyList;
	}



	public double getEntityDetailsId() {
		return entityDetailsId;
	}



	public void setEntityDetailsId(double entityDetailsId) {
		this.entityDetailsId = entityDetailsId;
	}

	public double getEntityDetailsTypeId() {
		return entityDetailsTypeId;
	}

	public void setEntityDetailsTypeId(double entityDetailsTypeId) {
		this.entityDetailsTypeId = entityDetailsTypeId;
	}

	public String getEntityDeatilsDescription() {
		return entityDeatilsDescription;
	}

	public void setEntityDeatilsDescription(String entityDeatilsDescription) {
		this.entityDeatilsDescription = entityDeatilsDescription;
	}
	
	
	
}
