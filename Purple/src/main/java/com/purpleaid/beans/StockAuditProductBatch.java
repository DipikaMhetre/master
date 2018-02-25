package com.purpleaid.beans;

import java.util.List;

public class StockAuditProductBatch {
	
	double stockAuditProductBatchId;
	
	double recid;
	
	double stockAuditId;
	
	double stockAuditProductBatchProductId;
	
	double stockAuditProductBatchPBatchId;
	
	String stockAuditProductBatchProductName;
	
	String stockAuditProductBatchPBatchName;
	
	double stockAuditProductBatchAuditQty;
	
	double stockAuditProductBatchSystemQty;
	
	double stockAuditProductBatchMismatchQty;
	
	String stockAuditProductBatchAuditByName;
	
	String stockAuditProductBatchauditOn;
	
	double stockAuditProductBatchCompanyId;
	
	String stockAuditProductBatchCompanyName;
	
	double stockAuditProductBatchDivisionId;
	
	String stockAuditProductBatchDivisionName;
	
	double stockAuditProductBatchProductTypeId;
	
	String stockAuditProductBatchProductTypeName;
	
	int stockAuditProductBatchFlgLockProduct;
	
	int stockAuditProductBatchFlgLockBatch;
	
	String stockAuditProductBatchRemark;
	
	double stockAuditProductBatchQtyAvailable;
	
	double stockAuditEnteredById;
	
	String stockAuditEnteredByName;
	
	int checked ;
	
	int stockProductSelected;
	
	int stockBatchSelected;
	
	boolean productIsDeleted;
	
	boolean batchIsDeleted;
	
	boolean productBatchSelected;
	
	
	double stockAuditProductQtyAvailable;
	
	double stockAuditProductAuditQty;
	
	double stockAuditProductSystemQty;
	
	double stockAuditProductMismatchQty;

	
	List<StockAuditProductBatch> stockAuditProductBatchList;
	
	List<Company> companyList ;
	
	
	
	
	public List<Company> getCompanyList() {
		return companyList;
	}

	public void setCompanyList(List<Company> companyList) {
		this.companyList = companyList;
	}

	public double getStockAuditProductQtyAvailable() {
		return stockAuditProductQtyAvailable;
	}

	public void setStockAuditProductQtyAvailable(
			double stockAuditProductQtyAvailable) {
		this.stockAuditProductQtyAvailable = stockAuditProductQtyAvailable;
	}

	public double getStockAuditProductAuditQty() {
		return stockAuditProductAuditQty;
	}

	public void setStockAuditProductAuditQty(double stockAuditProductAuditQty) {
		this.stockAuditProductAuditQty = stockAuditProductAuditQty;
	}

	public double getStockAuditProductSystemQty() {
		return stockAuditProductSystemQty;
	}

	public void setStockAuditProductSystemQty(double stockAuditProductSystemQty) {
		this.stockAuditProductSystemQty = stockAuditProductSystemQty;
	}

	public double getStockAuditProductMismatchQty() {
		return stockAuditProductMismatchQty;
	}

	public void setStockAuditProductMismatchQty(double stockAuditProductMismatchQty) {
		this.stockAuditProductMismatchQty = stockAuditProductMismatchQty;
	}

	public boolean isProductBatchSelected() {
		return productBatchSelected;
	}

	public void setProductBatchSelected(boolean productBatchSelected) {
		this.productBatchSelected = productBatchSelected;
	}

	public boolean isProductIsDeleted() {
		return productIsDeleted;
	}

	public void setProductIsDeleted(boolean productIsDeleted) {
		this.productIsDeleted = productIsDeleted;
	}

	public boolean isBatchIsDeleted() {
		return batchIsDeleted;
	}

	public void setBatchIsDeleted(boolean batchIsDeleted) {
		this.batchIsDeleted = batchIsDeleted;
	}

	
	
	public int getStockProductSelected() {
		return stockProductSelected;
	}

	public void setStockProductSelected(int stockProductSelected) {
		this.stockProductSelected = stockProductSelected;
	}

	public int getStockBatchSelected() {
		return stockBatchSelected;
	}

	public void setStockBatchSelected(int stockBatchSelected) {
		this.stockBatchSelected = stockBatchSelected;
	}

	

	public double getStockAuditProductBatchId() {
		return stockAuditProductBatchId;
	}

	public void setStockAuditProductBatchId(double stockAuditProductBatchId) {
		this.stockAuditProductBatchId = stockAuditProductBatchId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getStockAuditProductBatchProductId() {
		return stockAuditProductBatchProductId;
	}

	public void setStockAuditProductBatchProductId(
			double stockAuditProductBatchProductId) {
		this.stockAuditProductBatchProductId = stockAuditProductBatchProductId;
	}

	public double getStockAuditProductBatchPBatchId() {
		return stockAuditProductBatchPBatchId;
	}

	public void setStockAuditProductBatchPBatchId(
			double stockAuditProductBatchPBatchId) {
		this.stockAuditProductBatchPBatchId = stockAuditProductBatchPBatchId;
	}

	public String getStockAuditProductBatchProductName() {
		return stockAuditProductBatchProductName;
	}

	public void setStockAuditProductBatchProductName(
			String stockAuditProductBatchProductName) {
		this.stockAuditProductBatchProductName = stockAuditProductBatchProductName;
	}

	public String getStockAuditProductBatchPBatchName() {
		return stockAuditProductBatchPBatchName;
	}

	public void setStockAuditProductBatchPBatchName(
			String stockAuditProductBatchPBatchName) {
		this.stockAuditProductBatchPBatchName = stockAuditProductBatchPBatchName;
	}

	public double getStockAuditProductBatchAuditQty() {
		return stockAuditProductBatchAuditQty;
	}

	public void setStockAuditProductBatchAuditQty(
			double stockAuditProductBatchAuditQty) {
		this.stockAuditProductBatchAuditQty = stockAuditProductBatchAuditQty;
	}

	public double getStockAuditProductBatchSystemQty() {
		return stockAuditProductBatchSystemQty;
	}

	public void setStockAuditProductBatchSystemQty(
			double stockAuditProductBatchSystemQty) {
		this.stockAuditProductBatchSystemQty = stockAuditProductBatchSystemQty;
	}

	public double getStockAuditProductBatchMismatchQty() {
		return stockAuditProductBatchMismatchQty;
	}

	public void setStockAuditProductBatchMismatchQty(
			double stockAuditProductBatchMismatchQty) {
		this.stockAuditProductBatchMismatchQty = stockAuditProductBatchMismatchQty;
	}

	public String getStockAuditProductBatchAuditByName() {
		return stockAuditProductBatchAuditByName;
	}

	public void setStockAuditProductBatchAuditByName(
			String stockAuditProductBatchAuditByName) {
		this.stockAuditProductBatchAuditByName = stockAuditProductBatchAuditByName;
	}

	public String getStockAuditProductBatchauditOn() {
		return stockAuditProductBatchauditOn;
	}

	public void setStockAuditProductBatchauditOn(
			String stockAuditProductBatchauditOn) {
		this.stockAuditProductBatchauditOn = stockAuditProductBatchauditOn;
	}

	public double getStockAuditProductBatchCompanyId() {
		return stockAuditProductBatchCompanyId;
	}

	public void setStockAuditProductBatchCompanyId(
			double stockAuditProductBatchCompanyId) {
		this.stockAuditProductBatchCompanyId = stockAuditProductBatchCompanyId;
	}

	public String getStockAuditProductBatchCompanyName() {
		return stockAuditProductBatchCompanyName;
	}

	public void setStockAuditProductBatchCompanyName(
			String stockAuditProductBatchCompanyName) {
		this.stockAuditProductBatchCompanyName = stockAuditProductBatchCompanyName;
	}

	public double getStockAuditProductBatchDivisionId() {
		return stockAuditProductBatchDivisionId;
	}

	public void setStockAuditProductBatchDivisionId(
			double stockAuditProductBatchDivisionId) {
		this.stockAuditProductBatchDivisionId = stockAuditProductBatchDivisionId;
	}

	public String getStockAuditProductBatchDivisionName() {
		return stockAuditProductBatchDivisionName;
	}

	public void setStockAuditProductBatchDivisionName(
			String stockAuditProductBatchDivisionName) {
		this.stockAuditProductBatchDivisionName = stockAuditProductBatchDivisionName;
	}

	public double getStockAuditProductBatchProductTypeId() {
		return stockAuditProductBatchProductTypeId;
	}

	public void setStockAuditProductBatchProductTypeId(
			double stockAuditProductBatchProductTypeId) {
		this.stockAuditProductBatchProductTypeId = stockAuditProductBatchProductTypeId;
	}

	public String getStockAuditProductBatchProductTypeName() {
		return stockAuditProductBatchProductTypeName;
	}

	public void setStockAuditProductBatchProductTypeName(
			String stockAuditProductBatchProductTypeName) {
		this.stockAuditProductBatchProductTypeName = stockAuditProductBatchProductTypeName;
	}

	public int getStockAuditProductBatchFlgLockProduct() {
		return stockAuditProductBatchFlgLockProduct;
	}

	public void setStockAuditProductBatchFlgLockProduct(
			int stockAuditProductBatchFlgLockProduct) {
		this.stockAuditProductBatchFlgLockProduct = stockAuditProductBatchFlgLockProduct;
	}

	public int getStockAuditProductBatchFlgLockBatch() {
		return stockAuditProductBatchFlgLockBatch;
	}

	public void setStockAuditProductBatchFlgLockBatch(
			int stockAuditProductBatchFlgLockBatch) {
		this.stockAuditProductBatchFlgLockBatch = stockAuditProductBatchFlgLockBatch;
	}

	public String getStockAuditProductBatchRemark() {
		return stockAuditProductBatchRemark;
	}

	public void setStockAuditProductBatchRemark(String stockAuditProductBatchRemark) {
		this.stockAuditProductBatchRemark = stockAuditProductBatchRemark;
	}

	public List<StockAuditProductBatch> getStockAuditProductBatchList() {
		return stockAuditProductBatchList;
	}

	public void setStockAuditProductBatchList(
			List<StockAuditProductBatch> stockAuditProductBatchList) {
		this.stockAuditProductBatchList = stockAuditProductBatchList;
	}

	public double getStockAuditProductBatchQtyAvailable() {
		return stockAuditProductBatchQtyAvailable;
	}

	public void setStockAuditProductBatchQtyAvailable(
			double stockAuditProductBatchQtyAvailable) {
		this.stockAuditProductBatchQtyAvailable = stockAuditProductBatchQtyAvailable;
	}

	public double getStockAuditEnteredById() {
		return stockAuditEnteredById;
	}

	public void setStockAuditEnteredById(double stockAuditEnteredById) {
		this.stockAuditEnteredById = stockAuditEnteredById;
	}

	public String getStockAuditEnteredByName() {
		return stockAuditEnteredByName;
	}

	public void setStockAuditEnteredByName(String stockAuditEnteredByName) {
		this.stockAuditEnteredByName = stockAuditEnteredByName;
	}

	public int getChecked() {
		return checked;
	}

	public void setChecked(int checked) {
		this.checked = checked;
	}

	public double getStockAuditId() {
		return stockAuditId;
	}

	public void setStockAuditId(double stockAuditId) {
		this.stockAuditId = stockAuditId;
	}	
	
	

}
