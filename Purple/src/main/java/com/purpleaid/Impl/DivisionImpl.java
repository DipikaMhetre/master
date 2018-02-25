package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Division;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Division_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class DivisionImpl implements Division_IF {

	@Override
	public String bl_getDivision(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllDivisionList(PurpleaidRequest reqObj) throws Exception {
	     Util_json util = null;
	     String json = null;
	     int status =444;
	     List<Division> divisionList = new ArrayList<Division>();
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
	     
	      query="{call getAllDivisionList(?,?,?,?)}";
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
	      
			      // retrieve value    
			       while(rs.next()){
				       Division divObj = new Division();
				       divObj.setDivisionId(rs.getDouble("ID"));
				       divObj.setRecid(rs.getDouble("ID"));
				       divObj.setDivisionCompanyId(rs.getDouble("CID"));
				       divObj.setDivisionCode(rs.getString("Code"));
				       divObj.setDivisionName(rs.getString("Name"));
				       divObj.setDivisionRemark(rs.getString("Remark"));
				       divObj.setDivisionContactName(rs.getString("ContactPerson"));
				       divObj.setDivisionContactPhone(rs.getDouble("Phone"));
				       divObj.setDivisionContactEmail(rs.getString("Email"));
				       divObj.setDivisionCompanyName(rs.getString("divisionCompanyName"));
				       if(rs.getInt("flgActive")==1){
				    	   divObj.setDivisionActiveFlag(true);
				       }else{
				    	   divObj.setDivisionActiveFlag(false);
				       }
				     
				      
				     divisionList.add(divObj);
			    }      
			}
	      json = util.util_makeJson(divisionList);
	     
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
	public String bl_setDivision(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		CallableStatement cstatement = null;
		Division Obj;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Division>() {});	
			query = "{call InsertUpdateDivisionMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
		    cstatement.setDouble(1, Obj.getDivisionId());
		    cstatement.setDouble(2, Obj.getDivisionCompanyId());
		    cstatement.setString(3, Obj.getDivisionCode());
		    cstatement.setString(4, Obj.getDivisionName());
		    cstatement.setString(5, Obj.getDivisionRemark());
		    cstatement.setString(6, Obj.getDivisionContactName());
		    cstatement.setDouble(7, Obj.getDivisionContactPhone());
		    cstatement.setString(8, Obj.getDivisionContactEmail());
		    cstatement.setBoolean(9, Obj.isDivisionActiveFlag());
		    cstatement.setString(10, reqObj.getUserId());
		    cstatement.setString(11, reqObj.getToken());
		    cstatement.setInt(12, reqObj.getInsertPermissionID());
		    cstatement.setInt(13, reqObj.getUpdatePermissionID());
		    cstatement.setInt(14, reqObj.getDeletePermissionID());
		    cstatement.setDouble(15, status);
	 
		    cstatement.registerOutParameter(1, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(15, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			output = cstatement.getInt(1);
			status = cstatement.getInt(15);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				Obj.setDivisionId(output);
				System.out.println("companyId in insert update"+output);			
				con.commit();
			}
			
			json = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
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
		return json;
	}

	@Override
	public String bl_setDivisionList(PurpleaidRequest reqObj) throws Exception {
		String json=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Division> ObjList = null;
		int status =444;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Division>>() {});	
			
			query = "{call updateDivisionLockSmith (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Division Obj = new Division();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isDivisionActiveFlag());
				cstatement.setString(3, reqObj.getUserId());
			    cstatement.setString(4, reqObj.getToken());
			    cstatement.setInt(5, reqObj.getUpdatePermissionID());
			    cstatement.setDouble(6, status);
			    cstatement.registerOutParameter(6, java.sql.Types.INTEGER); 
				cstatement.execute();	
		        status = cstatement.getInt(6);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
				
					con.commit();
				}
			}
			
			
			
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 60000102: "+e.getMessage()+"->"+status);
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
		return json;
	}

}
