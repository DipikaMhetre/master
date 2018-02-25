package com.purpleaid.Impl;


import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.ActiveUsers;
import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.PurpleaidACL_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class PurpleaidACLImpl implements PurpleaidACL_IF{

	
	@Override
	public String bl_getLogin(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util =null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		ResultSet rs2 = null;
		String response = "";
		String query = null;
		String query1 = null;
		java.math.BigDecimal token1 = null ;
		double userId = 0;
		int status =444;
		int managerUserStatus =0;
		List <ActiveUsers> activeUsersList = null;
		String query3 = null;
		 double noOfUsers = 0;
		    boolean lockFlag = false;
		String json = null;
		try
			
		{
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			if(reqObj.getIsActiveUsersDeleted() == 1){
				activeUsersList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<ActiveUsers>>() {});	
				query3 = "{call deleteActiveUsers (?,?,?,?)}";
				cstatement = con.prepareCall (query3);
				
				for(int i=0;i<activeUsersList.size();i++){
					ActiveUsers Obj = new ActiveUsers();
					Obj = activeUsersList.get(i);
					cstatement.setDouble(1, Obj.getRecid());
					cstatement.setString(2, reqObj.getUserName());
					cstatement.setString(3, reqObj.getUserPassword());
					cstatement.setInt(4, status);
					cstatement.execute();
					
					
					cstatement.registerOutParameter(4, java.sql.Types.INTEGER); 
					
			        status = cstatement.getInt(4);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else{
						con.commit();
					}
					
				}
				
				
			}
			
			
			
			util = new Util_json();
			/* for delete non active users*/
			 
			String query5 = "{call deleteNonActiveUsers()}"; 
			cstatement = con.prepareCall(query5);
			
			cstatement.execute();
			
			
			
			
			
			query= "{call userLogin(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserName());
			cstatement.setString(2, reqObj.getUserPassword());
			cstatement.setInt(3, status);
			cstatement.setInt(4, managerUserStatus);			
			
			List<PurpleaidACL> PurpleaidACLList = null;
			activeUsersList=new ArrayList<ActiveUsers>();
			
			
			ActiveUsers auObj = new ActiveUsers();
			rs=cstatement.executeQuery();
			
		
			rs=cstatement.getResultSet();
			
			cstatement.registerOutParameter(3, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			
		    status = cstatement.getInt(3);
		    managerUserStatus = cstatement.getInt(4);
		    
		    if(status == 2){
		    	System.out.println("User Not Found");
		    	throw new Exception("User Not Found"+"->"+status);
		    }else if(status == 0){
		    	if(managerUserStatus == 1){
		    		
		    		boolean isResult = cstatement.getMoreResults(); 
		    		
		    		
		    		rs2=cstatement.getResultSet();
		    		
		    		while(rs2.next()){
		    			auObj = new ActiveUsers();
		    			auObj.setActiveUsersUID(rs2.getString("userName"));
		    			auObj.setRecid(rs2.getDouble("ID"));
		    			auObj.setActiveUsersName(rs2.getString("contactname"));
		    			auObj.setActiveUsersLoginTime(rs2.getString("loginTime"));
		    			auObj.setActiveUsersLoginActivity(rs2.getString("lastActivityTime"));
		    			auObj.setActiveUsersActiveTime(rs2.getString("activityTime"));
		    			auObj.setActiveUsersIpAddress(rs2.getString("IP"));
		    			
		    			
		    			
		    			if(rs2.isLast()){
		    				auObj.setActiveUsersNoOfUser(rs2.getDouble("NoOfUsers"));
		    				noOfUsers = rs2.getDouble("NoOfUsers");
		    				
		    				auObj.setActiveUsersLockFlag(rs2.getBoolean("flgSystemLock"));
		    				lockFlag = rs2.getBoolean("flgSystemLock");
		    				
		    				
		    			}
		    			
		    			
		    			if(rs2.getDouble("ID")!=0){
		    				activeUsersList.add(auObj);
		    			}
		    			
		    		}
		    		//json = "{\"activeUsersList\":"+util.util_makeJson(activeUsersList) +",\"lockFlag\":"+lockFlag+" ,\"noOfUsers\":"+noOfUsers+" }";
		    		json =util.util_makeJson(activeUsersList);
		    		throw new Exception("Not allowed to login more than 2 users"+"->"+json+"->"+noOfUsers);
		    	}else{
		    		throw new Exception("Not allowed to login more than 2 users"+"->"+json+"->"+noOfUsers);
		    	}	
	    	}else{
	    		while(rs.next()){
	    		    reqObj = new PurpleaidRequest();
					reqObj.setUserName(rs.getString("userName"));
					reqObj.setUserPassword(rs.getString("userPassward"));
					reqObj.setContactID(rs.getDouble("ID"));
					
					userId = rs.getDouble("ID");
					
	    		}
				query1= "{call getMenu(?)}";
				cstatement = con.prepareCall(query1);
				cstatement.setDouble(1, userId);
				
				rs1 = cstatement.executeQuery();
				
				PurpleaidACLList = new ArrayList<PurpleaidACL>();
				
				while(rs1.next()){
					
					PurpleaidACL pObj = new PurpleaidACL();
					pObj.setPurpleaidACLpermissionID(rs1.getDouble("permissionID"));
					pObj.setPurpleaidACLpermission(rs1.getString("permission"));
					pObj.setPurpleaidACLpermissionDescription(rs1.getString("Description"));
					pObj.setPurpleaidACLMenuID(rs1.getInt("menu_id"));
					pObj.setPurpleaidACLMenu(rs1.getString("menu_name"));
					pObj.setPurpleaidACLParentMenuID(rs1.getInt("menu_parent_id"));
					
					
					PurpleaidACLList.add(pObj);
											
				}
				
				PurpleaidACL pObj1 = new PurpleaidACL();
				String query2="{call InsertActiveUsers(?,?,?)}";
				cstatement1 = con.prepareCall(query2);
				cstatement1.setDouble(1, pObj1.getPurpleaidACLactiveUserId());
				cstatement1.setDouble(2, userId );
				cstatement1.setDouble(3, pObj1.getPurpleaidACLactiveUserToken());
				//cstatement1.setString(4, reqObj.getIpAddress());
				cstatement1.execute();
				
				cstatement1.registerOutParameter(3, java.sql.Types.DECIMAL);
				 token1 = cstatement1.getBigDecimal(3);
				System.out.println("token  !!!"+token1);
					
				String query4="{call InsertUsersLog(?,?,?)}";
				cstatement1 = con.prepareCall(query4);
				cstatement1.setDouble(1, 0);
				cstatement1.setDouble(2, userId );
				cstatement1.setString(3, reqObj.getIpAddress());
				cstatement1.execute();
				
				con.commit();
							
	    	}
			
		//json = util.util_makeJson(PurpleaidACLList);
		//json = "{\"PurpleaidACLList\":"+util.util_makeJson(PurpleaidACLList) +",\"token\":"+token1+",\"userID\":"+userId+"}";
		String json1= util.util_makeJson(userId);
		String json2= util.util_makeJson(token1);
		String json3 = util.util_makeJson(PurpleaidACLList);
		String json4 = util.util_makeJson(activeUsersList);
		response = response.concat(json1).concat("-");
		response = response.concat(json2).concat("-");
		response = response.concat(json3);
		response = response.concat(json4);
		}catch(Exception e)
		{
			try {
				if (con == null){
					throw new Exception("\nError DB connection Failed ");
				}
	    		con.close();
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
	    	}
		}
		
		return response;
	}

	public String bl_getViewSwitcher(String userId, String token,int pageId) throws Exception {
		Util_json util =null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		ResultSet rs1 = null;
		String query = null;
		String json = null;
		int i =444;
		double status =0;
		
		try
		{
			util = new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			query= "{call sp_ACL(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, userId );
			cstatement.setString(2, token);
			cstatement.setInt(3, pageId);
			cstatement.setDouble(4, status);
			
			List<PurpleaidACL> PurpleaidACLList = new ArrayList<PurpleaidACL>();
			rs1=cstatement.executeQuery();
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			 i = cstatement.getInt(4);

			
			if(i == 0){
				throw new Exception("User is not Authorized"+i);
			}
			else if(i == 1){
				throw new Exception("No Permission"+i);
			}else{
				
				while(rs1.next()){						
					PurpleaidACL pObj = new PurpleaidACL();
					pObj.setPurpleaidACLpermissionID(rs1.getDouble("permissionID"));
					pObj.setPurpleaidACLpermissionDescription(rs1.getString("Description"));
					pObj.setPurpleaidACLMenuUrl(rs1.getString("url"));				
					PurpleaidACLList.add(pObj);
										
				}		
	    	}
			
		json = util.util_makeJson(PurpleaidACLList);
		}
		catch(Exception e)
		{
			try {
	    		con.close();
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+i);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+i);
	    	}
		}
		
		return json;
	}

	@Override
	public String bl_Logout(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		ActiveUsers Obj = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			con.setAutoCommit(false);
			//Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<ActiveUsers>() {});	
			
			query = "{call logout (?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			
			cstatement.execute();
			con.commit();		
			json = util.util_makeJson(Obj);
			
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 50000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 50000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 50000102: "+e.getMessage());
				}

			}finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			}

		  }
		return json;
	}

	@Override
	public String bl_LogoutActiveUsers(PurpleaidRequest reqObj)	throws Exception {
		Util_json util =null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		String response = "";
		String query = null;
		String query1 = null;
		java.math.BigDecimal token1 = null ;
		double userId = 0;
		int status =444;
		int managerUserStatus =0;
		List <ActiveUsers> activeUsersList = null;
		String query3 = null;
		try
		
		{
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			
				activeUsersList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<ActiveUsers>>() {});	
				query3 = "{call deleteActiveUsers (?,?,?,?)}";
				cstatement = con.prepareCall (query3);
				
				for(int i=0;i<activeUsersList.size();i++){
					ActiveUsers Obj = new ActiveUsers();
					Obj = activeUsersList.get(i);
					cstatement.setDouble(1, Obj.getActiveUsersId());
					cstatement.setString(2, reqObj.getUserName());
					cstatement.setString(3, reqObj.getUserPassword());
					cstatement.setInt(4, status);
					cstatement.addBatch();
				}
				
				cstatement.registerOutParameter(4, java.sql.Types.INTEGER); 
				cstatement.executeBatch();	
		        status = cstatement.getInt(4);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else{
					con.commit();
				}
			
	
	}catch(Exception e)
	{
		try {
			if (con == null){
				throw new Exception("\nError DB connection Failed ");
			}
    		con.close();
    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
    	} catch(Exception e1) {
    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
    	}
	}
	
	return response;
	}	
	
	@Override
	public String bl_getLoginHistory(PurpleaidRequest reqObj,double maxID) throws Exception {
		
		Util_json util = null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		double loopID = 0;
		List<ActiveUsers> LoginHistoryList = null;
		ActiveUsers cObj = null;
		CallableStatement cstatement = null;
		try
		{
			util = new Util_json();
			LoginHistoryList = new ArrayList<ActiveUsers>();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			query ="{call getUserLog(?,?,?,?,?,?)}";	// retrieves single record
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1,maxID);
			cstatement.setDouble(2, reqObj.getListLimit());
			cstatement.setString(3,reqObj.getUserId());
			cstatement.setString(4, reqObj.getToken());
			cstatement.setInt(5, reqObj.getViewPermissionID());
			cstatement.setInt(6, status);	
			cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();
			
			status = cstatement.getInt(6);
			if(status == 0){
				throw new Exception("User is not Authorized"+status);
			}
			else if(status == 1){
				throw new Exception("No Permission"+status);
			}else{
			
				while(rs.next()){
					
					cObj = new ActiveUsers();
					
					//cObj.setActiveUserLogId(rs.getDouble("userLogID"));
					cObj.setActiveUsersId(rs.getDouble("contactID"));
					cObj.setRecid(rs.getDouble("userLogID"));
					cObj.setActiveUsersLoginDate(rs.getString("LoginDate"));
					cObj.setActiveUsersLoginTime(rs.getString("LoginTime"));
					cObj.setActiveUsersIpAddress(rs.getString("IPaddress"));
					
					LoginHistoryList.add(cObj);
					
					if(rs.isLast()){
						loopID = rs.getDouble("userLogID");
					}
				
				}
			}
			
			json = "{\"LoginHistoryList\":"+util.util_makeJson(LoginHistoryList) +",\"lastId\":"+loopID+"}";
			//json = util.util_makeJson(LoginHistoryList);
			
			
		}catch(Exception e){
			
			try{
				con.close();
				throw new Exception("\n error 40000101"+e.getMessage());
				
			}catch(Exception e1){
				throw new Exception("\n error 40000101"+e1.getMessage());
			}	
		}
		return json;
	}	
}
