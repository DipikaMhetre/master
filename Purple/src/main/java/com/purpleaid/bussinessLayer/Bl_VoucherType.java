package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.VoucherTypeImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.VoucherType_IF;

public class Bl_VoucherType {

	public String bl_getVoucherType(PurpleaidRequest reqObj) throws Exception {
	
			VoucherType_IF interfaceRef = null;
			interfaceRef = new VoucherTypeImpl();
			String result = null;
		
			try
			{	
				switch (reqObj.getEntity()) {
				case 1:
					break;
						
				case 2: switch (reqObj.getListType()) {
						
						case 1: result = interfaceRef.bl_getVoucherTypeList(reqObj);
							    break;
							   
						case 2: result = interfaceRef.bl_getNarrationlist(reqObj);
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

	public String bl_setVoucherType(PurpleaidRequest reqObj) throws Exception {
		VoucherType_IF interfaceRef = null;
		interfaceRef = new VoucherTypeImpl();
		String result = null;

		try
		{	
			switch (reqObj.getEntity()) {
			
			case 1: result = interfaceRef.bl_setVoucherType(reqObj);
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
