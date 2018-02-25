package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface VoucherType_IF {
	
	public String bl_getVoucherTypeList(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_getNarrationlist(PurpleaidRequest reqObj) throws Exception;
	
	public String bl_setVoucherType(PurpleaidRequest reqObj) throws Exception;

}
