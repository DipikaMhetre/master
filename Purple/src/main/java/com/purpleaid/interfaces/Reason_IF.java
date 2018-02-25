package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Reason_IF {

	
	public String bl_getAllReason(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getReasonList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setReason(PurpleaidRequest reqObj) throws Exception;

	public String bl_getReasonListForCreditNote(PurpleaidRequest reqObj)throws Exception;
}
