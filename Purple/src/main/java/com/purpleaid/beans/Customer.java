package com.purpleaid.beans;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)

public class Customer {
	
	double customerId;
	
	double recid;
	
	String customerName;
	
	String customerAccountCode;
	
	String customerAccountName;
	
	String customerOtherInfo;
	
	String customerType;
	
	String customerArea;
	
	String customerSalesman;
	
	String customerRemark;
	
	double customerTaxId;
	
	String customerLedgerType;
	
	String customerAccountGroup;
	
	double customerOpeningBalance;
	
	String customerOpeningBalanceType;
	
	String customerOpeningBalanceUnit;
	
	String customerCreditType;
	
	double customerCreditPeriod;
	
	List<Content> customerContents;
	
	List<CustomerLicences> customerLicenceList;
	
	List<Customer> customerList;

	String customerAddressLine1;
	
	

	public List<CustomerLicences> getCustomerLicenceList() {
		return customerLicenceList;
	}

	public void setCustomerLicenceList(List<CustomerLicences> customerLicenceList) {
		this.customerLicenceList = customerLicenceList;
	}

	String customerAddressLine2;
	
	City customerCity;
	
	String customerContactPerson;
	
	double customerPhone;
	
	double customerFax;
	
	String customerEmail;
	
	boolean customerActiveFlag;
	
	boolean customerAutoEmailFlag;
	
	boolean customerLockFlag;
	
	boolean customerSubStockitsFlag;
	
	public boolean isCustomerSubStockitsFlag() {
		return customerSubStockitsFlag;
	}

	public void setCustomerSubStockitsFlag(boolean customerSubStockitsFlag) {
		this.customerSubStockitsFlag = customerSubStockitsFlag;
	}

	public double getCustomerId() {
		return customerId;
	}

	public void setCustomerId(double customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	
	public String getCustomerOpeningBalanceType() {
		return customerOpeningBalanceType;
	}

	public void setCustomerOpeningBalanceType(String customerOpeningBalanceType) {
		this.customerOpeningBalanceType = customerOpeningBalanceType;
	}
	
	public String getCustomerAccountCode() {
		return customerAccountCode;
	}

	public void setCustomerAccountCode(String customerAccountCode) {
		this.customerAccountCode = customerAccountCode;
	}

	public String getCustomerAccountName() {
		return customerAccountName;
	}

	public void setCustomerAccountName(String customerAccountName) {
		this.customerAccountName = customerAccountName;
	}

	public String getCustomerOtherInfo() {
		return customerOtherInfo;
	}

	public void setCustomerOtherInfo(String customerOtherInfo) {
		this.customerOtherInfo = customerOtherInfo;
	}

	public String getCustomerType() {
		return customerType;
	}

	public void setCustomerType(String customerType) {
		this.customerType = customerType;
	}

	public String getCustomerArea() {
		return customerArea;
	}

	public void setCustomerArea(String customerArea) {
		this.customerArea = customerArea;
	}

	public String getCustomerSalesman() {
		return customerSalesman;
	}

	public void setCustomerSalesman(String customerSalesman) {
		this.customerSalesman = customerSalesman;
	}

	public String getCustomerRemark() {
		return customerRemark;
	}

	public void setCustomerRemark(String customerRemark) {
		this.customerRemark = customerRemark;
	}

	public double getCustomerTaxId() {
		return customerTaxId;
	}

	public void setCustomerTaxId(double customerTaxId) {
		this.customerTaxId = customerTaxId;
	}

	public String getCustomerLedgerType() {
		return customerLedgerType;
	}

	public void setCustomerLedgerType(String customerLedgerType) {
		this.customerLedgerType = customerLedgerType;
	}

	public String getCustomerAccountGroup() {
		return customerAccountGroup;
	}

	public void setCustomerAccountGroup(String customerAccountGroup) {
		this.customerAccountGroup = customerAccountGroup;
	}

	public double getCustomerOpeningBalance() {
		return customerOpeningBalance;
	}

	public void setCustomerOpeningBalance(double customerOpeningBalance) {
		this.customerOpeningBalance = customerOpeningBalance;
	}

	public String getCustomerOpeningBalanceUnit() {
		return customerOpeningBalanceUnit;
	}

	public void setCustomerOpeningBalanceUnit(String customerOpeningBalanceUnit) {
		this.customerOpeningBalanceUnit = customerOpeningBalanceUnit;
	}

	public String getCustomerCreditType() {
		return customerCreditType;
	}

	public void setCustomerCreditType(String customerCreditType) {
		this.customerCreditType = customerCreditType;
	}

	public double getCustomerCreditPeriod() {
		return customerCreditPeriod;
	}

	public void setCustomerCreditPeriod(double customerCreditPeriod) {
		this.customerCreditPeriod = customerCreditPeriod;
	}

	public List<Content> getCustomerContents() {
		return customerContents;
	}

	public void setCustomerContents(List<Content> customerContents) {
		this.customerContents = customerContents;
	}

	public String getCustomerAddressLine1() {
		return customerAddressLine1;
	}

	public void setCustomerAddressLine1(String customerAddressLine1) {
		this.customerAddressLine1 = customerAddressLine1;
	}

	public String getCustomerAddressLine2() {
		return customerAddressLine2;
	}

	public void setCustomerAddressLine2(String customerAddressLine2) {
		this.customerAddressLine2 = customerAddressLine2;
	}

	public City getCustomerCity() {
		return customerCity;
	}

	public void setCustomerCity(City customerCity) {
		this.customerCity = customerCity;
	}

	public String getCustomerContactPerson() {
		return customerContactPerson;
	}

	public void setCustomerContactPerson(String customerContactPerson) {
		this.customerContactPerson = customerContactPerson;
	}

	public double getCustomerPhone() {
		return customerPhone;
	}

	public void setCustomerPhone(double customerPhone) {
		this.customerPhone = customerPhone;
	}

	public double getCustomerFax() {
		return customerFax;
	}

	public void setCustomerFax(double customerFax) {
		this.customerFax = customerFax;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public boolean isCustomerActiveFlag() {
		return customerActiveFlag;
	}

	public void setCustomerActiveFlag(boolean customerActiveFlag) {
		this.customerActiveFlag = customerActiveFlag;
	}

	public boolean isCustomerAutoEmailFlag() {
		return customerAutoEmailFlag;
	}

	public void setCustomerAutoEmailFlag(boolean customerAutoEmailFlag) {
		this.customerAutoEmailFlag = customerAutoEmailFlag;
	}

	public boolean isCustomerLockFlag() {
		return customerLockFlag;
	}

	public void setCustomerLockFlag(boolean customerLockFlag) {
		this.customerLockFlag = customerLockFlag;
	}
	
	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public List<Customer> getCustomerList() {
		return customerList;
	}

	public void setCustomerList(List<Customer> customerList) {
		this.customerList = customerList;
	}
	

}
