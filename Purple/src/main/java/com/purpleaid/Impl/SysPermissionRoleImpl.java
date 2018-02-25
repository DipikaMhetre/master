package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;









import com.purpleaid.beans.Contact;
import com.purpleaid.beans.EntityDetails;
import com.purpleaid.beans.PermissionGroup;
import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.SysPermissionRole_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class SysPermissionRoleImpl implements SysPermissionRole_IF{

	@Override
	public String bl_getAllPermissionList(PurpleaidRequest reqObj)throws Exception {
		Util_json util =null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
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
	    	
			query= "{call getPermission(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setDouble(4, status);
			
			List<PermissionGroup> groupList = new ArrayList<PermissionGroup>();
			rs=cstatement.executeQuery();
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			i = cstatement.getInt(4);

			
			if(i == 0){
				throw new Exception("User is not Authorized"+i);
			}
			else if(i == 1){
				throw new Exception("No Permission"+i);
			}else{
				double loopGroupID = 0;
				double loopID = 0;
				double userId = 0;
				PermissionGroup groupObj = new PermissionGroup();
				List<PurpleaidACL>  permissionList = new ArrayList<PurpleaidACL>();
				List<Contact>  userList = new ArrayList<Contact>();	
				int role = 0;
				int manual = 0;
				while(rs.next()){	
					
					if 	(loopGroupID != rs.getDouble("groupID")){
						groupObj = new PermissionGroup();
						permissionList = new ArrayList<PurpleaidACL>();
						userList = new ArrayList<Contact>();	
						
						
						groupObj.setPermissionGroupId(rs.getDouble("groupID"));
						groupObj.setRecid(rs.getDouble("groupID"));
						groupObj.setPermissionGroup(rs.getString("Description"));
						PurpleaidACL pObj = new PurpleaidACL();
						
						if(loopID != rs.getDouble("ID")){
						
							
							userList = new ArrayList<Contact>();
							
							pObj.setPurpleaidACLpermissionID(rs.getDouble("ID"));
							pObj.setRecid(rs.getDouble("ID"));
							pObj.setPurpleaidACLpermission(rs.getString("Permission"));
							pObj.setPurpleaidACLpermissionGroupID(rs.getDouble("groupID"));
							pObj.setPurpleaidACLpermissionDescription(rs.getString("permissionDescription"));
							
							permissionList.add(pObj);
							
								
							Contact cObj = new Contact();
							cObj.setContactId(rs.getDouble("userID"));
							
							if(rs.getDouble("userRoleID") != 0){
								role = role + 1;
								cObj.setRole("YES");
								cObj.setManual("NO");
							}else{
								manual = manual  + 1;
								cObj.setRole("NO");
								cObj.setManual("YES");
							}
													
							userList.add(cObj);
							pObj.setUserList(userList);
							
							
						}else{
						
							if 	(loopID != rs.getDouble("ID") && userId != rs.getDouble("userID")){
								
								Contact cObj = new Contact();
								cObj.setContactId(rs.getDouble("userID"));
								if(rs.getDouble("userRoleID") != 0){
									role = role + 1;
									cObj.setRole("YES");
									cObj.setManual("NO");
								}else{
									manual = manual  + 1;
									cObj.setRole("NO");
									cObj.setManual("YES");
								}
								userList.add(cObj);
								pObj.setUserList(userList);
							}else{
								Contact cObj = new Contact();
								cObj.setContactId(rs.getDouble("userID"));
								if(rs.getDouble("userRoleID") != 0){
									role = role + 1;
									cObj.setRole("YES");
									cObj.setManual("NO");
								}else{
									manual = manual  + 1;
									cObj.setRole("NO");
									cObj.setManual("YES");
								}
								userList.add(cObj);
								
							}
						
						
						}
						groupObj.setPermissionList(permissionList); 
						groupList.add(groupObj);
					
					}else{
						PurpleaidACL pObj = new PurpleaidACL();
						if(loopID != rs.getDouble("ID")){
							
							
							userList = new ArrayList<Contact>();
							pObj.setPurpleaidACLpermissionID(rs.getDouble("ID"));
							pObj.setRecid(rs.getDouble("ID"));
							pObj.setPurpleaidACLpermission(rs.getString("Permission"));
							pObj.setPurpleaidACLpermissionGroupID(rs.getDouble("groupID"));
							pObj.setPurpleaidACLpermissionDescription(rs.getString("permissionDescription"));
							
							
							permissionList.add(pObj);
							
							
														
							Contact cObj = new Contact();
							cObj.setContactId(rs.getDouble("userID"));
							
							if(rs.getDouble("userRoleID") != 0){
								role = role + 1;
								cObj.setRole("YES");
								cObj.setManual("NO");
							}else{
								manual = manual  + 1;
								cObj.setRole("NO");
								cObj.setManual("YES");
							}
							
							userList.add(cObj);
							pObj.setUserList(userList);
								
							
						}else{
							if 	(loopID != rs.getDouble("ID") && userId != rs.getDouble("userID")){
									
								Contact cObj = new Contact();
								cObj.setContactId(rs.getDouble("userID"));
								if(rs.getDouble("userRoleID") != 0){
									role = role + 1;
									cObj.setRole("YES");
									cObj.setManual("NO");
								}else{
									manual = manual  + 1;
									cObj.setRole("NO");
									cObj.setManual("YES");
								}
								userList.add(cObj);
								pObj.setUserList(userList);
								
							}else{
								Contact cObj = new Contact();
								cObj.setContactId(rs.getDouble("userID"));
								if(rs.getDouble("userRoleID") != 0){
									role = role + 1;
									cObj.setRole("YES");
									cObj.setManual("NO");
								}else{
									manual = manual  + 1;
									cObj.setRole("NO");
									cObj.setManual("YES");
								}
								userList.add(cObj);
							}
						}
						groupObj.setPermissionList(permissionList); 
					}
					loopGroupID = rs.getDouble("groupID");  //set loopGroupID for comparison	
					loopID = rs.getDouble("ID");  //set loopGroupID for comparison	
					userId = rs.getDouble("userID");
					
				}		
	    	}
			
		json = util.util_makeJson(groupList);
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
	public String bl_getAllUserList(PurpleaidRequest reqObj) throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Contact> userList = new ArrayList<Contact>();
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
	     
	         query="{call getUser(?,?,?,?)}";
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
	      
				Contact uObj = new Contact();
				
			    while(rs.next()){
			    				    	
				    	uObj = new Contact();
					  			     
					    
					    uObj.setContactId(rs.getDouble("userID"));
					    uObj.setRecid(rs.getDouble("userID"));
					    uObj.setContactOrganization(rs.getString("organization"));
					    uObj.setContactFullName(rs.getString("FullName"));
					    uObj.setContactUserName(rs.getString("userName"));
					    //uObj.setContactPermissionType(rs.getString("RoleDescription"));
					    uObj.setContactLabel(rs.getString("label"));
					    uObj.setContactType(rs.getString("Description"));
					   
					    if(rs.getInt("flgStaff") == 1){
					    	 uObj.setContactIsStaffDescription("Yes");
					    }else{
					    	uObj.setContactIsStaffDescription("No");
					    }
					    
					 userList.add(uObj);
			    }      
			}
	      json = util.util_makeJson(userList);
	     
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
	public String bl_setSystemPermission(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		JdbcConnection JdbcConnectionObj = null;
		PurpleaidACL Obj  = null;
		List<PurpleaidACL> ObjList = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<PurpleaidACL>>() {});
			
			query = "{call UpdateUPforSystemPermission (?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			
			for(int i=0;i<ObjList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = ObjList.get(i);
			
				cstatement.setDouble(1, Obj.getPurpleaidACLpermissionID());
				cstatement.setDouble(2, Obj.getPurpleaidACLuserID());
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
				
	            status  = cstatement.getInt(7);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
		           	con.commit();
				}
			}
			
			for(int i=0;i<ObjList.size();i++){
			    Obj = new PurpleaidACL();
				Obj = ObjList.get(i);
				
				if(Obj.isPurpleaidACLIsPermissionDeleted() == true){
					 Obj.getPermissionList().remove(i);
				}else{
					
				}
			}
			response = util.util_makeJson(ObjList);
			
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

	@Override
	public String bl_getContactTypeList(PurpleaidRequest reqObj)throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<EntityDetails> contactTypeList = new ArrayList<EntityDetails>();
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
	     
	         query="{call contactTypeList(?,?,?,?)}";
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
	      
				EntityDetails edObj = new EntityDetails();
				
			    while(rs.next()){
			    				    	
				    	edObj = new EntityDetails();
					  			     
					    
					    edObj.setEntityDetailsId(rs.getDouble("ID"));
					    edObj.setEntityDeatilsDescription(rs.getString("Description"));  
					    
					    
					 contactTypeList.add(edObj);
			    }      
			}
	      json = util.util_makeJson(contactTypeList);
	     
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
	public String bl_getLabelList(PurpleaidRequest reqObj) throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Contact> labelList = new ArrayList<Contact>();
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
	     
	         query="{call getLabelList(?,?,?,?)}";
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
	      
				Contact Obj = new Contact();
				
			    while(rs.next()){
			    				    	
				    	Obj = new Contact();
					  			     
					    
				    	Obj.setContactLabel(rs.getString("label"));
					    
					    
				    	labelList.add(Obj);
			    }      
			}
	      json = util.util_makeJson(labelList);
	     
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
	public String bl_getUserNameList(PurpleaidRequest reqObj) throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Contact> labelList = new ArrayList<Contact>();
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
	     
	         query="{call userNameList(?,?,?,?)}";
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
	      
				Contact Obj = new Contact();
				
			    while(rs.next()){
			    				    	
				    	Obj = new Contact();
					  			     
					    
				    	Obj.setContactFullName(rs.getString("userName"));  
					    Obj.setContactId(rs.getDouble("contactID"));
					    
				    	labelList.add(Obj);
			    }      
			}
	      json = util.util_makeJson(labelList);
	     
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
	public String bl_getUserIDList(PurpleaidRequest reqObj) throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Contact> labelList = new ArrayList<Contact>();
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
	     
	         query="{call userIDList(?,?,?,?)}";
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
	      
				Contact Obj = new Contact();
				
			    while(rs.next()){
			    	  	
				    	
					  			     
				    	  if(rs.getString("userName") != null){
				    		  Obj = new Contact();
				    		  Obj.setContactUserName(rs.getString("userName"));
				    		  labelList.add(Obj);
				    	  }
				    	
					    
					    
				    	
			    }      
			}
	      json = util.util_makeJson(labelList);
	     
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
	public String bl_getUserRoleManualList(PurpleaidRequest reqObj)	throws Exception {
		 Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Contact> userList = new ArrayList<Contact>();
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
	     
	         query="{call getUser(?,?,?,?)}";
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
	      
				Contact uObj = new Contact();
				
			    while(rs.next()){
			    				    	
				    	uObj = new Contact();
					  			     
					    
					    uObj.setContactId(rs.getDouble("userID"));
					    uObj.setRecid(rs.getDouble("userID"));
					    uObj.setContactOrganization(rs.getString("organization"));
					    uObj.setContactFullName(rs.getString("FullName"));
					    uObj.setContactUserName(rs.getString("userName"));
					    //uObj.setContactPermissionType(rs.getString("RoleDescription"));
					    uObj.setContactLabel(rs.getString("label"));
					    uObj.setContactType(rs.getString("Description"));
					   
					    if(rs.getInt("flgStaff") == 1){
					    	 uObj.setContactIsStaffDescription("Yes");
					    }else{
					    	uObj.setContactIsStaffDescription("No");
					    }
					    
					 userList.add(uObj);
			    }      
			}
	      json = util.util_makeJson(userList);
	     
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

	

}
