package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.CompanyProduct;
import com.purpleaid.beans.CompanyPurchaseOrder;
import com.purpleaid.beans.GoodsReceipt;
import com.purpleaid.beans.GoodsReceiptProduct;
import com.purpleaid.beans.GrProductBatch;
import com.purpleaid.beans.Product;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.GoodsReceipt_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class GoodsReceiptImpl implements GoodsReceipt_IF {

	@Override
	public String bl_getGoodsReceipt(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		
		List<GoodsReceipt> grList = null;
		int status =444; 
		 JdbcConnection JdbcConnectionObj = null;
		
		
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			grList = new ArrayList<GoodsReceipt>();
			GoodsReceipt grObj = new GoodsReceipt();
			
			String query = "{call retrieveGoodsReceipt (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getEntityId());
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
			
			
				double loopGrID = 0;
				
				List<GoodsReceiptProduct> grProductList = new ArrayList<GoodsReceiptProduct>();
				
				
				
		    	
		    	
		    	
				
				
				while(rs.next()){
					if(loopGrID != rs.getDouble("ID")){
						
						//goods receipt details
						
						grObj = new GoodsReceipt();
						grProductList = new ArrayList<GoodsReceiptProduct>();
				   
						grObj.setGoodsReceiptId(rs.getDouble("ID"));
						
						grObj.setGoodsReceiptCID(rs.getDouble("CID"));
						grObj.setGoodsReceiptCompanyName(rs.getString("companyName"));
						grObj.setGoodsReceiptSID(rs.getDouble("SID"));
						grObj.setGoodsReceiptSupplierName(rs.getString("supplierName"));
							
						grObj.setGoodsReceiptDate(rs.getString("grDate"));	
						grObj.setGoodsReceiptBillNo(rs.getString("billNo"));
						
						
						grObj.setGoodsReceiptBillDate(rs.getString("grbillDate"));
						grObj.setGoodsReceiptBillAmount(rs.getBigDecimal("billAmt"));
						grObj.setGoodsReceiptLRNo(rs.getString("LRNo"));
						grObj.setGoodsReceiptLRDate(rs.getString("grLRDate"));
						grObj.setGoodsReceiptLRDueDate(rs.getString("grLRDueDate"));
						grObj.setGoodsReceiptRemark(rs.getString("Remark"));
				    	grObj.setGoodsReceiptPayment(rs.getInt("payment"));
				    	grObj.setGoodsReceiptTransporter(rs.getInt("transporter"));
				    	grObj.setGoodsReceiptBillDiscount(rs.getDouble("billDiscount"));
				    	grObj.setGoodsReceiptCases(rs.getDouble("cases"));
				    	grObj.setGoodsReceiptQuantity(rs.getDouble("quantity"));
				    	grObj.setGoodsReceiptFree(rs.getDouble("free"));
				    	grObj.setGoodsReceiptVAT(rs.getDouble("VAT"));
				    	grObj.setGoodsReceiptAdditionExcise(rs.getBigDecimal("additionExcise"));
				    	grObj.setGoodsReceiptAdditionEducationCess(rs.getBigDecimal("additionEducationCess"));
				    	grObj.setGoodsReceiptAdditionDebitNote(rs.getBigDecimal("additionDebitNote"));
				    	grObj.setGoodsReceiptAdditionCST(rs.getBigDecimal("additionCST"));
				    	grObj.setGoodsReceiptAdditionOther(rs.getBigDecimal("additionOther"));
				    	grObj.setGoodsReceiptDeductionTradeDiscount(rs.getBigDecimal("deductionTradeDiscount"));
				    	grObj.setGoodsReceiptDeductionSpecialDiscount(rs.getBigDecimal("deductionSpecialDiscount"));
				    	grObj.setGoodsReceiptDeductionOctroiReimb(rs.getBigDecimal("deductionOctroiReimb"));
				    	grObj.setGoodsReceiptDeductionCreditNote(rs.getBigDecimal("deductionCreditNote"));
				    	grObj.setGoodsReceiptDeductionBillDiscount(rs.getBigDecimal("deductionBillDiscount"));
				    	grObj.setGoodsReceiptDeductionOther(rs.getBigDecimal("deductionOther"));
				    	grObj.setGoodsReceiptTotalItems(rs.getBigDecimal("totalItems"));
				    	grObj.setGoodsReceiptRoundOff(rs.getBigDecimal("roundOff"));
				    	grObj.setGoodsReceiptFreeVAT(rs.getBigDecimal("freeVAT"));
				    	grObj.setGoodsReceiptNetAmount(rs.getBigDecimal("netAmount"));
				    	grObj.setGoodsReceiptUpdateToACFlag(rs.getBoolean("flgUpdateToAC"));
				    	grObj.setGoodsReceiptVerifiedFlag(rs.getBoolean("flgVerified"));
				    	grObj.setGoodsReceiptVerifiedByID(rs.getDouble("grverifiedByID"));
				    	grObj.setGoodsReceiptVerifiedOn(rs.getString("grverifiedOn"));
				    	grObj.setGoodsReceiptVerifiedByName(rs.getString("VerifiedByUserName"));
				    	
				    	grObj.setGoodsReceiptLedgerFlag(rs.getBoolean("flgLedger"));
						grObj.setGoodsReceiptLedgerOn(rs.getString("grledgerOn"));
						grObj.setGoodsReceiptLedgerById(rs.getDouble("ledgerBy"));
						grObj.setGoodsReceiptLedgerUserName(rs.getString("ledgerByUserName"));
						
						
						
						grObj.setGoodsReceiptStockFlag(rs.getBoolean("flgStock"));
						grObj.setGoodsReceiptStockOn(rs.getString("grstockOn"));
						grObj.setGoodsReceiptStockById(rs.getDouble("stockBy"));
						grObj.setGoodsReceiptStockUserName(rs.getString("stockByUserName"));
				    	
						
						
				    	//goods receipt product details
				    	GoodsReceiptProduct grProdObj = new GoodsReceiptProduct();
				    	
				    	grProdObj.setRecid(rs.getDouble("recid"));
				    	grProdObj.setGoodsReceiptProductId(rs.getDouble("productID"));
				    	grProdObj.setGoodsReceiptProductProductName(rs.getString("productName"));
				    	grProdObj.setGoodsReceiptProductPack(rs.getDouble("productPack"));
				    	grProdObj.setGoodsReceiptProductCompanyName(rs.getString("companyName"));
				    	grProdObj.setGoodsReceiptProductBatchId(rs.getDouble("productBatchId"));
				    	grProdObj.setGoodsReceiptProductQty(rs.getDouble("QuantityProduct"));
				    	grProdObj.setGoodsReceiptProductFree(rs.getDouble("FreeProduct"));
				    	grProdObj.setGoodsReceiptProductMRP(rs.getBigDecimal("productMRP"));
				    	grProdObj.setGoodsReceiptProductTrade(rs.getBigDecimal("productBatchTrade"));
				    	grProdObj.setGoodsReceiptProductRate(rs.getBigDecimal("productBatchPurchaseRate"));
				    	//grProdObj.setGoodsReceiptProductPOId(rs.getDouble("PO"));
				    	grProdObj.setGoodsReceiptProductDifference(rs.getDouble("Difference"));
				    	grProdObj.setGoodsReceiptProductCST(rs.getBigDecimal("CST"));
				    	grProdObj.setGoodsReceiptProductLT(rs.getBigDecimal("LT"));
				    	grProdObj.setGoodsReceiptProductVAT(rs.getBigDecimal("VAT"));
				    	grProdObj.setGoodsReceiptProductVatChargedOn(rs.getDouble("vatChargeOn"));
				    	grProdObj.setGoodsReceiptProductStorageId(rs.getInt("storageId"));
				    	grProdObj.setGoodsReceiptProductReceiptTypeId(rs.getInt("receipttypeId"));
				    	grProdObj.setGoodsReceiptProductStockInwardId(rs.getDouble("SIID"));
				    	grProdObj.setGoodsReceiptProductContents(rs.getString("contentName"));
				    	grProdObj.setGoodsReceiptProductType(rs.getString("productType"));
				    	
				    	
				    	if(rs.getInt("deleted") == 1){
				    		grProdObj.setGoodsReceiptProductIsDeleted(true);
			    		}else{
			    			grProdObj.setGoodsReceiptProductIsDeleted(false);
			    		}
				    	
			    		double sum = rs.getDouble("QtySold")+rs.getDouble("FreeSold");
				    	
				    	if(sum > 0){
				    		grProdObj.setGoodsReceiptProductFlgSale(true);
				    	}else{
				    		grProdObj.setGoodsReceiptProductFlgSale(false);
						}
				    	
				    	//goods received product batch details
				    	
				    	GrProductBatch grProductBatchObj = new GrProductBatch();
				    	grProdObj.setGrProductBatchObj(grProductBatchObj);
				    	
				    	//grProdObj.getGrProductBatchObj().setGRID(rs.getDouble(""));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchId(rs.getDouble("productBatchId"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchNo(rs.getString("productBatchNo"));
				    	//grProdObj.getGrProductBatchObj().setGrProductBatchGrId(rs.getDouble("productBatchGrId"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchExpiryDate(rs.getString("productBatchExpiryDate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchMRP(rs.getBigDecimal("productBathMRP"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchTrade(rs.getBigDecimal("productBatchTrade"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchPurchaseRate(rs.getBigDecimal("productBatchPurchaseRate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchTradeDiscount(rs.getBigDecimal("productBatchTradeDiscount"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSellRate(rs.getBigDecimal("productBatchSellRate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchPurchaseDate(rs.getString("productBatchPurchaseDate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchActiveFlag(rs.getBoolean("productBatchActiveFlag"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchLockFlag(rs.getBoolean("productBatchLockFlag"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchRemark(rs.getString("productBatchRemark"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSpecialDiscount(rs.getBigDecimal("productBatchSpecialDiscount"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSpecialDiscountAmount(rs.getBigDecimal("productBatchSpecialDiscountAmt"));
				    	
				    	
				    	
				    	double output = grProdObj.getGoodsReceiptProductId();
		    		    if(output == 0)
		        		{
		    		    	grObj.setGrProductList(grProductList);
		    		    	grList.add(grObj);
		    		   	}else{
		    		   		grProductList.add(grProdObj);
					    	grObj.setGrProductList(grProductList);
					    	
					    	grList.add(grObj);
		    		    }
				    	
				    	/*
				    	grProductList.add(grProdObj);
				    	grObj.setGrProductList(grProductList);
				    	
				    	grList.add(grObj);*/
				   		
					} else {
						
						//goods receipt product details
						
						GoodsReceiptProduct grProdObj = new GoodsReceiptProduct();
						
						grProdObj.setRecid(rs.getDouble("recid"));
						grProdObj.setGoodsReceiptProductId(rs.getDouble("productID"));
				    	grProdObj.setGoodsReceiptProductProductName(rs.getString("productName"));
				    	grProdObj.setGoodsReceiptProductPack(rs.getDouble("productPack"));
				    	grProdObj.setGoodsReceiptProductCompanyName(rs.getString("companyName"));
				    	grProdObj.setGoodsReceiptProductBatchId(rs.getDouble("productBatchId"));
				    	grProdObj.setGoodsReceiptProductQty(rs.getDouble("QuantityProduct"));
				    	grProdObj.setGoodsReceiptProductFree(rs.getDouble("FreeProduct"));
				    	grProdObj.setGoodsReceiptProductMRP(rs.getBigDecimal("productMRP"));
				    	grProdObj.setGoodsReceiptProductTrade(rs.getBigDecimal("productBatchTrade"));
				    	grProdObj.setGoodsReceiptProductRate(rs.getBigDecimal("productBatchPurchaseRate"));
				    	//grProdObj.setGoodsReceiptProductPOId(rs.getDouble("PO"));
				    	grProdObj.setGoodsReceiptProductDifference(rs.getDouble("Difference"));
				    	grProdObj.setGoodsReceiptProductCST(rs.getBigDecimal("CST"));
				    	grProdObj.setGoodsReceiptProductLT(rs.getBigDecimal("LT"));
				    	grProdObj.setGoodsReceiptProductVAT(rs.getBigDecimal("VAT"));
				    	grProdObj.setGoodsReceiptProductVatChargedOn(rs.getDouble("vatChargeOn"));
				    	grProdObj.setGoodsReceiptProductStorageId(rs.getInt("storageId"));
				    	grProdObj.setGoodsReceiptProductReceiptTypeId(rs.getInt("receipttypeId"));
				    	grProdObj.setGoodsReceiptProductStockInwardId(rs.getDouble("SIID"));
				    	grProdObj.setGoodsReceiptProductContents(rs.getString("contentName"));
				    	grProdObj.setGoodsReceiptProductType(rs.getString("productType"));
				    	
				    	if(rs.getInt("deleted") == 1){
				    		grProdObj.setGoodsReceiptProductIsDeleted(true);
			    		}else{
			    			grProdObj.setGoodsReceiptProductIsDeleted(false);
			    		}
				    	
				    	double sum = rs.getDouble("QtySold")+rs.getDouble("FreeSold");
				    	
				    	if(sum > 0){
				    		grProdObj.setGoodsReceiptProductFlgSale(true);
				    	}else{
				    		grProdObj.setGoodsReceiptProductFlgSale(false);
						}
				    	//goods received product batch details
				    	GrProductBatch grProductBatchObj = new GrProductBatch();
				    	grProdObj.setGrProductBatchObj(grProductBatchObj);
				    	
				    	grProdObj.getGrProductBatchObj().setGrProductBatchId(rs.getDouble("productBatchId"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchNo(rs.getString("productBatchNo"));
				    	//grProdObj.getGrProductBatchObj().setGrProductBatchGrId(rs.getDouble("productBatchGrId"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchExpiryDate(rs.getString("productBatchExpiryDate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchMRP(rs.getBigDecimal("productBathMRP"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchTrade(rs.getBigDecimal("productBatchTrade"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchPurchaseRate(rs.getBigDecimal("productBatchPurchaseRate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchTradeDiscount(rs.getBigDecimal("productBatchTradeDiscount"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSellRate(rs.getBigDecimal("productBatchSellRate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchPurchaseDate(rs.getString("productBatchPurchaseDate"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchActiveFlag(rs.getBoolean("productBatchActiveFlag"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchLockFlag(rs.getBoolean("productBatchLockFlag"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchRemark(rs.getString("productBatchRemark"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSpecialDiscount(rs.getBigDecimal("productBatchSpecialDiscount"));
				    	grProdObj.getGrProductBatchObj().setGrProductBatchSpecialDiscountAmount(rs.getBigDecimal("productBatchSpecialDiscountAmt"));
				    	
				    	
				    	grProductList.add(grProdObj);
				    	grObj.setGrProductList(grProductList);
				    	
					} // end of else
				  
					loopGrID = rs.getDouble("ID");  //set loopGrID for comparison
				} // end of while loop
				
				/****************** for po list ******************/
				
				
						String query1 = "{call getProductPO (?,?,?,?,?,?)}";
						cstatement1 = con.prepareCall(query1);
						cstatement1.setString(1, grObj.getGoodsReceiptDate());
						cstatement1.setDouble(2, grObj.getGoodsReceiptId());
						cstatement1.setString(3, reqObj.getUserId());
						cstatement1.setString(4, reqObj.getToken());
						cstatement1.setInt(5, reqObj.getViewPermissionID());
						cstatement1.setDouble(6, status);
						
						
						cstatement1.registerOutParameter(6, java.sql.Types.INTEGER); 
						
						rs1=cstatement1.executeQuery();
						
						status = cstatement1.getInt(6);
						
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{
						
							double loopPoID = 0;
					
							CompanyPurchaseOrder cpoObj = new CompanyPurchaseOrder();		   
							List<CompanyPurchaseOrder> cpoList = new ArrayList<CompanyPurchaseOrder>();
							List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
				
							while(rs1.next()){
								if(loopPoID != rs1.getDouble("POID")){
							
								//po details
							
								cpoObj = new CompanyPurchaseOrder();
						
								cpoObj.setRecid(rs1.getDouble("POID"));
								cpoObj.setCpoId(rs1.getDouble("POID"));
								cpoObj.setCpoDate(rs1.getString("poOrderDate"));
								cpoObj.setCpoAmount(rs1.getDouble("poOrderAmt"));
							
								//po product details
							
								cpoProductList = new ArrayList<CompanyProduct>();
								
								CompanyProduct cpObj = new CompanyProduct();
								cpObj.setProductId(rs1.getDouble("siPID"));
								cpObj.setGrQuantity(rs1.getDouble("sipoQuantity"));
								//cpObj.setGrScheme(rs1.getDouble("productScheme"));
								cpObj.setQtyReceivedOther(rs1.getDouble("QuantityReceivedOther"));
								cpObj.setQty(rs1.getDouble("productQuantity"));
								cpObj.setScheme(rs1.getDouble("productScheme"));
								cpObj.setSIID(rs1.getDouble("SIID"));
								
								cpoProductList.add(cpObj);
							
								cpoObj.setCpoProductList(cpoProductList);
								cpoList.add(cpoObj);
							
					   		
							} else {
								
								CompanyProduct cpObj = new CompanyProduct();
								cpObj.setProductId(rs1.getDouble("siPID"));
								cpObj.setGrQuantity(rs1.getDouble("sipoQuantity"));
								//cpObj.setGrScheme(rs1.getDouble("productScheme"));
								cpObj.setQtyReceivedOther(rs1.getDouble("QuantityReceivedOther"));
								cpObj.setQty(rs1.getDouble("productQuantity"));
								cpObj.setScheme(rs1.getDouble("productScheme"));
								cpObj.setSIID(rs1.getDouble("SIID"));
								cpoProductList.add(cpObj);
								
								cpoObj.setCpoProductList(cpoProductList);
								
					    	
						    } // end of else
					  
								loopPoID = rs1.getDouble("POID");  //set loopPoID for comparison
								    	
						} // end of while loop
							
							
							
							
							
							grObj.setGrCpoList(cpoList);
							  if(grObj.getGoodsReceiptId() == 0){
							        throw new Exception("Goods Receipt NOT FOUND!!");		       
							   };
				}
				 
			}
			
			
			
		    json = util.util_makeJson(grObj);
		    
		    }catch (Exception e) {
		    	try {
		    		con.close();
		    		throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	} catch(Exception e1) {
		    		throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		    } 
		    
		    return json;
	}
	@Override
	public String bl_getGoodsReceiptAllProductList(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<GoodsReceiptProduct> grProductList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			grProductList =new ArrayList<GoodsReceiptProduct>();
			String query = "{call getGRproductList (?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getCompanyId());
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
			
				
				
				rs=cstatement.executeQuery();
			   
			    while(rs.next()){
			    	
			    	GoodsReceiptProduct grProdObj = new GoodsReceiptProduct();
			    	
			    	grProdObj.setGoodsReceiptProductId(rs.getDouble("productId"));
			    	grProdObj.setRecid(rs.getDouble("productId"));
			    	grProdObj.setGoodsReceiptProductProductName(rs.getString("productName"));
			    	grProdObj.setGoodsReceiptProductCompanyName(rs.getString("companyName"));
			    	grProdObj.setGoodsReceiptProductQtyAvailable(rs.getDouble("QtyAvailableTotal"));
			    	grProdObj.setGoodsReceiptProductFreeAvailable(rs.getDouble("FreeAvailableTotal"));
			    	grProdObj.setGoodsReceiptProductPurchaseFreeAvl(rs.getDouble("purchaseFreeAvlTotal"));
			    	grProdObj.setGoodsReceiptProductPurchaseQtyAvl(rs.getDouble("purchaseQtyAvlTotal"));
			    	grProdObj.setGoodsReceiptProductReceiptTypeId(rs.getInt("receiptTypeID"));
			    	grProdObj.setGoodsReceiptProductStorageId(rs.getInt("storageID"));
			    	grProdObj.setGoodsReceiptProductType(rs.getString("productType"));
			    	grProdObj.setGoodsReceiptProductContents(rs.getString("productContents"));
			    	grProdObj.setGoodsReceiptProductCST(rs.getBigDecimal("CST"));
			    	grProdObj.setGoodsReceiptProductLT(rs.getBigDecimal("LT"));
			    	grProdObj.setGoodsReceiptProductVAT(rs.getBigDecimal("VAT"));
			    	grProdObj.setGoodsReceiptProductVatChargedOn(rs.getDouble("vatChargeOn"));
			    	grProdObj.setGoodsReceiptProductPack(rs.getDouble("productPack"));
			    	
			    	  	
			    	grProductList.add(grProdObj);
			    	
			    }
			    
			}
		     
		    json = util.util_makeJson(grProductList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } 
		    
		    return json;
	}
	@Override
	public String bl_setGoodsReceipt(PurpleaidRequest reqObj) throws Exception {
		String response = null;
		Util_json util= null;
		int status  =444;
		Connection con = null;
		String query = null;
		CallableStatement callableStatement = null;
		GoodsReceipt grObj = null;
		String json = null;
		ResultSet rs1 = null;
		CallableStatement cstatement1 = null;
		CallableStatement callableStatement1 = null;
		CallableStatement callableStatement2 = null;
		CallableStatement callableStatement3 = null;
		CallableStatement callableStatement4 = null;
		CallableStatement callableStatement5 = null;
		CallableStatement cstatement = null;
		 JdbcConnection JdbcConnectionObj = null;
			
							

			
	
		boolean flgPBupdate= false;
		boolean flgPBAupdate= false; 
		boolean flgPBAdelete = false;
		boolean flgCheckiFsold = false;

		try{
			
			
			/*
							 													
				START													
																	
				Set flags --- flgPBupdate, flgPBAupdate, flgPBAdelete = false;													
				Insert or update GR table													
				For each product													
																	
				2.1	PBID = 0 then set flgPBupdate = True (insert in PB and SI) and if verified = 1 then flgPBAupdate = True (insert in PBA and SA)												
				2.2	PBID != 0 and PBAID = 0 and verified = 0 then flgPBupdate = True (update PB and SI)												
				2.3	PBID != 0 and PBAID = 0 and verified = 1 then flgPBupdate = True & flgPBAupdate = True (update PB and SI, PBA and SA)												
				2.4	PBID != 0 and PBAID != 0 and verified = 1 then												
						If NOT sold then flgPBupdate = True & flgPBAupdate = True (update PB and SI, PBA and SA)											
						IF sold then report ERROR											
				2.5	PBID != 0 and PBAID != 0 and verified = 0 then 												
						If NOT sold then flgPBupdate = True (update PB and SI) and flgPBAdelete = True (DELETE PBA and SA)											
						IF sold then report ERROR											
																	
				2.6	If flgPBupdate then 												
						If isBatchDeleted = 0 then Insert/update ELSE Delete PB & SI											
				2.7	If flgPBAupdate then												
						If isBatchDeleted = 0 then Insert/update  PBA & SA ELSE flgPBADelete (Delete PBA & SA)											
				2.8	If flgPBADelete then  												
						Delete from  PBA & SA											

			 */
			
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			util= new Util_json();
			grObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<GoodsReceipt>() {});
			double stockInwardId =0;	
			double batchid = 0;		
			double batchActiveid = 0;
			double stockActiveid = 0;
			double GRID = 0;
        /********************************** insert into goods received ***************************************/
			
			
			
			
			
query = "{call InsertGoodsReceived(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			callableStatement = con.prepareCall(query);
			
			callableStatement.setDouble(1, grObj.getGoodsReceiptId());
			callableStatement.setDouble(2, grObj.getGoodsReceiptCID());
			callableStatement.setDouble(3, grObj.getGoodsReceiptSID());
			callableStatement.setString(4, grObj.getGoodsReceiptDate());
			callableStatement.setString(5, grObj.getGoodsReceiptBillNo());
			callableStatement.setString(6, grObj.getGoodsReceiptBillDate());
			callableStatement.setBigDecimal(7, grObj.getGoodsReceiptBillAmount());
			callableStatement.setString(8, grObj.getGoodsReceiptLRNo());
			callableStatement.setString(9, grObj.getGoodsReceiptLRDate());
			callableStatement.setString(10, grObj.getGoodsReceiptLRDueDate());
			callableStatement.setString(11, grObj.getGoodsReceiptRemark());
			callableStatement.setInt(12, grObj.getGoodsReceiptPayment());
			callableStatement.setInt(13, grObj.getGoodsReceiptTransporter());
			callableStatement.setDouble(14, grObj.getGoodsReceiptBillDiscount());
			callableStatement.setDouble(15, grObj.getGoodsReceiptCases());
			callableStatement.setDouble(16, grObj.getGoodsReceiptQuantity());
			callableStatement.setDouble(17, grObj.getGoodsReceiptFree());
			callableStatement.setDouble(18, grObj.getGoodsReceiptVAT());
			callableStatement.setBigDecimal(19, grObj.getGoodsReceiptAdditionExcise());
			callableStatement.setBigDecimal(20, grObj.getGoodsReceiptAdditionEducationCess());
			callableStatement.setBigDecimal(21, grObj.getGoodsReceiptAdditionDebitNote());
			callableStatement.setBigDecimal(22, grObj.getGoodsReceiptAdditionCST());
			callableStatement.setBigDecimal(23, grObj.getGoodsReceiptAdditionOther());
			callableStatement.setBigDecimal(24, grObj.getGoodsReceiptDeductionTradeDiscount());
			callableStatement.setBigDecimal(25, grObj.getGoodsReceiptDeductionSpecialDiscount());
			callableStatement.setBigDecimal(26, grObj.getGoodsReceiptDeductionOctroiReimb());
			callableStatement.setBigDecimal(27, grObj.getGoodsReceiptDeductionCreditNote());
			callableStatement.setBigDecimal(28, grObj.getGoodsReceiptDeductionBillDiscount());
			callableStatement.setBigDecimal(29, grObj.getGoodsReceiptDeductionOther());
			callableStatement.setBigDecimal(30, grObj.getGoodsReceiptTotalItems());
			callableStatement.setBigDecimal(31, grObj.getGoodsReceiptRoundOff());
			callableStatement.setBigDecimal(32, grObj.getGoodsReceiptFreeVAT());
			callableStatement.setBigDecimal(33, grObj.getGoodsReceiptNetAmount());
			callableStatement.setBoolean(34, grObj.isGoodsReceiptUpdateToACFlag());
			callableStatement.setBoolean(35, grObj.isGoodsReceiptVerifiedFlag());
			//callableStatement.setString(36, grObj.getGoodsReceiptVerifiedByDetails());
			callableStatement.setDouble(36, grObj.getGoodsReceiptVerifiedByID());
			callableStatement.setString(37, grObj.getGoodsReceiptVerifiedOn());
			callableStatement.setString(38, reqObj.getUserId());
		
			callableStatement.setString(39, reqObj.getToken());
			callableStatement.setInt(40, reqObj.getInsertPermissionID());
			callableStatement.setInt(41, reqObj.getUpdatePermissionID());
           
			callableStatement.setDouble(42, status);
			callableStatement.setBoolean(43, grObj.isGoodsReceiptLedgerFlag());
			
			
			callableStatement.setBoolean(44, grObj.isGoodsReceiptStockFlag());
			
			callableStatement.setDouble(45, grObj.getGoodsReceiptLedgerById());
			callableStatement.setDouble(46, grObj.getGoodsReceiptStockById());
			
			callableStatement.setString(47, grObj.getGoodsReceiptLedgerOn());
			callableStatement.setString(48, grObj.getGoodsReceiptStockOn());
           
			
		
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			callableStatement.registerOutParameter(42, java.sql.Types.INTEGER);
		
			
			callableStatement.execute();
			
			GRID = callableStatement.getDouble(1);
			
			status  = callableStatement.getInt(42);
				
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
							
					System.out.println("goods receipt Id Saved !!!"+GRID);
					grObj.setGoodsReceiptId(GRID);
					con.commit();
					
					for(int i=0;i<grObj.getGrProductList().size();i++){ // for loop for product list
						
						GoodsReceiptProduct grProductObj = new GoodsReceiptProduct();		
						grProductObj = grObj.getGrProductList().get(i);
						
						GrProductBatch grProductBatchObj = new GrProductBatch();
						grProductBatchObj = grProductObj.getGrProductBatchObj();
						
						
						// setting conditions to flag
						if(grProductObj.getGoodsReceiptProductBatchId() == 0 && grObj.isGoodsReceiptVerifiedFlag() == false){
							flgPBupdate = true;
						}
						
						if(grObj.isGoodsReceiptVerifiedFlag() == true){
							flgPBupdate = true;
							flgPBAupdate = true;
						}
						
						if(grProductObj.getGoodsReceiptProductBatchId() != 0 && grObj.isGoodsReceiptVerifiedFlag() == false){
							flgPBupdate = true;
							flgPBAdelete = true;
						}
						
						
						
						/*
						if(grProductObj.getGoodsReceiptProductBatchId() != 0 && grProductBatchObj.getGrProductBatchActiveId() == 0 && grObj.isGoodsReceiptVerifiedFlag() == false){
							 flgPBupdate = true ;						
						}
						if(grProductObj.getGoodsReceiptProductBatchId() != 0 && grProductBatchObj.getGrProductBatchActiveId() == 0 && grObj.isGoodsReceiptVerifiedFlag() == true){
							 flgPBupdate = true;
							 flgPBAupdate = true; 										
						}
						
						if(grProductObj.getGoodsReceiptProductBatchId() != 0 && grProductBatchObj.getGrProductBatchActiveId() != 0 && grObj.isGoodsReceiptVerifiedFlag() == true){
							flgCheckiFsold = true;
							flgPBupdate = true;
							flgPBAupdate = true;							
						}
						if(	grProductObj.getGoodsReceiptProductBatchId() != 0 && grProductBatchObj.getGrProductBatchActiveId() != 0 && grObj.isGoodsReceiptVerifiedFlag() == false ){
							flgCheckiFsold = true;								
							flgPBupdate = true ;
							flgPBAdelete = true ;						
						}
*/
						if(flgPBupdate == true){
							
							String query5="{call InsertUpdateProductBatch(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
							
							callableStatement1 = con.prepareCall(query5);
														
							callableStatement1.setDouble(1, grProductObj.getGoodsReceiptProductBatchId());
							callableStatement1.setString(2 , grProductBatchObj.getGrProductBatchNo());
							callableStatement1.setDouble(3, GRID);
							callableStatement1.setString(4, grProductBatchObj.getGrProductBatchExpiryDate());
							callableStatement1.setBigDecimal(5, grProductBatchObj.getGrProductBatchMRP());
							callableStatement1.setBigDecimal(6, grProductBatchObj.getGrProductBatchTrade());
							callableStatement1.setBigDecimal(7, grProductBatchObj.getGrProductBatchPurchaseRate());
							callableStatement1.setBigDecimal(8, grProductBatchObj.getGrProductBatchTradeDiscount());
							callableStatement1.setBigDecimal(9, grProductBatchObj.getGrProductBatchSellRate());
							callableStatement1.setString(10, grObj.getGoodsReceiptDate()); //changing grProductBatchPurchaseDate to goodsReceiptDate  
							callableStatement1.setBoolean(11, grProductBatchObj.isGrProductBatchActiveFlag());
							callableStatement1.setBoolean(12, grProductBatchObj.isGrProductBatchLockFlag());
							callableStatement1.setBoolean(13, grProductBatchObj.isGrProductBatchIsDeleted());
							callableStatement1.setString(14, reqObj.getUserId());
							callableStatement1.setString(15, reqObj.getToken());
							
							if( grObj.getGoodsReceiptId() == 0){ 
								callableStatement1.setInt(16, reqObj.getInsertPermissionID());
						    }else{
						    	callableStatement1.setInt(16, reqObj.getUpdatePermissionID());
						    }
							callableStatement1.setDouble(17, status);
							callableStatement1.setBoolean(18, flgCheckiFsold);
							callableStatement1.setBigDecimal(19, grProductBatchObj.getGrProductBatchSpecialDiscount() );
							callableStatement1.setBigDecimal(20, grProductBatchObj.getGrProductBatchSpecialDiscountAmount());
							callableStatement1.setString(21 , grProductBatchObj.getGrProductBatchRemark());
							
							callableStatement1.execute();
							
							callableStatement1.registerOutParameter(1, java.sql.Types.DOUBLE);
							callableStatement1.registerOutParameter(17, java.sql.Types.INTEGER);
							
							
							 batchid = callableStatement1.getDouble(1);
							
							status  = callableStatement1.getInt(17);
							
							if(status == 0){
								throw new Exception("User is not Authorized"+"->"+status);
							}else if(status == 1){
								throw new Exception("No Permission"+"->"+status);
							}else{
								con.commit();
								
								if(grProductBatchObj.isGrProductBatchIsDeleted() == false){
									String query6="{call InsertUpdateStockInwards(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
									//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
									callableStatement3 = con.prepareCall(query6);
									callableStatement3.setDouble(1, grProductObj.getGoodsReceiptProductStockInwardId());					
									callableStatement3.setDouble(2, GRID);
									callableStatement3.setDouble(3, grProductObj.getGoodsReceiptProductId());
									callableStatement3.setDouble(4, batchid ); //grProductObj.getGoodsReceiptProductBatchId()
									callableStatement3.setDouble(5, grProductObj.getGoodsReceiptProductQty());
									callableStatement3.setDouble(6, grProductObj.getGoodsReceiptProductFree());
									callableStatement3.setInt(7, grProductObj.getGoodsReceiptProductStorageId());
									callableStatement3.setInt(8, grProductObj.getGoodsReceiptProductReceiptTypeId());
									callableStatement3.setDouble(9, grProductObj.getRecid());
									callableStatement3.setBoolean(10, grProductObj.isGoodsReceiptProductIsDeleted());
									callableStatement3.setString(11, reqObj.getUserId());
									callableStatement3.setString(12, reqObj.getToken());
										
									if( grObj.getGoodsReceiptId() == 0){ 
										callableStatement3.setInt(13, reqObj.getInsertPermissionID());
								    }else{
								    	callableStatement3.setInt(13, reqObj.getUpdatePermissionID());
								    }
									callableStatement3.setDouble(14, status);
									callableStatement3.setBoolean(15, flgCheckiFsold);
									
									
									callableStatement3.execute();	
									
									callableStatement3.registerOutParameter(14, java.sql.Types.INTEGER);
									callableStatement3.registerOutParameter(1, java.sql.Types.DOUBLE);
									stockInwardId = callableStatement3.getDouble(1);

									status  = callableStatement3.getInt(14);
									
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{
										con.commit();
									}
								}
							}
						}
						
						
						if(flgPBAupdate == true){
							
							String query8="{call InsertUpdateProductBatchActive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
							//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
							
							callableStatement2 = con.prepareCall(query8);
							
							grProductBatchObj = grProductObj.getGrProductBatchObj();
							
							callableStatement2.setDouble(1, grProductBatchObj.getGrProductBatchActiveId());
							callableStatement2.setString(2 , grProductBatchObj.getGrProductBatchNo());
							callableStatement2.setDouble(3, GRID);
							callableStatement2.setString(4, grProductBatchObj.getGrProductBatchExpiryDate());
							callableStatement2.setBigDecimal(5, grProductBatchObj.getGrProductBatchMRP());
							callableStatement2.setBigDecimal(6, grProductBatchObj.getGrProductBatchTrade());
							callableStatement2.setBigDecimal(7, grProductBatchObj.getGrProductBatchPurchaseRate());
							callableStatement2.setBigDecimal(8, grProductBatchObj.getGrProductBatchTradeDiscount());
							callableStatement2.setBigDecimal(9, grProductBatchObj.getGrProductBatchSellRate());
							callableStatement2.setString(10, grProductBatchObj.getGrProductBatchPurchaseDate());
							callableStatement2.setBoolean(11, grProductBatchObj.isGrProductBatchActiveFlag());
							callableStatement2.setBoolean(12, grProductBatchObj.isGrProductBatchLockFlag());
							callableStatement2.setDouble(13, batchid);
							callableStatement2.setBoolean(14, grProductBatchObj.isGrProductBatchIsDeleted());
							callableStatement2.setString(15, reqObj.getUserId());
							callableStatement2.setString(16, reqObj.getToken());
							
							if( grObj.getGoodsReceiptId() == 0){ 
								callableStatement2.setInt(17, reqObj.getInsertPermissionID());
						    }else{
						    	callableStatement2.setInt(17, reqObj.getUpdatePermissionID());
						    }
							callableStatement2.setDouble(18, status);
							callableStatement2.setBoolean(19, flgCheckiFsold);
							
							callableStatement2.setBigDecimal(20, grProductBatchObj.getGrProductBatchSpecialDiscount() );
							callableStatement2.setBigDecimal(21, grProductBatchObj.getGrProductBatchSpecialDiscountAmount());
							callableStatement2.setString(22 , grProductBatchObj.getGrProductBatchRemark());
															
							callableStatement2.execute();				
											
							callableStatement2.registerOutParameter(1, java.sql.Types.DOUBLE);
							callableStatement2.registerOutParameter(18, java.sql.Types.INTEGER);
							
							batchActiveid = callableStatement2.getDouble(1);
							
							status  = callableStatement2.getInt(18);
							
							if(status == 0){
								throw new Exception("User is not Authorized"+"->"+status);
							}else if(status == 1){
								throw new Exception("No Permission"+"->"+status);
							}else{
							
								con.commit();
								
								if(grProductBatchObj.isGrProductBatchIsDeleted() == false){
									String query7="{call InsertUpdateStockActive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
									//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
									callableStatement4 = con.prepareCall(query7);
									
									callableStatement4.setDouble(1, grProductObj.getGoodsReceiptProductStockActiveId());
									callableStatement4.setDouble(2, GRID);
									callableStatement4.setDouble(3, grProductObj.getGoodsReceiptProductId());
									callableStatement4.setDouble(4, batchActiveid); // product batch active ID 
									callableStatement4.setDouble(5, grProductObj.getGoodsReceiptProductQty());
									callableStatement4.setDouble(6, grProductObj.getGoodsReceiptProductFree());
									callableStatement4.setDouble(7, grProductObj.getGoodsReceiptProductQty()); // quantity available
									callableStatement4.setDouble(8, grProductObj.getGoodsReceiptProductFree()); // free available
									callableStatement4.setInt(9, grProductObj.getGoodsReceiptProductStorageId());
									callableStatement4.setInt(10, grProductObj.getGoodsReceiptProductReceiptTypeId());
									callableStatement4.setDouble(11, stockInwardId);
									callableStatement4.setBoolean(12, grProductObj.isGoodsReceiptProductIsDeleted());
									callableStatement4.setString(13, reqObj.getUserId());
									callableStatement4.setString(14, reqObj.getToken());
										
									if( grObj.getGoodsReceiptId() == 0){ 
										callableStatement4.setInt(15, reqObj.getInsertPermissionID());
								    }else{
								    	callableStatement4.setInt(15, reqObj.getUpdatePermissionID());
								    }
									callableStatement4.setDouble(16, status);
									callableStatement4.setBoolean(17, flgCheckiFsold);
									
									callableStatement4.execute();	
									callableStatement4.registerOutParameter(1, java.sql.Types.DOUBLE);
									callableStatement4.registerOutParameter(16, java.sql.Types.INTEGER);
									stockActiveid = callableStatement4.getDouble(1);
									status  = callableStatement4.getInt(16);
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{
										con.commit();
									}
								}
							}
						}
						
						if(flgPBAdelete == true){
							
							String query8="{call deletePBA(?,?,?,?,?)}";
							//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
							callableStatement4 = con.prepareCall(query8);
							
							callableStatement4.setDouble(1, grProductBatchObj.getGrProductBatchActiveId());
							callableStatement4.setString(2, reqObj.getUserId());
							callableStatement4.setString(3, reqObj.getToken());
								
								if( grObj.getGoodsReceiptId() == 0){ 
									callableStatement4.setInt(4, reqObj.getInsertPermissionID());
							    }else{
							    	callableStatement4.setInt(4, reqObj.getUpdatePermissionID());
							    }
								callableStatement4.setDouble(5, status);
								callableStatement4.execute();
								callableStatement4.registerOutParameter(5, java.sql.Types.INTEGER);
								
								status  = callableStatement4.getInt(5);
								if(status == 0){
									throw new Exception("User is not Authorized"+"->"+status);
								}else if(status == 1){
									throw new Exception("No Permission"+"->"+status);
								}else{
									con.commit();
									String query9="{call deleteSA(?,?,?,?,?)}";
									//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
									callableStatement4 = con.prepareCall(query9);
									
									callableStatement4.setDouble(1, grProductObj.getGoodsReceiptProductStockActiveId());
									callableStatement4.setString(2, reqObj.getUserId());
									callableStatement4.setString(3, reqObj.getToken());
										
										if( grObj.getGoodsReceiptId() == 0){ 
											callableStatement4.setInt(4, reqObj.getInsertPermissionID());
									    }else{
									    	callableStatement4.setInt(4, reqObj.getUpdatePermissionID());
									    }
										callableStatement4.setDouble(5, status);
										callableStatement4.execute();
										callableStatement4.registerOutParameter(5, java.sql.Types.INTEGER);
										
										status  = callableStatement4.getInt(5);
										if(status == 0){
											throw new Exception("User is not Authorized"+"->"+status);
										}else if(status == 1){
											throw new Exception("No Permission"+"->"+status);
										}else{
											con.commit();
										}
								}
						}
				
						
						
						
						
						//set SIID, PBID , SAID, PBAID
						
							grProductObj.setGoodsReceiptProductStockInwardId(stockInwardId);
							grProductObj.setGoodsReceiptProductSAID(stockActiveid);
							grProductObj.setGoodsReceiptProductPBID(batchid);
							grProductObj.setGoodsReceiptProductPBAID(batchActiveid);
			
						 }// end of for product list	
					   }
					
					
					/*************code for link all product to selected po  ********************/
					
					String query9 = "{call deleteSIPO(?,?,?,?,?)}";
					cstatement = con.prepareCall (query9);
					cstatement.setDouble(1, GRID);
					cstatement.setString(2, reqObj.getUserId());
					cstatement.setString(3, reqObj.getToken());
					
					if( grObj.getGoodsReceiptId() == 0){ 
						cstatement.setInt(4, reqObj.getInsertPermissionID());
				    }else{
				    	cstatement.setInt(4, reqObj.getUpdatePermissionID());
				    }
					cstatement.setDouble(5, status);
					
					cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
					cstatement.executeUpdate();
					
					status = cstatement.getInt(5);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{ 
					
						con.commit();
						String query10 = "{call insertSIPO (?,?,?,?,?,?,?,?,?,?,?)}";
						callableStatement5 = con.prepareCall(query10);
						
						CompanyPurchaseOrder cpoObj = new CompanyPurchaseOrder();
									
						for(int i=0;i<grObj.getGrCpoList().size();i++){ // loop through cpo list
							
							cpoObj = grObj.getGrCpoList().get(i);
							
							for(int j=0;j<cpoObj.getCpoProductList().size();j++) // loop through product list
							{
								CompanyProduct companyProduct = new CompanyProduct();
								companyProduct = cpoObj.getCpoProductList().get(j);
								
								if(companyProduct.getGrQuantity() != 0 ){
														
									callableStatement5.setDouble(1, companyProduct.getSIID());
									callableStatement5.setDouble(2, cpoObj.getCpoId());
									callableStatement5.setDouble(3, companyProduct.getProductId());
									callableStatement5.setDouble(4, GRID);
									callableStatement5.setDouble(5, companyProduct.getGrQuantity());
									callableStatement5.setString(6, reqObj.getUserId());
									callableStatement5.setString(9, reqObj.getToken());
									
									if( grObj.getGoodsReceiptId() == 0){ 
										callableStatement5.setInt(10, reqObj.getInsertPermissionID());
								    }else{
								    	callableStatement5.setInt(10, reqObj.getUpdatePermissionID());
								    }
									callableStatement5.setDouble(11, status);
									callableStatement5.registerOutParameter(11, java.sql.Types.INTEGER);
									callableStatement5.execute();
									
									status = callableStatement5.getInt(11);	
									
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{ 
									  con.commit();
									  
									// add code to fetch gr po list and pass it in response of save
										
										String query1 = "{call getProductPO (?,?)}";
										cstatement1 = con.prepareCall(query1);
										cstatement1.setString(1, grObj.getGoodsReceiptDate());
										cstatement1.setDouble(2, GRID);
										
								
										rs1 = cstatement1.executeQuery();
										double loopPoID = 0;
								
										//CompanyPurchaseOrder cpoObj = new CompanyPurchaseOrder();		   
										List<CompanyPurchaseOrder> cpoList = new ArrayList<CompanyPurchaseOrder>();
										List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
							
										while(rs1.next()){
											if(loopPoID != rs1.getDouble("POID")){
										
											//po details
										
											cpoObj = new CompanyPurchaseOrder();
									
											cpoObj.setRecid(rs1.getDouble("POID"));
											cpoObj.setCpoId(rs1.getDouble("POID"));
											cpoObj.setCpoDate(rs1.getString("poOrderDate"));
											cpoObj.setCpoAmount(rs1.getDouble("poOrderAmt"));
										
											//po product details
										
											cpoProductList = new ArrayList<CompanyProduct>();
											
											CompanyProduct cpObj = new CompanyProduct();
											cpObj.setProductId(rs1.getDouble("siPID"));
											cpObj.setGrQuantity(rs1.getDouble("sipoQuantity"));
											//cpObj.setGrScheme(rs1.getDouble("productScheme"));
											cpObj.setQtyReceivedOther(rs1.getDouble("QuantityReceivedOther"));
											cpObj.setQty(rs1.getDouble("productQuantity"));
											cpObj.setScheme(rs1.getDouble("productScheme"));
											cpObj.setSIID(rs1.getDouble("SIID"));
											
											cpoProductList.add(cpObj);
										
											cpoObj.setCpoProductList(cpoProductList);
											cpoList.add(cpoObj);
										
								   		
										} else {
											
											CompanyProduct cpObj = new CompanyProduct();
											cpObj.setProductId(rs1.getDouble("siPID"));
											cpObj.setGrQuantity(rs1.getDouble("sipoQuantity"));
											//cpObj.setGrScheme(rs1.getDouble("productScheme"));
											cpObj.setQtyReceivedOther(rs1.getDouble("QuantityReceivedOther"));
											cpObj.setQty(rs1.getDouble("productQuantity"));
											cpObj.setScheme(rs1.getDouble("productScheme"));
											cpObj.setSIID(rs1.getDouble("SIID"));
											cpoProductList.add(cpObj);
											
											cpoObj.setCpoProductList(cpoProductList);
											
								    	
									    } // end of else
								  
											loopPoID = rs1.getDouble("POID");  //set loopPoID for comparison
											    	
									} // end of while loop
										
									grObj.setGrCpoList(cpoList);
								}
								}
							}
							
						}
						
			  }
				
						
			
			json = util.util_makeJson(grObj);
			response = json;
			
		
		}catch(Exception e){
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 150000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 150000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 150000102: "+e.getMessage()+"->"+status);
				}

			}
		}
		
		return response;
	}

	@Override
	public String bl_getGoodsReceiptBatchSchemeList(PurpleaidRequest reqObj)throws Exception {
		 JdbcConnection JdbcConnectionObj = null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		//List<GoodsReceipt> grHistoryList = null;
		String allHistory = null;
		String comma = null;
		try{
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			String query = "{call getPurchaseHistory (?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, 5);
			cstatement.setDouble(2, reqObj.getProductId());
			cstatement.setString(3, reqObj.getUserId());
			cstatement.setString(4, reqObj.getToken());
			cstatement.setInt(5, reqObj.getViewPermissionID());
			cstatement.setDouble(6, status);
			
			cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(6);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
		
				
				allHistory = "[";
				
				String gr =null;
				String cpo = null;
				String cp = null;
				String p = null;
				String grpb = null;
					
				while(rs.next()){
			    	
			    	GoodsReceipt grObj = new GoodsReceipt();
			    	grObj.setGoodsReceiptId(rs.getDouble("GRID"));
			    	grObj.setGoodsReceiptDate(rs.getString("grDate"));
			    	
			    	
			    	gr = "{\"grId\":"+grObj.getGoodsReceiptId()+",\"grDate\":\""+grObj.getGoodsReceiptDate().replaceAll("-","/")+"\",";
			    	
			    	    	
			    	CompanyPurchaseOrder cpoObj =new CompanyPurchaseOrder();
			    	cpoObj.setCpoId(rs.getDouble("POID"));
			    	cpoObj.setCpoDate(rs.getString("poDate"));
			    	cpoObj.setCpoSupplierId(rs.getDouble("supplierId"));
			    	String temp = cpoObj.getCpoDate().replaceAll("-", "/");
			    	
			    	cpo = "\"poId\":"+cpoObj.getCpoId()+",\"poDate\":\""+temp+"\",\"poSID\":"+cpoObj.getCpoSupplierId()+",";
			    	gr=gr.concat(cpo);
			    	
			    	
			    	CompanyProduct cpObj = new CompanyProduct();
			    	cpObj.setQty(rs.getDouble("quantity"));
			    	cpObj.setScheme(rs.getDouble("free"));
			    	
			    	cp = "\"qty\":"+cpObj.getQty()+",\"free\":"+cpObj.getScheme()+",";
			    	gr=gr.concat(cp);
			    	
			    	Product pObj = new Product();
			    	pObj.setProductId(rs.getDouble("PID"));
			    	pObj.setProductName(rs.getString("productName"));
			    	
			    	p= "\"pID\":"+pObj.getProductId()+",\"pName\":\""+pObj.getProductName()+"\",";
			    	gr=gr.concat(p);
			    	
			    	GrProductBatch grProdObj = new GrProductBatch();
			    	grProdObj.setGrProductBatchMRP(rs.getBigDecimal("MRP"));
			    	grProdObj.setGrProductBatchPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	grProdObj.setGrProductBatchTradeDiscount(rs.getBigDecimal("tradeDiscount"));
			    	grProdObj.setGrProductBatchTradeDiscountAmount(rs.getBigDecimal("tradeDiscountAmt")); 
			    	grProdObj.setGrProductBatchSpecialDiscount(rs.getBigDecimal("specialDiscount"));
			    	grProdObj.setGrProductBatchTradeDiscountAmount(rs.getBigDecimal("specialDiscountAmt"));
			    	if(rs.isLast()){
			    		comma="";
			    	}else{
			    		comma=",";
			    	}
			    	grpb = "\"mrp\":"+grProdObj.getGrProductBatchMRP()+",\"purchaseRate\":"+grProdObj.getGrProductBatchPurchaseRate()+",\"tradeDiscount\":"+grProdObj.getGrProductBatchTradeDiscount()+",\"tradeDiscountAmt\":"+grProdObj.getGrProductBatchTradeDiscountAmount()+",\"specialDiscount\":"+grProdObj.getGrProductBatchSpecialDiscount()+",\"specialDiscountAmt\":"+grProdObj.getGrProductBatchSpecialDiscountAmount()+"}"+comma;
			    	gr=gr.concat(grpb);
			    	allHistory=allHistory.concat(gr);
			    	
				}
			}
			json = allHistory.concat("]");
			
		    
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
	
	
	//dipika's method
	
	
	@Override		
	public String bl_getGoodReceiptRegister(PurpleaidRequest reqObj) throws Exception {		
		Util_json util = null;		
		JdbcConnection connectionObj = null;		
		Connection con = null;		
		String query = null;		
		CallableStatement cstatement = null;		
		ResultSet rs = null;		
		String json = null;		
		int status = 444;		
		double LoopGRID = 0;		
				
		List<GoodsReceipt> goodReceiptRegisterList = null;		
		GoodsReceipt goodReceiptObj = null;		
				
		try{		
					
			util = new Util_json();		
			connectionObj = new JdbcConnection();		
			con = connectionObj.getConnection();		
					
			goodReceiptRegisterList = new ArrayList<GoodsReceipt>();		
			goodReceiptObj = new GoodsReceipt();		
					
			query = "{call getAllGRList(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";		
			cstatement = con.prepareCall(query);		
					
			cstatement.setDouble(1, reqObj.getLastID());		
			cstatement.setDouble(2, reqObj.getGrID());		
			cstatement.setInt(3, reqObj.getListLimit());		
			cstatement.setDouble(4,reqObj.getCompanyId());		
			cstatement.setDouble(5, reqObj.getSupplierId());		
			cstatement.setDouble(6, reqObj.getTransporterId());		
			cstatement.setString(7, reqObj.getFromDate());		
			cstatement.setString(8, reqObj.getlRDate());		
			cstatement.setString(9, reqObj.getDueDate());		
			cstatement.setBoolean(10, reqObj.isLedger());		
			cstatement.setInt(11, reqObj.getPoItem());		
			cstatement.setDouble(12, reqObj.getFromAmt());		
			cstatement.setDouble(13, reqObj.getToAmt());		
			cstatement.setDouble(14, reqObj.getVerifiedByFilterId());		
			cstatement.setDouble(15, reqObj.getCreatedByFilterId());		
			cstatement.setString(16, reqObj.getUserId());		
			cstatement.setString(17, reqObj.getToken());		
			cstatement.setInt(18, reqObj.getViewPermissionID());		
			cstatement.setInt(19, status);		
			cstatement.registerOutParameter(19, java.sql.Types.INTEGER);		
			rs = cstatement.executeQuery();		
			status = cstatement.getInt(19);		
			if(status == 0){		
				throw new Exception("User is not Authorized"+"->"+status);		
			}else if(status == 1){		
				throw new Exception("No Permission"+"->"+status);		
			}else{ 		
						
				List<GoodsReceiptProduct> grProductList = null;		
						
				while(rs.next()){		
					if(LoopGRID != rs.getDouble("ID")){		
						
						goodReceiptObj = new GoodsReceipt();		
						grProductList = new ArrayList<GoodsReceiptProduct>();		
								
						goodReceiptObj.setGoodsReceiptId(rs.getDouble("ID"));		
						goodReceiptObj.setRecid(rs.getDouble("ID"));		
						goodReceiptObj.setGoodsReceiptCID(rs.getDouble("CID"));		
						goodReceiptObj.setGoodsReceiptSID(rs.getDouble("SID"));		
						goodReceiptObj.setGoodsReceiptIsDeleted(rs.getBoolean("deleted"));		
						//goodReceiptObj.setGoodsReceiptBillDate(rs.getString("billDate"));		
						goodReceiptObj.setGoodsReceiptBillDate(rs.getString("grbillDate"));		
						goodReceiptObj.setGoodsReceiptDate(rs.getString("grDate"));		
						//goodReceiptObj.setGoodsReceiptDate(rs.getString("goodsReceiptDate"));		
						goodReceiptObj.setGoodsReceiptBillNo(rs.getString("billNo"));		
						goodReceiptObj.setGoodsReceiptBillAmount(rs.getBigDecimal("billAmt"));		
						goodReceiptObj.setGoodsReceiptLRNo(rs.getString("LRNo"));		
						//goodReceiptObj.setGoodsReceiptLRDate(rs.getString("LRDate"));		
						goodReceiptObj.setGoodsReceiptLRDate(rs.getString("grLRDate"));		
						//goodReceiptObj.setGoodsReceiptLRDueDate(rs.getString("LRDueDate"));		
						goodReceiptObj.setGoodsReceiptLRDueDate(rs.getString("grLRDueDate"));		
						goodReceiptObj.setGoodsReceiptRemark(rs.getString("Remark"));		
						goodReceiptObj.setGoodsReceiptPayment(rs.getInt("payment"));		
								
						goodReceiptObj.setGoodsReceiptTransporter(rs.getInt("Transporter"));		
						goodReceiptObj.setGoodReceiptTransporterName(rs.getString("TransporterName"));		
						goodReceiptObj.setGoodsReceiptBillDiscount(rs.getDouble("billDiscount"));		
						goodReceiptObj.setGoodsReceiptCases(rs.getDouble("cases"));		
						goodReceiptObj.setGoodsReceiptQuantity(rs.getDouble("quantity"));		
						goodReceiptObj.setGoodsReceiptFree(rs.getDouble("free"));		
						goodReceiptObj.setGoodsReceiptVAT(rs.getDouble("VAT"));		
						goodReceiptObj.setGoodsReceiptAdditionExcise(rs.getBigDecimal("additionExcise"));		
						goodReceiptObj.setGoodsReceiptAdditionEducationCess(rs.getBigDecimal("additionEducationCess"));		
						goodReceiptObj.setGoodsReceiptAdditionDebitNote(rs.getBigDecimal("additionDebitNote"));		
						goodReceiptObj.setGoodsReceiptAdditionCST(rs.getBigDecimal("additionCST"));		
						goodReceiptObj.setGoodsReceiptAdditionOther(rs.getBigDecimal("additionOther"));		
								
						goodReceiptObj.setGoodsReceiptDeductionTradeDiscount(rs.getBigDecimal("deductionTradeDiscount"));		
						goodReceiptObj.setGoodsReceiptDeductionSpecialDiscount(rs.getBigDecimal("deductionSpecialDiscount"));		
						goodReceiptObj.setGoodsReceiptDeductionOctroiReimb(rs.getBigDecimal("deductionOctroiReimb"));		
						goodReceiptObj.setGoodsReceiptDeductionCreditNote(rs.getBigDecimal("deductionCreditNote"));		
						goodReceiptObj.setGoodsReceiptDeductionBillDiscount(rs.getBigDecimal("deductionBillDiscount"));		
						goodReceiptObj.setGoodsReceiptDeductionOther(rs.getBigDecimal("deductionOther"));		
								
						goodReceiptObj.setGoodsReceiptTotalItems(rs.getBigDecimal("totalItems"));		
						goodReceiptObj.setGoodsReceiptRoundOff(rs.getBigDecimal("roundOff"));		
						goodReceiptObj.setGoodsReceiptFreeVAT(rs.getBigDecimal("freeVAT"));		
						goodReceiptObj.setGoodsReceiptNetAmount(rs.getBigDecimal("netAmount"));		
						goodReceiptObj.setGoodsReceiptUpdateToACFlag(rs.getBoolean("flgUpdateToAC"));		
						// status//		
						goodReceiptObj.setGoodsReceiptVerifiedFlag(rs.getBoolean("flgVerified"));		
						goodReceiptObj.setGoodsReceiptVerifiedByID(rs.getDouble("verifiedByID"));		
						goodReceiptObj.setGoodsReceiptVerifiedOn(rs.getString("verifiedOn"));		
						goodReceiptObj.setGoodsReceiptVerifiedByName(rs.getString("VerifiedByUserName"));		
						goodReceiptObj.setGoodsReceiptCreatedByID(rs.getDouble("CreatedBy"));		
						goodReceiptObj.setGoodsReceiptCreatedByName(rs.getString("CreatedByUserName"));		
			
						goodReceiptObj.setGoodsReceiptSupplierName(rs.getString("supplierName"));		
								
								
						GoodsReceiptProduct grProductObj = new GoodsReceiptProduct();		
								
						//grProductObj.setRecid(rs.getDouble("recid"));		
						grProductObj.setRecid(rs.getDouble("productID"));		
						grProductObj.setGoodsReceiptProductId(rs.getDouble("productID"));		
						grProductObj.setGoodsReceiptProductProductName(rs.getString("productName"));		
						grProductObj.setGoodsReceiptProductPack(rs.getDouble("productPack"));		
						grProductObj.setGoodsReceiptProductMRP(rs.getBigDecimal("productMRP"));		
						//grProductObj.setGoodsReceiptProductValue(rs.getBigDecimal("value"));		
						////productBatchNo		
						grProductObj.setGoodsReceiptProductCompanyName(rs.getString("companyName"));		
						grProductObj.setGoodsReceiptProductBatchId(rs.getDouble("productBatchId"));		
						grProductObj.setGoodsReceiptProductQty(rs.getDouble("QuantityProduct"));		
						grProductObj.setGoodsReceiptProductFree(rs.getDouble("FreeProduct"));		
						grProductObj.setGoodsReceiptProductTrade(rs.getBigDecimal("productBatchTrade"));		
						grProductObj.setGoodsReceiptProductRate(rs.getBigDecimal("productBatchPurchaseRate"));		
				    	grProductObj.setGoodsReceiptProductPOId(rs.getDouble("PONumber"));		
						grProductObj.setGoodsReceiptProductDifference(rs.getDouble("Difference"));		
						grProductObj.setGoodsReceiptProductCST(rs.getBigDecimal("CST"));		
						grProductObj.setGoodsReceiptProductLT(rs.getBigDecimal("LT"));		
						grProductObj.setGoodsReceiptProductVAT(rs.getBigDecimal("VAT"));		
						grProductObj.setGoodsReceiptProductVatChargedOn(rs.getDouble("vatChargeOn"));		
						grProductObj.setGoodsReceiptProductStorageId(rs.getInt("storageId"));		
						grProductObj.setGoodsReceiptProductReceiptTypeId(rs.getInt("receipttypeId"));		
						grProductObj.setGoodsReceiptProductStockInwardId(rs.getDouble("SIID"));		
						grProductObj.setGoodsReceiptProductContents(rs.getString("contentName"));		
						grProductObj.setGoodsReceiptProductType(rs.getString("productType"));		
								
								
						GrProductBatch grProductBatchObj = new GrProductBatch();		
						grProductObj.setGrProductBatchObj(grProductBatchObj);		
				    			
				    	//grProdObj.getGrProductBatchObj().setGRID(rs.getDouble(""));		
						grProductObj.getGrProductBatchObj().setGrProductBatchId(rs.getDouble("productBatchId"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchNo(rs.getString("productBatchNo"));		
				    	//grProdObj.getGrProductBatchObj().setGrProductBatchGrId(rs.getDouble("productBatchGrId"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchExpiryDate(rs.getString("productBatchExpiryDate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchMRP(rs.getBigDecimal("productBathMRP"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchTrade(rs.getBigDecimal("productBatchTrade"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchPurchaseRate(rs.getBigDecimal("productBatchPurchaseRate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchTradeDiscount(rs.getBigDecimal("productBatchTradeDiscount"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSellRate(rs.getBigDecimal("productBatchSellRate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchPurchaseDate(rs.getString("productBatchPurchaseDate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchActiveFlag(rs.getBoolean("productBatchActiveFlag"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchLockFlag(rs.getBoolean("productBatchLockFlag"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchRemark(rs.getString("productBatchRemark"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSpecialDiscount(rs.getBigDecimal("productBatchSpecialDiscount"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSpecialDiscountAmount(rs.getBigDecimal("productBatchSpecialDiscountAmt"));		
							
				    	//double output = goodReceiptObj.getGoodsReceiptId();		
						double output = grProductObj.getGoodsReceiptProductId();		
		    		    if(output == 0)		
		        		{		
		    		    	goodReceiptObj.setGrProductList(grProductList);		
		    		    	goodReceiptRegisterList.add(goodReceiptObj);		
		    		   	}else{		
		    		   				
		    		   		grProductList.add(grProductObj);		
		    		   		goodReceiptObj.setGrProductList(grProductList);		
		    		   		goodReceiptRegisterList.add(goodReceiptObj);		
		    		    }		
				    			
					}else{		
								
						GoodsReceiptProduct grProductObj = new GoodsReceiptProduct();		
								
						//grProductObj.setRecid(rs.getDouble("recid"));		
						grProductObj.setRecid(rs.getDouble("productID"));		
						grProductObj.setGoodsReceiptProductId(rs.getDouble("productID"));		
						grProductObj.setGoodsReceiptProductProductName(rs.getString("productName"));		
						grProductObj.setGoodsReceiptProductPack(rs.getDouble("productPack"));		
						grProductObj.setGoodsReceiptProductMRP(rs.getBigDecimal("productMRP"));		
						//grProductObj.setGoodsReceiptProductValue(rs.getBigDecimal("value"));		
						////productBatchNo		
						grProductObj.setGoodsReceiptProductCompanyName(rs.getString("companyName"));		
						grProductObj.setGoodsReceiptProductBatchId(rs.getDouble("productBatchId"));		
						grProductObj.setGoodsReceiptProductQty(rs.getDouble("QuantityProduct"));		
						grProductObj.setGoodsReceiptProductFree(rs.getDouble("FreeProduct"));		
						grProductObj.setGoodsReceiptProductTrade(rs.getBigDecimal("productBatchTrade"));		
						grProductObj.setGoodsReceiptProductRate(rs.getBigDecimal("productBatchPurchaseRate"));		
				    	grProductObj.setGoodsReceiptProductPOId(rs.getDouble("PONumber"));		
						grProductObj.setGoodsReceiptProductDifference(rs.getDouble("Difference"));		
						grProductObj.setGoodsReceiptProductCST(rs.getBigDecimal("CST"));		
						grProductObj.setGoodsReceiptProductLT(rs.getBigDecimal("LT"));		
						grProductObj.setGoodsReceiptProductVAT(rs.getBigDecimal("VAT"));		
						grProductObj.setGoodsReceiptProductVatChargedOn(rs.getDouble("vatChargeOn"));		
						grProductObj.setGoodsReceiptProductStorageId(rs.getInt("storageId"));		
						grProductObj.setGoodsReceiptProductReceiptTypeId(rs.getInt("receipttypeId"));		
						grProductObj.setGoodsReceiptProductStockInwardId(rs.getDouble("SIID"));		
						grProductObj.setGoodsReceiptProductContents(rs.getString("contentName"));		
						grProductObj.setGoodsReceiptProductType(rs.getString("productType"));		
								
								
						GrProductBatch grProductBatchObj = new GrProductBatch();		
						grProductObj.setGrProductBatchObj(grProductBatchObj);		
				    			
				    	//grProdObj.getGrProductBatchObj().setGRID(rs.getDouble(""));		
						grProductObj.getGrProductBatchObj().setGrProductBatchId(rs.getDouble("productBatchId"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchNo(rs.getString("productBatchNo"));		
				    	//grProdObj.getGrProductBatchObj().setGrProductBatchGrId(rs.getDouble("productBatchGrId"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchExpiryDate(rs.getString("productBatchExpiryDate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchMRP(rs.getBigDecimal("productBathMRP"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchTrade(rs.getBigDecimal("productBatchTrade"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchPurchaseRate(rs.getBigDecimal("productBatchPurchaseRate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchTradeDiscount(rs.getBigDecimal("productBatchTradeDiscount"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSellRate(rs.getBigDecimal("productBatchSellRate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchPurchaseDate(rs.getString("productBatchPurchaseDate"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchActiveFlag(rs.getBoolean("productBatchActiveFlag"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchLockFlag(rs.getBoolean("productBatchLockFlag"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchRemark(rs.getString("productBatchRemark"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSpecialDiscount(rs.getBigDecimal("productBatchSpecialDiscount"));		
						grProductObj.getGrProductBatchObj().setGrProductBatchSpecialDiscountAmount(rs.getBigDecimal("productBatchSpecialDiscountAmt"));		
							
						grProductList.add(grProductObj);		
						goodReceiptObj.setGrProductList(grProductList);		
								
					}		
					LoopGRID = rs.getDouble("ID");		
				}				
				//}		
			}			
					
			json = "{\"GrProductlist\":"+util.util_makeJson(goodReceiptRegisterList) +",\"lastId\":"+LoopGRID+"}";		
					
		}catch(Exception e){		
			try {		
	    		con.close();		
	    		throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);		
	    	} catch(Exception e1) {		
	    		throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);		
	    	}		
		}		
				
		return json;		
	}			

	

}
