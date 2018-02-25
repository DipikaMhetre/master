package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.CompanyProduct;
import com.purpleaid.beans.Content;
import com.purpleaid.beans.GrProductBatch;
import com.purpleaid.beans.Product;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.ReturnRegisterProduct;
import com.purpleaid.interfaces.Product_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ProductImpl implements Product_IF {

	@Override
	public String bl_setProduct(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		CallableStatement callableStatement = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		String query = null;
		Product product = null;
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try {
			
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			product = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Product>() {});
			query="{call InsertUpdateProductMaster(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, product.getProductId());
			callableStatement.setBoolean(2, product.isProductActiveFlag());
			callableStatement.setDouble(3, product.getProductBox());
			callableStatement.setDouble(4, product.getProductCompanyId());
			callableStatement.setBoolean(5, product.isProductDPCOFlag());
			callableStatement.setString(6, product.getProductDesc());
			callableStatement.setDouble(7, product.getProductDiscount());
			callableStatement.setDouble(8, product.getProductDivisionId());
			callableStatement.setBigDecimal(9, product.getProductMrp());
			callableStatement.setBoolean(10, product.isProductNarcoticsFlag());
			callableStatement.setString(11, product.getProductOtherInfo());
			callableStatement.setDouble(12, product.getProductPack());
			callableStatement.setBigDecimal(13, product.getProductPurchaseRate());		
			callableStatement.setString(14, product.getProductRemark());		
			callableStatement.setBigDecimal(15, product.getProductSaleRate());
			callableStatement.setString(16, product.getProductShelfId());
			callableStatement.setInt(17, product.getProductCategory());
			callableStatement.setDouble(18, product.getProductDPCOrate());
			callableStatement.setDouble(19, product.getProductTypeId());
			callableStatement.setString(20, product.getProductUPCId());	
			callableStatement.setString(21, product.getProductName());	
			callableStatement.setBoolean(22, product.isProductLockFlag());	
			callableStatement.setString(23, reqObj.getUserId());
			callableStatement.setString(24, reqObj.getToken());
			callableStatement.setInt(25, reqObj.getInsertPermissionID());
			callableStatement.setInt(26, reqObj.getUpdatePermissionID());
			callableStatement.setInt(27, reqObj.getDeletePermissionID());
			callableStatement.setDouble(28, status);
			
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			callableStatement.registerOutParameter(28, java.sql.Types.INTEGER);
			
			callableStatement.execute();
			
			double output = callableStatement.getDouble(1);
			status = callableStatement.getInt(28);
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				System.out.println("Product Id Saved/Updated !!!"+output);
				product.setProductId(output);
				product.setRecid(output);
				
				String query2="{call deleteCustomerLicence(?,?,?,?,?)}";
				
				cstatement = con.prepareCall(query2);
				cstatement.setDouble(1, product.getProductId());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				
				if( product.getProductId() == 0){ 
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
									
					String query3="{Call InsertProductContents(?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query3);
					
					Content contentObj = new Content();
					for(int i=0;i<product.getProductContents().size();i++){ 
						contentObj = product.getProductContents().get(i);
						cstatement1.setDouble(1, product.getProductId());
						cstatement1.setDouble(2, contentObj.getContentId());
						cstatement1.setString(3, contentObj.getContentUnit());
						cstatement1.setDouble(4, contentObj.getContentStrength());
						cstatement1.setString(5, reqObj.getUserId());
						cstatement1.setString(6, reqObj.getToken());
						
						if( product.getProductId() == 0){ 
							cstatement1.setInt(7, reqObj.getInsertPermissionID());
					    }else{
					    	cstatement1.setInt(7, reqObj.getUpdatePermissionID());
					    }
						cstatement1.setDouble(8, status);
						
						
						cstatement1.execute();
						cstatement1.registerOutParameter(8, java.sql.Types.INTEGER);
						
						status = cstatement1.getInt(8);
					}
						
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{ 
					  con.commit();
					}
					
					
				}
			}
			json = util.util_makeJson(product);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 40000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 40000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 40000102: "+e.getMessage()+"->"+status);
				}

			}

		} 
		return json;
	}

	@Override
	public String getAllProductListByCompany(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Product> companyProductList = null;
		int status  =444 ;		
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
	
		try {
			
			util= new Util_json();
			companyProductList=new ArrayList<Product>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			query="{call getCDProductList(?,?,?,?,?)}";
			
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, reqObj.getCompanyId()); 
			callableStatement.setString(2, reqObj.getUserId());
			callableStatement.setString(3, reqObj.getToken());
			callableStatement.setInt(4, reqObj.getViewPermissionID());
			callableStatement.setDouble(5, status);
			
			callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
			
			
			
			double loopPID = 0;
			Product product = new Product();
			List<Content> contentList=new ArrayList<Content>();
			//List<ContentType> contentTypeList = new ArrayList<ContentType>();
						
			while(rs.next()){
				
				if 	(loopPID != rs.getDouble("ID")){
				
					product = new Product();
					contentList=new ArrayList<Content>();
					//contentTypeList = new ArrayList<ContentType>();
					
					product.setProductCompanyId(rs.getDouble("CID"));
					product.setProductId(rs.getDouble("ID"));
					product.setRecid(rs.getDouble("ID"));
					product.setProductUPCId(rs.getString("upcID"));
					product.setProductOtherInfo(rs.getString("Other"));
					product.setProductName(rs.getString("Name"));
					product.setProductDesc(rs.getString("Description"));
					product.setProductTypeId(rs.getInt("Type"));
					product.setProductTypeName(rs.getString("TypeName"));
					product.setProductShelfId(rs.getString("ShelfID"));
					product.setProductCategory(rs.getInt("prodCategory"));
					product.setProductDPCOrate(rs.getDouble("DPCOrate"));
					product.setProductDivisionId(rs.getDouble("DID"));
					product.setProductRemark(rs.getString("Remark"));
					product.setProductBox(rs.getDouble("Box"));
					product.setProductPack(rs.getDouble("Pack"));
					product.setProductMrp(rs.getBigDecimal("MRP"));
					product.setProductPurchaseRate(rs.getBigDecimal("PurchaseRate"));
					product.setProductSaleRate(rs.getBigDecimal("SaleRate"));
					product.setProductDiscount(rs.getDouble("ProductDiscount"));
					
					if(rs.getInt("flgActive")==1){
						product.setProductActiveFlag(true);
					}else{
						product.setProductActiveFlag(false);
					}
					
					if(rs.getInt("flgDPCO")==1){
						product.setProductDPCOFlag(true);
					}else{
						product.setProductDPCOFlag(false);
					}
					
					if(rs.getInt("flgManualDPCO")==1){
						product.setProductManualDPCOFlag(true);
					}else{
						product.setProductManualDPCOFlag(false);
					}
					
					if(rs.getInt("flgNarcotics")==1){
						product.setProductNarcoticsFlag(true);
					}else{
						product.setProductNarcoticsFlag(false);
					}
					if(rs.getInt("flgLock")==1){
						product.setProductLockFlag(true);
					}else{
						product.setProductLockFlag(false);
					}
					product.setProductCompanyName(rs.getString("companyName"));
					product.setProductDivisionName(rs.getString("divisionName"));
					
					Content content = new Content();
					content.setRecid(rs.getDouble("contentID"));
					content.setContentId(rs.getDouble("contentID"));
					content.setContentName(rs.getString("contentName"));
					content.setContentDesc(rs.getString("contentDesc"));
					content.setContentProductId(rs.getDouble("contentProductId"));
					content.setContentUnit(rs.getString("contentUnit"));
					content.setContentStrength(rs.getDouble("contentStrength"));
					content.setContentTypes(rs.getString("contentTypes"));
					
					
					
					double output = content.getContentProductId();
	    		    if(output == 0)
	        		{
	    		    	product.setProductContents(contentList);
						companyProductList.add(product);
	    		   	}else{
	    		   		contentList.add(content);
						product.setProductContents(contentList);
						companyProductList.add(product);
	    		    }
					
					//ContentType conType = new ContentType();
					//conType.setContentTypeName(rs.getString("contentType"));
					//conType.setContentTypeId(rs.getDouble("contetntTypeId"));
					//conType.setContentId(rs.getDouble("ccID"));
					//conType.setContentTypeProductId(rs.getDouble("ID"));
					
					//contentTypeList.add(conType);
					//content.setContentTypeList(contentTypeList);
					
					/*contentList.add(content);
					product.setProductContents(contentList);
					companyProductList.add(product);*/
					
				}
				else{
					

					Content content = new Content();
					content.setRecid(rs.getDouble("contentID"));
					content.setContentId(rs.getDouble("contentID"));
					content.setContentName(rs.getString("contentName"));
					content.setContentDesc(rs.getString("contentDesc"));
					content.setContentProductId(rs.getDouble("contentProductId"));
					content.setContentUnit(rs.getString("contentUnit"));
					content.setContentStrength(rs.getDouble("contentStrength"));
					content.setContentTypes(rs.getString("contentTypes"));
					
					/*ContentType conType = new ContentType();
					//conType.setContentTypeName(rs.getString("contentType"));
					//conType.setContentTypeId(rs.getDouble("contetntTypeId"));
					//conType.setContentId(rs.getDouble("ccID"));
					conType.setContentTypeProductId(rs.getDouble("ID"));
					
					contentTypeList.add(conType);
					content.setContentTypeList(contentTypeList);*/
					
					contentList.add(content);
					product.setProductContents(contentList);
				}
				
				
				loopPID = rs.getDouble("ID");  //set loopcustID for comparison

			} // while loop	
			
			}
			json = util.util_makeJson(companyProductList);
	
		
		}catch(Exception e){
			try {	
				con.close();
				throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
				}

			}
		}
		return json;
	}

	@Override
	public String getAllProductListByCompanySupplier(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		List<CompanyProduct> companyProductList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
		JdbcConnection JdbcConnectionObj = null;
		try {
			companyProductList = new ArrayList<CompanyProduct>();
			util= new Util_json();
			companyProductList = new ArrayList<CompanyProduct>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();	
			query="{call getCSProductList(?,?,?,?,?,?)}";
			
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, reqObj.getCompanyId());  // This would set v
			callableStatement.setDouble(2, reqObj.getSupplierId());
			callableStatement.setString(3, reqObj.getUserId());
			callableStatement.setString(4, reqObj.getToken());
			callableStatement.setInt(5, reqObj.getViewPermissionID());
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
					CompanyProduct cp = new CompanyProduct();
					cp.setCompanyId(rs.getDouble("companyId"));
					cp.setProductId(rs.getDouble("productId"));
					cp.setType(rs.getString("productType"));				
					cp.setProductName(rs.getString("productName"));
					cp.setBox(rs.getInt("productBox"));	
					cp.setPack(rs.getString("productPack"));
					cp.setRemark(rs.getString("productRemark"));
					//HARDCODED
					cp.setDivision("MyDiv");
					cp.setLastSale(0);
					cp.setCurrSale(0);
					cp.setTransit(0);
					cp.setMrp(rs.getDouble("mrp"));
					companyProductList.add(cp);
				}
			}
			json = util.util_makeJson(companyProductList);

		} catch (Exception e) {
			try {	
				con.close();
				throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 80000101: "+e.getMessage()+"->"+status);
				}

			}
		}
		
		return json;
	}
	
	@Override
	public String bl_getAllStockProductListByCompany(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement callableStatement = null;
		List<GrProductBatch> grProductBatchList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			grProductBatchList =new ArrayList<GrProductBatch>();
			String query = "{call getStockProduct (?,?,?,?,?)}";
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, reqObj.getCompanyId());
			callableStatement.setString(2, reqObj.getUserId());
			callableStatement.setString(3, reqObj.getToken());
			callableStatement.setInt(4, reqObj.getViewPermissionID());
			callableStatement.setDouble(5, status);
			
			callableStatement.registerOutParameter(5, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			status = callableStatement.getInt(5);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
		   
			    while(rs.next()){
			    	
			    	GrProductBatch grProdObj = new GrProductBatch();
			    	
			    	grProdObj.setGrProductBatchProductId(rs.getDouble("PID"));
			    	grProdObj.setRecid(rs.getDouble("PID"));
			    	grProdObj.setGrProductBatchProductName(rs.getString("productName"));
			    	grProdObj.setGrProductBatchDivisionId(rs.getDouble("DID"));
			    	grProdObj.setGrProductBatchDivisionName(rs.getString("divisionName"));
			    	grProdObj.setGrProductBatchTaxID(rs.getDouble("TID"));
			    	grProdObj.setGrProductBatchTaxDescription(rs.getString("taxDescription"));
			    	grProdObj.setGrProductBatchSAID(rs.getDouble("SAID"));
			    	grProdObj.setQuantity(rs.getDouble("Quantity"));
			    	grProdObj.setFree(rs.getDouble("free"));
			    	grProdObj.setStock(rs.getDouble("Stock"));
			    	grProdObj.setFreeStock(rs.getDouble("freeStock"));
			      	grProdObj.setGrProductBatchVAT(rs.getBigDecimal("VAT"));
			    	grProdObj.setIsScheme(rs.getString("scheme"));
			    	grProdObj.setGrProductBatchProductActiveFlag(rs.getBoolean("productActiveFlag"));
			        grProdObj.setGrProductBatchProductLockFlag(rs.getBoolean("productLockFlag"));
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
	public String bl_setReassignProduct(PurpleaidRequest reqObj) throws Exception {
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status  =444;		
		List<GrProductBatch> productList = new ArrayList<GrProductBatch>();
		JdbcConnection JdbcConnectionObj = null;
		try{	
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			productList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<GrProductBatch>>() {});	
			query = "{call UpdateProductForReassign(?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
						
			for(int i=0;i<productList.size();i++){
				GrProductBatch obj = new GrProductBatch();
				obj = productList.get(i);
				cstatement.setDouble(1, obj.getGrProductBatchProductId());
				cstatement.setDouble(2, obj.getGrProductBatchCompanyId());
				cstatement.setDouble(3, obj.getGrProductBatchDivisionId());
				cstatement.setString(4, reqObj.getUserId());
				cstatement.setString(5, reqObj.getToken());
				cstatement.setInt(6, reqObj.getUpdatePermissionID());
				cstatement.setDouble(7, status);
				
				cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
				cstatement.execute();
				
				status = cstatement.getInt(7);
				
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
	public String bl_setProductListActiveLock(PurpleaidRequest reqObj)throws Exception {
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
			
			query = "{call updateProductActiveLock (?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				GrProductBatch Obj = new GrProductBatch();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getGrProductBatchProductId());
				cstatement.setBoolean(2, Obj.isGrProductBatchProductActiveFlag());
				cstatement.setBoolean(3, Obj.isGrProductBatchProductLockFlag());
				cstatement.setString(4, reqObj.getUserId());
			    cstatement.setString(5, reqObj.getToken());
			    cstatement.setInt(6, reqObj.getUpdateLockSmithPermissionID());
			    cstatement.setDouble(7, status);
				cstatement.registerOutParameter(7, java.sql.Types.INTEGER); 
				cstatement.execute();	
		        status = cstatement.getInt(7);
				
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
	public String getAllProductList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> productList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			productList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call getAllProdctList (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setDouble(4, status);
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
		   
			    while(rs.next()){
			    	
			    	ReturnRegisterProduct pObj = new ReturnRegisterProduct();
			    	
			    	pObj.setReturnRegisterProductPID(rs.getDouble("ID"));
			    	pObj.setRecid(rs.getDouble("ID"));
			    	pObj.setReturnRegisterProductName(rs.getString("Name"));
			    	pObj.setReturnRegisterProductPack(rs.getString("pack"));
			    	pObj.setReturnRegisterProductComapnyName(rs.getString("companyName")); 
			    	productList.add(pObj);
			    	
			    }
			}   
		    json = util.util_makeJson(productList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
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

	@Override
	public String getAllProductListForSelf(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> productList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			productList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call selfProductListForRR (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setDouble(4, status);
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
		   
			    while(rs.next()){
			    	
			    	ReturnRegisterProduct pObj = new ReturnRegisterProduct();
			    	
			    	pObj.setReturnRegisterProductPID(rs.getDouble("PID"));
			    	pObj.setRecid(rs.getDouble("PID"));
			    	pObj.setReturnRegisterProductName(rs.getString("Name"));
			    	pObj.setReturnRegisterProductPack(rs.getString("Pack"));
			    	pObj.setReturnRegisterProductComapnyName(rs.getString("companyName")); 
			    	
			    	    			    	
			    	productList.add(pObj);
			    	
			    }
			}  
		    json = util.util_makeJson(productList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
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
	public String bl_getNearExpiryProductForRR(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> productList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			productList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call getNearExpiryProductList (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setDouble(4, status);
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
		   
			    while(rs.next()){
			    	
			    	ReturnRegisterProduct pObj = new ReturnRegisterProduct();
			    	
			    	pObj.setReturnRegisterProductPID(rs.getDouble("PID"));
			    	pObj.setRecid(rs.getDouble("PID"));
			    	pObj.setReturnRegisterProductName(rs.getString("Name"));
			    	pObj.setReturnRegisterProductPack(rs.getString("Pack"));
			    	pObj.setReturnRegisterProductComapnyName(rs.getString("companyName")); 
			    	    			    	
			    	productList.add(pObj);
			    	
			    }
			} 
		    json = util.util_makeJson(productList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
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

	@Override
	public String getAllProductBatchListForSelf(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<ReturnRegisterProduct> productList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			productList =new ArrayList<ReturnRegisterProduct>();
			String query = "{call getNearExpiryProducts(?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setDouble(4, status);
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement.executeQuery();
			
			 status = cstatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
		   
			    while(rs.next()){
			    	
			    	ReturnRegisterProduct pObj = new ReturnRegisterProduct();
			    	
			    	pObj.setReturnRegisterProductPID(rs.getDouble("PID"));
			    	pObj.setRecid(rs.getDouble("ID"));
			    	pObj.setReturnRegisterProductName(rs.getString("Name"));
			    	pObj.setReturnRegisterProductPack(rs.getString("Pack"));
			    	pObj.setReturnRegisterProductComapnyName(rs.getString("companyName")); 
			    	pObj.setReturnRegisterProductBatchNo(rs.getString("batchNo"));
			    	pObj.setReturnRegisterProductExpiryDate(rs.getString("expiryDate"));
			    	pObj.setReturnRegisterProductMRP(rs.getBigDecimal("MRP"));
			    	pObj.setReturnRegisterProductPurchaseRate(rs.getBigDecimal("purchaseRate"));
			    	pObj.setReturnRegisterProductSellRate(rs.getBigDecimal("sellRate"));
			    	pObj.setReturnRegisterProductFreeAvailable(rs.getDouble("FreeAvailable"));
			    	pObj.setReturnRegisterProductQtyAvailable(rs.getDouble("QtyAvailable"));
			    	pObj.setReturnRegisterProductSAID(rs.getDouble("SAID"));
			    	
			    	double daysToExpired = rs.getDouble("Days_to_expiry");
			    	
			    	if(daysToExpired > 0){
			    		String day = rs.getString("DTE");
			    		pObj.setReturnRegisterProductDaysToExpiryStatus(day);
			    	}else{
			    		String day = rs.getString("DTE");
			    		String expiryStatus = day.concat(" ").concat("Expired");
			    		pObj.setReturnRegisterProductDaysToExpiryStatus(expiryStatus);
			    	}
			    	    			    	
			    	productList.add(pObj);
			    	
			    }
			}
		    json = util.util_makeJson(productList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
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
	
	
	

}
