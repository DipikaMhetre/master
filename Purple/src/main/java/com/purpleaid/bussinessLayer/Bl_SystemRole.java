package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.SysPermissionRoleImpl;
import com.purpleaid.Impl.SystemRoleImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.SysPermissionRole_IF;
import com.purpleaid.interfaces.SystemRole_IF;

public class Bl_SystemRole {

	public String bl_getSystemRole(PurpleaidRequest reqObj) throws Exception{
		SystemRole_IF interfaceRef = null;
	    SysPermissionRole_IF  interfaceSysPermissionRole =  null;
		
		String result = null;
		try {
			interfaceRef =  new SystemRoleImpl();
		   interfaceSysPermissionRole = new SysPermissionRoleImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				
			/*case 1: result = interfaceRef.bl_getLogin(reqObj);
						     break;*/
			
			case 2: switch(reqObj.getListType()){
			
					case 1: result="{\"roleList\":"+interfaceRef.bl_getAllRoleList(reqObj)+",\"permissionList\":"+interfaceRef.bl_getAllpermissionList(reqObj)+",\"userList\":"+interfaceSysPermissionRole.bl_getAllUserList(reqObj)+",\"contactTypeList\":"+interfaceSysPermissionRole.bl_getContactTypeList(reqObj)+",\"labelList\":"+interfaceSysPermissionRole.bl_getLabelList(reqObj)+",\"userNameList\":"+interfaceSysPermissionRole.bl_getUserNameList(reqObj)+",\"userIDList\":"+interfaceSysPermissionRole.bl_getUserIDList(reqObj)+"}" ;
			                 break;
					
					/*case 2: result="{\"companyPurchaseOrderList\":"+interfaceRef.bl_getCompanyPurchaseOrderList(reqObj)+"}";
							break;			
		
					case 3:result="{\"cpoByProductList\":"+interfaceRef.bl_getAllcpoByProductList(reqObj)+"}";
							break;
						
							
					case 4:result = productInterface.getAllProductListByCompanySupplier(reqObj);//ProductList for divisionId
					break;
					*/
									
			};
			break;							
				
			
			default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}
	
	
	
	public String bl_setSystemRole(PurpleaidRequest reqObj) throws Exception {
		SystemRole_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new SystemRoleImpl();
			
			switch(reqObj.getEntity()){
				
				case 1 : result = interfaceRef.bl_setSystemRole(reqObj);
				         break;
				         /*case 2 : result = interfaceRef.bl_LogoutActiveUsers(reqObj);
		                 break;*/
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
	
	
	
}
