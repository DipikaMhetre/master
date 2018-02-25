package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Receipt_IF {
	
	public String bl_getReceiptList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getSalesmanList(PurpleaidRequest reqObj) throws Exception;
	
	//public String bl_getReceiptList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setReceipt(PurpleaidRequest reqObj) throws Exception;

}
