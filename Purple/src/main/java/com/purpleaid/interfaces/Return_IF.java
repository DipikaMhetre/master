package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Return_IF {

	String bl_getReturnRegisterDetails(PurpleaidRequest reqObj)throws Exception;

	String bl_getCompanyClaimDetails(PurpleaidRequest reqObj)throws Exception;

	String bl_getAllCompanyClaimList(PurpleaidRequest reqObj )throws Exception;

	String bl_getAllReturnRegisterList(PurpleaidRequest reqObj)throws Exception;

	String bl_setCompanyClaim(PurpleaidRequest reqObj)throws Exception;
	
	String bl_setReturnRegister(PurpleaidRequest reqObj)throws Exception;

	String bl_setRaisedCompanyClaim(PurpleaidRequest reqObj)throws Exception;
}
