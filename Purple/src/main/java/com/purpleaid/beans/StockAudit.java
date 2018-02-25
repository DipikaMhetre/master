package com.purpleaid.beans;

import java.util.List;

public class StockAudit {
	
	double stockAuditId;
	
	double recid;
	
	String stockAuditDate;
	
	String stockAuditLabel;
	
	int stockAuditResult;
	
	int stockAuditOutcome;
	
	int stockAuditSnap;
	
	String stockAuditSnapCreatedOn;
	
	double stockAuditTotalAuditQty;
	
	double stockAuditTotalSystemQty;
	
	double stockAuditTotalMismatchQty;
	
	String stockAuditProductStock;
	
	String stockAuditBatchStock;
	
	String stockAuditRemark;
	
	double stockAuditCreatedById;
	
	String stockAuditCreatedByName;
	
	String stockAuditCreatedOn;
	
	boolean stockAuditFlgLockSale;
	
	boolean stockAuditFlgLockSaleHistory ;
	
	boolean stockAuditFlgLockDataEntry;

	boolean stockAuditLock;
	
	double companyId;
	
	double divisionId;
	
	double productTypeId;
	
	int stockAuditLevel;
	
	int isCriteriaChanged;
	
	int stockAuditTotalProduct;
	
	int stockAuditProdectSelected;
	
	int stockauditTotalBatch;
	
	int stockAuditBatchSelected;
	
	String stockAuditEnteredByName;

	List<StockAuditProductBatch> SaProductList;
	List<Company> companyDivisionSelectedList;
	List<StockAudit> auditList ;
	List<Product> productTypeList;
	
	boolean findProductSelected ;
	
	boolean physicalStcockEntry;
	
	 boolean selectLockDataEntry;

	
	 String stockAuditSaleDescription;
	 
	 String stockAuditSaleHistoryDescription;
	 
	 
	 
	
	public String getStockAuditSaleDescription() {
		return stockAuditSaleDescription;
	}
	public void setStockAuditSaleDescription(String stockAuditSaleDescription) {
		this.stockAuditSaleDescription = stockAuditSaleDescription;
	}
	public String getStockAuditSaleHistoryDescription() {
		return stockAuditSaleHistoryDescription;
	}
	public void setStockAuditSaleHistoryDescription(
			String stockAuditSaleHistoryDescription) {
		this.stockAuditSaleHistoryDescription = stockAuditSaleHistoryDescription;
	}
	public boolean isPhysicalStcockEntry() {
		return physicalStcockEntry;
	}
	public void setPhysicalStcockEntry(boolean physicalStcockEntry) {
		this.physicalStcockEntry = physicalStcockEntry;
	}
	public boolean isSelectLockDataEntry() {
		return selectLockDataEntry;
	}
	public void setSelectLockDataEntry(boolean selectLockDataEntry) {
		this.selectLockDataEntry = selectLockDataEntry;
	}
	public String getStockAuditEnteredByName() {
		return stockAuditEnteredByName;
	}
	public void setStockAuditEnteredByName(String stockAuditEnteredByName) {
		this.stockAuditEnteredByName = stockAuditEnteredByName;
	}
	public boolean isFindProductSelected() {
		return findProductSelected;
	}
	public void setFindProductSelected(boolean findProductSelected) {
		this.findProductSelected = findProductSelected;
	}
	public int getStockAuditTotalProduct() {
		return stockAuditTotalProduct;
	}
	public void setStockAuditTotalProduct(int stockAuditTotalProduct) {
		this.stockAuditTotalProduct = stockAuditTotalProduct;
	}
	public int getStockAuditProdectSelected() {
		return stockAuditProdectSelected;
	}
	public void setStockAuditProdectSelected(int stockAuditProdectSelected) {
		this.stockAuditProdectSelected = stockAuditProdectSelected;
	}
	public int getStockauditTotalBatch() {
		return stockauditTotalBatch;
	}
	public void setStockauditTotalBatch(int stockauditTotalBatch) {
		this.stockauditTotalBatch = stockauditTotalBatch;
	}
	public int getStockAuditBatchSelected() {
		return stockAuditBatchSelected;
	}
	public void setStockAuditBatchSelected(int stockAuditBatchSelected) {
		this.stockAuditBatchSelected = stockAuditBatchSelected;
	}
	public List<Company> getCompanyDivisionSelectedList() {
		return companyDivisionSelectedList;
	}
	public void setCompanyDivisionSelectedList(
			List<Company> companyDivisionSelectedList) {
		this.companyDivisionSelectedList = companyDivisionSelectedList;
	}
	
	public int getStockAuditLevel() {
		return stockAuditLevel;
	}
	public void setStockAuditLevel(int stockAuditLevel) {
		this.stockAuditLevel = stockAuditLevel;
	}
	
	public List<Product> getProductTypeList() {
		return productTypeList;
	}
	public void setProductTypeList(List<Product> productTypeList) {
		this.productTypeList = productTypeList;
	}
	
	public List<StockAudit> getAuditList() {
		return auditList;
	}
	public void setAuditList(List<StockAudit> auditList) {
		this.auditList = auditList;
	}
	
	
	
	public boolean isStockAuditLock() {
		return stockAuditLock;
	}
	public void setStockAuditLock(boolean stockAuditLock) {
		this.stockAuditLock = stockAuditLock;
	}
	public int getIsCriteriaChanged() {
		return isCriteriaChanged;
	}
	public void setIsCriteriaChanged(int isCriteriaChanged) {
		this.isCriteriaChanged = isCriteriaChanged;
	}
	public double getStockAuditId() {
		return stockAuditId;
	}
	public void setStockAuditId(double stockAuditId) {
		this.stockAuditId = stockAuditId;
	}
	public double getRecid() {
		return recid;
	}
	public void setRecid(double recid) {
		this.recid = recid;
	}
	public String getStockAuditDate() {
		return stockAuditDate;
	}
	public void setStockAuditDate(String stockAuditDate) {
		this.stockAuditDate = stockAuditDate;
	}
	public String getStockAuditLabel() {
		return stockAuditLabel;
	}
	public void setStockAuditLabel(String stockAuditLabel) {
		this.stockAuditLabel = stockAuditLabel;
	}
	public int getStockAuditResult() {
		return stockAuditResult;
	}
	public void setStockAuditResult(int stockAuditResult) {
		this.stockAuditResult = stockAuditResult;
	}
	public int getStockAuditOutcome() {
		return stockAuditOutcome;
	}
	public void setStockAuditOutcome(int stockAuditOutcome) {
		this.stockAuditOutcome = stockAuditOutcome;
	}
	
	
	
	public int getStockAuditSnap() {
		return stockAuditSnap;
	}
	public void setStockAuditSnap(int stockAuditSnap) {
		this.stockAuditSnap = stockAuditSnap;
	}
	public String getStockAuditSnapCreatedOn() {
		return stockAuditSnapCreatedOn;
	}
	public void setStockAuditSnapCreatedOn(String stockAuditSnapCreatedOn) {
		this.stockAuditSnapCreatedOn = stockAuditSnapCreatedOn;
	}
	public double getStockAuditTotalAuditQty() {
		return stockAuditTotalAuditQty;
	}
	public void setStockAuditTotalAuditQty(double stockAuditTotalAuditQty) {
		this.stockAuditTotalAuditQty = stockAuditTotalAuditQty;
	}
	public double getStockAuditTotalSystemQty() {
		return stockAuditTotalSystemQty;
	}
	public void setStockAuditTotalSystemQty(double stockAuditTotalSystemQty) {
		this.stockAuditTotalSystemQty = stockAuditTotalSystemQty;
	}
	public double getStockAuditTotalMismatchQty() {
		return stockAuditTotalMismatchQty;
	}
	public void setStockAuditTotalMismatchQty(double stockAuditTotalMismatchQty) {
		this.stockAuditTotalMismatchQty = stockAuditTotalMismatchQty;
	}
	
	
	public String getStockAuditProductStock() {
		return stockAuditProductStock;
	}
	public void setStockAuditProductStock(String stockAuditProductStock) {
		this.stockAuditProductStock = stockAuditProductStock;
	}
	public String getStockAuditBatchStock() {
		return stockAuditBatchStock;
	}
	public void setStockAuditBatchStock(String stockAuditBatchStock) {
		this.stockAuditBatchStock = stockAuditBatchStock;
	}
	public String getStockAuditRemark() {
		return stockAuditRemark;
	}
	public void setStockAuditRemark(String stockAuditRemark) {
		this.stockAuditRemark = stockAuditRemark;
	}
	public double getStockAuditCreatedById() {
		return stockAuditCreatedById;
	}
	public void setStockAuditCreatedById(double stockAuditCreatedById) {
		this.stockAuditCreatedById = stockAuditCreatedById;
	}
	public String getStockAuditCreatedByName() {
		return stockAuditCreatedByName;
	}
	public void setStockAuditCreatedByName(String stockAuditCreatedByName) {
		this.stockAuditCreatedByName = stockAuditCreatedByName;
	}
	public String getStockAuditCreatedOn() {
		return stockAuditCreatedOn;
	}
	public void setStockAuditCreatedOn(String stockAuditCreatedOn) {
		this.stockAuditCreatedOn = stockAuditCreatedOn;
	}
	
	public boolean isStockAuditFlgLockSale() {
		return stockAuditFlgLockSale;
	}
	public void setStockAuditFlgLockSale(boolean stockAuditFlgLockSale) {
		this.stockAuditFlgLockSale = stockAuditFlgLockSale;
	}
	
	public List<StockAuditProductBatch> getSaProductList() {
		return SaProductList;
	}
	public void setSaProductList(List<StockAuditProductBatch> saProductList) {
		SaProductList = saProductList;
	}
	public double getCompanyId() {
		return companyId;
	}
	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}
	public double getDivisionId() {
		return divisionId;
	}
	public void setDivisionId(double divisionId) {
		this.divisionId = divisionId;
	}
	public double getProductTypeId() {
		return productTypeId;
	}
	public void setProductTypeId(double productTypeId) {
		this.productTypeId = productTypeId;
	}
	public boolean isStockAuditFlgLockSaleHistory() {
		return stockAuditFlgLockSaleHistory;
	}
	public void setStockAuditFlgLockSaleHistory(boolean stockAuditFlgLockSaleHistory) {
		this.stockAuditFlgLockSaleHistory = stockAuditFlgLockSaleHistory;
	}
	public boolean isStockAuditFlgLockDataEntry() {
		return stockAuditFlgLockDataEntry;
	}
	public void setStockAuditFlgLockDataEntry(boolean stockAuditFlgLockDataEntry) {
		this.stockAuditFlgLockDataEntry = stockAuditFlgLockDataEntry;
	}
	
	

}
