package com.purpleaid.beans;

import java.util.Date;

public class CreditNote {
	
	double id;
	
	double companyId; 
	
	String division;
	
	Date date;
	
	double amount;
		
	int claimed;
	
	String status;

	public double getId() {
		return id;
	}

	public void setId(double id) {
		this.id = id;
	}

	public double getCompanyId() {
		return companyId;
	}

	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public int getClaimed() {
		return claimed;
	}

	public void setClaimed(int claimed) {
		this.claimed = claimed;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	
	

}
