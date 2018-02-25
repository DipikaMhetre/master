package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.CompanyPurchaseOrderImpl;
import com.purpleaid.Impl.GoodsReceiptImpl;
import com.purpleaid.Impl.PeopleImpl;
import com.purpleaid.Impl.SupplierImpl;
import com.purpleaid.Impl.TransporterImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.CompanyPurchaseOrder_IF;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.GoodsReceipt_IF;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.interfaces.Supplier_IF;
import com.purpleaid.interfaces.Transporter_IF;

public class Bl_GoodsReceipt {
	public String bl_getGoodsReceipt(PurpleaidRequest reqObj) throws Exception {
		GoodsReceipt_IF interfaceRef = null;
		Supplier_IF supplierInterface = null;
		CompanyPurchaseOrder_IF companyPOinterface = null;
		Transporter_IF transporterInterface = null;
		People_IF peopleInterface = null;
		Company_IF companyInterface = null;
		String result = null;
		
		try {
			interfaceRef = new GoodsReceiptImpl();
			supplierInterface = new SupplierImpl();
			companyPOinterface = new CompanyPurchaseOrderImpl();
			transporterInterface = new TransporterImpl();
			companyInterface = new CompanyImpl();
			peopleInterface = new PeopleImpl();
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getGoodsReceipt(reqObj);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"supplierList\":"+supplierInterface.bl_getAllActiveSupplierList(reqObj)+",\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+"}";
								break;
							
							case 2: result="{\"goodsReceiptAllProductList\":"+interfaceRef.bl_getGoodsReceiptAllProductList(reqObj)+"}";	
									break;	

							case 3:	result="{\"companyPurchaseOrderList\":"+companyPOinterface.bl_getCompanyPurchaseOrderList(reqObj)+"}";
									break;
								
									
							case 4:	result=transporterInterface.bl_getAllTransporterList(reqObj);	
									break;
									
							case 5:	result="{\"cpoByProductList\":"+companyPOinterface.bl_getAllcpoByProductList(reqObj)+"}";
									break;		
						 
									/*case 5: result="{\"companyList\":"+interfaceRef.bl_getAllCompanyList()+",\"MRList\":"+MRInterface.bl_getAllMRList()+",\"supplierList\":"+supplierInterface.bl_getAllSupplierList()+"}";
									break;*/
							case 6:result = "{\"SupplierList\":"+supplierInterface.bl_getAllActiveSupplierList(reqObj)+",\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+",\"TransporterList\":"+transporterInterface.bl_getAllTransporterList(reqObj)+",\"GoodReceiptRegisterList\":"+interfaceRef.bl_getGoodReceiptRegister(reqObj)+",\"CreatedByNameList\":"+peopleInterface.bl_getAllCreatedByNameListForRR(reqObj)+"}";
						       break;
										
						};
						break;
						
				case 3: switch(reqObj.getEntity()){
						
						case 1: result="{\"goodsReceiptBatchSchemeList \":"+interfaceRef.bl_getGoodsReceiptBatchSchemeList(reqObj)+"}";	
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

	public String bl_setGoodsReceipt(PurpleaidRequest reqObj) throws Exception {
		GoodsReceipt_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef = new GoodsReceiptImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setGoodsReceipt(reqObj);	
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
