package com.purpleaid.beans;

import java.util.List;

public class Salesman {

	String salesmanName;
	
	double salesmanID;
	
	String addressLine1;
	
	String addressLine2;
	
	String salesmanEmail;
	
	double salesmanFax;
	
	double salesmanPhone;
	
	int salesmanLandlineNumber;
	
	String salesmanEmergenyContactPerson;
	
	String salesmanEmergencyAddressLine1;
	
	String salesmanEmergencyAddressLine2;

	double salesmanEmergencyPhone;
	
	int salesmanEmergencyLandline;
	
	double salesmanEmergencyFax;
	
	String salesmanEmergencyEmail;
	
	double recid;
	
	City salesmanCity;
	
	String salesmanRouteID;
	
	List<Salesman> salesmanList;
	
	public String getSalesmanRouteID() {
		return salesmanRouteID;
	}

	public void setSalesmanRouteID(String salesmanRouteID) {
		this.salesmanRouteID = salesmanRouteID;
	}

	public City getSalesmanCity() {
		return salesmanCity;
	}

	public void setSalesmanCity(City salesmanCity) {
		this.salesmanCity = salesmanCity;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getSalesmanName() {
		return salesmanName;
	}

	public void setSalesmanName(String salesmanName) {
		this.salesmanName = salesmanName;
	}

	public double getSalesmanID() {
		return salesmanID;
	}

	public void setSalesmanID(double salesmanID) {
		this.salesmanID = salesmanID;
	}

	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getSalesmanEmail() {
		return salesmanEmail;
	}

	public void setSalesmanEmail(String salesmanEmail) {
		this.salesmanEmail = salesmanEmail;
	}

	public double getSalesmanFax() {
		return salesmanFax;
	}

	public void setSalesmanFax(double salesmanFax) {
		this.salesmanFax = salesmanFax;
	}

	public double getSalesmanPhone() {
		return salesmanPhone;
	}

	public void setSalesmanPhone(double salesmanPhone) {
		this.salesmanPhone = salesmanPhone;
	}

	public int getSalesmanLandlineNumber() {
		return salesmanLandlineNumber;
	}

	public void setSalesmanLandlineNumber(int salesmanLandlineNumber) {
		this.salesmanLandlineNumber = salesmanLandlineNumber;
	}

	public String getSalesmanEmergenyContactPerson() {
		return salesmanEmergenyContactPerson;
	}

	public void setSalesmanEmergenyContactPerson(
			String salesmanEmergenyContactPerson) {
		this.salesmanEmergenyContactPerson = salesmanEmergenyContactPerson;
	}

	public String getSalesmanEmergencyAddressLine1() {
		return salesmanEmergencyAddressLine1;
	}

	public void setSalesmanEmergencyAddressLine1(
			String salesmanEmergencyAddressLine1) {
		this.salesmanEmergencyAddressLine1 = salesmanEmergencyAddressLine1;
	}

	public String getSalesmanEmergencyAddressLine2() {
		return salesmanEmergencyAddressLine2;
	}

	public void setSalesmanEmergencyAddressLine2(
			String salesmanEmergencyAddressLine2) {
		this.salesmanEmergencyAddressLine2 = salesmanEmergencyAddressLine2;
	}

	public double getSalesmanEmergencyPhone() {
		return salesmanEmergencyPhone;
	}

	public void setSalesmanEmergencyPhone(double salesmanEmergencyPhone) {
		this.salesmanEmergencyPhone = salesmanEmergencyPhone;
	}

	public int getSalesmanEmergencyLandline() {
		return salesmanEmergencyLandline;
	}

	public void setSalesmanEmergencyLandline(int salesmanEmergencyLandline) {
		this.salesmanEmergencyLandline = salesmanEmergencyLandline;
	}

	public double getSalesmanEmergencyFax() {
		return salesmanEmergencyFax;
	}

	public void setSalesmanEmergencyFax(double salesmanEmergencyFax) {
		this.salesmanEmergencyFax = salesmanEmergencyFax;
	}

	public String getSalesmanEmergencyEmail() {
		return salesmanEmergencyEmail;
	}

	public void setSalesmanEmergencyEmail(String salesmanEmergencyEmail) {
		this.salesmanEmergencyEmail = salesmanEmergencyEmail;
	}

	public boolean isSalesmanActiveFlag() {
		return salesmanActiveFlag;
	}

	public void setSalesmanActiveFlag(boolean salesmanActiveFlag) {
		this.salesmanActiveFlag = salesmanActiveFlag;
	}

	public boolean isSalesmanLockFlag() {
		return salesmanLockFlag;
	}

	public void setSalesmanLockFlag(boolean salesmanLockFlag) {
		this.salesmanLockFlag = salesmanLockFlag;
	}

	boolean salesmanActiveFlag;
	
	boolean salesmanLockFlag;

	public List<Salesman> getSalesmanList() {
		return salesmanList;
	}

	public void setSalesmanList(List<Salesman> salesmanList) {
		this.salesmanList = salesmanList;
	}
	
	
	
}
