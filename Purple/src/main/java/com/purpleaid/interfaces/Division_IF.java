package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Division_IF {
	public String bl_getDivision(double id);
	public String bl_getAllDivisionList(PurpleaidRequest reqObj) throws Exception;
	/*public String bl_getAllCustomerListByArea(double areaId);
	public String bl_getAllCustomerListBySalesman(double salesmanId);*/
	public String bl_setDivision(PurpleaidRequest reqObj) throws Exception;
	public String bl_setDivisionList(PurpleaidRequest requestData) throws Exception;
}
