package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.ControlPanelMisc;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.ControlPanelMisc_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ControlPanelMiscImpl implements ControlPanelMisc_IF{

	@Override
	public String bl_getControlPanelMiscList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
		String query = null;
		String json = null;
		int status = 444;
		
		List<ControlPanelMisc> contactTypeList = null;
		List<ControlPanelMisc> defaultRoleList = null;
		
		try {

			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			query = "{call getControlPanelMiscList(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();
			
			status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{			
		
				double loopid = 0;
				contactTypeList = new ArrayList<ControlPanelMisc>();
				defaultRoleList = new ArrayList<ControlPanelMisc>();
				ControlPanelMisc controlPanelMiscObj = new ControlPanelMisc();
				
				
				while(rs.next()){
					
					if(loopid !=rs.getDouble("ContactTypeID")){
					
						controlPanelMiscObj = new ControlPanelMisc();
						defaultRoleList = new ArrayList<ControlPanelMisc>();
						controlPanelMiscObj.setControlPanelMiscContactTypeId(rs.getDouble("ContactTypeID"));
						controlPanelMiscObj.setRecid(rs.getDouble("ContactTypeID"));
						controlPanelMiscObj.setControlPanelMiscContactType(rs.getString("ContactType"));
						controlPanelMiscObj.setControlPanelMiscDefaultRole(rs.getString("DefaultRole"));
						
						ControlPanelMisc controlPanelMiscObj1 = new ControlPanelMisc();	
						
						controlPanelMiscObj1.setControlPanelMiscRoleId(rs.getDouble("RoleID"));
						controlPanelMiscObj1.setRecid(rs.getDouble("RoleID"));
						controlPanelMiscObj1.setControlPanelMiscContactTypeId(rs.getDouble("ContactTypeID"));
						controlPanelMiscObj1.setControlPanelMiscContactType(rs.getString("ContactType"));
						controlPanelMiscObj1.setControlPanelMiscRole(rs.getString("Role"));
						
						defaultRoleList.add(controlPanelMiscObj1);
						controlPanelMiscObj.setControlPanelMiscList(defaultRoleList);
						contactTypeList.add(controlPanelMiscObj);	
					
					}else{
						
						ControlPanelMisc controlPanelMiscObj1 = new ControlPanelMisc();	
						
						controlPanelMiscObj1.setControlPanelMiscRoleId(rs.getDouble("RoleID"));
						controlPanelMiscObj1.setRecid(rs.getDouble("RoleID"));
						controlPanelMiscObj1.setControlPanelMiscContactTypeId(rs.getDouble("ContactTypeID"));
						controlPanelMiscObj1.setControlPanelMiscContactType(rs.getString("ContactType"));
						controlPanelMiscObj1.setControlPanelMiscRole(rs.getString("Role"));
						
						defaultRoleList.add(controlPanelMiscObj1);
						controlPanelMiscObj.setControlPanelMiscList(defaultRoleList);
					}
					
					loopid = rs.getDouble("ContactTypeID");
				}
			}
			con.close();
			json = util.util_makeJson(contactTypeList);
		}catch(Exception e){
			
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
	public String bl_getDefaultRoleList(PurpleaidRequest reqObj) throws Exception {

		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		String query1 = null;
		String query2 = null;
		
		String json = null;
		int status = 444;
		
		List<ControlPanelMisc> defaultRoleList = null;
		List<ControlPanelMisc>contactTypeList = null;
		
		try {

			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			
			contactTypeList = new ArrayList<ControlPanelMisc>();
			ControlPanelMisc controlPanelMiscObj1 = new ControlPanelMisc();
			query2 ="{call getContactType(?,?,?,?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs1 = cstatement.executeQuery();
			
			status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{	
				
				while(rs1.next()){
					
					controlPanelMiscObj1 = new ControlPanelMisc();
					controlPanelMiscObj1.setControlPanelMiscContactTypeId(rs1.getDouble("contactTypeId"));
					controlPanelMiscObj1.setRecid(rs1.getDouble("contactTypeId"));
					controlPanelMiscObj1.setControlPanelMiscContactType(rs1.getString("contactType"));
					contactTypeList.add(controlPanelMiscObj1);
				}
				
					defaultRoleList = new ArrayList<ControlPanelMisc>();
					ControlPanelMisc controlPanelMiscObj = new ControlPanelMisc();
					
					query1 = "{call getDefaultRoleList(?,?,?,?)}";
					cstatement = con.prepareCall(query1);
					
					cstatement.setString(1, reqObj.getUserId());
					cstatement.setString(2, reqObj.getToken());
					cstatement.setInt(3, reqObj.getViewPermissionID());
					cstatement.setInt(4, status);
					cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
					rs = cstatement.executeQuery();
					
					status = cstatement.getInt(4);
					
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{	
	
						while(rs.next()){
							
							controlPanelMiscObj = new ControlPanelMisc();
							
							controlPanelMiscObj.setControlPanelMiscRoleId(rs.getDouble("RoleId"));
							controlPanelMiscObj.setRecid(rs.getDouble("RoleId"));
							//controlPanelMiscObj.setControlPanelMiscDefaultRole(rs.getString("DefaultRole"));
							controlPanelMiscObj.setControlPanelMiscRole(rs.getString("DefaultRole"));
							defaultRoleList.add(controlPanelMiscObj);	
						}
					}
				}
			
	json="{\"contactTypeList\":"+util.util_makeJson(contactTypeList)+",\"defaultRoleList\":"+util.util_makeJson(defaultRoleList)+"}";	
		
	}catch (Exception e) {
		try {	
			con.close();
			throw new Exception("\nError 19000101: "+e.getMessage());
		} catch (Exception e1) {
			try {
				con.close();
				throw new Exception("\nError 19000101: "+e.getMessage());
			} catch (Exception e2) {
				throw new Exception("\nError 19000101: "+e.getMessage());
			}
		}
	}
	
	return json;

}

	@Override
public String bl_setControlPanelMiscList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		CallableStatement cstatment3 = null;
		CallableStatement cstatement = null;
		String query1 = null;
		String query2 = null;
		String query3 = null;
		String query4 = null;
		String query5 = null;
		String json = null;
		ControlPanelMisc controlPanelMiscObj = null;
		ControlPanelMisc controlPanelMiscObj1 = null;
		ControlPanelMisc controlPanelMiscObj3 = null;
		List<ControlPanelMisc> controlPanelMiscList = null;
		int status = 444;
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			
			controlPanelMiscList  = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<ControlPanelMisc>>() {});
			int ListSize = controlPanelMiscList.size();
			
			for(int i = 0 ; i< ListSize;i++){
				
				controlPanelMiscObj = new ControlPanelMisc();
				controlPanelMiscObj = controlPanelMiscList.get(i);
				
				if(controlPanelMiscObj.getAction()==1 && controlPanelMiscObj.getControlPanelMiscContactTypeId()==0){
					
					query1 = "{call insertUpdateContactType(?,?,?,?,?,?,?)}";
					cstatement =  con.prepareCall(query1);
					
					cstatement.setDouble(1, controlPanelMiscObj.getControlPanelMiscContactTypeId());
					cstatement.setString(2, controlPanelMiscObj.getControlPanelMiscContactType());
					cstatement.setInt(3, controlPanelMiscObj.getStatus());
					cstatement.setString(4, reqObj.getUserId());
					cstatement.setString(5, reqObj.getToken());
					
					if(controlPanelMiscObj.getControlPanelMiscContactTypeId() == 0){
						
						cstatement.setInt(6, reqObj.getInsertPermissionID());
						
					}else{
						
						cstatement.setInt(6, reqObj.getUpdatePermissionID());
					}
					cstatement.setInt(7, status);	
					cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // output status 
					cstatement.registerOutParameter(7, java.sql.Types.INTEGER);  // success status
					cstatement.execute();
	
					status = cstatement.getInt(7); 
					
					Double ContactTypeID = cstatement.getDouble(1);  // receive contact type id
					controlPanelMiscObj.setControlPanelMiscContactTypeId(ContactTypeID);
					controlPanelMiscObj.setRecid(ContactTypeID);
						
					   // receive success status
					
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{			
					
						int output = cstatement.getInt(3);   //receive output status 
						controlPanelMiscObj.setStatus(output);
						
						if(output ==0){
							System.out.println("Contact Type id inserted/updated"+ContactTypeID);
						}
						else if(output ==10){
							System.out.println("record already exist"+ContactTypeID);
						}
					}
					
					for(int j = 0 ; j < controlPanelMiscObj.getControlPanelMiscList().size(); j++){
						
						controlPanelMiscObj1 = new ControlPanelMisc();
						controlPanelMiscObj1 = controlPanelMiscObj.getControlPanelMiscList().get(j);
						
						if(controlPanelMiscObj1.getAction()==1 && controlPanelMiscObj1.getChecked()==1){
							
							query2="{call insertContactTypeRole(?,?,?,?,?,?,?)}";
							cstatement = con.prepareCall (query2);
														
							cstatement.setDouble(1, ContactTypeID);
							cstatement.setDouble(2, controlPanelMiscObj1.getControlPanelMiscRoleId());
							cstatement.setInt(3, controlPanelMiscObj1.getStatus());
							cstatement.setString(4, reqObj.getUserId());
							cstatement.setString(5, reqObj.getToken());
							cstatement.setInt(6, reqObj.getInsertPermissionID());
							cstatement.setInt(7, status);
						
							cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // receive contact type id
							cstatement.registerOutParameter(2, java.sql.Types.DOUBLE);  // receive role id
							cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // receive output status
							cstatement.registerOutParameter(7, java.sql.Types.INTEGER); // success status
							
							cstatement.execute();
							
							status = cstatement.getInt(7); 
							
							Double CID = cstatement.getDouble(1);
							controlPanelMiscObj1.setControlPanelMiscContactTypeId(CID);
							controlPanelMiscObj1.setRecid(CID);
							
							Double roleID = cstatement.getDouble(2);
							controlPanelMiscObj1.setControlPanelMiscRoleId(roleID);
							controlPanelMiscObj1.setRecid(roleID);
							
							//status = cstatement.getInt(7);
							
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{
								
								int output2 = cstatement.getInt(3);
								controlPanelMiscObj1.setStatus(output2);
								
								if(output2==0){
									System.out.println("role Id:"+roleID+" "+"inserted for contacttype"+" "+ContactTypeID);
								}
								else if(output2==10){
									System.out.println("role id:"+roleID+"  already asign to contact type");
								}
								
								query3 = "{ call insertContactTypeRoleMap(?,?,?,?,?,?,?)}";
								cstatement = con.prepareCall(query3);
								
								cstatement.setDouble(1, ContactTypeID);
								cstatement.setDouble(2,roleID);
								cstatement.setInt(3, controlPanelMiscObj1.getStatus());
								
								cstatement.setString(4, reqObj.getUserId());
								cstatement.setString(5, reqObj.getToken());
								cstatement.setInt(6, reqObj.getInsertPermissionID());
								cstatement.setInt(7, status);
							
								cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // receive contact type id
								cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // receive output status
								cstatement.registerOutParameter(7, java.sql.Types.INTEGER); // success status
								cstatement.execute();
								status = cstatement.getInt(7); 
								
								if(status == 0){
									throw new Exception("User is not Authorized");
								}else if(status == 1){
									throw new Exception("No Permission");
								}else{
									
									int output3 = cstatement.getInt(3);
									controlPanelMiscObj.setStatus(output3);
									
									if(output3 == 0){
										System.out.println("record inserted into userpermission");
									}
									else if(output3==13){
										System.out.println("no userid is associated with that contact type");
									}
									
								}
	
							}
								
						}
						
					}
					
				}
				
				// modify operation
				else if(controlPanelMiscObj.getAction()==1 && controlPanelMiscObj.getControlPanelMiscContactTypeId()!=0){
					
					
					query1 = "{call insertUpdateContactType(?,?,?,?,?,?,?)}";
					cstatement =  con.prepareCall(query1);
					
					cstatement.setDouble(1, controlPanelMiscObj.getControlPanelMiscContactTypeId());
					cstatement.setString(2, controlPanelMiscObj.getControlPanelMiscContactType());
					cstatement.setInt(3, controlPanelMiscObj.getStatus());
					cstatement.setString(4, reqObj.getUserId());
					cstatement.setString(5, reqObj.getToken());
					
					if(controlPanelMiscObj.getControlPanelMiscContactTypeId() == 0){
						
						cstatement.setInt(6, reqObj.getInsertPermissionID());
						
					}else{
						
						cstatement.setInt(6, reqObj.getUpdatePermissionID());
					}
					cstatement.setInt(7, status);	
					cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // output status 
					cstatement.registerOutParameter(7, java.sql.Types.INTEGER);  // success status
					cstatement.execute();
	
					status = cstatement.getInt(7); 
					
					Double ContactTypeID = cstatement.getDouble(1);  // receive contact type id
					controlPanelMiscObj.setControlPanelMiscContactTypeId(ContactTypeID);
					controlPanelMiscObj.setRecid(ContactTypeID);
						
					   // receive success status
					
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{			
					
						int output = cstatement.getInt(3);   //receive output status 
						controlPanelMiscObj.setStatus(output);
						
						if(output ==0){
							System.out.println("Contact Type id inserted/updated"+ContactTypeID);
						}
						else if(output ==10){
							System.out.println("record already exist"+ContactTypeID);
						}
					}
					
					
					
					
					for(int j = 0 ; j < controlPanelMiscObj.getControlPanelMiscList().size(); j++){
						
						controlPanelMiscObj1 = new ControlPanelMisc();
						controlPanelMiscObj1 = controlPanelMiscObj.getControlPanelMiscList().get(j);
						
						if(controlPanelMiscObj1.getAction()==1 && controlPanelMiscObj1.getChecked()==1){
							
							query2="{call insertContactTypeRole(?,?,?,?,?,?,?)}";
							cstatement = con.prepareCall (query2);
														
							cstatement.setDouble(1, controlPanelMiscObj1.getControlPanelMiscContactTypeId());
							cstatement.setDouble(2, controlPanelMiscObj1.getControlPanelMiscRoleId());
							cstatement.setInt(3, controlPanelMiscObj1.getStatus());
						
							cstatement.setString(4, reqObj.getUserId());
							cstatement.setString(5, reqObj.getToken());
							cstatement.setInt(6, reqObj.getInsertPermissionID());
							cstatement.setInt(7, status);
						
							cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // receive contact type id
							cstatement.registerOutParameter(2, java.sql.Types.DOUBLE);  // receive role  id
							cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // receive output status
							cstatement.registerOutParameter(7, java.sql.Types.INTEGER); // success status
							
							cstatement.execute();
							
							status = cstatement.getInt(7); 
							
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{
								
								Double CID = cstatement.getDouble(1);
								controlPanelMiscObj1.setControlPanelMiscContactTypeId(CID);
								controlPanelMiscObj1.setRecid(CID);
								
								Double roleID = cstatement.getDouble(2);
								controlPanelMiscObj1.setControlPanelMiscRoleId(roleID);
								controlPanelMiscObj1.setRecid(roleID);
								
								int output2 = cstatement.getInt(3);
								controlPanelMiscObj1.setStatus(output2);
								if(output2==0){
									System.out.println("role Id:"+roleID+" "+"inserted for contacttype"+" "+CID);
								}
								else if(output2==10){
									System.out.println("role id:"+roleID+"  already asign to contact type");
								}
								
								query3 = "{ call insertContactTypeRoleMap(?,?,?,?,?,?,?)}";
								cstatement = con.prepareCall(query3);
								
								cstatement.setDouble(1, CID);
								cstatement.setDouble(2,roleID);
								cstatement.setInt(3, controlPanelMiscObj1.getStatus());
								cstatement.setString(4, reqObj.getUserId());
								cstatement.setString(5, reqObj.getToken());
								cstatement.setInt(6, reqObj.getInsertPermissionID());
								cstatement.setInt(7, status);
							
								cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // receive contact type id
								cstatement.registerOutParameter(2, java.sql.Types.DOUBLE);  // receive role  id
								cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // receive output status
								cstatement.registerOutParameter(7, java.sql.Types.INTEGER); // success status
								cstatement.execute();
								
								status = cstatement.getInt(7); 
								
								if(status == 0){
									throw new Exception("User is not Authorized");
								}else if(status == 1){
									throw new Exception("No Permission");
								}else{
									
									int output3 = cstatement.getInt(3);
									controlPanelMiscObj1.setStatus(output3);
									
									if(output3 == 0){
										System.out.println("record inserted into userpermission");
									}
									else if(output3==13){
										System.out.println("no userid is associated with that contact type");
									}
									
								}
	
							}
						}	
						
						else if (controlPanelMiscObj1.getAction()==1 && controlPanelMiscObj1.getChecked()==0){
							
							
							query4 = "{call RemoveContactTypeRoleMap(?,?,?,?,?,?,?)}";
							cstatement = con.prepareCall(query4);
							cstatement.setDouble(1, controlPanelMiscObj1.getControlPanelMiscContactTypeId());
							cstatement.setDouble(2, controlPanelMiscObj1.getControlPanelMiscRoleId());
							cstatement.setInt(3, controlPanelMiscObj1.getStatus());
							cstatement.setString(4, reqObj.getUserId());
							cstatement.setString(5, reqObj.getToken());
							cstatement.setInt(6, reqObj.getDeletePermissionID());
							cstatement.setInt(7, status);
						
							cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // receive contact type id
							//cstatement.registerOutParameter(2, java.sql.Types.DOUBLE);  // receive role  id
							cstatement.registerOutParameter(3, java.sql.Types.DOUBLE);  // receive output status
							cstatement.registerOutParameter(7, java.sql.Types.INTEGER); // success status
							cstatement.execute();
							
							status = cstatement.getInt(7); 
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{
								
								Double ContactTypeID1 = cstatement.getDouble(1);	
								controlPanelMiscObj1.setControlPanelMiscContactTypeId(ContactTypeID1);
								controlPanelMiscObj1.setRecid(ContactTypeID1); 
								
								
								int output4 = cstatement.getInt(3);
								controlPanelMiscObj1.setStatus(output4);
								
								if(output4==0){
									System.out.println("You have deleted users and their associated permission for contact type"+ContactTypeID1);
								}
								else if(output4==13){
									System.out.println("record not  found");
								}		
							}
												
						}
						
					}
				}
				else{
					// remove operation when action is 2
					if(controlPanelMiscObj.getAction()==2){
						
						query5="{call removeConctType(?,?,?,?,?,?)}";
						cstatment3 = con.prepareCall(query5);
						cstatment3.setDouble(1, controlPanelMiscObj.getControlPanelMiscContactTypeId());
						cstatment3.setInt(2, controlPanelMiscObj.getStatus());
						cstatment3.setString(3, reqObj.getUserId());
						cstatment3.setString(4, reqObj.getToken());
						cstatment3.setInt(5, reqObj.getDeletePermissionID());
						cstatment3.setInt(6, status);
						cstatment3.registerOutParameter(1, java.sql.Types.DOUBLE);
						cstatment3.registerOutParameter(2, java.sql.Types.INTEGER);
						cstatment3.registerOutParameter(6, java.sql.Types.INTEGER);
						cstatment3.execute();
						
						status = cstatment3.getInt(6); 
						if(status == 0){
							throw new Exception("User is not Authorized");
						}else if(status == 1){
							throw new Exception("No Permission");
						}else{
							
							Double ContactTypeID = cstatment3.getDouble(1);	
							controlPanelMiscObj.setControlPanelMiscContactTypeId(ContactTypeID);
							controlPanelMiscObj.setRecid(ContactTypeID); 
							
							int output3 = cstatment3.getInt(2);
							
							
							if(output3==0){
								System.out.println("You have Deleted contactType for contantTypeId="+ContactTypeID);
								String output ="Successfully Removed...";
								controlPanelMiscObj.setRemoveStatus(output);
								
							}
							else if(output3==12){
								System.out.println("Contact Type is asign to user so canot delete");
								String output ="Unable to Remove...";
								controlPanelMiscObj.setRemoveStatus(output);
								
							}
						}
	
					}
				}	
			}
			
			con.commit();
			con.close();
		
		if(controlPanelMiscObj.getAction()==1){	
			List<ControlPanelMisc> controlPanelMiscList1 = new ArrayList<ControlPanelMisc>();
			
			int size = controlPanelMiscObj.getControlPanelMiscList().size();
			for(int q = 0 ; q < size; q++){
				controlPanelMiscObj3 = controlPanelMiscObj.getControlPanelMiscList().get(q);
				if(controlPanelMiscObj3.getChecked()==1 || controlPanelMiscObj3.getChecked()==2){
					controlPanelMiscList1.add(controlPanelMiscObj3);
				}
			
			}
			
			controlPanelMiscObj.getControlPanelMiscList().clear();
			
			
			for(int q = 0 ; q < controlPanelMiscList1.size(); q++){
				controlPanelMiscObj3 = controlPanelMiscList1.get(q);
				
				controlPanelMiscObj.getControlPanelMiscList().add(controlPanelMiscObj3);
			}
			
			String finalrole = "";
			for(int k = 0 ; k<controlPanelMiscObj.getControlPanelMiscList().size();k++){
				controlPanelMiscObj3 = new ControlPanelMisc();
				controlPanelMiscObj3 = controlPanelMiscObj.getControlPanelMiscList().get(k);
				
				if(controlPanelMiscObj3.getChecked()==2 ){
					//String role1 = controlPanelMiscObj3.getControlPanelMiscDefaultRole();
					String role1 = controlPanelMiscObj3.getControlPanelMiscRole();
					finalrole =	finalrole.concat(role1);
					
					if(k == controlPanelMiscObj.getControlPanelMiscList().size() - 1) {
						finalrole =	finalrole.concat("");
				    }else{
				    	finalrole =	finalrole.concat(",");
				    }
					System.out.println("role----"+role1);
				}
				else if(controlPanelMiscObj3.getChecked()==1 ){
					//String role1 = controlPanelMiscObj3.getControlPanelMiscDefaultRole();
					String role1 = controlPanelMiscObj3.getControlPanelMiscRole();
					finalrole =	finalrole.concat(role1);
					
					if(k == controlPanelMiscObj.getControlPanelMiscList().size() - 1) {
						finalrole =	finalrole.concat("");
				    }else{
				    	finalrole =	finalrole.concat(",");
				    }
					System.out.println("role----"+role1);
				}
			}
			
			int size1 = controlPanelMiscObj.getControlPanelMiscList().size();
			for(int q = 0 ; q < size1; q++){
				
				controlPanelMiscObj3 = controlPanelMiscObj.getControlPanelMiscList().get(q);
				if(controlPanelMiscObj3.getChecked()==1){
					controlPanelMiscObj3.setChecked(0);
				}									
			}
		
			controlPanelMiscObj.setControlPanelMiscDefaultRole(finalrole);
		}
			
			json = util.util_makeJson(controlPanelMiscList);
			
		}catch(Exception e){
			
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
		}
	
	}	
		return json;
		
	}
}
