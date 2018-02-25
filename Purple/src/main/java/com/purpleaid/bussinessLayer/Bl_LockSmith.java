package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AreaImpl;
import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.CustomerImpl;
import com.purpleaid.Impl.DivisionImpl;
import com.purpleaid.Impl.RouteImpl;
import com.purpleaid.Impl.SalesmanImpl;
import com.purpleaid.Impl.SupplierImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Area_IF;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Customer_IF;
import com.purpleaid.interfaces.Division_IF;
import com.purpleaid.interfaces.Route_IF;
import com.purpleaid.interfaces.Salesman_IF;
import com.purpleaid.interfaces.Supplier_IF;

public class Bl_LockSmith {
	public String bl_getLockSmith(PurpleaidRequest reqObj) throws Exception{
		
		
		Company_IF interfaceCompanyRef = null;
		Supplier_IF supplierInterface = null;
		Division_IF divisionInterface = null;
		Area_IF areaInterface = null;
		Route_IF routeInterface = null;
		Salesman_IF salesmanInterface = null;
		Customer_IF customerInterface = null;
				
		
		
		interfaceCompanyRef = new CompanyImpl();
		supplierInterface = new SupplierImpl();
		divisionInterface  = new DivisionImpl();
		areaInterface  = new AreaImpl();
		routeInterface  = new RouteImpl();
		salesmanInterface  = new SalesmanImpl();
		customerInterface  = new CustomerImpl();
		String result = null;
		
		try {
			switch(reqObj.getEntity()){
	
				case 2: switch(reqObj.getListType()){

				case 1 :result =interfaceCompanyRef.bl_getAllCompanyList(reqObj);
					    break;
					
					
				case 2 :result =supplierInterface.bl_getAllActiveSupplierList(reqObj);
					    break;
					
				case 3 :result =divisionInterface.bl_getAllDivisionList(reqObj);
					    break;
					
				case 4 :result =areaInterface.bl_getAllAreaList(reqObj);
					    break;
					
					
				case 5 :result =routeInterface.bl_getAllRouteList(reqObj);
					    break;
					
					
				case 6 :result =salesmanInterface.bl_getAllSalesmanList();
					    break;
					
					
				case 7 :result =customerInterface.bl_getAllCustomerList(reqObj);
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
	
	public String bl_setLockSmith(PurpleaidRequest reqObj) throws Exception {
		
		Company_IF interfaceCompanyRef = null;
		Supplier_IF supplierInterface = null;
		Division_IF divisionInterface = null;
		Area_IF areaInterface = null;
		Route_IF routeInterface = null;
		
		Customer_IF customerInterface = null;
				
		
		
		interfaceCompanyRef = new CompanyImpl();
		supplierInterface = new SupplierImpl();
		divisionInterface  = new DivisionImpl();
		areaInterface  = new AreaImpl();
		routeInterface  = new RouteImpl();
		
		customerInterface  = new CustomerImpl();
		String result = null;
		
		try {
			
			
			switch(reqObj.getEntity()){
				case 2: switch(reqObj.getListType()){
	
				case 1 :result =interfaceCompanyRef.bl_setCompany2List(reqObj);
					    break;
					
					
				case 2 :result =supplierInterface.bl_setSupplierList(reqObj);
					    break;
					
				case 3 :result =divisionInterface.bl_setDivisionList(reqObj);
					    break;
					
				case 4 :result =areaInterface.bl_setAreaList(reqObj);
					    break;
					
					
				case 5 :result =routeInterface.bl_setRouteList(reqObj);
					    break;
					
					
				//case 6 :result =salesmanInterface.bl_setSalesmanList(requestData)
					  //  break;
					
					
				case 7 :result =customerInterface.bl_setCustomerList(reqObj);
					    break;
				
				         
				default:System.out.println("Default");
				        break;
			}
		}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}

}
