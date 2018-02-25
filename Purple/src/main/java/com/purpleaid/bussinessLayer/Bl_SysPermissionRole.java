package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.SysPermissionRoleImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.SysPermissionRole_IF;



public class Bl_SysPermissionRole {

	public String bl_getSysPermissionRole(PurpleaidRequest reqObj) throws Exception{
		SysPermissionRole_IF interfaceRef = null;
		
		
		String result = null;
		try {
			interfaceRef =  new SysPermissionRoleImpl();
			
			result = null;
						
			switch(reqObj.getEntity()){
				/*case 1:	result=interfaceRef.bl_getCompany2(0);	
						break;*/
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"userList\":"+interfaceRef.bl_getAllUserList(reqObj)+",\"permissionList\":"+interfaceRef.bl_getAllPermissionList(reqObj)+",\"contactTypeList\":"+interfaceRef.bl_getContactTypeList(reqObj)+",\"labelList\":"+interfaceRef.bl_getLabelList(reqObj)+",\"userNameList\":"+interfaceRef.bl_getUserNameList(reqObj)+",\"userIDList\":"+interfaceRef.bl_getUserIDList(reqObj)+"}";
									break;
								
								
							/*result= interfaceRef.bl_getAllPermissionList(reqObj);	
								break;*/
							
							case 2: result = interfaceRef.bl_getAllUserList(reqObj);
									break;	
									
							case 3: result="{\"userList\":"+interfaceRef.bl_getAllUserList(reqObj)+",\"permissionList\":"+interfaceRef.bl_getAllPermissionList(reqObj)+",\"contactTypeList\":"+interfaceRef.bl_getContactTypeList(reqObj)+",\"labelList\":"+interfaceRef.bl_getLabelList(reqObj)+",\"uaerNameList\":"+interfaceRef.bl_getUserNameList(reqObj)+",\"userIDList\":"+interfaceRef.bl_getUserIDList(reqObj)+"}";
									break;
							
									/*case 4:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+"}";
					         break;
					         
					         
					       case 5:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList( reqObj)+",\"mrList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList(reqObj)+"}";
					         break;
					         
					         
					       case 6:result = interfaceRef.bl_getAllCompanyListEmbeddedSupplierList(reqObj);	
											break;
							       
							*/
						};
						break;
						
				case 3 : switch (reqObj.getListType()){
					
							/*case 3: result = interfaceRef.bl_getAllCompanyListEnclosesDivisionList( reqObj);
									break;*/
				
						}
			    
				default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}

	public String bl_setSysPermissionRole(PurpleaidRequest reqObj) throws Exception {
		SysPermissionRole_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new SysPermissionRoleImpl();
			
			switch(reqObj.getEntity()){
				case 1: result=interfaceRef.bl_setSystemPermission(reqObj);	
					  	break;
				/*case 2: switch(reqObj.getListType()){ 		
						
							case 1: interfaceRef.bl_setCompany2List(reqObj);
						
				}*/
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
	
	
	
	
}
