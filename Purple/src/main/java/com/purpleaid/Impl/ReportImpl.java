package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;



import com.purpleaid.beans.Report;
import com.purpleaid.interfaces.Report_IF;
import com.purpleaid.utilities.DataSource;

import com.purpleaid.utilities.Util_json;

public class ReportImpl implements Report_IF {

	@Override
	public String bl_getReportCategory(int i) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getReportCategoryList(double id) throws Exception {
		
		Util_json util =null;
		
		Connection con = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
		String json = null;
		String query = null;
				
		List<Report> reportList = null ;
		
		Report reportObj = new Report();
		//Report reportObjsublist = new Report();
		try
		{
			util = new Util_json();
			con = DataSource.getInstance().getConnection();
			reportList = new ArrayList<Report>();
			
			query= "{call getAllReportBycategory(?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1,id);
			rs=cstatement.executeQuery();
			
			List<Report> subReportList = new ArrayList<Report>();
			
			while(rs.next())
			{
				
				
				if(rs.getDouble("rccid") != 0)
				{
					
					
					reportObj = new Report();
					subReportList = new ArrayList<Report>();
					
					reportObj.setReportCategoryId(rs.getDouble("id"));
					reportObj.setReportId(rs.getDouble("sub report id"));
					reportObj.setReportName(rs.getString("name"));
					reportObj.setReportDescription(rs.getString("description"));
															
					Report reportObjsublist = new Report();
				 
					reportObj.setReportCategoryId(rs.getDouble("id"));
					reportObj.setReportId(rs.getDouble("rccid"));
					reportObj.setReportName(rs.getString("sub category"));
					reportObjsublist.setReportDescription(rs.getString("description"));
					
					subReportList.add(reportObjsublist);
					reportObj.setSubCategoryList(subReportList);
					reportList.add(reportObj);
					
											
				}else{
					reportObj = new Report();
					//subReportList = new ArrayList<Report>();
					
					reportObj.setReportCategoryId(rs.getDouble("id"));
					reportObj.setReportId(rs.getDouble("sub report id"));
					reportObj.setReportName(rs.getString("name"));
					reportObj.setReportDescription(rs.getString("description"));
					reportList.add(reportObj);
					
					
				}
				
			}
			
			
			
				json = util.util_makeJson(reportList);
			
		}catch(Exception e)
		{
			try {
	    		con.close();
	    		throw new Exception("\nError 40000101: "+e.getMessage());
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 40000101: "+e.getMessage());
	    	}
		}
		
		return json;
	}

	

	@Override
	public String bl_getNotificationList() throws Exception {
	
		Util_json util = null;
		
		Connection con = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
		String json = null;
		String query = null;
		List<Report> reportNotificationList = null;
		
		try
		{
			reportNotificationList = new ArrayList<Report>();
			util=  new Util_json();
			con = DataSource.getInstance().getConnection();
			
			query = "{call getNotification()}";
			cstatement = con.prepareCall(query);
			rs = cstatement.executeQuery();
			
			while(rs.next())
			{
				Report reportObj = new Report();
				reportObj.setReportNotificationId(rs.getDouble("id"));
				reportObj.setReportNotificationDate(rs.getString("Date"));
				//reportObj.setReportNotificationPriority(rs.getString("Priority"));
				reportObj.setReportNotificationPriority(rs.getInt("Priority"));
				reportObj.setReportNotification(rs.getString("Notification"));
				reportObj.setReportNotificationflgActive(rs.getBoolean("FlgActive"));
				
				reportNotificationList.add(reportObj);
			}
			
			json = util.util_makeJson(reportNotificationList);
			
			
		}catch(Exception e)
		{
			try {
	    		con.close();
	    		throw new Exception("\nError 40000101: "+e.getMessage());
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 40000101: "+e.getMessage());
	    	}
		}
		
		return json;
	}
	
	
}
