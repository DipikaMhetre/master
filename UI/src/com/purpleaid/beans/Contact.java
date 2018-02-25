package com.purpleaid.beans;

import java.util.List;

public class Contact {

	
	String contactLinkedinUrl;
	
	String contactFacebookUrl;
	
	String contactTwitterUrl;
	
	
	
	String Role;
	String Manual;
	
	double contactId;
	
	String contactType;
	
	boolean contactIsStaff;
	
	String contactIsStaffDescription;
	
	String contactPermissionSince;
	
	String contactsince;
		
	double recid;
	
	double contactRoleID;
	
	String contactUserName;
	
	String contactOrganization;
	
	String contactUserPassward;
	
	boolean contactUserLock;
	
	boolean contactIsDeleted;
	
	int contactNameTitle;
	
	String contactFirstName;
	
	String contactMiddleName;
	
	String contactLastName;
	
	String contactNickName;
	
	String contactFullName;
	
	String contactjobTitle;
	
	String contactLabel;
	
	double contactTypeId;
	
	double contactMyContactId;
	
	double contactTypeEntityId;
	
	double contactCompanyId;
	
	String contactCompanyName; 
	
	String contactHQ;
	
	double contactArea;
	
	double contactRoute;
	
	String contactNotes;
	
	String contactTypeDescription;
	
	boolean contactActiveFlag;

	boolean contactMyFavouriteFlag;
	
	boolean contactSendGreetingFlag;
	
	boolean contactOnlyMyContactFlag;
	
	boolean contactNotificationFlag;
	
	boolean contactLockFlag;
	
	List<Address> contactAddressList;
	
	List<RelatedNames> contactRelatedNamesList;
	
	List<Phone> contctPhoneList;
	
	List<Email> contactEmailList;
	
	List<Url> contactUrlList;
	
	List<ImportantDates> contctImportantDatesList;
	
	List<EntityDetails> contactEntityDetailsList;

	List<Association> contactAssociationList;
	
	List<PurpleaidACL> permissionList;
	
	List<Role> roleList;
	
	String contactOldPassword;
	
	
	
	public String getContactLinkedinUrl() {
		return contactLinkedinUrl;
	}

	public void setContactLinkedinUrl(String contactLinkedinUrl) {
		this.contactLinkedinUrl = contactLinkedinUrl;
	}

	public String getContactFacebookUrl() {
		return contactFacebookUrl;
	}

	public void setContactFacebookUrl(String contactFacebookUrl) {
		this.contactFacebookUrl = contactFacebookUrl;
	}

	public String getContactTwitterUrl() {
		return contactTwitterUrl;
	}

	public void setContactTwitterUrl(String contactTwitterUrl) {
		this.contactTwitterUrl = contactTwitterUrl;
	}

	public String getRole() {
		return Role;
	}

	public void setRole(String role) {
		Role = role;
	}

	public String getManual() {
		return Manual;
	}

	public void setManual(String manual) {
		Manual = manual;
	}

	public String getContactOldPassword() {
		return contactOldPassword;
	}

	public void setContactOldPassword(String contactOldPassword) {
		this.contactOldPassword = contactOldPassword;
	}

	public List<Role> getRoleList() {
		return roleList;
	}

	public void setRoleList(List<Role> roleList) {
		this.roleList = roleList;
	}

	String contactPermissionType;
	
	public double getContactRoleID() {
		return contactRoleID;
	}

	public void setContactRoleID(double contactRoleID) {
		this.contactRoleID = contactRoleID;
	}

	public String getContactIsStaffDescription() {
		return contactIsStaffDescription;
	}

	public void setContactIsStaffDescription(String contactIsStaffDescription) {
		this.contactIsStaffDescription = contactIsStaffDescription;
	}

	public List<PurpleaidACL> getPermissionList() {
		return permissionList;
	}

	public void setPermissionList(List<PurpleaidACL> permissionList) {
		this.permissionList = permissionList;
	}

	public boolean isContactIsStaff() {
		return contactIsStaff;
	}

	public void setContactIsStaff(boolean contactIsStaff) {
		this.contactIsStaff = contactIsStaff;
	}

	public String getContactPermissionSince() {
		return contactPermissionSince;
	}

	public void setContactPermissionSince(String contactPermissionSince) {
		this.contactPermissionSince = contactPermissionSince;
	}

	public String getContactsince() {
		return contactsince;
	}

	public void setContactsince(String contactsince) {
		this.contactsince = contactsince;
	}

	public String getContactType() {
		return contactType;
	}

	public void setContactType(String contactType) {
		this.contactType = contactType;
	}

	public String getContactPermissionType() {
		return contactPermissionType;
	}

	public void setContactPermissionType(String contactPermissionType) {
		this.contactPermissionType = contactPermissionType;
	}

	public String getContactOrganization() {
		return contactOrganization;
	}

	public void setContactOrganization(String contactOrganization) {
		this.contactOrganization = contactOrganization;
	}

	public boolean isContactIsDeleted() {
		return contactIsDeleted;
	}

	public void setContactIsDeleted(boolean contactIsDeleted) {
		this.contactIsDeleted = contactIsDeleted;
	}

	public List<Association> getContactAssociationList() {
		return contactAssociationList;
	}

	public void setContactAssociationList(List<Association> contactAssociationList) {
		this.contactAssociationList = contactAssociationList;
	}

	public boolean isContactUserLock() {
		return contactUserLock;
	}

	public void setContactUserLock(boolean contactUserLock) {
		this.contactUserLock = contactUserLock;
	}

	public double getContactMyContactId() {
		return contactMyContactId;
	}

	public void setContactMyContactId(double contactMyContactId) {
		this.contactMyContactId = contactMyContactId;
	}

	public List<RelatedNames> getContactRelatedNamesList() {
		return contactRelatedNamesList;
	}

	public void setContactRelatedNamesList(
			List<RelatedNames> contactRelatedNamesList) {
		this.contactRelatedNamesList = contactRelatedNamesList;
	}

	public List<Phone> getContctPhoneList() {
		return contctPhoneList;
	}

	public void setContctPhoneList(List<Phone> contctPhoneList) {
		this.contctPhoneList = contctPhoneList;
	}

	public List<Email> getContactEmailList() {
		return contactEmailList;
	}

	public void setContactEmailList(List<Email> contactEmailList) {
		this.contactEmailList = contactEmailList;
	}

	public List<Url> getContactUrlList() {
		return contactUrlList;
	}

	public void setContactUrlList(List<Url> contactUrlList) {
		this.contactUrlList = contactUrlList;
	}

	public List<ImportantDates> getContctImportantDatesList() {
		return contctImportantDatesList;
	}

	public void setContctImportantDatesList(
			List<ImportantDates> contctImportantDatesList) {
		this.contctImportantDatesList = contctImportantDatesList;
	}

	public boolean isContactLockFlag() {
		return contactLockFlag;
	}

	public void setContactLockFlag(boolean contactLockFlag) {
		this.contactLockFlag = contactLockFlag;
	}

	public boolean isContactNotificationFlag() {
		return contactNotificationFlag;
	}

	public void setContactNotificationFlag(boolean contactNotificationFlag) {
		this.contactNotificationFlag = contactNotificationFlag;
	}

	public String getContactCompanyName() {
		return contactCompanyName;
	}

	public void setContactCompanyName(String contactCompanyName) {
		this.contactCompanyName = contactCompanyName;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public List<EntityDetails> getContactEntityDetailsList() {
		return contactEntityDetailsList;
	}

	public void setContactEntityDetailsList(
			List<EntityDetails> contactEntityDetailsList) {
		this.contactEntityDetailsList = contactEntityDetailsList;
	}

	public double getContactTypeEntityId() {
		return contactTypeEntityId;
	}

	public void setContactTypeEntityId(double contactTypeEntityId) {
		this.contactTypeEntityId = contactTypeEntityId;
	}

	public double getContactId() {
		return contactId;
	}

	public void setContactId(double contactId) {
		this.contactId = contactId;
	}

	public String getContactMiddleName() {
		return contactMiddleName;
	}

	public void setContactMiddleName(String contactMiddleName) {
		this.contactMiddleName = contactMiddleName;
	}

	
	public String getContactjobTitle() {
		return contactjobTitle;
	}

	public void setContactjobTitle(String contactjobTitle) {
		this.contactjobTitle = contactjobTitle;
	}

	public String getContactLabel() {
		return contactLabel;
	}

	public void setContactLabel(String contactLabel) {
		this.contactLabel = contactLabel;
	}

	public double getContactTypeId() {
		return contactTypeId;
	}

	public void setContactTypeId(double contactTypeId) {
		this.contactTypeId = contactTypeId;
	}

	public double getContactCompanyId() {
		return contactCompanyId;
	}

	public void setContactCompanyId(double contactCompanyId) {
		this.contactCompanyId = contactCompanyId;
	}

	public String getContactHQ() {
		return contactHQ;
	}

	public void setContactHQ(String contactHQ) {
		this.contactHQ = contactHQ;
	}

	public String getContactTypeDescription() {
		return contactTypeDescription;
	}

	public void setContactTypeDescription(String contactTypeDescription) {
		this.contactTypeDescription = contactTypeDescription;
	}



	public boolean isContactSendGreetingFlag() {
		return contactSendGreetingFlag;
	}

	public void setContactSendGreetingFlag(boolean contactSendGreetingFlag) {
		this.contactSendGreetingFlag = contactSendGreetingFlag;
	}

	public boolean isContactOnlyMyContactFlag() {
		return contactOnlyMyContactFlag;
	}

	public void setContactOnlyMyContactFlag(boolean contactOnlyMyContactFlag) {
		this.contactOnlyMyContactFlag = contactOnlyMyContactFlag;
	}



	public List<Address> getContactAddressList() {
		return contactAddressList;
	}

	public void setContactAddressList(List<Address> contactAddressList) {
		this.contactAddressList = contactAddressList;
	}

	public int getContactNameTitle() {
		return contactNameTitle;
	}

	public void setContactNameTitle(int contactNameTitle) {
		this.contactNameTitle = contactNameTitle;
	}

	public String getContactFirstName() {
		return contactFirstName;
	}

	public void setContactFirstName(String contactFirstName) {
		this.contactFirstName = contactFirstName;
	}

	public String getContactLastName() {
		return contactLastName;
	}

	public void setContactLastName(String contactLastName) {
		this.contactLastName = contactLastName;
	}

	public String getContactNickName() {
		return contactNickName;
	}

	public void setContactNickName(String contactNickName) {
		this.contactNickName = contactNickName;
	}

	public double getContactArea() {
		return contactArea;
	}

	public void setContactArea(double contactArea) {
		this.contactArea = contactArea;
	}

	public double getContactRoute() {
		return contactRoute;
	}

	public void setContactRoute(double contactRoute) {
		this.contactRoute = contactRoute;
	}



	public String getContactNotes() {
		return contactNotes;
	}

	public void setContactNotes(String contactNotes) {
		this.contactNotes = contactNotes;
	}

	public boolean isContactActiveFlag() {
		return contactActiveFlag;
	}

	public void setContactActiveFlag(boolean contactActiveFlag) {
		this.contactActiveFlag = contactActiveFlag;
	}

	public boolean isContactMyFavouriteFlag() {
		return contactMyFavouriteFlag;
	}

	public void setContactMyFavouriteFlag(boolean contactMyFavouriteFlag) {
		this.contactMyFavouriteFlag = contactMyFavouriteFlag;
	}

	public String getContactUserName() {
		return contactUserName;
	}

	public void setContactUserName(String contactUserName) {
		this.contactUserName = contactUserName;
	}

	public String getContactUserPassward() {
		return contactUserPassward;
	}

	public void setContactUserPassward(String contactUserPassward) {
		this.contactUserPassward = contactUserPassward;
	}

	public String getContactFullName() {
		return contactFullName;
	}

	public void setContactFullName(String contactFullName) {
		this.contactFullName = contactFullName;
	}




	
	
	
	
	
}
