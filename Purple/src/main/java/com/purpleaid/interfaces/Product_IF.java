package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Product_IF {

	String bl_setProduct(PurpleaidRequest requestData) throws Exception;
	String getAllProductListByCompanySupplier(PurpleaidRequest requestData) throws Exception;
	String getAllProductListByCompany(PurpleaidRequest requestData)throws Exception;
	String bl_getAllStockProductListByCompany(PurpleaidRequest requestData)throws Exception;
	String bl_setReassignProduct(PurpleaidRequest requestData) throws Exception;
	public String bl_setProductListActiveLock(PurpleaidRequest requestData)throws Exception;
	String getAllProductList(PurpleaidRequest requestData)throws Exception;
	String getAllProductListForSelf(PurpleaidRequest requestData)throws Exception;
	String bl_getNearExpiryProductForRR(PurpleaidRequest requestData)throws Exception;
	String getAllProductBatchListForSelf(PurpleaidRequest requestData)throws Exception;
}
