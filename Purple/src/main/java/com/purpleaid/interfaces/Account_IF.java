package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface Account_IF {
	String bl_setAccount(String reqObj) throws Exception;

	String bl_getAccount(int i);

	String bl_getAllAccountList(PurpleaidRequest reqObj) throws Exception;

	//String bl_setAreaList(String requestData)throws Exception;
}
