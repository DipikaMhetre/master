package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Customer_IF {
	public String bl_getCustomer(double id);
	public String bl_getAllCustomerList(PurpleaidRequest reqObj) throws Exception;
	public String bl_getAllCustomerListByArea(double areaId);
	public String bl_getAllCustomerListBySalesman(double salesmanId);
	public String bl_setCustomer(PurpleaidRequest requestData) throws Exception;
	public String bl_setCustomerList(PurpleaidRequest requestData)throws Exception;
	public String bl_getAllCustomerForRR(PurpleaidRequest reqObj)throws Exception;
	public String bl_getAllCustomerListForCN(PurpleaidRequest reqObj) throws Exception;
	
}