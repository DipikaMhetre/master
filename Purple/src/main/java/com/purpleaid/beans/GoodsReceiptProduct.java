package com.purpleaid.beans;

import java.util.List;

public class GoodsReceiptProduct {

	double goodsReceiptProductId;
	
	boolean goodsReceiptProductFlgSale;
	
	int goodsReceiptPendingOrder;
	
	double goodsReceiptProductStockInwardId;

	double goodsReceiptProductStockActiveId;
	
	double recid;
	
	String goodsReceiptProductProductName;
	
	String goodsReceiptProductCompanyName;
	
	double goodsReceiptProductQtyAvailable;
	
	double goodsReceiptProductFreeAvailable;
	
	double goodsReceiptProductPurchaseQtyAvl;
	
	double goodsReceiptProductPurchaseFreeAvl;
	
	double goodsReceiptProductPack;

	double goodsReceiptProductQty;
	
	java.math.BigDecimal goodsReceiptProductMRP;
	
	double goodsReceiptProductFree;
	
	java.math.BigDecimal goodsReceiptProductTrade;
	
	java.math.BigDecimal goodsReceiptProductRate;
	
	double goodsReceiptProductDifference;
	
	double goodsReceiptProductPOId;
	
	java.math.BigDecimal goodsReceiptProductCST;
	
	java.math.BigDecimal goodsReceiptProductLT;
	
	java.math.BigDecimal goodsReceiptProductVAT;
	
	java.math.BigDecimal goodsReceiptProductValue;
	
	double goodsReceiptProductBatchId;
	
	double goodsReceiptProductVatChargedOn;
	
	GrProductBatch grProductBatchObj;
	
	int goodsReceiptProductStorageId;
	
	int goodsReceiptProductReceiptTypeId;
	
	String goodsReceiptProductType;
	
	String goodsReceiptProductContents;
	
	List<CompanyPurchaseOrder> goodsReceiptProductcpoList;
	
    double goodsReceiptProductSIID;
	
	double goodsReceiptProductPBAID;
	
	double goodsReceiptProductSAID;
	
	double goodsReceiptProductPBID;
	
	boolean goodsReceiptProductIsDeleted;

	
	
	public boolean isGoodsReceiptProductFlgSale() {
		return goodsReceiptProductFlgSale;
	}

	public void setGoodsReceiptProductFlgSale(boolean goodsReceiptProductFlgSale) {
		this.goodsReceiptProductFlgSale = goodsReceiptProductFlgSale;
	}

	public boolean isGoodsReceiptProductIsDeleted() {
		return goodsReceiptProductIsDeleted;
	}

	public void setGoodsReceiptProductIsDeleted(boolean goodsReceiptProductIsDeleted) {
		this.goodsReceiptProductIsDeleted = goodsReceiptProductIsDeleted;
	}

	public double getGoodsReceiptProductSIID() {
		return goodsReceiptProductSIID;
	}

	public void setGoodsReceiptProductSIID(double goodsReceiptProductSIID) {
		this.goodsReceiptProductSIID = goodsReceiptProductSIID;
	}

	public double getGoodsReceiptProductPBAID() {
		return goodsReceiptProductPBAID;
	}

	public void setGoodsReceiptProductPBAID(double goodsReceiptProductPBAID) {
		this.goodsReceiptProductPBAID = goodsReceiptProductPBAID;
	}

	public double getGoodsReceiptProductSAID() {
		return goodsReceiptProductSAID;
	}

	public void setGoodsReceiptProductSAID(double goodsReceiptProductSAID) {
		this.goodsReceiptProductSAID = goodsReceiptProductSAID;
	}

	public double getGoodsReceiptProductPBID() {
		return goodsReceiptProductPBID;
	}

	public void setGoodsReceiptProductPBID(double goodsReceiptProductPBID) {
		this.goodsReceiptProductPBID = goodsReceiptProductPBID;
	}

	public int getGoodsReceiptPendingOrder() {
		return goodsReceiptPendingOrder;
	}

	public void setGoodsReceiptPendingOrder(int goodsReceiptPendingOrder) {
		this.goodsReceiptPendingOrder = goodsReceiptPendingOrder;
	}

	public double getGoodsReceiptProductStockActiveId() {
		return goodsReceiptProductStockActiveId;
	}

	public void setGoodsReceiptProductStockActiveId(
			double goodsReceiptProductStockActiveId) {
		this.goodsReceiptProductStockActiveId = goodsReceiptProductStockActiveId;
	}

	public double getGoodsReceiptProductStockInwardId() {
		return goodsReceiptProductStockInwardId;
	}

	public void setGoodsReceiptProductStockInwardId(
			double goodsReceiptProductStockInwardId) {
		this.goodsReceiptProductStockInwardId = goodsReceiptProductStockInwardId;
	}

	public String getGoodsReceiptProductType() {
		return goodsReceiptProductType;
	}

	public void setGoodsReceiptProductType(String goodsReceiptProductType) {
		this.goodsReceiptProductType = goodsReceiptProductType;
	}

	public String getGoodsReceiptProductContents() {
		return goodsReceiptProductContents;
	}

	public void setGoodsReceiptProductContents(String goodsReceiptProductContents) {
		this.goodsReceiptProductContents = goodsReceiptProductContents;
	}

	public int getGoodsReceiptProductStorageId() {
		return goodsReceiptProductStorageId;
	}

	public void setGoodsReceiptProductStorageId(int goodsReceiptProductStorageId) {
		this.goodsReceiptProductStorageId = goodsReceiptProductStorageId;
	}

	public int getGoodsReceiptProductReceiptTypeId() {
		return goodsReceiptProductReceiptTypeId;
	}

	public void setGoodsReceiptProductReceiptTypeId(
			int goodsReceiptProductReceiptTypeId) {
		this.goodsReceiptProductReceiptTypeId = goodsReceiptProductReceiptTypeId;
	}

	public double getGoodsReceiptProductVatChargedOn() {
		return goodsReceiptProductVatChargedOn;
	}

	public void setGoodsReceiptProductVatChargedOn(
			double goodsReceiptProductVatChargedOn) {
		this.goodsReceiptProductVatChargedOn = goodsReceiptProductVatChargedOn;
	}

	public double getGoodsReceiptProductPOId() {
		return goodsReceiptProductPOId;
	}

	public double getGoodsReceiptProductBatchId() {
		return goodsReceiptProductBatchId;
	}

	public void setGoodsReceiptProductBatchId(double goodsReceiptProductBatchId) {
		this.goodsReceiptProductBatchId = goodsReceiptProductBatchId;
	}

	public void setGoodsReceiptProductPOId(double goodsReceiptProductPOId) {
		this.goodsReceiptProductPOId = goodsReceiptProductPOId;
	}

	public double getGoodsReceiptProductId() {
		return goodsReceiptProductId;
	}

	public void setGoodsReceiptProductId(double goodsReceiptProductId) {
		this.goodsReceiptProductId = goodsReceiptProductId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getGoodsReceiptProductProductName() {
		return goodsReceiptProductProductName;
	}

	public void setGoodsReceiptProductProductName(
			String goodsReceiptProductProductName) {
		this.goodsReceiptProductProductName = goodsReceiptProductProductName;
	}

	public String getGoodsReceiptProductCompanyName() {
		return goodsReceiptProductCompanyName;
	}

	public void setGoodsReceiptProductCompanyName(
			String goodsReceiptProductCompanyName) {
		this.goodsReceiptProductCompanyName = goodsReceiptProductCompanyName;
	}


	public double getGoodsReceiptProductQtyAvailable() {
		return goodsReceiptProductQtyAvailable;
	}

	public void setGoodsReceiptProductQtyAvailable(
			double goodsReceiptProductQtyAvailable) {
		this.goodsReceiptProductQtyAvailable = goodsReceiptProductQtyAvailable;
	}

	public double getGoodsReceiptProductFreeAvailable() {
		return goodsReceiptProductFreeAvailable;
	}

	public void setGoodsReceiptProductFreeAvailable(
			double goodsReceiptProductFreeAvailable) {
		this.goodsReceiptProductFreeAvailable = goodsReceiptProductFreeAvailable;
	}

	public double getGoodsReceiptProductPurchaseQtyAvl() {
		return goodsReceiptProductPurchaseQtyAvl;
	}

	public void setGoodsReceiptProductPurchaseQtyAvl(
			double goodsReceiptProductPurchaseQtyAvl) {
		this.goodsReceiptProductPurchaseQtyAvl = goodsReceiptProductPurchaseQtyAvl;
	}

	public double getGoodsReceiptProductPurchaseFreeAvl() {
		return goodsReceiptProductPurchaseFreeAvl;
	}

	public void setGoodsReceiptProductPurchaseFreeAvl(
			double goodsReceiptProductPurchaseFreeAvl) {
		this.goodsReceiptProductPurchaseFreeAvl = goodsReceiptProductPurchaseFreeAvl;
	}

	public double getGoodsReceiptProductPack() {
		return goodsReceiptProductPack;
	}

	public void setGoodsReceiptProductPack(double goodsReceiptProductPack) {
		this.goodsReceiptProductPack = goodsReceiptProductPack;
	}


	public double getGoodsReceiptProductQty() {
		return goodsReceiptProductQty;
	}

	public void setGoodsReceiptProductQty(double goodsReceiptProductQty) {
		this.goodsReceiptProductQty = goodsReceiptProductQty;
	}

	
	public java.math.BigDecimal getGoodsReceiptProductMRP() {
		return goodsReceiptProductMRP;
	}

	public void setGoodsReceiptProductMRP(
			java.math.BigDecimal goodsReceiptProductMRP) {
		this.goodsReceiptProductMRP = goodsReceiptProductMRP;
	}

	public java.math.BigDecimal getGoodsReceiptProductTrade() {
		return goodsReceiptProductTrade;
	}

	public void setGoodsReceiptProductTrade(
			java.math.BigDecimal goodsReceiptProductTrade) {
		this.goodsReceiptProductTrade = goodsReceiptProductTrade;
	}

	public java.math.BigDecimal getGoodsReceiptProductRate() {
		return goodsReceiptProductRate;
	}

	public void setGoodsReceiptProductRate(
			java.math.BigDecimal goodsReceiptProductRate) {
		this.goodsReceiptProductRate = goodsReceiptProductRate;
	}

	public double getGoodsReceiptProductDifference() {
		return goodsReceiptProductDifference;
	}

	public void setGoodsReceiptProductDifference(
			double goodsReceiptProductDifference) {
		this.goodsReceiptProductDifference = goodsReceiptProductDifference;
	}

	public double getGoodsReceiptProductFree() {
		return goodsReceiptProductFree;
	}

	public void setGoodsReceiptProductFree(double goodsReceiptProductFree) {
		this.goodsReceiptProductFree = goodsReceiptProductFree;
	}

	public java.math.BigDecimal getGoodsReceiptProductCST() {
		return goodsReceiptProductCST;
	}

	public void setGoodsReceiptProductCST(
			java.math.BigDecimal goodsReceiptProductCST) {
		this.goodsReceiptProductCST = goodsReceiptProductCST;
	}

	public java.math.BigDecimal getGoodsReceiptProductLT() {
		return goodsReceiptProductLT;
	}

	public void setGoodsReceiptProductLT(java.math.BigDecimal goodsReceiptProductLT) {
		this.goodsReceiptProductLT = goodsReceiptProductLT;
	}

	public java.math.BigDecimal getGoodsReceiptProductVAT() {
		return goodsReceiptProductVAT;
	}

	public void setGoodsReceiptProductVAT(
			java.math.BigDecimal goodsReceiptProductVAT) {
		this.goodsReceiptProductVAT = goodsReceiptProductVAT;
	}



	public java.math.BigDecimal getGoodsReceiptProductValue() {
		return goodsReceiptProductValue;
	}

	public void setGoodsReceiptProductValue(
			java.math.BigDecimal goodsReceiptProductValue) {
		this.goodsReceiptProductValue = goodsReceiptProductValue;
	}

	public GrProductBatch getGrProductBatchObj() {
		return grProductBatchObj;
	}

	public void setGrProductBatchObj(GrProductBatch grProductBatchObj) {
		this.grProductBatchObj = grProductBatchObj;
	}

	public List<CompanyPurchaseOrder> getGoodsReceiptProductcpoList() {
		return goodsReceiptProductcpoList;
	}

	public void setGoodsReceiptProductcpoList(
			List<CompanyPurchaseOrder> goodsReceiptProductcpoList) {
		this.goodsReceiptProductcpoList = goodsReceiptProductcpoList;
	}



	
	
	
	
}
