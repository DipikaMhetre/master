package com.purpleaid.beans;

public class ReturnRegisterProduct {
	
	double returnRegisterProductId;
	
	String returnRegisterProductDaysToExpiryStatus;
	
	double recid;
	
	String returnRegisterProductName;
	
	String returnRegisterProductPack;
	
	double returnRegisterProductRRID;
	
	double returnRegisterProductCCID;
	
	String returnRegisterProductComapnyName;
	
	String returnRegisterProductRemark;
	
	java.math.BigDecimal returnRegisterProductAmount;
	
	int returnRegisterProductCondition;
	
	String returnRegisterProductConditionName;
	
	double returnRegisterProductPID;
	
	double returnRegisterProductSAID;
	
	String returnRegisterProductBatchNo;
	
	java.math.BigDecimal returnRegisterProductMRP;
	
	java.math.BigDecimal returnRegisterProductPurchaseRate;
	
	java.math.BigDecimal returnRegisterProductSellRate;
	
	java.math.BigDecimal returnRegisterProductRate;
	
	double returnRegisterProductQuantity;
	
	String returnRegisterProductExpiryDate;

	boolean returnRegisterProductIsDeleted; 
	
	String returnRegisterSource;
	
	boolean returnRegisterSelected;
	
	java.math.BigDecimal returnRegisterProductVATpercentage;
	
	java.math.BigDecimal returnRegisterProductVATAmount;
	
	
	double returnRegisterProductQtyAvailable;
	
	double returnRegisterProductFreeAvailable;
	
	double returnRegisterProductQtyReturn;
	
	double returnRegisterProductFreeReturn;
	
	String returnRegisterProductStatus;

	boolean returnRegisterProductIsModified;
	
	boolean returnRegisterProductClaimDeleted;
	
	boolean returnRegisterProductBatchDeleted;
	
    double returnRegisterProductQtyReturnDelta;
	
	double returnRegisterProductFreeReturnDelta;
	
	
	/*********************CREDIT NOTE**********************/
	
	
	int creditNoteUseRate;
	
	String creditNoteVATchargedOnLabel;
	
	boolean creditNoteVATonFree;
	
	int creditNoteVATchargedOn;
	
	java.math.BigDecimal creditNoteLessPercentage ;
	
	java.math.BigDecimal creditNoteLessAmt;
	
	java.math.BigDecimal creditNoteVATrefund;
	
	java.math.BigDecimal creditNoteVATAmount;
	
	java.math.BigDecimal creditNotereturnAmount;
	
	boolean creditNoteflgRefundVAT;
	
	double creditNoteQty;
	
	double creditNoteQtyFree;
	
	java.math.BigDecimal creditNoteVATtax;
	
	java.math.BigDecimal creditNoteVAT;
	
	String creditNoteRRdate;
	
	java.math.BigDecimal creditNoteVATpercentage;
	
	java.math.BigDecimal creditNoteAmount;
	
	java.math.BigDecimal creditNoteCNVAT;
	
	String creditNoteRemark;
	
	java.math.BigDecimal creditNoteProductAmount;
	
	
	java.math.BigDecimal creditNoteProductTotalVATamt;
	java.math.BigDecimal creditNoteProductTotalAmount;
	
	
	boolean CreditNoteIsProductFlag;
	
	/********************************************************/
	
	
	
	
	
	public double getReturnRegisterProductQtyReturnDelta() {
		return returnRegisterProductQtyReturnDelta;
	}



	public boolean isCreditNoteIsProductFlag() {
		return CreditNoteIsProductFlag;
	}



	public void setCreditNoteIsProductFlag(boolean creditNoteIsProductFlag) {
		CreditNoteIsProductFlag = creditNoteIsProductFlag;
	}



	public java.math.BigDecimal getCreditNoteProductTotalVATamt() {
		return creditNoteProductTotalVATamt;
	}

	public void setCreditNoteProductTotalVATamt(
			java.math.BigDecimal creditNoteProductTotalVATamt) {
		this.creditNoteProductTotalVATamt = creditNoteProductTotalVATamt;
	}

	public java.math.BigDecimal getCreditNoteProductTotalAmount() {
		return creditNoteProductTotalAmount;
	}

	public void setCreditNoteProductTotalAmount(
			java.math.BigDecimal creditNoteProductTotalAmount) {
		this.creditNoteProductTotalAmount = creditNoteProductTotalAmount;
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

	public java.math.BigDecimal getCreditNoteVATrefund() {
		return creditNoteVATrefund;
	}

	public void setCreditNoteVATrefund(java.math.BigDecimal creditNoteVATrefund) {
		this.creditNoteVATrefund = creditNoteVATrefund;
	}

	public java.math.BigDecimal getCreditNoteVATAmount() {
		return creditNoteVATAmount;
	}

	public void setCreditNoteVATAmount(java.math.BigDecimal creditNoteVATAmount) {
		this.creditNoteVATAmount = creditNoteVATAmount;
	}

	public java.math.BigDecimal getCreditNotereturnAmount() {
		return creditNotereturnAmount;
	}

	public void setCreditNotereturnAmount(
			java.math.BigDecimal creditNotereturnAmount) {
		this.creditNotereturnAmount = creditNotereturnAmount;
	}

	public boolean isCreditNoteflgRefundVAT() {
		return creditNoteflgRefundVAT;
	}

	public void setCreditNoteflgRefundVAT(boolean creditNoteflgRefundVAT) {
		this.creditNoteflgRefundVAT = creditNoteflgRefundVAT;
	}

	public int getCreditNoteUseRate() {
		return creditNoteUseRate;
	}

	public void setCreditNoteUseRate(int creditNoteUseRate) {
		this.creditNoteUseRate = creditNoteUseRate;
	}

	public java.math.BigDecimal getCreditNoteProductAmount() {
		return creditNoteProductAmount;
	}

	public void setCreditNoteProductAmount(
			java.math.BigDecimal creditNoteProductAmount) {
		this.creditNoteProductAmount = creditNoteProductAmount;
	}



	public String getCreditNoteRRdate() {
		return creditNoteRRdate;
	}

	public void setCreditNoteRRdate(String creditNoteRRdate) {
		this.creditNoteRRdate = creditNoteRRdate;
	}

	public java.math.BigDecimal getCreditNoteVATpercentage() {
		return creditNoteVATpercentage;
	}

	public void setCreditNoteVATpercentage(
			java.math.BigDecimal creditNoteVATpercentage) {
		this.creditNoteVATpercentage = creditNoteVATpercentage;
	}

	public java.math.BigDecimal getCreditNoteAmount() {
		return creditNoteAmount;
	}

	public void setCreditNoteAmount(java.math.BigDecimal creditNoteAmount) {
		this.creditNoteAmount = creditNoteAmount;
	}

	public java.math.BigDecimal getCreditNoteCNVAT() {
		return creditNoteCNVAT;
	}

	public void setCreditNoteCNVAT(java.math.BigDecimal creditNoteCNVAT) {
		this.creditNoteCNVAT = creditNoteCNVAT;
	}

	public String getCreditNoteRemark() {
		return creditNoteRemark;
	}

	public void setCreditNoteRemark(String creditNoteRemark) {
		this.creditNoteRemark = creditNoteRemark;
	}

	public java.math.BigDecimal getCreditNoteVAT() {
		return creditNoteVAT;
	}

	public void setCreditNoteVAT(java.math.BigDecimal creditNoteVAT) {
		this.creditNoteVAT = creditNoteVAT;
	}

	public java.math.BigDecimal getCreditNoteVATtax() {
		return creditNoteVATtax;
	}

	public void setCreditNoteVATtax(java.math.BigDecimal creditNoteVATtax) {
		this.creditNoteVATtax = creditNoteVATtax;
	}

	public double getCreditNoteQty() {
		return creditNoteQty;
	}

	public void setCreditNoteQty(double creditNoteQty) {
		this.creditNoteQty = creditNoteQty;
	}

	public double getCreditNoteQtyFree() {
		return creditNoteQtyFree;
	}

	public void setCreditNoteQtyFree(double creditNoteQtyFree) {
		this.creditNoteQtyFree = creditNoteQtyFree;
	}

	public int getCreditNoteVATchargedOn() {
		return creditNoteVATchargedOn;
	}

	public void setCreditNoteVATchargedOn(int creditNoteVATchargedOn) {
		this.creditNoteVATchargedOn = creditNoteVATchargedOn;
	}

	public String getCreditNoteVATchargedOnLabel() {
		return creditNoteVATchargedOnLabel;
	}

	public void setCreditNoteVATchargedOnLabel(String creditNoteVATchargedOnLabel) {
		this.creditNoteVATchargedOnLabel = creditNoteVATchargedOnLabel;
	}

	public boolean isCreditNoteVATonFree() {
		return creditNoteVATonFree;
	}

	public void setCreditNoteVATonFree(boolean creditNoteVATonFree) {
		this.creditNoteVATonFree = creditNoteVATonFree;
	}

	public void setReturnRegisterProductQtyReturnDelta(
			double returnRegisterProductQtyReturnDelta) {
		this.returnRegisterProductQtyReturnDelta = returnRegisterProductQtyReturnDelta;
	}

	public double getReturnRegisterProductFreeReturnDelta() {
		return returnRegisterProductFreeReturnDelta;
	}

	public void setReturnRegisterProductFreeReturnDelta(
			double returnRegisterProductFreeReturnDelta) {
		this.returnRegisterProductFreeReturnDelta = returnRegisterProductFreeReturnDelta;
	}

	public boolean isReturnRegisterProductBatchDeleted() {
		return returnRegisterProductBatchDeleted;
	}

	public void setReturnRegisterProductBatchDeleted(
			boolean returnRegisterProductBatchDeleted) {
		this.returnRegisterProductBatchDeleted = returnRegisterProductBatchDeleted;
	}

	public boolean isReturnRegisterProductClaimDeleted() {
		return returnRegisterProductClaimDeleted;
	}

	public void setReturnRegisterProductClaimDeleted(
			boolean returnRegisterProductClaimDeleted) {
		this.returnRegisterProductClaimDeleted = returnRegisterProductClaimDeleted;
	}

	public boolean isReturnRegisterProductIsModified() {
		return returnRegisterProductIsModified;
	}

	public void setReturnRegisterProductIsModified(
			boolean returnRegisterProductIsModified) {
		this.returnRegisterProductIsModified = returnRegisterProductIsModified;
	}

	public String getReturnRegisterProductConditionName() {
		return returnRegisterProductConditionName;
	}

	public void setReturnRegisterProductConditionName(
			String returnRegisterProductConditionName) {
		this.returnRegisterProductConditionName = returnRegisterProductConditionName;
	}

	public String getReturnRegisterProductDaysToExpiryStatus() {
		return returnRegisterProductDaysToExpiryStatus;
	}

	public void setReturnRegisterProductDaysToExpiryStatus(String returnRegisterProductDaysToExpiryStatus) {
		this.returnRegisterProductDaysToExpiryStatus = returnRegisterProductDaysToExpiryStatus;
	}

	public String getReturnRegisterProductStatus() {
		return returnRegisterProductStatus;
	}

	public void setReturnRegisterProductStatus(String returnRegisterProductStatus) {
		this.returnRegisterProductStatus = returnRegisterProductStatus;
	}

	public double getReturnRegisterProductQtyAvailable() {
		return returnRegisterProductQtyAvailable;
	}

	public void setReturnRegisterProductQtyAvailable(
			double returnRegisterProductQtyAvailable) {
		this.returnRegisterProductQtyAvailable = returnRegisterProductQtyAvailable;
	}

	public double getReturnRegisterProductFreeAvailable() {
		return returnRegisterProductFreeAvailable;
	}

	public void setReturnRegisterProductFreeAvailable(
			double returnRegisterProductFreeAvailable) {
		this.returnRegisterProductFreeAvailable = returnRegisterProductFreeAvailable;
	}

	public double getReturnRegisterProductQtyReturn() {
		return returnRegisterProductQtyReturn;
	}

	public void setReturnRegisterProductQtyReturn(
			double returnRegisterProductQtyReturn) {
		this.returnRegisterProductQtyReturn = returnRegisterProductQtyReturn;
	}

	public double getReturnRegisterProductFreeReturn() {
		return returnRegisterProductFreeReturn;
	}

	public void setReturnRegisterProductFreeReturn(
			double returnRegisterProductFreeReturn) {
		this.returnRegisterProductFreeReturn = returnRegisterProductFreeReturn;
	}

	public java.math.BigDecimal getReturnRegisterProductRate() {
		return returnRegisterProductRate;
	}

	public void setReturnRegisterProductRate(
			java.math.BigDecimal returnRegisterProductRate) {
		this.returnRegisterProductRate = returnRegisterProductRate;
	}

	public java.math.BigDecimal getReturnRegisterProductVATpercentage() {
		return returnRegisterProductVATpercentage;
	}

	public void setReturnRegisterProductVATpercentage(
			java.math.BigDecimal returnRegisterProductVATpercentage) {
		this.returnRegisterProductVATpercentage = returnRegisterProductVATpercentage;
	}

	public java.math.BigDecimal getReturnRegisterProductVATAmount() {
		return returnRegisterProductVATAmount;
	}

	public void setReturnRegisterProductVATAmount(
			java.math.BigDecimal returnRegisterProductVATAmount) {
		this.returnRegisterProductVATAmount = returnRegisterProductVATAmount;
	}

	public boolean isReturnRegisterSelected() {
		return returnRegisterSelected;
	}

	public void setReturnRegisterSelected(boolean returnRegisterSelected) {
		this.returnRegisterSelected = returnRegisterSelected;
	}

	public String getReturnRegisterSource() {
		return returnRegisterSource;
	}

	public void setReturnRegisterSource(String returnRegisterSource) {
		this.returnRegisterSource = returnRegisterSource;
	}

	public String getReturnRegisterProductComapnyName() {
		return returnRegisterProductComapnyName;
	}

	public void setReturnRegisterProductComapnyName(
			String returnRegisterProductComapnyName) {
		this.returnRegisterProductComapnyName = returnRegisterProductComapnyName;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public boolean isReturnRegisterProductIsDeleted() {
		return returnRegisterProductIsDeleted;
	}

	public void setReturnRegisterProductIsDeleted(
			boolean returnRegisterProductIsDeleted) {
		this.returnRegisterProductIsDeleted = returnRegisterProductIsDeleted;
	}

	public String getReturnRegisterProductName() {
		return returnRegisterProductName;
	}

	public void setReturnRegisterProductName(String returnRegisterProductName) {
		this.returnRegisterProductName = returnRegisterProductName;
	}

	public String getReturnRegisterProductPack() {
		return returnRegisterProductPack;
	}

	public void setReturnRegisterProductPack(String returnRegisterProductPack) {
		this.returnRegisterProductPack = returnRegisterProductPack;
	}

	public double getReturnRegisterProductId() {
		return returnRegisterProductId;
	}

	public void setReturnRegisterProductId(double returnRegisterProductId) {
		this.returnRegisterProductId = returnRegisterProductId;
	}

	public double getReturnRegisterProductRRID() {
		return returnRegisterProductRRID;
	}

	public void setReturnRegisterProductRRID(double returnRegisterProductRRID) {
		this.returnRegisterProductRRID = returnRegisterProductRRID;
	}

	public double getReturnRegisterProductCCID() {
		return returnRegisterProductCCID;
	}

	public void setReturnRegisterProductCCID(double returnRegisterProductCCID) {
		this.returnRegisterProductCCID = returnRegisterProductCCID;
	}

	public String getReturnRegisterProductRemark() {
		return returnRegisterProductRemark;
	}

	public void setReturnRegisterProductRemark(String returnRegisterProductRemark) {
		this.returnRegisterProductRemark = returnRegisterProductRemark;
	}

	public java.math.BigDecimal getReturnRegisterProductAmount() {
		return returnRegisterProductAmount;
	}

	public void setReturnRegisterProductAmount(
			java.math.BigDecimal returnRegisterProductAmount) {
		this.returnRegisterProductAmount = returnRegisterProductAmount;
	}



	

	public int getReturnRegisterProductCondition() {
		return returnRegisterProductCondition;
	}

	public void setReturnRegisterProductCondition(int returnRegisterProductCondition) {
		this.returnRegisterProductCondition = returnRegisterProductCondition;
	}

	public double getReturnRegisterProductPID() {
		return returnRegisterProductPID;
	}

	public void setReturnRegisterProductPID(double returnRegisterProductPID) {
		this.returnRegisterProductPID = returnRegisterProductPID;
	}

	public double getReturnRegisterProductSAID() {
		return returnRegisterProductSAID;
	}

	public void setReturnRegisterProductSAID(double returnRegisterProductSAID) {
		this.returnRegisterProductSAID = returnRegisterProductSAID;
	}

	public String getReturnRegisterProductBatchNo() {
		return returnRegisterProductBatchNo;
	}

	public void setReturnRegisterProductBatchNo(String returnRegisterProductBatchNo) {
		this.returnRegisterProductBatchNo = returnRegisterProductBatchNo;
	}

	public java.math.BigDecimal getReturnRegisterProductMRP() {
		return returnRegisterProductMRP;
	}

	public void setReturnRegisterProductMRP(
			java.math.BigDecimal returnRegisterProductMRP) {
		this.returnRegisterProductMRP = returnRegisterProductMRP;
	}

	public java.math.BigDecimal getReturnRegisterProductPurchaseRate() {
		return returnRegisterProductPurchaseRate;
	}

	public void setReturnRegisterProductPurchaseRate(
			java.math.BigDecimal returnRegisterProductPurchaseRate) {
		this.returnRegisterProductPurchaseRate = returnRegisterProductPurchaseRate;
	}

	public java.math.BigDecimal getReturnRegisterProductSellRate() {
		return returnRegisterProductSellRate;
	}

	public void setReturnRegisterProductSellRate(
			java.math.BigDecimal returnRegisterProductSellRate) {
		this.returnRegisterProductSellRate = returnRegisterProductSellRate;
	}

	public double getReturnRegisterProductQuantity() {
		return returnRegisterProductQuantity;
	}

	public void setReturnRegisterProductQuantity(
			double returnRegisterProductQuantity) {
		this.returnRegisterProductQuantity = returnRegisterProductQuantity;
	}

	public String getReturnRegisterProductExpiryDate() {
		return returnRegisterProductExpiryDate;
	}

	public void setReturnRegisterProductExpiryDate(
			String returnRegisterProductExpiryDate) {
		this.returnRegisterProductExpiryDate = returnRegisterProductExpiryDate;
	}
	
	
	
	
	
	
	
}
