package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;



public interface Batch_IF {
	String bl_getBatchProduct(PurpleaidRequest requestData)throws Exception;

	String bl_setBatch(PurpleaidRequest reqObj)throws Exception;

	String bl_setBatchTransfer(PurpleaidRequest requestData)throws Exception;

	String bl_getAllBatchListByCompany(PurpleaidRequest reqObj)throws Exception;

	public String bl_setBatchList(PurpleaidRequest reqObj)throws Exception;

	String bl_getBatchProductForRR(PurpleaidRequest reqObj)throws Exception;

	String bl_setBatchStockAdjustment(PurpleaidRequest requestData)throws Exception;

	String bl_getBatchActiveProductForRR(PurpleaidRequest reqObj)throws Exception;
}
