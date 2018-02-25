package com.purpleaid.bussinessLayer;


//import com.purpleaid.Impl.CompanyCreditNoteImpl;
import com.purpleaid.Impl.StockAuditImpl;
import com.purpleaid.beans.PurpleaidRequest;
//import com.purpleaid.interfaces.CompanyCreditNote_IF;
import com.purpleaid.interfaces.StockAudit_IF;

public class Bl_StockAudit {
	
	public String bl_getStockaudit(PurpleaidRequest reqObj) throws Exception{
		
		StockAudit_IF interfaceref = null;
		//CompanyCreditNote_IF cinterface = null;
		
		String result = null;
		
		try{
			interfaceref = new StockAuditImpl();
			//cinterface = new CompanyCreditNoteImpl();
			switch(reqObj.getEntity()){
			
			case 1:	
					break;
			
			case 2:switch (reqObj.getListType()) {
					
					
					case 1: result = "{\"CompanyDivisionList\":"+interfaceref.bl_getAllCompanyDivisionList(reqObj)+",\"ProductTypeList\":"+interfaceref.bl_getProductTypeList(reqObj)+",\"StockAuditList\":"+interfaceref.bl_getAllStockAudit(reqObj)+"}";
							break;
							
					case 2: result = interfaceref.bl_getAllProductListForAudit(reqObj);
							break;
							
					/*case 3: result = interfaceref.bl_getAllStockAudit(reqObj);
							break;
						*/
							
					/*case 3 : result = cinterface.bl_getAllCompanyCreditNoteList(reqObj);
							break;
							*/
					case 4 : result = interfaceref.bl_getStockAuditDetails(reqObj);
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

public String bl_setStockaudit(PurpleaidRequest reqObj) throws Exception{
		
	StockAudit_IF interfaceref = null;
	
	
	String result = null;
	
	try{
		interfaceref = new StockAuditImpl();
		
		
		switch(reqObj.getEntity()){
		
				case 1 : result = interfaceref.bl_setAllStockAudit(reqObj);
						break;
						
				case 2: result = interfaceref.bl_setAllSalelock(reqObj);
						break;
						
				default:System.out.println("Default");
				break;
		
		}
		
	}catch(Exception e){
		
		throw new Exception(e.getMessage());
	}
	
		return result;
		
	}
	
}
