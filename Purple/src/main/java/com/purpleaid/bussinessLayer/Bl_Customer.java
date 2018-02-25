package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AreaImpl;
import com.purpleaid.Impl.CustomerImpl;
import com.purpleaid.Impl.SalesmanImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Area_IF;
import com.purpleaid.interfaces.Customer_IF;
import com.purpleaid.interfaces.Salesman_IF;

public class Bl_Customer{
	public String bl_getCustomer(PurpleaidRequest reqObj) throws Exception{
		Customer_IF interfaceRef = null;
		Salesman_IF salesmanInterface = null;
		Area_IF areaInterface = null;
		
		String result = null;
		try {
			interfaceRef =  new CustomerImpl();
			salesmanInterface = new SalesmanImpl();
			areaInterface = new AreaImpl();
			
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getCustomer(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result=interfaceRef.bl_getAllCustomerList(reqObj);	
									break;
							
							case 2: result=interfaceRef.bl_getAllCustomerList(reqObj);	
									result=salesmanInterface.bl_getAllSalesmanList();
									result=areaInterface.bl_getAllAreaList(reqObj);
									result="{\"customerList\":"+interfaceRef.bl_getAllCustomerList(reqObj)+",\"areaList\":"+areaInterface.bl_getAllAreaList(reqObj)+",\"salesmanList\":"+salesmanInterface.bl_getAllSalesmanList()+"}";
									break;			

							case 3:result = interfaceRef.bl_getAllCustomerForRR(reqObj);	
									break;
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
	
	public String bl_setCustomer(PurpleaidRequest reqObj) throws Exception{
		Customer_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new CustomerImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setCustomer(reqObj);	
					break;
				case 2: switch(reqObj.getListType()){ 		
				
							case 1: interfaceRef.bl_setCustomerList(reqObj);

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
