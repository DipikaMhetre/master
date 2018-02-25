package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface TaxCode_IF {
	public String bl_getTaxCode(double id);
	public String bl_getAllTaxCodeList(PurpleaidRequest reqObj) throws Exception;
	/*public String bl_getAllCustomerListByArea(double areaId);
	public String bl_getAllCustomerListBySalesman(double salesmanId);*/
	public String bl_setTaxCode(PurpleaidRequest reqObj) throws Exception;
	
}
