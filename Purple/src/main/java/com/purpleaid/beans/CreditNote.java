package com.purpleaid.beans;

import java.util.List;


public class CreditNote {
	
	double creditNoteID;
	
	double creditNoteType;
	
	String creditNoteTypeDescription;
	
	double creditNoteCustID;
	
	String creditNoteCustName;
	
	String creditNoteDate;
	
	int creditNoteStatus;
	
	String creditNoteStatusDescription;
	
	String creditNoteCreatedByName;
	
	String creditNoteCreatedOn;
	
	String creditNoteRemark;
		
	int creditNoteLockByID;
	
	int creditNoteLedgerByID;
	
	String creditNoteLedgerDescription;
	
	int creditNoteVerifiedByID;
	
	int creditNoteVoidByID;
	
	String creditNoteLockUserName;
	
	String creditNoteLockDateTime;
	
	boolean creditNoteflgLock;
	
	boolean creditNoteflgLedger;
	
	String creditNoteLedgerUserName;
	
	String creditNoteLedgerDateTime;
	
	boolean creditNoteflgVoid;
	
	String creditNoteflgUserName;
	
	String creditNoteVoidReason;
	
	java.math.BigDecimal creditNoteAmount;
	
	int creditNoteReason;
	
	String creditNoteReasonOther;
	
	java.math.BigDecimal creditNoteTotalCredit;
	
	java.math.BigDecimal creditNoteLessPercentage;
	
	java.math.BigDecimal creditNoteLessAmt;

	boolean creditNoteFlgRefundVAT;
	
	java.math.BigDecimal creditNoteVATPercentage;
	
	java.math.BigDecimal creditNoteProductTotalVATamt;
	//java.math.BigDecimal creditNoteProductTotalAmount;
	
	int creditNoteApproved;
	
	 java.math.BigDecimal creditNoteProductReturnAmountTotal; //  return amount total;
	
	java.math.BigDecimal creditNoteVATrefund;
	
	double creditNoteNetCredit;
	
	double creditNoteGrossCredit;
	
	boolean creditNoteApprovedFlg;
	
	String creditNoteApprovedBy;
	
	String creditNoteApprovedOn;
	
	double recid;

	boolean creditNoteVerifiedFlg;
	
	String creditNoteVerifiedBy;
	
	String creditNoteVerifiedOn;
	
	String creditNoteVoidByName;
	
	String creditNoteVoidOn;
	

	
	
	List<ReturnRegisterProduct> creditNoteProductList;
	
	List<Sales> additionalDiscInvoiceList;
	
	
	/******** Rate difference CN fields ****************/
	
	
	double creditNoteRateDifferenceId;
	
	
	String creditNoteProductName;
	
	String creditNoteBatchName;
	
	java.math.BigDecimal creditNoteProductMRP;
	
	java.math.BigDecimal creditNoteProductPurchaseRate;
	
	java.math.BigDecimal creditNoteProductSaleRate;
	
	java.math.BigDecimal creditNoteProductOldSaleRate;
	
	java.math.BigDecimal creditNoteProductRateDifference;
	
	java.math.BigDecimal creditNoteProductRateDiffPercentage;
	
	java.math.BigDecimal creditNoteRateDifference;
	
	double creditNoteProductId;
	
	double creditNoteProductBatchId;
	
	/**************************************************/


	
	
	
	public java.math.BigDecimal getCreditNoteProductReturnAmountTotal() {
		return creditNoteProductReturnAmountTotal;
	}

	public int getCreditNoteApproved() {
		return creditNoteApproved;
	}

	public void setCreditNoteApproved(int creditNoteApproved) {
		this.creditNoteApproved = creditNoteApproved;
	}

	public String getCreditNoteStatusDescription() {
		return creditNoteStatusDescription;
	}

	public void setCreditNoteStatusDescription(String creditNoteStatusDescription) {
		this.creditNoteStatusDescription = creditNoteStatusDescription;
	}

	public String getCreditNoteLedgerDescription() {
		return creditNoteLedgerDescription;
	}

	public void setCreditNoteLedgerDescription(String creditNoteLedgerDescription) {
		this.creditNoteLedgerDescription = creditNoteLedgerDescription;
	}

	public String getCreditNoteTypeDescription() {
		return creditNoteTypeDescription;
	}

	public void setCreditNoteTypeDescription(String creditNoteTypeDescription) {
		this.creditNoteTypeDescription = creditNoteTypeDescription;
	}

	public double getCreditNoteRateDifferenceId() {
		return creditNoteRateDifferenceId;
	}

	public void setCreditNoteRateDifferenceId(double creditNoteRateDifferenceId) {
		this.creditNoteRateDifferenceId = creditNoteRateDifferenceId;
	}

	public double getCreditNoteProductId() {
		return creditNoteProductId;
	}

	public void setCreditNoteProductId(double creditNoteProductId) {
		this.creditNoteProductId = creditNoteProductId;
	}

	
	public double getCreditNoteProductBatchId() {
		return creditNoteProductBatchId;
	}

	public void setCreditNoteProductBatchId(double creditNoteProductBatchId) {
		this.creditNoteProductBatchId = creditNoteProductBatchId;
	}

	public java.math.BigDecimal getCreditNoteRateDifference() {
		return creditNoteRateDifference;
	}

	public void setCreditNoteRateDifference(
			java.math.BigDecimal creditNoteRateDifference) {
		this.creditNoteRateDifference = creditNoteRateDifference;
	}

	public String getCreditNoteProductName() {
		return creditNoteProductName;
	}

	public void setCreditNoteProductName(String creditNoteProductName) {
		this.creditNoteProductName = creditNoteProductName;
	}

	public String getCreditNoteBatchName() {
		return creditNoteBatchName;
	}

	public void setCreditNoteBatchName(String creditNoteBatchName) {
		this.creditNoteBatchName = creditNoteBatchName;
	}

	public java.math.BigDecimal getCreditNoteProductMRP() {
		return creditNoteProductMRP;
	}

	public void setCreditNoteProductMRP(java.math.BigDecimal creditNoteProductMRP) {
		this.creditNoteProductMRP = creditNoteProductMRP;
	}

	public java.math.BigDecimal getCreditNoteProductPurchaseRate() {
		return creditNoteProductPurchaseRate;
	}

	public void setCreditNoteProductPurchaseRate(
			java.math.BigDecimal creditNoteProductPurchaseRate) {
		this.creditNoteProductPurchaseRate = creditNoteProductPurchaseRate;
	}

	public java.math.BigDecimal getCreditNoteProductSaleRate() {
		return creditNoteProductSaleRate;
	}

	public void setCreditNoteProductSaleRate(
			java.math.BigDecimal creditNoteProductSaleRate) {
		this.creditNoteProductSaleRate = creditNoteProductSaleRate;
	}

	public java.math.BigDecimal getCreditNoteProductOldSaleRate() {
		return creditNoteProductOldSaleRate;
	}

	public void setCreditNoteProductOldSaleRate(
			java.math.BigDecimal creditNoteProductOldSaleRate) {
		this.creditNoteProductOldSaleRate = creditNoteProductOldSaleRate;
	}

	public java.math.BigDecimal getCreditNoteProductRateDifference() {
		return creditNoteProductRateDifference;
	}

	public void setCreditNoteProductRateDifference(
			java.math.BigDecimal creditNoteProductRateDifference) {
		this.creditNoteProductRateDifference = creditNoteProductRateDifference;
	}

	public java.math.BigDecimal getCreditNoteProductRateDiffPercentage() {
		return creditNoteProductRateDiffPercentage;
	}

	public void setCreditNoteProductRateDiffPercentage(
			java.math.BigDecimal creditNoteProductRateDiffPercentage) {
		this.creditNoteProductRateDiffPercentage = creditNoteProductRateDiffPercentage;
	}

	public void setCreditNoteProductReturnAmountTotal(
			java.math.BigDecimal creditNoteProductReturnAmountTotal) {
		this.creditNoteProductReturnAmountTotal = creditNoteProductReturnAmountTotal;
	}

	public String getCreditNoteVoidByName() {
		return creditNoteVoidByName;
	}

	public void setCreditNoteVoidByName(String creditNoteVoidByName) {
		this.creditNoteVoidByName = creditNoteVoidByName;
	}

	public List<Sales> getAdditionalDiscInvoiceList() {
		return additionalDiscInvoiceList;
	}

	public void setAdditionalDiscInvoiceList(List<Sales> additionalDiscInvoiceList) {
		this.additionalDiscInvoiceList = additionalDiscInvoiceList;
	}

	public java.math.BigDecimal getCreditNoteProductTotalVATamt() {
		return creditNoteProductTotalVATamt;
	}

	public void setCreditNoteProductTotalVATamt(
			java.math.BigDecimal creditNoteProductTotalVATamt) {
		this.creditNoteProductTotalVATamt = creditNoteProductTotalVATamt;
	}



	public String getCreditNoteVoidOn() {
		return creditNoteVoidOn;
	}

	public void setCreditNoteVoidOn(String creditNoteVoidOn) {
		this.creditNoteVoidOn = creditNoteVoidOn;
	}

	public int getCreditNoteLockByID() {
		return creditNoteLockByID;
	}

	public void setCreditNoteLockByID(int creditNoteLockByID) {
		this.creditNoteLockByID = creditNoteLockByID;
	}

	public int getCreditNoteLedgerByID() {
		return creditNoteLedgerByID;
	}

	public void setCreditNoteLedgerByID(int creditNoteLedgerByID) {
		this.creditNoteLedgerByID = creditNoteLedgerByID;
	}

	public int getCreditNoteVerifiedByID() {
		return creditNoteVerifiedByID;
	}

	public void setCreditNoteVerifiedByID(int creditNoteVerifiedByID) {
		this.creditNoteVerifiedByID = creditNoteVerifiedByID;
	}

	public int getCreditNoteVoidByID() {
		return creditNoteVoidByID;
	}

	public void setCreditNoteVoidByID(int creditNoteVoidByID) {
		this.creditNoteVoidByID = creditNoteVoidByID;
	}

	public List<ReturnRegisterProduct> getCreditNoteProductList() {
		return creditNoteProductList;
	}

	public void setCreditNoteProductList(
			List<ReturnRegisterProduct> creditNoteProductList) {
		this.creditNoteProductList = creditNoteProductList;
	}

	public boolean isCreditNoteVerifiedFlg() {
		return creditNoteVerifiedFlg;
	}

	public void setCreditNoteVerifiedFlg(boolean creditNoteVerifiedFlg) {
		this.creditNoteVerifiedFlg = creditNoteVerifiedFlg;
	}

	public String getCreditNoteVerifiedBy() {
		return creditNoteVerifiedBy;
	}

	public void setCreditNoteVerifiedBy(String creditNoteVerifiedBy) {
		this.creditNoteVerifiedBy = creditNoteVerifiedBy;
	}

	public String getCreditNoteVerifiedOn() {
		return creditNoteVerifiedOn;
	}

	public void setCreditNoteVerifiedOn(String creditNoteVerifiedOn) {
		this.creditNoteVerifiedOn = creditNoteVerifiedOn;
	}



	public double getCreditNoteID() {
		return creditNoteID;
	}

	public void setCreditNoteID(double creditNoteID) {
		this.creditNoteID = creditNoteID;
	}

	public double getCreditNoteType() {
		return creditNoteType;
	}

	public void setCreditNoteType(double creditNoteType) {
		this.creditNoteType = creditNoteType;
	}

	public double getCreditNoteCustID() {
		return creditNoteCustID;
	}

	public void setCreditNoteCustID(double creditNoteCustID) {
		this.creditNoteCustID = creditNoteCustID;
	}

	public String getCreditNoteCustName() {
		return creditNoteCustName;
	}

	public void setCreditNoteCustName(String creditNoteCustName) {
		this.creditNoteCustName = creditNoteCustName;
	}

	public String getCreditNoteDate() {
		return creditNoteDate;
	}

	public void setCreditNoteDate(String creditNoteDate) {
		this.creditNoteDate = creditNoteDate;
	}

	public int getCreditNoteStatus() {
		return creditNoteStatus;
	}

	public void setCreditNoteStatus(int creditNoteStatus) {
		this.creditNoteStatus = creditNoteStatus;
	}

	public String getCreditNoteCreatedByName() {
		return creditNoteCreatedByName;
	}

	public void setCreditNoteCreatedByName(String creditNoteCreatedByName) {
		this.creditNoteCreatedByName = creditNoteCreatedByName;
	}

	public String getCreditNoteCreatedOn() {
		return creditNoteCreatedOn;
	}

	public void setCreditNoteCreatedOn(String creditNoteCreatedOn) {
		this.creditNoteCreatedOn = creditNoteCreatedOn;
	}

	public String getCreditNoteRemark() {
		return creditNoteRemark;
	}

	public void setCreditNoteRemark(String creditNoteRemark) {
		this.creditNoteRemark = creditNoteRemark;
	}

	public String getCreditNoteLockUserName() {
		return creditNoteLockUserName;
	}

	public void setCreditNoteLockUserName(String creditNoteLockUserName) {
		this.creditNoteLockUserName = creditNoteLockUserName;
	}

	public String getCreditNoteLockDateTime() {
		return creditNoteLockDateTime;
	}

	public void setCreditNoteLockDateTime(String creditNoteLockDateTime) {
		this.creditNoteLockDateTime = creditNoteLockDateTime;
	}

	public boolean isCreditNoteflgLock() {
		return creditNoteflgLock;
	}

	public void setCreditNoteflgLock(boolean creditNoteflgLock) {
		this.creditNoteflgLock = creditNoteflgLock;
	}

	public boolean isCreditNoteflgLedger() {
		return creditNoteflgLedger;
	}

	public void setCreditNoteflgLedger(boolean creditNoteflgLedger) {
		this.creditNoteflgLedger = creditNoteflgLedger;
	}

	public String getCreditNoteLedgerUserName() {
		return creditNoteLedgerUserName;
	}

	public void setCreditNoteLedgerUserName(String creditNoteLedgerUserName) {
		this.creditNoteLedgerUserName = creditNoteLedgerUserName;
	}

	public String getCreditNoteLedgerDateTime() {
		return creditNoteLedgerDateTime;
	}

	public void setCreditNoteLedgerDateTime(String creditNoteLedgerDateTime) {
		this.creditNoteLedgerDateTime = creditNoteLedgerDateTime;
	}

	public boolean isCreditNoteflgVoid() {
		return creditNoteflgVoid;
	}

	public void setCreditNoteflgVoid(boolean creditNoteflgVoid) {
		this.creditNoteflgVoid = creditNoteflgVoid;
	}

	public String getCreditNoteflgUserName() {
		return creditNoteflgUserName;
	}

	public void setCreditNoteflgUserName(String creditNoteflgUserName) {
		this.creditNoteflgUserName = creditNoteflgUserName;
	}

	public String getCreditNoteVoidReason() {
		return creditNoteVoidReason;
	}

	public void setCreditNoteVoidReason(String creditNoteVoidReason) {
		this.creditNoteVoidReason = creditNoteVoidReason;
	}

	public java.math.BigDecimal getCreditNoteAmount() {
		return creditNoteAmount;
	}

	public void setCreditNoteAmount(java.math.BigDecimal creditNoteAmount) {
		this.creditNoteAmount = creditNoteAmount;
	}

	
	public int getCreditNoteReason() {
		return creditNoteReason;
	}

	public void setCreditNoteReason(int creditNoteReason) {
		this.creditNoteReason = creditNoteReason;
	}

	public String getCreditNoteReasonOther() {
		return creditNoteReasonOther;
	}

	public void setCreditNoteReasonOther(String creditNoteReasonOther) {
		this.creditNoteReasonOther = creditNoteReasonOther;
	}

	public java.math.BigDecimal getCreditNoteTotalCredit() {
		return creditNoteTotalCredit;
	}

	public void setCreditNoteTotalCredit(java.math.BigDecimal creditNoteTotalCredit) {
		this.creditNoteTotalCredit = creditNoteTotalCredit;
	}

	public java.math.BigDecimal getCreditNoteLessPercentage() {
		return creditNoteLessPercentage;
	}

	public void setCreditNoteLessPercentage(
			java.math.BigDecimal creditNoteLessPercentage) {
		this.creditNoteLessPercentage = creditNoteLessPercentage;
	}

	public java.math.BigDecimal getCreditNoteLessAmt() {
		return creditNoteLessAmt;
	}

	public void setCreditNoteLessAmt(java.math.BigDecimal creditNoteLessAmt) {
		this.creditNoteLessAmt = creditNoteLessAmt;
	}
	


	public boolean isCreditNoteFlgRefundVAT() {
		return creditNoteFlgRefundVAT;
	}

	public void setCreditNoteFlgRefundVAT(boolean creditNoteFlgRefundVAT) {
		this.creditNoteFlgRefundVAT = creditNoteFlgRefundVAT;
	}

	public java.math.BigDecimal getCreditNoteVATPercentage() {
		return creditNoteVATPercentage;
	}

	public void setCreditNoteVATPercentage(
			java.math.BigDecimal creditNoteVATPercentage) {
		this.creditNoteVATPercentage = creditNoteVATPercentage;
	}




	public java.math.BigDecimal getCreditNoteVATrefund() {
		return creditNoteVATrefund;
	}

	public void setCreditNoteVATrefund(java.math.BigDecimal creditNoteVATrefund) {
		this.creditNoteVATrefund = creditNoteVATrefund;
	}

	public double getCreditNoteNetCredit() {
		return creditNoteNetCredit;
	}

	public void setCreditNoteNetCredit(double creditNoteNetCredit) {
		this.creditNoteNetCredit = creditNoteNetCredit;
	}

	public double getCreditNoteGrossCredit() {
		return creditNoteGrossCredit;
	}

	public void setCreditNoteGrossCredit(double creditNoteGrossCredit) {
		this.creditNoteGrossCredit = creditNoteGrossCredit;
	}

	public boolean isCreditNoteApprovedFlg() {
		return creditNoteApprovedFlg;
	}

	public void setCreditNoteApprovedFlg(boolean creditNoteApprovedFlg) {
		this.creditNoteApprovedFlg = creditNoteApprovedFlg;
	}

	public String getCreditNoteApprovedBy() {
		return creditNoteApprovedBy;
	}

	public void setCreditNoteApprovedBy(String creditNoteApprovedBy) {
		this.creditNoteApprovedBy = creditNoteApprovedBy;
	}

	public String getCreditNoteApprovedOn() {
		return creditNoteApprovedOn;
	}

	public void setCreditNoteApprovedOn(String creditNoteApprovedOn) {
		this.creditNoteApprovedOn = creditNoteApprovedOn;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}


	
}
