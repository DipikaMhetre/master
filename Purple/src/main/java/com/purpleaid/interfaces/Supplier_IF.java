package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Supplier_IF {

	String bl_getAllSupplierList(PurpleaidRequest reqObj) throws Exception;

	String bl_setSupplier(PurpleaidRequest requestData) throws Exception;

	String bl_setSupplierList(PurpleaidRequest requestData)throws Exception;

	String bl_getAllActiveSupplierList(PurpleaidRequest reqObj) throws Exception;


}
