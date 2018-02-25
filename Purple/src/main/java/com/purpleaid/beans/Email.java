package com.purpleaid.beans;

public class Email {
	
	double emailId;
	
	double emailTypeId;
	
	String email;
	
	String emailTypeDescription;
	
	EntityDetails entity;
	
	double emailCDID;
	
	boolean emailIsDeleted;
	
	
	
	public boolean isEmailIsDeleted() {
		return emailIsDeleted;
	}

	public void setEmailIsDeleted(boolean emailIsDeleted) {
		this.emailIsDeleted = emailIsDeleted;
	}

	public double getEmailCDID() {
		return emailCDID;
	}

	public void setEmailCDID(double emailCDID) {
		this.emailCDID = emailCDID;
	}

	public EntityDetails getEntity() {
		return entity;
	}

	public void setEntity(EntityDetails entity) {
		this.entity = entity;
	}

	public String getEmailTypeDescription() {
		return emailTypeDescription;
	}

	public void setEmailTypeDescription(String emailTypeDescription) {
		this.emailTypeDescription = emailTypeDescription;
	}

	public double getEmailId() {
		return emailId;
	}

	public void setEmailId(double emailId) {
		this.emailId = emailId;
	}

	public double getEmailTypeId() {
		return emailTypeId;
	}

	public void setEmailTypeId(double emailTypeId) {
		this.emailTypeId = emailTypeId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

}
