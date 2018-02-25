package com.purpleaid.beans;

import java.util.List;

public class CompanyPurchaseOrder {
	 /*** new fields by deepika **/ 
    
    String cpoCreatedByName;
    
    double cpoCreatedById;
    int cpoStatus;
    int cpoItem;
	
	 int cpoNoOfTasks;
	    
	    int cpoNoOfItems;
	
	/******************/
	    
   String cpoStatusDescription; 
	double cpoCompanyId;
	
	String cpoCompanyName;
	
	double cpoSupplierId;
	
	String cpoSupplierName;
	
	double cpoMrId;
	
	String cpoMrName;
	
	double cpoId;
	
	String cpoDate;
	
	double cpoAmount;
	
	String cpoPreOrderText;
	
	boolean cpoEmailFlag;
	
	boolean cpoStopOpenFlag;
	
	boolean cpoSchemeFlag;
	
	boolean cpoUrgentFlag;
	
	boolean cpoVoidFlag;
	
	boolean cpoCancelPendingFlag;
	
	boolean cpoUrgent;
	
	String cpoVoidText;
	
	String cpoRemark;
	
	List<CompanyProduct> cpoProductList;
	
	List<CompanyPurchaseOrder> cpoList;
	
	
	String cpoUrgentDescription;
	
	String cpoVoidDescription;
	
	
	
	
	
	public String getCpoUrgentDescription() {
		return cpoUrgentDescription;
	}

	public void setCpoUrgentDescription(String cpoUrgentDescription) {
		this.cpoUrgentDescription = cpoUrgentDescription;
	}

	public String getCpoVoidDescription() {
		return cpoVoidDescription;
	}

	public void setCpoVoidDescription(String cpoVoidDescription) {
		this.cpoVoidDescription = cpoVoidDescription;
	}

	public String getCpoStatusDescription() {
		return cpoStatusDescription;
	}

	public void setCpoStatusDescription(String cpoStatusDescription) {
		this.cpoStatusDescription = cpoStatusDescription;
	}

	public String getCpoCreatedByName() {
		return cpoCreatedByName;
	}

	public void setCpoCreatedByName(String cpoCreatedByName) {
		this.cpoCreatedByName = cpoCreatedByName;
	}

	public double getCpoCreatedById() {
		return cpoCreatedById;
	}

	public void setCpoCreatedById(double cpoCreatedById) {
		this.cpoCreatedById = cpoCreatedById;
	}

	public int getCpoStatus() {
		return cpoStatus;
	}

	public void setCpoStatus(int cpoStatus) {
		this.cpoStatus = cpoStatus;
	}

	public int getCpoItem() {
		return cpoItem;
	}

	public void setCpoItem(int cpoItem) {
		this.cpoItem = cpoItem;
	}

	public int getCpoNoOfTasks() {
		return cpoNoOfTasks;
	}

	public void setCpoNoOfTasks(int cpoNoOfTasks) {
		this.cpoNoOfTasks = cpoNoOfTasks;
	}

	public int getCpoNoOfItems() {
		return cpoNoOfItems;
	}

	public void setCpoNoOfItems(int cpoNoOfItems) {
		this.cpoNoOfItems = cpoNoOfItems;
	}

	double recid;
	
	
	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public boolean isCpoUrgent() {
		return cpoUrgent;
	}

	public void setCpoUrgent(boolean cpoUrgent) {
		this.cpoUrgent = cpoUrgent;
	}

	public boolean isCpoCancelPendingFlag() {
		return cpoCancelPendingFlag;
	}

	public void setCpoCancelPendingFlag(boolean cpoCancelPendingFlag) {
		this.cpoCancelPendingFlag = cpoCancelPendingFlag;
	}

	public String getCpoRemark() {
		return cpoRemark;
	}

	public void setCpoRemark(String cpoRemark) {
		this.cpoRemark = cpoRemark;
	}

	public double getCpoCompanyId() {
		return cpoCompanyId;
	}

	public void setCpoCompanyId(double cpoCompanyId) {
		this.cpoCompanyId = cpoCompanyId;
	}

	public String getCpoCompanyName() {
		return cpoCompanyName;
	}

	public void setCpoCompanyName(String cpoCompanyName) {
		this.cpoCompanyName = cpoCompanyName;
	}

	public double getCpoSupplierId() {
		return cpoSupplierId;
	}

	public void setCpoSupplierId(double cpoSupplierId) {
		this.cpoSupplierId = cpoSupplierId;
	}

	public String getCpoSupplierName() {
		return cpoSupplierName;
	}

	public void setCpoSupplierName(String cpoSupplierName) {
		this.cpoSupplierName = cpoSupplierName;
	}

	public double getCpoMrId() {
		return cpoMrId;
	}

	public void setCpoMrId(double cpoMrId) {
		this.cpoMrId = cpoMrId;
	}

	public String getCpoMrName() {
		return cpoMrName;
	}

	public void setCpoMrName(String cpoMrName) {
		this.cpoMrName = cpoMrName;
	}

	public double getCpoId() {
		return cpoId;
	}

	public void setCpoId(double cpoId) {
		this.cpoId = cpoId;
	}

	public String getCpoDate() {
		return cpoDate;
	}

	public void setCpoDate(String cpoDate) {
		this.cpoDate = cpoDate;
	}

	public double getCpoAmount() {
		return cpoAmount;
	}

	public void setCpoAmount(double cpoAmount) {
		this.cpoAmount = cpoAmount;
	}

	public String getCpoPreOrderText() {
		return cpoPreOrderText;
	}

	public void setCpoPreOrderText(String cpoPreOrderText) {
		this.cpoPreOrderText = cpoPreOrderText;
	}

	public boolean isCpoEmailFlag() {
		return cpoEmailFlag;
	}

	public void setCpoEmailFlag(boolean cpoEmailFlag) {
		this.cpoEmailFlag = cpoEmailFlag;
	}

	public boolean isCpoStopOpenFlag() {
		return cpoStopOpenFlag;
	}

	public void setCpoStopOpenFlag(boolean cpoStopOpenFlag) {
		this.cpoStopOpenFlag = cpoStopOpenFlag;
	}

	public boolean isCpoSchemeFlag() {
		return cpoSchemeFlag;
	}

	public void setCpoSchemeFlag(boolean cpoSchemeFlag) {
		this.cpoSchemeFlag = cpoSchemeFlag;
	}

	public boolean isCpoUrgentFlag() {
		return cpoUrgentFlag;
	}

	public void setCpoUrgentFlag(boolean cpoUrgentFlag) {
		this.cpoUrgentFlag = cpoUrgentFlag;
	}

	public boolean isCpoVoidFlag() {
		return cpoVoidFlag;
	}

	public void setCpoVoidFlag(boolean cpoVoidFlag) {
		this.cpoVoidFlag = cpoVoidFlag;
	}

	public String getCpoVoidText() {
		return cpoVoidText;
	}

	public void setCpoVoidText(String cpoVoidText) {
		this.cpoVoidText = cpoVoidText;
	}

	public List<CompanyProduct> getCpoProductList() {
		return cpoProductList;
	}

	public void setCpoProductList(List<CompanyProduct> cpoProductList) {
		this.cpoProductList = cpoProductList;
	}

	public List<CompanyPurchaseOrder> getCpoList() {
		return cpoList;
	}

	public void setCpoList(List<CompanyPurchaseOrder> cpoList) {
		this.cpoList = cpoList;
	}

	
	
}
