package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.FinancialYearImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.FinancialYear_IF;

public class Bl_FinancialYear {

	public String bl_getFinancialYear(PurpleaidRequest reqObj) throws Exception {
		
		FinancialYear_IF interfaceRef = null;
		interfaceRef = new FinancialYearImpl();
		
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			case 1:
					break;
					
			case 2: switch (reqObj.getListType()) {
			
			case 1:	result = interfaceRef.getFinancialYearList(reqObj);
					break;
			}
		
			default:System.out.println("Default");
					break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		
		return result;
		
	}

	
public String bl_setFinancialYear(PurpleaidRequest reqObj) throws Exception {
		
		FinancialYear_IF interfaceRef = null;
		interfaceRef = new FinancialYearImpl();
		
		String result = null;
		
		try{
			
			switch (reqObj.getEntity()) {
			
			case 1:result = interfaceRef.setfinancialYear(reqObj);
			       break;
					
					
			/*case 2:	result = interfaceRef.getFinancialYearList();
					break;*/
					
			default:System.out.println("Default");
					break;
			}
			
		}catch(Exception e){
			
			throw new Exception(e.getMessage());
			
		}
		
		return result;
		
	}
}
