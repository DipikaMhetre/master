package com.purpleaid.beans;

import java.util.List;

public class Product {

	double productId;
	
	double recid;
	
	String productName;
	
	String productUPCId;
	
	String productOtherInfo;
	
	String productDesc;
	
	String productRemark;
	
	double productTypeId;
	
	String productTypeName;
	
	double productCompanyId;
	
	// new field entered by deepika
	int productTypeSelected;
	
	
	
	public int getProductTypeSelected() {
		return productTypeSelected;
	}

	public void setProductTypeSelected(int productTypeSelected) {
		this.productTypeSelected = productTypeSelected;
	}

	public String getProductTypeName() {
		return productTypeName;
	}

	public void setProductTypeName(String productTypeName) {
		this.productTypeName = productTypeName;
	}

	String productCompanyName;
	
	double productDivisionId;
	
	String productDivisionName;
	
	double productPack;
	
	double productBox;
	
	String productShelfId;
	
	int productCategory;
	
	double productDPCOrate;
	
	
	
	java.math.BigDecimal productMrp;
	
	double productDiscount;
	
	java.math.BigDecimal productPurchaseRate;
	
	java.math.BigDecimal productSaleRate;
	
	public List<Content> productContents;
	
	boolean productActiveFlag;
	
	boolean productDPCOFlag;
	
	boolean productManualDPCOFlag; 
	
	boolean productNarcoticsFlag;
	
	boolean productLockFlag;
	
	double productTaxCodeID;
	
	List<GrProductBatch> productBatchList;
	
	
	
	public double getProductTaxCodeID() {
		return productTaxCodeID;
	}

	public void setProductTaxCodeID(double productTaxCodeID) {
		this.productTaxCodeID = productTaxCodeID;
	}

	/**
	 * @return the productTypeId
	 */
	public double getProductTypeId() {
		return productTypeId;
	}

	/**
	 * @param productTypeId the productTypeId to set
	 */
	public void setProductTypeId(double productTypeId) {
		this.productTypeId = productTypeId;
	}

	public double getProductId() {
		return productId;
	}

	public void setProductId(double productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getProductUPCId() {
		return productUPCId;
	}

	public void setProductUPCId(String productUPCId) {
		this.productUPCId = productUPCId;
	}

	public String getProductOtherInfo() {
		return productOtherInfo;
	}

	public void setProductOtherInfo(String productOtherInfo) {
		this.productOtherInfo = productOtherInfo;
	}

	public String getProductDesc() {
		return productDesc;
	}

	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}

	public String getProductRemark() {
		return productRemark;
	}

	public void setProductRemark(String productRemark) {
		this.productRemark = productRemark;
	}

	

	

	/**
	 * @return the productBatchList
	 */
	public List<GrProductBatch> getProductBatchList() {
		return productBatchList;
	}

	/**
	 * @param productBatchList the productBatchList to set
	 */
	public void setProductBatchList(List<GrProductBatch> productBatchList) {
		this.productBatchList = productBatchList;
	}

	public String getProductCompanyName() {
		return productCompanyName;
	}

	public void setProductCompanyName(String productCompanyName) {
		this.productCompanyName = productCompanyName;
	}

	public double getProductDivisionId() {
		return productDivisionId;
	}

	public void setProductDivisionId(double d) {
		this.productDivisionId = d;
	}

	public String getProductDivisionName() {
		return productDivisionName;
	}

	public void setProductDivisionName(String productDivisionName) {
		this.productDivisionName = productDivisionName;
	}

	public double getProductPack() {
		return productPack;
	}

	public void setProductPack(double productPack) {
		this.productPack = productPack;
	}

	public double getProductBox() {
		return productBox;
	}

	public void setProductBox(double productBox) {
		this.productBox = productBox;
	}

	public List<Content> getProductContents() {
		return productContents;
	}

	public void setProductContents(List<Content> productContents) {
		this.productContents = productContents;
	}

	public boolean isProductActiveFlag() {
		return productActiveFlag;
	}

	public void setProductActiveFlag(boolean productActiveFlag) {
		this.productActiveFlag = productActiveFlag;
	}

	public boolean isProductDPCOFlag() {
		return productDPCOFlag;
	}

	public void setProductDPCOFlag(boolean productDPCOFlag) {
		this.productDPCOFlag = productDPCOFlag;
	}

	public boolean isProductNarcoticsFlag() {
		return productNarcoticsFlag;
	}

	public void setProductNarcoticsFlag(boolean productNarcoticsFlag) {
		this.productNarcoticsFlag = productNarcoticsFlag;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	
	public String getProductShelfId() {
		return productShelfId;
	}

	public void setProductShelfId(String productShelfId) {
		this.productShelfId = productShelfId;
	}

	public java.math.BigDecimal getProductMrp() {
		return productMrp;
	}

	public void setProductMrp(java.math.BigDecimal productMrp) {
		this.productMrp = productMrp;
	}

	public double getProductDiscount() {
		return productDiscount;
	}

	public void setProductDiscount(double productDiscount) {
		this.productDiscount = productDiscount;
	}

	public java.math.BigDecimal getProductPurchaseRate() {
		return productPurchaseRate;
	}

	public void setProductPurchaseRate(java.math.BigDecimal productPurchaseRate) {
		this.productPurchaseRate = productPurchaseRate;
	}

	public java.math.BigDecimal getProductSaleRate() {
		return productSaleRate;
	}

	public void setProductSaleRate(java.math.BigDecimal productSaleRate) {
		this.productSaleRate = productSaleRate;
	}

	/**
	 * @return the productLockFlag
	 */
	public boolean isProductLockFlag() {
		return productLockFlag;
	}

	/**
	 * @param productLockFlag the productLockFlag to set
	 */
	public void setProductLockFlag(boolean productLockFlag) {
		this.productLockFlag = productLockFlag;
	}



	public int getProductCategory() {
		return productCategory;
	}

	public void setProductCategory(int productCategory) {
		this.productCategory = productCategory;
	}

	public double getProductDPCOrate() {
		return productDPCOrate;
	}

	public void setProductDPCOrate(double productDPCOrate) {
		this.productDPCOrate = productDPCOrate;
	}

	public boolean isProductManualDPCOFlag() {
		return productManualDPCOFlag;
	}

	public void setProductManualDPCOFlag(boolean productManualDPCOFlag) {
		this.productManualDPCOFlag = productManualDPCOFlag;
	}

	public double getProductCompanyId() {
		return productCompanyId;
	}

	public void setProductCompanyId(double productCompanyId) {
		this.productCompanyId = productCompanyId;
	}


	
  
	


}
