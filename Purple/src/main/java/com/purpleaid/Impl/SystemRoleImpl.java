package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Contact;
import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Role;
import com.purpleaid.interfaces.SystemRole_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class SystemRoleImpl implements SystemRole_IF{

	@Override
	public String bl_getAllRoleList(PurpleaidRequest reqObj) throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Role> roleList = new ArrayList<Role>();
	     List<PurpleaidACL> permissionList = new ArrayList<PurpleaidACL>();
	     List<Contact> userList = null;
	     Connection con = null;
	     String query = null;
	     ResultSet rs = null;
	  
	     CallableStatement callableStatement = null;
		 JdbcConnection JdbcConnectionObj = null;
	     
		 try {
			 util= new Util_json();
			 Role Obj = null; 
			 Contact cObj =null;
			 //con = DataSource.getInstance().getConnection();
	    	 JdbcConnectionObj = new JdbcConnection();
	    	 con=JdbcConnectionObj.getConnection();
	     
	         query="{call getSystemRoles(?,?,?,?)}";
	         callableStatement = con.prepareCall(query);
			 callableStatement.setString(1, reqObj.getUserId());
			 callableStatement.setString(2, reqObj.getToken());
			 callableStatement.setInt(3, reqObj.getViewPermissionID());
			 callableStatement.setDouble(4, status);
			
			 callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			 rs=callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			 double looproleID = 0;
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
	      
				
				
			    while(rs.next()){
			    	
			    	if(looproleID != rs.getDouble("roleID")){
			    		Obj = new Role();
				        permissionList = new ArrayList<PurpleaidACL>();
				        userList = new ArrayList<Contact>();
				        
				        Obj.setRole(rs.getString("Role"));
				        Obj.setRoleId(rs.getDouble("roleID"));
				        Obj.setRecid(rs.getDouble("roleID"));
				        Obj.setRoleActiveFlag(rs.getBoolean("flgActive"));
				        Obj.setRoleDescription(rs.getString("Description"));
					  
				        if(rs.getDouble("permissionID") != 0){
						  PurpleaidACL pObj = new PurpleaidACL();
						  pObj.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
						  
						  permissionList.add(pObj);
						  Obj.setRolePermissionList(permissionList);
				        }
					
				       if(rs.getDouble("userID") != 0){
						   cObj = new Contact();
						  cObj.setContactId(rs.getDouble("userID"));
						  
						  userList.add(cObj);
						  Obj.setRoleUserList(userList);
						  
				        }
				        roleList.add(Obj);
			    	}else{
			    		
			    		 if(rs.getDouble("permissionID") != 0){
							  PurpleaidACL pObj = new PurpleaidACL();
							  pObj.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
							  
							  permissionList.add(pObj);
							  Obj.setRolePermissionList(permissionList);
					        }
						
					        if(rs.getDouble("userID") != 0){
							   cObj = new Contact();
							  cObj.setContactId(rs.getDouble("userID"));
							  
							  userList.add(cObj);
							  Obj.setRoleUserList(userList);
							  
					        }
			    		
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
	public String bl_getAllpermissionList(PurpleaidRequest reqObj)throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	    
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
	     
	         query="{call getPermissionForSysRole(?,?,?,?)}";
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
	      
				PurpleaidACL pObj = null;
				
			    while(rs.next()){
			       		
				      		        
				      pObj = new PurpleaidACL();
					 
				      pObj.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
					  pObj.setPurpleaidACLpermission(rs.getString("Permission"));
					  pObj.setPurpleaidACLpermissionGroup(rs.getString("permissionGroup"));
					  pObj.setRecid(rs.getDouble("permissionID"));
					  permissionList.add(pObj);
						
				      
			    }
			}
	      json = util.util_makeJson(permissionList);
	     
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
	public String bl_setSystemRole(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		JdbcConnection JdbcConnectionObj = null;
		PurpleaidACL Obj  = null;
		Role rObj = null;
		List<PurpleaidACL> permissionList = null;
		List<PurpleaidACL> userList = null;
		List<Role> roleList = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			double RID = 0;
			String[] split = reqObj.getRequestData().split("->");;
			
			
			permissionList = new ObjectMapper().readValue(split[0], new TypeReference<List<PurpleaidACL>>() {});
			userList = new ObjectMapper().readValue(split[1], new TypeReference<List<PurpleaidACL>>() {});
			roleList = new ObjectMapper().readValue(split[2], new TypeReference<List<Role>>(){});
			
			// for new Role
			for(int i=0;i<roleList.size();i++){
			    rObj = new Role();
			    rObj = roleList.get(i);
				
				query = "{call InsertUpdateSecurityRoleMaster(?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query);
							
				cstatement.setDouble(1, rObj.getRoleId());
				cstatement.setString(2, rObj.getRole());
				cstatement.setBoolean(3, rObj.isRoleActiveFlag());
				cstatement.setString(4, reqObj.getUserId());
				cstatement.setString(5, reqObj.getToken());
				if(rObj.getRoleId() == 0){
					 cstatement.setInt(6, reqObj.getInsertPermissionID());
				}else{
					cstatement.setInt(6, reqObj.getUpdatePermissionID());
				}
	           
	            cstatement.setDouble(7, status);
	            cstatement.setString(8, rObj.getRoleDescription()); 
	            
	            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
	            cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
	            cstatement.execute();
	            RID = cstatement.getDouble(1);
	            status = cstatement.getInt(7);
	            
	            
	            
	            if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					con.commit();
					rObj.setRoleId(RID);
					rObj.setRecid(RID);
				}
			}
			
			for(int i=0;i<permissionList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = permissionList.get(i);
			
					query = "{call InsertUpdateRP(?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query);
					
					cstatement.setDouble(1, Obj.getPurpleaidACLrolePermissionID());
					
					if(Obj.getPurpleaidACLroleID() == 0){
						cstatement.setDouble(2, RID );
					}else{
						cstatement.setDouble(2, Obj.getPurpleaidACLroleID());
					}
					
					
					if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
						cstatement.setInt(3, 1);
					}else{
						cstatement.setInt(3, 0);
					}
					
					cstatement.setString(4, reqObj.getUserId());
					cstatement.setString(5, reqObj.getToken());
		            cstatement.setInt(6, reqObj.getInsertPermissionID());
		            cstatement.setDouble(7, status);
		            
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
			
			// for user delta operation
			
			for(int i=0;i<userList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = userList.get(i);
				
					query = "{call InsertUpdateUPforSystemRoleUserDelta(?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query);
					
					
					
					
					
					cstatement.setDouble(1, Obj.getPurpleaidACLuserID());
					
					
					if(Obj.getPurpleaidACLroleID() == 0){
						cstatement.setDouble(2, RID );
					}else{
						cstatement.setDouble(2, Obj.getPurpleaidACLroleID());
					}
					
					//cstatement.setDouble(2, Obj.getPurpleaidACLroleID());
									
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
		
			
			/*for(int i=0;i<permissionList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = permissionList.get(i);
				
				if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
					 Obj.getPermissionList().remove(i);
				}else{
					
				}
			}
			for(int i=0;i<userList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = userList.get(i);
				
				if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
					 Obj.getPermissionList().remove(i);
				}else{
					
				}
			}*/
			
			//response = "{\"roleList\":"+util.util_makeJson(roleList) +",\"permissionList\":"+util.util_makeJson(permissionList)+",\"userList\":"+util.util_makeJson(userList)+"}";
			response = util.util_makeJson(roleList);
				
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
