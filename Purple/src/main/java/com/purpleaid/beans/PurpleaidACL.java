package com.purpleaid.beans;

import java.io.Serializable;
import java.util.List;


public class PurpleaidACL implements Serializable{
	
	private static final long serialVersionUID = 1L;
	double purpleaidACLpermissionID ;
	
	double purpleaidACLuserID;
	
	String purpleaidACLpermission;
	
	String purpleaidACLpermissionGroup;
	
	String purpleaidACLpermissionType;
	
	String purpleaidACLpermissionDescription;
	
	String purpleaidACLrole;
	
	boolean purpleaidACLroleFlgActive;
	
	double purpleaidACLroleID;
	
	double purpleaidACLpermissionGroupID;
	
	double purpleaidACLactiveUserId;
	
	float purpleaidACLactiveUserToken;
	
	int purpleaidACLMenuID ;
	
	int purpleaidACLParentMenuID ;
	
	String purpleaidACLMenu;
	
	String purpleaidACLMenuUrl;
	
	double recid;
	
	int status;
	
	String purpleaidACLroleDescription;
	
	boolean purpleaidACLFlgExclusive;
	
	boolean purpleaidACLIsPermission;
	
	boolean purpleaidACLManualFlag;
	
	boolean purpleaidACLIsPermissionDeleted;
	
	double purpleaidACLupid;
	
	double purpleaidACLrolePermissionID;
	
	List<PurpleaidACL> permissionList;
		
	List<Contact> userList;
		
	String Role;
	String Manual;
	
	
	
	
	public String getPurpleaidACLroleDescription() {
		return purpleaidACLroleDescription;
	}

	public void setPurpleaidACLroleDescription(String purpleaidACLroleDescription) {
		this.purpleaidACLroleDescription = purpleaidACLroleDescription;
	}

	public boolean isPurpleaidACLroleFlgActive() {
		return purpleaidACLroleFlgActive;
	}

	public void setPurpleaidACLroleFlgActive(boolean purpleaidACLroleFlgActive) {
		this.purpleaidACLroleFlgActive = purpleaidACLroleFlgActive;
	}

	public String getPurpleaidACLpermissionGroup() {
		return purpleaidACLpermissionGroup;
	}

	public void setPurpleaidACLpermissionGroup(String purpleaidACLpermissionGroup) {
		this.purpleaidACLpermissionGroup = purpleaidACLpermissionGroup;
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

	public double getPurpleaidACLuserID() {
		return purpleaidACLuserID;
	}

	public void setPurpleaidACLuserID(double purpleaidACLuserID) {
		this.purpleaidACLuserID = purpleaidACLuserID;
	}

	public List<Contact> getUserList() {
		return userList;
	}

	public void setUserList(List<Contact> userList) {
		this.userList = userList;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public double getPurpleaidACLrolePermissionID() {
		return purpleaidACLrolePermissionID;
	}

	public void setPurpleaidACLrolePermissionID(double purpleaidACLrolePermissionID) {
		this.purpleaidACLrolePermissionID = purpleaidACLrolePermissionID;
	}

	public List<PurpleaidACL> getPermissionList() {
		return permissionList;
	}

	public void setPermissionList(List<PurpleaidACL> permissionList) {
		this.permissionList = permissionList;
	}

	public boolean isPurpleaidACLIsPermissionDeleted() {
		return purpleaidACLIsPermissionDeleted;
	}

	public void setPurpleaidACLIsPermissionDeleted(
			boolean purpleaidACLIsPermissionDeleted) {
		this.purpleaidACLIsPermissionDeleted = purpleaidACLIsPermissionDeleted;
	}

	public double getPurpleaidACLupid() {
		return purpleaidACLupid;
	}

	public void setPurpleaidACLupid(double purpleaidACLupid) {
		this.purpleaidACLupid = purpleaidACLupid;
	}



	public boolean isPurpleaidACLManualFlag() {
		return purpleaidACLManualFlag;
	}

	public void setPurpleaidACLManualFlag(boolean purpleaidACLManualFlag) {
		this.purpleaidACLManualFlag = purpleaidACLManualFlag;
	}

	public boolean isPurpleaidACLIsPermission() {
		return purpleaidACLIsPermission;
	}

	public void setPurpleaidACLIsPermission(boolean purpleaidACLIsPermission) {
		this.purpleaidACLIsPermission = purpleaidACLIsPermission;
	}

	List<PurpleaidACL> rolePermissionList;
	
	List<Role> permissionRoleList;
	
	
	
	
	
	public boolean isPurpleaidACLFlgExclusive() {
		return purpleaidACLFlgExclusive;
	}

	public void setPurpleaidACLFlgExclusive(boolean purpleaidACLFlgExclusive) {
		this.purpleaidACLFlgExclusive = purpleaidACLFlgExclusive;
	}

	public List<Role> getPermissionRoleList() {
		return permissionRoleList;
	}

	public void setPermissionRoleList(List<Role> permissionRoleList) {
		this.permissionRoleList = permissionRoleList;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public List<PurpleaidACL> getRolePermissionList() {
		return rolePermissionList;
	}

	public void setRolePermissionList(List<PurpleaidACL> rolePermissionList) {
		this.rolePermissionList = rolePermissionList;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public double getPurpleaidACLpermissionID() {
		return purpleaidACLpermissionID;
	}

	public void setPurpleaidACLpermissionID(double purpleaidACLpermissionID) {
		this.purpleaidACLpermissionID = purpleaidACLpermissionID;
	}

	public String getPurpleaidACLpermission() {
		return purpleaidACLpermission;
	}

	public void setPurpleaidACLpermission(String purpleaidACLpermission) {
		this.purpleaidACLpermission = purpleaidACLpermission;
	}

	public String getPurpleaidACLpermissionType() {
		return purpleaidACLpermissionType;
	}

	public void setPurpleaidACLpermissionType(String purpleaidACLpermissionType) {
		this.purpleaidACLpermissionType = purpleaidACLpermissionType;
	}

	public String getPurpleaidACLpermissionDescription() {
		return purpleaidACLpermissionDescription;
	}

	public void setPurpleaidACLpermissionDescription(
			String purpleaidACLpermissionDescription) {
		this.purpleaidACLpermissionDescription = purpleaidACLpermissionDescription;
	}

	public String getPurpleaidACLrole() {
		return purpleaidACLrole;
	}

	public void setPurpleaidACLrole(String purpleaidACLrole) {
		this.purpleaidACLrole = purpleaidACLrole;
	}

	public double getPurpleaidACLroleID() {
		return purpleaidACLroleID;
	}

	public void setPurpleaidACLroleID(double purpleaidACLroleID) {
		this.purpleaidACLroleID = purpleaidACLroleID;
	}

	public double getPurpleaidACLpermissionGroupID() {
		return purpleaidACLpermissionGroupID;
	}

	public void setPurpleaidACLpermissionGroupID(
			double purpleaidACLpermissionGroupID) {
		this.purpleaidACLpermissionGroupID = purpleaidACLpermissionGroupID;
	}

	public double getPurpleaidACLactiveUserId() {
		return purpleaidACLactiveUserId;
	}

	public void setPurpleaidACLactiveUserId(double purpleaidACLactiveUserId) {
		this.purpleaidACLactiveUserId = purpleaidACLactiveUserId;
	}

	public float getPurpleaidACLactiveUserToken() {
		return purpleaidACLactiveUserToken;
	}

	public void setPurpleaidACLactiveUserToken(float purpleaidACLactiveUserToken) {
		this.purpleaidACLactiveUserToken = purpleaidACLactiveUserToken;
	}

	public int getPurpleaidACLMenuID() {
		return purpleaidACLMenuID;
	}

	public void setPurpleaidACLMenuID(int purpleaidACLMenuID) {
		this.purpleaidACLMenuID = purpleaidACLMenuID;
	}

	public int getPurpleaidACLParentMenuID() {
		return purpleaidACLParentMenuID;
	}

	public void setPurpleaidACLParentMenuID(int purpleaidACLParentMenuID) {
		this.purpleaidACLParentMenuID = purpleaidACLParentMenuID;
	}

	public String getPurpleaidACLMenu() {
		return purpleaidACLMenu;
	}

	public void setPurpleaidACLMenu(String purpleaidACLMenu) {
		this.purpleaidACLMenu = purpleaidACLMenu;
	}

	public String getPurpleaidACLMenuUrl() {
		return purpleaidACLMenuUrl;
	}

	public void setPurpleaidACLMenuUrl(String purpleaidACLMenuUrl) {
		this.purpleaidACLMenuUrl = purpleaidACLMenuUrl;
	}


}
