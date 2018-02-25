package com.purpleaid.beans;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)

public class CustomerLicences {
	
	String customerLicenceType;
	
	double customerLicenceID;
	
	String customerLicenceStartDate;
	
	String customerLicenceEndDate;
	
	double clID;
	
	double customerLicenceNumber ;
	
	double customerLicenceIndex;
		
	double recid;
	
	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getCustomerLicenceNumber() {
		return customerLicenceNumber;
	}

	public double getCustomerLicenceIndex() {
		return customerLicenceIndex;
	}

	public void setCustomerLicenceIndex(double customerLicenceIndex) {
		this.customerLicenceIndex = customerLicenceIndex;
	}

	public void setCustomerLicenceNumber(double customerLicenceNumber) {
		this.customerLicenceNumber = customerLicenceNumber;
	}

	double customerId;
	
	List<Licence> LicenceList;

	public double getCustomerId() {
		return customerId;
	}

	public void setCustomerId(double customerId) {
		this.customerId = customerId;
	}



	public List<Licence> getLicenceList() {
		return LicenceList;
	}

	public void setLicenceList(List<Licence> licenceList) {
		LicenceList = licenceList;
	}

	public double getCustomerLicenceID() {
		return customerLicenceID;
	}

	public void setCustomerLicenceID(double customerLicenceID) {
		this.customerLicenceID = customerLicenceID;
	}
	
	public double getClID() {
		return clID;
	}

	public void setClID(double clID) {
		this.clID = clID;
	}

	public String getCustomerLicenceType() {
		return customerLicenceType;
	}

	public void setCustomerLicenceType(String customerLicenceType) {
		this.customerLicenceType = customerLicenceType;
	}

	public String getCustomerLicenceStartDate() {
		return customerLicenceStartDate;
	}

	public void setCustomerLicenceStartDate(String customerLicenceStartDate) {
		this.customerLicenceStartDate = customerLicenceStartDate;
	}

	public String getCustomerLicenceEndDate() {
		return customerLicenceEndDate;
	}

	public void setCustomerLicenceEndDate(String customerLicenceEndDate) {
		this.customerLicenceEndDate = customerLicenceEndDate;
	}



}
