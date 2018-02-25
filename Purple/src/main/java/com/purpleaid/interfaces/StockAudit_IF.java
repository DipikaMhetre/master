package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface StockAudit_IF {
	
	public String bl_getAllStockAudit (PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getAllCompanyDivisionList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getProductTypeList(PurpleaidRequest reqObj) throws Exception;

	public String bl_getAllProductListForAudit(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setAllStockAudit(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setAllSalelock(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getStockAuditDetails(PurpleaidRequest reqObj) throws Exception;
	
	
}
