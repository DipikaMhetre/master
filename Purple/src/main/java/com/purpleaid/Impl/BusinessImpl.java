package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Business;
import com.purpleaid.beans.BusinessLicences;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Business_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class BusinessImpl implements Business_IF{

	@Override
	public String bl_getBusinessDetails(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;

		try{
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			 
			List<Business> businessList = new ArrayList<Business>();
			query = "{call getBusinessDetails(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();
			status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{    
				
				double loopBusinessID = 0;
				Business businessObj = new Business();
			    List<BusinessLicences> licenceList = new ArrayList<BusinessLicences>();
	
				while(rs.next()){
	
				if 	(loopBusinessID != rs.getDouble("ID")){
					
					businessObj = new Business();
					licenceList = new ArrayList<BusinessLicences>();
	
					businessObj.setBusinessId(rs.getDouble("ID"));
					businessObj.setRecid(rs.getDouble("ID"));
					businessObj.setBusinessName(rs.getString("BusinessName"));
					businessObj.setBusinessDescription(rs.getString("BusinessDescription"));
					businessObj.setBusinessEdeCode(rs.getString("EdeCode"));
					businessObj.setBusinessCode(rs.getString("Code"));
					businessObj.setBusinessAddressLine1(rs.getString("AddressLine1"));
					businessObj.setBusinessAddressline2(rs.getString("AddressLine2"));
					businessObj.setBusinessCity(rs.getString("City"));
					businessObj.setBusinessState(rs.getString("State"));
					businessObj.setBusinessPincode(rs.getInt("Pincode"));
					businessObj.setBusinessContactperson(rs.getString("BusinessContactPerson"));
					businessObj.setBusinessLandline(rs.getString("BusinessLandline"));
					businessObj.setBusinessMobile(rs.getString("BusinessMobile"));
					businessObj.setBusinessFax(rs.getInt("BusinessFax"));
					businessObj.setBusinessEmail(rs.getString("BusinessEmail"));
					businessObj.setBusinessOwnerContactPerson(rs.getString("OwnerContactperson"));
					businessObj.setBusinessOwnerLandline(rs.getString("OwnerLandlineNumber"));
					businessObj.setBusinessOwnerMobile(rs.getString("OwnermobileNumber"));
					businessObj.setBusinessOwnerFax(rs.getInt("OwnerFaxNumber"));
					businessObj.setBusinessOwnerEmail(rs.getString("Owneremail"));
					businessObj.setBusinessFlgHideOwner(rs.getInt("FlgHideOwner"));
					businessObj.setBusinessFlgHideLicence(rs.getInt("FlgHideLicence"));
					//BusinessList.add(businessObj);
					
					//business license
				 	BusinessLicences licenceObj = new BusinessLicences();
				 	licenceObj.setBusinessId(rs.getDouble("ID"));
				 	licenceObj.setBusinessLicenceId(rs.getDouble("BusinesslicenceID"));
					licenceObj.setRecid(rs.getDouble("BusinesslicenceID"));
					licenceObj.setBusinessLicenceType(rs.getInt("licenceType"));
					licenceObj.setBusinessLicenceTypeName(rs.getString("licenceName"));
					licenceObj.setBusinessLicenceNumber(rs.getDouble("LicenceNumber"));
					licenceObj.setBusinessLicenceStartdate(rs.getString("BusinessLicenceStartDate"));
					licenceObj.setBusinessLicenceEndDate(rs.getString("BusinessLicenceEndDate"));
					
					licenceList.add(licenceObj);
					businessObj.setBusinessLicenceList(licenceList); 
					//businessList.add(businessObj);
					    			
	        		double output = licenceObj.getBusinessLicenceId();
	    		    if(output != 0)
	        		{
	    		    	businessObj.setBusinessLicenceList(licenceList);  
	    		    	businessList.add(businessObj);
	    		    	//businessList.add(businessObj);
	    		   	}else{
	    		   		licenceList.add(licenceObj);	
	    		   		businessObj.setBusinessLicenceList(licenceList);    
	    		   		businessList.add(businessObj);
	    		    }
					}else{ // same business ID
						//business license
						
						//licenceList = new ArrayList<BusinessLicences>();
						BusinessLicences licenceObj = new BusinessLicences();
						
					 	licenceObj.setBusinessId(rs.getDouble("ID"));
					 	licenceObj.setBusinessLicenceId(rs.getDouble("BusinesslicenceID"));
						licenceObj.setRecid(rs.getDouble("BusinesslicenceID"));
						licenceObj.setBusinessLicenceType(rs.getInt("licenceType"));
						licenceObj.setBusinessLicenceTypeName(rs.getString("licenceName"));
						licenceObj.setBusinessLicenceNumber(rs.getDouble("LicenceNumber"));
						licenceObj.setBusinessLicenceStartdate(rs.getString("BusinessLicenceStartDate"));
						licenceObj.setBusinessLicenceEndDate(rs.getString("BusinessLicenceEndDate"));
		
						licenceList.add(licenceObj);
						businessObj.setBusinessLicenceList(licenceList);  
						//businessList.add(businessObj);
	    		    }
				// End loopCusID
		    		
				loopBusinessID = rs.getDouble("ID"); 
				}
			} 
			json = util.util_makeJson(businessList);
			
		}catch(Exception e){
			
			try {	
				con.close();
				throw new Exception("\nError 10000101: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000101: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 10000101: "+e.getMessage());
				}
			}
			
			
		}
		return json;
	}

	@Override
	public String bl_setBusinessDetails(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		String query = null;
		String query1 = null;
		String json = null;
		int status = 444;
		Business businessObj = null;
		try{
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			con.setAutoCommit(false);
			businessObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Business>() {});		
		
			query = "{call InsertUpdateBusinessDetails (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, businessObj.getBusinessId());
			cstatement.setString(2, businessObj.getBusinessName());
			cstatement.setString(3, businessObj.getBusinessDescription());
			cstatement.setString(4, businessObj.getBusinessEdeCode());
			cstatement.setString(5, businessObj.getBusinessCode());
			cstatement.setString(6, businessObj.getBusinessAddressLine1());
			cstatement.setString(7, businessObj.getBusinessAddressline2());
			cstatement.setString(8, businessObj.getBusinessCity());
			cstatement.setInt(9, businessObj.getBusinessPincode());
			cstatement.setString(10, businessObj.getBusinessContactperson());
			cstatement.setString(11, businessObj.getBusinessLandline());
			cstatement.setString(12, businessObj.getBusinessMobile());
			cstatement.setInt(13, businessObj.getBusinessFax());
			cstatement.setString(14, businessObj.getBusinessEmail());
			cstatement.setInt(15, businessObj.getBusinessFlgHideOwner());
			cstatement.setInt(16, businessObj.getBusinessFlgHideLicence());
			cstatement.setString(17, businessObj.getBusinessOwnerContactPerson());
			cstatement.setString(18, businessObj.getBusinessOwnerLandline());
			cstatement.setString(19, businessObj.getBusinessOwnerMobile());
			cstatement.setInt(20, businessObj.getBusinessOwnerFax());
			cstatement.setString(21, businessObj.getBusinessOwnerEmail());
			cstatement.setString(22,reqObj.getUserId());
			cstatement.setString(23, reqObj.getToken());
			
			if(businessObj.getBusinessId() == 0){
			
				cstatement.setInt(24, reqObj.getInsertPermissionID());
			
			}else{
				
				cstatement.setInt(24, reqObj.getInsertPermissionID());
			}
			
			cstatement.setInt(25, status);
			cstatement.setDouble(26, reqObj.getStatus());
			
			cstatement.registerOutParameter(1,java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(25, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(26, java.sql.Types.DOUBLE);
			cstatement.execute();
			
			double output = cstatement.getDouble(1);
			
			
			status = cstatement.getInt(25);
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{
			
				int response = cstatement.getInt(26);
				if(response == 0){
					System.out.println("Business Details inserted");
					businessObj.setBusinessId(output);
				}else{
					System.out.println("Business Details Updated");
					businessObj.setBusinessId(output);
					con.commit();
				}
				
				//con.commit();
				
				
				int ListSize = businessObj.getBusinessLicenceList().size();
				
				for(int i = 0 ; i< ListSize;i++){
					
					BusinessLicences businessLicenceObj = new BusinessLicences();
					businessLicenceObj = businessObj.getBusinessLicenceList().get(i);
					
					if(businessLicenceObj.getBusinessLicenceAction()== 1 || businessLicenceObj.getBusinessLicenceAction()== 2){
						
						query = "{call insertUpdateBusinessLicence(?,?,?,?,?,?,?,?,?,?,?,?)}";
						cstatement = con.prepareCall (query);
						
					    cstatement.setDouble(1,businessLicenceObj.getBusinessLicenceId());
						cstatement.setDouble(2, businessObj.getBusinessId());
						cstatement.setInt(3, businessLicenceObj.getBusinessLicenceType());
						cstatement.setString(4, businessLicenceObj.getBusinessLicenceTypeName());
						cstatement.setDouble(5, businessLicenceObj.getBusinessLicenceNumber());
						cstatement.setString(6, businessLicenceObj.getBusinessLicenceStartdate());
						cstatement.setString(7, businessLicenceObj.getBusinessLicenceEndDate());
						cstatement.setString(8, reqObj.getUserId());
						cstatement.setString(9, reqObj.getToken());
						
						if(businessLicenceObj.getBusinessLicenceId() == 0){
							
							cstatement.setInt(10, reqObj.getInsertPermissionID());
						}else{
							
							cstatement.setInt(10,reqObj.getInsertPermissionID());
						}
						
						cstatement.setInt(11, status);
						cstatement.setDouble(12, reqObj.getStatus());
						
						cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
						cstatement.registerOutParameter(11, java.sql.Types.INTEGER);
						cstatement.registerOutParameter(12, java.sql.Types.INTEGER);
						cstatement.execute();
						
						double BLID = cstatement.getDouble(1);
						status = cstatement.getInt(11);
						
						if(status == 0){
							throw new Exception("User is not Authorized");
						}else if(status == 1){
							throw new Exception("No Permission");
						}else{
							con.commit();
							double BLoutput = cstatement.getDouble(12);
							if(BLoutput == 0){
								System.out.println("Business Licence inserted");
								businessLicenceObj.setBusinessLicenceId(BLID);
								businessLicenceObj.setRecid(BLID);
								
							}else if(BLoutput == 1){
								con.commit();
								System.out.println("Business Licence updated");
								businessLicenceObj.setBusinessLicenceId(BLID);
								businessLicenceObj.setRecid(BLID);
							}
							
						}
					}else{
						
						if(businessLicenceObj.getBusinessLicenceAction()==3){
							
							query1 = "{call removeBusinessLicence(?,?,?,?,?)}";
							cstatement1 = con.prepareCall(query1);
							cstatement1.setDouble(1, businessLicenceObj.getBusinessLicenceId());
							cstatement1.setString(2, reqObj.getUserId());
							cstatement1.setString(3, reqObj.getToken());
							cstatement1.setInt(4, reqObj.getViewPermissionID());
							cstatement1.setInt(5, status);
							cstatement1.registerOutParameter(5, java.sql.Types.INTEGER);
							cstatement1.execute();
							
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{
								System.out.println("Business Licence Removed Successfully");
								con.commit();
							}
							
						}
		
					}		
					
				}
			}
			
			con.commit();
			con.close();
			
		json = util.util_makeJson(businessObj);
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

	/*@Override
	public String bl_setBusinessLicence(PurpleaidRequest reqObj) throws Exception {

		
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String query1 = null;
		String json = null;
		int status = 444;
		
		BusinessLicences businessLicenceObj = null;
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			con.setAutoCommit(false);
			businessLicenceObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<BusinessLicences>() {});		
		
			if(reqObj.getAction()==1){
				
				query = "{call insertUpdateBusinessLicence (?,?,?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall (query);
				cstatement.setDouble(1,businessLicenceObj.getBusinessLicenceId());
				cstatement.setDouble(2, businessLicenceObj.getBusinessId());
				cstatement.setInt(3, businessLicenceObj.getBusinessLicenceIndex());
				cstatement.setInt(4, businessLicenceObj.getBusinessLicenceType());
				cstatement.setString(5, businessLicenceObj.getBusinessLicenceTypeName());
				cstatement.setDouble(6, businessLicenceObj.getBusinessLicenceNumber());
				cstatement.setString(7, businessLicenceObj.getBusinessLicenceStartdate());
				cstatement.setString(8, businessLicenceObj.getBusinessLicenceEndDate());
				cstatement.setString(9, reqObj.getUserId());
				cstatement.setString(10, reqObj.getToken());
				cstatement.setInt(11, reqObj.getInsertPermissionID());
				cstatement.setInt(12,reqObj.getUpdatePermissionID());
				cstatement.setInt(13, status);
				cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
				cstatement.registerOutParameter(13, java.sql.Types.INTEGER);
				cstatement.execute();
				
				double BLID = cstatement.getDouble(1);
				status = cstatement.getInt(13);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
				
					System.out.println("Business Licence inserted/updated");
					businessLicenceObj.setBusinessLicenceId(BLID);
					businessLicenceObj.setRecid(BLID);
					con.commit();
				}
	
			}else{
				
				query1 = "{call removeBusinessLicence(?,?,?,?,?)}";
				cstatement = con.prepareCall(query1);
				cstatement.setDouble(1, businessLicenceObj.getBusinessLicenceId());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				cstatement.setInt(4, reqObj.getDeletePermissionID());
				cstatement.setInt(5, status);
				cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
				cstatement.execute();
				
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					System.out.println("Business Licence Removed Successfully");
					con.commit();
				}

			}
					
		json = util.util_makeJson(businessLicenceObj);
		
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
*/
	@Override
	public String bl_getLicenceList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		
		List<BusinessLicences> businessLicenceList = null;
		
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			
			query = "{call getBusinessLicenceList(?,?,?,?)}";
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
				
				businessLicenceList = new ArrayList<BusinessLicences>();
				BusinessLicences businessLicenceObj = new BusinessLicences();
				while(rs.next()){
					
					 businessLicenceObj = new BusinessLicences();
					businessLicenceObj.setBusinessLicenceType(rs.getInt("licenceType"));
					businessLicenceObj.setRecid(rs.getInt("licenceType"));
					businessLicenceObj.setBusinessLicenceTypeName(rs.getString("licenceName"));
					
					businessLicenceList.add(businessLicenceObj);
					
					}
				}
				
			
			json = util.util_makeJson(businessLicenceList);
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
