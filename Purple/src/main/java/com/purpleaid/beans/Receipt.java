package com.purpleaid.beans;

public class Receipt {

	
	double receiptId;
	double recid;
	double receiptSalesmanId;
	String receiptSalesmanName;
	String receiptDate;
	int receiptFrom;
	int receiptTo;
	String receiptRemark;
	double receiptIssuedById;
	String receiptIssuedOn;
	String receiptIssuedByUserName;
	int action;
	int status;
	
	
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public int getAction() {
		return action;
	}
	public void setAction(int action) {
		this.action = action;
	}
	public double getReceiptId() {
		return receiptId;
	}
	public void setReceiptId(double receiptId) {
		this.receiptId = receiptId;
	}
	public double getRecid() {
		return recid;
	}
	public void setRecid(double recid) {
		this.recid = recid;
	}
	public double getReceiptSalesmanId() {
		return receiptSalesmanId;
	}
	public void setReceiptSalesmanId(double receiptSalesmanId) {
		this.receiptSalesmanId = receiptSalesmanId;
	}
	public String getReceiptDate() {
		return receiptDate;
	}
	public void setReceiptDate(String receiptDate) {
		this.receiptDate = receiptDate;
	}
	public int getReceiptFrom() {
		return receiptFrom;
	}
	public void setReceiptFrom(int receiptFrom) {
		this.receiptFrom = receiptFrom;
	}
	public int getReceiptTo() {
		return receiptTo;
	}
	public void setReceiptTo(int receiptTo) {
		this.receiptTo = receiptTo;
	}
	public String getReceiptRemark() {
		return receiptRemark;
	}
	public void setReceiptRemark(String receiptRemark) {
		this.receiptRemark = receiptRemark;
	}
	public double getReceiptIssuedById() {
		return receiptIssuedById;
	}
	public void setReceiptIssuedById(double receiptIssuedById) {
		this.receiptIssuedById = receiptIssuedById;
	}
	public String getReceiptSalesmanName() {
		return receiptSalesmanName;
	}
	public void setReceiptSalesmanName(String receiptSalesmanName) {
		this.receiptSalesmanName = receiptSalesmanName;
	}
	public String getReceiptIssuedOn() {
		return receiptIssuedOn;
	}
	public void setReceiptIssuedOn(String receiptIssuedOn) {
		this.receiptIssuedOn = receiptIssuedOn;
	}
	public String getReceiptIssuedByUserName() {
		return receiptIssuedByUserName;
	}
	public void setReceiptIssuedByUserName(String receiptIssuedByUserName) {
		this.receiptIssuedByUserName = receiptIssuedByUserName;
	}
	
	
}
