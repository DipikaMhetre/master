package com.purpleaid.beans;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown=true)
public class CompanyProduct {
	
	double productId;
	
	double companyId;
	
	String type;
	
	String division;
	
	String productName;
	
	String pack;
	
	int box;
	
	double lastSale;
	
	double currSale;
	
	double stock;
	
	double transit;
	
	double lastPurRate;
	
	double mrp;
	
	double qty;
	
	double scheme;
	
	double value;
	
	String remark;
	
	String salesHistory;
	
	boolean selected;
		
	double recid;
	
	List<Product> productList;
	
	List<Content> contentList;
	
	// added for stock inward po link table 
	// goods received save
	
	double grQuantity;
	
	double grScheme;
	
	double grDifference;
	
	double SIID;
	
	double qtyReceivedOther;
	
	//end sipo
	
		
	public double getGrDifference() {
		return grDifference;
	}

	public double getSIID() {
		return SIID;
	}

	public void setSIID(double sIID) {
		SIID = sIID;
	}

	public double getQtyReceivedOther() {
		return qtyReceivedOther;
	}

	public void setQtyReceivedOther(double qtyReceivedOther) {
		this.qtyReceivedOther = qtyReceivedOther;
	}

	public void setGrDifference(double grDifference) {
		this.grDifference = grDifference;
	}

	public double getGrQuantity() {
		return grQuantity;
	}

	public void setGrQuantity(double grQuantity) {
		this.grQuantity = grQuantity;
	}

	public double getGrScheme() {
		return grScheme;
	}

	public void setGrScheme(double grScheme) {
		this.grScheme = grScheme;
	}

	public double getProductDivisionId() {
		return productDivisionId;
	}

	public void setProductDivisionId(double productDivisionId) {
		this.productDivisionId = productDivisionId;
	}

	double productDivisionId;
	
	
	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getProductId() {
		return productId;
	}

	public void setProductId(double productId) {
		this.productId = productId;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getPack() {
		return pack;
	}

	public void setPack(String pack) {
		this.pack = pack;
	}

	public int getBox() {
		return box;
	}

	public void setBox(int box) {
		this.box = box;
	}

	public double getLastSale() {
		return lastSale;
	}

	public void setLastSale(double lastSale) {
		this.lastSale = lastSale;
	}

	public double getCurrSale() {
		return currSale;
	}

	public void setCurrSale(double currSale) {
		this.currSale = currSale;
	}

	public double getStock() {
		return stock;
	}

	public void setStock(double stock) {
		this.stock = stock;
	}

	public double getTransit() {
		return transit;
	}

	public void setTransit(double transit) {
		this.transit = transit;
	}

	public double getLastPurRate() {
		return lastPurRate;
	}

	public void setLastPurRate(double lastPurRate) {
		this.lastPurRate = lastPurRate;
	}

	public double getMrp() {
		return mrp;
	}

	public void setMrp(double mrp) {
		this.mrp = mrp;
	}

	public double getQty() {
		return qty;
	}

	public void setQty(double qty) {
		this.qty = qty;
	}

	public double getScheme() {
		return scheme;
	}

	public void setScheme(double scheme) {
		this.scheme = scheme;
	}

	public double getValue() {
		return value;
	}

	public void setValue(double value) {
		this.value = value;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getSalesHistory() {
		return salesHistory;
	}

	public void setSalesHistory(String salesHistory) {
		this.salesHistory = salesHistory;
	}

	public boolean isSelected() {
		return selected;
	}

	public void setSelected(boolean selected) {
		this.selected = selected;
	}

	public double getCompanyId() {
		return companyId;
	}

	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}

	public List<Content> getContentList() {
		return contentList;
	}

	public void setContentList(List<Content> contentList) {
		this.contentList = contentList;
	}

	
	
	
	

}
