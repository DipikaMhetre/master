package com.purpleaid.beans;

public class User {
	
	double uId;
	
	String userId;
	
	String userPwd;
	
	String firstName;
	
	String LastName;
	
	double companyId;
	
	double supplierId;
	
	double divisionId;
	
	String purchaseOrderId;
	
	double customerId;
	
	String areaCode;
	
	String userAddressLine1;
	
	String userAddressLine2;
	
	double userPhone;
	
	double userFax;
	
	String userEmail;
	
	boolean userActiveFlag;
	
	boolean userLockFlag;
	
	
	String userToken;
	/**
	 * @return the customerId
	 */
	public double getCustomerId() {
		return customerId;
	}

	/**
	 * @param customerId the customerId to set
	 */
	public void setCustomerId(double customerId) {
		this.customerId = customerId;
	}

	/**
	 * @return the areaCode
	 */
	public String getAreaCode() {
		return areaCode;
	}

	/**
	 * @param areaCode the areaCode to set
	 */
	public void setAreaCode(String areaCode) {
		this.areaCode = areaCode;
	}

	public double getSupplierId() {
		return supplierId;
	}

	public void setSupplierId(double supplierId) {
		this.supplierId = supplierId;
	}

	public String getPurchaseOrderId() {
		return purchaseOrderId;
	}

	public void setPurchaseOrderId(String purchaseOrderId) {
		this.purchaseOrderId = purchaseOrderId;
	}

	

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public double getCompanyId() {
		return companyId;
	}
	
	public String getUserToken() {
		return userToken;
	}

	public void setUserToken(String userToken) {
		this.userToken = userToken;
	}

	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}

	public double getDivisionId() {
		return divisionId;
	}

	public void setDivisionId(double divisionId) {
		this.divisionId = divisionId;
	}

	public double getuId() {
		return uId;
	}

	public void setuId(double uId) {
		this.uId = uId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return LastName;
	}

	public void setLastName(String lastName) {
		LastName = lastName;
	}

	public boolean isUserActiveFlag() {
		return userActiveFlag;
	}

	public void setUserActiveFlag(boolean userActiveFlag) {
		this.userActiveFlag = userActiveFlag;
	}

	public String getUserAddressLine1() {
		return userAddressLine1;
	}

	public void setUserAddressLine1(String userAddressLine1) {
		this.userAddressLine1 = userAddressLine1;
	}

	public String getUserAddressLine2() {
		return userAddressLine2;
	}

	public void setUserAddressLine2(String userAddressLine2) {
		this.userAddressLine2 = userAddressLine2;
	}

	public double getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(double userPhone) {
		this.userPhone = userPhone;
	}

	public double getUserFax() {
		return userFax;
	}

	public void setUserFax(double userFax) {
		this.userFax = userFax;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public boolean isUserLockFlag() {
		return userLockFlag;
	}

	public void setUserLockFlag(boolean userLockFlag) {
		this.userLockFlag = userLockFlag;
	}
	
	

}
