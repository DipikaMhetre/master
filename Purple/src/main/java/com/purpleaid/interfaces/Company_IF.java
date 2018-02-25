package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Company_IF {

	public String bl_getCompany2(double id);
	String bl_setCompany2(PurpleaidRequest reqObj) throws Exception;
	String bl_getAllCompanyList(PurpleaidRequest reqObj) throws Exception;
	public String bl_setCompany2List(PurpleaidRequest requestData)throws Exception;
	public String bl_getAllCompanyListEnclosesDivisionList(PurpleaidRequest reqObj)throws Exception;
	String bl_getAllActiveNonActiveCompanyList(PurpleaidRequest reqObj) throws Exception;
	String bl_getAllCompanyListEmbeddedSupplierList(PurpleaidRequest reqObj) throws Exception;
}
