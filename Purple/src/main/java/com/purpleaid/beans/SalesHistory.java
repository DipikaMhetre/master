package com.purpleaid.beans;

public class SalesHistory {

	double salesID;
	
	String saleDate;
	
	double saleQty;
	
	double saleFreeQty;
	
	double saleSaleRate;
	
	double saleNetRate;
	
	java.math.BigDecimal saleVAT;
		
	java.math.BigDecimal saleTotalAmount;
	
	double recid;
	
	

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getSalesID() {
		return salesID;
	}

	public void setSalesID(double salesID) {
		this.salesID = salesID;
	}

	public String getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(String saleDate) {
		this.saleDate = saleDate;
	}

	public double getSaleQty() {
		return saleQty;
	}

	public void setSaleQty(double saleQty) {
		this.saleQty = saleQty;
	}

	public double getSaleFreeQty() {
		return saleFreeQty;
	}

	public void setSaleFreeQty(double saleFreeQty) {
		this.saleFreeQty = saleFreeQty;
	}

	public double getSaleSaleRate() {
		return saleSaleRate;
	}

	public void setSaleSaleRate(double saleSaleRate) {
		this.saleSaleRate = saleSaleRate;
	}

	public double getSaleNetRate() {
		return saleNetRate;
	}

	public void setSaleNetRate(double saleNetRate) {
		this.saleNetRate = saleNetRate;
	}

	public java.math.BigDecimal getSaleVAT() {
		return saleVAT;
	}

	public void setSaleVAT(java.math.BigDecimal saleVAT) {
		this.saleVAT = saleVAT;
	}

	public java.math.BigDecimal getSaleTotalAmount() {
		return saleTotalAmount;
	}

	public void setSaleTotalAmount(java.math.BigDecimal saleTotalAmount) {
		this.saleTotalAmount = saleTotalAmount;
	}
	
	
	
	
}
