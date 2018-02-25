package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.ReportImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Report_IF;


public class Bl_Report {

	public String bl_getReport(PurpleaidRequest reqObj) throws Exception {
		
		Report_IF interfaceRef = null;
		
		String result = null;
		
			try
			{
				
				interfaceRef = new ReportImpl();
				switch (reqObj.getEntity()) {
				case 1: result = interfaceRef.bl_getReportCategory(0);
						break;
				
				case 2: switch (reqObj.getListType()) {
						case 1 : result = interfaceRef.bl_getReportCategoryList(reqObj.getEntityId());
								 break;
								 
					
						case 2: result =  interfaceRef.bl_getNotificationList();
								break;
								 
				} break;

				default:
					break;
				}
				
			}catch(Exception e){
				
				throw new Exception(e.getMessage());
				
			}
		return result;
	}

}
