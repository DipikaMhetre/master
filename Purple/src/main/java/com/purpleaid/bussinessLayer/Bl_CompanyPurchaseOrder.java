package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.CompanyPurchaseOrderImpl;
import com.purpleaid.Impl.MRImpl;
import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.ProductImpl;
import com.purpleaid.Impl.SupplierImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.CompanyPurchaseOrder_IF;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.MR_IF;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.Product_IF;
import com.purpleaid.interfaces.Supplier_IF;


public class Bl_CompanyPurchaseOrder {
	
	public String bl_getCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception {
		CompanyPurchaseOrder_IF interfaceRef = null;
		Company_IF companyInterface = null;
		Product_IF productInterface = null;
		Supplier_IF supplierInterface = null;
		People_IF interfacePeopleRef = null;
	
		MR_IF MRInterface  = null;
		String result = null;
		try {
			interfaceRef = new CompanyPurchaseOrderImpl();
			companyInterface = new CompanyImpl();
			productInterface = new ProductImpl();
			supplierInterface = new SupplierImpl();
			interfacePeopleRef = new PeopleImpl();
			
			MRInterface = new MRImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getCompanyPurchaseOrder(reqObj);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"companyList\":"+companyInterface.bl_getAllCompanyList( reqObj)+",\"mrList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList(reqObj)+"}";
					                 break;
							
							case 2: result="{\"companyPurchaseOrderList\":"+interfaceRef.bl_getCompanyPurchaseOrderList(reqObj)+"}";
									break;			

							case 3:result="{\"cpoByProductList\":"+interfaceRef.bl_getAllcpoByProductList(reqObj)+"}";
									break;
								
									
							case 4:result = productInterface.getAllProductListByCompanySupplier(reqObj);//ProductList for divisionId
							break;
									
							case 5: result="{\"PurchaseOrderRegisterList\":"+interfaceRef.bl_getPurchaseOrderRegister(reqObj)+",\"companyList\":"+companyInterface.bl_getAllCompanyList( reqObj)+",\"mrList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList(reqObj)+",\"createdByNameList\":"+interfacePeopleRef.bl_getAllCreatedByNameListForRR(reqObj)+"}";
					         break;		
							/*case 5:result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
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

	public String bl_setCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception {
		CompanyPurchaseOrder_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new CompanyPurchaseOrderImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setCompanyPurchaseOrder(reqObj);	
					break;
						
			    default:;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}

}
