package com.purpleaid.beans;

public class Association {

	double associationId;
	
	double associationTypeId;
	
	String associationTypeDescription;
	
	double associationCDID;
	
	String associationName;
	
	boolean associtaionIsDeleted;
	
	EntityDetails entity;
	
	
	double associationMasterId;
	
	String associationMasterDesc;
	
	double associationChildId;
	
	String associationChildDesc;

	
	public double getAssociationMasterId() {
		return associationMasterId;
	}

	public void setAssociationMasterId(double associationMasterId) {
		this.associationMasterId = associationMasterId;
	}

	public String getAssociationMasterDesc() {
		return associationMasterDesc;
	}

	public void setAssociationMasterDesc(String associationMasterDesc) {
		this.associationMasterDesc = associationMasterDesc;
	}

	public double getAssociationChildId() {
		return associationChildId;
	}

	public void setAssociationChildId(double associationChildId) {
		this.associationChildId = associationChildId;
	}

	public String getAssociationChildDesc() {
		return associationChildDesc;
	}

	public void setAssociationChildDesc(String associationChildDesc) {
		this.associationChildDesc = associationChildDesc;
	}

	public String getAssociationTypeDescription() {
		return associationTypeDescription;
	}

	public void setAssociationTypeDescription(String associationTypeDescription) {
		this.associationTypeDescription = associationTypeDescription;
	}

	
	public double getAssociationCDID() {
		return associationCDID;
	}

	public void setAssociationCDID(double associationCDID) {
		this.associationCDID = associationCDID;
	}

	public double getAssociationTypeId() {
		return associationTypeId;
	}

	public void setAssociationTypeId(double associationTypeId) {
		this.associationTypeId = associationTypeId;
	}

	public EntityDetails getEntity() {
		return entity;
	}

	public void setEntity(EntityDetails entity) {
		this.entity = entity;
	}

	public boolean isAssocitaionIsDeleted() {
		return associtaionIsDeleted;
	}

	public void setAssocitaionIsDeleted(boolean associtaionIsDeleted) {
		this.associtaionIsDeleted = associtaionIsDeleted;
	}

	public double getAssociationId() {
		return associationId;
	}

	public void setAssociationId(double associationId) {
		this.associationId = associationId;
	}

	public String getAssociationName() {
		return associationName;
	}

	public void setAssociationName(String associationName) {
		this.associationName = associationName;
	}
	
	
	
}
