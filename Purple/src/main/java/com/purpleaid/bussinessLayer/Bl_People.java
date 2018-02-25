package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AdvanceSettingImpl;
import com.purpleaid.Impl.AreaImpl;
import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.RouteImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.AdvanceSetting_IF;
import com.purpleaid.interfaces.Area_IF;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.Route_IF;

public class Bl_People {
	public String bl_getPeople(PurpleaidRequest reqObj) throws Exception{
		People_IF interfaceRef = null;
		Area_IF areaInterface = null;
		Route_IF routeInterface = null;
		AdvanceSetting_IF advInterface = null;
		String result = null;
		try {
			interfaceRef =  new PeopleImpl();
			areaInterface = new AreaImpl();
			routeInterface = new RouteImpl();
			advInterface = new AdvanceSettingImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				case 0: result = "{\"masterDataList\":"+interfaceRef.bl_getAllMasterList(reqObj)+",\"contactList\":"+interfaceRef.bl_getContactDetails(reqObj,reqObj.getFilterType() ,reqObj.getDetailsFilterCount(),reqObj.getLastID())+",\"areaList\":"+areaInterface.bl_getAllAreaList( reqObj)+",\"routeList\":"+routeInterface.bl_getAllRouteList(reqObj)+",\"allContactNameList\":"+interfaceRef.bl_getContactNameList(reqObj)+"}";
						break;
				case 1: switch(reqObj.getListType()){
				
							case 1: result = interfaceRef.bl_getContactDetails(reqObj,reqObj.getFilterType() ,reqObj.getDetailsFilterCount(),reqObj.getLastID());
							        break;
							case 2: result="{\"rolePermissionList\":"+advInterface.bl_getAllRolePermissionList(reqObj)+",\"permissionRoleList\":"+advInterface.bl_getAllpermissionRoleList(reqObj)+"}" ;
			                 break;					
													        
				};
						break;
						
				/*case 3: result = interfaceRef.bl_getAllUserRoleList(reqObj);
						break;	
				case 4: result = interfaceRef.bl_getUserRolePermissionList(reqObj);
						break;
				case 5: result = interfaceRef.bl_getAllRolePermissionList(reqObj); 
				        break;*/
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}

	public String bl_setPeople(PurpleaidRequest reqObj) throws Exception {
		People_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new PeopleImpl();
			
			switch(reqObj.getEntity()){
				case 1: result=interfaceRef.bl_setPeople(reqObj);	
					  	break;
					  	
					  	
				case 2:	result=interfaceRef.bl_setUser(reqObj);	
						break; 
						
				case 3: result = interfaceRef.bl_setDeletedPeople(reqObj);
						break;
				
				/*case 4 :result = interfaceRef.bl_setUserPermission(reqObj);
						break;
				
				case 5 :result = interfaceRef.bl_setRole(reqObj);
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
