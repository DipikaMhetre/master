package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.BatchImpl;
import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.CustomerImpl;
import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.ProductImpl;
import com.purpleaid.Impl.ReturnImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Batch_IF;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Customer_IF;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.Product_IF;
import com.purpleaid.interfaces.Return_IF;

public class Bl_Return {

	public String bl_getReturn(PurpleaidRequest reqObj) throws Exception{
		Return_IF interfaceRef = null;
		Product_IF interfaceProductRef = null;
		Batch_IF interfaceBatchRef = null;
		Customer_IF interfaceCustref = null;
		People_IF interfacePeopleRef = null;
		Company_IF interfaceCompanyRef = null;
		
		interfaceRef =  new ReturnImpl();
		interfaceProductRef = new ProductImpl();
		interfaceBatchRef = new BatchImpl();
		interfaceCustref = new CustomerImpl();
		interfacePeopleRef = new PeopleImpl();
		interfaceCompanyRef = new CompanyImpl();
		
		
		String result = null;
		try {
			switch(reqObj.getEntity()){

				case 1:	result = interfaceRef.bl_getReturnRegisterDetails(reqObj);	
								 break;
								
				case 2:	result = interfaceRef.bl_getCompanyClaimDetails(reqObj);	
								 break;				
							 
				
				case 3: switch(reqObj.getListType()){

						case 1: result = interfaceRef.bl_getAllReturnRegisterList(reqObj);
				         				 break;
							 
						case 2: result = interfaceRef.bl_getAllCompanyClaimList(reqObj);	
										 break; 
								
						case 3: result = "{\"customerList\":"+interfaceCustref.bl_getAllCustomerForRR(reqObj)+",\"createdByNameList\":"+interfacePeopleRef.bl_getAllCreatedByNameListForRR(reqObj)+"}";
     									 break;
     									  
						case 4: result = interfaceProductRef.getAllProductList(reqObj);
						  				 break;		
						  				 
						case 5: result = interfaceBatchRef.bl_getBatchProductForRR(reqObj);
										 break;	  	
										 
						case 6: result = "{\"customerList\":"+interfaceCustref.bl_getAllCustomerForRR(reqObj)+",\"productList\":"+interfaceProductRef.getAllProductList(reqObj)+",\"selfProductList\":"+interfaceProductRef.getAllProductListForSelf(reqObj)+",\"nearExpiryProductList\":"+interfaceProductRef.bl_getNearExpiryProductForRR(reqObj)+",\"selfProductBatchList\":"+interfaceProductRef.getAllProductBatchListForSelf(reqObj)+"}";
										 break;	
										
						case 7: result = "{\"companyListEmbeddedSupplierList\":"+interfaceCompanyRef.bl_getAllCompanyListEmbeddedSupplierList(reqObj)+",\"createdByNameList\":"+interfacePeopleRef.bl_getAllCreatedByNameListForRR(reqObj)+"}";
										break;	
										
						case 8: result = interfaceProductRef.getAllProductListForSelf(reqObj);
										 break;					
										
						case 9: result = interfaceBatchRef.bl_getBatchActiveProductForRR(reqObj);
										 break;	
										
				}

				
				default: System.out.println("Default");
				         break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		return result;
	}
	
	public String bl_setReturn(PurpleaidRequest reqObj) throws Exception {
		Return_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new ReturnImpl();
			
			switch(reqObj.getEntity()){
				
			case 1: result = interfaceRef.bl_setCompanyClaim(reqObj);	
		  					 break;
		  					 
			case 2: result = interfaceRef.bl_setReturnRegister(reqObj);	
				             break;
				             
			case 3: result = interfaceRef.bl_setRaisedCompanyClaim(reqObj);	
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
