package com.purpleaid.Impl;


import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.BatchScheme;
import com.purpleaid.beans.BatchSchemeDetails;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.BatchScheme_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class BatchSchemeImpl implements BatchScheme_IF  {

	@Override
	public String bl_getBatchScheme(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		int status =444;	
		 JdbcConnection JdbcConnectionObj = null;
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			CallableStatement cstatement3 = null;
			BatchScheme bsObj = new BatchScheme();
			String query2 = "{call getBatchScheme (?,?,?,?,?)}";
			cstatement3 = con.prepareCall(query2);
			cstatement3.setDouble(1, reqObj.getEntityId() );
			cstatement3.setString(2, reqObj.getUserId());
			cstatement3.setString(3, reqObj.getToken());
			cstatement3.setInt(4, reqObj.getViewPermissionID());
			cstatement3.setDouble(5, status);
			
			cstatement3.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=cstatement3.executeQuery();
			
			 status = cstatement3.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
			
			
				double loopbatchSchemeId =0;
				List<BatchSchemeDetails> bsdList = new ArrayList<BatchSchemeDetails>();
				List<BatchScheme> bsList = new ArrayList<BatchScheme>();
				
				while(rs.next()){
					if(loopbatchSchemeId != rs.getDouble("BID")){
						
						bsObj = new BatchScheme();
						bsdList = new ArrayList<BatchSchemeDetails>();
						
						bsObj.setBatchSchemeId(rs.getDouble("BID"));
						bsObj.setBatchSchemePBAID(rs.getDouble("bPBAID"));
						bsObj.setBatchSchemeStartDate(rs.getString("startDate"));
						bsObj.setBatchSchemeEndDate(rs.getString("endDate"));
						bsObj.setBatchSchemeMinStock(rs.getDouble("minStock"));
						bsObj.setBatchSchemeRemark(rs.getString("remark"));
										
						if(rs.getInt("flgSchemeLock") == 1){
							bsObj.setBatchSchemePBASchemeLockFlag(true);
			    		}else{
			    			bsObj.setBatchSchemePBASchemeLockFlag(false);
			    		}
				    							
						BatchSchemeDetails bsdObj = new BatchSchemeDetails();
						bsdObj.setBatchSchemeDetailsId(rs.getDouble("bsdID"));
						bsdObj.setBatchSchemeDetailsBSID(rs.getDouble("bsdBSID"));
						bsdObj.setBatchSchemeDetailsQuantity(rs.getDouble("bsdQuantity"));
						bsdObj.setBatchSchemeDetailsFree(rs.getDouble("bsdFree"));
						bsdObj.setBatchSchemeDetailsIndex(rs.getDouble("bsdIndex"));
						
						bsdList.add(bsdObj);
						bsObj.setBsdList(bsdList);
						bsList.add(bsObj);
					
					}else{
						
						BatchSchemeDetails bsdObj = new BatchSchemeDetails();
										
						bsdObj.setBatchSchemeDetailsId(rs.getDouble("bsdID"));
						bsdObj.setBatchSchemeDetailsBSID(rs.getDouble("bsdBSID"));
						bsdObj.setBatchSchemeDetailsQuantity(rs.getDouble("bsdQuantity"));
						bsdObj.setBatchSchemeDetailsFree(rs.getDouble("bsdFree"));
						bsdObj.setBatchSchemeDetailsIndex(rs.getDouble("bsdIndex"));
						
						bsdList.add(bsdObj);
						bsObj.setBsdList(bsdList);
					}
					loopbatchSchemeId = rs.getDouble("BID");  //set loopbatchSchemeId for comparison
				}
			}
			json = util.util_makeJson(bsObj);
		} catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
				}

			}
	    }
		
		return json;
	}

	
	@Override
	public String bl_setBatchScheme(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		 JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status =444;
		CallableStatement callableStatement1 = null;		
		BatchScheme Obj = null;
		double batchSchemeid =0;
		//boolean flag = false;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<BatchScheme>() {});
			query = "{call InsertUpdateBatchScheme  (?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
					
			cstatement.setDouble(1, Obj.getBatchSchemeId());
			cstatement.setDouble(2, Obj.getBatchSchemePBAID());
			cstatement.setString(3, Obj.getBatchSchemeStartDate());
			cstatement.setString(4, Obj.getBatchSchemeEndDate());
			cstatement.setDouble(5, Obj.getBatchSchemeMinStock());
			cstatement.setString(6, Obj.getBatchSchemeRemark());
			cstatement.setBoolean(7, Obj.isBatchSchemePBASchemeLockFlag());
			cstatement.setString(8, reqObj.getUserId());
			cstatement.setString(9, reqObj.getToken());
			cstatement.setInt(10, reqObj.getInsertPermissionID());
			cstatement.setInt(11, reqObj.getUpdatePermissionID());
			//cstatement.setInt(12, reqObj.getDeletePermissionID());
			cstatement.setInt(12, status);
			
			cstatement.execute();
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(12, java.sql.Types.INTEGER);
			
			batchSchemeid = cstatement.getDouble(1);
			status= cstatement.getInt(12);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{    
				
				System.out.println("batch Scheme ID saved"+batchSchemeid);
				String query1 = "{call InsertUpdateBatchSchemeDetails (?,?,?,?,?,?,?,?,?)}";
				callableStatement1 = con.prepareCall(query1);
				
				for(int i=0;i<Obj.getBsdList().size();i++){
					BatchSchemeDetails bsdObj = new BatchSchemeDetails();
					bsdObj = Obj.getBsdList().get(i);
					callableStatement1.setDouble(1, bsdObj.getBatchSchemeDetailsId());
					callableStatement1.setDouble(2, batchSchemeid);
					callableStatement1.setDouble(3, bsdObj.getBatchSchemeDetailsQuantity());
					callableStatement1.setDouble(4, bsdObj.getBatchSchemeDetailsFree());
					callableStatement1.setDouble(5, bsdObj.getBatchSchemeDetailsIndex());
					if(bsdObj.getBatchSchemeDetailsQuantity() > 0 && bsdObj.getBatchSchemeDetailsFree() > 0){
						// flag = true;
					}
					
					callableStatement1.setString(6, reqObj.getUserId());
					callableStatement1.setString(7, reqObj.getToken());
					
					
					if(Obj.getBatchSchemeId() == 0){
						callableStatement1.setInt(8, reqObj.getInsertPermissionID());	
					}else{
						callableStatement1.setInt(8, reqObj.getUpdatePermissionID());	
					}
					
					
					callableStatement1.setInt(9, status);
					callableStatement1.registerOutParameter(9, java.sql.Types.INTEGER);
					callableStatement1.execute();
					status= callableStatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{    
					
						con.commit();
					}
									
				}
				
			}
			response = util.util_makeJson(Obj);
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
		return response;
	}

}
