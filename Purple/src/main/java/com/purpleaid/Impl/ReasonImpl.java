package com.purpleaid.Impl;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Reason;
import com.purpleaid.interfaces.Reason_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

public class ReasonImpl implements Reason_IF{

	
	public String bl_getAllReason(PurpleaidRequest reqObj) throws Exception {
	
		Util_json util = null;
		Connection con = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		List<Reason> ReasonList = null;;
		Reason reasonObj = null;
		CallableStatement cstatement = null;
		int status = 444;
		try
		{
			util = new Util_json();
			con = DataSource.getInstance().getConnection();
			query ="{call getAllReasons(?,?,?,?)}";	// retrieves all record
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
				
				ReasonList = new ArrayList<Reason>();
				while(rs.next()){
					
					reasonObj = new Reason();
					reasonObj.setReasonID(rs.getDouble("ID"));
					reasonObj.setRecid(rs.getDouble("ID"));
					reasonObj.setReasonReason(rs.getString("Reason"));
					reasonObj.setReasonSystemValueFlag(rs.getBoolean("flgSystemValue"));
					reasonObj.setReasonReturnFlag(rs.getBoolean("flgReturn"));
					reasonObj.setReasonCreditNoteFlag(rs.getBoolean("flgCreditNote"));
					reasonObj.setReasonDebitNoteFlag(rs.getBoolean("flgDebitNote"));
					//reasonObj.setReasonFlagActive(rs.getBoolean("flgActive"));
					ReasonList.add(reasonObj);
				}
			}

			con.close();
			json = util.util_makeJson(ReasonList);
			
			
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

	@Override
	public String bl_getReasonList(PurpleaidRequest reqObj) throws Exception {
		  Util_json util = null;
		  Connection con = null;
		  String query = null;
		  String json = null;
		  ResultSet rs = null;
		  List<Reason> ReasonList1 = null;;
		  Reason reasonObj1 = null;
		  CallableStatement cstatement = null;
		  int status = 444;
		  try
		  {
		   util = new Util_json();
		   con = DataSource.getInstance().getConnection();
		   
		   query ="{call ReasonList(?,?,?,?)}"; // retrieves all record
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
				
			   ReasonList1 = new ArrayList<Reason>();
				  
			   while(rs.next()){
			    
			    reasonObj1 = new Reason();
			    reasonObj1.setReasonID(rs.getDouble("reasonID"));
			    reasonObj1.setReasonReason(rs.getString("ReasonName"));
			    reasonObj1.setReasonSystemValueFlag(rs.getBoolean("systemFlag"));
			    ReasonList1.add(reasonObj1);
			   }
			}
	
		   con.close();
		   json = util.util_makeJson(ReasonList1);
		   
		   
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
	
	@Override
	public String bl_setReason(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query1 = null;
		String query2 = null;
		String output = null;
		int status = 444;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		Reason reasonObj = null;
		
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			reasonObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Reason>() {});
			
			if(reasonObj.getAction() == 1){
			query1 = "{call insertUpdateReason(?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query1);
			
			cstatement.setDouble(1, reasonObj.getReasonID());
			cstatement.setString(2, reasonObj.getReasonReason());
			cstatement.setBoolean(3, reasonObj.isReasonReturnFlag());
			cstatement.setBoolean(4, reasonObj.isReasonCreditNoteFlag());
			cstatement.setBoolean(5, reasonObj.isReasonDebitNoteFlag());
			cstatement.setInt(6, reasonObj.getStatus());
			cstatement.setString(7, reqObj.getUserId());
			cstatement.setString(8, reqObj.getToken());
			
			if(reasonObj.getReasonID() == 0){
				cstatement.setInt(9, reqObj.getInsertPermissionID());
			}
			else{
				cstatement.setInt(9, reqObj.getUpdatePermissionID());
			}
			
			cstatement.setInt(10, status);
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // reason id
			cstatement.registerOutParameter(6, java.sql.Types.INTEGER);  // output status
			cstatement.registerOutParameter(10, java.sql.Types.INTEGER); // success status
			cstatement.execute();
			
			status = cstatement.getInt(10);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{
				
				Double RID = cstatement.getDouble(1);
				reasonObj.setReasonID(RID);
				
				int output1 = cstatement.getInt(6);
				reasonObj.setStatus(output1);
				
					if(output1==0){
						//double output = cstatement.getDouble(1);
						System.out.println("reason inserted/Updated !!!"+RID);
						reasonObj.setReasonID(RID);
						reasonObj.setRecid(RID);
					}
					else if(output1==10){
						 output ="Reason already exist..";
						reasonObj.setOutputStatus(output);
						//System.out.println("Reason already exist.");
					}
					else if(output1==11){
						 output ="cannot update System Reason..";
						reasonObj.setOutputStatus(output);
						//System.out.println("cannot update System Reason");
					}
					else if(output1==12){
						 output ="Reason is in use, cannot be updated..";
						reasonObj.setOutputStatus(output);
						//System.out.println("Reason is in use, cannot be updated");
					}
					else if(output1==13){
						output ="cannot update  as record not found (possibly deleted by other user)..";
						reasonObj.setOutputStatus(output);
						//System.out.println("cannot update  as record not found (possibly deleted by other user)");
					}	
				}
			}
			else{
				
				query2="{call removeReason(?,?,?,?,?,?)}";
				cstatement1 = con.prepareCall(query2);
				
				cstatement1.setDouble(1, reasonObj.getReasonID());
				cstatement1.setInt(2, reasonObj.getStatus());
				cstatement1.setString(3, reqObj.getUserId());
				cstatement1.setString(4, reqObj.getToken());
				cstatement1.setInt(5, reqObj.getDeletePermissionID());
				cstatement1.setInt(6, status);
				
				cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE);  // reason id
				cstatement1.registerOutParameter(2, java.sql.Types.INTEGER); // output status
				cstatement1.registerOutParameter(6, java.sql.Types.INTEGER); //success status
				cstatement1.execute();
				
				status = cstatement1.getInt(6);
				
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					double RID1 = cstatement1.getDouble(1);
					reasonObj.setReasonID(RID1);
					
					int output2 = cstatement1.getInt(2);
					reasonObj.setStatus(output2);
					if(output2==0){
						 output ="reason deleted !!!..";
							reasonObj.setOutputStatus(output);
						
						//System.out.println("reason deleted !!!"+RID1);
						reasonObj.setReasonID(output2);
						reasonObj.setRecid(output2);
						//reasonObj.setReasonFlagActive(false);
					}
					else if(output2==11){
						output ="cannot Remove System Reason..";
						reasonObj.setOutputStatus(output);
						//System.out.println("cannot Remove System Reason");
					}
					else if(output2==12){
						output ="Reason is in use, cannot be deleted..";
						reasonObj.setOutputStatus(output);
						//System.out.println("Reason is in use, cannot be deleted");
					}
					else if(output2==13){
						output ="cannot remove  as record not found (possibly deleted by other user)..";
						reasonObj.setOutputStatus(output);
						//System.out.println("cannot remove  as record not found (possibly deleted by other user)");
					}
				}	
			}
		con.commit();	
		con.close();
		json = util.util_makeJson(reasonObj);
		
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
	public String bl_getReasonListForCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
		Connection con = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		List<Reason> ReasonList = null;;
		Reason reasonObj = null;
		CallableStatement cstatement = null;
		JdbcConnection JdbcConnectionObj = null;
		int status = 444;
		try
		{
			util = new Util_json();
			//con = DataSource.getInstance().getConnection();
			JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
			query ="{call getReasonListForCN(?,?,?,?)}";	// retrieves all record
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
				
				ReasonList = new ArrayList<Reason>();
				while(rs.next()){
					
					reasonObj = new Reason();
					reasonObj.setReasonID(rs.getDouble("ID"));
					reasonObj.setReasonReason(rs.getString("Reason"));
					ReasonList.add(reasonObj);
				}
			}

			con.close();
			json = util.util_makeJson(ReasonList);
			
			
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
