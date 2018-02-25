package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Company;
import com.purpleaid.beans.Division;
import com.purpleaid.beans.Product;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.StockAudit;
import com.purpleaid.beans.StockAuditProductBatch;
import com.purpleaid.interfaces.StockAudit_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class StockAuditImpl implements StockAudit_IF{
	

	@Override
	public String bl_getAllStockAudit(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		
		String query = null;
		
		String json = null;
		ResultSet rs = null;
		
		int status = 444;
		double LoopAuditID = 0;
		
		
		
		StockAudit stockAuditObj = null;
		List<StockAudit> stockAuditList = null;

		try{
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			stockAuditList = new ArrayList<StockAudit>();
			stockAuditObj = new StockAudit();
			
			query = "{call getStockAuditList(?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getLastID());
			cstatement.setInt(2, reqObj.getListLimit());
			cstatement.setDouble(3, reqObj.getStockAuditId());
			cstatement.setInt(4,reqObj.getAuditOutcome());
			cstatement.setInt(5,reqObj.getAuditResult());
			cstatement.setInt(6,reqObj.getAuditFlgSaleLock());
			cstatement.setString(7,reqObj.getFromDate());
			cstatement.setString(8, reqObj.getToDate());
			cstatement.setString(9, reqObj.getUserId());
			cstatement.setString(10, reqObj.getToken());
			cstatement.setInt(11, reqObj.getViewPermissionID());
			cstatement.setInt(12, status);
			cstatement.registerOutParameter(12, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();
			
			status = cstatement.getInt(12);
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{
				
				while(rs.next()){
					
					if(LoopAuditID != rs.getDouble("ID")){
						
						stockAuditObj = new StockAudit();
						
						stockAuditObj.setStockAuditId(rs.getDouble("ID"));
						stockAuditObj.setRecid(rs.getDouble("ID"));
						stockAuditObj.setStockAuditDate(rs.getString("auditdate"));
						stockAuditObj.setStockAuditLabel(rs.getString("auditLabel"));
						stockAuditObj.setStockAuditSnap(rs.getInt("AuditSnapshot"));
						stockAuditObj.setStockAuditSnapCreatedOn(rs.getString("SnapshotCreatedOn"));
						stockAuditObj.setStockAuditResult(rs.getInt("Result"));
						stockAuditObj.setStockAuditOutcome(rs.getInt("OutCome"));
						stockAuditObj.setStockAuditFlgLockSale(rs.getBoolean("salelock"));
						stockAuditObj.setStockAuditFlgLockSaleHistory(rs.getBoolean("FlgSaleLockHistory"));
						stockAuditObj.setStockAuditFlgLockDataEntry(rs.getBoolean("FlgDataEntryLock"));
						stockAuditObj.setStockAuditTotalAuditQty(rs.getDouble("AuditTotalQuantity"));
						stockAuditObj.setStockAuditTotalSystemQty(rs.getDouble("SystemTotalQuantity"));
						stockAuditObj.setStockAuditTotalMismatchQty(rs.getDouble("MissMatchTotalQuantity"));
						stockAuditObj.setStockAuditProductStock(rs.getString("ProductStock"));
						stockAuditObj.setStockAuditBatchStock(rs.getString("BatchStock"));
						stockAuditObj.setStockAuditTotalProduct(rs.getInt("TotalProduct"));
						stockAuditObj.setStockAuditProdectSelected(rs.getInt("ProductSelected"));
						stockAuditObj.setStockauditTotalBatch(rs.getInt("TotalBatch"));
						stockAuditObj.setStockAuditBatchSelected(rs.getInt("BatchSelected"));
						
						stockAuditObj.setFindProductSelected(rs.getBoolean("FindproductSelected"));
						stockAuditObj.setStockAuditRemark(rs.getString("AuditRemark"));
						stockAuditObj.setPhysicalStcockEntry(rs.getBoolean("PhysicalStockEntry"));
						stockAuditObj.setSelectLockDataEntry(rs.getBoolean("SelectLockDataEntry"));
						stockAuditObj.setStockAuditCreatedById(rs.getDouble("CreatedBy"));
						stockAuditObj.setStockAuditCreatedByName(rs.getString("StockAuditCreatedByUserName"));
						stockAuditObj.setStockAuditCreatedOn(rs.getString("stockAuditCreatedOn"));
						stockAuditObj.setStockAuditEnteredByName(rs.getString("AuditEnteredBy"));
						
						
						if(rs.getInt("salelock") == 1){
							
							//stockAuditObj.setStockAuditFlgLockSaleHistory(true);
							stockAuditObj.setStockAuditSaleHistoryDescription("YES");	
						}else{
							//stockAuditObj.setStockAuditFlgLockSaleHistory(false);
							stockAuditObj.setStockAuditSaleHistoryDescription("No");
							
						}
						
						if(rs.getInt("AuditSnapshot") == 1){
							
							stockAuditObj.setStockAuditSnapCreatedOn(rs.getString("SnapshotCreatedOn"));
						}
						
						if(rs.getInt("salelock") == 1){
							
							//stockAuditObj.setStockAuditFlgLockSale(true);
							stockAuditObj.setStockAuditSaleDescription("YES");
						}else{
							//stockAuditObj.setStockAuditFlgLockSale(false);
							stockAuditObj.setStockAuditSaleDescription("NO");
						}
						
						
						stockAuditList.add(stockAuditObj);
						
					}else{
						
						
					}
					LoopAuditID = rs.getDouble("ID");
						
					}
				
				}	
			
			json = "{\"AuditList\":"+util.util_makeJson(stockAuditList) +",\"lastId\":"+LoopAuditID+"}";	
			
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

	
	@Override
	public String bl_getAllCompanyDivisionList(PurpleaidRequest reqObj) throws Exception {
	
		//companyID, CompanyName, divisionID, DivisionName, id
	
		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		double LoopCID = 0;
		List<Company> companyList = null;
		Company companyObj = null;
		
		
		try{
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			companyList = new ArrayList<Company>();
			companyObj = new Company();
			
			query = "{call getAllCompanyDivisionList(?,?,?,?)}";
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
				
				List<Division> divisionList = null;
				divisionList = new ArrayList<Division>();
				
				while(rs.next()){
					
					if(LoopCID != rs.getDouble("companyID")){
						
						companyObj = new Company();
						divisionList = new ArrayList<Division>();
						
						companyObj.setCompanyId(rs.getDouble("companyID"));
						companyObj.setRecid(rs.getDouble("companyID"));
						companyObj.setCompanyName(rs.getString("CompanyName"));
						
						Division divisionObj = new Division();
						divisionObj.setDivisionId(rs.getDouble("divisionID"));
						divisionObj.setRecid(rs.getDouble("divisionID"));
						divisionObj.setDivisionCompanyId(rs.getDouble("companyID"));
						divisionObj.setDivisionName(rs.getString("DivisionName"));
						
						double output = divisionObj.getDivisionCompanyId();
						if(output == 0){
							
							companyObj.setCompanyDivisionsList(divisionList);
							companyList.add(companyObj);
						}else{
							
							divisionList.add(divisionObj);
							companyObj.setCompanyDivisionsList(divisionList);
							companyList.add(companyObj);
						}
						
						
					}else{
						
						Division divisionObj = new Division();
						divisionObj.setDivisionId(rs.getDouble("divisionID"));
						divisionObj.setRecid(rs.getDouble("divisionID"));
						divisionObj.setDivisionCompanyId(rs.getDouble("companyID"));
						divisionObj.setDivisionName(rs.getString("DivisionName"));
						
						divisionList.add(divisionObj);
						companyObj.setCompanyDivisionsList(divisionList);
					}
					
					LoopCID = rs.getDouble("companyID");
				}
			}
			
		json = util.util_makeJson(companyList);
			
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
	
	
	@Override
	public String bl_getProductTypeList(PurpleaidRequest reqObj) throws Exception {

		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		List<Product> productTypeList = null;
		
		try{
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			query = "{call getProductTypeList(?,?,?,?)}";
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
				
				productTypeList = new ArrayList<Product>();
				Product productTypeObj = new Product();
				
				while(rs.next()){
					
					productTypeObj = new Product();
					productTypeObj.setProductTypeId(rs.getDouble("typeId"));
					productTypeObj.setRecid(rs.getDouble("typeId"));
					productTypeObj.setProductTypeName(rs.getString("ProductType"));
					
					productTypeList.add(productTypeObj);
				}
			}
			
		json = util.util_makeJson(productTypeList);
			
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

	
	@Override
	public String bl_getAllProductListForAudit(PurpleaidRequest reqObj) throws Exception {

		Util_json util= null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		ResultSet rs1 = null;
		
		int status = 444;
		double LoopProductID = 0;
		double loopcompanyID = 0;
		String cArray = null;
		String dArray = null;
		String pArray = null;
		List<StockAuditProductBatch> productList = null;
		List<Division> divisionList = null;
		StockAuditProductBatch productObj = null;
		Company companyObj = null;
		Division divisionObj = null;
		
		try{
			
			util = new Util_json();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			
			productList = new ArrayList<StockAuditProductBatch>();
			productObj = new StockAuditProductBatch();
			
			String[] a=reqObj.getRequestData().split("->");
			String[] company = a[0].replace("[", "").replace("{", " ").replace("]", "").split(",");
			String[] division = a[1].replace("[", "").replace("]", "").split(",");
			String[] producttype = a[2].replace("[", "").replace("]", "").replace("}", " ").split(",");
			
			cArray = Arrays.toString(company);
			dArray = Arrays.toString(division);
			pArray = Arrays.toString(producttype);
			
			String companyArray = cArray.replace("[", "").replace("]", "");
			String divisionArray = dArray.replace("[", "").replace("]", "");
			String productTypeArray = pArray.replace("[", "").replace("]", "");
			
			query = "{call getProductListForStockAudit(?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1,companyArray);
			cstatement.setString(2, divisionArray);
			cstatement.setString(3,productTypeArray);
			cstatement.setString(4, reqObj.getUserId());
			cstatement.setString(5, reqObj.getToken());
			cstatement.setInt(6, reqObj.getViewPermissionID());
			cstatement.setInt(7, status);
			cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
			
			rs1 = cstatement.executeQuery();
			status = cstatement.getInt(7);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{
				
				List<StockAuditProductBatch> batchList = null;
				List<Company> companyList = null;
				
				System.out.println("error");
				double productStock = 0;
			     while(rs1.next()){
			      
			      System.out.println("success");
			      
			      if(LoopProductID != rs1.getDouble("productID")){
			       productStock = 0;
			       
			       productObj = new StockAuditProductBatch();
			       batchList = new ArrayList<StockAuditProductBatch>();
			       
			       productObj.setStockAuditProductBatchProductId(rs1.getDouble("productID"));
			       productObj.setRecid(rs1.getDouble("productID"));
			       productObj.setStockAuditProductBatchProductName(rs1.getString("ProductName"));
			       productObj.setStockAuditProductBatchCompanyId(rs1.getDouble("CompanyID"));
			       productObj.setStockAuditProductBatchCompanyName(rs1.getString("compamyName"));
			       productObj.setStockAuditProductBatchDivisionId(rs1.getDouble("divisionId"));
			       productObj.setStockAuditProductBatchDivisionName(rs1.getString("DivisionName"));
			       productObj.setStockAuditProductBatchProductTypeId(rs1.getDouble("ProductTypeId"));
			       productObj.setStockAuditProductBatchProductTypeName(rs1.getString("ProductTypeName"));
			       
			       companyList = new ArrayList<Company>();
			       
			       StockAuditProductBatch batchObj = new StockAuditProductBatch();
			          
			       batchObj.setStockAuditProductBatchProductId(rs1.getDouble("productID"));
			       batchObj.setStockAuditProductBatchPBatchId(rs1.getDouble("ProductBatchID"));
			       batchObj.setRecid(rs1.getDouble("ProductBatchID"));
			       batchObj.setStockAuditProductBatchPBatchName(rs1.getString("ProductBatchName"));
			       batchObj.setStockAuditProductBatchCompanyName(rs1.getString("compamyName"));
			       batchObj.setStockAuditProductBatchDivisionId(rs1.getDouble("divisionId"));
			       batchObj.setStockAuditProductBatchDivisionName(rs1.getString("DivisionName"));
			       batchObj.setStockAuditProductBatchProductTypeId(rs1.getDouble("ProductTypeId"));
			       batchObj.setStockAuditProductBatchProductTypeName(rs1.getString("ProductTypeName"));
			       batchObj.setStockAuditProductBatchSystemQty(rs1.getDouble("QtyAvailable"));
			       
			       companyList = new ArrayList<Company>();
			       
			       double x = batchObj.getStockAuditProductBatchSystemQty();
			       productStock= (productStock+x);
			        
			       batchList.add(batchObj);
			       productObj.setStockAuditProductBatchList(batchList);
			       productObj.setStockAuditProductSystemQty(productStock);
			       productList.add(productObj);
			       System.out.println(+productStock);
			       
	/*		       
			   loopcompanyID = 0;
			   	if(loopcompanyID != rs1.getDouble("CompanyID")){
    		    	
		    		companyObj = new Company();
	    		    divisionList = new ArrayList<Division>();
						 
						companyObj.setCompanyId(rs1.getDouble("CompanyID"));
						companyObj.setRecid(rs1.getDouble("companyID"));
						companyObj.setCompanyName(rs1.getString("compamyName"));
						
						if(rs1.getDouble("divisionId") != 0){
							divisionObj = new Division();
							
							divisionObj.setDivisionCompanyId(rs1.getDouble("CompanyID"));
							divisionObj.setDivisionId(rs1.getDouble("divisionId"));
							divisionObj.setRecid(rs1.getDouble("divisionId"));
							divisionObj.setDivisionName(rs1.getString("DivisionName"));
							
							
							divisionList.add(divisionObj);
							companyObj.setCompanyDivisionsList(divisionList);
							companyList.add(companyObj);
							productObj.setCompanyList(companyList);
							batchObj.setCompanyList(companyList);
						}else{
							divisionList.add(divisionObj);
							companyObj.setCompanyDivisionsList(divisionList);
						}

			}else{
				
				if(rs1.getDouble("divisionId") != 0){
					
					divisionObj = new Division();
					divisionObj.setDivisionCompanyId(rs1.getDouble("CompanyID"));
					divisionObj.setDivisionId(rs1.getDouble("divisionId"));
					divisionObj.setRecid(rs1.getDouble("divisionId"));
					divisionObj.setDivisionName(rs1.getString("DivisionName"));
					
					divisionList.add(divisionObj);
					companyObj.setCompanyDivisionsList(divisionList);
				}else{
					
				}
			}
			 */     }else{
			       
			       
			       StockAuditProductBatch batchObj = new StockAuditProductBatch();
			       batchObj.setStockAuditProductBatchProductId(rs1.getDouble("productID"));
			       batchObj.setStockAuditProductBatchPBatchId(rs1.getDouble("ProductBatchID"));
			       batchObj.setRecid(rs1.getDouble("ProductBatchID"));
			       batchObj.setStockAuditProductBatchPBatchName(rs1.getString("ProductBatchName"));
			       batchObj.setStockAuditProductBatchCompanyName(rs1.getString("compamyName"));
			       batchObj.setStockAuditProductBatchDivisionId(rs1.getDouble("divisionId"));
			       batchObj.setStockAuditProductBatchDivisionName(rs1.getString("DivisionName"));
			       batchObj.setStockAuditProductBatchProductTypeId(rs1.getDouble("ProductTypeId"));
			       batchObj.setStockAuditProductBatchProductTypeName(rs1.getString("ProductTypeName"));
			       batchObj.setStockAuditProductBatchSystemQty(rs1.getDouble("QtyAvailable"));
			     
			      //companyList = new ArrayList<Company>();

			       double x = batchObj.getStockAuditProductBatchSystemQty();
			       productStock = (productStock+x);
			       
			       batchList.add(batchObj);
			       productObj.setStockAuditProductBatchList(batchList);
			       productObj.setStockAuditProductSystemQty(productStock);
			       System.out.println(+productStock);
			       
			       
		/*	      loopcompanyID = 0;
				   	if(loopcompanyID != rs1.getDouble("CompanyID")){
	    		    	
    		    		companyObj = new Company();
		    		    divisionList = new ArrayList<Division>();
							 
							companyObj.setCompanyId(rs1.getDouble("CompanyID"));
							companyObj.setRecid(rs1.getDouble("companyID"));
							companyObj.setCompanyName(rs1.getString("compamyName"));
							
							if(rs1.getDouble("divisionId") != 0){
								divisionObj = new Division();
								
								divisionObj.setDivisionCompanyId(rs1.getDouble("CompanyID"));
								divisionObj.setDivisionId(rs1.getDouble("divisionId"));
								divisionObj.setRecid(rs1.getDouble("divisionId"));
								divisionObj.setDivisionName(rs1.getString("DivisionName"));
								
								
								divisionList.add(divisionObj);
								companyObj.setCompanyDivisionsList(divisionList);
								companyList.add(companyObj);
								//productObj.setCompanyList(companyList);
								batchObj.setCompanyList(companyList);
							}else{
								divisionList.add(divisionObj);
								companyObj.setCompanyDivisionsList(divisionList);
							}

				}else{
					
					if(rs1.getDouble("divisionId") != 0){
						
						divisionObj = new Division();
						divisionObj.setDivisionCompanyId(rs1.getDouble("CompanyID"));
						divisionObj.setDivisionId(rs1.getDouble("divisionId"));
						divisionObj.setRecid(rs1.getDouble("divisionId"));
						divisionObj.setDivisionName(rs1.getString("DivisionName"));
						
						divisionList.add(divisionObj);
						companyObj.setCompanyDivisionsList(divisionList);
					}else{
						
					}
				}*/
			       
			        
			      }
			      
			      LoopProductID = rs1.getDouble("productID");
			      loopcompanyID = rs1.getDouble("companyID");
			     }
			}

		json = util.util_makeJson(productList);
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
	

	@Override
	public String bl_setAllSalelock(PurpleaidRequest reqObj) throws Exception {
		
		//Util_json util = null;
				Connection con = null;
				JdbcConnection connection = null;
				CallableStatement cstatement = null;
				String query = null;
				String json = null;
				StockAudit auditObj = null;
				int status = 444;
				
				try{
					
					//util = new Util_json();
					connection = new JdbcConnection();
					con =connection.getConnection();
					con.setAutoCommit(false);
					
				//	auditObj = new ObjectMapper().readValue(reqObj.getRequestData(),new TypeReference<StockAudit>() {});
					
						query = "{call ClearAllSaleLock(?,?,?,?)}";
						cstatement = con.prepareCall(query);
						
						cstatement.setString(1,reqObj.getUserId());
						cstatement.setString(2, reqObj.getToken());
						cstatement.setInt(3, reqObj.getUpdatePermissionID());
						cstatement.setInt(4, status);
						cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
						cstatement.execute();
						
						status = cstatement.getInt(4);
						if(status == 0){
							throw new Exception("User is not Authorized"+"->"+status);
						}else if(status == 1){
							throw new Exception("No Permission"+"->"+status);
						}else{
							
							System.out.println("all saleLock are clear");
							
							con.commit();
						}
						
				
				con.close();
				
				json = new ObjectMapper().writeValueAsString(auditObj);
							
					
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

	
	// working code

		@Override
		public String bl_setAllStockAudit(PurpleaidRequest reqObj) throws Exception {
			
					Util_json util = null;
					JdbcConnection connectionObj = null;
					Connection con = null;
					CallableStatement cstatement = null;
					CallableStatement cstatement1 = null;
					CallableStatement cstatement3 = null;
					CallableStatement cstatement4 = null;
					CallableStatement cstatement5 = null;
					String query1= null;
					String query2 = null;
					String query3 = null;
					String query4 = null;
					String query5 = null;
					String json = null;
					StockAudit auditObj = null;
					int status = 444;
					try{
						
						util = new Util_json();
						connectionObj = new JdbcConnection();
						con = connectionObj.getConnection();
						con.setAutoCommit(false);
						
						auditObj = new ObjectMapper().readValue(reqObj.getRequestData(),new TypeReference<StockAudit>(){});
							
							query1 = "{call insertUpdateStockAudit(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
							cstatement = con.prepareCall(query1);
							
							cstatement.setDouble(1, auditObj.getStockAuditId());
							cstatement.setString(2, auditObj.getStockAuditLabel());
							cstatement.setInt(3, auditObj.getStockAuditSnap());
							cstatement.setInt(4, auditObj.getStockAuditResult());
							cstatement.setInt(5, auditObj.getStockAuditOutcome());
							cstatement.setBoolean(6, auditObj.isStockAuditFlgLockSale());
							cstatement.setBoolean(7, auditObj.isStockAuditFlgLockSaleHistory());
							cstatement.setBoolean(8, auditObj.isStockAuditFlgLockDataEntry());
							cstatement.setDouble(9, auditObj.getStockAuditTotalAuditQty());
							cstatement.setDouble(10, auditObj.getStockAuditTotalSystemQty());
							cstatement.setDouble(11, auditObj.getStockAuditTotalMismatchQty());
							cstatement.setInt(12, auditObj.getStockAuditTotalProduct());
							cstatement.setInt(13, auditObj.getStockAuditProdectSelected());
							cstatement.setInt(14, auditObj.getStockauditTotalBatch());
							cstatement.setInt(15, auditObj.getStockAuditBatchSelected());
							cstatement.setBoolean(16, auditObj.isFindProductSelected());
							cstatement.setString(17, auditObj.getStockAuditEnteredByName());
							cstatement.setBoolean(18, auditObj.isStockAuditLock());
							cstatement.setString(19, auditObj.getStockAuditRemark());
							cstatement.setBoolean(20, auditObj.isPhysicalStcockEntry());
							cstatement.setBoolean(21, auditObj.isSelectLockDataEntry());
							cstatement.setString(22, reqObj.getUserId());
							cstatement.setString(23, reqObj.getToken());
							if(auditObj.getStockAuditId()==0){
								cstatement.setInt(24, reqObj.getInsertPermissionID());
							}else{
								cstatement.setInt(24, reqObj.getUpdatePermissionID());
							}
							
							cstatement.setInt(25, status);
							cstatement.setDouble(26, reqObj.getStatus());
							cstatement.setString(27, auditObj.getStockAuditDate());
							
							cstatement.registerOutParameter(1, java.sql.Types.INTEGER);
							cstatement.registerOutParameter(25, java.sql.Types.DOUBLE);
							cstatement.registerOutParameter(26, java.sql.Types.DOUBLE);
							cstatement.registerOutParameter(27, java.sql.Types.VARCHAR);
							cstatement.execute();
							
							status = cstatement.getInt(25);
							
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{
								con.commit();		
								String sdate = cstatement.getString(27);
								double SAID = cstatement.getInt(1);
								double output = cstatement.getDouble(26);
								if(output == 0){
									
									System.out.println("Stock audit Inserted");
									
									auditObj.setStockAuditId(SAID);
									auditObj.setRecid(SAID);
									auditObj.setStockAuditDate(sdate);
								}else if(output == 1){
									System.out.println("Stock audit updated");
									auditObj.setStockAuditId(SAID);
									auditObj.setRecid(SAID);
									auditObj.setStockAuditId(SAID);
								}
								
								
								// company division 
								
								for(int a = 0 ; a < auditObj.getCompanyDivisionSelectedList().size(); a++){
									
									Company cobj = new Company();
									cobj = auditObj.getCompanyDivisionSelectedList().get(a);
									
									for(int g = 0 ; g < cobj.getCompanyDivisionsList().size(); g++){
									
										Division dObj = new  Division();
										dObj = cobj.getCompanyDivisionsList().get(g);
										
										query2 = "{call insertDeleteStockAuditCompany(?,?,?,?,?,?,?,?,?)}";
										cstatement1 = con.prepareCall(query2);
										
										cstatement1.setInt(1, cobj.getCompanySelected());
										cstatement1.setDouble(2, SAID);
										cstatement1.setDouble(3, cobj.getCompanyId());
										cstatement1.setDouble(4, dObj.getDivisionId());
										cstatement1.setString(5, reqObj.getUserId());
										cstatement1.setString(6, reqObj.getToken());
										
										if(cobj.getCompanySelected() == 1){         					//insert
											cstatement1.setInt(7, reqObj.getInsertPermissionID());
										}else{                        									//delete
											cstatement1.setInt(7, reqObj.getDeletePermissionID());
										}
										
										cstatement1.setInt(8, status);
										cstatement1.setDouble(9, reqObj.getStatus());
										cstatement1.registerOutParameter(3, java.sql.Types.DOUBLE);
										cstatement1.registerOutParameter(4, java.sql.Types.DOUBLE);
										cstatement1.registerOutParameter(9, java.sql.Types.DOUBLE);
										cstatement1.execute();
										
										status = cstatement1.getInt(8);
										if(status == 0){
											throw new Exception("User is not Authorized");
										}else if(status == 1){
											throw new Exception("No Permission");
										}else{
								
											
											con.commit();
										}
										System.out.println("end of division obj");
									}
									
										System.out.println("end one iteration");
								
								}
		
								// producttype 
								
								for(int j= 0; j<auditObj.getProductTypeList().size();j++){
									
									Product productTypeObj = new Product();
									productTypeObj = auditObj.getProductTypeList().get(j);
									
										
										query3 = "{call insertDeleteStockAuditProducyType(?,?,?,?,?,?,?,?)}";
										cstatement3 = con.prepareCall(query3);
										
										cstatement3.setInt(1, productTypeObj.getProductTypeSelected());
										cstatement3.setDouble(2,SAID);
										cstatement3.setDouble(3, productTypeObj.getProductTypeId());
										cstatement3.setString(4, reqObj.getUserId());
										cstatement3.setString(5, reqObj.getToken());
										
										if(productTypeObj.getProductTypeSelected() == 1){
										
											cstatement3.setInt(6, reqObj.getInsertPermissionID());
										}else{
											cstatement3.setInt(6, reqObj.getDeletePermissionID());
										}
										
										cstatement3.setInt(7, status);
										cstatement3.setDouble(8, reqObj.getStatus());
										
										cstatement3.registerOutParameter(3, java.sql.Types.DOUBLE);
										cstatement3.registerOutParameter(7, java.sql.Types.INTEGER);
										cstatement3.registerOutParameter(8, java.sql.Types.DOUBLE);
										cstatement3.execute();
										status = cstatement3.getInt(7);
										
										if(status == 0){
											throw new Exception("User is not Authorized");
										}else if(status == 1){
											throw new Exception("No Permission");
										}else{
											
											double output3 = cstatement3.getDouble(8);
											if(output3 == 0){
												
												double prID = cstatement3.getDouble(3);
												System.out.println("product type inserted");
												
												productTypeObj.setProductTypeId(prID);
												//productTypeList.add(productTypeObj);
												
												con.commit();
											}
										}
										
									//}
									
								}
				
								if(auditObj.getIsCriteriaChanged()==1){
									
									query4 = "{call deleteSAProducts(?,?,?,?,?)}";
									cstatement4 = con.prepareCall(query4);
									cstatement4.setDouble(1, SAID);
									cstatement4.setString(2, reqObj.getUserId());
									cstatement4.setString(3, reqObj.getToken());
									cstatement4.setInt(4, reqObj.getDeletePermissionID());
									cstatement4.setInt(5, status);
									cstatement4.registerOutParameter(5, java.sql.Types.INTEGER);
									
									cstatement4.execute();
									
									status = cstatement4.getInt(5);
									
									if(status == 0){
										throw new Exception("User is not Authorized");
									}else if(status == 1){
										throw new Exception("No Permission");
									}else{
										
										con.commit();
									}
									
								}
								
								// product
									
								for(int k = 0 ; k < auditObj.getSaProductList().size() ; k++){
									
									StockAuditProductBatch pobj = new StockAuditProductBatch();
									pobj = auditObj.getSaProductList().get(k);
									
									double pbatchid = pobj.getStockAuditProductBatchPBatchId() ; 
								
									if(auditObj.getIsCriteriaChanged()==1){
																												// product level insert/update
										query5 = "{call InsertSAProducts(?,?,?,?,?,?,?,?,?,?,?)}";
										cstatement5 = con.prepareCall(query5);
										
										cstatement5.setDouble(1, SAID);
										cstatement5.setDouble(2, pobj.getStockAuditProductBatchProductId());
									
										if(pbatchid == 0){
											cstatement5.setDouble(3, pobj.getStockAuditProductBatchPBatchId());
											cstatement5.setBoolean(4, pobj.isProductBatchSelected());
											cstatement5.setDouble(5, pobj.getStockAuditProductSystemQty());
											cstatement5.setDouble(6, pobj.getStockAuditProductBatchSystemQty());
											cstatement5.setString(7, reqObj.getUserId());
											cstatement5.setString(8, reqObj.getToken());
											cstatement5.setInt(9, reqObj.getInsertPermissionID());
											cstatement5.setInt(10, status);
										}
										pbatchid = 1; 

										cstatement5.setDouble(11, reqObj.getStatus());
										cstatement5.registerOutParameter(10, java.sql.Types.INTEGER);
										cstatement5.registerOutParameter(11, java.sql.Types.INTEGER);
										
										cstatement5.execute();
										
										status = cstatement5.getInt(10);
										
										if(status == 0){
											throw new Exception("User is not Authorized");
										}else if(status == 1){
											throw new Exception("No Permission");
										}else{
											
											int output5 = cstatement5.getInt(11);
											if(output5 == 1){
												System.out.println("product/batch inserted");
											
												con.commit();		
											}
										
										
									}
									
										
									}else{
										
										 // product level update
										
										query4 = "{call updateStockAuditProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
										
										cstatement4 = con.prepareCall(query4);
										cstatement4.setDouble(1, SAID);
										cstatement4.setDouble(2, pobj.getStockAuditProductBatchProductId());
									
										if(pbatchid == 0){
											cstatement4.setDouble(3, pobj.getStockAuditProductBatchPBatchId());
											cstatement4.setDouble(4, pobj.getStockAuditProductBatchAuditQty());
											cstatement4.setDouble(5, pobj.getStockAuditProductBatchMismatchQty());
											cstatement4.setDouble(6, pobj.getStockAuditProductAuditQty());
											cstatement4.setDouble(7, pobj.getStockAuditProductMismatchQty());
											cstatement4.setBoolean(8,pobj.isProductBatchSelected());
											cstatement4.setString(9, pobj.getStockAuditProductBatchRemark());
											cstatement4.setString(10, pobj.getStockAuditProductBatchAuditByName());
										}/*else{
											cstatement4.setDouble(3, bobj.getStockAuditProductBatchPBatchId());
										}*/
										pbatchid = 1; 
										
										cstatement4.setString(11, reqObj.getUserId());
										cstatement4.setString(12, reqObj.getToken());	
										cstatement4.setInt(13, reqObj.getUpdatePermissionID());		
										cstatement4.setInt(14, status);
										cstatement4.setDouble(15, reqObj.getStatus());
										
										cstatement4.registerOutParameter(14, java.sql.Types.INTEGER);
										cstatement4.registerOutParameter(15, java.sql.Types.DOUBLE);
										cstatement4.execute();
										
										status = cstatement4.getInt(14);
										if(status == 0){
											throw new Exception("User is not Authorized");
										}else if(status == 1){
											throw new Exception("No Permission");
										}else{
											
											double output4 = cstatement4.getDouble(15);

											if(output4 == 1){
												con.commit();
												System.out.println("product updated for stock audit");
												
												con.commit();
											}
										}
										
										
										
									}
								
										for(int j = 0 ; j < pobj.getStockAuditProductBatchList().size() ; j++){
											
											StockAuditProductBatch bobj = new StockAuditProductBatch();
											bobj = pobj.getStockAuditProductBatchList().get(j);
												
											if(auditObj.getIsCriteriaChanged()==1){					// batch level insert/update
												
												query5 = "{call InsertSAProducts(?,?,?,?,?,?,?,?,?,?,?)}";
												cstatement5 = con.prepareCall(query5);
												
												cstatement5.setDouble(1, SAID);
												cstatement5.setDouble(2, pobj.getStockAuditProductBatchProductId());
											
												cstatement5.setDouble(3, bobj.getStockAuditProductBatchPBatchId());
												cstatement5.setBoolean(4, bobj.isProductBatchSelected());
												cstatement5.setDouble(5, bobj.getStockAuditProductSystemQty());
												cstatement5.setDouble(6, bobj.getStockAuditProductBatchSystemQty());
												cstatement5.setString(7, reqObj.getUserId());
												cstatement5.setString(8, reqObj.getToken());
												cstatement5.setInt(9, reqObj.getInsertPermissionID());
												cstatement5.setInt(10, status);
												
												pbatchid = 1; 
												cstatement5.setDouble(11, reqObj.getStatus());
												cstatement5.registerOutParameter(10, java.sql.Types.INTEGER);
												cstatement5.registerOutParameter(11, java.sql.Types.INTEGER);
												
												cstatement5.execute();
												
												status = cstatement5.getInt(10);
												
												if(status == 0){
													throw new Exception("User is not Authorized");
												}else if(status == 1){
													throw new Exception("No Permission");
												}else{
													
													int output5 = cstatement5.getInt(11);
													if(output5 == 1){
														System.out.println("product/batch inserted");
													
														con.commit();		
													}
													
												}
	
											}else{
											
												query4 = "{call updateStockAuditProduct(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
												
												cstatement4 = con.prepareCall(query4);
												cstatement4.setDouble(1, SAID);
												cstatement4.setDouble(2, pobj.getStockAuditProductBatchProductId());
												cstatement4.setDouble(3, bobj.getStockAuditProductBatchPBatchId());
												cstatement4.setDouble(4, bobj.getStockAuditProductBatchAuditQty());
												cstatement4.setDouble(5, bobj.getStockAuditProductBatchMismatchQty());
												cstatement4.setDouble(6, bobj.getStockAuditProductAuditQty());
												cstatement4.setDouble(7, bobj.getStockAuditProductMismatchQty());
												cstatement4.setBoolean(8,bobj.isProductBatchSelected());
												cstatement4.setString(9, bobj.getStockAuditProductBatchRemark());
												cstatement4.setString(10, bobj.getStockAuditProductBatchAuditByName());
												
												pbatchid = 1; 
												
												cstatement4.setString(11, reqObj.getUserId());
												cstatement4.setString(12, reqObj.getToken());	
												cstatement4.setInt(13, reqObj.getUpdatePermissionID());		
												cstatement4.setInt(14, status);
												cstatement4.setDouble(15, reqObj.getStatus());
												
												cstatement4.registerOutParameter(14, java.sql.Types.INTEGER);
												cstatement4.registerOutParameter(15, java.sql.Types.DOUBLE);
												cstatement4.execute();
												
												status = cstatement4.getInt(14);
												if(status == 0){
													throw new Exception("User is not Authorized");
												}else if(status == 1){
													throw new Exception("No Permission");
												}else{
													
													double output4 = cstatement4.getDouble(15);
	
													if(output4 == 1){
														con.commit();
														System.out.println("product updated for stock audit");
												
														con.commit();
													}
												}	
											}
										}
		
								}
						}
		
						con.commit();
						con.close();
						
						if(auditObj.getIsCriteriaChanged() == 1){
							auditObj.setIsCriteriaChanged(0);
						}
						
						json = util.util_makeJson(auditObj);
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


		@Override
		public String bl_getStockAuditDetails(PurpleaidRequest reqObj) throws Exception {


			Util_json util= null;
			JdbcConnection connectionObj = null;
			Connection con = null;
			
			CallableStatement cstatement1 = null;
			CallableStatement cstatement2 = null;
			CallableStatement cstatement3 = null;
			
			String query1 = null;
			String query2 = null;
			String query3 = null;
			String json = null;
		
			ResultSet rs1 = null;
			ResultSet rs2 = null;
			ResultSet rs3 = null;
			int status = 444;
		
			double loopcompanyID = 0;
			double loopPtypeID = 0;
			
			double loopProductID = 0;
			StockAudit stockAuditObj = null;
			
			List<StockAudit> stockAuditList = null;
			List<Division> divisionList = null;
			List<StockAuditProductBatch> batchList = null;
			
			Company companyObj = new Company();
			StockAuditProductBatch productObj = null;
			Division divisionObj = null;
			StockAuditProductBatch batchObj = null;

			try{
					
				util = new Util_json();
				connectionObj = new JdbcConnection();
				con = connectionObj.getConnection();
				
				stockAuditList = new ArrayList<StockAudit>();
				stockAuditObj = new StockAudit();
				
				List<StockAuditProductBatch> productList = new ArrayList<StockAuditProductBatch>();
				List<Company> companyDivisionSelectedList = new ArrayList<Company>();
				List<Product> productTypeSelectedList = new ArrayList<Product>();
				
				query1 = "{call getStockAuditCompanyList(?,?,?,?,?)}";
				cstatement1 = con.prepareCall(query1);
				cstatement1.setDouble(1,reqObj.getStockAuditId());
				cstatement1.setString(2, reqObj.getUserId());
				cstatement1.setString(3, reqObj.getToken());
				cstatement1.setInt(4, reqObj.getViewPermissionID());
				cstatement1.setInt(5, status);
				cstatement1.registerOutParameter(5, java.sql.Types.INTEGER);
				
				rs1 = cstatement1.executeQuery();
				
				status = cstatement1.getInt(5);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					while(rs1.next()){
						System.out.println("success");
						
						if(loopcompanyID != rs1.getDouble("companyID")){
		    		    	
		    		    		companyObj = new Company();
				    		    divisionList = new ArrayList<Division>();
									 
									companyObj.setCompanyId(rs1.getDouble("companyID"));
									companyObj.setRecid(rs1.getDouble("companyID"));
									companyObj.setCompanyName(rs1.getString("companyName"));
									
									if(rs1.getDouble("DivisionID") != 0){
										divisionObj = new Division();
										
										divisionObj.setDivisionCompanyId(rs1.getDouble("companyID"));
										divisionObj.setDivisionId(rs1.getDouble("DivisionID"));
										divisionObj.setRecid(rs1.getDouble("DivisionID"));
										divisionObj.setDivisionName(rs1.getString("DivisionName"));
										
										
										divisionList.add(divisionObj);
										companyObj.setCompanyDivisionsList(divisionList);
										companyDivisionSelectedList.add(companyObj);
										stockAuditObj.setCompanyDivisionSelectedList(companyDivisionSelectedList);
									}else{
										divisionList.add(divisionObj);
										companyObj.setCompanyDivisionsList(divisionList);
									}

						}else{
							
							if(rs1.getDouble("DivisionID") != 0){
								
								divisionObj = new Division();
								divisionObj.setDivisionCompanyId(rs1.getDouble("companyID"));
								divisionObj.setDivisionId(rs1.getDouble("DivisionID"));
								divisionObj.setRecid(rs1.getDouble("DivisionID"));
								divisionObj.setDivisionName(rs1.getString("DivisionName"));
								
								divisionList.add(divisionObj);
								companyObj.setCompanyDivisionsList(divisionList);
							}else{
								
							}
						}
						loopcompanyID = rs1.getDouble("companyID");
					}
					stockAuditList.add(stockAuditObj);
				}
				
				
				query2 = "{call getStockAuditProductTypeList(?,?,?,?,?)}";
				cstatement2 = con.prepareCall(query2);
				
				cstatement2.setDouble(1,reqObj.getStockAuditId() );
				cstatement2.setString(2, reqObj.getUserId());
				cstatement2.setString(3, reqObj.getToken());
				cstatement2.setInt(4, reqObj.getViewPermissionID());
				cstatement2.setInt(5, status);
				cstatement2.registerOutParameter(5, java.sql.Types.INTEGER);
				
				rs2 = cstatement2.executeQuery();
				
				status = cstatement2.getInt(5);
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
					
					while(rs2.next()){
						
						 if(loopPtypeID!=rs2.getDouble("ProductTypeID")){
	    		   				if(rs2.getDouble("ProductTypeID") != 0){
				    				Product ptypeObj = new Product();
									ptypeObj.setProductTypeId(rs2.getDouble("ProductTypeID"));
									ptypeObj.setRecid(rs2.getDouble("ProductTypeID"));
									ptypeObj.setProductTypeName(rs2.getString("productTypeName"));
									
									
									productTypeSelectedList.add(ptypeObj);
									stockAuditObj.setProductTypeList(productTypeSelectedList);
									
	    		   				}
			    			}else {
			    				
			    			}
						
					}
				}
					
				 query3 = "{call getStockAuditProductList(?,?,?,?,?)}";
				 cstatement3 = con.prepareCall(query3);
				 
				 cstatement3.setDouble(1,reqObj.getStockAuditId());
				 cstatement3.setString(2, reqObj.getUserId());
				 cstatement3.setString(3, reqObj.getToken());
				 cstatement3.setInt(4, reqObj.getViewPermissionID());
				 cstatement3.setInt(5, status);
				 cstatement3.registerOutParameter(5, java.sql.Types.INTEGER);
					
					rs3 = cstatement3.executeQuery();
					
					status = cstatement3.getInt(5);
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{
						loopProductID = 0;
						while(rs3.next()){
							
							
							if(loopProductID!=rs3.getDouble("productID")){
								if(rs3.getDouble("productID") != 0){
									 productObj = new StockAuditProductBatch();
										
										
										productObj.setStockAuditProductBatchProductId(rs3.getDouble("productID"));
										productObj.setRecid(rs3.getDouble("productID"));
										
										productObj.setStockAuditProductBatchProductName(rs3.getString("productName"));
										productObj.setStockAuditProductBatchPBatchId(rs3.getDouble("PBID"));
										productObj.setStockAuditProductBatchPBatchName(rs3.getString("batchName"));
										productObj.setStockAuditProductBatchCompanyId(rs3.getDouble("CompanyID"));
										productObj.setStockAuditProductBatchCompanyName(rs3.getString("compamyName"));
										productObj.setStockAuditProductBatchDivisionId(rs3.getDouble("divisionId"));
										productObj.setStockAuditProductBatchDivisionName(rs3.getString("DivisionName"));
										productObj.setStockAuditProductAuditQty(rs3.getDouble("AuditQuantity"));
										productObj.setStockAuditProductSystemQty(rs3.getDouble("SystemQuantity"));
										productObj.setStockAuditProductMismatchQty(rs3.getDouble("MissMatchQuantity"));
										productObj.setProductBatchSelected(rs3.getBoolean("IsProductBatchSelected"));
										productObj.setStockAuditProductBatchAuditByName(rs3.getString("AuditByName"));
										productObj.setStockAuditProductBatchRemark(rs3.getString("ProductRemark"));
										productObj.setStockAuditProductBatchPBatchId(rs3.getDouble("PBID"));
								
										 batchList = new ArrayList<StockAuditProductBatch>();
										
										if(rs3.getDouble("PBID") != 0){
											 batchObj = new StockAuditProductBatch();
											 batchList = new ArrayList<StockAuditProductBatch>();
											
											batchObj.setStockAuditProductBatchProductId(rs3.getDouble("productID"));
											batchObj.setStockAuditProductBatchPBatchId(rs3.getDouble("PBID"));
											batchObj.setRecid(rs3.getDouble("PBID"));
											batchObj.setStockAuditProductBatchPBatchName(rs3.getString("batchName"));
											batchObj.setStockAuditProductBatchCompanyId(rs3.getDouble("CompanyID"));
											batchObj.setStockAuditProductBatchCompanyName(rs3.getString("compamyName"));
											batchObj.setStockAuditProductBatchDivisionId(rs3.getDouble("divisionId"));
											batchObj.setStockAuditProductBatchDivisionName(rs3.getString("DivisionName"));
											
											batchObj.setStockAuditProductBatchAuditQty(rs3.getDouble("AuditQuantity"));
											batchObj.setStockAuditProductBatchSystemQty(rs3.getDouble("SystemQuantity"));
											batchObj.setStockAuditProductBatchMismatchQty(rs3.getDouble("MissMatchQuantity"));
											batchObj.setProductBatchSelected(rs3.getBoolean("IsProductBatchSelected"));
											
											
											batchList.add(batchObj);
											productObj.setStockAuditProductBatchList(batchList);
											productList.add(productObj);
											stockAuditObj.setSaProductList(productList);
											
										}else{
											
											productList.add(productObj);
											stockAuditObj.setSaProductList(productList);
										}	
								}
		
							}else{
								
								if(rs3.getDouble("PBID") != 0){
									 batchObj = new StockAuditProductBatch();
									
									 
									batchObj.setStockAuditProductBatchProductId(rs3.getDouble("productID"));
									batchObj.setStockAuditProductBatchPBatchId(rs3.getDouble("PBID"));
									batchObj.setRecid(rs3.getDouble("PBID"));
									batchObj.setStockAuditProductBatchPBatchName(rs3.getString("batchName"));
									batchObj.setStockAuditProductBatchCompanyId(rs3.getDouble("CompanyID"));
									batchObj.setStockAuditProductBatchCompanyName(rs3.getString("compamyName"));
									batchObj.setStockAuditProductBatchDivisionId(rs3.getDouble("divisionId"));
									batchObj.setStockAuditProductBatchDivisionName(rs3.getString("DivisionName"));
									
									batchObj.setStockAuditProductBatchAuditQty(rs3.getDouble("AuditQuantity"));
									batchObj.setStockAuditProductBatchSystemQty(rs3.getDouble("SystemQuantity"));
									batchObj.setStockAuditProductBatchMismatchQty(rs3.getDouble("MissMatchQuantity"));
									batchObj.setProductBatchSelected(rs3.getBoolean("IsProductBatchSelected"));
									
									
									batchList.add(batchObj);
									productObj.setStockAuditProductBatchList(batchList);
								}else{
									
								}
										
							}
							loopProductID = rs3.getDouble("productID");
						}
					} 
				
				json = util.util_makeJson(stockAuditList);
		
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
