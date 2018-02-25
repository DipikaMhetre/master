package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Content_IF {
	public String bl_getContent(double id);
	public String bl_getAllContentList(PurpleaidRequest reqObj) throws Exception;
	/*public String bl_getAllCustomerListByArea(double areaId);
	public String bl_getAllCustomerListBySalesman(double salesmanId);*/
	public String bl_setContent(PurpleaidRequest reqObj) throws Exception;
	//public String bl_setDivisionList(String requestData) throws Exception;
	public String bl_getAllContentTypeList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getContentList(PurpleaidRequest reqObj) throws Exception;
}
