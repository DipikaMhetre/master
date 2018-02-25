package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.SupplierImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Supplier_IF;

public class Bl_Supplier {

	public String bl_getSupplier(PurpleaidRequest reqObj) throws Exception {
		Supplier_IF interfaceRef = null;
		Company_IF companyInterface = null;
		String result = null;
		try {
			interfaceRef =  new SupplierImpl();
			companyInterface = new CompanyImpl();
			switch(reqObj.getEntity()){

				case 1:	/*result=interfaceRef.bl_getArea(0);*/
						break;

				case 2: switch(reqObj.getListType()){

						case 1: result=  // interfaceRef.bl_getAllSupplierList();
						
						"{\"supplierList\":"+interfaceRef.bl_getAllSupplierList(reqObj)+",\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+"}";
						break;
								
						
						
				
						case 2:	result="{\"supplierList\":"+interfaceRef.bl_getAllActiveSupplierList(reqObj)+",\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+"}";
								break;

				/*case 3:interfaceRef.bl_getAllRouteList();	
								break;	*/
				}

				default:;
				break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}

	public String bl_setSupplier(PurpleaidRequest reqObj) throws Exception {
		Supplier_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new SupplierImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setSupplier(reqObj);	
					break;
				case 2: switch(reqObj.getListType()){ 		
				
							case 1: interfaceRef.bl_setSupplierList(reqObj);
			
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
