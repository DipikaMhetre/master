package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Region_IF {
	public String bl_getRegion(double id);
	public String bl_getAllRegionList(PurpleaidRequest reqObj);
	//public String bl_getAllCustomerListByArea(double areaId);
	//public String bl_getAllCustomerListBySalesman(double salesmanId);
	public String bl_setRegion(PurpleaidRequest reqObj) throws Exception;
}
