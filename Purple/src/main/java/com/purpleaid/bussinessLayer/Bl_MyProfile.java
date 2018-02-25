package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.PurpleaidACLImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.PurpleaidACL_IF;

public class Bl_MyProfile {
	
public String bl_getMyProfile(PurpleaidRequest reqObj) throws Exception {
		
		People_IF interfaceRef = null;
		PurpleaidACL_IF interfaceRef1 = null;
		interfaceRef = new PeopleImpl();
		interfaceRef1 = new PurpleaidACLImpl();
		
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			case 1:
					break;
					
			case 2: switch (reqObj.getListType()) {
			
					case 1:	//result = interfaceRef.bl_getMyProfileDetails(reqObj);
							//result = interfaceRef.bl_getAllUserRoleList(reqObj);
							//result = interfaceRef1.bl_getLoginHistory(reqObj);
							result="{\"MyProfileDetails\":"+interfaceRef.bl_getMyProfileDetails(reqObj)+",\"UserRolelist\":"+interfaceRef.bl_getAllUserRoleList(reqObj)+",\"LoginHistory\":"+interfaceRef1.bl_getLoginHistory(reqObj,reqObj.getLastID())+"}";
							break;
							
					case 2:	result = interfaceRef.bl_getAllUserRoleList(reqObj);
							break;
							
					case 3: result = interfaceRef1.bl_getLoginHistory(reqObj,reqObj.getLastID());
							break;
			
			}
		
			default:System.out.println("Default");
					break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		
		return result;
		
	}

	public String bl_setMyProfile(PurpleaidRequest reqObj) throws Exception {
		
		People_IF interfaceRef = null;
		//PurpleaidACL_IF interfaceRef1 = null;
		interfaceRef = new PeopleImpl();
		//interfaceRef1 = new PurpleaidACLImpl();
		
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			
			case 1: result = interfaceRef.bl_setMyProfilDetails(reqObj);
					break;
					
			case 2: result = interfaceRef.bl_setUser(reqObj);
					break;
					
			/*case 2: result = interfaceRef.bl_setLoginDetails(reqObj);
					break;
					*/
			/*case 2: switch (reqObj.getListType()) {
			
					case 1:	result = interfaceRef.bl_getMyProfileDetails(reqObj);
							break;
							
					case 2:	result = interfaceRef.bl_getAllUserRoleList(reqObj);
							break;
							
					case 3: result = interfaceRef1.bl_getLoginHistory(reqObj.getEntityId());
							break;
			
			}*/
		
			default:System.out.println("Default");
					break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		
			return result;
	
		}
}
	
