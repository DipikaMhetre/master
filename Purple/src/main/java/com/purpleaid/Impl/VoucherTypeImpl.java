package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.VoucherType;
import com.purpleaid.interfaces.VoucherType_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.Util_json;

import org.codehaus.jackson.type.TypeReference;

public class VoucherTypeImpl implements VoucherType_IF {

	@Override
	public String bl_getVoucherTypeList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		Connection con = null;
		ResultSet rs = null;
		String query = null;
		String json = null;
		CallableStatement cstatement;
		int status = 444;
		List<VoucherType> VoucherTypeList = null;
		
		try{
			
			util = new Util_json();
			con = DataSource.getInstance().getConnection();
			
			query = "{call getAllVoucherTypes(?,?,?,?)}";
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
				
				VoucherTypeList = new ArrayList<VoucherType>();
				VoucherType voucherObj = new VoucherType();
				
				while(rs.next()){
	
					
					voucherObj = new VoucherType();
					voucherObj.setVoucherTypeId(rs.getDouble("voucherTypeID"));
					
					voucherObj.setVoucherTypeName(rs.getString("VoucherType"));
					voucherObj.setVoucherTypeNarrationId(rs.getDouble("NarrationID"));
					voucherObj.setRecid(rs.getDouble("NarrationID"));
					voucherObj.setVoucherTypeNarration(rs.getString("Narration"));
					VoucherTypeList.add(voucherObj);	
				}
			}
			
		con.close();
		json = util.util_makeJson(VoucherTypeList);
			
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
	public String bl_getNarrationlist(PurpleaidRequest reqObj) throws Exception {
	
		Util_json util = null;
		Connection con = null;
		ResultSet rs = null;
		String query = null;
		String json = null;
		CallableStatement cstatement;
		int status = 444;
		List<VoucherType> narrationList = null;
		
		try{
			
			util = new Util_json();
			con = DataSource.getInstance().getConnection();
			query = "{call getNarrationList(?,?,?,?)}";
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
				
				narrationList = new ArrayList<VoucherType>();
				VoucherType voucherObj1 = new VoucherType();
				
				while(rs.next()){
					
					voucherObj1 = new VoucherType();
					voucherObj1.setVoucherTypeNarrationId(rs.getDouble("narrationID"));
					voucherObj1.setRecid(rs.getDouble("narrationID"));
					voucherObj1.setVoucherTypeNarration(rs.getString("Narration"));
					
					narrationList.add(voucherObj1);	
				}
			}
		con.close();
		json = util.util_makeJson(narrationList);
			
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
	public String bl_setVoucherType(PurpleaidRequest reqObj) throws Exception {
		
		//Util_json util = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String query2 = null;
		String json = null;
		VoucherType voucherObj = null;
		int status = 444;
		try{
			
			//util = new Util_json();
			con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			
			voucherObj = new ObjectMapper().readValue(reqObj.getRequestData(),new TypeReference<VoucherType>() {});
			
			if(voucherObj.getAction()==1){
				
				double vid = voucherObj.getVoucherTypeId();
				//vid = voucherObj.setVoucherTypeId(vid);
				query = "{call insertUpdateVoucherType(?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query);
				cstatement.setDouble(1, vid);
				//cstatement.setDouble(1, voucherObj.getVoucherTypeId());
				cstatement.setString(2, voucherObj.getVoucherTypeName());
				cstatement.setDouble(3, voucherObj.getVoucherTypeNarrationId());
				cstatement.setString(4, voucherObj.getVoucherTypeNarration());
				
				cstatement.setInt(5, voucherObj.getStatus());
				cstatement.setString(6, reqObj.getUserId());
				cstatement.setString(7, reqObj.getToken());
				
				if(voucherObj.getVoucherTypeNarrationId() == 0){
					
					cstatement.setInt(8, reqObj.getInsertPermissionID());
				}
				else{
					cstatement.setInt(8, reqObj.getUpdatePermissionID());
				}
		
				cstatement.setInt(9, status);
				cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  // voucher id
				cstatement.registerOutParameter(3, java.sql.Types.INTEGER); // narration id
				cstatement.registerOutParameter(5, java.sql.Types.INTEGER); // output status
				cstatement.registerOutParameter(9, java.sql.Types.INTEGER);
				cstatement.execute();
				
				status = cstatement.getInt(9);
				
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					double NID = cstatement.getDouble(3);
					System.out.println("Voucher type inserted/updated successfully");
					
					int output = cstatement.getInt(5);
					if(output==0){
						String output1 = "record inserted/updated successfully..";
						voucherObj.setOutputStatus(output1);
						voucherObj.setRecid(NID);
					}
					else if(output==2){
						voucherObj.setRecid(NID);
					}
					voucherObj.setRecid(NID);
				}	
			}
			else{
				
				query2 = "{call removeVoucher(?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query2);
				cstatement.setDouble(1, voucherObj.getVoucherTypeId());
				cstatement.setDouble(2, voucherObj.getVoucherTypeNarrationId());
				cstatement.setInt(3, voucherObj.getStatus());
				cstatement.setString(4, reqObj.getUserId());
				cstatement.setString(5, reqObj.getToken());
				cstatement.setInt(6, reqObj.getDeletePermissionID());
				cstatement.setInt(7, status);
				cstatement.registerOutParameter(3, java.sql.Types.INTEGER);
				cstatement.execute();
				
				status = cstatement.getInt(7);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					int output = cstatement.getInt(3);
					
					if(output==0){
						
						String output1 ="Successfully Removed...";
						voucherObj.setOutputStatus(output1);
					}
				}			
			}
				
			con.commit();
			con.close();
			
			json = new ObjectMapper().writeValueAsString(voucherObj);
					
			
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
