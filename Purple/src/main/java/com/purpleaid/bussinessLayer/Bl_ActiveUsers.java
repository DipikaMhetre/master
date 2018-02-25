package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.ActiveUsersImpl;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.ActiveUsers_IF;



public class Bl_ActiveUsers {
	public String bl_getActiveUsers(PurpleaidRequest reqObj) throws Exception {
		ActiveUsers_IF interfaceRef = null;

		
		String result = null;
		try {
			interfaceRef = new ActiveUsersImpl();
		
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	
						break;
			
				case 2: switch(reqObj.getListType()){
				
							case 1: result=interfaceRef.bl_getAllActiveUsersList(reqObj);
									break;
									
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

	public String bl_setActiveUsers(PurpleaidRequest reqObj) throws Exception {
		ActiveUsers_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef = new ActiveUsersImpl();
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_deleteActiveUsers(reqObj);	
					    break;
					   	    
					
			/*	case 2:	result = interfaceRef.bl_setBatchTransfer(reqObj);
					    break;
					    
				  
				
				case 4 : result = interfaceRef.bl_setBatchStockAdjustment(reqObj);
								 break;*/
			    default:;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
}
