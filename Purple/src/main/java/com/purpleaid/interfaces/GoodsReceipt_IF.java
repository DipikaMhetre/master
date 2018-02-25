package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface GoodsReceipt_IF {
	String bl_setGoodsReceipt(PurpleaidRequest reqObj) throws Exception;

	String bl_getGoodsReceipt(PurpleaidRequest reqObj) throws Exception;

	String bl_getGoodsReceiptAllProductList(PurpleaidRequest reqObj)throws Exception;

	String bl_getGoodsReceiptBatchSchemeList(PurpleaidRequest reqObj)throws Exception;

	String bl_getGoodReceiptRegister(PurpleaidRequest reqObj) throws Exception;
	
}
