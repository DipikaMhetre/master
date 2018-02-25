package com.purpleaid.beans;

import java.util.List;

public class ControlPanelMisc {
	
	double recid;
	double controlPanelMiscContactTypeId;
	double controlPanelMiscRoleId;
	double contactTypeRoleMapId;
	String controlPanelMiscContactType;
	String controlPanelMiscDefaultRole;
	String controlPanelMiscRole;
	int controlPanelMiscActiveFlag;
	int status;
	int action;
	int checked;
	double controlPanelMiscActiveUserId;
	double controlPanelMiscPermissionId;
	String removeStatus;
	
	
	
	
	public String getRemoveStatus() {
		return removeStatus;
	}

	public void setRemoveStatus(String removeStatus) {
		this.removeStatus = removeStatus;
	}

	public int getAction() {
		return action;
	}

	public void setAction(int action) {
		this.action = action;
	}

	List<ControlPanelMisc> controlPanelMiscList ;

	public String getControlPanelMiscRole() {
		return controlPanelMiscRole;
	}

	public void setControlPanelMiscRole(String controlPanelMiscRole) {
		this.controlPanelMiscRole = controlPanelMiscRole;
	}

	public double getContactTypeRoleMapId() {
		return contactTypeRoleMapId;
	}

	public void setContactTypeRoleMapId(double contactTypeRoleMapId) {
		this.contactTypeRoleMapId = contactTypeRoleMapId;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public int getControlPanelMiscActiveFlag() {
		return controlPanelMiscActiveFlag;
	}

	public double getRecid() {
		return recid;
	}

	public void setRecid(double recid) {
		this.recid = recid;
	}

	public double getControlPanelMiscContactTypeId() {
		return controlPanelMiscContactTypeId;
	}

	public void setControlPanelMiscContactTypeId(
			double controlPanelMiscContactTypeId) {
		this.controlPanelMiscContactTypeId = controlPanelMiscContactTypeId;
	}

	public double getControlPanelMiscRoleId() {
		return controlPanelMiscRoleId;
	}

	public void setControlPanelMiscRoleId(double controlPanelMiscRoleId) {
		this.controlPanelMiscRoleId = controlPanelMiscRoleId;
	}

	public String getControlPanelMiscContactType() {
		return controlPanelMiscContactType;
	}

	public void setControlPanelMiscContactType(String controlPanelMiscContactType) {
		this.controlPanelMiscContactType = controlPanelMiscContactType;
	}

	public String getControlPanelMiscDefaultRole() {
		return controlPanelMiscDefaultRole;
	}

	public void setControlPanelMiscDefaultRole(String controlPanelMiscDefaultRole) {
		this.controlPanelMiscDefaultRole = controlPanelMiscDefaultRole;
	}

	public int isControlPanelMiscActiveFlag() {
		return controlPanelMiscActiveFlag;
	}

	public void setControlPanelMiscActiveFlag(int controlPanelMiscActiveFlag) {
		this.controlPanelMiscActiveFlag = controlPanelMiscActiveFlag;
	}

	public List<ControlPanelMisc> getControlPanelMiscList() {
		return controlPanelMiscList;
	}

	public void setControlPanelMiscList(List<ControlPanelMisc> controlPanelMiscList) {
		this.controlPanelMiscList = controlPanelMiscList;
	}

	public double getControlPanelMiscActiveUserId() {
		return controlPanelMiscActiveUserId;
	}

	public void setControlPanelMiscActiveUserId(double controlPanelMiscActiveUserId) {
		this.controlPanelMiscActiveUserId = controlPanelMiscActiveUserId;
	}

	public double getControlPanelMiscPermissionId() {
		return controlPanelMiscPermissionId;
	}

	public void setControlPanelMiscPermissionId(double controlPanelMiscPermissionId) {
		this.controlPanelMiscPermissionId = controlPanelMiscPermissionId;
	}

	public int getChecked() {
		return checked;
	}

	public void setChecked(int checked) {
		this.checked = checked;
	}

	
	

}
