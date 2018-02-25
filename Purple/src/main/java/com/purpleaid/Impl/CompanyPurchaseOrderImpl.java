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
import com.purpleaid.beans.Product;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.CompanyPurchaseOrder_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;


public class CompanyPurchaseOrderImpl implements CompanyPurchaseOrder_IF {
	
	@Override
	public String bl_getCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception {
		  Util_json util= null;
		  String json=null;
		  Connection con = null;
		  ResultSet rs = null;
		  CallableStatement cstatement = null;
		  int status=444;  
		  JdbcConnection JdbcConnectionObj = null;
		  try{
		   util= new Util_json();
		 //con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
		   
		   String query = "{call retrieveCompanyPurchaseOrderNew (?,?,?,?,?)}";
		   cstatement = con.prepareCall(query);
		   cstatement.setDouble(1, reqObj.getEntityId());
		   cstatement.setString(2, reqObj.getUserId());
		   cstatement.setString(3, reqObj.getToken());
		   cstatement.setInt(4, reqObj.getViewPermissionID());
		   cstatement.setDouble(5, status);
		   
		   List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
		  
		   CompanyPurchaseOrder cpoObjResponse = new CompanyPurchaseOrder();
		   
		   cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
		   rs=cstatement.executeQuery();
			
			status = cstatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{     
			    while(rs.next()){
			     
			     cpoObjResponse.setCpoId(rs.getDouble("cpoId"));
			     cpoObjResponse.setCpoCompanyId(rs.getDouble("cpoCompanyId"));
			     cpoObjResponse.setCpoSupplierId(rs.getDouble("cpoSupplierId"));
			     cpoObjResponse.setCpoMrId(rs.getDouble("cpoMrId"));
			     cpoObjResponse.setCpoDate(rs.getString("cpoDate"));
			     cpoObjResponse.setCpoAmount(rs.getDouble("cpoAmount"));
			     cpoObjResponse.setCpoRemark(rs.getString("cpoRemark"));
			     cpoObjResponse.setCpoEmailFlag(rs.getBoolean("cpoEmailFlag"));
			     cpoObjResponse.setCpoCancelPendingFlag(rs.getBoolean("cpoCancelPendingFlag"));
			     cpoObjResponse.setCpoSchemeFlag(rs.getBoolean("cpoSchemeFlag"));
			     cpoObjResponse.setCpoUrgentFlag(rs.getBoolean("cpoUrgentFlag"));
			     cpoObjResponse.setCpoVoidFlag(rs.getBoolean("cpoVoidFlag"));
			     cpoObjResponse.setCpoVoidText(rs.getString("cpoVoidText"));
			     /*cpoObjResponse.setCpoStopOpenFlag(rs.getBoolean("cpoStopOpenFlag"));*/
			     cpoObjResponse.setCpoStatus(rs.getInt("poStatus"));
			    
			     CompanyProduct cpObj = new CompanyProduct();
			     cpObj.setCompanyId(rs.getDouble("companyId"));
			     cpObj.setProductId(rs.getDouble("productId"));
			     cpObj.setRecid(rs.getDouble("productId"));
			     cpObj.setScheme(rs.getDouble("scheme"));
			     cpObj.setValue(rs.getDouble("value"));
			     cpObj.setRemark(rs.getString("remark"));//productQuantity
			     cpObj.setMrp(rs.getDouble("mrp"));
			     cpObj.setQty(rs.getDouble("productQuantity"));
			     
			     Product pObj = new Product();
			     pObj.setProductId(rs.getDouble("productId"));
			     pObj.setProductUPCId(rs.getString("productUPCId"));
			     pObj.setProductOtherInfo(rs.getString("productOtherInfo"));
			     pObj.setProductName(rs.getString("productName"));
			     pObj.setProductDesc(rs.getString("productDesc"));
			     pObj.setProductRemark(rs.getString("productRemark"));
			     pObj.setProductTypeId(rs.getDouble("productType"));
			     pObj.setProductTypeName(rs.getString("productTypeName"));
			     pObj.setProductCompanyId(rs.getDouble("productCompanyId"));
			     pObj.setProductDivisionId(rs.getDouble("productDivisionId"));
			     pObj.setProductPack(rs.getDouble("productPack"));
			     pObj.setProductBox(rs.getDouble("productBox"));
			     pObj.setProductActiveFlag(rs.getBoolean("productActiveFlag"));
			     pObj.setProductDPCOFlag(rs.getBoolean("productDPCOFlag"));
			     pObj.setProductNarcoticsFlag(rs.getBoolean("productNarcoticsFlag"));
			     
			     if(cpObj.getProductId()==pObj.getProductId()){
			    	 List<Product> ProductList = new ArrayList<Product>();
			    	 ProductList.add(pObj);
			    	 cpObj.setProductList(ProductList);
			    	 cpObj.setProductName(pObj.getProductName());
			     }
			     
			    
			     cpoProductList.add(cpObj);
			    
			     cpoObjResponse.setCpoProductList(cpoProductList);
			    
			    
			   }
			    if(cpoObjResponse.getCpoId()==0){
			        throw new Exception("Order ID NOT FOUND!!");		       
			    };
			}
		     json = util.util_makeJson(cpoObjResponse);
		    
		    }catch (Exception e) {
		    	try {
		    		con.close();
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	} catch(Exception e1) {
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	}
		    } 
		    
		    return json;
	}



	@Override
	public String bl_setCompanyPurchaseOrder(PurpleaidRequest reqObj) throws Exception {
		String response = null;
		Connection con = null;
		String query = null;
		CallableStatement callableStatement = null;
		CompanyPurchaseOrder cpoObj = null;
		int status =444 ;
		 JdbcConnection JdbcConnectionObj = null;
		 Util_json util = new Util_json();
		try{
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			cpoObj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<CompanyPurchaseOrder>() {});
			
			query = "{call InsertCompanyPurchaseOrder(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			callableStatement = con.prepareCall(query);
			
			callableStatement.setDouble(1,cpoObj.getCpoId());
			callableStatement.setDouble(2,cpoObj.getCpoCompanyId());  
			callableStatement.setDouble(3,cpoObj.getCpoSupplierId());
			callableStatement.setDouble(4,cpoObj.getCpoMrId());
			callableStatement.setString(5,cpoObj.getCpoDate());
			callableStatement.setDouble(6,cpoObj.getCpoAmount());
			callableStatement.setString(7,cpoObj.getCpoRemark());
			callableStatement.setBoolean(8,cpoObj.isCpoEmailFlag());
			callableStatement.setBoolean(9,cpoObj.isCpoCancelPendingFlag());
			callableStatement.setBoolean(10,cpoObj.isCpoSchemeFlag());
			callableStatement.setBoolean(11,cpoObj.isCpoUrgentFlag());
			callableStatement.setBoolean(12,cpoObj.isCpoVoidFlag());
			callableStatement.setString(13,cpoObj.getCpoVoidText());
			
			callableStatement.setString(14, reqObj.getUserId());
			callableStatement.setString(15, reqObj.getToken());
			callableStatement.setInt(16, reqObj.getInsertPermissionID());
			callableStatement.setInt(17, reqObj.getUpdatePermissionID());
			callableStatement.setInt(18, reqObj.getDeletePermissionID());
			callableStatement.setInt(19, reqObj.getChangeDatePermissionID());
			callableStatement.setDouble(20, status);
			callableStatement.setInt(21,cpoObj.getCpoStatus());
	
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			
			callableStatement.registerOutParameter(20, java.sql.Types.INTEGER);
			
			callableStatement.execute();
			
			double output = callableStatement.getDouble(1);
			status = callableStatement.getInt(20);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				System.out.println("Order Id Saved !!!"+output);
				cpoObj.setCpoId(output);
				
				String query2="{call deletePurchaseProducts(?,?,?,?,?)}";
				callableStatement = con.prepareCall(query2);
				callableStatement.setDouble(1,cpoObj.getCpoId());
				callableStatement.setString(2, reqObj.getUserId());
				callableStatement.setString(3, reqObj.getToken());
				
				if(cpoObj.getCpoId() == 0){
					callableStatement.setInt(4, reqObj.getInsertPermissionID());
				}else{
					callableStatement.setInt(4, reqObj.getUpdatePermissionID());
				}
				
			
				callableStatement.setDouble(5, reqObj.getStatus());
				callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
				callableStatement.executeUpdate();
				
				int DeleteStatus = callableStatement.getInt(5);
				
				if(DeleteStatus == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(DeleteStatus == 1){
					throw new Exception("No Permission In delete Purchase Products"+"->"+status);
				}else{
				
					System.out.println("You have inserted key=="+cpoObj.getCpoId());
					
					String query3="call InsertPurchaseproducts(?,?,?,?,?,?,?,?,?,?,?)";
					
					callableStatement = con.prepareCall(query3);
					
					CompanyProduct companyProduct = new CompanyProduct();
					for(int i=0;i<cpoObj.getCpoProductList().size();i++){ 
						companyProduct = cpoObj.getCpoProductList().get(i);
						callableStatement.setDouble(1, cpoObj.getCpoId());
						callableStatement.setDouble(2, cpoObj.getCpoCompanyId());
						callableStatement.setDouble(3, companyProduct.getProductId());
						callableStatement.setDouble(4, companyProduct.getQty());
						callableStatement.setDouble(5, companyProduct.getScheme());
						callableStatement.setDouble(6, companyProduct.getValue());
						callableStatement.setString(7, companyProduct.getRemark());
						callableStatement.setString(8, reqObj.getUserId());
						callableStatement.setString(9, reqObj.getToken());
						if(cpoObj.getCpoId() == 0){
							callableStatement.setInt(10, reqObj.getInsertPermissionID());
						}else{
							callableStatement.setInt(10, reqObj.getUpdatePermissionID());
						}
						callableStatement.setDouble(11, reqObj.getStatus());
						callableStatement.addBatch();
					}
					callableStatement.executeBatch();
					
					con.commit();
					cpoObj.setCpoId(output); 
					
				}
			
			}
			
			
			//response = ""+(int)output;	
			
			response =  util.util_makeJson(cpoObj);
			
		}catch(Exception e){
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 110000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 110000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 110000102: "+e.getMessage()+"->"+status);
				}

			}
		}
		
		return response;
	}

	@Override
	public String bl_getCompanyPurchaseOrderList(PurpleaidRequest reqObj) throws Exception {
		  Util_json util= null;
		  String json=null;
		  int status =444;
		  List<CompanyPurchaseOrder> companyOrderList =new ArrayList<CompanyPurchaseOrder>();
		  Connection con = null;
		  ResultSet rs = null;
		  CallableStatement cstatement = null;
		  JdbcConnection JdbcConnectionObj = null;
		  try{
		   util= new Util_json();
		   con = DataSource.getInstance().getConnection();//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
		   
		   String query = "{call getPO (?,?,?,?,?,?)}";
		   cstatement = con.prepareCall(query);
		   cstatement.setString(1, reqObj.getGrDate());
		   cstatement.setDouble(2, reqObj.getCompanyId());
		   cstatement.setDouble(2, reqObj.getGrID());
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
		   
			   double loopId = 0;
			   CompanyPurchaseOrder cpoObjResponse = new CompanyPurchaseOrder();
			   List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
			
			    while(rs.next()){
			    	if(loopId != rs.getDouble("purchaseOrderId")){
			    		
			    		cpoObjResponse = new CompanyPurchaseOrder();
			    		cpoProductList = new ArrayList<CompanyProduct>();
			    		
				    	cpoObjResponse.setCpoId(rs.getDouble("purchaseOrderId"));
				    	cpoObjResponse.setCpoDate(rs.getString("purchaseOrderDate"));
				     
				    	CompanyProduct cpObj = new CompanyProduct();
				    	cpObj.setQty(rs.getDouble("productQuantity"));
				    	cpObj.setScheme(rs.getDouble("productScheme"));
				    	cpObj.setProductId(rs.getDouble("productId"));
				    	
				      	cpoProductList.add(cpObj);
				      	cpoObjResponse.setCpoProductList(cpoProductList);
				      	companyOrderList.add(cpoObjResponse);
			    	} else {
			    		CompanyProduct cpObj = new CompanyProduct();
				    	cpObj.setQty(rs.getDouble("productQuantity"));
				    	cpObj.setScheme(rs.getDouble("productScheme"));
				    	cpObj.setProductId(rs.getDouble("productId"));
				    	
				      	cpoProductList.add(cpObj);
				      	cpoObjResponse.setCpoProductList(cpoProductList);
			    	} // end if
			    	
			    	loopId = rs.getDouble("purchaseOrderId");
			   } // end while loop
			}		  
		     json = util.util_makeJson(companyOrderList);
		    
		    }catch (Exception e) {
		    	try {
		    		con.close();
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	} catch(Exception e1) {
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	}
		    } 
		    
		    return json;
	}

	@Override
	public String bl_getAllcpoByProductList(PurpleaidRequest reqObj) throws Exception {
		  Util_json util= null;
		  String json=null;
		  int status =444;
		  List<CompanyPurchaseOrder> companyOrderList =new ArrayList<CompanyPurchaseOrder>();
		  Connection con = null;
		  ResultSet rs = null;
		  CallableStatement cstatement = null;
		  JdbcConnection JdbcConnectionObj = null;
		  try{
		   util= new Util_json();
		 //con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
		   
		   String query = "{call getProductPO (?,?,?,?,?,?)}";
		   cstatement = con.prepareCall(query);
		   cstatement.setString(1, reqObj.getGrDate());
		   cstatement.setDouble(2, reqObj.getGrID());
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
		   
			   double loopId = 0;
			   CompanyPurchaseOrder cpoObj = new CompanyPurchaseOrder();
			   List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
			
			    while(rs.next()){
			    	if(loopId != rs.getDouble("productId")){
			    		
			    		CompanyProduct cpObj = new CompanyProduct();
				    	
				    	cpObj.setProductId(rs.getDouble("productId"));
				    	cpObj.setQty(rs.getDouble("productQuantity"));
				    	cpObj.setScheme(rs.getDouble("productScheme"));
				    	cpoProductList.add(cpObj);
				    	
			    		cpoObj = new CompanyPurchaseOrder();
			    		
			    		companyOrderList = new ArrayList<CompanyPurchaseOrder>();
			    		
				    	cpoObj.setCpoId(rs.getDouble("purchaseOrderId"));
				    	cpoObj.setCpoDate(rs.getString("purchaseOrderDate"));
				    	cpoObj.setCpoAmount(rs.getDouble("poAmount"));
				    	
				      	cpoObj.setCpoProductList(cpoProductList);
				      	companyOrderList.add(cpoObj);
			    	} else {
			    		
			    		CompanyProduct cpObj = new CompanyProduct();
				    	
				    	cpObj.setQty(rs.getDouble("productQuantity"));
				    	cpObj.setScheme(rs.getDouble("productScheme"));
				    	cpoProductList.add(cpObj);
			    		
				      	cpoObj = new CompanyPurchaseOrder();
			    		
			    		companyOrderList = new ArrayList<CompanyPurchaseOrder>();
			    		
				    	cpoObj.setCpoId(rs.getDouble("purchaseOrderId"));
				    	cpoObj.setCpoDate(rs.getString("purchaseOrderDate"));
				    	cpoObj.setCpoAmount(rs.getDouble("poAmount"));
				    	cpoObj.setCpoProductList(cpoProductList);
				      	companyOrderList.add(cpoObj);
				      	
			    	} // end if
			    	
			    	loopId = rs.getDouble("productId");
			   } // end while loop
			}	  
		     json = util.util_makeJson(companyOrderList);
		    
		    }catch (Exception e) {
		    	try {
		    		con.close();
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	} catch(Exception e1) {
		    		throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
		    	}
		    } 
		    
		    return json;
	
	
	}
	

	 @Override
	    public String bl_getPurchaseOrderRegister(PurpleaidRequest reqObj) throws Exception {
	 
	        Util_json util = null;
	          String json = null;
	          Connection con = null;
	          String query = null;
	          ResultSet rs = null;
	          JdbcConnection connectionObj = null;
	          CallableStatement cstatement = null;
	          int status =444;
	          double loopPOID = 0;
	          CompanyPurchaseOrder purchaseOrderObj = null;
	          List<CompanyPurchaseOrder> purchaseOrderList = null;
	             
	          try{
	           util = new Util_json();
	           connectionObj = new JdbcConnection();
	           con = connectionObj.getConnection();
	           
	           purchaseOrderList = new ArrayList<CompanyPurchaseOrder>();
	           query = "{call RetrievePurchaseOrderRegister(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
	           cstatement = con.prepareCall(query);
	           cstatement.setDouble(1, reqObj.getLastID());
	           cstatement.setInt(2, reqObj.getListLimit());
	           cstatement.setDouble(3, reqObj.getCompanyId());
	           cstatement.setDouble(4, reqObj.getSupplierId());
	           cstatement.setDouble(5, reqObj.getEntityId());   //as mr id
	           cstatement.setDouble(6, reqObj.getPurchaseOrderID());
	           cstatement.setString(7, reqObj.getFromDate());
	           cstatement.setString(8, reqObj.getToDate());
	           cstatement.setInt(9,reqObj.getPoItem());
	           cstatement.setDouble(10, reqObj.getFromAmt());
	           
	           cstatement.setDouble(11, reqObj.getToAmt());
	           cstatement.setDouble(12, reqObj.getStatus());
	           cstatement.setInt(13,reqObj.getPoflgUrgent());
	           cstatement.setInt(14, reqObj.getPoflgVoid());
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
	            
	               purchaseOrderObj = new CompanyPurchaseOrder();
	            List<CompanyProduct> productList = new ArrayList<CompanyProduct>();
	            
	               while(rs.next()){
	                
	             if  (loopPOID != rs.getDouble("purchaseOrderNum")){
	              
	                 purchaseOrderObj = new CompanyPurchaseOrder();
	              productList = new ArrayList<CompanyProduct>();
	              
	              purchaseOrderObj.setCpoId(rs.getDouble("purchaseOrderNum"));
	              purchaseOrderObj.setRecid(rs.getDouble("purchaseOrderNum"));
	              purchaseOrderObj.setCpoDate(rs.getString("OrderDate"));
	              purchaseOrderObj.setCpoAmount(rs.getDouble("OrderAmount"));
	              purchaseOrderObj.setCpoItem(rs.getInt("items"));
	              purchaseOrderObj.setCpoSupplierId(rs.getDouble("SID"));
	              purchaseOrderObj.setCpoSupplierName(rs.getString("supplierName"));
	              purchaseOrderObj.setCpoMrId(rs.getDouble("MID"));
	              purchaseOrderObj.setCpoMrName(rs.getString("MRName"));
	              
	              purchaseOrderObj.setCpoStatus(rs.getInt("status"));
	              if(rs.getInt("status") == 1){
	            	  purchaseOrderObj.setCpoStatusDescription("New");
	              }else{
	            	  purchaseOrderObj.setCpoStatusDescription("Raised");
	              }
	              
	              purchaseOrderObj.setCpoUrgent(rs.getBoolean("flgUrgent"));
	              if(rs.getBoolean("flgUrgent") == true){
	            	  purchaseOrderObj.setCpoUrgentDescription("YES");
			      }else{
			          purchaseOrderObj.setCpoUrgentDescription("NO");
			      }
	              
	              purchaseOrderObj.setCpoVoidFlag(rs.getBoolean("Flgvoid"));
	              if(rs.getBoolean("Flgvoid") == true){
	            	  purchaseOrderObj.setCpoVoidDescription("YES");
			      }else{
			          purchaseOrderObj.setCpoVoidDescription("NO");
			      }
	              
	              purchaseOrderObj.setCpoEmailFlag(rs.getBoolean("Flgemail"));
	              purchaseOrderObj.setCpoSchemeFlag(rs.getBoolean("FlgScheme"));
	              purchaseOrderObj.setCpoCancelPendingFlag(rs.getBoolean("FlgCancelpending"));
	              purchaseOrderObj.setCpoVoidText(rs.getString("VoidReason"));
	              purchaseOrderObj.setCpoCreatedById(rs.getDouble("CreatedBy"));
	              purchaseOrderObj.setCpoCreatedByName(rs.getString("CreatedByUserName"));
	              purchaseOrderObj.setCpoCompanyId(rs.getDouble("companyID"));
	              purchaseOrderObj.setCpoCompanyName(rs.getString("CompanyName"));
	              
	                
	                  CompanyProduct cpObj = new CompanyProduct();
	                  
	                  cpObj.setProductId(rs.getDouble("productID"));
	                  cpObj.setRecid(rs.getDouble("productID"));
	                  cpObj.setType(rs.getString("productType"));
	                  cpObj.setProductName(rs.getString("productName"));
	                  cpObj.setProductDivisionId(rs.getDouble("divisionID"));
	                  cpObj.setDivision(rs.getString("DivisionName"));
	                  cpObj.setPack(rs.getString("productPack"));
	                  cpObj.setBox(rs.getInt("productBox"));
	                 
	                  cpObj.setMrp(rs.getDouble("mrp"));
	                  cpObj.setQty(rs.getDouble("Quantity"));
	                  cpObj.setScheme(rs.getDouble("scheme"));
	                  cpObj.setValue(rs.getDouble("value"));
	                  cpObj.setRemark(rs.getString("ProductRemark"));
	                  
	                  
	                  double output = cpObj.getProductId();
	                  if(output == 0){
	                  
	                   purchaseOrderObj.setCpoProductList(productList);
	                   purchaseOrderList.add(purchaseOrderObj);
	                   
	                  }
	                  else{
	                   productList.add(cpObj);
	                   purchaseOrderObj.setCpoProductList(productList);
	                   purchaseOrderList.add(purchaseOrderObj);
	                  }
	             }else{
	              
	              
	              CompanyProduct cpObj = new CompanyProduct();
	              
	               cpObj.setProductId(rs.getDouble("productID"));
	                  cpObj.setRecid(rs.getDouble("productID"));
	                  cpObj.setType(rs.getString("productType"));
	                  cpObj.setProductName(rs.getString("productName"));
	                  cpObj.setProductDivisionId(rs.getDouble("divisionID"));
	                  cpObj.setDivision(rs.getString("DivisionName"));
	                  cpObj.setPack(rs.getString("productPack"));
	                  cpObj.setBox(rs.getInt("productBox"));
	                  
	                  cpObj.setMrp(rs.getDouble("mrp"));
	                  cpObj.setQty(rs.getDouble("Quantity"));
	                  cpObj.setScheme(rs.getDouble("scheme"));
	                  cpObj.setValue(rs.getDouble("value"));
	                  cpObj.setRemark(rs.getString("ProductRemark"));
	                  
	                  productList.add(cpObj);
	                  purchaseOrderObj.setCpoProductList(productList);
	                
	              }
	             loopPOID = rs.getDouble("purchaseOrderNum");
	               }
	           }
	          json = "{\"purchaseOrderList\":"+util.util_makeJson(purchaseOrderList) +",\"lastId\":"+loopPOID+"}";
	           
	           
	          }catch(Exception e){
	           
	           try {
	               con.close();
	               throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
	              } catch(Exception e1) {
	               throw new Exception("\nError 11000101: "+e.getMessage()+"->"+status);
	              }
	           
	          }
	          return json;
	 
	 
	    }


}
