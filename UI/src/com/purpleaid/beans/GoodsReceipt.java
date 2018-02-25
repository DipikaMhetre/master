package com.purpleaid.beans;

import java.util.List;

public class GoodsReceipt {
	
	double goodsReceiptId;
	
	double goodsReceiptCID;
	
	String goodsReceiptCompanyName;
	
	double goodsReceiptSID;
	
	String goodsReceiptSupplierName;
	
	String goodsReceiptDate;
	
	String goodsReceiptBillNo;
	
	String goodsReceiptBillDate;
	
	java.math.BigDecimal goodsReceiptBillAmount;
	
	String goodsReceiptLRNo;
	
	String goodsReceiptLRDate;
	
	String goodsReceiptLRDueDate;
	
	String goodsReceiptRemark;
	
	int goodsReceiptPayment;
	
	int goodsReceiptTransporter;
	
	double goodsReceiptBillDiscount;
	
	double goodsReceiptCases;
	
	double goodsReceiptQuantity;
	
	double goodsReceiptFree;
	
	double goodsReceiptVAT;
	
	java.math.BigDecimal goodsReceiptAdditionExcise;
	
	java.math.BigDecimal goodsReceiptAdditionEducationCess;
	
	java.math.BigDecimal goodsReceiptAdditionDebitNote;
	
	java.math.BigDecimal goodsReceiptAdditionCST;
	
	java.math.BigDecimal goodsReceiptAdditionOther;
	
	java.math.BigDecimal goodsReceiptDeductionTradeDiscount;
	
	java.math.BigDecimal goodsReceiptDeductionSpecialDiscount;
		
	java.math.BigDecimal goodsReceiptDeductionOctroiReimb;
	
	java.math.BigDecimal goodsReceiptDeductionCreditNote;
	
	java.math.BigDecimal goodsReceiptDeductionBillDiscount;

	java.math.BigDecimal goodsReceiptDeductionOther;
	
	java.math.BigDecimal goodsReceiptTotalItems;
	
	java.math.BigDecimal goodsReceiptRoundOff;
		
	java.math.BigDecimal goodsReceiptFreeVAT;
	
	java.math.BigDecimal goodsReceiptNetAmount;
	

	
	boolean goodsReceiptUpdateToACFlag;
	
	boolean goodsReceiptVerifiedFlag;
	
	
	List<GoodsReceiptProduct> grProductList;
	
	List<GrProductBatch> grProductBatchList;
	
	List<CompanyPurchaseOrder> grCpoList;
	
	boolean goodsReceiptIsDeleted;

	double goodsReceiptVerifiedByID;
	
	String goodsReceiptVerifiedOn;

	String goodsReceiptVerifiedByName;
	
	

	public String getGoodsReceiptVerifiedByName() {
		return goodsReceiptVerifiedByName;
	}

	public void setGoodsReceiptVerifiedByName(String goodsReceiptVerifiedByName) {
		this.goodsReceiptVerifiedByName = goodsReceiptVerifiedByName;
	}

	public double getGoodsReceiptVerifiedByID() {
		return goodsReceiptVerifiedByID;
	}

	public void setGoodsReceiptVerifiedByID(double goodsReceiptVerifiedByID) {
		this.goodsReceiptVerifiedByID = goodsReceiptVerifiedByID;
	}

	public String getGoodsReceiptVerifiedOn() {
		return goodsReceiptVerifiedOn;
	}

	public void setGoodsReceiptVerifiedOn(String goodsReceiptVerifiedOn) {
		this.goodsReceiptVerifiedOn = goodsReceiptVerifiedOn;
	}

	public String getGoodsReceiptSupplierName() {
		return goodsReceiptSupplierName;
	}

	public void setGoodsReceiptSupplierName(String goodsReceiptSupplierName) {
		this.goodsReceiptSupplierName = goodsReceiptSupplierName;
	}

	public String getGoodsReceiptCompanyName() {
		return goodsReceiptCompanyName;
	}

	public void setGoodsReceiptCompanyName(String goodsReceiptCompanyName) {
		this.goodsReceiptCompanyName = goodsReceiptCompanyName;
	}

	public boolean isGoodsReceiptIsDeleted() {
		return goodsReceiptIsDeleted;
	}

	public void setGoodsReceiptIsDeleted(boolean goodsReceiptIsDeleted) {
		this.goodsReceiptIsDeleted = goodsReceiptIsDeleted;
	}

	public List<CompanyPurchaseOrder> getGrCpoList() {
		return grCpoList;
	}

	public void setGrCpoList(List<CompanyPurchaseOrder> grCpoList) {
		this.grCpoList = grCpoList;
	}


	public double getGoodsReceiptId() {
		return goodsReceiptId;
	}

	public void setGoodsReceiptId(double goodsReceiptId) {
		this.goodsReceiptId = goodsReceiptId;
	}

	public String getGoodsReceiptDate() {
		return goodsReceiptDate;
	}

	public void setGoodsReceiptDate(String goodsReceiptDate) {
		this.goodsReceiptDate = goodsReceiptDate;
	}

	public String getGoodsReceiptBillNo() {
		return goodsReceiptBillNo;
	}

	public void setGoodsReceiptBillNo(String goodsReceiptBillNo) {
		this.goodsReceiptBillNo = goodsReceiptBillNo;
	}

	public String getGoodsReceiptBillDate() {
		return goodsReceiptBillDate;
	}

	public void setGoodsReceiptBillDate(String goodsReceiptBillDate) {
		this.goodsReceiptBillDate = goodsReceiptBillDate;
	}

	public java.math.BigDecimal getGoodsReceiptBillAmount() {
		return goodsReceiptBillAmount;
	}

	public void setGoodsReceiptBillAmount(
			java.math.BigDecimal goodsReceiptBillAmount) {
		this.goodsReceiptBillAmount = goodsReceiptBillAmount;
	}

	public String getGoodsReceiptLRNo() {
		return goodsReceiptLRNo;
	}

	public void setGoodsReceiptLRNo(String goodsReceiptLRNo) {
		this.goodsReceiptLRNo = goodsReceiptLRNo;
	}

	public String getGoodsReceiptLRDate() {
		return goodsReceiptLRDate;
	}

	public void setGoodsReceiptLRDate(String goodsReceiptLRDate) {
		this.goodsReceiptLRDate = goodsReceiptLRDate;
	}

	public String getGoodsReceiptLRDueDate() {
		return goodsReceiptLRDueDate;
	}

	public void setGoodsReceiptLRDueDate(String goodsReceiptLRDueDate) {
		this.goodsReceiptLRDueDate = goodsReceiptLRDueDate;
	}

	public String getGoodsReceiptRemark() {
		return goodsReceiptRemark;
	}

	public void setGoodsReceiptRemark(String goodsReceiptRemark) {
		this.goodsReceiptRemark = goodsReceiptRemark;
	}

	public int getGoodsReceiptPayment() {
		return goodsReceiptPayment;
	}

	public void setGoodsReceiptPayment(int goodsReceiptPayment) {
		this.goodsReceiptPayment = goodsReceiptPayment;
	}

	public int getGoodsReceiptTransporter() {
		return goodsReceiptTransporter;
	}

	public void setGoodsReceiptTransporter(int goodsReceiptTransporter) {
		this.goodsReceiptTransporter = goodsReceiptTransporter;
	}

	public double getGoodsReceiptBillDiscount() {
		return goodsReceiptBillDiscount;
	}

	public void setGoodsReceiptBillDiscount(double goodsReceiptBillDiscount) {
		this.goodsReceiptBillDiscount = goodsReceiptBillDiscount;
	}

	public double getGoodsReceiptCases() {
		return goodsReceiptCases;
	}

	public void setGoodsReceiptCases(double goodsReceiptCases) {
		this.goodsReceiptCases = goodsReceiptCases;
	}

	public double getGoodsReceiptQuantity() {
		return goodsReceiptQuantity;
	}

	public void setGoodsReceiptQuantity(double goodsReceiptQuantity) {
		this.goodsReceiptQuantity = goodsReceiptQuantity;
	}

	public double getGoodsReceiptFree() {
		return goodsReceiptFree;
	}

	public void setGoodsReceiptFree(double goodsReceiptFree) {
		this.goodsReceiptFree = goodsReceiptFree;
	}

	public double getGoodsReceiptVAT() {
		return goodsReceiptVAT;
	}

	public void setGoodsReceiptVAT(double goodsReceiptVAT) {
		this.goodsReceiptVAT = goodsReceiptVAT;
	}

	public java.math.BigDecimal getGoodsReceiptAdditionExcise() {
		return goodsReceiptAdditionExcise;
	}

	public void setGoodsReceiptAdditionExcise(
			java.math.BigDecimal goodsReceiptAdditionExcise) {
		this.goodsReceiptAdditionExcise = goodsReceiptAdditionExcise;
	}

	public java.math.BigDecimal getGoodsReceiptAdditionEducationCess() {
		return goodsReceiptAdditionEducationCess;
	}

	public void setGoodsReceiptAdditionEducationCess(
			java.math.BigDecimal goodsReceiptAdditionEducationCess) {
		this.goodsReceiptAdditionEducationCess = goodsReceiptAdditionEducationCess;
	}

	public java.math.BigDecimal getGoodsReceiptAdditionDebitNote() {
		return goodsReceiptAdditionDebitNote;
	}

	public void setGoodsReceiptAdditionDebitNote(
			java.math.BigDecimal goodsReceiptAdditionDebitNote) {
		this.goodsReceiptAdditionDebitNote = goodsReceiptAdditionDebitNote;
	}

	public java.math.BigDecimal getGoodsReceiptAdditionCST() {
		return goodsReceiptAdditionCST;
	}

	public void setGoodsReceiptAdditionCST(
			java.math.BigDecimal goodsReceiptAdditionCST) {
		this.goodsReceiptAdditionCST = goodsReceiptAdditionCST;
	}

	public java.math.BigDecimal getGoodsReceiptAdditionOther() {
		return goodsReceiptAdditionOther;
	}

	public void setGoodsReceiptAdditionOther(
			java.math.BigDecimal goodsReceiptAdditionOther) {
		this.goodsReceiptAdditionOther = goodsReceiptAdditionOther;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionTradeDiscount() {
		return goodsReceiptDeductionTradeDiscount;
	}

	public void setGoodsReceiptDeductionTradeDiscount(
			java.math.BigDecimal goodsReceiptDeductionTradeDiscount) {
		this.goodsReceiptDeductionTradeDiscount = goodsReceiptDeductionTradeDiscount;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionSpecialDiscount() {
		return goodsReceiptDeductionSpecialDiscount;
	}

	public void setGoodsReceiptDeductionSpecialDiscount(
			java.math.BigDecimal goodsReceiptDeductionSpecialDiscount) {
		this.goodsReceiptDeductionSpecialDiscount = goodsReceiptDeductionSpecialDiscount;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionOctroiReimb() {
		return goodsReceiptDeductionOctroiReimb;
	}

	public void setGoodsReceiptDeductionOctroiReimb(
			java.math.BigDecimal goodsReceiptDeductionOctroiReimb) {
		this.goodsReceiptDeductionOctroiReimb = goodsReceiptDeductionOctroiReimb;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionCreditNote() {
		return goodsReceiptDeductionCreditNote;
	}

	public void setGoodsReceiptDeductionCreditNote(
			java.math.BigDecimal goodsReceiptDeductionCreditNote) {
		this.goodsReceiptDeductionCreditNote = goodsReceiptDeductionCreditNote;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionBillDiscount() {
		return goodsReceiptDeductionBillDiscount;
	}

	public void setGoodsReceiptDeductionBillDiscount(
			java.math.BigDecimal goodsReceiptDeductionBillDiscount) {
		this.goodsReceiptDeductionBillDiscount = goodsReceiptDeductionBillDiscount;
	}

	public java.math.BigDecimal getGoodsReceiptDeductionOther() {
		return goodsReceiptDeductionOther;
	}

	public void setGoodsReceiptDeductionOther(
			java.math.BigDecimal goodsReceiptDeductionOther) {
		this.goodsReceiptDeductionOther = goodsReceiptDeductionOther;
	}

	public java.math.BigDecimal getGoodsReceiptTotalItems() {
		return goodsReceiptTotalItems;
	}

	public void setGoodsReceiptTotalItems(
			java.math.BigDecimal goodsReceiptTotalItems) {
		this.goodsReceiptTotalItems = goodsReceiptTotalItems;
	}

	public java.math.BigDecimal getGoodsReceiptRoundOff() {
		return goodsReceiptRoundOff;
	}

	public void setGoodsReceiptRoundOff(java.math.BigDecimal goodsReceiptRoundOff) {
		this.goodsReceiptRoundOff = goodsReceiptRoundOff;
	}

	public java.math.BigDecimal getGoodsReceiptFreeVAT() {
		return goodsReceiptFreeVAT;
	}

	public void setGoodsReceiptFreeVAT(java.math.BigDecimal goodsReceiptFreeVAT) {
		this.goodsReceiptFreeVAT = goodsReceiptFreeVAT;
	}

	public java.math.BigDecimal getGoodsReceiptNetAmount() {
		return goodsReceiptNetAmount;
	}

	public void setGoodsReceiptNetAmount(java.math.BigDecimal goodsReceiptNetAmount) {
		this.goodsReceiptNetAmount = goodsReceiptNetAmount;
	}

	public boolean isGoodsReceiptUpdateToACFlag() {
		return goodsReceiptUpdateToACFlag;
	}

	public void setGoodsReceiptUpdateToACFlag(boolean goodsReceiptUpdateToACFlag) {
		this.goodsReceiptUpdateToACFlag = goodsReceiptUpdateToACFlag;
	}

	public boolean isGoodsReceiptVerifiedFlag() {
		return goodsReceiptVerifiedFlag;
	}

	public void setGoodsReceiptVerifiedFlag(boolean goodsReceiptVerifiedFlag) {
		this.goodsReceiptVerifiedFlag = goodsReceiptVerifiedFlag;
	}




	public List<GoodsReceiptProduct> getGrProductList() {
		return grProductList;
	}

	public void setGrProductList(List<GoodsReceiptProduct> grProductList) {
		this.grProductList = grProductList;
	}

	public List<GrProductBatch> getGrProductBatchList() {
		return grProductBatchList;
	}

	public void setGrProductBatchList(List<GrProductBatch> grProductBatchList) {
		this.grProductBatchList = grProductBatchList;
	}

	public double getGoodsReceiptCID() {
		return goodsReceiptCID;
	}

	public void setGoodsReceiptCID(double goodsReceiptCID) {
		this.goodsReceiptCID = goodsReceiptCID;
	}

	public double getGoodsReceiptSID() {
		return goodsReceiptSID;
	}

	public void setGoodsReceiptSID(double goodsReceiptSID) {
		this.goodsReceiptSID = goodsReceiptSID;
	}

	
	
}
