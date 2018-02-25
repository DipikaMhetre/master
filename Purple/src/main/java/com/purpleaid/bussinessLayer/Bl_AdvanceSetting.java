package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AdvanceSettingImpl;
import com.purpleaid.Impl.SysPermissionRoleImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.AdvanceSetting_IF;
import com.purpleaid.interfaces.SysPermissionRole_IF;


public class Bl_AdvanceSetting {

	public String bl_getAdvanceSetting(PurpleaidRequest reqObj) throws Exception{
		AdvanceSetting_IF interfaceRef = null;
		SysPermissionRole_IF sysInterfaceRef = null;  
		String result = null;
		try {
			interfaceRef =  new AdvanceSettingImpl();
			sysInterfaceRef = new SysPermissionRoleImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				
			/*case 1: result = interfaceRef.bl_getLogin(reqObj);
						     break;*/
			
			case 2: switch(reqObj.getListType()){
			
			case 1: result="{\"rolePermissionList\":"+interfaceRef.bl_getAllRolePermissionList(reqObj)+",\"permissionRoleList\":"+interfaceRef.bl_getAllpermissionRoleList(reqObj)+"}" ;
			                 break;
					
			case 2: result="{\"userNameList\":"+sysInterfaceRef.bl_getUserNameList(reqObj)+"}";
							break;			
		
							/*case 3:result="{\"cpoByProductList\":"+interfaceRef.bl_getAllcpoByProductList(reqObj)+"}";
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
	
	
	
	public String bl_setAdvanceSetting(PurpleaidRequest reqObj) throws Exception {
		AdvanceSetting_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new AdvanceSettingImpl();
			
			switch(reqObj.getEntity()){
				
			case 1 : result = interfaceRef.bl_setAdvanceSetting(reqObj);
				         break;
				         /* case 2 : result = interfaceRef.bl_LogoutActiveUsers(reqObj);
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
