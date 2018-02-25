package com.purpleaid.beans;

import java.util.List;


public class Supplier {
	
	private double supplierId;
	
	private double supplierCompanyId; 
	
	private String supplierName;
	
	private String supplierCompanyName;
	
	private String supplierAccountCode;
	
	private String supplierAccountName;
	
	private String supplierOtherInfo;

	private String supplierRemark;
	
	private String supplierTaxID;
	
	private String supplierLedgerType;
	
	private String supplierAccountGroup;
	
	private double supplierOpeningBalance;
	
	private int supplierOpeningBalanceType;
	
	private int supplierCreditPeriod;
	
	/*double supplierOpDebitBalance; 
	
	double supplierOpCreditBalance; 
	
	double supplierOpNetBalance; */
		
	private String supplierAddressLine1;
	
	private String supplierAddressLine2;
	
	private City supplierCity;
	
	private String supplierContactPerson;
	
	private double supplierPhone;
	
	private double supplierFax;
	
	private String supplierEmail;
	
	private boolean supplierActiveFlag;
	
	private boolean supplierOutStatePartyFlag;
	
	private boolean supplierEmailPOFlag;
	
	private boolean supplierSetAsDefaultFlag;
	
	int supplierDeliveryTime;
	
	double recid;
	
	List<Supplier> supplierList;
	
	

	

	public List<Supplier> getSupplierList() {
		return supplierList;
	}

	public void setSupplierList(List<Supplier> supplierList) {
		this.supplierList = supplierList;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(double supplierId) {
		this.supplierId = supplierId;
	}

	public double getSupplierCompanyId() {
		return supplierCompanyId;
	}

	public void setSupplierCompanyId(double supplierCompanyId) {
		this.supplierCompanyId = supplierCompanyId;
	}

	public String getSupplierName() {
		return supplierName;
	}

	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}

	public String getSupplierCompanyName() {
		return supplierCompanyName;
	}

	public void setSupplierCompanyName(String supplierCompanyName) {
		this.supplierCompanyName = supplierCompanyName;
	}

	public String getSupplierAccountCode() {
		return supplierAccountCode;
	}

	public void setSupplierAccountCode(String supplierAccountCode) {
		this.supplierAccountCode = supplierAccountCode;
	}

	public String getSupplierAccountName() {
		return supplierAccountName;
	}

	public void setSupplierAccountName(String supplierAccountName) {
		this.supplierAccountName = supplierAccountName;
	}

	public String getSupplierOtherInfo() {
		return supplierOtherInfo;
	}

	public void setSupplierOtherInfo(String supplierOtherInfo) {
		this.supplierOtherInfo = supplierOtherInfo;
	}

	public String getSupplierRemark() {
		return supplierRemark;
	}

	public void setSupplierRemark(String supplierRemark) {
		this.supplierRemark = supplierRemark;
	}

	public String getSupplierTaxID() {
		return supplierTaxID;
	}

	public void setSupplierTaxID(String supplierTaxID) {
		this.supplierTaxID = supplierTaxID;
	}

	public String getSupplierLedgerType() {
		return supplierLedgerType;
	}

	public void setSupplierLedgerType(String supplierLedgerType) {
		this.supplierLedgerType = supplierLedgerType;
	}

	public String getSupplierAccountGroup() {
		return supplierAccountGroup;
	}

	public void setSupplierAccountGroup(String supplierAccountGroup) {
		this.supplierAccountGroup = supplierAccountGroup;
	}

	public double getSupplierOpeningBalance() {
		return supplierOpeningBalance;
	}

	public void setSupplierOpeningBalance(double supplierOpeningBalance) {
		this.supplierOpeningBalance = supplierOpeningBalance;
	}

	public int getSupplierOpeningBalanceType() {
		return supplierOpeningBalanceType;
	}

	public void setSupplierOpeningBalanceType(int supplierOpeningBalanceType) {
		this.supplierOpeningBalanceType = supplierOpeningBalanceType;
	}

	public int getSupplierCreditPeriod() {
		return supplierCreditPeriod;
	}

	public void setSupplierCreditPeriod(int supplierCreditPeriod) {
		this.supplierCreditPeriod = supplierCreditPeriod;
	}

	public String getSupplierAddressLine1() {
		return supplierAddressLine1;
	}

	public void setSupplierAddressLine1(String supplierAddressLine1) {
		this.supplierAddressLine1 = supplierAddressLine1;
	}

	public String getSupplierAddressLine2() {
		return supplierAddressLine2;
	}

	public void setSupplierAddressLine2(String supplierAddressLine2) {
		this.supplierAddressLine2 = supplierAddressLine2;
	}

	public City getSupplierCity() {
		return supplierCity;
	}

	public void setSupplierCity(City supplierCity) {
		this.supplierCity = supplierCity;
	}

	public String getSupplierContactPerson() {
		return supplierContactPerson;
	}

	public void setSupplierContactPerson(String supplierContactPerson) {
		this.supplierContactPerson = supplierContactPerson;
	}

	public double getSupplierPhone() {
		return supplierPhone;
	}

	public void setSupplierPhone(double supplierPhone) {
		this.supplierPhone = supplierPhone;
	}

	public double getSupplierFax() {
		return supplierFax;
	}

	public void setSupplierFax(double supplierFax) {
		this.supplierFax = supplierFax;
	}

	public String getSupplierEmail() {
		return supplierEmail;
	}

	public void setSupplierEmail(String supplierEmail) {
		this.supplierEmail = supplierEmail;
	}

	public boolean isSupplierActiveFlag() {
		return supplierActiveFlag;
	}

	public void setSupplierActiveFlag(boolean supplierActiveFlag) {
		this.supplierActiveFlag = supplierActiveFlag;
	}

	public boolean isSupplierOutStatePartyFlag() {
		return supplierOutStatePartyFlag;
	}

	public void setSupplierOutStatePartyFlag(boolean supplierOutStatePartyFlag) {
		this.supplierOutStatePartyFlag = supplierOutStatePartyFlag;
	}

	public boolean isSupplierEmailPOFlag() {
		return supplierEmailPOFlag;
	}

	public void setSupplierEmailPOFlag(boolean supplierEmailPOFlag) {
		this.supplierEmailPOFlag = supplierEmailPOFlag;
	}

	public boolean isSupplierSetAsDefaultFlag() {
		return supplierSetAsDefaultFlag;
	}

	public void setSupplierSetAsDefaultFlag(boolean supplierSetAsDefaultFlag) {
		this.supplierSetAsDefaultFlag = supplierSetAsDefaultFlag;
	}

	public int getSupplierDeliveryTime() {
		return supplierDeliveryTime;
	}

	public void setSupplierDeliveryTime(int supplierDeliveryTime) {
		this.supplierDeliveryTime = supplierDeliveryTime;
	}


	
	
	
}
