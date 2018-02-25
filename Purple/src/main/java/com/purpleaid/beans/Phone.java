package com.purpleaid.beans;

public class Phone {
	
	double phoneId;
	
	double phoneTypeId;
	
	String phone;
	
	String phoneCountry;
	
	String phoneAreaCode;
	
	String phoneExtension;
	
	String phoneLocalNumber;
	
	String phoneTypeDescription;
	
	double phoneEntityId; 
	
	EntityDetails entity;
	
	double phoneCDID;
	
	boolean phoneIsDeleted;
	
	
	
	
	

	public boolean isPhoneIsDeleted() {
		return phoneIsDeleted;
	}

	public void setPhoneIsDeleted(boolean phoneIsDeleted) {
		this.phoneIsDeleted = phoneIsDeleted;
	}

	public double getPhoneCDID() {
		return phoneCDID;
	}

	public void setPhoneCDID(double phoneCDID) {
		this.phoneCDID = phoneCDID;
	}

	public EntityDetails getEntity() {
		return entity;
	}

	public void setEntity(EntityDetails entity) {
		this.entity = entity;
	}

	public double getPhoneEntityId() {
		return phoneEntityId;
	}

	public void setPhoneEntityId(double phoneEntityId) {
		this.phoneEntityId = phoneEntityId;
	}

	public String getPhoneTypeDescription() {
		return phoneTypeDescription;
	}

	public void setPhoneTypeDescription(String phoneTypeDescription) {
		this.phoneTypeDescription = phoneTypeDescription;
	}

	public double getPhoneId() {
		return phoneId;
	}

	public void setPhoneId(double phoneId) {
		this.phoneId = phoneId;
	}

	public double getPhoneTypeId() {
		return phoneTypeId;
	}

	public void setPhoneTypeId(double phoneTypeId) {
		this.phoneTypeId = phoneTypeId;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPhoneCountry() {
		return phoneCountry;
	}

	public void setPhoneCountry(String phoneCountry) {
		this.phoneCountry = phoneCountry;
	}

	public String getPhoneAreaCode() {
		return phoneAreaCode;
	}

	public void setPhoneAreaCode(String phoneAreaCode) {
		this.phoneAreaCode = phoneAreaCode;
	}

	public String getPhoneExtension() {
		return phoneExtension;
	}

	public void setPhoneExtension(String phoneExtension) {
		this.phoneExtension = phoneExtension;
	}

	public String getPhoneLocalNumber() {
		return phoneLocalNumber;
	}

	public void setPhoneLocalNumber(String phoneLocalNumber) {
		this.phoneLocalNumber = phoneLocalNumber;
	}
	
	
	

}
