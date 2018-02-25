package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface SystemRole_IF {

	String bl_getAllRoleList(PurpleaidRequest reqObj)throws Exception ;
	
	String bl_getAllpermissionList(PurpleaidRequest reqObj)throws Exception ;

	String bl_setSystemRole(PurpleaidRequest reqObj)throws Exception ;

}
