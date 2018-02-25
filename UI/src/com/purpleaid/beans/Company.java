package com.purpleaid.beans;

import java.util.List;

import org.codehaus.jackson.annotate.JsonIgnoreProperties;



@JsonIgnoreProperties(ignoreUnknown=true)
public class Company {
	
	double companyId;
	
	String companyName;
	
	String edeCode;
	
	String companyCode;
	
	String companyRemarks;	
	
	String companyAddressLine1;
	
	String companyAddressLine2;
	
	City companyCity;
	
	String companyContactPerson;
	
	double companyPhone;
	
	double companyFax;
	
	String companyEmail;
	
	int companyStockCalculationMode;
	
	double companyOrderLimit;
	
	int companyPaymentTerms;
	
	int companyPaymentDays;
	
	boolean companyActiveFlag;
	
	boolean companyEmailPOFlag;
	
	List<Supplier> companySuppliersList;
	
	List<MR> companyMrsList;
	
	List<Division> companyDivisionsList;
	
	double mthLastSale;
	
	double mthCurrSale;
	
	double mthClosingStock;
	
	double yrLastSale;
	
	double yrCurrSale;
	
	double yrClosingStock;
	
	List<Integer> openOrders;
	
	double openOrdersAmt;
	
	double recid;
	
	double companyActiveSupplierId;
	
	List<Company> companyList;
	
	List<Product> productList;

	public double getCompanyId() {
		return companyId;
	}

	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getEdeCode() {
		return edeCode;
	}

	public void setEdeCode(String edeCode) {
		this.edeCode = edeCode;
	}

	public String getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(String companyCode) {
		this.companyCode = companyCode;
	}

	public String getCompanyRemarks() {
		return companyRemarks;
	}

	public void setCompanyRemarks(String companyRemarks) {
		this.companyRemarks = companyRemarks;
	}

	public String getCompanyAddressLine1() {
		return companyAddressLine1;
	}

	public void setCompanyAddressLine1(String companyAddressLine1) {
		this.companyAddressLine1 = companyAddressLine1;
	}

	public String getCompanyAddressLine2() {
		return companyAddressLine2;
	}

	public void setCompanyAddressLine2(String companyAddressLine2) {
		this.companyAddressLine2 = companyAddressLine2;
	}

	public City getCompanyCity() {
		return companyCity;
	}

	public void setCompanyCity(City companyCity) {
		this.companyCity = companyCity;
	}

	public String getCompanyContactPerson() {
		return companyContactPerson;
	}

	public void setCompanyContactPerson(String companyContactPerson) {
		this.companyContactPerson = companyContactPerson;
	}

	public double getCompanyPhone() {
		return companyPhone;
	}

	public void setCompanyPhone(double companyPhone) {
		this.companyPhone = companyPhone;
	}

	public double getCompanyFax() {
		return companyFax;
	}

	public void setCompanyFax(double companyFax) {
		this.companyFax = companyFax;
	}

	public String getCompanyEmail() {
		return companyEmail;
	}

	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}

	public int getCompanyStockCalculationMode() {
		return companyStockCalculationMode;
	}

	public void setCompanyStockCalculationMode(int companyStockCalculationMode) {
		this.companyStockCalculationMode = companyStockCalculationMode;
	}

	public double getCompanyOrderLimit() {
		return companyOrderLimit;
	}

	public void setCompanyOrderLimit(double companyOrderLimit) {
		this.companyOrderLimit = companyOrderLimit;
	}

	public int getCompanyPaymentTerms() {
		return companyPaymentTerms;
	}

	public void setCompanyPaymentTerms(int companyPaymentTerms) {
		this.companyPaymentTerms = companyPaymentTerms;
	}

	public int getCompanyPaymentDays() {
		return companyPaymentDays;
	}

	public void setCompanyPaymentDays(int companyPaymentDays) {
		this.companyPaymentDays = companyPaymentDays;
	}

	public boolean isCompanyActiveFlag() {
		return companyActiveFlag;
	}

	public void setCompanyActiveFlag(boolean companyActiveFlag) {
		this.companyActiveFlag = companyActiveFlag;
	}

	public boolean isCompanyEmailPOFlag() {
		return companyEmailPOFlag;
	}

	public void setCompanyEmailPOFlag(boolean companyEmailPOFlag) {
		this.companyEmailPOFlag = companyEmailPOFlag;
	}

	public List<Supplier> getCompanySuppliersList() {
		return companySuppliersList;
	}

	public void setCompanySuppliersList(List<Supplier> companySuppliersList) {
		this.companySuppliersList = companySuppliersList;
	}

	public List<MR> getCompanyMrsList() {
		return companyMrsList;
	}

	public void setCompanyMrsList(List<MR> companyMrsList) {
		this.companyMrsList = companyMrsList;
	}

	public List<Division> getCompanyDivisionsList() {
		return companyDivisionsList;
	}

	public void setCompanyDivisionsList(List<Division> companyDivisionsList) {
		this.companyDivisionsList = companyDivisionsList;
	}

	public double getMthLastSale() {
		return mthLastSale;
	}

	public void setMthLastSale(double mthLastSale) {
		this.mthLastSale = mthLastSale;
	}

	public double getMthCurrSale() {
		return mthCurrSale;
	}

	public void setMthCurrSale(double mthCurrSale) {
		this.mthCurrSale = mthCurrSale;
	}

	public double getMthClosingStock() {
		return mthClosingStock;
	}

	public void setMthClosingStock(double mthClosingStock) {
		this.mthClosingStock = mthClosingStock;
	}

	public double getYrLastSale() {
		return yrLastSale;
	}

	public void setYrLastSale(double yrLastSale) {
		this.yrLastSale = yrLastSale;
	}

	public double getYrCurrSale() {
		return yrCurrSale;
	}

	public void setYrCurrSale(double yrCurrSale) {
		this.yrCurrSale = yrCurrSale;
	}

	public double getYrClosingStock() {
		return yrClosingStock;
	}

	public void setYrClosingStock(double yrClosingStock) {
		this.yrClosingStock = yrClosingStock;
	}

	public List<Integer> getOpenOrders() {
		return openOrders;
	}

	public void setOpenOrders(List<Integer> openOrders) {
		this.openOrders = openOrders;
	}

	public double getOpenOrdersAmt() {
		return openOrdersAmt;
	}

	public void setOpenOrdersAmt(double openOrdersAmt) {
		this.openOrdersAmt = openOrdersAmt;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getCompanyActiveSupplierId() {
		return companyActiveSupplierId;
	}

	public void setCompanyActiveSupplierId(double companyActiveSupplierId) {
		this.companyActiveSupplierId = companyActiveSupplierId;
	}

	public List<Company> getCompanyList() {
		return companyList;
	}

	public void setCompanyList(List<Company> companyList) {
		this.companyList = companyList;
	}

	public List<Product> getProductList() {
		return productList;
	}

	public void setProductList(List<Product> productList) {
		this.productList = productList;
	}
	
	
	
	
}
