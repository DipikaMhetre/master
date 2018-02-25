package com.purpleaid.beans;

import java.util.List;

public class PermissionGroup {
	
	double PermissionGroupId;
	
	double recid;
	
	String PermissionGroup;
	
	List<PurpleaidACL> permissionList;

	public double getPermissionGroupId() {
		return PermissionGroupId;
	}

	public void setPermissionGroupId(double permissionGroupId) {
		PermissionGroupId = permissionGroupId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getPermissionGroup() {
		return PermissionGroup;
	}

	public void setPermissionGroup(String permissionGroup) {
		PermissionGroup = permissionGroup;
	}

	public List<PurpleaidACL> getPermissionList() {
		return permissionList;
	}

	public void setPermissionList(List<PurpleaidACL> permissionList) {
		this.permissionList = permissionList;
	}
	
	
	
	

}
