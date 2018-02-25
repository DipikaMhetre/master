package com.purpleaid.beans;

import java.util.List;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
@JsonIgnoreProperties(ignoreUnknown=true)

public class SystemVariable {
	
	double systemVariableId;
	double recid;
	String systemVariableName;
	double systemVariableGroupId;
	String systemVariableGroup;
	String systemVariableDescription;
	String systemVariableValue;
	String systemVariableUnit;
	String systemVariableDefaultValue;
	int systemVariableValidationType;
	int systemVariableMinimumValue;
	int systemVariableMaximumVale;
	int systemVariableValueSet;
	int systemVariableDisplayOrder;
	int systemVariableDefaultActiveFlag;
	boolean systemVariableIsSelected;
	
	
	List<SystemVariable> systemVariableSubList;


	public double getSystemVariableId() {
		return systemVariableId;
	}


	public void setSystemVariableId(double systemVariableId) {
		this.systemVariableId = systemVariableId;
	}


	public double getRecid() {
		return recid;
	}


	public void setRecid(double recid) {
		this.recid = recid;
	}


	public String getSystemVariableName() {
		return systemVariableName;
	}


	public void setSystemVariableName(String systemVariableName) {
		this.systemVariableName = systemVariableName;
	}


	public double getSystemVariableGroupId() {
		return systemVariableGroupId;
	}


	public void setSystemVariableGroupId(double systemVariableGroupId) {
		this.systemVariableGroupId = systemVariableGroupId;
	}


	public String getSystemVariableGroup() {
		return systemVariableGroup;
	}


	public void setSystemVariableGroup(String systemVariableGroup) {
		this.systemVariableGroup = systemVariableGroup;
	}


	public String getSystemVariableDescription() {
		return systemVariableDescription;
	}


	public void setSystemVariableDescription(String systemVariableDescription) {
		this.systemVariableDescription = systemVariableDescription;
	}


	public String getSystemVariableValue() {
		return systemVariableValue;
	}


	public void setSystemVariableValue(String systemVariableValue) {
		this.systemVariableValue = systemVariableValue;
	}


	public String getSystemVariableUnit() {
		return systemVariableUnit;
	}


	public void setSystemVariableUnit(String systemVariableUnit) {
		this.systemVariableUnit = systemVariableUnit;
	}


	public String getSystemVariableDefaultValue() {
		return systemVariableDefaultValue;
	}


	public void setSystemVariableDefaultValue(String systemVariableDefaultValue) {
		this.systemVariableDefaultValue = systemVariableDefaultValue;
	}


	public int getSystemVariableValidationType() {
		return systemVariableValidationType;
	}


	public void setSystemVariableValidationType(int systemVariableValidationType) {
		this.systemVariableValidationType = systemVariableValidationType;
	}


	public int getSystemVariableMinimumValue() {
		return systemVariableMinimumValue;
	}


	public void setSystemVariableMinimumValue(int systemVariableMinimumValue) {
		this.systemVariableMinimumValue = systemVariableMinimumValue;
	}


	public int getSystemVariableMaximumVale() {
		return systemVariableMaximumVale;
	}


	public void setSystemVariableMaximumVale(int systemVariableMaximumVale) {
		this.systemVariableMaximumVale = systemVariableMaximumVale;
	}


	public int getSystemVariableValueSet() {
		return systemVariableValueSet;
	}


	public void setSystemVariableValueSet(int systemVariableValueSet) {
		this.systemVariableValueSet = systemVariableValueSet;
	}


	public int getSystemVariableDisplayOrder() {
		return systemVariableDisplayOrder;
	}


	public void setSystemVariableDisplayOrder(int systemVariableDisplayOrder) {
		this.systemVariableDisplayOrder = systemVariableDisplayOrder;
	}


	public int getSystemVariableDefaultActiveFlag() {
		return systemVariableDefaultActiveFlag;
	}


	public void setSystemVariableDefaultActiveFlag(
			int systemVariableDefaultActiveFlag) {
		this.systemVariableDefaultActiveFlag = systemVariableDefaultActiveFlag;
	}


	public boolean isSystemVariableIsSelected() {
		return systemVariableIsSelected;
	}


	public void setSystemVariableIsSelected(boolean systemVariableIsSelected) {
		this.systemVariableIsSelected = systemVariableIsSelected;
	}


	public List<SystemVariable> getSystemVariableSubList() {
		return systemVariableSubList;
	}


	public void setSystemVariableSubList(List<SystemVariable> systemVariableSubList) {
		this.systemVariableSubList = systemVariableSubList;
	}
	
	
	

}
