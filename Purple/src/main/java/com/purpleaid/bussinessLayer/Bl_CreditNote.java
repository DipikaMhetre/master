package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.CreditNoteImpl;
import com.purpleaid.Impl.CustomerImpl;
import com.purpleaid.Impl.ReasonImpl;
import com.purpleaid.Impl.SysPermissionRoleImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.CreditNote_IF;
import com.purpleaid.interfaces.Customer_IF;
import com.purpleaid.interfaces.Reason_IF;
import com.purpleaid.interfaces.SysPermissionRole_IF;


public class Bl_CreditNote {
	
	public String bl_getCreditNote(PurpleaidRequest reqObj) throws Exception {
		CreditNote_IF interfaceRef = null;
		Customer_IF custInterface = null;
		SysPermissionRole_IF sysinterfaceRef = null;
		Reason_IF reasonInterface = null;
		
		String result = null;
		try {
			interfaceRef = new CreditNoteImpl();
			custInterface = new CustomerImpl();
			sysinterfaceRef =  new SysPermissionRoleImpl();
			reasonInterface = new ReasonImpl();
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getProductCreditNote(reqObj);
						break;
			
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"userNameList\":"+sysinterfaceRef.bl_getUserNameList(reqObj)+",\"allCustomerList\":"+custInterface.bl_getAllCustomerListForCN(reqObj)+",\"creditNoteList\":"+interfaceRef.bl_getCreditNoteList( reqObj)+",\"reasonList\":"+reasonInterface.bl_getReasonListForCreditNote(reqObj)+"}";
									break;
							
							case 2: result="{\"creditNoteProductSalesHistory\":"+interfaceRef.bl_getCreditNoteProductSalesHistory(reqObj)+"}";	
							        break;	

							case 3: result=interfaceRef.bl_getCreditNoteList(reqObj);
									break;
									
							case 4: result=interfaceRef.bl_getProductCreditNote(reqObj);
									break;
									
							case 5: result=custInterface.bl_getAllCustomerListForCN(reqObj);
									break;
									
							case 6: result= interfaceRef.bl_getAdditionalDiscCreditNote(reqObj);
									break;
							
							case 7:result="{\"userNameList\":"+sysinterfaceRef.bl_getUserNameList(reqObj)+",\"allCustomerList\":"+custInterface.bl_getAllCustomerListForCN(reqObj)+",\"creditNoteList\":"+interfaceRef.bl_getCreditNoteList( reqObj)+",\"reasonList\":"+reasonInterface.bl_getReasonListForCreditNote(reqObj)+"}";
									break;
									
							case 8: result= interfaceRef.bl_getCreditNoteConsumptionDetails(reqObj);
					         		break;
					         
							case 9: result= interfaceRef.bl_getRateDiffrenceCreditNote(reqObj);
					         		break;
									/*case 4:	result="{\"batchList\":"+interfaceRef.bl_getAllBatchList(reqObj.getProductId())+"}";
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
	
	public String bl_setCreditNote(PurpleaidRequest reqObj) throws Exception {
		CreditNote_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef = new CreditNoteImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setDirectCreditNote(reqObj);	
					break;
						
				case 2:		
					result=interfaceRef.bl_setProductCreditNote(reqObj);	
					break;
					
				case 3:		
					result=interfaceRef.bl_setAdditionalDiscountCreditNote(reqObj);	
					break;
					
				case 4:  
				     result=interfaceRef.bl_setRateDiffrenceCreditNote(reqObj);
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
