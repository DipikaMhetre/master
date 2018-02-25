package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.BatchImpl;
import com.purpleaid.Impl.ProductImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Batch_IF;
import com.purpleaid.interfaces.Product_IF;




public class Bl_Batch {
	public String bl_getBatch(PurpleaidRequest reqObj) throws Exception {
		Batch_IF interfaceRef = null;
		Product_IF interfaceProductRef = null;
		
		String result = null;
		try {
			interfaceRef = new BatchImpl();
			interfaceProductRef = new ProductImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getBatchProduct(reqObj);
						break;
			
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"batchList\":"+interfaceRef.bl_getAllBatchListByCompany(reqObj)+"}";
									break;
							
							case 2: result="{\"productList\":"+interfaceProductRef.bl_getAllStockProductListByCompany(reqObj)+"}";	
									break;	

							case 3: result=interfaceRef.bl_getBatchProduct(reqObj);
									break;
							
							case 4: result="{\"batchList\":"+interfaceRef.bl_getAllBatchListByCompany(reqObj)+",\"productList\":"+interfaceProductRef.bl_getAllStockProductListByCompany(reqObj)+"}";
					         break;
					         
						 /*case 5: result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
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

	public String bl_setBatch(PurpleaidRequest reqObj) throws Exception {
		Batch_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef = new BatchImpl();
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_setBatch(reqObj);	
					    break;
					   	    
					
				case 2:	result = interfaceRef.bl_setBatchTransfer(reqObj);
					    break;
					    
				case 3: switch(reqObj.getListType()){ 		
				
					case 1: interfaceRef.bl_setBatchList(reqObj);
							break;
				}	  
				
				case 4 : result = interfaceRef.bl_setBatchStockAdjustment(reqObj);
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
