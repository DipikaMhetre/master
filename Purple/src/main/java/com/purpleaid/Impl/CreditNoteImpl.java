package com.purpleaid.Impl;

import java.math.BigDecimal;
import java.math.MathContext;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.ConsumptionDetails;
import com.purpleaid.beans.CreditNote;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.ReturnRegisterProduct;
import com.purpleaid.beans.Sales;
import com.purpleaid.beans.SalesHistory;
import com.purpleaid.beans.SalesProducts;
import com.purpleaid.interfaces.CreditNote_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class CreditNoteImpl implements CreditNote_IF{

	@Override
	public String bl_getCreditNoteList(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<CreditNote> creditNoteList = new ArrayList<CreditNote>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    double maxID = 0;
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     
		try {
			util= new Util_json();
			CreditNote Obj = null; 
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getCreditNoteList(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	        callableStatement.setDouble(1 , reqObj.getFilterType());
	        callableStatement.setDouble(2, reqObj.getEntityId());
	        callableStatement.setDouble(3, reqObj.getListLimit());
	        callableStatement.setString(4, reqObj.getFromDate());
	        callableStatement.setString(5, reqObj.getToDate());
	        callableStatement.setInt(6, reqObj.getLedgerFlag());
	        callableStatement.setInt(7, reqObj.getApprovedFlag());
	        callableStatement.setDouble(8, reqObj.getContactID());
	        callableStatement.setDouble(9, reqObj.getStatus());
	        callableStatement.setDouble(10, reqObj.getFromAmt());
	        callableStatement.setDouble(11, reqObj.getToAmt());
	        callableStatement.setDouble(12, reqObj.getLastID());
	        callableStatement.setString(13, reqObj.getUserId());
			callableStatement.setString(14, reqObj.getToken());
			callableStatement.setInt(15, reqObj.getViewPermissionID());
			callableStatement.setDouble(16, status);
			callableStatement.setDouble(17, reqObj.getCreditNoteVoidFlag());
			callableStatement.setDouble(18, reqObj.getCreditNoteId());
			
			
			
			callableStatement.registerOutParameter(16, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(16);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				while(rs.next()){
					
					Obj = new CreditNote();
			        Obj.setCreditNoteID(rs.getDouble("ID"));
			        Obj.setRecid(rs.getDouble("ID"));
			        Obj.setCreditNoteDate(rs.getString("CNDATE"));
			        Obj.setCreditNoteCustName(rs.getString("customerName"));
			        Obj.setCreditNoteType(rs.getDouble("Type"));
			        Obj.setCreditNoteAmount(rs.getBigDecimal("Amount"));
			        Obj.setCreditNoteCreatedByName(rs.getString("createdByName"));
			        Obj.setCreditNoteStatus(rs.getInt("status"));
			        Obj.setCreditNoteflgLock(rs.getBoolean("flgLock"));
			        Obj.setCreditNoteReason(rs.getInt("Reason"));
			        Obj.setCreditNoteReasonOther(rs.getString("ReasonOther"));
			        Obj.setCreditNoteRemark(rs.getString("remark"));
			        Obj.setCreditNoteTypeDescription(rs.getString("TypeDescription"));
			        Obj.setCreditNoteCreatedOn(rs.getString("cnCreatedOn"));
			        
			        
			        if(Obj.isCreditNoteflgLedger() == true){
			        	Obj.setCreditNoteLedgerDescription("YES");
			        }else{
			        	Obj.setCreditNoteLedgerDescription("NO");
			        }
			        Obj.setCreditNoteStatusDescription(rs.getString("statusDecription"));
			      
				
			        Obj.setCreditNoteflgLock(rs.getBoolean("flgLock")); 
			        Obj.setCreditNoteLockDateTime(rs.getString("cnlockOn"));
			        Obj.setCreditNoteLockUserName(rs.getString("lockUserName"));
			        Obj.setCreditNoteLockByID(rs.getInt("lockUser"));
			        Obj.setCreditNoteAmount(rs.getBigDecimal("Amount"));
			
			       
			        Obj.setCreditNoteflgVoid(rs.getBoolean("flgVoid"));
			        Obj.setCreditNoteVoidReason(rs.getString("voidReason"));
			        Obj.setCreditNoteVoidByName(rs.getString("VoidUser"));
			        Obj.setCreditNoteVoidOn(rs.getString("cnVoidOn"));
			        Obj.setCreditNoteVoidByID(rs.getInt("voidBy"));
			        Obj.setCreditNoteCustID(rs.getDouble("custID"));
			        
			        Obj.setCreditNoteflgLedger(rs.getBoolean("flgLedgerLock"));
			       // Obj.setCreditNoteLedgerDescription(rs.getString("legderInfo"));
			        Obj.setCreditNoteLedgerUserName(rs.getString("cnLedgerUserName"));
			        Obj.setCreditNoteLedgerByID(rs.getInt("ledgerUser"));
			        Obj.setCreditNoteLedgerDateTime(rs.getString("cnLedgertime"));
			        
			        
			        
			        Obj.setCreditNoteProductReturnAmountTotal(rs.getBigDecimal("creditNoteProductTotalAmount"));
			        Obj.setCreditNoteProductTotalVATamt(rs.getBigDecimal("creditNoteProductTotalVATAmount"));
			        creditNoteList.add(Obj);
			        
			        /*if(rs.isLast() == true){
			        	maxID = rs.getDouble("ID"); 
			        }*/
			        maxID = rs.getDouble("ID");
				}
			
				 
			
			}
			 json = "{\"creditNoteList\":"+util.util_makeJson(creditNoteList) +",\"maxId\":"+maxID+"}";
			
	     
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
	public String bl_setDirectCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		CallableStatement cstatement = null;
		CreditNote Obj;
		JdbcConnection JdbcConnectionObj = null;
		 
		
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CreditNote>() {});	
			query = "{call InsertUpdateDirectCreditNote (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
			
			
		    cstatement.setDouble(1, Obj.getCreditNoteID());
		    cstatement.setInt(2, Obj.getCreditNoteReason());
		    cstatement.setString(3, Obj.getCreditNoteReasonOther());
		    cstatement.setBigDecimal(4, Obj.getCreditNoteAmount() );
		    cstatement.setString(5, Obj.getCreditNoteRemark());
		    cstatement.setBoolean(6, Obj.isCreditNoteflgLock());
		    cstatement.setDouble(7, Obj.getCreditNoteCustID());
		    cstatement.setString(8, reqObj.getUserId());
		    cstatement.setString(9, reqObj.getToken());
		    if(Obj.getCreditNoteID() == 0){
		    	cstatement.setInt(10, reqObj.getInsertCNDNPermissionID());
		    }else{
		    	cstatement.setInt(10, reqObj.getUpdateCNDNPermissionID());
		    }
		    	    
		    cstatement.setDouble(11, status);
		    cstatement.setString(12, Obj.getCreditNoteDate());
		    cstatement.setInt(13, Obj.getCreditNoteStatus());
		    cstatement.setDouble(14, Obj.getCreditNoteType());
		    cstatement.setString(15, Obj.getCreditNoteTypeDescription());
		    cstatement.setString(16, Obj.getCreditNoteStatusDescription());
		    cstatement.setBoolean(17, Obj.isCreditNoteflgVoid());
		    cstatement.setBoolean(18, Obj.isCreditNoteflgLedger());
		    cstatement.setDouble(19, Obj.getCreditNoteLedgerByID() );
		    		    
		    cstatement.registerOutParameter(1, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(11, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			output = cstatement.getInt(1);
			status = cstatement.getInt(11);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				Obj.setCreditNoteID(output);
				if(Obj.isCreditNoteflgLedger() == true){
		        	Obj.setCreditNoteLedgerDescription("YES");
		        }else{
		        	Obj.setCreditNoteLedgerDescription("NO");
		        }
				System.out.println("creditNote ID in insert update"+output);			
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
	public String bl_getProductCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<CreditNote> creditNoteList = new ArrayList<CreditNote>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    double type = 1;
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     
		try {
			util= new Util_json();
			CreditNote Obj = null; 
			Obj = new CreditNote();
			int action = 0;
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getProductCreditNote(?,?,?,?,?,?,?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	        
	        callableStatement.setDouble(1 , reqObj.getCreditNoteId()); //
	        callableStatement.setDouble(2, reqObj.getEntityId()); //custID  
	        callableStatement.setString(3, reqObj.getFromDate());
	        callableStatement.setString(4, reqObj.getToDate());
	        callableStatement.setDouble(5, reqObj.getRrid());//
	        callableStatement.setString(6, reqObj.getUserId());
			callableStatement.setString(7, reqObj.getToken());
			callableStatement.setInt(8, reqObj.getViewCNDNPermissionID()); //
			callableStatement.setDouble(9, status);
			callableStatement.setInt(10, action);
			
		
			
			callableStatement.registerOutParameter(9, java.sql.Types.INTEGER);
			callableStatement.registerOutParameter(10, java.sql.Types.INTEGER);
			
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(9);
			action = callableStatement.getInt(10);
			
			double loopCreditNoteId = 0;
			java.math.BigDecimal vat = null ; 
	        java.math.BigDecimal Freevat ; 
	        String Rate = null;
	        MathContext mc = new MathContext(2); // 2 precision
			
			List<ReturnRegisterProduct> creditNoteProductList = new ArrayList<ReturnRegisterProduct>();
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
					if(action == 1){
						while(rs.next()){
						 ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
					       int vatChargedOn = rs.getInt("SalesVATChargeOn");
					        switch(vatChargedOn){
						        
					        	case 1: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
								        	  Rate = "Purchase Rate";		
								        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
								        	  break;
						        	
						        case 2: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
						        			  Rate = "Sale Rate";		
						        			  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
						        			  break;
						        	
						        case 3: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
						         			  Rate = "MRP";		
								        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
								        	  break;
					        
					        }
					        
					        
					        boolean cnVATonFree = rs.getBoolean("flgSalesVATonFree");
					        if(cnVATonFree == true){
					        	 switch(vatChargedOn){
							        
						        	case 1: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
						        			vat = vat.add(Freevat, mc);
						        			break;
							        	
							        case 2: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
									        vat = vat.add(Freevat, mc);
						        			break;
							        	
							        case 3: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
									        vat = vat.add(Freevat, mc);
						        			break;
						        
						        }
					        	
					        }
					        rrdObj.setRecid(rs.getDouble("RRDID")); //edited by Satyajit
					        rrdObj.setReturnRegisterProductId(rs.getDouble("RRDID")); 
					        rrdObj.setCreditNoteAmount(rs.getBigDecimal("CreditNoteAmount"));
					        rrdObj.setCreditNoteCNVAT(rs.getBigDecimal("CreditNoteVat"));
					        rrdObj.setCreditNoteRemark(rs.getString("CreditNoteRemark"));
					        rrdObj.setCreditNoteRRdate(rs.getString("rrDate"));
					        rrdObj.setCreditNoteVAT(vat);
					        rrdObj.setCreditNoteVATpercentage(rs.getBigDecimal("vatTax"));
					        rrdObj.setReturnRegisterProductRRID(rs.getDouble("RRID"));
					        rrdObj.setReturnRegisterProductName(rs.getString("productName"));
					        rrdObj.setReturnRegisterProductPack(rs.getString("pack"));
					        rrdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
					        rrdObj.setReturnRegisterProductExpiryDate(rs.getString("expiry")); 
					        rrdObj.setCreditNoteQtyFree(rs.getDouble("Free")); //free
					        rrdObj.setCreditNoteQty(rs.getDouble("Qty")); //Qty
					        rrdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
					        rrdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("PurchaseRate"));
					        rrdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("SaleRate"));
					       // rrdObj.setReturnRegisterProductConditionName(rs.getString(""));
					        rrdObj.setReturnRegisterProductPID(rs.getDouble("productID"));
					        rrdObj.setReturnRegisterProductAmount(rs.getBigDecimal("Amount"));
					        rrdObj.setCreditNotereturnAmount(rs.getBigDecimal("returnAmount")); //REturn Amt 
						       rrdObj.setCreditNoteVATrefund(rs.getBigDecimal("vatRefund")); //C.N. VAT
						       rrdObj.setCreditNoteUseRate(rs.getInt("UseRate"));
						       rrdObj.setCreditNoteLessPercentage(rs.getBigDecimal("lessPercentage"));
						       rrdObj.setCreditNoteLessAmt(rs.getBigDecimal("lessAmount"));
						       rrdObj.setCreditNoteflgRefundVAT(rs.getBoolean("flgRefundVAT"));
					        
						
						
					        creditNoteProductList.add(rrdObj);
					}
					
					}
				
				
					else{
						while(rs.next()){
							if(rs.getDouble("cnType") != type){
								throw new Exception("Product Credit Note NOT FOUND!!");
							}else{
							if(loopCreditNoteId != rs.getDouble("tempCnId")){
								
							
							    creditNoteProductList = new ArrayList<ReturnRegisterProduct>();
							
								
													
								Obj.setCreditNoteID(rs.getDouble("ID"));
						        Obj.setRecid(rs.getDouble("ID"));
						        Obj.setCreditNoteCustID(rs.getDouble("custID"));
						        Obj.setCreditNoteDate(rs.getString("cnDate"));
						        Obj.setCreditNoteCustName(rs.getString("custName"));
						        Obj.setCreditNoteType(rs.getDouble("cnType"));
						        Obj.setCreditNoteStatus(rs.getInt("status"));
						        Obj.setCreditNoteCreatedByName(rs.getString("createdByName"));
						        Obj.setCreditNoteCreatedOn(rs.getString("CreatedOn"));
						        Obj.setCreditNoteStatus(rs.getInt("status"));
						        Obj.setCreditNoteApprovedBy(rs.getString("approvedBy"));
						        Obj.setCreditNoteApprovedOn(rs.getString("ApprovedOn"));
						        Obj.setCreditNoteApprovedFlg(rs.getBoolean("flgApproved"));
						        Obj.setCreditNoteflgLedger(rs.getBoolean("flgLedgerLock"));
						        Obj.setCreditNoteLedgerByID(rs.getInt("ledgerUser"));
						        Obj.setCreditNoteLedgerDateTime(rs.getString("cnledgerOn"));
						        Obj.setCreditNoteLedgerUserName(rs.getString("ledgerUserName"));
						        Obj.setCreditNoteflgLock(rs.getBoolean("flgLock")); 
						        Obj.setCreditNoteLockDateTime(rs.getString("cnlockOn"));
						        Obj.setCreditNoteLockUserName(rs.getString("lockUserName"));
						        Obj.setCreditNoteLockByID(rs.getInt("lockUser"));
						        Obj.setCreditNoteAmount(rs.getBigDecimal("Amount"));
						  /*    Obj.setCreditNoteFlgRefundVAT(rs.getBigDecimal("flgRefundVat"));
						        
						        Obj.setCreditNoteGrossCredit(rs.getDouble("GrossCredit"));
						        Obj.setCreditNoteLessAmt(rs.getBigDecimal("lessAmount"));
						        Obj.setCreditNoteLessPercentage(rs.getBigDecimal("lessPercentage"));
						        Obj.setCreditNoteNetCredit(rs.getDouble("NetCredit"));
						        Obj.setCreditNoteTotalCredit(rs.getBigDecimal("totalCredit"));*/
						       /* Obj.setCreditNoteVATamt(rs.getBigDecimal(""));
						        Obj.setCreditNoteVATPercentage(rs.getBigDecimal(""));*/
						       // Obj.setCreditNoteVATrefund(rs.getBigDecimal(""));
						        Obj.setCreditNoteReason(rs.getInt("Reason"));
						        Obj.setCreditNoteReasonOther(rs.getString("ReasonOther"));
						        Obj.setCreditNoteRemark(rs.getString("remark"));
						        
						        Obj.setCreditNoteVerifiedFlg(rs.getBoolean("flgVerified"));
						        Obj.setCreditNoteVerifiedBy(rs.getString("VerifiedByUser"));
						        Obj.setCreditNoteVerifiedOn(rs.getString("cnVerifiedOn"));
						        Obj.setCreditNoteVerifiedByID(rs.getInt("verifiedBy"));
						        
						       // Obj.setCreditNoteFlgRefundVAT(rs.getBoolean("flgRefundVat"));
						       
						        Obj.setCreditNoteflgVoid(rs.getBoolean("flgVoid"));
						        Obj.setCreditNoteVoidReason(rs.getString("voidReason"));
						        Obj.setCreditNoteVoidByName(rs.getString("VoidUser"));
						        Obj.setCreditNoteVoidOn(rs.getString("cnVoidOn"));
						        Obj.setCreditNoteProductReturnAmountTotal(rs.getBigDecimal("creditNoteProductTotalAmount"));
						        Obj.setCreditNoteProductTotalVATamt(rs.getBigDecimal("creditNoteProductTotalVATAmount"));
						       
						        Obj.setCreditNoteTypeDescription(rs.getString("TypeDescription"));
						        Obj.setCreditNoteStatusDescription(rs.getString("statusDecription"));
						        
						        
						        ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
						       
						        int vatChargedOn = rs.getInt("SalesVATChargeOn");
						        switch(vatChargedOn){
							        
						        	case 1: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
									        	  Rate = "Purchase Rate";		
									        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
									        	  break;
							        	
							        case 2: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							        			  Rate = "Sale Rate";		
							        			  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
							        			  break;
							        	
							        case 3: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							         			  Rate = "MRP";		
									        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
									        	  break;
						        
						        }
						        
						        
						        boolean cnVATonFree = rs.getBoolean("flgSalesVATonFree");
						        if(cnVATonFree == true){
						        	 switch(vatChargedOn){
								        
							        	case 1: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							        			vat = vat.add(Freevat, mc);
							        			break;
								        	
								        case 2: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
										        vat = vat.add(Freevat, mc);
							        			break;
								        	
								        case 3: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
										        vat = vat.add(Freevat, mc);
							        			break;
							        
							        }
						        	
						        }
						        
						        if(rs.getInt("CNID") != 0){
						        	rrdObj.setCreditNoteIsProductFlag(true);
						        }else{
						        	rrdObj.setCreditNoteIsProductFlag(false);
						        }
						        rrdObj.setRecid(rs.getDouble("RRDID")); //edited by Satyajit
						        rrdObj.setReturnRegisterProductId(rs.getDouble("RRDID")); 
						        rrdObj.setCreditNoteAmount(rs.getBigDecimal("CreditNoteAmount"));
						        rrdObj.setCreditNoteCNVAT(rs.getBigDecimal("CreditNoteVat"));
						        rrdObj.setCreditNoteRemark(rs.getString("CreditNoteRemark"));
						        rrdObj.setCreditNoteRRdate(rs.getString("rrDate"));
						        rrdObj.setCreditNoteVAT(vat);
						        rrdObj.setCreditNoteVATpercentage(rs.getBigDecimal("vatTax"));
						        rrdObj.setReturnRegisterProductRRID(rs.getDouble("RRID"));
						        rrdObj.setReturnRegisterProductName(rs.getString("productName"));
						        rrdObj.setReturnRegisterProductPack(rs.getString("pack"));
						        rrdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
						        rrdObj.setReturnRegisterProductExpiryDate(rs.getString("expiry")); 
						        rrdObj.setCreditNoteQtyFree(rs.getDouble("Free")); //free
						        rrdObj.setCreditNoteQty(rs.getDouble("Qty")); //Qty
						        rrdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
						        rrdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("PurchaseRate"));
						        rrdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("SaleRate"));
						       // rrdObj.setReturnRegisterProductConditionName(rs.getString(""));
						        rrdObj.setReturnRegisterProductPID(rs.getDouble("productID"));
						        rrdObj.setReturnRegisterProductAmount(rs.getBigDecimal("Amount"));
						       rrdObj.setCreditNotereturnAmount(rs.getBigDecimal("returnAmount"));
						       rrdObj.setCreditNoteVATrefund(rs.getBigDecimal("vatRefund"));
						       rrdObj.setCreditNoteUseRate(rs.getInt("UseRate"));
						       rrdObj.setCreditNoteLessPercentage(rs.getBigDecimal("lessPercentage"));
						       rrdObj.setCreditNoteLessAmt(rs.getBigDecimal("lessAmount"));
						       rrdObj.setCreditNoteflgRefundVAT(rs.getBoolean("flgRefundVAT"));
						       
						       
						        creditNoteProductList.add(rrdObj);
						        
						        Obj.setCreditNoteProductList(creditNoteProductList);
						        
						        creditNoteList.add(Obj);
							}else{
								
								ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
							       
								int vatChargedOn = rs.getInt("SalesVATChargeOn");
						        switch(vatChargedOn){
							        
						        	case 1: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
									        	  Rate = "Purchase Rate";		
									        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
									        	  break;
							        	
							        case 2: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							        			  Rate = "Sale Rate";		
							        			  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
							        			  break;
							        	
							        case 3: vat = BigDecimal.valueOf(rs.getDouble("Qty")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							         			  Rate = "MRP";		
									        	  rrdObj.setCreditNoteVATchargedOnLabel(Rate); 
									        	  break;
						        
						        }
						        
						        
						        boolean cnVATonFree = rs.getBoolean("flgSalesVATonFree");
						        if(cnVATonFree == true){
						        	 switch(vatChargedOn){
								        
							        	case 1: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("PurchaseRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
							        			vat = vat.add(Freevat, mc);
							        			break;
								        	
								        case 2: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("SaleRate"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
										        vat = vat.add(Freevat, mc);
							        			break;
								        	
								        case 3: Freevat =  BigDecimal.valueOf(rs.getDouble("Free")).multiply(rs.getBigDecimal("MRP"), mc).multiply(rs.getBigDecimal("vatTax"), mc) ;
										        vat = vat.add(Freevat, mc);
							        			break;
							        
							        }
						        	
						        }
						        
						        if(rs.getInt("CNID") != 0){
						        	rrdObj.setCreditNoteIsProductFlag(true);
						        }else{
						        	rrdObj.setCreditNoteIsProductFlag(false);
						        }
						        rrdObj.setRecid(rs.getDouble("RRDID")); //edited by Satyajit
						        rrdObj.setReturnRegisterProductId(rs.getDouble("RRDID")); 
						        rrdObj.setCreditNoteAmount(rs.getBigDecimal("CreditNoteAmount"));
						        rrdObj.setCreditNoteCNVAT(rs.getBigDecimal("CreditNoteVat"));
						        rrdObj.setCreditNoteRemark(rs.getString("CreditNoteRemark"));
						        rrdObj.setCreditNoteRRdate(rs.getString("rrDate"));
						        rrdObj.setCreditNoteVAT(vat);
						        rrdObj.setCreditNoteVATpercentage(rs.getBigDecimal("vatTax"));
						        rrdObj.setReturnRegisterProductRRID(rs.getDouble("RRID"));
						        rrdObj.setReturnRegisterProductName(rs.getString("productName"));
						        rrdObj.setReturnRegisterProductPack(rs.getString("pack"));
						        rrdObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
						        rrdObj.setReturnRegisterProductExpiryDate(rs.getString("expiry")); 
						        rrdObj.setCreditNoteQtyFree(rs.getDouble("Free")); //free
						        rrdObj.setCreditNoteQty(rs.getDouble("Qty")); //Qty
						        rrdObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
						        rrdObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("PurchaseRate"));
						        rrdObj.setReturnRegisterProductSellRate(rs.getBigDecimal("SaleRate"));
						       // rrdObj.setReturnRegisterProductConditionName(rs.getString(""));
						        rrdObj.setReturnRegisterProductPID(rs.getDouble("productID"));
						        rrdObj.setReturnRegisterProductAmount(rs.getBigDecimal("Amount"));
						        rrdObj.setCreditNotereturnAmount(rs.getBigDecimal("returnAmount"));
							       rrdObj.setCreditNoteVATrefund(rs.getBigDecimal("vatRefund"));
							       rrdObj.setCreditNoteUseRate(rs.getInt("UseRate"));
							       rrdObj.setCreditNoteLessPercentage(rs.getBigDecimal("lessPercentage"));
							       rrdObj.setCreditNoteLessAmt(rs.getBigDecimal("lessAmount"));
							       rrdObj.setCreditNoteflgRefundVAT(rs.getBoolean("flgRefundVAT"));
						      
						        creditNoteProductList.add(rrdObj);
						        
						        Obj.setCreditNoteProductList(creditNoteProductList);
								
								
							}
							loopCreditNoteId = rs.getDouble("tempCnId");				
						}
						
					}
			
			}
			}
			
			
			if(action == 1){
				json = util.util_makeJson(creditNoteProductList);
			}
			if(action == 2){
				json = util.util_makeJson(Obj);
			}
			
	     
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
	public String bl_getCreditNoteProductSalesHistory(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<SalesHistory> creditNoteProductSalesHistoryList = new ArrayList<SalesHistory>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	  
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     
		try {
			util= new Util_json();
			SalesHistory Obj = null; 
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getCreditNoteSalesHistory(?,?,?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	 
	        callableStatement.setDouble(1, reqObj.getRrdid());
	        callableStatement.setDouble(2, reqObj.getEntityId()); //customer ID 
	        callableStatement.setString(3, reqObj.getUserId());
			callableStatement.setString(4, reqObj.getToken());
			callableStatement.setInt(5, reqObj.getViewCNDNPermissionID());
			callableStatement.setDouble(6, status);
			
			callableStatement.registerOutParameter(6, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(6);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				while(rs.next()){
					
					Obj = new SalesHistory();
					Obj.setSalesID(rs.getDouble("salesID"));
					Obj.setSaleDate(rs.getString("saleDate"));
					Obj.setSaleFreeQty(rs.getDouble("FreeQty"));
					Obj.setSaleNetRate(rs.getDouble("netRate"));
					Obj.setSaleQty(rs.getDouble("Qty"));
					Obj.setSaleTotalAmount(rs.getBigDecimal("TotalAmount"));
					Obj.setSaleVAT(rs.getBigDecimal("VAT"));
					Obj.setRecid(rs.getDouble("salesID"));
			       
					creditNoteProductSalesHistoryList.add(Obj);
				
				}
			
			}
			
			json = util.util_makeJson(creditNoteProductSalesHistoryList);
	     
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

/*	@Override
	public String bl_setProductCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		CallableStatement cstatement = null;
		CreditNote Obj;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CreditNote>() {});	
			query = "{call InsertUpdateProductCreditNote (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
	
						
			cstatement.setDouble(1, Obj.getCreditNoteType());
	      	cstatement.setDouble(2, Obj.getCreditNoteCustID());
	      	cstatement.setDouble(3, Obj.getCreditNoteID());
	      	cstatement.setString(4,Obj.getCreditNoteDate());
	      	cstatement.setDouble(5,Obj.getCreditNoteStatus());
	      	cstatement.setString(6,Obj.getCreditNoteRemark());
	      	
	      	cstatement.setBoolean(7,Obj.isCreditNoteflgLock()); 
	      	cstatement.setInt(8, Obj.getCreditNoteLockByID());
	      	cstatement.setString(9, Obj.getCreditNoteLockDateTime());

	      	cstatement.setBoolean(10,Obj.isCreditNoteflgVoid());
	      	cstatement.setInt(11, Obj.getCreditNoteVoidByID());

	      	
	      	cstatement.setBoolean(12,Obj.isCreditNoteflgLedger());
	      	cstatement.setInt(13, Obj.getCreditNoteLedgerByID());
	      	cstatement.setString(14, Obj.getCreditNoteLedgerDateTime());
	      	     	
	      	
	      	cstatement.setBigDecimal(15,Obj.getCreditNoteAmount()); //total of product
	      	cstatement.setBigDecimal(16,Obj.getCreditNoteProductTotalVATamt()); //total of credit note product vat
	      	cstatement.setBigDecimal(17,Obj.getCreditNoteProductReturnAmountTotal()); //total of credit note product amount
	      	cstatement.setString(18,Obj.getCreditNoteVoidReason());
				   
		    cstatement.setString(19, reqObj.getUserId());
		    cstatement.setString(20, reqObj.getToken());
		    if(Obj.getCreditNoteID() == 0){
		    	cstatement.setInt(21, reqObj.getInsertCNDNPermissionID());
		    }else{
		    	cstatement.setInt(21, reqObj.getUpdateCNDNPermissionID());
		    }
		    	    
		    cstatement.setDouble(22, status);
		    
		    
		    cstatement.setBoolean(23, Obj.isCreditNoteVerifiedFlg());
		    cstatement.setString(24, Obj.getCreditNoteVerifiedOn());
		    cstatement.setInt(25, Obj.getCreditNoteVerifiedByID());
		    cstatement.setString(26, Obj.getCreditNoteVoidOn());
		    cstatement.setString(27, Obj.getCreditNoteTypeDescription());
		    cstatement.setString(28, Obj.getCreditNoteStatusDescription());
		    
		    
		    cstatement.registerOutParameter(3, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(22, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			output = cstatement.getInt(3);
			status = cstatement.getInt(22);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				Obj.setCreditNoteID(output);
				System.out.println("creditNote ID in insert update"+output);			
				
				
				String query3="{call  InsertUpdateRRDforProductCN (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall (query3);
				
				ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
				for(int i=0;i<Obj.getCreditNoteProductList().size();i++){ 
					rrdObj = Obj.getCreditNoteProductList().get(i);
					
					
					 CNID,
					  ID,
					  CNrate,
	                  lessPercentage,
	                  lessAmount,
	                  CNreturnAmount,
					  flgRefundVAT,
					  VATpercentage,
					  VATrefund,
					  VATamt,
					  CNremark,
	                  CreatedBy,
	                  CreatedOn,
	                  CNamt, 
	                  CNvat
					
					cstatement.setDouble(1, Obj.getCreditNoteID());
					cstatement.setDouble(2, rrdObj.getReturnRegisterProductId()); 
					cstatement.setInt(3, rrdObj.getCreditNoteUseRate());  // use rate
					cstatement.setBigDecimal(4,rrdObj.getCreditNoteLessPercentage());
					cstatement.setBigDecimal(5,rrdObj.getCreditNoteLessAmt());
					cstatement.setBigDecimal(6,rrdObj.getCreditNotereturnAmount()); // return amount
					cstatement.setBoolean(7,rrdObj.isCreditNoteflgRefundVAT()); //flgRefundVAT
					cstatement.setBigDecimal(8, rrdObj.getCreditNoteVATpercentage());
					cstatement.setBigDecimal(9,rrdObj.getCreditNoteVATrefund());
					cstatement.setBigDecimal(10,rrdObj.getCreditNoteVATrefund()); // vat amount 
					cstatement.setString(11, rrdObj.getCreditNoteRemark()); //remark
									
					cstatement.setString(12, reqObj.getUserId());
					cstatement.setString(13, reqObj.getToken());
					
					if( Obj.getCreditNoteID() == 0){ 
						cstatement.setInt(14, reqObj.getInsertCNDNPermissionID());
				    }else{
				    	cstatement.setInt(14, reqObj.getUpdateCNDNPermissionID());
				    }
					cstatement.setDouble(15, status);
					
					cstatement.setBigDecimal(16, rrdObj.getCreditNoteAmount()); 
				
										
					
					cstatement.registerOutParameter(15, java.sql.Types.INTEGER);
					cstatement.execute();
					status = cstatement.getInt(15);	
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{ 
					  con.commit();
					}
				}
				
				
				
				
				
			}
			
			ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
			for(int i=0;i<Obj.getCreditNoteProductList().size();i++){ 
				rrdObj = Obj.getCreditNoteProductList().get(i);
			
				if(rrdObj.isCreditNoteIsProductFlag() == true){
					Obj.getCreditNoteProductList().remove(i);
				}else{
					
				}
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
*/
	
	@Override
	public String bl_setProductCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		CallableStatement cstatement = null;
		CreditNote Obj;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CreditNote>() {});	
			query = "{call InsertUpdateProductCreditNote (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
	
						
			cstatement.setDouble(1, Obj.getCreditNoteType());
	      	cstatement.setDouble(2, Obj.getCreditNoteCustID());
	      	cstatement.setDouble(3, Obj.getCreditNoteID());
	      	cstatement.setString(4,Obj.getCreditNoteDate());
	      	cstatement.setDouble(5,Obj.getCreditNoteStatus());
	      	cstatement.setString(6,Obj.getCreditNoteRemark());
	      	
	      	cstatement.setBoolean(7,Obj.isCreditNoteflgLock()); 
	      	cstatement.setInt(8, Obj.getCreditNoteLockByID());
	      	cstatement.setString(9, Obj.getCreditNoteLockDateTime());

	      	cstatement.setBoolean(10,Obj.isCreditNoteflgVoid());
	      	cstatement.setInt(11, Obj.getCreditNoteVoidByID());

	      	
	      	cstatement.setBoolean(12,Obj.isCreditNoteflgLedger());
	      	cstatement.setInt(13, Obj.getCreditNoteLedgerByID());
	      	cstatement.setString(14, Obj.getCreditNoteLedgerDateTime());
	      	     	
	      	
	      	cstatement.setBigDecimal(15,Obj.getCreditNoteAmount()); //total of product
	      	cstatement.setBigDecimal(16,Obj.getCreditNoteProductTotalVATamt()); //total of credit note product vat
	      	cstatement.setBigDecimal(17,Obj.getCreditNoteProductReturnAmountTotal()); //total of credit note product amount
	      	cstatement.setString(18,Obj.getCreditNoteVoidReason());
				   
		    cstatement.setString(19, reqObj.getUserId());
		    cstatement.setString(20, reqObj.getToken());
		    if(Obj.getCreditNoteID() == 0){
		    	cstatement.setInt(21, reqObj.getInsertCNDNPermissionID());
		    }else{
		    	cstatement.setInt(21, reqObj.getUpdateCNDNPermissionID());
		    }
		    	    
		    cstatement.setDouble(22, status);
		    
		    
		    cstatement.setBoolean(23, Obj.isCreditNoteVerifiedFlg());
		    cstatement.setString(24, Obj.getCreditNoteVerifiedOn());
		    cstatement.setInt(25, Obj.getCreditNoteVerifiedByID());
		    cstatement.setString(26, Obj.getCreditNoteVoidOn());
		    cstatement.setString(27, Obj.getCreditNoteTypeDescription());
		    cstatement.setString(28, Obj.getCreditNoteStatusDescription());
		    
		    
		    cstatement.registerOutParameter(3, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(22, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			output = cstatement.getInt(3);
			status = cstatement.getInt(22);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				Obj.setCreditNoteID(output);
				System.out.println("creditNote ID in insert update"+output);			
				
				
				String query3="{call  InsertUpdateRRDforProductCN (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall (query3);
				
				ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
				for(int i=0;i<Obj.getCreditNoteProductList().size();i++){ 
					rrdObj = Obj.getCreditNoteProductList().get(i);
					
					
					/* CNID,
					  ID,
					  CNrate,
	                  lessPercentage,
	                  lessAmount,
	                  CNreturnAmount,
					  flgRefundVAT,
					  VATpercentage,
					  VATrefund,
					  VATamt,
					  CNremark,
	                  CreatedBy,
	                  CreatedOn,
	                  CNamt, 
	                  CNvat*/
					
					cstatement.setDouble(1, Obj.getCreditNoteID());
					cstatement.setDouble(2, rrdObj.getReturnRegisterProductId()); 
					cstatement.setInt(3, rrdObj.getCreditNoteUseRate());  // use rate
					cstatement.setBigDecimal(4,rrdObj.getCreditNoteLessPercentage());
					cstatement.setBigDecimal(5,rrdObj.getCreditNoteLessAmt());
					cstatement.setBigDecimal(6,rrdObj.getCreditNotereturnAmount()); // return amount
					cstatement.setBoolean(7,rrdObj.isCreditNoteflgRefundVAT()); //flgRefundVAT
					cstatement.setBigDecimal(8, rrdObj.getCreditNoteVATpercentage());
					cstatement.setBigDecimal(9,rrdObj.getCreditNoteVATrefund());
					cstatement.setBigDecimal(10,rrdObj.getCreditNoteVATrefund()); // vat amount 
					cstatement.setString(11, rrdObj.getCreditNoteRemark()); //remark
									
					cstatement.setString(12, reqObj.getUserId());
					cstatement.setString(13, reqObj.getToken());
					
					if( Obj.getCreditNoteID() == 0){ 
						cstatement.setInt(14, reqObj.getInsertCNDNPermissionID());
				    }else{
				    	cstatement.setInt(14, reqObj.getUpdateCNDNPermissionID());
				    }
					cstatement.setDouble(15, status);
					
					cstatement.setBigDecimal(16, rrdObj.getCreditNoteAmount()); 
				
					cstatement.setBoolean(17, rrdObj.isCreditNoteIsProductFlag()); 
					
					
					cstatement.registerOutParameter(15, java.sql.Types.INTEGER);
					cstatement.execute();
					status = cstatement.getInt(15);	
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{ 
					  con.commit();
					}
				}
				
				
				
				
				
			}
			
			ReturnRegisterProduct rrdObj = new ReturnRegisterProduct();
			for(int i=0;i<Obj.getCreditNoteProductList().size();i++){ 
				rrdObj = Obj.getCreditNoteProductList().get(i);
			
				if(rrdObj.isCreditNoteIsProductFlag() == true){
					Obj.getCreditNoteProductList().remove(i);
				}else{
					
				}
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
	public String bl_getAdditionalDiscCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<CreditNote> creditNoteList = new ArrayList<CreditNote>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    double CNID =0;
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     double type = 4;
		try {
			util= new Util_json();
			CreditNote Obj = null; 
			int action = 0;
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getAdditionalDiscCN(?,?,?,?,?,?,?,?,?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	        
	        callableStatement.setDouble(1 , reqObj.getCreditNoteId()); // CNID 
	        callableStatement.setDouble(2, reqObj.getEntityId()); //custID  
	        callableStatement.setString(3, reqObj.getFromDate());
	        callableStatement.setString(4, reqObj.getToDate());
	        callableStatement.setDouble(5, reqObj.getSalesId());// salesID
	        callableStatement.setString(6, reqObj.getUserId());
			callableStatement.setString(7, reqObj.getToken());
			callableStatement.setInt(8, reqObj.getViewPermissionID()); //
			callableStatement.setDouble(9, status);
			callableStatement.setInt(10, action); 
			callableStatement.setDouble(11, reqObj.getCompanyId()); //salesCompanyID 
			callableStatement.setDouble(12, reqObj.getProductId()); //salesProductID 
			
			
		
			
			callableStatement.registerOutParameter(9, java.sql.Types.INTEGER);
			callableStatement.registerOutParameter(10, java.sql.Types.INTEGER);
			
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(9);
			action = callableStatement.getInt(10);
			
			//double loopCreditNoteId = 0;
			double loopSID = 0;
			Sales sObj  = null;
			
	        MathContext mc = new MathContext(2); // 2 precision
			
			List<Sales> creditNoteSalesList = new ArrayList<Sales>();
			List<SalesProducts> creditNoteSalesProductList = new ArrayList<SalesProducts>();
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				
					
					if(action == 1){
						
						while(rs.next()){
						if(loopSID != rs.getDouble("salesID")){
							
							 sObj = new Sales();
							 //
							 creditNoteSalesProductList = new ArrayList<SalesProducts>();
						      
					       
					        
					        sObj.setSalesId(rs.getDouble("salesID"));
					        sObj.setRecid(rs.getDouble("salesID"));
					        sObj.setSalesDate(rs.getString("salesadte"));
					        sObj.setSalesAmount(rs.getBigDecimal("InvoiceAmount"));
					        //sObj.setSalesAdditionalDiscountAmount(rs.getBigDecimal("invoiceADAmount"));
					       // sObj.setSalesAdditionalDiscountPercentage(rs.getBigDecimal("invoiceADPercentage"));
					       
					        //sObj.setSalesNetInvoiceAmount(rs.getBigDecimal("InvoiceAmount").subtract(rs.getBigDecimal("invoiceADAmount"), mc)); // math operation 
					        sObj.setSalesProductAmount(rs.getBigDecimal("InvoiceProductAmount"));
					        sObj.setSalesProductCount(rs.getDouble("productCount"));
					        sObj.setSalesVAT(rs.getBigDecimal("invoiceVAT"));
					        //sObj.setCNADID(rs.getInt("CNADID"));
					      
					        
					        SalesProducts spObj = new SalesProducts();
					        
					        spObj.setSalesProductsId(rs.getDouble("SPID"));
					        spObj.setRecid(rs.getDouble("SPID"));
					        //spObj.setSalesProductsAdditionalDiscountAmount(rs.getBigDecimal("cnProductDiscAmount"));
					        //spObj.setSalesProductsAdditionalDiscountPercentage(rs.getBigDecimal("cnProductDiscPercentage"));
					        spObj.setSalesProductsAmount(rs.getBigDecimal("productTotalAmount"));
					        spObj.setSalesProductsCompanyName(rs.getString("companyName"));
					        spObj.setSalesProductsMRP(rs.getBigDecimal("MRP"));
					       
					        spObj.setSalesProductsProductName(rs.getString("productName"));
					        spObj.setSalesProductsPurchaseRate(rs.getBigDecimal("purchaseRate"));
					        spObj.setSalesProductsQuantity(rs.getDouble("productQty"));
					        spObj.setSalesProductsFreeQuantity(rs.getDouble("poductFreeQty"));
					        spObj.setSalesProductsVAT(rs.getBigDecimal("CNproductVAT"));
					        spObj.setSalesProductsSaleRate(rs.getBigDecimal("saleRate"));
					        spObj.setSalesProductsDiscount(rs.getBigDecimal("Discount"));
					        //spObj.setSalesProductsCNADPID(rs.getDouble("CNADPID"));
					        
					        creditNoteSalesProductList.add(spObj);
					        
					        sObj.setSalesProductsList(creditNoteSalesProductList);
					        
					        creditNoteSalesList.add(sObj);
					        
					       				      
					}else{
						  SalesProducts spObj = new SalesProducts();
					        
					        spObj.setSalesProductsId(rs.getDouble("SPID"));
					        spObj.setRecid(rs.getDouble("SPID"));
					        //spObj.setSalesProductsAdditionalDiscountAmount(rs.getBigDecimal("cnProductDiscAmount"));
					        //spObj.setSalesProductsAdditionalDiscountPercentage(rs.getBigDecimal("cnProductDiscPercentage"));
					        spObj.setSalesProductsAmount(rs.getBigDecimal("productTotalAmount"));
					        spObj.setSalesProductsCompanyName(rs.getString("companyName"));
					        spObj.setSalesProductsMRP(rs.getBigDecimal("MRP"));
					       
					        spObj.setSalesProductsProductName(rs.getString("productName"));
					        spObj.setSalesProductsPurchaseRate(rs.getBigDecimal("purchaseRate"));
					        spObj.setSalesProductsQuantity(rs.getDouble("productQty"));
					        spObj.setSalesProductsFreeQuantity(rs.getDouble("poductFreeQty"));
					        spObj.setSalesProductsVAT(rs.getBigDecimal("CNproductVAT"));
					        spObj.setSalesProductsSaleRate(rs.getBigDecimal("saleRate"));
					        spObj.setSalesProductsDiscount(rs.getBigDecimal("Discount"));
					        //spObj.setSalesProductsCNADPID(rs.getDouble("CNADPID"));
					        
					        creditNoteSalesProductList.add(spObj);
					        
					        sObj.setSalesProductsList(creditNoteSalesProductList);
					}
						loopSID = rs.getDouble("salesID");			
				}
				
				}else
								
				{
					
					while(rs.next()){
						if(rs.getDouble("creditNoteType") != type){
							throw new Exception("Product Credit Note NOT FOUND!!");
						}else{
							if(CNID == 0){
						
							CNID = 1;
							Obj = new CreditNote();
							creditNoteSalesList = new ArrayList<Sales>();
							creditNoteSalesProductList = new ArrayList<SalesProducts>();
						
												
							Obj.setCreditNoteID(rs.getDouble("CNID"));
					        Obj.setCreditNoteCustID(rs.getDouble("cnCustID"));
					        Obj.setCreditNoteDate(rs.getString("cnDate"));
					        Obj.setCreditNoteCustName(rs.getString("custName"));
					        Obj.setCreditNoteType(rs.getDouble("creditNoteType"));
					        Obj.setCreditNoteStatus(rs.getInt("cnStatus"));
					       
					        Obj.setCreditNoteflgLedger(rs.getBoolean("flgLedgerLock"));
					        Obj.setCreditNoteLedgerDateTime(rs.getString("cnledgerOn"));
					        Obj.setCreditNoteLedgerUserName(rs.getString("ledgerUserName"));
					        Obj.setCreditNoteflgLock(rs.getBoolean("flgLock")); 
					        Obj.setCreditNoteLockDateTime(rs.getString("cnlockDate"));
					        Obj.setCreditNoteLockUserName(rs.getString("lockUserName"));
					       	Obj.setCreditNoteRemark(rs.getString("cnRemark"));
					        Obj.setCreditNoteVoidOn(rs.getString("cnVoidOn"));
					        Obj.setCreditNoteVoidReason(rs.getString("voidReason"));
					        Obj.setCreditNoteVoidByName(rs.getString("voidByName"));
					        Obj.setCreditNoteTypeDescription(rs.getString("TypeDescription"));
					        Obj.setCreditNoteStatusDescription(rs.getString("statusDecription"));
					        
					      
					        Obj.setCreditNoteCreatedByName(rs.getString("createdByName"));
					        Obj.setCreditNoteCreatedOn(rs.getString("cnCreatedOn"));
					        Obj.setCreditNoteLedgerByID(rs.getInt("cnledgerUserID"));
					       
					        Obj.setCreditNoteLockByID(rs.getInt("cnlockUserID"));
					   
					        
					        Obj.setCreditNoteVerifiedFlg(rs.getBoolean("flgVerified"));
					        Obj.setCreditNoteVerifiedBy(rs.getString("VerifiedByUser"));
					        Obj.setCreditNoteVerifiedOn(rs.getString("cnVerifiedOn"));
					        Obj.setCreditNoteVerifiedByID(rs.getInt("cnverifiedByID"));
					        
					     
					       
					        Obj.setCreditNoteflgVoid(rs.getBoolean("flgVoid"));
					      
					
					        
					        if(rs.getDouble("salesID") != 0){					        
						        sObj = new Sales();
						       
						        if(rs.getInt("CNID") != 0){
						        	sObj.setSalesIsAdditionalDiscInvoice(true);
						        }else{
						        	sObj.setSalesIsAdditionalDiscInvoice(false);
						        }
						        
						        sObj.setSalesId(rs.getDouble("salesID"));
						        sObj.setRecid(rs.getDouble("salesID"));
						        sObj.setSalesDate(rs.getString("salesadte"));
						        sObj.setSalesAmount(rs.getBigDecimal("InvoiceAmount"));
						        sObj.setSalesAdditionalDiscountAmount(rs.getBigDecimal("invoiceADPercentage"));
						        sObj.setSalesAdditionalDiscountPercentage(rs.getBigDecimal("invoiceADAmount"));
						       
						        sObj.setSalesNetInvoiceAmount(rs.getBigDecimal("InvoiceAmount").subtract(rs.getBigDecimal("invoiceADAmount"), mc)); // math operation 
						        sObj.setSalesProductAmount(rs.getBigDecimal("InvoiceProductAmount"));
						        sObj.setSalesProductCount(rs.getDouble("productCount"));
						        sObj.setSalesVAT(rs.getBigDecimal("invoiceVAT"));
						        sObj.setSalesDiscountType(rs.getInt("discType"));
						        sObj.setCNADID(rs.getInt("CNADID"));
						        sObj.setSalesRemark(rs.getString("salesRemark"));
						        
						        SalesProducts spObj = new SalesProducts();
						        
						        spObj.setSalesProductsId(rs.getDouble("SPID"));
						        spObj.setRecid(rs.getDouble("SPID"));
						        spObj.setSalesProductsAdditionalDiscountAmount(rs.getBigDecimal("cnProductDiscAmount"));
						        spObj.setSalesProductsAdditionalDiscountPercentage(rs.getBigDecimal("cnProductDiscPercentage"));
						        spObj.setSalesProductsAmount(rs.getBigDecimal("productTotalAmount"));
						        spObj.setSalesProductsCompanyName(rs.getString("companyName"));
						        spObj.setSalesProductsMRP(rs.getBigDecimal("MRP"));
						        
						        spObj.setSalesProductsProductName(rs.getString("productName"));
						        spObj.setSalesProductsPurchaseRate(rs.getBigDecimal("purchaseRate"));
						        spObj.setSalesProductsQuantity(rs.getDouble("productQty"));
						        spObj.setSalesProductsFreeQuantity(rs.getDouble("poductFreeQty"));
						        spObj.setSalesProductsVAT(rs.getBigDecimal("CNproductVAT"));
						        spObj.setSalesProductsSaleRate(rs.getBigDecimal("saleRate"));
						        spObj.setSalesProductsDiscount(rs.getBigDecimal("Discount"));
						       spObj.setSalesProductsCNADPID(rs.getDouble("CNADPID"));
						        
						        creditNoteSalesProductList.add(spObj);
						        
						        sObj.setSalesProductsList(creditNoteSalesProductList);
						      
						        creditNoteSalesList.add(sObj);
						        
						        Obj.setAdditionalDiscInvoiceList(creditNoteSalesList); 
					        }
					        
					        creditNoteList.add(Obj);
						}else{
							
						  if(loopSID != rs.getDouble("salesID")){
								
							 	sObj = new Sales();
							 	//creditNoteSalesList = new ArrayList<Sales>();
								creditNoteSalesProductList = new ArrayList<SalesProducts>();
							
						      
						        if(rs.getInt("CNID") != 0){
						        	sObj.setSalesIsAdditionalDiscInvoice(true);
						        }else{
						        	sObj.setSalesIsAdditionalDiscInvoice(false);
						        }
						        
						        sObj.setSalesId(rs.getDouble("salesID"));
						        sObj.setRecid(rs.getDouble("salesID"));
						        sObj.setSalesDate(rs.getString("salesadte"));
						        sObj.setSalesAmount(rs.getBigDecimal("InvoiceAmount"));
						        sObj.setSalesAdditionalDiscountAmount(rs.getBigDecimal("invoiceADPercentage"));
						        sObj.setSalesAdditionalDiscountPercentage(rs.getBigDecimal("invoiceADAmount"));
						       
						        sObj.setSalesNetInvoiceAmount(rs.getBigDecimal("InvoiceAmount").subtract(rs.getBigDecimal("invoiceADAmount"), mc)); // math operation 
						        sObj.setSalesProductAmount(rs.getBigDecimal("InvoiceProductAmount"));
						        sObj.setSalesProductCount(rs.getDouble("productCount"));
						        sObj.setSalesVAT(rs.getBigDecimal("invoiceVAT"));
						        sObj.setSalesDiscountType(rs.getInt("discType"));				        
						        sObj.setCNADID(rs.getInt("CNADID"));
						        sObj.setSalesRemark(rs.getString("salesRemark"));
						        
						        SalesProducts spObj = new SalesProducts();
						        
						        spObj.setSalesProductsId(rs.getDouble("SPID"));
						        spObj.setRecid(rs.getDouble("SPID"));
						        spObj.setSalesProductsAdditionalDiscountAmount(rs.getBigDecimal("cnProductDiscAmount"));
						        spObj.setSalesProductsAdditionalDiscountPercentage(rs.getBigDecimal("cnProductDiscPercentage"));
						        spObj.setSalesProductsAmount(rs.getBigDecimal("productTotalAmount"));
						        spObj.setSalesProductsCompanyName(rs.getString("companyName"));
						        spObj.setSalesProductsMRP(rs.getBigDecimal("MRP"));
						       
						        spObj.setSalesProductsProductName(rs.getString("productName"));
						        spObj.setSalesProductsPurchaseRate(rs.getBigDecimal("purchaseRate"));
						        spObj.setSalesProductsQuantity(rs.getDouble("productQty"));
						        spObj.setSalesProductsFreeQuantity(rs.getDouble("poductFreeQty"));
						        spObj.setSalesProductsVAT(rs.getBigDecimal("CNproductVAT"));
						        spObj.setSalesProductsSaleRate(rs.getBigDecimal("saleRate"));
						        spObj.setSalesProductsDiscount(rs.getBigDecimal("Discount"));
						        spObj.setSalesProductsCNADPID(rs.getDouble("CNADPID"));
						        
						        
						        creditNoteSalesProductList.add(spObj);
						        
						        sObj.setSalesProductsList(creditNoteSalesProductList);
						      
						        creditNoteSalesList.add(sObj);
						        
						        Obj.setAdditionalDiscInvoiceList(creditNoteSalesList); 
						        
						   	}else{
						   		
							    SalesProducts spObj = new SalesProducts();
						        
						        spObj.setSalesProductsId(rs.getDouble("SPID"));
						        spObj.setRecid(rs.getDouble("SPID"));
						        spObj.setSalesProductsAdditionalDiscountAmount(rs.getBigDecimal("cnProductDiscAmount"));
						        spObj.setSalesProductsAdditionalDiscountPercentage(rs.getBigDecimal("cnProductDiscPercentage"));
						        spObj.setSalesProductsAmount(rs.getBigDecimal("productTotalAmount"));
						        spObj.setSalesProductsCompanyName(rs.getString("companyName"));
						        spObj.setSalesProductsMRP(rs.getBigDecimal("MRP"));
						       
						        spObj.setSalesProductsProductName(rs.getString("productName"));
						        spObj.setSalesProductsPurchaseRate(rs.getBigDecimal("purchaseRate"));
						        spObj.setSalesProductsQuantity(rs.getDouble("productQty"));
						        spObj.setSalesProductsFreeQuantity(rs.getDouble("poductFreeQty"));
						        spObj.setSalesProductsVAT(rs.getBigDecimal("CNproductVAT"));
						        spObj.setSalesProductsSaleRate(rs.getBigDecimal("saleRate"));
						        spObj.setSalesProductsDiscount(rs.getBigDecimal("Discount"));
						        spObj.setSalesProductsCNADPID(rs.getDouble("CNADPID"));
						        
						        creditNoteSalesProductList.add(spObj);
						        
						        sObj.setSalesProductsList(creditNoteSalesProductList);
							      
							       
							}
							
							
						}
						//loopCreditNoteId = rs.getDouble("CNID");
						loopSID = rs.getDouble("salesID");
					}
					}
				
			}
					
	
			
			
			if(action == 1){
				json = util.util_makeJson(creditNoteSalesList);
			}
			if(action == 2){
				json = util.util_makeJson(creditNoteList);
			}
			
		}
   
		
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
	public String bl_setAdditionalDiscountCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		double CNADID =0;
		CallableStatement cstatement = null;
		CreditNote Obj;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CreditNote>() {});	
			query = "{call InsertUpdateProductCreditNote (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
	
						
			cstatement.setDouble(1, Obj.getCreditNoteType());
	      	cstatement.setDouble(2, Obj.getCreditNoteCustID());
	      	cstatement.setDouble(3, Obj.getCreditNoteID());
	      	cstatement.setString(4,Obj.getCreditNoteDate());
	      	cstatement.setDouble(5,Obj.getCreditNoteStatus());
	      	cstatement.setString(6,Obj.getCreditNoteRemark());
	      	
	      	cstatement.setBoolean(7,Obj.isCreditNoteflgLock()); 
	      	cstatement.setInt(8, Obj.getCreditNoteLockByID());
	      	cstatement.setString(9, Obj.getCreditNoteLockDateTime());

	      	cstatement.setBoolean(10,Obj.isCreditNoteflgVoid());
	      	cstatement.setInt(11, Obj.getCreditNoteVoidByID());

	      	
	      	cstatement.setBoolean(12,Obj.isCreditNoteflgLedger());
	      	cstatement.setInt(13, Obj.getCreditNoteLedgerByID());
	      	cstatement.setString(14, Obj.getCreditNoteLedgerDateTime());
	      	     	
	      	
	      	cstatement.setBigDecimal(15,Obj.getCreditNoteAmount()); //total of product
	      	cstatement.setBigDecimal(16,Obj.getCreditNoteProductTotalVATamt()); //total of credit note product vat
	      	cstatement.setBigDecimal(17,Obj.getCreditNoteProductReturnAmountTotal()); //total of credit note product amount
	      	cstatement.setString(18,Obj.getCreditNoteVoidReason());
				   
		    cstatement.setString(19, reqObj.getUserId());
		    cstatement.setString(20, reqObj.getToken());
		    if(Obj.getCreditNoteID() == 0){
		    	cstatement.setInt(21, reqObj.getInsertCNDNPermissionID());
		    }else{
		    	cstatement.setInt(21, reqObj.getUpdateCNDNPermissionID());
		    }
		    	    
		    cstatement.setDouble(22, status);
		    
		    
		    cstatement.setBoolean(23, Obj.isCreditNoteVerifiedFlg());
		    cstatement.setString(24, Obj.getCreditNoteVerifiedOn());
		    cstatement.setInt(25, Obj.getCreditNoteVerifiedByID());
		    cstatement.setString(26, Obj.getCreditNoteVoidOn());
		    cstatement.setString(27, Obj.getCreditNoteTypeDescription());
		    cstatement.setString(28, Obj.getCreditNoteStatusDescription());
		    
		    cstatement.registerOutParameter(3, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(22, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			output = cstatement.getInt(3);
			status = cstatement.getInt(22);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				con.commit();
				Obj.setCreditNoteID(output);
				System.out.println("creditNote ID in insert update"+output);			
				
				Sales sObj = new Sales();
				
				for(int i=0;i<Obj.getAdditionalDiscInvoiceList().size();i++){ 
					sObj = Obj.getAdditionalDiscInvoiceList().get(i);
					
					///////////////////////////////////////////////////////////////////////
					
					if(sObj.isSalesIsAdditionalDiscInvoice() == false){
						String query4="{call  deleteADandADP (?,?,?,?,?)}";
						cstatement = con.prepareCall (query4);
						
						cstatement.setDouble(1, sObj.getCNADID());
						cstatement.setString(2, reqObj.getUserId());
						cstatement.setString(3, reqObj.getToken());
						cstatement.setInt(4, reqObj.getUpdateCNDNPermissionID());
				        cstatement.setDouble(5, status);
				        
				        cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
				        
				        cstatement.execute();
						
						status = cstatement.getInt(5);
						
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{
							con.commit();
						}
					}
					///////////////////////////////////////////////////////////////////////////
					
					if(sObj.isSalesIsAdditionalDiscProductDataDeleted() == true){
						String query4="{call  deleteADP (?,?,?,?,?)}";
						cstatement = con.prepareCall (query4);
						
						cstatement.setDouble(1, sObj.getCNADID());
						cstatement.setString(2, reqObj.getUserId());
						cstatement.setString(3, reqObj.getToken());
						cstatement.setInt(4, reqObj.getUpdateCNDNPermissionID());
				        cstatement.setDouble(5, status);
				        
				        cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
				        
				        cstatement.execute();
						
						status = cstatement.getInt(5);
						
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{
							con.commit();
						}
					}
					
					
					
					///////////////////////////////////////////////////////
					
					if(sObj.getSalesDiscountType() == 1 && sObj.isSalesIsAdditionalDiscInvoice() == true){
						String query3="{call  InsertUpdateAD (?,?,?,?,?,?,?,?,?,?,?)}";
						cstatement = con.prepareCall (query3);
												
						cstatement.setDouble(1, sObj.getCNADID()); // need to add in retrieve logic
						if(Obj.getCreditNoteType() == 0){
							cstatement.setDouble(2, output);
						}else{
							cstatement.setDouble(2, Obj.getCreditNoteID());
						}
						 
						cstatement.setDouble(3, sObj.getSalesId()); 
						cstatement.setBigDecimal(4,sObj.getSalesAdditionalDiscountPercentage() );
						cstatement.setBigDecimal(5,sObj.getSalesAdditionalDiscountAmount());
						cstatement.setInt(6,sObj.getSalesDiscountType()); 
										
						cstatement.setString(7, reqObj.getUserId());
						cstatement.setString(8, reqObj.getToken());
						
						if( Obj.getCreditNoteID() == 0){ 
							cstatement.setInt(9, reqObj.getInsertCNDNPermissionID());
					    }else{
					    	cstatement.setInt(9, reqObj.getUpdateCNDNPermissionID());
					    }
						cstatement.setDouble(10, status);
						cstatement.setString(11, sObj.getSalesRemark());
												
						cstatement.registerOutParameter(10, java.sql.Types.INTEGER);
						cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
						
						cstatement.execute();
						status = cstatement.getInt(10);	
						CNADID = cstatement.getInt(1);	
						
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{ 
						      con.commit();
						}
					}
					
					
					//////////////////////////////////////////////////////////////////////////////
					
					
					
					if(sObj.getSalesDiscountType() == 2 && sObj.isSalesIsAdditionalDiscInvoice() == true){
					
						String query3="{call  InsertUpdateAD (?,?,?,?,?,?,?,?,?,?,?)}";
						cstatement = con.prepareCall (query3);
												
						cstatement.setDouble(1, sObj.getCNADID()); // need to add in retrieve logic
						if(Obj.getCreditNoteType() == 0){
							cstatement.setDouble(2, output);
						}else{
							cstatement.setDouble(2, Obj.getCreditNoteID());
						}
						 
						cstatement.setDouble(3, sObj.getSalesId()); 
						cstatement.setBigDecimal(4,sObj.getSalesAdditionalDiscountPercentage() );
						cstatement.setBigDecimal(5,sObj.getSalesAdditionalDiscountAmount());
						cstatement.setInt(6,sObj.getSalesDiscountType()); 
										
						cstatement.setString(7, reqObj.getUserId());
						cstatement.setString(8, reqObj.getToken());
						
						if( Obj.getCreditNoteID() == 0){ 
							cstatement.setInt(9, reqObj.getInsertCNDNPermissionID());
					    }else{
					    	cstatement.setInt(9, reqObj.getUpdateCNDNPermissionID());
					    }
						cstatement.setDouble(10, status);
						cstatement.setString(11, sObj.getSalesRemark());
						
						cstatement.registerOutParameter(10, java.sql.Types.INTEGER);
						cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
						
						cstatement.execute();
						status = cstatement.getInt(10);	
						CNADID = cstatement.getInt(1);	
						
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{ 
							 
							SalesProducts spObj = new SalesProducts();
							
							for(int j=0;j<sObj.getSalesProductsList().size();j++){
								spObj = sObj.getSalesProductsList().get(j);
							  
								if(spObj.isSalesProductIsChanged() == true){
									String query4="{call  InsertUpdateADP (?,?,?,?,?,?,?,?,?)}";
								    cstatement = con.prepareCall (query4);
								  
								    cstatement.setDouble(1, spObj.getSalesProductsCNADPID());// need to add in retrieve logic
								   
									//if(Obj.getCreditNoteType() == 0){
										cstatement.setDouble(2, CNADID);
									/*}else{
										cstatement.setDouble(2, sObj.getCNADID());
									}*/
									 
									cstatement.setDouble(3, spObj.getSalesProductsId()); 
									cstatement.setBigDecimal(4,spObj.getSalesProductsAdditionalDiscountPercentage() );
									cstatement.setBigDecimal(5,spObj.getSalesProductsAdditionalDiscountAmount());
																				
									cstatement.setString(6, reqObj.getUserId());
									cstatement.setString(7, reqObj.getToken());
									
									if( Obj.getCreditNoteID() == 0){ 
										cstatement.setInt(8, reqObj.getInsertCNDNPermissionID());
								    }else{
								    	cstatement.setInt(8, reqObj.getUpdateCNDNPermissionID());
								    }
									cstatement.setDouble(9, status);
									
									
								
								
									cstatement.registerOutParameter(9, java.sql.Types.INTEGER);
									cstatement.execute();
									status = cstatement.getInt(9);	
									
									if(status == 0){
										throw new Exception("User is not Authorized"+"->"+status);
									}else if(status == 1){
										throw new Exception("No Permission"+"->"+status);
									}else{ 
								  
								      con.commit();
								  
								    }
							} // end of isSalesProductIsChanged
						}// end of SalesProductsList for loop
					
					}// end of else
				} // end of if
			
			} // end of AdditionalDiscInvoiceList for loop 
				
		} // end of first else
		
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
	public String bl_getRateDiffrenceCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<CreditNote> creditNoteList = new ArrayList<CreditNote>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	  
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     
		try {
			util= new Util_json();
			CreditNote Obj = null; 
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getRateDifferenCreditNote(?,?,?,?,?)}";
	        callableStatement = con.prepareCall(query);
	        
	       
	        callableStatement.setDouble(1, reqObj.getCreditNoteId()); //custID  
	        callableStatement.setString(2, reqObj.getUserId());
			callableStatement.setString(3, reqObj.getToken());
			callableStatement.setInt(4, reqObj.getViewPermissionID()); //
			callableStatement.setDouble(5, status);
			
			callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
			
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(5);
			
			
			double loopCreditNoteId = 0;
			
			Sales sObj  = null;
			
	       			
			List<Sales> creditNoteSalesList = new ArrayList<Sales>();
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
					while(rs.next()){
					
					if(loopCreditNoteId != rs.getDouble("CNID")){
						
						
						Obj = new CreditNote();
						creditNoteSalesList = new ArrayList<Sales>();
										
						Obj.setCreditNoteID(rs.getDouble("CNID"));
				        Obj.setCreditNoteDate(rs.getString("cnDate"));
				        Obj.setCreditNoteType(rs.getDouble("cnType"));
				        Obj.setCreditNoteStatus(rs.getInt("cnStatus"));
				        Obj.setCreditNoteApprovedBy(rs.getString("approvedDetails")); //approved by name and date time
				        Obj.setCreditNoteStatusDescription(rs.getString("statusDecription"));
				        Obj.setCreditNoteTypeDescription(rs.getString("TypeDescription"));
				       
				        Obj.setCreditNoteCreatedOn(rs.getString("cnCreatedOn"));
				        
				        Obj.setCreditNoteflgLedger(rs.getBoolean("flgLedgerLock"));
					       // Obj.setCreditNoteLedgerDescription(rs.getString("legderInfo"));
					        Obj.setCreditNoteLedgerUserName(rs.getString("cnLedgerUserName"));
					        Obj.setCreditNoteLedgerByID(rs.getInt("ledgerUser"));
					        Obj.setCreditNoteLedgerDateTime(rs.getString("cnLedgertime"));
				        
				        //Obj.setCreditNoteApprovedFlg(rs.getBoolean("flgApproved"));
				        Obj.setCreditNoteApproved(rs.getInt("flgApproved"));
				        Obj.setCreditNoteflgLock(rs.getBoolean("flgLock")); 
				        Obj.setCreditNoteLockUserName(rs.getString("cnlockName"));
				        Obj.setCreditNoteLockByID(rs.getInt("cnlockuserID"));
				        Obj.setCreditNoteLockDateTime(rs.getString("cnLockdatetime"));
				        
				        
				        
				       	Obj.setCreditNoteRemark(rs.getString("cnRemark"));
				        Obj.setCreditNoteCreatedByName(rs.getString("cnCreadtedByName"));
				        Obj.setCreditNoteRateDifferenceId(rs.getDouble("ID"));
				        Obj.setCreditNoteCustID(rs.getDouble("cnCustID"));
				        
				        
				        Obj.setCreditNoteProductName(rs.getString("productName"));
				        Obj.setCreditNoteBatchName(rs.getString("batchNo"));
				        Obj.setCreditNoteProductMRP(rs.getBigDecimal("MRP"));
				        Obj.setCreditNoteProductOldSaleRate(rs.getBigDecimal("oldSaleRate"));
				        Obj.setCreditNoteProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
				        Obj.setCreditNoteProductRateDifference(rs.getBigDecimal("productRateDifferenceAmount"));
				        Obj.setCreditNoteProductSaleRate(rs.getBigDecimal("saleRate"));
				        Obj.setCreditNoteProductRateDiffPercentage(rs.getBigDecimal("productRateDifferencePecentage"));
				        
				        Obj.setCreditNoteRateDifference(rs.getBigDecimal("rateDifferenceAmount"));
				        Obj.setCreditNoteLessAmt(rs.getBigDecimal("lessAmount"));
				        Obj.setCreditNoteLessPercentage(rs.getBigDecimal("lessPecentage"));
				        Obj.setCreditNoteProductReturnAmountTotal(rs.getBigDecimal("returnAmount")); //Return Amount
				        Obj.setCreditNoteFlgRefundVAT(rs.getBoolean("flgRefundVAT"));
				        Obj.setCreditNoteVATPercentage(rs.getBigDecimal("VATpercentage")); // VAT percentage
				        Obj.setCreditNoteVATrefund(rs.getBigDecimal("VATrefund")); // VAT Refund
				        Obj.setCreditNoteProductTotalVATamt(rs.getBigDecimal("VATamount")); //VAT amount
				       				        
				        sObj = new Sales();
				       				        
				        sObj.setSalesId(rs.getDouble("InvoiceNo"));
				        sObj.setRecid(rs.getDouble("InvoiceNo"));
				        sObj.setSalesDate(rs.getString("InvoiceDate"));
				        sObj.setSalesFreeQty(rs.getDouble("FreeQty"));
				        sObj.setSalesQty(rs.getDouble("Qty"));
				        sObj.setSalesDiscountType(rs.getInt("DiscountType"));
				        sObj.setSalesAmount(rs.getBigDecimal("TotalAmt")); //total Amount
				        sObj.setSalesProductAmount(rs.getBigDecimal("Amount")); // Amt
				        sObj.setSalesVATamount(rs.getBigDecimal("VATamount")); // VAT amount
				        sObj.setSalesVAT(rs.getBigDecimal("VAT")); // VAT
				      
				        creditNoteSalesList.add(sObj);
				        
				        Obj.setAdditionalDiscInvoiceList(creditNoteSalesList); 
				        
				        creditNoteList.add(Obj);
					}else{
							
					 	sObj = new Sales();
					 					        
					 	sObj.setSalesId(rs.getDouble("InvoiceNo"));
				        sObj.setRecid(rs.getDouble("InvoiceNo"));
				        sObj.setSalesDate(rs.getString("InvoiceDate"));
				        sObj.setSalesFreeQty(rs.getDouble("FreeQty"));
				        sObj.setSalesQty(rs.getDouble("Qty"));
				        sObj.setSalesDiscountType(rs.getInt("DiscountType"));
				        sObj.setSalesAmount(rs.getBigDecimal("TotalAmt")); //total Amount
				        sObj.setSalesProductAmount(rs.getBigDecimal("Amount")); // Amt
				        sObj.setSalesVATamount(rs.getBigDecimal("VATamount")); // VAT amount
				        sObj.setSalesVAT(rs.getBigDecimal("VAT")); // VAT
				      					      
				        creditNoteSalesList.add(sObj);
				        
				        Obj.setAdditionalDiscInvoiceList(creditNoteSalesList); 
					        
					  }
					   
						loopCreditNoteId = rs.getDouble("CNID");
						
					}
					
					
				
			}
		
		json = util.util_makeJson(creditNoteList);
		
		
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
	public String bl_setRateDiffrenceCreditNote(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		int output = 0;
		CallableStatement cstatement = null;
		CreditNote Obj;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CreditNote>() {});	
			query = "{call UpdateCreditNoteForRateDifference (?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
	
	      	cstatement.setDouble(1, Obj.getCreditNoteID());
	       	cstatement.setString(2,Obj.getCreditNoteRemark());
	      	cstatement.setBoolean(3,Obj.isCreditNoteflgLock()); 
	      
	      	
	      	cstatement.setBigDecimal(4,Obj.getCreditNoteAmount()); //total of product
	      	cstatement.setBigDecimal(5,Obj.getCreditNoteProductTotalVATamt()); //total of credit note product vat
	      	cstatement.setBigDecimal(6,Obj.getCreditNoteProductReturnAmountTotal()); //total of credit note product amount
	      	//amount -- Amount
	      	//vat -- creditNoteProductTotalVATAmount
	      	//total -- creditNoteProductTotalAmount
	      	
	        cstatement.setInt(7, Obj.getCreditNoteApproved());
		   
			   
		    cstatement.setString(8, reqObj.getUserId());
		    cstatement.setString(9, reqObj.getToken());
		  
		    cstatement.setInt(10, reqObj.getUpdateCNDNPermissionID());
		     
		    cstatement.setDouble(11, status);
		    cstatement.setBoolean(12, Obj.isCreditNoteflgLedger());
		    
		    cstatement.registerOutParameter(1, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(11, java.sql.Types.INTEGER); 
			
			cstatement.execute();
			
			//output = cstatement.getInt(1);
			status = cstatement.getInt(11);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				//Obj.setCreditNoteID(output);
				System.out.println("creditNote ID in insert update"+output);			
				
				
				String query3="{call  InsertUpdateRateDiffrence (?,?,?,?,?,?,?,?,?)}";
				    
					cstatement = con.prepareCall (query3);
					
				    cstatement.setDouble(1, Obj.getCreditNoteRateDifferenceId());
					cstatement.setBigDecimal(2, Obj.getCreditNoteLessPercentage()); 
					cstatement.setBigDecimal(3, Obj.getCreditNoteLessAmt());
					cstatement.setBigDecimal(4,Obj.getCreditNoteProductReturnAmountTotal());
					cstatement.setBigDecimal(5,Obj.getCreditNoteVATrefund());
								
					cstatement.setString(6, reqObj.getUserId());
					cstatement.setString(7, reqObj.getToken());
					
				    cstatement.setInt(8, reqObj.getUpdateCNDNPermissionID());
				    cstatement.setDouble(9, status);
					
					cstatement.registerOutParameter(9, java.sql.Types.INTEGER);
					cstatement.execute();
					status = cstatement.getInt(9);	
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{ 
					  con.commit();
					  double recid = Obj.getCreditNoteID();
					  Obj.setRecid(recid);
					  if(Obj.isCreditNoteflgLedger() == true){
				        	Obj.setCreditNoteLedgerDescription("YES");
				        }else{
				        	Obj.setCreditNoteLedgerDescription("NO");
				        }
					}
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
	public String bl_getCreditNoteConsumptionDetails(PurpleaidRequest reqObj)throws Exception {
		Util_json util = null;
	    String json = null;
	    int status =444;
	    List<ConsumptionDetails> consumptionList = new ArrayList<ConsumptionDetails>();
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    
	    CallableStatement callableStatement = null;
		JdbcConnection JdbcConnectionObj = null;
	     
		try {
			util= new Util_json();
			ConsumptionDetails Obj = null; 
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	     
	        query="{call getConsumptionDetails(?,?,?,?,?)}";
	        
	        callableStatement = con.prepareCall(query);
	        callableStatement.setDouble(1, reqObj.getCreditNoteId());
	 	    callableStatement.setString(2, reqObj.getUserId());
			callableStatement.setString(3, reqObj.getToken());
			callableStatement.setInt(4, reqObj.getViewPermissionID());
			callableStatement.setDouble(5, status);
					
			callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			String cdStatus = null;
			status = callableStatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				while(rs.next()){
					
					Obj = new ConsumptionDetails();
			        Obj.setConsumptionDetailsId(rs.getDouble("ID"));
			        Obj.setRecid(rs.getDouble("ID"));
			        Obj.setConsumptionDetailsSaleDate(rs.getString("sDate"));
			        Obj.setConsumptionDetailsSaleId(rs.getDouble("SalesID"));
			        java.math.BigDecimal val =  rs.getBigDecimal("CNafterAmt");
			        
			       // value.compareTo(BigDecimal.ZERO)
			        if(rs.isLast() == true){
				        if(val.compareTo(BigDecimal.ZERO) > 0){
				        	
				        	
				        	 cdStatus = "Partial";
				        	 Obj.setConsumptionDetailsStatus(cdStatus);
				        }else{
				        	
				        	 cdStatus = "Fully";
				        	 Obj.setConsumptionDetailsStatus(cdStatus);
				        }
			        }
			        
			        Obj.setConsumptionDetailsProductCount(rs.getDouble("productCount"));
			        Obj.setConsumptionDetailsCNconsumptionAmt(rs.getBigDecimal("ConsumptionAmt"));
			        Obj.setConsumptionDetailsCNremainingAmt(rs.getBigDecimal("CNafterAmt"));
			        Obj.setConsumptionDetailsSaleUser(rs.getString("SaleUser"));
			       
			        consumptionList.add(Obj);
			        
			      }
			
			}
			 //json = util.util_makeJson(consumptionList) ;
			
			json = "{\"consumptionList\":"+util.util_makeJson(consumptionList)+",\"status\":"+util.util_makeJson(cdStatus)+"}";
			
	     
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
}
