package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Region;
import com.purpleaid.interfaces.Region_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class RegionImpl implements Region_IF {

	@Override
	public String bl_getRegion(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllRegionList(PurpleaidRequest reqObj) {
		Util_json util= null;
	    String json=null;
	    int status = 444;
	    List <Region> regionList = null;
	    Connection con = null;
	    JdbcConnection JdbcConnectionObj = null;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement callableStatement =null;
	    try {
	    	util= new Util_json();
	    	regionList=new ArrayList<Region>();
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
	    	query="{call getAllRegion(?,?,?,?)}";
	    	callableStatement = con.prepareCall(query);
	    	callableStatement.setString(1, reqObj.getUserId());
	    	callableStatement.setString(2, reqObj.getToken());
	    	callableStatement.setInt(3, reqObj.getViewPermissionID());
	    	callableStatement.setDouble(4, status);
	    	
	    	callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
	    	rs = callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{      
		    	while(rs.next()){
		    		Region regObj = new Region();
		    		regObj.setRegionID(rs.getDouble("ID"));
		    		regObj.setRecid(rs.getDouble("ID"));
		    		regObj.setRegionCode(rs.getString("code"));
		    		regObj.setRegionDescription(rs.getString("description"));
		    		regionList.add(regObj);
		    	} 
			}
	     json = util.util_makeJson(regionList);
	    
	    } catch (Exception e) {
	    	e.printStackTrace();
	    } finally {
	    	try {
	    		con.close();
	    	} catch(Exception e) {
	    		e.printStackTrace();
	    	}
	    }
	    return json;
	}

	@Override
	public String bl_setRegion(PurpleaidRequest reqObj) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	

}
