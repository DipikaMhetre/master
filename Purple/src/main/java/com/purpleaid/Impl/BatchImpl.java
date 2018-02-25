package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.GrProductBatch;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.ReturnRegisterProduct;
import com.purpleaid.interfaces.Batch_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class BatchImpl implements Batch_IF{
	
	@Override
	public String bl_getBatchProduct(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<GrProductBatch> grProductBatchList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			grProductBatchList =new ArrayList<GrProductBatch>();
			String query = "{call getBatchDetails (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getProductId());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setDouble(5, status);
			
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{     
					   
			    while(rs.next()){
			    	
			    	GrProductBatch grProdObj = new GrProductBatch();
			    	grProdObj.setGrProductBatchId(rs.getDouble("ID"));
			    	grProdObj.setGrProductBatchGrId(rs.getDouble("grID"));
			    	grProdObj.setRecid(rs.getDouble("ID"));
			    	grProdObj.setGrProductBatchNo(rs.getString("batchNo"));
			    	grProdObj.setGrProductBatchExpiryDate(rs.getString("expiryDate"));
			    	grProdObj.setGrProductBatchMRP(rs.getBigDecimal("MRP"));
			    	grProdObj.setGrProductBatchTrade(rs.getBigDecimal("trade"));
			    	grProdObj.setGrProductBatchPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	grProdObj.setGrProductBatchTradeDiscount(rs.getBigDecimal("tradeDiscount"));
			    	grProdObj.setGrProductBatchSellRate(rs.getBigDecimal("sellRate"));
			    	grProdObj.setGrProductBatchPurchaseDate(rs.getString("purchaseDate"));
			    	grProdObj.setGrProductBatchRemark(rs.getString("Remark"));
			    	grProdObj.setGrProductBatchProductId(rs.getDouble("productId"));
			    	grProdObj.setGrProductBatchActiveFlag(rs.getBoolean("flgActive"));
			    	grProdObj.setGrProductBatchLockFlag(rs.getBoolean("flgLock"));
			    	grProdObj.setGrProductBatchIsDeleted(rs.getBoolean("deleted"));
			    	grProductBatchList.add(grProdObj);
			    }
		     
			}
		    json = util.util_makeJson(grProductBatchList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
		    	}
		   } 
		   		
		    return json;
	}

	@Override
	public String bl_setBatch(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement callableStatement = null;
		GrProductBatch Obj = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<GrProductBatch>() {});		
			
			query = "{call InsertUpdateProductBatchActiveForSM(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			callableStatement = con.prepareCall (query);
						
			callableStatement.setDouble(1, Obj.getGrProductBatchActiveId());
			callableStatement.setString(2 , Obj.getGrProductBatchNo());
			callableStatement.setDouble(3, Obj.getGrProductBatchGrId());
			callableStatement.setString(4, Obj.getGrProductBatchExpiryDate());
			callableStatement.setBigDecimal(5, Obj.getGrProductBatchMRP());
			callableStatement.setBigDecimal(6, Obj.getGrProductBatchTrade());
			callableStatement.setBigDecimal(7, Obj.getGrProductBatchPurchaseRate());
			callableStatement.setBigDecimal(8, Obj.getGrProductBatchTradeDiscount());
			callableStatement.setBigDecimal(9, Obj.getGrProductBatchSellRate());
			callableStatement.setString(10, Obj.getGrProductBatchPurchaseDate());
			callableStatement.setBoolean(11, Obj.isGrProductBatchActiveFlag());
			callableStatement.setBoolean(12, Obj.isGrProductBatchLockFlag());
			callableStatement.setDouble(13, Obj.getGrProductBatchId());
	
			/********** removed below 3 fields and maintained it in new batchstockadjustments (log) table************/ 
			/*callableStatement.setDouble(14,Obj.getExpiry());
			callableStatement.setDouble(15,Obj.getBreakage());
			callableStatement.setDouble(16,Obj.getCotransfer());*/
			callableStatement.setString(14, Obj.getGrProductBatchRemark());
			
			
			callableStatement.setBoolean(15, Obj.isGrProductBatchIsDeleted());
			callableStatement.setString(16, reqObj.getUserId());
			callableStatement.setString(17, reqObj.getToken());
			callableStatement.setInt(18, reqObj.getInsertPermissionID());
			callableStatement.setInt(19, reqObj.getUpdatePermissionID());
			callableStatement.setInt(20, status);
			
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			callableStatement.registerOutParameter(20, java.sql.Types.INTEGER);
			
			callableStatement.execute();
			
			double batchActiveid = callableStatement.getDouble(1);
			status= callableStatement.getInt(20);
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{    
				
				System.out.println("Batch Active ID Saved !!!"+batchActiveid);
				response = util.util_makeJson(Obj);
				con.commit();
			}
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

	@Override
	public String bl_setBatchTransfer(PurpleaidRequest reqObj) throws Exception {
		 JdbcConnection JdbcConnectionObj = null;
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status=444;
		List<GrProductBatch> grBatchList = new ArrayList<GrProductBatch>();
		
		try{	
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			grBatchList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<GrProductBatch>>() {});	
			query = "{call UpdateStockActiveForTranferBatch(?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
						
			for(int i=0;i<grBatchList.size();i++){
				
				GrProductBatch obj = new GrProductBatch();
				obj = grBatchList.get(i);
				cstatement.setDouble(1, obj.getGrProductBatchSAID());
				cstatement.setDouble(2, obj.getGrProductBatchActiveId());
				cstatement.setDouble(3, obj.getStock());
				cstatement.setDouble(4, obj.getFreeStock());
				cstatement.setString(5, reqObj.getUserId());
				cstatement.setString(6, reqObj.getToken());
				cstatement.setInt(7, reqObj.getUpdatePermissionID());
				cstatement.setInt(8, status);

				cstatement.registerOutParameter(8, java.sql.Types.INTEGER);
				cstatement.execute();	
			
				status= cstatement.getInt(8);
				
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

	@Override
	public String bl_getAllBatchListByCompany(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		String json=null;
		int status = 444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<GrProductBatch> grProductBatchList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			grProductBatchList =new ArrayList<GrProductBatch>();
			String query = "{call getStockBatches (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getCompanyId());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setDouble(5, status);
			
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
	    	rs = cstatement.executeQuery();
			
			 status = cstatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{ 
				    while(rs.next()){
			    	
			    	GrProductBatch grProdObj = new GrProductBatch();
			    	
			    	grProdObj.setGrProductBatchActiveId(rs.getDouble("ID"));
			    	grProdObj.setGrProductBatchNo(rs.getString("batchNo"));
			    	grProdObj.setGrProductBatchGrId(rs.getDouble("grID"));
			    	grProdObj.setRecid(rs.getDouble("ID"));
			    	grProdObj.setGrProductBatchId(rs.getDouble("PBID"));
			    	grProdObj.setGrProductBatchExpiryDate(rs.getString("expiryDate"));
			    	grProdObj.setGrProductBatchMRP(rs.getBigDecimal("MRP"));
			    	grProdObj.setGrProductBatchTrade(rs.getBigDecimal("trade"));
			    	grProdObj.setGrProductBatchPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	grProdObj.setGrProductBatchPurchaseDate(rs.getString("purchaseDate"));
			    	grProdObj.setGrProductBatchTradeDiscount(rs.getBigDecimal("tradeDiscount"));
			    	grProdObj.setGrProductBatchTradeDiscountAmount(rs.getBigDecimal("tradeDiscountAmt"));
			    	grProdObj.setGrProductBatchSpecialDiscountAmount(rs.getBigDecimal("specialDiscountAmt"));
			    	grProdObj.setGrProductBatchSpecialDiscount(rs.getBigDecimal("specialDiscount"));
			    	grProdObj.setGrProductBatchSellRate(rs.getBigDecimal("sellRate"));
			    	
			    	grProdObj.setGrProductBatchRemark(rs.getString("Remark"));
			    	  	
			    	//grProdObj.setExpiry(rs.getDouble("Expiry"));
			    	//grProdObj.setBreakage(rs.getDouble("Breakage"));
			    	//grProdObj.setCotransfer(rs.getDouble("CoTransfer"));
			    	
			    	
			    	grProdObj.setGrProductBatchActiveFlag(rs.getBoolean("flgActive"));
			    	grProdObj.setGrProductBatchLockFlag(rs.getBoolean("flgLock"));
			    	grProdObj.setGrProductBatchProductId(rs.getDouble("PID"));
			    	grProdObj.setGrProductBatchProductName(rs.getString("productName"));
			    	grProdObj.setGrProductBatchDivisionId(rs.getDouble("DID"));
			    	grProdObj.setGrProductBatchCompanyId(rs.getDouble("CID"));
			    	grProdObj.setGrProductBatchDivisionName(rs.getString("divisionName"));
			    	grProdObj.setGrProductBatchTaxID(rs.getDouble("TID"));
			    	grProdObj.setGrProductBatchTaxDescription(rs.getString("taxDescription"));
			    	grProdObj.setGrProductBatchSAID(rs.getDouble("SAID"));
			    	grProdObj.setGrProductBatchProductPack(rs.getDouble("Pack"));
			    	grProdObj.setQuantity(rs.getDouble("Quantity"));
			    	grProdObj.setFree(rs.getDouble("free"));
			    	grProdObj.setStock(rs.getDouble("Stock"));
			    	grProdObj.setFreeStock(rs.getDouble("freeStock"));
			      	grProdObj.setGrProductBatchVAT(rs.getBigDecimal("VAT"));
			    	grProdObj.setIsScheme(rs.getString("scheme"));
			    	grProdObj.setGrProductBatchIsDeleted(rs.getBoolean("deleted"));
			    	grProductBatchList.add(grProdObj);
			    }
			     
			}
			
			json = util.util_makeJson(grProductBatchList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
		    	}
		   } 
		    
		    return json;
	}

	@Override
	public String bl_setBatchList(PurpleaidRequest reqObj) throws Exception {
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<GrProductBatch> ObjList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<GrProductBatch>>() {});	
			
			query = "{call updateProductBatchActiveLock (?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				GrProductBatch Obj = new GrProductBatch();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getGrProductBatchActiveId());
				cstatement.setBoolean(2, Obj.isGrProductBatchActiveFlag());
				cstatement.setBoolean(3, Obj.isGrProductBatchLockFlag());
				cstatement.setString(4, reqObj.getUserId());
				cstatement.setString(5, reqObj.getToken());
				cstatement.setInt(6, reqObj.getUpdatePermissionID());
				cstatement.setInt(7, status);

				cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
				cstatement.execute();	
			
				status= cstatement.getInt(7);
				
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
				throw new Exception("\nError 50000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 50000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 50000102: "+e.getMessage()+"->"+status);
				}

			}

		  }
		return json;
	}

	@Override
	public String bl_getBatchProductForRR(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> rrBatchList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			rrBatchList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call getBatchDetails (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getProductId());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setDouble(5, status);
			
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{     
				   while(rs.next()){
			    	
			    	ReturnRegisterProduct grProdObj = new ReturnRegisterProduct();
			    	
			    	grProdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
			    	grProdObj.setReturnRegisterProductExpiryDate(rs.getString("expiryDate"));
			    	grProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
			    	grProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	grProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("sellRate"));
			    	grProdObj.setRecid(rs.getDouble("ID"));
			    	
			    	rrBatchList.add(grProdObj);
			    }
			} 
		    json = util.util_makeJson(rrBatchList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
		    	}
		   }finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			} 
		    
		    return json;
	}

	@Override
	public String bl_setBatchStockAdjustment(PurpleaidRequest requestData)throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		String query2 = null;
		String query3 = null;
		CallableStatement callableStatement = null;
		GrProductBatch Obj = null;
		double  totalStock =0;
		JdbcConnection JdbcConnectionObj = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<GrProductBatch>() {});		
			
			query = "{call insertBatchStockAdjustments(?,?,?,?,?,?,?,?,?,?)}";
			callableStatement = con.prepareCall (query);
			
			callableStatement.setDouble(1, Obj.getGrProductBatchStckAdjustmentId());
			callableStatement.setDouble(2, Obj.getGrProductBatchActiveId());
			callableStatement.setDouble(3, Obj.getExpiry());
			callableStatement.setDouble(4, Obj.getBreakage());
			callableStatement.setDouble(5, Obj.getCotransfer());
			callableStatement.setString(6, Obj.getGrProductBatchRemark());
			callableStatement.setString(7, requestData.getUserId());
			callableStatement.setString(8, requestData.getToken());
			callableStatement.setInt(9, requestData.getInsertPermissionID());
			callableStatement.setInt(10, status);
		
			
			callableStatement.registerOutParameter(10, java.sql.Types.INTEGER);
			
			callableStatement.execute();
			
			
			status= callableStatement.getInt(10);
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{    
			
				
				totalStock = Obj.getBreakage() + Obj.getCotransfer() + Obj.getExpiry();
				
				query2 = "{call UpdateSAForStockAdjustments(?,?,?,?,?,?,?)}";
				callableStatement = con.prepareCall (query2);
				
				callableStatement.setDouble(1, totalStock);
				callableStatement.setDouble(2, Obj.getGrProductBatchSAID() );
				callableStatement.setDouble(3, Obj.getStockAdjustmentOption());
				callableStatement.setString(4, requestData.getUserId());
				callableStatement.setString(5, requestData.getToken());
				callableStatement.setInt(6, requestData.getInsertPermissionID());
				callableStatement.setInt(7, status);
			
				callableStatement.registerOutParameter(7, java.sql.Types.INTEGER);
				
				callableStatement.execute();
				
				status= callableStatement.getInt(7);
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{    

					query3 = "{call UpdatePBAForStockAdjustments(?,?,?,?,?,?,?)}";
					callableStatement = con.prepareCall (query3);
					
					callableStatement.setDouble(1, Obj.getGrProductBatchActiveId());
					callableStatement.setBoolean(2, Obj.isGrProductBatchActiveFlag());
					callableStatement.setBoolean(3, Obj.isGrProductBatchLockFlag());
					callableStatement.setString(4, requestData.getUserId());
					callableStatement.setString(5, requestData.getToken());
					callableStatement.setInt(6, requestData.getInsertPermissionID());
					callableStatement.setInt(7, status);
				
					callableStatement.registerOutParameter(7, java.sql.Types.INTEGER);
					
					callableStatement.execute();
					
					status= callableStatement.getInt(7);
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

	@Override
	public String bl_getBatchActiveProductForRR(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> rrBatchList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			rrBatchList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call getActiveProductBatchList (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getProductId());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setString(3, reqObj.getToken());
			cstatement.setInt(4, reqObj.getViewPermissionID());
			cstatement.setDouble(5, status);
			
			cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				    while(rs.next()){
			    	
			    	ReturnRegisterProduct grProdObj = new ReturnRegisterProduct();
			    	
			    	grProdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
			    	grProdObj.setReturnRegisterProductExpiryDate(rs.getString("expiryDate"));
			    	grProdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
			    	grProdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	grProdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("sellRate"));
			    	grProdObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
			    	grProdObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
			    	grProdObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
			    	grProdObj.setRecid(rs.getDouble("ID"));
			    				
			    	rrBatchList.add(grProdObj);
			    }
			} 
		    json = util.util_makeJson(rrBatchList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 16000101: "+e.getMessage()+"->"+status);
		    	}
		   } finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}
		
		   return json;
	}


}
