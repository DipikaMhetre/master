package com.purpleaid.interfaces;

import com.purpleaid.beans.PurpleaidRequest;

public interface AdvanceSetting_IF {

	String bl_getAllRolePermissionList(PurpleaidRequest reqObj) throws Exception;

	String bl_getAllpermissionRoleList(PurpleaidRequest reqObj)throws Exception;

	String bl_setAdvanceSetting(PurpleaidRequest reqObj)throws Exception;

}
