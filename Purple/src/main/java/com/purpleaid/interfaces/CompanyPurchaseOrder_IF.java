package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface CompanyPurchaseOrder_IF {

	String bl_setCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception;

	String bl_getCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception;

	String bl_getCompanyPurchaseOrderList(PurpleaidRequest reqObj )throws Exception;

	String bl_getAllcpoByProductList(PurpleaidRequest reqObj)throws Exception;

	String bl_getPurchaseOrderRegister(PurpleaidRequest reqObj)
			throws Exception;
	
	
}
