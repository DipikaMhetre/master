package com.purpleaid.beans;

public class PurpleaidRequest {
	int entity;
	double entityId;
	int listType;
	String requestData;
	String userId;
	String tokenId;
	double companyId;
	double supplierId;
	double divisionId;
	String grDate;
	double productId;
	double grID;
	int poLimit;
	double contactID;
	
	int action;
	
	/**** people manager *******/
	
	double contactTypeId;
	int listLimit;
	int listOffset;
	String contactLabel;
	String contactEmail;
	String contactURL;
	String contactCity;
	double contactRoute;
	double contactArea;
	String contactPhone;
	String contactHQ;
	boolean contactActiveFlag;
	boolean contactMyFavoriteFlag;
	String contactDate;
	String userName;
	String userPassword;
	boolean userLock;
	double lastID;
	String contactName;
	boolean contactMyContactFlag;
	boolean contactSystemUser;
	int detailsFilterCount;
	
	/***************************/
	
	/***** Return Register******/
	String fromDate;
	String toDate;
	double creditNoteId;
	double status ;
	double fromAmt ;
	double toAmt ;
	double createdByFilterId;
	double filterType;
	/****************************/
	
	
	/***** ACL ******/
	String token ;
	int pageId;
	int insertPermissionID;
	int updatePermissionID;
	int deletePermissionID;
	int viewPermissionID;
	int updateLockSmithPermissionID ;
	int changeDatePermissionID;
	int isActiveUsersDeleted;
	int viewAdvanceSettings;
	String ipAddress;
	
	/****************************/
	
	

	
	public int getIsActiveUsersDeleted() {
		return isActiveUsersDeleted;
	}
	public int getAction() {
		return action;
	}
	public void setAction(int action) {
		this.action = action;
	}
	public int getViewAdvanceSettings() {
		return viewAdvanceSettings;
	}
	public void setViewAdvanceSettings(int viewAdvanceSettings) {
		this.viewAdvanceSettings = viewAdvanceSettings;
	}
	public String getIpAddress() {
		return ipAddress;
	}
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
	public void setIsActiveUsersDeleted(int isActiveUsersDeleted) {
		this.isActiveUsersDeleted = isActiveUsersDeleted;
	}

	
	public int getInsertPermissionID() {
		return insertPermissionID;
	}
	public int getChangeDatePermissionID() {
		return changeDatePermissionID;
	}
	public void setChangeDatePermissionID(int changeDatePermissionID) {
		this.changeDatePermissionID = changeDatePermissionID;
	}
	public int getUpdateLockSmithPermissionID() {
		return updateLockSmithPermissionID;
	}
	public void setUpdateLockSmithPermissionID(int updateLockSmithPermissionID) {
		this.updateLockSmithPermissionID = updateLockSmithPermissionID;
	}
	public int getViewPermissionID() {
		return viewPermissionID;
	}
	public void setViewPermissionID(int viewPermissionID) {
		this.viewPermissionID = viewPermissionID;
	}
	public void setInsertPermissionID(int insertPermissionID) {
		this.insertPermissionID = insertPermissionID;
	}
	public int getUpdatePermissionID() {
		return updatePermissionID;
	}
	public void setUpdatePermissionID(int updatePermissionID) {
		this.updatePermissionID = updatePermissionID;
	}
	public int getDeletePermissionID() {
		return deletePermissionID;
	}
	public void setDeletePermissionID(int deletePermissionID) {
		this.deletePermissionID = deletePermissionID;
	}
	public int getPageId() {
		return pageId;
	}
	public void setPageId(int pageId) {
		this.pageId = pageId;
	}

	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public int getListLimit() {
		return listLimit;
	}
	public double getContactID() {
		return contactID;
	}
	public void setContactID(double contactID) {
		this.contactID = contactID;
	}
	public int getDetailsFilterCount() {
		return detailsFilterCount;
	}
	public void setDetailsFilterCount(int detailsFilterCount) {
		this.detailsFilterCount = detailsFilterCount;
	}
	public double getFilterType() {
		return filterType;
	}
	public void setFilterType(double filterType) {
		this.filterType = filterType;
	}
	public double getCreatedByFilterId() {
		return createdByFilterId;
	}
	public void setCreatedByFilterId(double createdByFilterId) {
		this.createdByFilterId = createdByFilterId;
	}
	public String getFromDate() {
		return fromDate;
	}
	public void setFromDate(String fromDate) {
		this.fromDate = fromDate;
	}
	public String getToDate() {
		return toDate;
	}
	public void setToDate(String toDate) {
		this.toDate = toDate;
	}
	public double getCreditNoteId() {
		return creditNoteId;
	}
	public void setCreditNoteId(double creditNoteId) {
		this.creditNoteId = creditNoteId;
	}
	public double getStatus() {
		return status;
	}
	public void setStatus(double status) {
		this.status = status;
	}
	public double getFromAmt() {
		return fromAmt;
	}
	public void setFromAmt(double fromAmt) {
		this.fromAmt = fromAmt;
	}
	public double getToAmt() {
		return toAmt;
	}
	public void setToAmt(double toAmt) {
		this.toAmt = toAmt;
	}
	public boolean isContactSystemUser() {
		return contactSystemUser;
	}
	public void setContactSystemUser(boolean contactSystemUser) {
		this.contactSystemUser = contactSystemUser;
	}
	public boolean isContactActiveFlag() {
		return contactActiveFlag;
	}
	public void setContactActiveFlag(boolean contactActiveFlag) {
		this.contactActiveFlag = contactActiveFlag;
	}
	public boolean isContactMyFavoriteFlag() {
		return contactMyFavoriteFlag;
	}
	public void setContactMyFavoriteFlag(boolean contactMyFavoriteFlag) {
		this.contactMyFavoriteFlag = contactMyFavoriteFlag;
	}
	public boolean isUserLock() {
		return userLock;
	}
	public void setUserLock(boolean userLock) {
		this.userLock = userLock;
	}
	public String getContactName() {
		return contactName;
	}
	public void setContactName(String contactName) {
		this.contactName = contactName;
	}
	
	public boolean isContactMyContactFlag() {
		return contactMyContactFlag;
	}
	public void setContactMyContactFlag(boolean contactMyContactFlag) {
		this.contactMyContactFlag = contactMyContactFlag;
	}
	public double getLastID() {
		return lastID;
	}
	public void setLastID(double lastID) {
		this.lastID = lastID;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public String getContactLabel() {
		return contactLabel;
	}
	public void setContactLabel(String contactLabel) {
		this.contactLabel = contactLabel;
	}
	public String getContactEmail() {
		return contactEmail;
	}
	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}
	public String getContactURL() {
		return contactURL;
	}
	public void setContactURL(String contactURL) {
		this.contactURL = contactURL;
	}
	public String getContactCity() {
		return contactCity;
	}
	public void setContactCity(String contactCity) {
		this.contactCity = contactCity;
	}

	public double getContactRoute() {
		return contactRoute;
	}
	public void setContactRoute(double contactRoute) {
		this.contactRoute = contactRoute;
	}
	public double getContactArea() {
		return contactArea;
	}
	public void setContactArea(double contactArea) {
		this.contactArea = contactArea;
	}
	public String getContactPhone() {
		return contactPhone;
	}
	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}
	public String getContactHQ() {
		return contactHQ;
	}
	public void setContactHQ(String contactHQ) {
		this.contactHQ = contactHQ;
	}
	
	public String getContactDate() {
		return contactDate;
	}
	public void setContactDate(String contactDate) {
		this.contactDate = contactDate;
	}
	public void setListLimit(int listLimit) {
		this.listLimit = listLimit;
	}
	public int getListOffset() {
		return listOffset;
	}
	public void setListOffset(int listOffset) {
		this.listOffset = listOffset;
	}
	public double getContactTypeId() {
		return contactTypeId;
	}
	public void setContactTypeId(double contactTypeId) {
		this.contactTypeId = contactTypeId;
	}
	public int getPoLimit() {
		return poLimit;
	}
	public void setPoLimit(int poLimit) {
		this.poLimit = poLimit;
	}
	public double getGrID() {
		return grID;
	}
	public void setGrID(double grID) {
		this.grID = grID;
	}
	/**
	 * @return the entity
	 */
	public int getEntity() {
		return entity;
	}
	/**
	 * @param entity the entity to set
	 */
	public void setEntity(int entity) {
		this.entity = entity;
	}
	/**
	 * @return the entityId
	 */
	public double getEntityId() {
		return entityId;
	}
	/**
	 * @param entityId the entityId to set
	 */
	public void setEntityId(double entityId) {
		this.entityId = entityId;
	}
	/**
	 * @return the listType
	 */
	public int getListType() {
		return listType;
	}
	/**
	 * @param listType the listType to set
	 */
	public void setListType(int listType) {
		this.listType = listType;
	}
	/**
	 * @return the data
	 */
	
	/**
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}
	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}
	/**
	 * @return the tokenId
	 */
	public String getTokenId() {
		return tokenId;
	}
	/**
	 * @param tokenId the tokenId to set
	 */
	public void setTokenId(String tokenId) {
		this.tokenId = tokenId;
	}
	/**
	 * @return the requestData
	 */
	public String getRequestData() {
		return requestData;
	}
	/**
	 * @param requestData the requestData to set
	 */
	public void setRequestData(String requestData) {
		this.requestData = requestData;
	}
	/**
	 * @return the companyId
	 */
	public double getCompanyId() {
		return companyId;
	}
	/**
	 * @param companyId the companyId to set
	 */
	public void setCompanyId(double companyId) {
		this.companyId = companyId;
	}
	/**
	 * @return the supplierId
	 */
	public double getSupplierId() {
		return supplierId;
	}
	/**
	 * @param supplierId the supplierId to set
	 */
	public void setSupplierId(double supplierId) {
		this.supplierId = supplierId;
	}
	/**
	 * @return the divisionId
	 */
	public double getDivisionId() {
		return divisionId;
	}
	/**
	 * @param divisionId the divisionId to set
	 */
	public void setDivisionId(double divisionId) {
		this.divisionId = divisionId;
	}
	public String getGrDate() {
		return grDate;
	}
	public void setGrDate(String grDate) {
		this.grDate = grDate;
	}
	public double getProductId() {
		return productId;
	}
	public void setProductId(double productId) {
		this.productId = productId;
	}
	
	
}
