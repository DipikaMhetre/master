package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.DivisionImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Division_IF;


public class Bl_Division {
	
	public String bl_getDivision(PurpleaidRequest reqObj) throws Exception{
		Division_IF interfaceRef = null;
		Company_IF companyInterface = null; 
		String result = null;
		
		try {
			interfaceRef =  new DivisionImpl();
			companyInterface = new CompanyImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getDivision(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result=interfaceRef.bl_getAllDivisionList(reqObj);	
									break;
							
							case 2: result=interfaceRef.bl_getAllDivisionList(reqObj);	
									result=companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj);
									result="{\"divisionList\":"+interfaceRef.bl_getAllDivisionList(reqObj)+",\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+"}";
									break;

							/*case 3:interfaceRef.bl_getAllRouteList();	
							break;	*/
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
	
	public String bl_setDivision(PurpleaidRequest reqObj) throws Exception{
		Division_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new DivisionImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setDivision(reqObj);	
					break;
				case 2: switch(reqObj.getListType()){ 		
				
								case 1: interfaceRef.bl_setDivisionList(reqObj);
			
				}
				default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}
}
