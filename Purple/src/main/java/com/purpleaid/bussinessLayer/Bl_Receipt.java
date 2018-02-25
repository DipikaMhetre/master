package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.ReceiptImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Receipt_IF;


public class Bl_Receipt {

	public String bl_getReceipt(PurpleaidRequest reqObj) throws Exception {
		
		Receipt_IF interfaceRef = null;
		interfaceRef = new ReceiptImpl();
		String result = null;
	
		try
		{	
			switch (reqObj.getEntity()) {
			case 1:
				break;
					
			case 2: switch (reqObj.getListType()) {
					
					
						    
					case 1: result = interfaceRef.bl_getReceiptList(reqObj);
				    break;
						   
					/*case 1: result = interfaceRef.bl_getReceiptList(reqObj);
							break;*/
			
					case 2: result = interfaceRef.bl_getSalesmanList(reqObj);
							break;
							
					
					
					default:System.out.println("default");
							break;
			}

			default:System.out.println("default");
					break;
			}
						
		}catch(Exception e){
			throw new Exception(e.getMessage());
		}
		
		return result;	
	}

	public String bl_setReceipt(PurpleaidRequest reqObj) throws Exception {
		
		Receipt_IF interfaceRef = null;
		String result = null;

		try
		{	
			interfaceRef = new ReceiptImpl();
			
			switch (reqObj.getEntity()) {
			
			case 1: result = interfaceRef.bl_setReceipt(reqObj);
					break;
					
			case 2: switch (reqObj.getListType()) {
					
					/*case 1:result = interfaceRef.bl_getVoucherTypeList();
						   break;*/
					
					default:System.out.println("default");
							break;
			}

			default:System.out.println("default");
					break;
			}
						
		}catch(Exception e){
			throw new Exception(e.getMessage());
		}
		
		return result;	
	}	
}

