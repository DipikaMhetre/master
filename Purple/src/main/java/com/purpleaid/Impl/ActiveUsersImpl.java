package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.ActiveUsers;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.ActiveUsers_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ActiveUsersImpl implements ActiveUsers_IF{

	@Override
	public String bl_getAllActiveUsersList(PurpleaidRequest reqObj) throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    double noOfUsers = 0;
	    boolean lockFlag = false;
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	   
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
		List <ActiveUsers> activeUsersList = null;
	     
		try {
			util= new Util_json();
			
			ActiveUsers auObj = null;
			activeUsersList=new ArrayList<ActiveUsers>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getActiveUsersList(?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	    
	        callableStatement.setString(1, reqObj.getUserId());
			callableStatement.setString(2, reqObj.getToken());
			callableStatement.setInt(3, reqObj.getViewPermissionID());
			callableStatement.setDouble(4, status);
				
			callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				while(rs.next()){
					
					auObj = new ActiveUsers();
	    			auObj.setActiveUsersUID(rs.getString("userID"));
	    			auObj.setRecid(rs.getDouble("ID"));
	    			auObj.setActiveUsersName(rs.getString("name"));
	    			auObj.setActiveUsersLoginTime(rs.getString("loginTime"));
	    			auObj.setActiveUsersLoginActivity(rs.getString("lastActivityTime"));
	    			auObj.setActiveUsersActiveTime(rs.getString("activityTime"));
	    			auObj.setActiveUsersIpAddress(rs.getString("IP"));
	    			
	    			
	    			
	    			
	    			
	    			
	    			
	    			if(rs.isLast()){
	    				auObj.setActiveUsersNoOfUser(rs.getDouble("NoOfUsers"));
	    				noOfUsers = rs.getDouble("NoOfUsers");
	    				
	    				auObj.setActiveUsersLockFlag(rs.getBoolean("flgSystemLock"));
	    				lockFlag = rs.getBoolean("flgSystemLock");
	    				
	    				
	    			}
	    			if(rs.getDouble("ID") != 0)
	    				activeUsersList.add(auObj);
					}
			
				 
			
			}
			 //json = util.util_makeJson(activeUsersList);
			 json = "{\"activeUsersList\":"+util.util_makeJson(activeUsersList) +",\"lockFlag\":"+lockFlag+" ,\"noOfUsers\":"+noOfUsers+" }";
	     
	     }catch (Exception e) {
		    	try {	
					con.close();
					throw new Exception("\nError 60000101: "+e.getMessage()+"->"+status);
				} catch (Exception e1) {
					try {
						con.close();
						throw new Exception("\nError 60000101: "+e.getMessage()+"->"+status);
					} catch (Exception e2) {
						throw new Exception("\nError 60000101: "+e.getMessage()+"->"+status);
					}
	
				}finally{
					if(con!=null){
						DataSource.getInstance().closeConnection(con);
					}
					
					if(callableStatement!=null){
						DataSource.getInstance().closeCallableStatment(callableStatement);
					}
					
				}
		    }
			
	
	     return json;
	}

	@Override
	public String bl_deleteActiveUsers(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		
		int status =444;
		Connection con = null;
		String query3 = null;
		String query = null;
		CallableStatement cstatement = null;
		CallableStatement callableStatement = null;
		ResultSet rs = null;
		JdbcConnection JdbcConnectionObj = null;
		List <ActiveUsers> activeUsersList = null;
		List <ActiveUsers> activeUsersList1 = null;
		double noOfUsers = 0;
		boolean lockFlag = false;
		String json = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			activeUsersList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<ActiveUsers>>() {});	
			query3 = "{call delectActiveUsersMenu (?,?,?,?,?)}";
			cstatement = con.prepareCall (query3);
			for(int i=0;i<activeUsersList.size();i++){
				
				ActiveUsers Obj = new ActiveUsers();
				Obj = activeUsersList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				cstatement.setInt(4, reqObj.getDeletePermissionID());
				cstatement.setDouble(5, status);
				cstatement.execute();
				
				
				cstatement.registerOutParameter(5, java.sql.Types.INTEGER); 
				
		        status = cstatement.getInt(5);
				
		        if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					con.commit();
				}	
					
			}// for end 	 
		
			
			 if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
			 }else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
			 }else{
				ActiveUsers auObj = null;
				
				query="{call getActiveUsersList(?,?,?,?)}";
		        callableStatement = con.prepareCall(query);
		    
		        callableStatement.setString(1, reqObj.getUserId());
				callableStatement.setString(2, reqObj.getToken());
				callableStatement.setInt(3, reqObj.getViewPermissionID());
				callableStatement.setDouble(4, status);
					
				callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
				rs=callableStatement.executeQuery();
				
				status = callableStatement.getInt(4);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					activeUsersList1 = new ArrayList<ActiveUsers>();
						while(rs.next()){
						
						auObj = new ActiveUsers();
		    			auObj.setActiveUsersUID(rs.getString("userID"));
		    			auObj.setRecid(rs.getDouble("ID"));
		    			auObj.setActiveUsersName(rs.getString("name"));
		    			auObj.setActiveUsersLoginTime(rs.getString("loginTime"));
		    			auObj.setActiveUsersLoginActivity(rs.getString("lastActivityTime"));
		    			auObj.setActiveUsersActiveTime(rs.getString("activityTime"));
		    			auObj.setActiveUsersIpAddress(rs.getString("IP"));
		    			
		    			if(rs.isLast()){
		    				auObj.setActiveUsersNoOfUser(rs.getDouble("NoOfUsers"));
		    				noOfUsers = rs.getDouble("NoOfUsers");
		    				
		    				auObj.setActiveUsersLockFlag(rs.getBoolean("flgSystemLock"));
		    				lockFlag = rs.getBoolean("flgSystemLock");
		    				
		    				
		    			}
		    			
		    			if(rs.getDouble("ID") !=0){
		    			activeUsersList1.add(auObj);
		    			}
					}
				
					 
				
				}
			}
			 json = "{\"activeUsersList\":"+util.util_makeJson(activeUsersList1) +",\"lockFlag\":"+lockFlag+" ,\"noOfUsers\":"+noOfUsers+" }";
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				}

			}

		} 
		return json;
	}

}
