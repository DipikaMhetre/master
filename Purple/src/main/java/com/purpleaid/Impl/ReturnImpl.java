package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.CompanyClaim;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.ReturnRegister;
import com.purpleaid.beans.ReturnRegisterProduct;
import com.purpleaid.interfaces.Return_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ReturnImpl implements Return_IF {

	@Override
	public String bl_getReturnRegisterDetails(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444 ; 
		Connection con = null;
		ResultSet rs = null;
		JdbcConnection JdbcConnectionObj = null;
		 
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			CallableStatement cstatement = null;
			ReturnRegister rrObj = null;
			String query2 = "{call retreiveRR (?,?,?,?,?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setDouble(1, reqObj.getEntityId() );
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setInt(5, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			status = cstatement.getInt(5);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{				
			
			
		
			    rrObj = new ReturnRegister();
				double loopRRID =0;
				double reccount = 0;
				List<ReturnRegister> rrList = new ArrayList<ReturnRegister>();
				List<ReturnRegisterProduct> rrProductList = new ArrayList<ReturnRegisterProduct>();
				
				
				while(rs.next()){
					if(loopRRID != rs.getDouble("ID")){
						reccount = 1;	
						rrObj = new ReturnRegister();
						rrList = new ArrayList<ReturnRegister>();
						
						rrObj.setReturnRegisterId(rs.getDouble("ID"));
						rrObj.setRecid(rs.getDouble("ID"));
											
						rrObj.setReturnRegisterDate(rs.getString("rrDate"));
						rrObj.setReturnRegisterCustName(rs.getString("custName"));
						rrObj.setReturnRegisterCustId(rs.getDouble("custID"));
						rrObj.setReturnRegisterCreditNoteId(rs.getDouble("creditNoteID")); 
						rrObj.setReturnRegisterRemark(rs.getString("Remark"));
						
						
						if(rs.getInt("RRDcount") > 0){
							if(rs.getInt("RRDcount") == rs.getInt("CCcount")){
								rrObj.setReturnRegisterStatus(3);
								rrObj.setReturnRegisterStatusDescription("Claimed");
							}else{
								rrObj.setReturnRegisterStatus(2);
								rrObj.setReturnRegisterStatusDescription("Partially Claimed");
							}
						}
						
						if(rs.getInt("CCcount") == 0){
							rrObj.setReturnRegisterStatus(1);
							rrObj.setReturnRegisterStatusDescription("New");
						}
						
						
						rrObj.setReturnRegisterTotal(rs.getBigDecimal("Total"));
						rrObj.setReturnRegisterTotalType(rs.getInt("TotalType"));
						rrObj.setReturnRegisterTotalProducts(rs.getDouble("TotalProduct"));
						rrObj.setReturnRegisterType(rs.getDouble("Type"));
						rrObj.setReturnRegisterLockReason(rs.getString("LockReason"));
						rrObj.setReturnRegisterVoidFlag(rs.getBoolean("flgVoid"));
						rrObj.setReturnRegisterLockFlag(rs.getBoolean("flgLock"));
						rrObj.setReturnRegisterVerifiedFlag(rs.getBoolean("flgVerified"));
						rrObj.setReturnRegisterVoidReason(rs.getString("voidReason"));
						
						rrObj.setReturnRegisterVerifiedByID(rs.getDouble("verifiedByID"));
						rrObj.setReturnRegisterVerifiedOn(rs.getString("returnregisterverifiedOn"));
						rrObj.setReturnRegisterVerifiedByName(rs.getString("VerifiedByUserName"));
						
						rrObj.setReturnRegisterCreatedByID(rs.getDouble("CreatedBy"));
						rrObj.setReturnRegisterCreatedOn(rs.getString("returnregistercreatedOn"));
						rrObj.setReturnRegisterCreatedByName(rs.getString("CreatedByUserName"));
						
						
						
						ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
						
						rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
						rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
						rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
						
						if(rs.getDouble("returnregisterdetailsCCID") == 0){
							rrProdObj.setReturnRegisterProductStatus("Registered");
						}else{
							
							String name = "CC#:"; 
							String ccid = rs.getString("CCID");
							name = name.concat(ccid);
							rrProdObj.setReturnRegisterProductStatus(name);
						}
						
						rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
						rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
						rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
						rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
						rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
						rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
						rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
						rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
						rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
						rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
						rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
						rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
						rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
						rrProdObj.setReturnRegisterProductFreeReturn(rs.getDouble("FreeReturn"));
						rrProdObj.setReturnRegisterProductQtyReturn(rs.getDouble("QtyReturn"));
						rrProdObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
						rrProdObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
						rrProdObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
						
						rrProdObj.setReturnRegisterProductConditionName(rs.getString("returnRegisterProductConditionName"));
						rrProdObj.setRecid(reccount);
						
						
						
						double output = rrProdObj.getReturnRegisterProductRRID();
						if(output == 0)
		        		{
							rrObj.setReturnRegisterProductList(rrProductList);
							rrList.add(rrObj);
		    		   	}else{
		    		   		rrProductList.add(rrProdObj);
							rrObj.setReturnRegisterProductList(rrProductList);
							rrList.add(rrObj);
		    		    }
						
						
						/*rrProductList.add(rrProdObj);
						rrObj.setReturnRegisterProductList(rrProductList);
						rrList.add(rrObj);*/
					
					}else{
						reccount = reccount + 1;
						ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
						rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
						rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
						rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
						
						if(rs.getDouble("returnregisterdetailsCCID") == 0){
							rrProdObj.setReturnRegisterProductStatus("Registered");
						}else{
							
							String name = "CC#:"; 
							String ccid = rs.getString("CCID");
							name = name.concat(ccid);
							rrProdObj.setReturnRegisterProductStatus(name);
						}
						rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
						rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
						rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
						rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
						rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
						rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
						rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
						rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
						rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
						rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
						rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
						rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
						rrProdObj.setReturnRegisterProductFreeReturn(rs.getDouble("FreeReturn"));
						rrProdObj.setReturnRegisterProductQtyReturn(rs.getDouble("QtyReturn"));
						rrProdObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
						rrProdObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
						rrProdObj.setReturnRegisterProductConditionName(rs.getString("returnRegisterProductConditionName"));
						rrProdObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
						rrProdObj.setRecid(reccount);
						
						
						rrProductList.add(rrProdObj);
						rrObj.setReturnRegisterProductList(rrProductList);
					}
					
					
					loopRRID = rs.getDouble("ID");  //set loopRRID for comparison
			}
			 if(rrObj.getReturnRegisterId() == 0){
		        throw new Exception("Return Register NOT FOUND!!");		       
		     };
	 
			}
			 json = util.util_makeJson(rrObj);
		} catch (Exception e) {
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
	    	finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
			}
	    }
		
		return json;
	}

	@Override
	public String bl_getAllReturnRegisterList(PurpleaidRequest reqObj )throws Exception {
		Util_json util= null;
		String json=null;
		int status = 444;
		Connection con = null;
		ResultSet rs = null;
		JdbcConnection JdbcConnectionObj = null;
		 
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			CallableStatement cstatement = null;
			ReturnRegister rrObj = null;
			double maxId =0 ;
			List<ReturnRegister> rrList = new ArrayList<ReturnRegister>();
			String query2 = "{call getRRListNew (?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setDouble(1, reqObj.getEntityId());
			cstatement.setDouble(2, reqObj.getLastID());
			cstatement.setInt(3, reqObj.getListLimit());
			cstatement.setString(4, reqObj.getFromDate());
			cstatement.setString(5, reqObj.getToDate());
			cstatement.setDouble(6, reqObj.getCreditNoteId() );
			cstatement.setDouble(7, reqObj.getStatus() );
			cstatement.setDouble(8, reqObj.getFromAmt() );
			cstatement.setDouble(9, reqObj.getToAmt() );
			cstatement.setDouble(10, reqObj.getCreatedByFilterId() );
			cstatement.setString(11, reqObj.getUserId());
            cstatement.setString(12, reqObj.getToken());
            cstatement.setInt(13, reqObj.getViewPermissionID());
          
            cstatement.setDouble(14, status);
            
            cstatement.registerOutParameter(14, java.sql.Types.INTEGER);
              
			cstatement.execute();
			rs=cstatement.executeQuery();
            status  = cstatement.getInt(14);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
		
			
			rrObj = new ReturnRegister();
			double loopRRID =0;
			
			List<ReturnRegisterProduct> rrProductList = new ArrayList<ReturnRegisterProduct>();
			
			double reccount = 0;
			while(rs.next()){
				
				if(loopRRID != rs.getDouble("ID")){
					
					reccount = 1;					
					rrObj = new ReturnRegister();
					rrProductList = new ArrayList<ReturnRegisterProduct>();
					
					rrObj.setReturnRegisterId(rs.getDouble("ID"));
					rrObj.setRecid(rs.getDouble("ID"));
					

			    	if( maxId < rs.getDouble("ID")){
			    		maxId =  rs.getDouble("ID");
			    	}
					
					rrObj.setReturnRegisterDate(rs.getString("rrDate"));
					rrObj.setReturnRegisterCustName(rs.getString("custName"));
					rrObj.setReturnRegisterCustId(rs.getDouble("custID"));
					rrObj.setReturnRegisterCreditNoteId(rs.getDouble("creditNoteID")); 
					rrObj.setReturnRegisterRemark(rs.getString("Remark"));
										
					
					if(rs.getInt("RRDcount") > 0){
						if(rs.getInt("RRDcount") == rs.getInt("CCcount")){
							rrObj.setReturnRegisterStatus(3);
							rrObj.setReturnRegisterStatusDescription("Claimed");
						}else{
							rrObj.setReturnRegisterStatus(2);
							rrObj.setReturnRegisterStatusDescription("Partially Claimed");
						}
					}
					
					if(rs.getInt("CCcount") == 0){
						rrObj.setReturnRegisterStatus(1);
						rrObj.setReturnRegisterStatusDescription("New");
					}
					
					
					rrObj.setReturnRegisterTotal(rs.getBigDecimal("Total"));
					rrObj.setReturnRegisterTotalType(rs.getInt("TotalType"));
					rrObj.setReturnRegisterTotalProducts(rs.getDouble("TotalProduct"));
					rrObj.setReturnRegisterType(rs.getDouble("Type"));
					rrObj.setReturnRegisterLockReason(rs.getString("LockReason"));
					rrObj.setReturnRegisterVoidFlag(rs.getBoolean("flgVoid"));
					rrObj.setReturnRegisterVoidReason(rs.getString("voidReason"));
					rrObj.setReturnRegisterVerifiedFlag(rs.getBoolean("flgVerified"));
					rrObj.setReturnRegisterLockFlag(rs.getBoolean("flgLock"));
					
					rrObj.setReturnRegisterVerifiedByID(rs.getDouble("verifiedByID"));
					rrObj.setReturnRegisterVerifiedOn(rs.getString("returnregisterverifiedOn"));
					rrObj.setReturnRegisterVerifiedByName(rs.getString("VerifiedByUserName"));
					
					rrObj.setReturnRegisterCreatedByID(rs.getDouble("createdBy"));
					rrObj.setReturnRegisterCreatedOn(rs.getString("returnregistercreatedOn"));
					rrObj.setReturnRegisterCreatedByName(rs.getString("CreatedByUserName"));
					
					
					ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
					
					rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
					rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
					rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
					
					if(rs.getDouble("returnregisterdetailsCCID") == 0){
						rrProdObj.setReturnRegisterProductStatus("Registered");
					}else{
						
						String name = "CC#:"; 
						String ccid = rs.getString("CCID");
						name = name.concat(ccid);
						rrProdObj.setReturnRegisterProductStatus(name);
					}
					
					
					
					rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
					rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
					rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
					rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
					rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
					rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
					rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
					rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
					rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
					rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
					rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
					rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
					rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
					rrProdObj.setReturnRegisterProductConditionName(rs.getString("returnRegisterProductConditionName"));		
					//rrProdObj.setRecid(rs.getDouble("returnregisterdetailsID")); 
					rrProdObj.setReturnRegisterProductFreeReturn(rs.getDouble("FreeReturn"));
					rrProdObj.setReturnRegisterProductQtyReturn(rs.getDouble("QtyReturn"));
					rrProdObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
					rrProdObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
					rrProdObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
					rrProdObj.setRecid(reccount);
					
					
					double output = rrProdObj.getReturnRegisterProductRRID();
					if(output == 0)
	        		{
						rrObj.setReturnRegisterProductList(rrProductList);
						rrList.add(rrObj);
	    		   	}else{
	    		   		rrProductList.add(rrProdObj);
						rrObj.setReturnRegisterProductList(rrProductList);
						rrList.add(rrObj);
	    		    }
					
					/*rrProductList.add(rrProdObj);
					rrObj.setReturnRegisterProductList(rrProductList);
					rrList.add(rrObj);*/
				
				}else{
					reccount = reccount + 1;
					
					ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
					rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
					rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
					rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
					
					
					if(rs.getDouble("returnregisterdetailsCCID") == 0){
						rrProdObj.setReturnRegisterProductStatus("Registered");
					}else{
						
						String name = "CC#:"; 
						String ccid = rs.getString("CCID");
						name= name.concat(ccid);
						rrProdObj.setReturnRegisterProductStatus(name);
					}
					
					
					rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
					rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
					rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
					rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
					rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
					rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
					rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
					rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
					rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
					rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
					rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
					rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
					rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
					rrProdObj.setReturnRegisterProductConditionName(rs.getString("returnRegisterProductConditionName"));
					rrProdObj.setReturnRegisterProductFreeReturn(rs.getDouble("FreeReturn"));
					rrProdObj.setReturnRegisterProductQtyReturn(rs.getDouble("QtyReturn"));
					rrProdObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
					rrProdObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
					rrProdObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
					
					
					//rrProdObj.setRecid(rs.getDouble("returnregisterdetailsID")); 
					rrProdObj.setRecid(reccount); 
					
					rrProductList.add(rrProdObj);
					rrObj.setReturnRegisterProductList(rrProductList);
				}
				loopRRID = rs.getDouble("ID");  //set loopRRID for comparison
			}
			
			
			}	
			 json = "{\"rrList\":"+util.util_makeJson(rrList) +",\"maxId\":"+maxId+"}";
		} catch (Exception e) {
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

			}finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				
				
			}
	    }
		
		return json;
	}

	@Override
	public String bl_getCompanyClaimDetails(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444 ; 
		Connection con = null;
		ResultSet rs = null;
		JdbcConnection JdbcConnectionObj = null;
		 
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			CallableStatement cstatement = null;
			CompanyClaim ccObj = null;
			String query2 = "{call retreiveCC (?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setDouble(1, reqObj.getEntityId() );
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setInt(5, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			status = cstatement.getInt(5);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{				
			
			
				    ccObj = new CompanyClaim();
					double loopCCID =0;
					List<CompanyClaim> companyClaimList = new ArrayList<CompanyClaim>();
					List<ReturnRegisterProduct> rrProductList = new ArrayList<ReturnRegisterProduct>();
					
					while(rs.next()){
						if(loopCCID != rs.getDouble("ID")){
							
							ccObj = new CompanyClaim();
							companyClaimList = new ArrayList<CompanyClaim>();
							
							ccObj.setCompanyClaimId(rs.getDouble("ID"));
							ccObj.setRecid(rs.getDouble("ID"));
						
					    	ccObj.setCompanyClaimCID(rs.getDouble("companyID"));
					    	ccObj.setCompanyClaimSID(rs.getDouble("supplierID"));
					    	ccObj.setCompanyClaimcalculateVAT(rs.getInt("CalculateVAT"));
					    	ccObj.setCompanyClaimCreatedByName(rs.getString("CreatedByUserName"));
					    	ccObj.setCompanyClaimDate(rs.getString("ccDate"));
					    	ccObj.setCompanyClaimGrossTotal(rs.getBigDecimal("GrossTotal"));
					    	ccObj.setCompanyClaimNetAmount(rs.getBigDecimal("NetAmount"));
					    	ccObj.setCompanyClaimRateOfCalculation(rs.getInt("RateOfCalculation"));
					    	ccObj.setCompanyClaimRemark(rs.getString("Remark"));
					    	ccObj.setCompanyClaimStatus(rs.getInt("Status"));
					    	ccObj.setCompanyClaimTotalItem(rs.getDouble("TotalItem"));
					    	ccObj.setCompanyClaimType(rs.getInt("Type"));
					    	ccObj.setCompanyClaimVAT(rs.getBigDecimal("VAT"));
							
							
							ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
							
							rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
							rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
							rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
							rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
							rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
							rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
							rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
							rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
							rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
							rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
							rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
							rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
							rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
							rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
							rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
							rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
							rrProdObj.setRecid(rs.getDouble("returnregisterdetailsID")); 
							rrProdObj.setReturnRegisterSource(rs.getString("source"));
							rrProdObj.setReturnRegisterProductVATpercentage(rs.getBigDecimal("returnRegisterProductVAT"));
							rrProdObj.setReturnRegisterProductRate(rs.getBigDecimal("Rate"));
							
							double output = rrProdObj.getReturnRegisterProductCCID();
			    		    if(output == 0)
			        		{
			    		    	ccObj.setCompanyClaimedProductList(rrProductList);
								companyClaimList.add(ccObj);
			    		   	}else{
			    		   		rrProductList.add(rrProdObj);
								ccObj.setCompanyClaimedProductList(rrProductList);
								companyClaimList.add(ccObj);
			    		    }
							
						/*	rrProductList.add(rrProdObj);
							ccObj.setCompanyClaimedProductList(rrProductList);
							companyClaimList.add(ccObj);*/
						
						}else{
							
							ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
							rrProdObj.setReturnRegisterProductId(rs.getDouble("returnregisterdetailsID"));
							rrProdObj.setReturnRegisterProductPID(rs.getDouble("returnregisterdetailsPID"));
							rrProdObj.setReturnRegisterProductCCID(rs.getDouble("returnregisterdetailsCCID"));
							rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("returnregisterdetailsAmount"));
							rrProdObj.setReturnRegisterProductBatchNo(rs.getString("returnregisterdetailsBatchNo"));
							rrProdObj.setReturnRegisterProductCondition(rs.getInt("returnregisterdetailsCondition"));
							rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("returnregisterdetailsExpiryDate"));
							rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("returnregisterdetailsMRP"));
							rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("returnregisterdetailsPurchaseRate"));
							rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("returnregisterdetailsQty"));
							rrProdObj.setReturnRegisterProductRemark(rs.getString("returnregisterdetailsRemark"));
							rrProdObj.setReturnRegisterProductRRID(rs.getDouble("returnregisterdetailsRRID"));
							rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("returnregisterdetailsSellRate"));
							rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
							rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
							rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
							rrProdObj.setRecid(rs.getDouble("returnregisterdetailsID")); 
							rrProdObj.setReturnRegisterSource(rs.getString("source"));
							rrProdObj.setReturnRegisterProductVATpercentage(rs.getBigDecimal("returnRegisterProductVAT"));
							rrProdObj.setReturnRegisterProductRate(rs.getBigDecimal("Rate"));
							
							rrProductList.add(rrProdObj);
							ccObj.setCompanyClaimedProductList(rrProductList);
						}
						loopCCID = rs.getDouble("ID");  //set loopCCID for comparison
					}
					
			}
			
			 json = util.util_makeJson(ccObj);
		} catch (Exception e) {
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

			}finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				
				
			}
	    }
		
		return json;
	}

	@Override
	public String bl_getAllCompanyClaimList(PurpleaidRequest reqObj )throws Exception {
		Util_json util= null;
		String json=null;
		double maxId =0 ;
		Connection con = null;
		ResultSet rs = null;
		int status = 444;
		JdbcConnection JdbcConnectionObj = null;
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			CallableStatement cstatement = null;
			List<CompanyClaim> companyClaimList = new ArrayList<CompanyClaim>();
			String query2 = "{call getCompanyClaimListNew (?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setDouble(1, reqObj.getCompanyId());
			cstatement.setInt(2, reqObj.getListLimit() );
			cstatement.setString(3, reqObj.getFromDate() );
			cstatement.setString(4, reqObj.getToDate() );
			cstatement.setDouble(5, reqObj.getStatus() );
			cstatement.setDouble(6, reqObj.getFromAmt() );
			cstatement.setDouble(7, reqObj.getToAmt() );
			cstatement.setDouble(8, reqObj.getCreatedByFilterId() );
			cstatement.setDouble(9, reqObj.getLastID());
			cstatement.setString(10, reqObj.getUserId());
            cstatement.setString(11, reqObj.getToken());
            cstatement.setInt(12, reqObj.getViewPermissionID());
            cstatement.setDouble(13, status );
			rs=cstatement.executeQuery();
			
			cstatement.registerOutParameter(13, java.sql.Types.INTEGER);
			

			 status = cstatement.getInt(13);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
			CompanyClaim ccObj = new CompanyClaim();
			double loopCCID =0;
			
			List<ReturnRegisterProduct> rrProductList = new ArrayList<ReturnRegisterProduct>();
			
			while(rs.next()){
				if(loopCCID != rs.getDouble("ccID")){
					
					ccObj = new CompanyClaim();
					rrProductList = new ArrayList<ReturnRegisterProduct>();
					
					ccObj.setCompanyClaimId(rs.getDouble("companyclaimID"));
					ccObj.setRecid(rs.getDouble("companyclaimID"));
					

			    	/*if( maxId < rs.getDouble("ID")){
			    		maxId =  rs.getDouble("ID");
			    	}*/
					
			    	ccObj.setCompanyClaimCID(rs.getDouble("companyclaimCID"));
			    	ccObj.setCompanyClaimSID(rs.getDouble("companyclaimsupplierID"));
			    	ccObj.setCompanyClaimcalculateVAT(rs.getInt("companyclaimCalculateVAT"));
			    	ccObj.setCompanyClaimCreatedByName(rs.getString("CreatedByUserName"));
			    	ccObj.setCompanyClaimDate(rs.getString("ccDate"));
			    	ccObj.setCompanyClaimGrossTotal(rs.getBigDecimal("companyclaimGrossTotal"));
			    	ccObj.setCompanyClaimNetAmount(rs.getBigDecimal("companyclaimNetAmount"));
			    	ccObj.setCompanyClaimRateOfCalculation(rs.getInt("companyclaimRateOfCalculation"));
			    	ccObj.setCompanyClaimRemark(rs.getString("companyclaimRemark"));
			    	ccObj.setCompanyClaimStatus(rs.getInt("companyclaimStatus"));
			    	ccObj.setCompanyClaimTotalItem(rs.getDouble("companyclaimTotalItem"));
			    	ccObj.setCompanyClaimType(rs.getInt("companyclaimType"));
			    	ccObj.setCompanyClaimVAT(rs.getBigDecimal("companyclaimVAT"));
			    	ccObj.setCompanyClaimCreatedById(rs.getDouble("companyclaimCreatedBy"));
					
					
					ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
					
					rrProdObj.setReturnRegisterProductId(rs.getDouble("ID"));
					rrProdObj.setReturnRegisterProductPID(rs.getDouble("productID"));
					rrProdObj.setReturnRegisterProductCCID(rs.getDouble("CCID"));
					rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("Amount"));
					rrProdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
					rrProdObj.setReturnRegisterProductCondition(rs.getInt("conditions"));
					rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("expiryDate"));
					rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
					rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
					rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("Qty"));
					rrProdObj.setReturnRegisterProductRemark(rs.getString("Remark"));
					rrProdObj.setReturnRegisterProductRRID(rs.getDouble("RRID"));
					rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("sellRate"));
					rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
					rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
					rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
					rrProdObj.setRecid(rs.getDouble("ID")); 
					rrProdObj.setReturnRegisterSource(rs.getString("source"));
					rrProdObj.setReturnRegisterProductVATpercentage(rs.getBigDecimal("returnRegisterProductVAT"));
					rrProdObj.setReturnRegisterProductRate(rs.getBigDecimal("Rate"));
					
					/*double output = rrProdObj.getReturnRegisterProductCCID();
	    		    if(output == 0)
	        		{
	    		    	ccObj.setCompanyClaimedProductList(rrProductList);
						companyClaimList.add(ccObj);
	    		   	}else{
	    		   		rrProductList.add(rrProdObj);
						ccObj.setCompanyClaimedProductList(rrProductList);
						companyClaimList.add(ccObj);
	    		    }
					*/
					rrProductList.add(rrProdObj);
					ccObj.setCompanyClaimedProductList(rrProductList);
					companyClaimList.add(ccObj);
				
				}else{
					
					ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
					rrProdObj.setReturnRegisterProductId(rs.getDouble("ID"));
					rrProdObj.setReturnRegisterProductPID(rs.getDouble("productID"));
					rrProdObj.setReturnRegisterProductCCID(rs.getDouble("CCID"));
					rrProdObj.setReturnRegisterProductAmount(rs.getBigDecimal("Amount"));
					rrProdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
					rrProdObj.setReturnRegisterProductCondition(rs.getInt("conditions"));
					rrProdObj.setReturnRegisterProductExpiryDate(rs.getString("expiryDate"));
					rrProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
					rrProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
					rrProdObj.setReturnRegisterProductQuantity(rs.getDouble("Qty"));
					rrProdObj.setReturnRegisterProductRemark(rs.getString("Remark"));
					rrProdObj.setReturnRegisterProductRRID(rs.getDouble("RRID"));
					rrProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("sellRate"));
					rrProdObj.setReturnRegisterProductName(rs.getString("productName"));
					rrProdObj.setReturnRegisterProductPack(rs.getString("productPack"));
					rrProdObj.setReturnRegisterProductIsDeleted(rs.getBoolean("deleted"));
					rrProdObj.setRecid(rs.getDouble("ID")); 
					rrProdObj.setReturnRegisterSource(rs.getString("source"));
					rrProdObj.setReturnRegisterProductVATpercentage(rs.getBigDecimal("returnRegisterProductVAT"));
					rrProdObj.setReturnRegisterProductRate(rs.getBigDecimal("Rate"));
					
					rrProductList.add(rrProdObj);
					ccObj.setCompanyClaimedProductList(rrProductList);
				}
				loopCCID = rs.getDouble("ccID");  //set loopCCID for comparison
			}
			
			
			maxId = loopCCID;
			}
			json = "{\"ccList\":"+util.util_makeJson(companyClaimList) +",\"maxId\":"+maxId+"}";
		} catch (Exception e) {
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

			}finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				
				
			}
	    }
		
		return json;
	}

	@Override
	public String bl_setCompanyClaim(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		int status = 444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		double cccount = 0;
		JdbcConnection JdbcConnectionObj = null;
		CompanyClaim Obj = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CompanyClaim>() {});		
			query = "{call InsertUpdateCompanyClaim (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getCompanyClaimId());
			cstatement.setDouble(2, Obj.getCompanyClaimCID());
			cstatement.setDouble(3, Obj.getCompanyClaimSID());
			cstatement.setString(4, Obj.getCompanyClaimDate());
			cstatement.setInt(5, Obj.getCompanyClaimType());
			cstatement.setInt(6, Obj.getCompanyClaimStatus());
			cstatement.setInt(7, Obj.getCompanyClaimRateOfCalculation());
			cstatement.setInt(8, Obj.getCompanyClaimcalculateVAT());
			cstatement.setString(9, Obj.getCompanyClaimRemark());
			cstatement.setDouble(10, Obj.getCompanyClaimTotalItem());
			cstatement.setBigDecimal(11, Obj.getCompanyClaimGrossTotal());
			cstatement.setBigDecimal(12, Obj.getCompanyClaimVAT()); 
			cstatement.setBigDecimal(13, Obj.getCompanyClaimNetAmount());
			cstatement.setString(14, reqObj.getUserId());
		    cstatement.setString(15, reqObj.getToken());
            cstatement.setInt(16, reqObj.getInsertPermissionID());
            cstatement.setInt(17, reqObj.getUpdatePermissionID());
            cstatement.setDouble(18, status);
            
            cstatement.registerOutParameter(18, java.sql.Types.INTEGER);
            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);           
			cstatement.execute();
			Double output = cstatement.getDouble(1);
            status  = cstatement.getInt(18);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
							
				System.out.println("Company Claim id inserted/updated"+output);
				Obj.setCompanyClaimId(output);
				Obj.setRecid(output);
				
				String query2="{call InsertUpdateRRDForClaim(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query2);
				ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
				
				for(int i=0;i<Obj.getCompanyClaimedProductList().size();i++){ 
							
					rrProdObj = Obj.getCompanyClaimedProductList().get(i);
					cstatement.setDouble(1, rrProdObj.getReturnRegisterProductId());
					cstatement.setDouble(2, rrProdObj.getReturnRegisterProductRRID());
					cstatement.setDouble(3,rrProdObj.getReturnRegisterProductPID());
					
					if(rrProdObj.isReturnRegisterProductClaimDeleted() == true ){
						cstatement.setDouble(4, rrProdObj.getReturnRegisterProductCCID());
					}else{
						cstatement.setDouble(4, output);
					}
					
					cstatement.setBoolean(5, rrProdObj.isReturnRegisterProductIsDeleted());
					cstatement.setBigDecimal(6, rrProdObj.getReturnRegisterProductAmount());
					cstatement.setInt(7, rrProdObj.getReturnRegisterProductCondition());
					cstatement.setString(8, rrProdObj.getReturnRegisterProductRemark());
					cstatement.setString(9, rrProdObj.getReturnRegisterProductBatchNo());
					cstatement.setBigDecimal(10, rrProdObj.getReturnRegisterProductMRP());
					cstatement.setBigDecimal(11, rrProdObj.getReturnRegisterProductPurchaseRate());
					cstatement.setBigDecimal(12, rrProdObj.getReturnRegisterProductSellRate());
					cstatement.setDouble(13, rrProdObj.getReturnRegisterProductQuantity());
					cstatement.setString(14, rrProdObj.getReturnRegisterProductExpiryDate());
					cstatement.setString(15, reqObj.getUserId());
					cstatement.setBigDecimal(16, rrProdObj.getReturnRegisterProductRate());
					
					if(rrProdObj.getReturnRegisterProductCCID() != 0 || output !=0){
						cccount = cccount + 1 ;
					}else{
						
					}
					cstatement.setString(17, reqObj.getToken());
					
					if( rrProdObj.getReturnRegisterProductCCID() == 0){ 
						cstatement.setInt(18, reqObj.getInsertPermissionID());
				    }else{
				    	cstatement.setInt(18, reqObj.getUpdatePermissionID());
				    }
					cstatement.setDouble(19, status);
									
					cstatement.execute();
					cstatement.registerOutParameter(19, java.sql.Types.INTEGER);
					
					status = cstatement.getInt(19);	
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						
						
						String query3="{call UpdateRRForCount2(?,?,?,?,?,?,?)}";
						cstatement1 = con.prepareCall(query3);
						cstatement1.setDouble(1, rrProdObj.getReturnRegisterProductRRID());
						cstatement1.setDouble(2, cccount);
						cstatement1.setBoolean(3,rrProdObj.isReturnRegisterProductClaimDeleted());
												
						
						
						con.commit();
						for(int j=0;j<Obj.getCompanyClaimedProductList().size();j++){ 
							
							rrProdObj = Obj.getCompanyClaimedProductList().get(j);
							if(rrProdObj.isReturnRegisterProductClaimDeleted() == true){
								 Obj.getCompanyClaimedProductList().remove(j);
							}else{
								
							}
						}
						}
										
				}
				
						
			}
			
			response = util.util_makeJson(Obj);
			
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
				if(cstatement1!=null){
					DataSource.getInstance().closeCallableStatment(cstatement1);
				}
			}

		} 
		return response;
	}


	@Override
	public String bl_setReturnRegister(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		String response=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		CallableStatement cstatement2 = null;
		CallableStatement cstatement3 = null;
        int status = 444;
		double rrdCount =0;
		double cccount = 0;
		ReturnRegister Obj = null;
		
		try{	
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
	    	con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<ReturnRegister>() {});		
			query = "{call InsertUpdateReturnRegister (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getReturnRegisterId());
			cstatement.setString(2, Obj.getReturnRegisterDate());
			cstatement.setDouble(3, Obj.getReturnRegisterCustId());
			cstatement.setDouble(4, Obj.getReturnRegisterCreditNoteId());
			cstatement.setDouble(5, Obj.getReturnRegisterType());
			cstatement.setString(6, Obj.getReturnRegisterRemark());
			cstatement.setBigDecimal(7, Obj.getReturnRegisterTotal());
			cstatement.setInt(8, Obj.getReturnRegisterTotalType());
			cstatement.setInt(9, Obj.getReturnRegisterStatus());
			cstatement.setDouble(10, Obj.getReturnRegisterTotalProducts());
			cstatement.setString(11, Obj.getReturnRegisterLockReason());
			cstatement.setBoolean(12, Obj.isReturnRegisterLockFlag());
			cstatement.setBoolean(13, Obj.isReturnRegisterVoidFlag());
			cstatement.setBoolean(14, Obj.isReturnRegisterVerifiedFlag());
			cstatement.setDouble(15, Obj.getReturnRegisterVerifiedByID());
			cstatement.setString(16, Obj.getReturnRegisterVerifiedOn());
			cstatement.setDouble(17, Obj.getReturnRegisterCreatedByID());
			cstatement.setString(18, Obj.getReturnRegisterVoidReason());
			cstatement.setString(19, reqObj.getUserId());
			cstatement.setString(20, reqObj.getToken());
	        cstatement.setInt(21, reqObj.getInsertPermissionID());
	        cstatement.setInt(22, reqObj.getUpdatePermissionID());
	        cstatement.setInt(23, reqObj.getDeletePermissionID());
	        cstatement.setDouble(24, status);
			
            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);  
            cstatement.registerOutParameter(24, java.sql.Types.INTEGER);
			cstatement.execute();
			
			Double output = cstatement.getDouble(1);
			status  = cstatement.getInt(24);
				
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				System.out.println("Return Register id inserted/updated"+output);
				Obj.setReturnRegisterId(output);
				Obj.setRecid(output);
				
				String query2="{call InsertUpdateRRD(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query2);
				ReturnRegisterProduct rrProdObj = new ReturnRegisterProduct();
				
				for(int i=0;i<Obj.getReturnRegisterProductList().size();i++){ 
	            
					rrProdObj = Obj.getReturnRegisterProductList().get(i);
					cstatement.setDouble(1, rrProdObj.getReturnRegisterProductId());
					
					if(Obj.getReturnRegisterId() == 0){
						cstatement.setDouble(2, output);
					}else{
						cstatement.setDouble(2, Obj.getReturnRegisterId());
					}
					
					cstatement.setDouble(3, rrProdObj.getReturnRegisterProductSAID());
					cstatement.setDouble(4,rrProdObj.getReturnRegisterProductPID());
					cstatement.setDouble(5, rrProdObj.getReturnRegisterProductCCID());
					cstatement.setBoolean(6, rrProdObj.isReturnRegisterProductIsDeleted());
					cstatement.setBigDecimal(7, rrProdObj.getReturnRegisterProductAmount());
					cstatement.setInt(8, rrProdObj.getReturnRegisterProductCondition());
					cstatement.setString(9, rrProdObj.getReturnRegisterProductRemark());
					cstatement.setString(10, rrProdObj.getReturnRegisterProductBatchNo());
					cstatement.setBigDecimal(11, rrProdObj.getReturnRegisterProductMRP());
					cstatement.setBigDecimal(12, rrProdObj.getReturnRegisterProductPurchaseRate());
					cstatement.setBigDecimal(13, rrProdObj.getReturnRegisterProductSellRate());
					cstatement.setDouble(14, rrProdObj.getReturnRegisterProductQuantity());
					cstatement.setString(15, rrProdObj.getReturnRegisterProductExpiryDate());
					cstatement.setString(16, reqObj.getUserId());
					cstatement.setString(17, rrProdObj.getReturnRegisterProductConditionName());
					
					if(rrProdObj.getReturnRegisterProductCCID() != 0){
						cccount = cccount + 1;
					}else{
						
					}
					cstatement.setString(18, reqObj.getToken());
					if(Obj.getReturnRegisterId() == 0){
						 cstatement.setInt(19, reqObj.getInsertPermissionID());
					}else{
						 cstatement.setInt(19, reqObj.getUpdatePermissionID());
					}
			        cstatement.setDouble(20, status);
			        cstatement.setDouble(21, rrProdObj.getReturnRegisterProductFreeReturn());
					cstatement.setDouble(22, rrProdObj.getReturnRegisterProductQtyReturn());
			        cstatement.execute();
			        cstatement.registerOutParameter(20, java.sql.Types.INTEGER);
					
					status = cstatement.getInt(20);	
			     		        
				}
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{ 
				double FreereturnDelta = rrProdObj.getReturnRegisterProductFreeReturnDelta();
				double QtyreturnDelta = rrProdObj.getReturnRegisterProductQtyReturnDelta();
				
				
					if(Obj.getReturnRegisterCustId() == 0){
						//if(rrProdObj.getReturnRegisterProductSAID() != 0){
							for(int i=0;i<Obj.getReturnRegisterProductList().size();i++){ 
								
								rrProdObj = Obj.getReturnRegisterProductList().get(i);
							if(!(Obj.getReturnRegisterId() != 0 && FreereturnDelta == 0 && QtyreturnDelta == 0) || rrProdObj.isReturnRegisterProductBatchDeleted() == true){
							
									String query3="{call UpdateStockActiveForRR(?,?,?,?,?,?,?,?,?,?)}";
									cstatement1 = con.prepareCall(query3);
									
									if(rrProdObj.isReturnRegisterProductBatchDeleted() == true){ // deleted record
										
										cstatement1.setDouble(5, rrProdObj.getReturnRegisterProductFreeReturn()*-1);
										cstatement1.setDouble(6, rrProdObj.getReturnRegisterProductQtyReturn()*-1);
									}else{
									
										if(Obj.getReturnRegisterId() == 0 ){ // new record
											cstatement1.setDouble(5, rrProdObj.getReturnRegisterProductFreeReturn());
											cstatement1.setDouble(6, rrProdObj.getReturnRegisterProductQtyReturn());
										}else  {// modified record
											cstatement1.setDouble(5, rrProdObj.getReturnRegisterProductFreeReturnDelta());
											cstatement1.setDouble(6, rrProdObj.getReturnRegisterProductQtyReturnDelta());
										}
									}
									
									cstatement1.setDouble(2, rrProdObj.getReturnRegisterProductSAID());
									
																	
									cstatement1.setString(7, reqObj.getUserId());
									cstatement1.setString(8, reqObj.getToken());
									
									if(Obj.getReturnRegisterId() == 0){
										cstatement1.setInt(9, reqObj.getInsertPermissionID());
									}else{
										cstatement1.setInt(9, reqObj.getUpdatePermissionID());
									}
									cstatement1.setDouble(10, status);
									cstatement1.execute();
									cstatement1.registerOutParameter(10, java.sql.Types.INTEGER);
									
									status = cstatement1.getInt(10);
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{ 
									
									}
							}
								
											
						
						
					}
					}/*else{
						
						//if(rrProdObj.getReturnRegisterProductSAID() != 0){
							for(int i=0;i<Obj.getReturnRegisterProductList().size();i++){ 
								
								rrProdObj = Obj.getReturnRegisterProductList().get(i);
								
									String query3="{call UpdateRRDforCustomer(?,?,?,?,?,?,?,?,?)}";
									cstatement1 = con.prepareCall(query3);
									cstatement1.setDouble(1, rrProdObj.getReturnRegisterProductSAID());
									cstatement1.setDouble(2, rrProdObj.getReturnRegisterProductFreeAvailable());
									cstatement1.setDouble(3, rrProdObj.getReturnRegisterProductQtyAvailable());
									cstatement1.setDouble(4, rrProdObj.getReturnRegisterProductFreeReturn());
									cstatement1.setDouble(5, rrProdObj.getReturnRegisterProductQtyReturn());
									cstatement1.setString(6, reqObj.getUserId());
									cstatement1.setString(7, reqObj.getToken());
									if(Obj.getReturnRegisterId() == 0){
										cstatement1.setInt(8, reqObj.getInsertPermissionID());
									}else{
										cstatement1.setInt(8, reqObj.getUpdatePermissionID());
									}
									cstatement1.setDouble(9, status);
									cstatement1.registerOutParameter(9, java.sql.Types.INTEGER);
									cstatement1.execute();
									status = cstatement1.getInt(9);	
									
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{
										
									}
									}
								}*/
							
					 
					
					}
									
					
					rrdCount = Obj.getReturnRegisterProductList().size();
					
					String query4="{call UpdateRRForCount(?,?,?)}";
					cstatement2 = con.prepareCall(query4);
					cstatement2.setDouble(1, output);
					cstatement2.setDouble(2, rrdCount);
					cstatement2.setBoolean(3, rrProdObj.isReturnRegisterProductIsDeleted());
					cstatement2.execute();
					
					con.commit();
			
			
			}
			
			response = util.util_makeJson(Obj);
			
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
				if(cstatement1!=null){
					DataSource.getInstance().closeCallableStatment(cstatement1);
				}
				if(cstatement2!=null){
					DataSource.getInstance().closeCallableStatment(cstatement2);
				}
				if(cstatement3!=null){
					DataSource.getInstance().closeCallableStatment(cstatement3);
				}
			}

		} 
		return response;
	}

	@Override
	public String bl_setRaisedCompanyClaim(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			//Obj = new ObjectMapper().readValue(reqObj.getRequestData() , new TypeReference<PurpleaidRequest>() {});		
			
			query = "{call UpdateCompanyClaim (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, reqObj.getEntityId());
			
			cstatement.setInt(2, 1 );
			
			cstatement.setString(3, reqObj.getUserId());
			cstatement.setString(4, reqObj.getToken());
            
            cstatement.setInt(5, reqObj.getUpdatePermissionID());
            cstatement.setDouble(6, status);
            
            cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
                  
			cstatement.execute();
			
            status  = cstatement.getInt(6);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
	           	con.commit();
			}
			response = util.util_makeJson(reqObj);
			
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

}
