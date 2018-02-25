package com.purpleaid.beans;

public class RelatedNames {

	double relatedNamesId;
	
	double relatedNamesTypeId;
	
	String relatedNames;
	
	String relatedNamesTypeDescription;
	
	EntityDetails entity;

	double relatedNamesCDID;
	
	boolean relatedNamesIsDeleted;
	
	
	
	
	public boolean isRelatedNamesIsDeleted() {
		return relatedNamesIsDeleted;
	}

	public void setRelatedNamesIsDeleted(boolean relatedNamesIsDeleted) {
		this.relatedNamesIsDeleted = relatedNamesIsDeleted;
	}

	public double getRelatedNamesCDID() {
		return relatedNamesCDID;
	}

	public void setRelatedNamesCDID(double relatedNamesCDID) {
		this.relatedNamesCDID = relatedNamesCDID;
	}

	public EntityDetails getEntity() {
		return entity;
	}

	public void setEntity(EntityDetails entity) {
		this.entity = entity;
	}

	public String getRelatedNamesTypeDescription() {
		return relatedNamesTypeDescription;
	}

	public void setRelatedNamesTypeDescription(String relatedNamesTypeDescription) {
		this.relatedNamesTypeDescription = relatedNamesTypeDescription;
	}

	public double getRelatedNamesId() {
		return relatedNamesId;
	}

	public void setRelatedNamesId(double relatedNamesId) {
		this.relatedNamesId = relatedNamesId;
	}

	public double getRelatedNamesTypeId() {
		return relatedNamesTypeId;
	}

	public void setRelatedNamesTypeId(double relatedNamesTypeId) {
		this.relatedNamesTypeId = relatedNamesTypeId;
	}

	public String getRelatedNames() {
		return relatedNames;
	}

	public void setRelatedNames(String relatedNames) {
		this.relatedNames = relatedNames;
	}
	
	
	
	
}
