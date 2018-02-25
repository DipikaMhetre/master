package com.purpleaid.beans;

public class Reason {
	
	double reasonID;
	
	double recid;
	
	String reasonReason;
	
	boolean reasonSystemValueFlag;
	
	boolean reasonReturnFlag;
	
	boolean reasonCreditNoteFlag;
	
	boolean reasonDebitNoteFlag;
	
	boolean reasonFlagActive;
	
	int status;
	
	String outputStatus;
	
	int action;


	public int getAction() {
		return action;
	}


	public void setAction(int action) {
		this.action = action;
	}


	public int getStatus() {
		return status;
	}


	public void setStatus(int status) {
		this.status = status;
	}


	public double getReasonID() {
		return reasonID;
	}


	public void setReasonID(double reasonID) {
		this.reasonID = reasonID;
	}


	public double getRecid() {
		return recid;
	}


	public void setRecid(double recid) {
		this.recid = recid;
	}


	public String getReasonReason() {
		return reasonReason;
	}


	public void setReasonReason(String reasonReason) {
		this.reasonReason = reasonReason;
	}


	public boolean isReasonSystemValueFlag() {
		return reasonSystemValueFlag;
	}


	public void setReasonSystemValueFlag(boolean reasonSystemValueFlag) {
		this.reasonSystemValueFlag = reasonSystemValueFlag;
	}


	public boolean isReasonReturnFlag() {
		return reasonReturnFlag;
	}


	public void setReasonReturnFlag(boolean reasonReturnFlag) {
		this.reasonReturnFlag = reasonReturnFlag;
	}


	public boolean isReasonCreditNoteFlag() {
		return reasonCreditNoteFlag;
	}


	public void setReasonCreditNoteFlag(boolean reasonCreditNoteFlag) {
		this.reasonCreditNoteFlag = reasonCreditNoteFlag;
	}


	public boolean isReasonDebitNoteFlag() {
		return reasonDebitNoteFlag;
	}


	public void setReasonDebitNoteFlag(boolean reasonDebitNoteFlag) {
		this.reasonDebitNoteFlag = reasonDebitNoteFlag;
	}


	public boolean isReasonFlagActive() {
		return reasonFlagActive;
	}


	public void setReasonFlagActive(boolean reasonFlagActive) {
		this.reasonFlagActive = reasonFlagActive;
	}


	public String getOutputStatus() {
		return outputStatus;
	}


	public void setOutputStatus(String outputStatus) {
		this.outputStatus = outputStatus;
	}


	
	

}
