package com.purpleaid.beans;

import java.util.List;

public class Area {
	
	double areaID;
	
	String areaCode;
	
	String areaDescription;
	
	String pincode;
	
	String areaRegionCode;
	
	String areaRegionDescription;
	
	double areaRegionID;
	
	List<Area> areaList;
	
	public double getAreaRegionID() {
		return areaRegionID;
	}

	public void setAreaRegionID(double areaRegionID) {
		this.areaRegionID = areaRegionID;
	}

	public String getAreaRegionDescription() {
		return areaRegionDescription;
	}

	public void setAreaRegionDescription(String areaRegionDescription) {
		this.areaRegionDescription = areaRegionDescription;
	}

	boolean areaActiveFlag;
	
	double recid;

	



	public double getAreaID() {
		return areaID;
	}

	public void setAreaID(double areaID) {
		this.areaID = areaID;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public boolean isAreaActiveFlag() {
		return areaActiveFlag;
	}

	public void setAreaActiveFlag(boolean areaActiveFlag) {
		this.areaActiveFlag = areaActiveFlag;
	}

	public String getAreaCode() {
		return areaCode;
	}

	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}

	public String getAreaDescription() {
		return areaDescription;
	}

	public void setAreaDescription(String areaDescription) {
		this.areaDescription = areaDescription;
	}

	

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getAreaRegionCode() {
		return areaRegionCode;
	}

	public void setAreaRegionCode(String areaRegionCode) {
		this.areaRegionCode = areaRegionCode;
	}

	public List<Area> getAreaList() {
		return areaList;
	}

	public void setAreaList(List<Area> areaList) {
		this.areaList = areaList;
	}
	

}
