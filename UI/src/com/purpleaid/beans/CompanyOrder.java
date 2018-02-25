package com.purpleaid.beans;

import java.util.Date;
import java.util.List;

public class CompanyOrder {
	double id;
	
	String company;
	
	double supplier;
	
	double MR;
	
	double orderNo;
	
	Date orderDate;
	
	double orderAmt;
	
	String remarks;
	
	String status;
	
	int items;
	
	List<Integer> tasks;
	
	boolean flgEmail;
	
	boolean flgScheme;
	
	boolean flgUrgent;
	
	boolean flgCancelPending;
	
	boolean flgDelayAlert;
	
	boolean flgVoid;
	
	String voidReason;
	
	boolean flgCreditNote;
	
	List<CreditNote> creditNotes;
	
	double creditNoteTotal;
	
	Date ETA;
	
	List<CompanyProduct> Products;

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public double getSupplier() {
		return supplier;
	}

	public void setSupplier(double supplier) {
		this.supplier = supplier;
	}

	public double getMR() {
		return MR;
	}

	public void setMR(double mR) {
		MR = mR;
	}

	public double getOrderNo() {
		return orderNo;
	}

	public void setOrderNo(double orderNo) {
		this.orderNo = orderNo;
	}

	public Date getOrderDate() {
		return orderDate;
	}

	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}

	public double getOrderAmt() {
		return orderAmt;
	}

	public void setOrderAmt(double orderAmt) {
		this.orderAmt = orderAmt;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getItems() {
		return items;
	}

	public void setItems(int items) {
		this.items = items;
	}

	public List<Integer> getTasks() {
		return tasks;
	}

	public void setTasks(List<Integer> tasks) {
		this.tasks = tasks;
	}

	public boolean isFlgEmail() {
		return flgEmail;
	}

	public void setFlgEmail(boolean flgEmail) {
		this.flgEmail = flgEmail;
	}

	public boolean isFlgScheme() {
		return flgScheme;
	}

	public void setFlgScheme(boolean flgScheme) {
		this.flgScheme = flgScheme;
	}

	public boolean isFlgUrgent() {
		return flgUrgent;
	}

	public void setFlgUrgent(boolean flgUrgent) {
		this.flgUrgent = flgUrgent;
	}

	public boolean isFlgCancelPending() {
		return flgCancelPending;
	}

	public void setFlgCancelPending(boolean flgCancelPending) {
		this.flgCancelPending = flgCancelPending;
	}

	public boolean isFlgDelayAlert() {
		return flgDelayAlert;
	}

	public void setFlgDelayAlert(boolean flgDelayAlert) {
		this.flgDelayAlert = flgDelayAlert;
	}

	public boolean isFlgVoid() {
		return flgVoid;
	}

	public void setFlgVoid(boolean flgVoid) {
		this.flgVoid = flgVoid;
	}

	public String getVoidReason() {
		return voidReason;
	}

	public void setVoidReason(String voidReason) {
		this.voidReason = voidReason;
	}

	public boolean isFlgCreditNote() {
		return flgCreditNote;
	}

	public void setFlgCreditNote(boolean flgCreditNote) {
		this.flgCreditNote = flgCreditNote;
	}

	public List<CreditNote> getCreditNotes() {
		return creditNotes;
	}

	public void setCreditNotes(List<CreditNote> creditNotes) {
		this.creditNotes = creditNotes;
	}

	public double getCreditNoteTotal() {
		return creditNoteTotal;
	}

	public void setCreditNoteTotal(double creditNoteTotal) {
		this.creditNoteTotal = creditNoteTotal;
	}

	public Date getETA() {
		return ETA;
	}

	public void setETA(Date eTA) {
		ETA = eTA;
	}

	public double getId() {
		return id;
	}

	public void setId(double id) {
		this.id = id;
	}

	public List<CompanyProduct> getProducts() {
		return Products;
	}

	public void setProducts(List<CompanyProduct> products) {
		Products = products;
	}
	
	
	

}
