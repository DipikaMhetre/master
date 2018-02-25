package com.purpleaid.beans;

import java.util.List;

public class BatchScheme {
	
	double batchSchemeId;
	
	double batchSchemePBAID;
	
	String batchSchemeStartDate;
	
	String batchSchemeEndDate;
	
	double batchSchemeMinStock;
	
	String batchSchemeRemark;
	
	boolean batchSchemeActiveFlag;
	
	boolean batchSchemePBASchemeLockFlag;
	
	List<BatchSchemeDetails> bsdList;
	
	List<BatchScheme> bsList;
	
	
 
	public List<BatchScheme> getBsList() {
		return bsList;
	}

	public void setBsList(List<BatchScheme> bsList) {
		this.bsList = bsList;
	}

	public double getBatchSchemeId() {
		return batchSchemeId;
	}

	public void setBatchSchemeId(double batchSchemeId) {
		this.batchSchemeId = batchSchemeId;
	}



	public double getBatchSchemePBAID() {
		return batchSchemePBAID;
	}

	public void setBatchSchemePBAID(double batchSchemePBAID) {
		this.batchSchemePBAID = batchSchemePBAID;
	}

	public String getBatchSchemeStartDate() {
		return batchSchemeStartDate;
	}

	public void setBatchSchemeStartDate(String batchSchemeStartDate) {
		this.batchSchemeStartDate = batchSchemeStartDate;
	}

	public String getBatchSchemeEndDate() {
		return batchSchemeEndDate;
	}

	public void setBatchSchemeEndDate(String batchSchemeEndDate) {
		this.batchSchemeEndDate = batchSchemeEndDate;
	}

	public double getBatchSchemeMinStock() {
		return batchSchemeMinStock;
	}

	public void setBatchSchemeMinStock(double batchSchemeMinStock) {
		this.batchSchemeMinStock = batchSchemeMinStock;
	}

	public String getBatchSchemeRemark() {
		return batchSchemeRemark;
	}

	public void setBatchSchemeRemark(String batchSchemeRemark) {
		this.batchSchemeRemark = batchSchemeRemark;
	}

	public boolean isBatchSchemeActiveFlag() {
		return batchSchemeActiveFlag;
	}

	public void setBatchSchemeActiveFlag(boolean batchSchemeActiveFlag) {
		this.batchSchemeActiveFlag = batchSchemeActiveFlag;
	}



	public boolean isBatchSchemePBASchemeLockFlag() {
		return batchSchemePBASchemeLockFlag;
	}

	public void setBatchSchemePBASchemeLockFlag(boolean batchSchemePBASchemeLockFlag) {
		this.batchSchemePBASchemeLockFlag = batchSchemePBASchemeLockFlag;
	}

	public List<BatchSchemeDetails> getBsdList() {
		return bsdList;
	}

	public void setBsdList(List<BatchSchemeDetails> bsdList) {
		this.bsdList = bsdList;
	}
	
	
	
	

}
