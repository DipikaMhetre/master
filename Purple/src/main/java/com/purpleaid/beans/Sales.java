package com.purpleaid.beans;

import java.util.List;

public class Sales {

	double salesId;
	
	double recid;
	
	String salesDate;
	
	double salesProductCount;
	
	java.math.BigDecimal salesProductAmount;
	
	java.math.BigDecimal salesVAT;
	
	java.math.BigDecimal salesAmount;
	
	java.math.BigDecimal salesAdditionalDiscountPercentage;
	
	java.math.BigDecimal salesAdditionalDiscountAmount;
	
	java.math.BigDecimal salesNetInvoiceAmount;
	
	List<SalesProducts> salesProductsList;
	
	boolean salesIsDeleted;
	
	boolean salesIsAdditionalDiscInvoice;
	
	int salesDiscountType;
	
	int CNADID;
	
	boolean salesIsAdditionalDiscProductDataDeleted;
	
	boolean salesDataModified;
	
	String salesRemark;
	
	
	/******** Rate difference CN fields ****************/
	double salesQty;
	
	double salesFreeQty;
	
	java.math.BigDecimal salesVATamount;
	/**************************************************/
	
	
	

	public boolean isSalesIsAdditionalDiscProductDataDeleted() {
		return salesIsAdditionalDiscProductDataDeleted;
	}

	public String getSalesRemark() {
		return salesRemark;
	}

	public void setSalesRemark(String salesRemark) {
		this.salesRemark = salesRemark;
	}

	public boolean isSalesDataModified() {
		return salesDataModified;
	}

	public void setSalesDataModified(boolean salesDataModified) {
		this.salesDataModified = salesDataModified;
	}

	public java.math.BigDecimal getSalesVATamount() {
		return salesVATamount;
	}

	public void setSalesVATamount(java.math.BigDecimal salesVATamount) {
		this.salesVATamount = salesVATamount;
	}

	public double getSalesQty() {
		return salesQty;
	}

	public void setSalesQty(double salesQty) {
		this.salesQty = salesQty;
	}

	public double getSalesFreeQty() {
		return salesFreeQty;
	}

	public void setSalesFreeQty(double salesFreeQty) {
		this.salesFreeQty = salesFreeQty;
	}

	public void setSalesIsAdditionalDiscProductDataDeleted(
			boolean salesIsAdditionalDiscProductDataDeleted) {
		this.salesIsAdditionalDiscProductDataDeleted = salesIsAdditionalDiscProductDataDeleted;
	}

	public boolean isSalesIsDeleted() {
		return salesIsDeleted;
	}

	public void setSalesIsDeleted(boolean salesIsDeleted) {
		this.salesIsDeleted = salesIsDeleted;
	}

	public int getCNADID() {
		return CNADID;
	}

	public void setCNADID(int cNADID) {
		CNADID = cNADID;
	}

	public int getSalesDiscountType() {
		return salesDiscountType;
	}

	public void setSalesDiscountType(int salesDiscountType) {
		this.salesDiscountType = salesDiscountType;
	}

	public boolean isSalesIsAdditionalDiscInvoice() {
		return salesIsAdditionalDiscInvoice;
	}

	public void setSalesIsAdditionalDiscInvoice(boolean salesIsAdditionalDiscInvoice) {
		this.salesIsAdditionalDiscInvoice = salesIsAdditionalDiscInvoice;
	}

	public double getSalesId() {
		return salesId;
	}

	public void setSalesId(double salesId) {
		this.salesId = salesId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getSalesDate() {
		return salesDate;
	}

	public void setSalesDate(String salesDate) {
		this.salesDate = salesDate;
	}

	public double getSalesProductCount() {
		return salesProductCount;
	}

	public void setSalesProductCount(double salesProductCount) {
		this.salesProductCount = salesProductCount;
	}

	public java.math.BigDecimal getSalesProductAmount() {
		return salesProductAmount;
	}

	public void setSalesProductAmount(java.math.BigDecimal salesProductAmount) {
		this.salesProductAmount = salesProductAmount;
	}

	public java.math.BigDecimal getSalesVAT() {
		return salesVAT;
	}

	public void setSalesVAT(java.math.BigDecimal salesVAT) {
		this.salesVAT = salesVAT;
	}

	public java.math.BigDecimal getSalesAmount() {
		return salesAmount;
	}

	public void setSalesAmount(java.math.BigDecimal salesAmount) {
		this.salesAmount = salesAmount;
	}

	public java.math.BigDecimal getSalesAdditionalDiscountPercentage() {
		return salesAdditionalDiscountPercentage;
	}

	public void setSalesAdditionalDiscountPercentage(
			java.math.BigDecimal salesAdditionalDiscountPercentage) {
		this.salesAdditionalDiscountPercentage = salesAdditionalDiscountPercentage;
	}

	public java.math.BigDecimal getSalesAdditionalDiscountAmount() {
		return salesAdditionalDiscountAmount;
	}

	public void setSalesAdditionalDiscountAmount(
			java.math.BigDecimal salesAdditionalDiscountAmount) {
		this.salesAdditionalDiscountAmount = salesAdditionalDiscountAmount;
	}

	public java.math.BigDecimal getSalesNetInvoiceAmount() {
		return salesNetInvoiceAmount;
	}

	public void setSalesNetInvoiceAmount(java.math.BigDecimal salesNetInvoiceAmount) {
		this.salesNetInvoiceAmount = salesNetInvoiceAmount;
	}

	public List<SalesProducts> getSalesProductsList() {
		return salesProductsList;
	}

	public void setSalesProductsList(List<SalesProducts> salesProductsList) {
		this.salesProductsList = salesProductsList;
	}
	
	
	
	
}
