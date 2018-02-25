package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.DivisionImpl;
import com.purpleaid.Impl.MRImpl;
import com.purpleaid.Impl.SupplierImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Division_IF;
import com.purpleaid.interfaces.MR_IF;
import com.purpleaid.interfaces.Supplier_IF;

public class Bl_Company2 {


	public String bl_getCompany2(PurpleaidRequest reqObj) throws Exception{
		Company_IF interfaceRef = null;
		Supplier_IF supplierInterface = null;
		Division_IF divisionInterface = null;
		MR_IF MRInterface  = null;
		
		
		
		
		String result = null;
		try {
			interfaceRef =  new CompanyImpl();
			supplierInterface = new SupplierImpl();
			divisionInterface = new DivisionImpl();
			MRInterface = new MRImpl();
			result = null;
						
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getCompany2(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result=interfaceRef.bl_getAllCompanyList(reqObj);	
									break;
							
							case 2: result = "{\"companyList\":"+interfaceRef.bl_getAllCompanyList(reqObj)+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList(reqObj)+"}";
									break;	
									
							case 3: result="{\"companyList\":"+interfaceRef.bl_getAllActiveNonActiveCompanyList(reqObj)+",\"divisionList\":"+divisionInterface.bl_getAllDivisionList(reqObj)+"}";
									break;
							
							/*case 4:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+"}";
					         break;
					        */ 
					         
					       case 5:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList( reqObj)+",\"mrList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList(reqObj)+"}";
					         break;
					         
					         
					       case 6:result = interfaceRef.bl_getAllCompanyListEmbeddedSupplierList(reqObj);	
											break;
							       
							
						};
						break;
						
				case 3 : switch (reqObj.getListType()){
					
							case 3: result = interfaceRef.bl_getAllCompanyListEnclosesDivisionList( reqObj);
									break;
				
						}
			    
				default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}

	public String bl_setCompany2(PurpleaidRequest reqObj) throws Exception {
		Company_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new CompanyImpl();
			
			switch(reqObj.getEntity()){
				case 1: result=interfaceRef.bl_setCompany2(reqObj);	
					  	break;
				case 2: switch(reqObj.getListType()){ 		
						
							case 1: interfaceRef.bl_setCompany2List(reqObj);
						
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
