package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface CreditNote_IF {

	String bl_getCreditNoteList(PurpleaidRequest reqObj)throws Exception;

	String bl_setDirectCreditNote(PurpleaidRequest reqObj)throws Exception;

	String bl_getProductCreditNote(PurpleaidRequest reqObj)throws Exception;

	String bl_getCreditNoteProductSalesHistory(PurpleaidRequest reqObj)throws Exception;

	String bl_setProductCreditNote(PurpleaidRequest reqObj)throws Exception;

	String bl_getAdditionalDiscCreditNote(PurpleaidRequest reqObj)throws Exception;

	String bl_setAdditionalDiscountCreditNote(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getRateDiffrenceCreditNote(PurpleaidRequest reqObj)throws Exception;
	
	String bl_setRateDiffrenceCreditNote(PurpleaidRequest reqObj)throws Exception;

	String bl_getCreditNoteConsumptionDetails(PurpleaidRequest reqObj)throws Exception;
	
	
	

}
