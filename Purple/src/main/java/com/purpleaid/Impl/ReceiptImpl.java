package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Receipt;
import com.purpleaid.interfaces.Receipt_IF;
//import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ReceiptImpl  implements Receipt_IF{

	@Override
	public String bl_getReceiptList(PurpleaidRequest reqObj) throws Exception {

		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		ResultSet rs = null;
		String query = null;
		String json = null;
		int status = 444;
		double loopID = 0;
		CallableStatement cstatement = null;
		List<Receipt> receiptList = null;
		
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			
			query = "{call getSalesmanReceiptList(?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			
			cstatement.setDouble(1, reqObj.getEntityId());
			cstatement.setInt(2, reqObj.getReceiptNo());
			cstatement.setDouble(3, reqObj.getLastID());
			cstatement.setDouble(4, reqObj.getListLimit());
			cstatement.setString(5, reqObj.getUserId());
			cstatement.setString(6, reqObj.getToken());
			cstatement.setInt(7, reqObj.getViewPermissionID());
			cstatement.setInt(8, status);
			
			cstatement.registerOutParameter(8, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();	
			status = cstatement.getInt(8);
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{			

				receiptList = new ArrayList<Receipt>();
				Receipt receiptObj = new Receipt();
				
				while(rs.next()){
					
					if(loopID != rs.getDouble("receiptID")){
						receiptObj = new Receipt();
						receiptObj.setReceiptId(rs.getDouble("receiptID"));
						receiptObj.setRecid(rs.getDouble("receiptID"));
						receiptObj.setReceiptSalesmanId(rs.getDouble("salesmanID"));
						receiptObj.setReceiptSalesmanName(rs.getString("salesmanName"));
						receiptObj.setReceiptDate(rs.getString("ReceiptDate"));
						receiptObj.setReceiptFrom(rs.getInt("ReceiptFrom"));
						receiptObj.setReceiptTo(rs.getInt("ReceiptTo"));
						receiptObj.setReceiptRemark(rs.getString("Remark"));
						receiptObj.setReceiptIssuedById(rs.getDouble("IssuedBy"));
						receiptObj.setReceiptIssuedOn(rs.getString("IssuedOn"));
						receiptObj.setReceiptIssuedByUserName(rs.getString("IssuedByUserName"));
				
						receiptList.add(receiptObj);
					}
					loopID = rs.getDouble("receiptID");
					
					/*if(rs.isLast()){
						loopID = rs.getDouble("receiptID");
					}*/
				}
			}
			
		con.close();
		
		json = "{\"receiptList\":"+util.util_makeJson(receiptList) +",\"lastId\":"+loopID+"}";

			
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
	public String bl_getSalesmanList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		JdbcConnection connectionObj = null;
		ResultSet rs = null;
		String query = null;
		String json = null;
		int status = 444;
		CallableStatement cstatement;
		
		List<Receipt> salesmanList = null;
		
		try{
			
			util = new Util_json();
			
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			//con = DataSource.getInstance().getConnection();
			
			query = "{call getSalesmanList(?,?,?,?)}";
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
				
				salesmanList = new ArrayList<Receipt>();
				Receipt receiptObj1 = new Receipt();
				
				while(rs.next()){
					
					receiptObj1 = new Receipt();
					receiptObj1.setReceiptSalesmanId(rs.getDouble("SalesmanID"));
					receiptObj1.setRecid(rs.getDouble("SalesmanID"));
					receiptObj1.setReceiptSalesmanName(rs.getString("SalesmanName"));
				
					salesmanList.add(receiptObj1);	
				}
			}
		con.close();
		json = util.util_makeJson(salesmanList);
			
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
	public String bl_setReceipt(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util= null;
		String json=null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		String query1 = null;
		String query2 = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		int status = 444;
		Receipt receiptObj = null;
		
		try{
			util= new Util_json();
			
			//con=DataSource.getInstance().getConnection();
			
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			con.setAutoCommit(false);
			receiptObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Receipt>() {});
			
			if(receiptObj.getAction() == 1){
			query1 = "{call insertUpdateReceipt(?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query1);
			
			cstatement.setDouble(1, receiptObj.getReceiptId());
			cstatement.setDouble(2,receiptObj.getReceiptSalesmanId());
			cstatement.setInt(3, receiptObj.getReceiptFrom());
			cstatement.setInt(4, receiptObj.getReceiptTo());
			cstatement.setString(5, receiptObj.getReceiptRemark());
			cstatement.setString(6, reqObj.getUserId());
			cstatement.setString(7, reqObj.getToken());
			if(receiptObj.getReceiptId()==0){
				cstatement.setInt(8, reqObj.getInsertPermissionID());
			}else{
				cstatement.setInt(8, reqObj.getUpdatePermissionID());
			}
			cstatement.setString(9, receiptObj.getReceiptSalesmanName());
			cstatement.setInt(10, status);
		
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(9,  java.sql.Types.VARCHAR);// receipt id
			cstatement.registerOutParameter(10, java.sql.Types.INTEGER); // salesman name 
			 //success status
			cstatement.execute();
		
			status = cstatement.getInt(10);
		
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					con.commit();
					Double RID = cstatement.getDouble(1);
					receiptObj.setReceiptId(RID);
					
						String name = cstatement.getString(9);
						System.out.println("receipt inserted/updated"+RID);
						receiptObj.setReceiptId(RID);
						receiptObj.setRecid(RID);
						receiptObj.setReceiptSalesmanName(name);
						
				}
			}
			else{
				
				query2="{call removeReceipt(?,?,?,?,?,?)}";
				cstatement1 = con.prepareCall(query2);
				
				cstatement1.setDouble(1, receiptObj.getReceiptId());
				cstatement1.setString(2, reqObj.getUserId());
				cstatement1.setString(3, reqObj.getToken());
				cstatement1.setInt(4, reqObj.getDeletePermissionID());
				cstatement1.setInt(5, status);
				cstatement1.setInt(6, receiptObj.getStatus()); // output status
				                 // success status
				cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE);
				cstatement1.registerOutParameter(5, java.sql.Types.INTEGER);
				cstatement1.registerOutParameter(6, java.sql.Types.INTEGER);
				cstatement1.execute();
				
				status = cstatement1.getInt(5);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					con.commit();
					double RID1 = cstatement1.getDouble(1);
					receiptObj.setReceiptId(RID1);
					receiptObj.setRecid(RID1);
					
					int output = cstatement1.getInt(6);
					if(output == 0){
						System.out.println("Receipt Removed Successfully");
					}
				}

				/*int output2 = cstatement1.getInt(2);
				receiptObj.setStatus(output2);
				if(output2==0){
					 //output ="receipt deleted !!!.."+RID1;
					 //reasonObj.setOutputStatus(output);
					
				}	*/
			}
		con.commit();	
		con.close();
		json = util.util_makeJson(receiptObj);
		
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

