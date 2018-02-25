package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.BatchImpl;
import com.purpleaid.Impl.BatchSchemeImpl;
import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.GoodsReceiptImpl;
import com.purpleaid.Impl.ProductImpl;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.BatchScheme_IF;
import com.purpleaid.interfaces.Batch_IF;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.GoodsReceipt_IF;
import com.purpleaid.interfaces.Product_IF;


public class Bl_StockManager {
	public String bl_getStockManager(PurpleaidRequest reqObj) throws Exception{
		
		BatchScheme_IF batchSchemeInterface = null;
		Batch_IF interfaceBatchRef = null;
		Company_IF interfaceCompanyRef = null;
		Product_IF productInterface = null;
		GoodsReceipt_IF	interfaceGoodReceipt = null;
		
		interfaceBatchRef = new BatchImpl();
		interfaceCompanyRef = new CompanyImpl();
		batchSchemeInterface = new BatchSchemeImpl();
		productInterface = new ProductImpl();
		interfaceGoodReceipt = new GoodsReceiptImpl();
		String result = null;
		
		try {
			switch(reqObj.getEntity()){
	
				case 3: switch(reqObj.getListType()){

						case 1: result = interfaceCompanyRef.bl_getAllCompanyListEnclosesDivisionList( reqObj);
										 break;
							 
						case 2: result="{\"batchList\":"+interfaceBatchRef.bl_getAllBatchListByCompany(reqObj)+",\"productList\":"+productInterface.bl_getAllStockProductListByCompany(reqObj)+"}";
								break;
								
						case 3: result="{\"batchSchemeList\":"+batchSchemeInterface.bl_getBatchScheme(reqObj)+",\"grHistoryList\":"+interfaceGoodReceipt.bl_getGoodsReceiptBatchSchemeList( reqObj)+"}";
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
	
	public String bl_setStockManager(PurpleaidRequest reqObj) throws Exception {
		
		String result = null;
		BatchScheme_IF batchSchemeInterface = null;
		Batch_IF interfaceBatchRef = null;
		Product_IF productInterface = null;
		
		interfaceBatchRef = new BatchImpl();
		batchSchemeInterface = new BatchSchemeImpl();
		productInterface = new ProductImpl();
		
		try {
			
			
			switch(reqObj.getEntity()){
				
			case 1:result = interfaceBatchRef.bl_setBatchTransfer(reqObj);
		           break;
		  					 
			case 2: result = interfaceBatchRef.bl_setBatchStockAdjustment(reqObj);
			        break;
				             
			case 3: result=interfaceBatchRef.bl_setBatch(reqObj);	
		            break;
		  					 
		            
			case 4 :result = productInterface.bl_setReassignProduct(reqObj);
	 		        break;
	 		        
			case 5 : result = batchSchemeInterface.bl_setBatchScheme(reqObj);	
			         break;
			
			case 6 : result = productInterface.bl_setProductListActiveLock(reqObj);	
	         		  break;       
	         		  
	         		  
			case 7: result = interfaceBatchRef.bl_setBatchList(reqObj);
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
