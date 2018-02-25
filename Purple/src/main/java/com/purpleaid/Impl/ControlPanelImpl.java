package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.SystemVariable;
import com.purpleaid.interfaces.ControlPanel_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ControlPanelImpl implements ControlPanel_IF {

	
	@Override
	public String bl_getControlPanelList(PurpleaidRequest reqObj) throws Exception {
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		String json = null;
		String query = null;
		CallableStatement cstatement = null;
		ResultSet rs = null;
		int status = 444;
		List<SystemVariable> systemVartiableList = null;
		List<SystemVariable> systemVartiableSubList = null;
		
		try {

			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			
			query = "{call getAllsystemVariableList(?,?,?,?)}";
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
				systemVartiableList = new ArrayList<SystemVariable>();
				systemVartiableSubList = new ArrayList<SystemVariable>();
				SystemVariable systemVariableObj = new SystemVariable();
				
				while(rs.next()){
					
					if(loopid !=rs.getDouble("CategoryGroupID")){
						
						systemVariableObj = new SystemVariable();
						systemVartiableSubList = new ArrayList<SystemVariable>();
						
						
						systemVariableObj.setSystemVariableGroupId(rs.getDouble("CategoryGroupID"));
						systemVariableObj.setSystemVariableGroup(rs.getString("CategoryGroup"));
						systemVariableObj.setRecid(rs.getDouble("CategoryGroupID"));
						
						SystemVariable systemVariableObj1 = new SystemVariable();	
						systemVariableObj1.setSystemVariableIsSelected(false);
						systemVariableObj1.setSystemVariableId(rs.getDouble("ID"));
						systemVariableObj1.setRecid(rs.getDouble("ID"));
						systemVariableObj1.setSystemVariableName(rs.getString("Name"));
						systemVariableObj1.setSystemVariableGroupId(rs.getDouble("CategoryGroupID"));
						systemVariableObj1.setSystemVariableGroup(rs.getString("CategoryGroup"));
						systemVariableObj1.setSystemVariableDescription(rs.getString("Description"));
						systemVariableObj1.setSystemVariableValue(rs.getString("Value"));
						systemVariableObj1.setSystemVariableUnit(rs.getString("Unit"));
						systemVariableObj1.setSystemVariableDefaultValue(rs.getString("DefaultValue"));
						systemVariableObj1.setSystemVariableValidationType(rs.getInt("ValidationType"));
						systemVariableObj1.setSystemVariableMinimumValue(rs.getInt("MinimumValue"));
						systemVariableObj1.setSystemVariableMaximumVale(rs.getInt("MaximumValue"));
						systemVariableObj1.setSystemVariableValueSet(rs.getInt("ValueSet"));
						systemVariableObj1.setSystemVariableDisplayOrder(rs.getInt("DisplayOrder"));
						systemVariableObj.setSystemVariableIsSelected(true);
						
						systemVartiableSubList.add(systemVariableObj1);
						
						systemVariableObj.setSystemVariableSubList(systemVartiableSubList);
						systemVartiableList.add(systemVariableObj);	
						
					
					}else{
						
						SystemVariable systemVariableObj1 = new SystemVariable();
						systemVariableObj1.setSystemVariableIsSelected(false);
						systemVariableObj1.setSystemVariableId(rs.getDouble("ID"));
						systemVariableObj1.setRecid(rs.getDouble("ID"));
						systemVariableObj1.setSystemVariableName(rs.getString("Name"));
						systemVariableObj1.setSystemVariableGroupId(rs.getDouble("CategoryGroupID"));
						systemVariableObj1.setSystemVariableGroup(rs.getString("CategoryGroup"));
						systemVariableObj1.setSystemVariableDescription(rs.getString("Description"));
						systemVariableObj1.setSystemVariableValue(rs.getString("Value"));
						systemVariableObj1.setSystemVariableUnit(rs.getString("Unit"));
						systemVariableObj1.setSystemVariableDefaultValue(rs.getString("DefaultValue"));
						systemVariableObj1.setSystemVariableValidationType(rs.getInt("ValidationType"));
						systemVariableObj1.setSystemVariableMinimumValue(rs.getInt("MinimumValue"));
						systemVariableObj1.setSystemVariableMaximumVale(rs.getInt("MaximumValue"));
						systemVariableObj1.setSystemVariableValueSet(rs.getInt("ValueSet"));
						systemVariableObj1.setSystemVariableDisplayOrder(rs.getInt("DisplayOrder"));
						
						systemVariableObj.setSystemVariableIsSelected(true);
						systemVartiableSubList.add(systemVariableObj1);
						systemVariableObj.setSystemVariableSubList(systemVartiableSubList);
						
					}
					
					loopid = rs.getDouble("CategoryGroupID");
				}
			}
	
			json = util.util_makeJson(systemVartiableList);
		
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
	public String bl_setControlPanelList(PurpleaidRequest reqObj) throws Exception {
		
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		String json = null;
		String query1 = null;
		int status = 444;
		
		CallableStatement cstatement = null;
		SystemVariable SystemObj = new SystemVariable();
		List<SystemVariable> systemVariableList = null;
		
		try{
			
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			systemVariableList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<SystemVariable>>() {});	

			for(int i=0;i<systemVariableList.size();i++){
				
				SystemObj = new SystemVariable();
				SystemObj = systemVariableList.get(i);
				
				query1 = "{call updateSystemVariable(?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query1);
				
				cstatement.setDouble(1, SystemObj.getRecid());
				cstatement.setString(2,SystemObj.getSystemVariableValue());	
				cstatement.setString(3, reqObj.getUserId());
				cstatement.setString(4, reqObj.getToken());
				cstatement.setInt(5, reqObj.getUpdatePermissionID());
				cstatement.setInt(6, status);
				
			
				cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
				
				cstatement.execute();
				
				status = cstatement.getInt(6);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					con.commit();
				}	
			}
			
			json = new ObjectMapper().writeValueAsString(systemVariableList);
			
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 40000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 40000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 40000102: "+e.getMessage());
				}

			}
		}
		return json;
	}

	@Override
	public String bl_setDefaultList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		String json = null;
		String query1 = null;
		int status = 444;
		CallableStatement cstatement = null;
		List<SystemVariable> systemVariableList = null;
		SystemVariable SystemObj = null;
		
		try{
			
			connectionObj = new JdbcConnection();
			//con = DataSource.getInstance().getConnection();
			con = connectionObj.getConnection();
			con.setAutoCommit(false);
			
			systemVariableList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<SystemVariable>>() {});	
			
			for(int i=0;i<systemVariableList.size();i++){
				
				SystemObj = new SystemVariable();
				SystemObj = systemVariableList.get(i);
				
				query1 = "{call updateSetDefault(?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query1);
				
				cstatement.setDouble(1, SystemObj.getRecid());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				cstatement.setInt(4,reqObj.getUpdatePermissionID());
				cstatement.setInt(5, status);
				cstatement.setDouble(6, reqObj.getStatus());
				
				cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
				cstatement.registerOutParameter(5, java.sql.Types.VARCHAR);
				cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
				
				cstatement.execute();
				
				status = cstatement.getInt(5);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					con.commit();
					double syatemValueID = cstatement.getDouble(1);
					String systemValue = cstatement.getString(6);
					
					SystemObj.setSystemVariableId(syatemValueID);
					SystemObj.setSystemVariableValue(systemValue);
	
				}
			}
			con.commit();
			con.close();
			
			//json = bl_getControlPanelList(reqObj);
			json = new ObjectMapper().writeValueAsString(systemVariableList);
				
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 40000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 40000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 40000102: "+e.getMessage());
				}
			}
		}
		
		return json;
	
	}

}