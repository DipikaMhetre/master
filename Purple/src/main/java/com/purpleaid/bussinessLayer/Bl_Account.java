package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AccountImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Account_IF;


public class Bl_Account {
	public String bl_getAccount(PurpleaidRequest reqObj) throws Exception{
		Account_IF interfaceRef = null;
		
		
		String result = null;
		try {
			interfaceRef =  new AccountImpl();
			
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getAccount(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result=interfaceRef.bl_getAllAccountList(reqObj);	
									break;
							
							/*case 2: result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
									break;	
									
							case 3: result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"divisionList\":"+divisionInterface.bl_getAllDivisionList()+"}";
									break;
							
							case 4:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+"}";
					         break;
					         
					         
					       case 5:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"mrList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
					         break;*/
							       
							
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

	public String bl_setAccount(PurpleaidRequest reqObj) throws Exception {
		Account_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new AccountImpl();
			
			switch(reqObj.getEntity()){
				case 1: result=interfaceRef.bl_setAccount(reqObj.getRequestData());	
					  	break;
				/*case 2: switch(reqObj.getListType()){ 		
						
							case 1: interfaceRef.bl_setCompany2List(reqObj.getRequestData());
						
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
