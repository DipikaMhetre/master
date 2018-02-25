package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;


public interface PurpleaidACL_IF {

	
	String bl_getLogin(PurpleaidRequest reqObj )throws Exception;

	

	String bl_getViewSwitcher(String userId, String token, int pageId)throws Exception;



	String bl_Logout(PurpleaidRequest reqObj)throws Exception;



	String bl_LogoutActiveUsers(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getLoginHistory(PurpleaidRequest reqObj,double maxID) throws Exception;
}
