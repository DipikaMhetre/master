package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.BatchSchemeImpl;
import com.purpleaid.Impl.GoodsReceiptImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.BatchScheme_IF;
import com.purpleaid.interfaces.GoodsReceipt_IF;


public class Bl_BatchScheme {
	public String bl_getBatchScheme(PurpleaidRequest reqObj) throws Exception {
		BatchScheme_IF interfaceRef = null;
		GoodsReceipt_IF	interfaceGoodReceipt = null;
		
		String result = null;
		try {
			interfaceRef = new BatchSchemeImpl();
			interfaceGoodReceipt = new GoodsReceiptImpl();
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getBatchScheme(reqObj);
						break;
			
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"batchSchemeList\":"+interfaceRef.bl_getBatchScheme(reqObj)+",\"grHistoryList\":"+interfaceGoodReceipt.bl_getGoodsReceiptBatchSchemeList( reqObj)+"}";
									break;
							
							/*case 2: result="{\"goodsReceiptAllProductList\":"+interfaceRef.bl_getGoodsReceiptAllProductList(reqObj.getCompanyId())+"}";	
									break;	

							case 3: result=interfaceRef.bl_getBatchProduct(reqObj.getProductId());
									break;
									
							case 4:	result="{\"batchList\":"+interfaceRef.bl_getAllBatchList(reqObj.getProductId())+"}";
									break;
									
						 case 5: result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
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
	
	public String bl_setBatchScheme(PurpleaidRequest reqObj) throws Exception {
		BatchScheme_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef = new BatchSchemeImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setBatchScheme(reqObj);	
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
