package com.purpleaid.beans;

import java.util.List;



public class Role {

	double roleId;
	
	double recid;
	
	String role;
	
	boolean roleActiveFlag;
	
	List<PurpleaidACL> rolePermissionList ;

	
	List<PermissionGroup>  permissionList;
	
	
	
	
	
	public List<PermissionGroup> getPermissionList() {
		return permissionList;
	}

	public void setPermissionList(List<PermissionGroup> permissionList) {
		this.permissionList = permissionList;
	}

	public boolean isRoleActiveFlag() {
		return roleActiveFlag;
	}

	public void setRoleActiveFlag(boolean roleActiveFlag) {
		this.roleActiveFlag = roleActiveFlag;
	}

	public double getRoleId() {
		return roleId;
	}

	public void setRoleId(double roleId) {
		this.roleId = roleId;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public List<PurpleaidACL> getRolePermissionList() {
		return rolePermissionList;
	}

	public void setRolePermissionList(List<PurpleaidACL> rolePermissionList) {
		this.rolePermissionList = rolePermissionList;
	}

	
	
	
	
	
	
}
