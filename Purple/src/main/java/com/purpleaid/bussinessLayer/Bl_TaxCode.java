package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.AccountImpl;
import com.purpleaid.Impl.TaxCodeImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Account_IF;
import com.purpleaid.interfaces.TaxCode_IF;

public class Bl_TaxCode {
	public String bl_getTaxCode(PurpleaidRequest reqObj) throws Exception{
		TaxCode_IF interfaceRef = null;
		Account_IF accountInterface = null;
		
		
		String result = null;
		try {
			interfaceRef =  new TaxCodeImpl();
			accountInterface = new AccountImpl();
			switch(reqObj.getEntity()){

				case 1:	result=interfaceRef.bl_getTaxCode(0);	
				break;

				case 2: switch(reqObj.getListType()){

						case 1: result=interfaceRef.bl_getAllTaxCodeList(reqObj);	
								break;	
						//result="{\"areaList\":"+interfaceRef.bl_getAllAreaList()+",\"regionList\":"+regionInterface.bl_getAllRegionList()+"}";
								
				
						case 2:	result="{\"taxCodeList\":"+interfaceRef.bl_getAllTaxCodeList(reqObj)+",\"accountList\":"+accountInterface.bl_getAllAccountList(reqObj)+"}";
								break;

					   /*case 3:interfaceRef.bl_getAllRouteList();	
								break;	*/
				}

				default:;
				break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		
		
		return result;
	}
	
	public String bl_setTaxCode(PurpleaidRequest reqObj) throws Exception{
		TaxCode_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new TaxCodeImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setTaxCode(reqObj);	
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
