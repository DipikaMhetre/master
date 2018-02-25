package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.RouteImpl;
import com.purpleaid.Impl.SalesmanImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Route_IF;
import com.purpleaid.interfaces.Salesman_IF;

public class Bl_Salesman {
	public String bl_getSalesman(PurpleaidRequest reqObj) throws Exception{
		Salesman_IF interfaceRef = null;
		Route_IF routeInterface = null;
		String result = null;
		try {
			interfaceRef =  new SalesmanImpl();
			routeInterface = new RouteImpl();
			result = null;
			switch(reqObj.getEntity()){
				
				case 1:	result=interfaceRef.bl_getSalesman(0);	
						break;

				case 2: switch(reqObj.getListType()){
					
							case 1: result=interfaceRef.bl_getAllSalesmanList();	
									break;
							
							case 2: result=interfaceRef.bl_getAllSalesmanList();	
									result=routeInterface.bl_getAllRouteList(reqObj);	
									result="{\"salesmanList\":"+interfaceRef.bl_getAllSalesmanList()+",\"routeList\":"+routeInterface.bl_getAllRouteList(reqObj)+"}";
									break;
							
							/*case 3:interfaceRef.bl_getAllRouteList();	
							break;	*/
						}
						
			    default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}	
		return result;
	}
	
	public String bl_setSalesman(PurpleaidRequest reqObj) throws Exception{
		Salesman_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new SalesmanImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setSalesman(reqObj.getRequestData());	
					break;
						
				case 2: switch(reqObj.getListType()){ 		
				
						case 1: interfaceRef.bl_setSalesmanList(reqObj.getRequestData());
	
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
