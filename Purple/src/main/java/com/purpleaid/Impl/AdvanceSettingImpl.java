package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Role;
import com.purpleaid.interfaces.AdvanceSetting_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class AdvanceSettingImpl implements AdvanceSetting_IF {

	@Override
	public String bl_getAllRolePermissionList(PurpleaidRequest reqObj)throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Role> roleList = new ArrayList<Role>();
	     List<PurpleaidACL> permissionList = new ArrayList<PurpleaidACL>();
	     Connection con = null;
	     String query = null;
	     ResultSet rs = null;
	     CallableStatement callableStatement = null;
		 JdbcConnection JdbcConnectionObj = null;
	     
		 try {
			 util= new Util_json();
			      
			 //con = DataSource.getInstance().getConnection();
	    	 JdbcConnectionObj = new JdbcConnection();
	    	 con=JdbcConnectionObj.getConnection();
	     
	         query="{call getRolePermissionForAdvSetting(?,?,?,?,?)}";
	         callableStatement = con.prepareCall(query);
	         callableStatement.setInt(1, reqObj.getUid());
			 callableStatement.setString(2, reqObj.getUserId());
			 callableStatement.setString(3, reqObj.getToken());
			 if(reqObj.getPageId() == 117 || reqObj.getPageId() == 93){
				 callableStatement.setInt(4, reqObj.getViewPermissionID());
			 }else{
				 callableStatement.setInt(4, 149); // user setting and avance setting permission 
			 }
			 
			 callableStatement.setDouble(5, status);
			
			 callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
			 rs=callableStatement.executeQuery();
			
			 status = callableStatement.getInt(5);
			 double looproleID = 0;
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
	      
				Role Obj = null;
				
			    while(rs.next()){
			    	
			    	if(looproleID != rs.getDouble("roleID")){
			    		Obj = new Role();
				        permissionList = new ArrayList<PurpleaidACL>();
				        			      
				      
				        Obj.setRole(rs.getString("Role"));
				        Obj.setRoleId(rs.getDouble("roleID"));
				        Obj.setRecid(rs.getDouble("roleID"));
				       	Obj.setIsRole(rs.getBoolean("isRolePermission"));				  
				       
					    PurpleaidACL pObj = new PurpleaidACL();
					    pObj.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
					  
					    permissionList.add(pObj);
					    Obj.setRolePermissionList(permissionList);
				        roleList.add(Obj);
			    	}else{
			    		
			    		
					   PurpleaidACL pObj = new PurpleaidACL();
					   pObj.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
					  
					   permissionList.add(pObj);
					   Obj.setRolePermissionList(permissionList);
					        
			    		
			    	}
			    	looproleID =  rs.getDouble("roleID");
			    	
			    }      
			}
	      json = util.util_makeJson(roleList);
	     
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
	public String bl_getAllpermissionRoleList(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			
			List<PurpleaidACL> rolePermissionList = null;
			String query = "{call getUserRolePermissionList (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setInt(1, reqObj.getUid());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			if(reqObj.getPageId() == 117 || reqObj.getPageId() == 93){
				 cstatement.setInt(4, reqObj.getViewPermissionID());
			}else{
				 cstatement.setInt(4, 149); // user setting and avance setting permission 
			}
			cstatement.setInt(5, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			status = cstatement.getInt(5);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
				double loopPermissionID = 0;
				
				rolePermissionList = new ArrayList<PurpleaidACL>();
			    List<Role> roleList = null;
			    PurpleaidACL pObj1 =null;
			    while(rs.next()){
			    	
			    	if 	(loopPermissionID != rs.getDouble("permissionID")){
						
					  
					    pObj1 = new PurpleaidACL();
					    roleList = new ArrayList<Role>();
					    
					    
					    pObj1.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
					    pObj1.setPurpleaidACLpermission(rs.getString("permission"));
					    pObj1.setRecid(rs.getDouble("permissionID"));
					    pObj1.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
					    pObj1.setPurpleaidACLupid(rs.getDouble("UPID"));
					    pObj1.setPurpleaidACLroleID(rs.getDouble("userRoleID"));
					    pObj1.setPurpleaidACLpermissionGroup(rs.getString("permissionGroupDescription"));
					    pObj1.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
						
					   
			    	    Role rObj = new Role();
					    rObj.setRoleId(rs.getDouble("userRoleID"));
					    roleList.add(rObj);
					    pObj1.setPermissionRoleList(roleList);
					  
					    rolePermissionList.add(pObj1);
					   
					    
					   
					    
			    	}else{
			    		
			    	    Role rObj = new Role();
					    rObj.setRoleId(rs.getDouble("userRoleID"));
					    roleList.add(rObj);
					    pObj1.setPermissionRoleList(roleList);
					 
					   
			    	}
			    
			    	loopPermissionID = rs.getDouble("permissionID");  //set loopcustID for comparison
			    	
			    	
				} // while loop	
			    
			}  
		    json = util.util_makeJson(rolePermissionList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}
		    
		    return json;
	}

	@Override
	public String bl_setAdvanceSetting(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		JdbcConnection JdbcConnectionObj = null;
		PurpleaidACL Obj  = null;
		
		List<PurpleaidACL> permissionList = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
						
			permissionList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<PurpleaidACL>>() {});
			
					
			
			for(int i=0;i<permissionList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = permissionList.get(i);
			
					query = "{call InsertUpdateUPforAdvSettingsUserDelta(?,?,?,?,?,?,?,?)}";
					
					
					//delete from UP where PID = pid and UID =uid
					// insert single record with rid = NULL
					
					cstatement = con.prepareCall (query);
					
					cstatement.setDouble(1, Obj.getPurpleaidACLpermissionID());
					cstatement.setDouble(2, Obj.getPurpleaidACLuserID() );
										
					if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
						cstatement.setInt(3, 1);
					}else{
						cstatement.setInt(3, 0);
					}
					
					cstatement.setString(4, reqObj.getUserId());
					cstatement.setString(5, reqObj.getToken());
					
					if(reqObj.getPageId() == 117 || reqObj.getPageId() == 93){
						 cstatement.setInt(6, reqObj.getInsertPermissionID());
					}else{
						 cstatement.setInt(6, 150); // user setting and avance setting permission 
					}
					
		           // cstatement.setInt(6, reqObj.getInsertPermissionID());
		            cstatement.setDouble(7, status);
		            cstatement.setDouble(8, Obj.getPurpleaidACLroleID());
		            
		            cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
		            cstatement.execute();
		            status = cstatement.getInt(7);
		            
		            if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
					
						con.commit();
				   	}
			}
			
			/*// for role delta operation
			
			for(int i=0;i<userList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = userList.get(i);
				
					query = "{call InsertUpdateUPforSystemRoleUserDelta(?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query);
					
					//delete from UP where RID = rid and UID =uid
					// insert multiple records from RP 
					
					cstatement.setDouble(1, Obj.getPurpleaidACLuserID());
					cstatement.setDouble(2, Obj.getPurpleaidACLroleID());
									
					if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
						cstatement.setInt(3, 1);
					}else{
						cstatement.setInt(3, 0);
					}
					
					cstatement.setString(4, reqObj.getUserId());
					cstatement.setString(5, reqObj.getToken());
		            cstatement.setInt(6, reqObj.getUpdatePermissionID());
		            cstatement.setDouble(7, status);
		            
		            cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
		            status = cstatement.getInt(7);
		            
		            if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
			        	con.commit();
			        
					}
				 
				}*/
		
			
			/*for(int i=0;i<permissionList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = permissionList.get(i);
				
				if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
					 Obj.getPermissionList().remove(i);
				}else{
					
				}
			}*/
			response = util.util_makeJson(permissionList);
				
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage());
				}

			}finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}

		} 
		return response;
	}

}
