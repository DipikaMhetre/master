package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Transporter;
import com.purpleaid.interfaces.Transporter_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class TransporterImpl implements Transporter_IF{

	@Override
	public String bl_getAllTransporterList(PurpleaidRequest reqObj ) throws Exception {
		Util_json util= null;
	    String json=null;
	    int status =444;
	    List <Transporter> transporterList = null;
	    Connection con = null;
	    JdbcConnection JdbcConnectionObj = null;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement callableStatement = null;
	    try {
	    	
	    	util= new Util_json();
	    	transporterList=new ArrayList<Transporter>();
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
	    	query="{call getTransporterList(?,?,?,?)}";
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
		    		Transporter tranObj = new Transporter();
		    		tranObj.setTransporterId(rs.getDouble("ID"));
		    		tranObj.setTransporterName(rs.getString("Name"));
		    	
		    		if(rs.getInt("flgActive")==1){
		    			tranObj.setTransporterActiveFlag(true);
		    		}else{
		    			tranObj.setTransporterActiveFlag(false);
		    		}
		    		
		    		transporterList.add(tranObj);
		    	} 
			}
	     json = util.util_makeJson(transporterList);
	    
	    }catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
				}

			}
	    }
	    return json;
	}

	@Override
	public String bl_setTransporter(PurpleaidRequest reqObj) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

}
