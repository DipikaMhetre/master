package com.purpleaid.beans;

public class GrProductBatch {

	double grProductBatchId;
	
	double grProductBatchActiveId;
	
	double grProductBatchGrId;
	
	int grProductBatchProductIndex;
	
	String grProductBatchNo;
	
	
	double GRID;

	String grProductBatchExpiryDate;
	
	java.math.BigDecimal grProductBatchMRP;
	
	java.math.BigDecimal grProductBatchSellRate;
	
	java.math.BigDecimal grProductBatchTrade;
	
	java.math.BigDecimal grProductBatchPurchaseRate;
	
	java.math.BigDecimal grProductBatchTradeDiscount;
	
	java.math.BigDecimal grProductBatchSpecialDiscount;
	
	java.math.BigDecimal grProductBatchSpecialDiscountAmount;
	
	java.math.BigDecimal grProductBatchTradeDiscountAmount;
	
	String grProductBatchPurchaseDate;
	
	double grProductBatchProductGrId;
	
	boolean grProductBatchActiveFlag;

	boolean grProductBatchLockFlag;
	
	double recid;
	
	double grProductBatchProductId;
	
	double grProductBatchDivisionId;
	
	String grProductBatchDivisionName;
	
	String grProductBatchProductName;
	
	String grProductBatchRemark;
	
	double grProductBatchProductPack;
	
	double grProductBatchCompanyId;
	
	boolean grProductBatchProductActiveFlag;
	
	boolean grProductBatchProductLockFlag;
	
	boolean grProductBatchIsDeleted;

	/*************stock active batch *************/
	
	double grProductBatchTaxID;
	
	double stockAdjustmentOption;
	
	String grProductBatchTaxDescription;
	
	java.math.BigDecimal grProductBatchVAT;
	
	double grProductBatchSAID;
	
	double quantity;
	
	double free;
	
	double stock;
	
	double freeStock;
	
	double stockAvailable;
	
	double freeStockAvailable;
	
	double expiry;
	
	double breakage;
	
	double cotransfer;
	
	String isScheme;
	
	double grProductBatchStckAdjustmentId;
	
	/************************************************/
	
	
	
	
	public double getFree() {
		return free;
	}

	public double getGRID() {
		return GRID;
	}

	public void setGRID(double gRID) {
		GRID = gRID;
	}

	public double getStockAdjustmentOption() {
		return stockAdjustmentOption;
	}

	public void setStockAdjustmentOption(double stockAdjustmentOption) {
		this.stockAdjustmentOption = stockAdjustmentOption;
	}

	public double getGrProductBatchStckAdjustmentId() {
		return grProductBatchStckAdjustmentId;
	}

	public void setGrProductBatchStckAdjustmentId(
			double grProductBatchStckAdjustmentId) {
		this.grProductBatchStckAdjustmentId = grProductBatchStckAdjustmentId;
	}

	public boolean isGrProductBatchIsDeleted() {
		return grProductBatchIsDeleted;
	}

	public void setGrProductBatchIsDeleted(boolean grProductBatchIsDeleted) {
		this.grProductBatchIsDeleted = grProductBatchIsDeleted;
	}

	public boolean isGrProductBatchProductActiveFlag() {
		return grProductBatchProductActiveFlag;
	}

	public void setGrProductBatchProductActiveFlag(
			boolean grProductBatchProductActiveFlag) {
		this.grProductBatchProductActiveFlag = grProductBatchProductActiveFlag;
	}

	public boolean isGrProductBatchProductLockFlag() {
		return grProductBatchProductLockFlag;
	}

	public void setGrProductBatchProductLockFlag(
			boolean grProductBatchProductLockFlag) {
		this.grProductBatchProductLockFlag = grProductBatchProductLockFlag;
	}

	public double getGrProductBatchCompanyId() {
		return grProductBatchCompanyId;
	}

	public void setGrProductBatchCompanyId(double grProductBatchCompanyId) {
		this.grProductBatchCompanyId = grProductBatchCompanyId;
	}

	public String getGrProductBatchTaxDescription() {
		return grProductBatchTaxDescription;
	}

	public void setGrProductBatchTaxDescription(String grProductBatchTaxDescription) {
		this.grProductBatchTaxDescription = grProductBatchTaxDescription;
	}

	public double getGrProductBatchProductPack() {
		return grProductBatchProductPack;
	}

	public void setGrProductBatchProductPack(double grProductBatchProductPack) {
		this.grProductBatchProductPack = grProductBatchProductPack;
	}

	public String getIsScheme() {
		return isScheme;
	}

	public void setIsScheme(String isScheme) {
		this.isScheme = isScheme;
	}

	public double getGrProductBatchDivisionId() {
		return grProductBatchDivisionId;
	}

	public void setGrProductBatchDivisionId(double grProductBatchDivisionId) {
		this.grProductBatchDivisionId = grProductBatchDivisionId;
	}

	public String getGrProductBatchDivisionName() {
		return grProductBatchDivisionName;
	}

	public void setGrProductBatchDivisionName(String grProductBatchDivisionName) {
		this.grProductBatchDivisionName = grProductBatchDivisionName;
	}

	public String getGrProductBatchProductName() {
		return grProductBatchProductName;
	}

	public void setGrProductBatchProductName(String grProductBatchProductName) {
		this.grProductBatchProductName = grProductBatchProductName;
	}

	public double getExpiry() {
		return expiry;
	}

	public void setExpiry(double expiry) {
		this.expiry = expiry;
	}

	public double getBreakage() {
		return breakage;
	}

	public void setBreakage(double breakage) {
		this.breakage = breakage;
	}

	public double getCotransfer() {
		return cotransfer;
	}

	public void setCotransfer(double cotransfer) {
		this.cotransfer = cotransfer;
	}

	public java.math.BigDecimal getGrProductBatchSpecialDiscount() {
		return grProductBatchSpecialDiscount;
	}

	public void setGrProductBatchSpecialDiscount(
			java.math.BigDecimal grProductBatchSpecialDiscount) {
		this.grProductBatchSpecialDiscount = grProductBatchSpecialDiscount;
	}

	public java.math.BigDecimal getGrProductBatchSpecialDiscountAmount() {
		return grProductBatchSpecialDiscountAmount;
	}

	public void setGrProductBatchSpecialDiscountAmount(
			java.math.BigDecimal grProductBatchSpecialDiscountAmount) {
		this.grProductBatchSpecialDiscountAmount = grProductBatchSpecialDiscountAmount;
	}

	public java.math.BigDecimal getGrProductBatchTradeDiscountAmount() {
		return grProductBatchTradeDiscountAmount;
	}

	public void setGrProductBatchTradeDiscountAmount(
			java.math.BigDecimal grProductBatchTradeDiscountAmount) {
		this.grProductBatchTradeDiscountAmount = grProductBatchTradeDiscountAmount;
	}

	public double getStockAvailable() {
		return stockAvailable;
	}

	public void setStockAvailable(double stockAvailable) {
		this.stockAvailable = stockAvailable;
	}

	public double getFreeStockAvailable() {
		return freeStockAvailable;
	}

	public void setFreeStockAvailable(double freeStockAvailable) {
		this.freeStockAvailable = freeStockAvailable;
	}

	public double getStock() {
		return stock;
	}

	public void setStock(double stock) {
		this.stock = stock;
	}

	public double getFreeStock() {
		return freeStock;
	}

	public void setFreeStock(double freeStock) {
		this.freeStock = freeStock;
	}

	public void setFree(double free) {
		this.free = free;
	}

	public double getQuantity() {
		return quantity;
	}

	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}


	public double getGrProductBatchSAID() {
		return grProductBatchSAID;
	}

	public void setGrProductBatchSAID(double grProductBatchSAID) {
		this.grProductBatchSAID = grProductBatchSAID;
	}

	public double getGrProductBatchTaxID() {
		return grProductBatchTaxID;
	}

	public void setGrProductBatchTaxID(double grProductBatchTaxID) {
		this.grProductBatchTaxID = grProductBatchTaxID;
	}

	public java.math.BigDecimal getGrProductBatchVAT() {
		return grProductBatchVAT;
	}

	public void setGrProductBatchVAT(java.math.BigDecimal grProductBatchVAT) {
		this.grProductBatchVAT = grProductBatchVAT;
	}

	public double getGrProductBatchActiveId() {
		return grProductBatchActiveId;
	}

	public void setGrProductBatchActiveId(double grProductBatchActiveId) {
		this.grProductBatchActiveId = grProductBatchActiveId;
	}

	public double getGrProductBatchId() {
		return grProductBatchId;
	}

	public void setGrProductBatchId(double grProductBatchId) {
		this.grProductBatchId = grProductBatchId;
	}

	public double getGrProductBatchGrId() {
		return grProductBatchGrId;
	}

	public void setGrProductBatchGrId(double grProductBatchGrId) {
		this.grProductBatchGrId = grProductBatchGrId;
	}

	public int getGrProductBatchProductIndex() {
		return grProductBatchProductIndex;
	}

	public void setGrProductBatchProductIndex(int grProductBatchProductIndex) {
		this.grProductBatchProductIndex = grProductBatchProductIndex;
	}

	public String getGrProductBatchNo() {
		return grProductBatchNo;
	}

	public void setGrProductBatchNo(String grProductBatchNo) {
		this.grProductBatchNo = grProductBatchNo;
	}

	public String getGrProductBatchExpiryDate() {
		return grProductBatchExpiryDate;
	}

	public void setGrProductBatchExpiryDate(String grProductBatchExpiryDate) {
		this.grProductBatchExpiryDate = grProductBatchExpiryDate;
	}

	public java.math.BigDecimal getGrProductBatchMRP() {
		return grProductBatchMRP;
	}

	public void setGrProductBatchMRP(java.math.BigDecimal grProductBatchMRP) {
		this.grProductBatchMRP = grProductBatchMRP;
	}

	public java.math.BigDecimal getGrProductBatchSellRate() {
		return grProductBatchSellRate;
	}

	public void setGrProductBatchSellRate(
			java.math.BigDecimal grProductBatchSellRate) {
		this.grProductBatchSellRate = grProductBatchSellRate;
	}

	public java.math.BigDecimal getGrProductBatchTrade() {
		return grProductBatchTrade;
	}

	public void setGrProductBatchTrade(java.math.BigDecimal grProductBatchTrade) {
		this.grProductBatchTrade = grProductBatchTrade;
	}

	public java.math.BigDecimal getGrProductBatchPurchaseRate() {
		return grProductBatchPurchaseRate;
	}

	public void setGrProductBatchPurchaseRate(
			java.math.BigDecimal grProductBatchPurchaseRate) {
		this.grProductBatchPurchaseRate = grProductBatchPurchaseRate;
	}

	public java.math.BigDecimal getGrProductBatchTradeDiscount() {
		return grProductBatchTradeDiscount;
	}

	public void setGrProductBatchTradeDiscount(
			java.math.BigDecimal grProductBatchTradeDiscount) {
		this.grProductBatchTradeDiscount = grProductBatchTradeDiscount;
	}

	public String getGrProductBatchPurchaseDate() {
		return grProductBatchPurchaseDate;
	}

	public void setGrProductBatchPurchaseDate(String grProductBatchPurchaseDate) {
		this.grProductBatchPurchaseDate = grProductBatchPurchaseDate;
	}

	public double getGrProductBatchProductGrId() {
		return grProductBatchProductGrId;
	}

	public void setGrProductBatchProductGrId(double grProductBatchProductGrId) {
		this.grProductBatchProductGrId = grProductBatchProductGrId;
	}

	public boolean isGrProductBatchActiveFlag() {
		return grProductBatchActiveFlag;
	}

	public void setGrProductBatchActiveFlag(boolean grProductBatchActiveFlag) {
		this.grProductBatchActiveFlag = grProductBatchActiveFlag;
	}

	public boolean isGrProductBatchLockFlag() {
		return grProductBatchLockFlag;
	}

	public void setGrProductBatchLockFlag(boolean grProductBatchLockFlag) {
		this.grProductBatchLockFlag = grProductBatchLockFlag;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getGrProductBatchProductId() {
		return grProductBatchProductId;
	}

	public void setGrProductBatchProductId(double grProductBatchProductId) {
		this.grProductBatchProductId = grProductBatchProductId;
	}

	public String getGrProductBatchRemark() {
		return grProductBatchRemark;
	}

	public void setGrProductBatchRemark(String grProductBatchRemark) {
		this.grProductBatchRemark = grProductBatchRemark;
	}


	
}
