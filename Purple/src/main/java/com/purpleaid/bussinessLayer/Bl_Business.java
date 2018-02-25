package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.BusinessImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Business_IF;

public class Bl_Business {
	
	public String bl_BusinessDetails(PurpleaidRequest reqObj) throws Exception{
		
		Business_IF interfaceref = null;
		interfaceref = new BusinessImpl();
		String result = null;
		
		try{
			interfaceref = new BusinessImpl();
			
			switch (reqObj.getEntity()) {
			
			case 1:	result="{\"BusinessDetails\":"+interfaceref.bl_getBusinessDetails(reqObj)+",\"BusinessLicenceList\":"+interfaceref.bl_getLicenceList(reqObj)+"}";
					//result = interfaceref.bl_getBusinessDetails(reqObj);
					break;
					
			case 2: switch (reqObj.getListType()) {
					
					case 1:result = interfaceref.bl_getLicenceList(reqObj);
							break;
					
					case 2:
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

	public String bl_setBusinessDetails(PurpleaidRequest reqObj) throws Exception {
		
		Business_IF interfaceref = null;
		interfaceref = new BusinessImpl();
		String result = null;
		
		try{
			interfaceref = new BusinessImpl();
			
			switch (reqObj.getEntity()) {
			
			case 1:	result = interfaceref.bl_setBusinessDetails(reqObj);
					break;
					
			/*case 2: result = interfaceref.bl_setBusinessLicence(reqObj);
					break;*/
					
			case 3: switch (reqObj.getListType()) {
					
					case 1:
							break;
					
					case 2:
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
}
