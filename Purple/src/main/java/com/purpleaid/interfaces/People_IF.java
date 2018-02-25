package com.purpleaid.interfaces;



import com.purpleaid.beans.PurpleaidRequest;

public interface People_IF {

	
	String bl_getContactDetails(PurpleaidRequest reqObj,double filterType ,int detailsFilterCount,double maxID)throws Exception;
	
	String bl_getAllCreatedByNameListForRR(PurpleaidRequest reqObj)throws Exception;
	
	String bl_setPeople(PurpleaidRequest reqObj)throws Exception;
	
	String bl_setUser(PurpleaidRequest requestData)throws Exception;

	String bl_getContactNameList(PurpleaidRequest reqObj)throws Exception;

	String bl_setDeletedPeople(PurpleaidRequest reqObj)throws Exception;

	String bl_getAllUserRoleList(PurpleaidRequest reqObj)throws Exception;

	String bl_getAllMasterList(PurpleaidRequest reqObj)throws Exception;

	//String bl_getUserRolePermissionList(PurpleaidRequest reqObj)throws Exception;
	
	//String bl_setUserPermission(PurpleaidRequest requestData)throws Exception;
	
	//String bl_getAllRolePermissionList(PurpleaidRequest reqObj)throws Exception;

	//String bl_setRole(PurpleaidRequest reqObj)throws Exception;

	String bl_getMyProfileDetails(PurpleaidRequest reqObj) throws Exception;

	String bl_setMyProfilDetails(PurpleaidRequest reqObj) throws Exception;

	
}
