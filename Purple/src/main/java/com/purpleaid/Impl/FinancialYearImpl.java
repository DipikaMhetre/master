package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.FinancialYear;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.FinancialYear_IF;
//import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class FinancialYearImpl implements FinancialYear_IF{

	@Override
	public String getFinancialYearList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		FinancialYear financialYearObj = null;
		List<FinancialYear> financialYearList = null;
		
		
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			
			query = "{call getFinancialyearList(?,?,?,?)}";
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
				
				financialYearList = new ArrayList<FinancialYear>();
				//financialYearObj = new FinancialYear();
				
				while(rs.next()){
					
					financialYearObj = new FinancialYear();
					financialYearObj.setFinancialYearId(rs.getDouble("ID"));
					financialYearObj.setRecid(rs.getDouble("ID"));
					financialYearObj.setFinancialYearFromYear(rs.getString("FromYear"));
					financialYearObj.setFinancialYearToYear(rs.getString("ToYear"));
					financialYearObj.setFinancialYearFlgLock(rs.getBoolean("FlgLock"));
					financialYearObj.setFinancialYearFlgActive(rs.getBoolean("FlgActive"));
					financialYearObj.setFinancialYearLockRemark(rs.getString("RemarkLock"));
					financialYearObj.setFinancialYearActiveRemark(rs.getString("RemarkActive"));
					financialYearObj.setFinancialYearCreatedOn(rs.getString("CreatedOn"));
					financialYearObj.setFinancialYearCreatedBy(rs.getDouble("CreatedBy"));
					financialYearObj.setFinancialYearCreatedByUserName(rs.getString("CreatedByUserName"));
					financialYearObj.setFinancialYearFreezeCreatedByUserName(rs.getString("CreatedByUserName"));
					financialYearObj.setFinancialYearModifiedOn(rs.getString("ModifiedOn"));
					financialYearObj.setFinancialYearModifiedBy(rs.getDouble("ModifiedBy"));
					financialYearObj.setFinancialYearModifiedByName(rs.getString("ModifiedByUserName"));
					
					financialYearList.add(financialYearObj);	
				}
			}
	
		con.close();
		json = util.util_makeJson(financialYearList);
			
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
	public String setfinancialYear(PurpleaidRequest reqObj) throws Exception {
			
			//Util_json util = null;
			Connection con = null;
			JdbcConnection connectionObj = null;
			CallableStatement cstatement = null;
			String query = null;
			//String query1 = null;
			//ResultSet rs = null;
			String json = null;
			FinancialYear financialYearObj = null;
			int status = 444;
			try{
				
				//util = new Util_json();
				
				connectionObj = new JdbcConnection();
				con = connectionObj.getConnection();
				//con = DataSource.getInstance().getConnection();
				con.setAutoCommit(false);
				
				financialYearObj = new ObjectMapper().readValue(reqObj.getRequestData(),new TypeReference<FinancialYear>() {});
				
					query = "{call updateFinancialYear(?,?,?,?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall(query);
					cstatement.setDouble(1, financialYearObj.getFinancialYearId());
					cstatement.setBoolean(2, financialYearObj.isFinancialYearFlgLock());
					cstatement.setBoolean(3, financialYearObj.isFinancialYearFlgActive());
					cstatement.setString(4, financialYearObj.getFinancialYearLockRemark());
					cstatement.setString(5, financialYearObj.getFinancialYearActiveRemark());
					cstatement.setString(6, reqObj.getUserId());
					cstatement.setString(7, reqObj.getToken());
					cstatement.setInt(8, reqObj.getUpdatePermissionID());
					cstatement.setInt(9,status);
					cstatement.setString(10, financialYearObj.getFinancialYearModifiedByName());
					
					cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
					cstatement.registerOutParameter(9, java.sql.Types.DOUBLE);
					cstatement.registerOutParameter(10, java.sql.Types.DOUBLE);
					
					cstatement.execute();
					
					status = cstatement.getInt(9);
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{
						
						con.commit();
						double FID = cstatement.getDouble(1);
						System.out.println("financial year "+FID+"updated successfully");
						financialYearObj.setRecid(FID);
						
						String s = cstatement.getString(10); 
						financialYearObj.setFinancialYearCreatedByUserName(s);

					/*	query1 = "{call updateResultForFinancialYear(?,?,?,?,?,?)}";
						cstatement = con.prepareCall(query1);
						cstatement.setDouble(1, FID);
						cstatement.setString(2, reqObj.getUserId());
						cstatement.setString(3, reqObj.getToken());
						cstatement.setInt(4, reqObj.getViewPermissionID());
						cstatement.setInt(5,status);
						cstatement.setString(6, financialYearObj.getFinancialYearModifiedByName());
						cstatement.registerOutParameter(6, java.sql.Types.VARCHAR);
						cstatement.registerOutParameter(5, java.sql.Types.DOUBLE);
						rs = cstatement.executeQuery();
						
						status = cstatement.getInt(5);
						
						if(status == 0){
							throw new Exception("User is not Authorized");
						}else if(status == 1){
							throw new Exception("No Permission");
						}else{
							con.commit();
							String s = cstatement.getString(6); 
							while(rs.next()){
								
								financialYearObj = new FinancialYear();
								financialYearObj.setFinancialYearModifiedOn(rs.getString("ModifiedOn"));
								financialYearObj.setFinancialYearModifiedBy(rs.getDouble("ModifiedBy"));
								financialYearObj.setFinancialYearModifiedByName(rs.getString("ModifiedByUserName"));
								//financialYearList.add(financialYearObj);	
							}
							
							financialYearObj.setFinancialYearModifiedByName(s);
							
							
						}*/
					}		
					
			con.commit();
			con.close();
			
			json = new ObjectMapper().writeValueAsString(financialYearObj);
						
				
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