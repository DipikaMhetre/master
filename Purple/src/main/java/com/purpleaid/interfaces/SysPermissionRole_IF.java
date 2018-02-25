package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface SysPermissionRole_IF {

	String bl_getAllPermissionList(PurpleaidRequest reqObj)throws Exception;

	String bl_getAllUserList(PurpleaidRequest reqObj)throws Exception;

	String bl_setSystemPermission(PurpleaidRequest reqObj)throws Exception;

	String bl_getContactTypeList(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getLabelList(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getUserNameList(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getUserIDList(PurpleaidRequest reqObj)throws Exception;
	
	String bl_getUserRoleManualList(PurpleaidRequest reqObj)throws Exception;
	
	
	
}
