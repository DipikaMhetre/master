package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.PurpleaidACLImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.PurpleaidACL_IF;


public class Bl_PurpleaidACL {

	public String bl_getPurpleaidACL(PurpleaidRequest reqObj) throws Exception{
		PurpleaidACL_IF interfaceRef = null;
	
		
		String result = null;
		try {
			interfaceRef =  new PurpleaidACLImpl();
		
			result = null;
			
			switch(reqObj.getEntity()){
				
			case 1: result = interfaceRef.bl_getLogin(reqObj);
						     break;
			
			case 2: result = interfaceRef.bl_getViewSwitcher(reqObj.getUserId(),reqObj.getToken(),reqObj.getPageId());
						     break;								
				
			
			default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}
	
	
	
	public String bl_setPurpleaidACL(PurpleaidRequest reqObj) throws Exception {
		People_IF interfaceRef = null;
		PurpleaidACL_IF aclInterfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new PeopleImpl();
			aclInterfaceRef = new PurpleaidACLImpl();
			
			switch(reqObj.getEntity()){
				case 1: result=interfaceRef.bl_setPeople(reqObj);	
					  	break;
					  	
					  	
				case 2:	result=interfaceRef.bl_setUser(reqObj);	
						break; 
						
				case 3: result = interfaceRef.bl_setDeletedPeople(reqObj);
						break;
						
				case 4  : result = aclInterfaceRef.bl_Logout(reqObj);
				break;	
				
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
	
	
}
