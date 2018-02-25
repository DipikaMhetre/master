package com.purpleaid.bussinessLayer;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import java.util.ArrayList;



import java.util.List;


import com.purpleaid.beans.Area;
import com.purpleaid.beans.City;
import com.purpleaid.beans.CompanyProduct;
import com.purpleaid.beans.CompanyPurchaseOrder;
import com.purpleaid.beans.Content;
import com.purpleaid.beans.Customer;
import com.purpleaid.beans.CustomerLicences;
import com.purpleaid.beans.Division;
import com.purpleaid.beans.MR;
import com.purpleaid.beans.Product;
import com.purpleaid.beans.Region;
import com.purpleaid.beans.Route;
import com.purpleaid.beans.RouteAreaRegion;
import com.purpleaid.beans.Salesman;
import com.purpleaid.beans.State;
import com.purpleaid.beans.Supplier;
import com.purpleaid.beans.User;
import com.purpleaid.beans.Company;
import com.purpleaid.utilities.JdbcConnection;

import com.purpleaid.utilities.Util_json;

public class Bl_Company {
	String CLASS_NAME = "Bl_Company";
	
	
	public String bl_getCompanyList(User user){
		//String METHOD_NAME = "bl_getCompanyList";
		Util_json util= null;
	    String json=null;
	    JdbcConnection JdbcConnectionObj = null;
	    List <Company> companyList = null;
	    Connection con = null;
	    Statement statement = null;
	    String query = null;
	    ResultSet rs = null;
	    
	    try {
	    	
	    	util= new Util_json();
	    	companyList=new ArrayList<Company>();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	statement = con.createStatement();
	    	query="select com.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from company com join city c on com.City=c.id join state s on c.State=s.ID ORDER BY com.Name ASC;";
	    	rs = statement.executeQuery(query);	     
	    	while(rs.next()){
	    		Company compObj = new Company();
	    		compObj.setCompanyId(rs.getDouble("ID"));
	    		compObj.setRecid(rs.getDouble("ID"));
	    		compObj.setCompanyName(rs.getString("Name"));
	    		compObj.setEdeCode(rs.getNString("EdeCode"));
	    		compObj.setCompanyCode(rs.getNString("Code"));
	    		compObj.setCompanyRemarks(rs.getString("Remarks"));
	    		compObj.setCompanyAddressLine1(rs.getString("AddrLine1"));
	    		compObj.setCompanyAddressLine2(rs.getString("AddrLine2"));
	     
	    		State state= new State();
	    		state.setStateId(Integer.parseInt(rs.getString("stateId")));
	    		state.setStateName(rs.getString("stateName"));
	    		if(rs.getInt("stateId")==1){
	    			state.setStateActiveFlag(true);
	    		}else{
	    			state.setStateActiveFlag(false);
	    		}
	    		City city =  new City();
	    		city.setCityId(rs.getInt("cityId"));
	    		city.setCityName("cityName");
	    		city.setCityState(state);
	    		if(rs.getInt("cityActiveFlag")==1){
	    			city.setCityActiveFlag(true);
	    		}else{
	    			city.setCityActiveFlag(false);
	    		}
	    		
	    		compObj.setCompanyCity(city);
	    		compObj.setCompanyContactPerson(rs.getString("ContactPerson"));
	    		compObj.setCompanyPhone(rs.getDouble("Phone"));
	    		compObj.setCompanyFax(rs.getDouble("Fax"));
	    		compObj.setCompanyEmail(rs.getString("Email"));
	    		compObj.setCompanyStockCalculationMode(rs.getInt("StockcMode"));
	    		compObj.setCompanyOrderLimit(rs.getDouble("OrderLimit"));
	    		compObj.setCompanyPaymentTerms(rs.getInt("PayTerms"));
	    		compObj.setCompanyPaymentDays(rs.getInt("PayDays"));
	    		
	    		if(rs.getInt("FlgActive")==1){
	    			compObj.setCompanyActiveFlag(true);
	    		}else{
	    			compObj.setCompanyActiveFlag(false);
	    		}
	    		if(rs.getInt("FlgEmail")==1){
	    			compObj.setCompanyEmailPOFlag(true);
	    		}else{
	    			compObj.setCompanyEmailPOFlag(false);
	    		}
	    		
	    		companyList.add(compObj);
	    	} 
	     
	     json = util.util_makeJson(companyList);
	    
	    } catch (Exception e) {
	    	e.printStackTrace();
	    } finally {
	    	try {
	    		con.close();
	    	} catch(Exception e) {
	    		e.printStackTrace();
	    	}
	    }
	    return json;
	    }
	
	public String bl_getProductList(User user,double companyId, double supplierId, String purchaseOrderId){
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<CompanyProduct> companyProductList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
		
		try {
			companyProductList = new ArrayList<CompanyProduct>();
			util= new Util_json();
			companyProductList = new ArrayList<CompanyProduct>();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();		
			query="{call getCSProductList(?,?)}";
			
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, companyId);  // This would set v
			callableStatement.setDouble(2, supplierId);
			rs = callableStatement.executeQuery();
			
			// retrieve value 
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
			
			json = util.util_makeJson(companyProductList);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return json;
		
	}
	
	public String bl_getCompanySupplier(User user){
		
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Supplier> supplierList = null;
		Connection con = null;
		Statement statement = null;
		String query = null;
		ResultSet rs = null;
		
		try {
			util= new Util_json();
			supplierList=new ArrayList<Supplier>();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			statement = con.createStatement();
			//query="select sup.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from supplier sup join city c on sup.City=c.id join state s on c.State=s.ID";
			query="select s.ID as supplierId,IFNULL(s.Other, '' ) as supplierOtherInfo,s.CID as supplierCompanyId,s.Name as supplierName,IFNULL(s.accCode, '' ) as supplierAccCode,IFNULL(s.accName, '' ) as supplierAccName,IFNULL(s.Remark, '' ) as supplierRemark,IFNULL(s.TaxID, '' ) as supplierTaxId,IFNULL(s.LedgerType, '' ) as supplierLedgerType,IFNULL(s.accGroup, '' ) as supplierAccGroup,IFNULL(s.OpeningBalance, '' ) as supplierOpeningBalance,IFNULL(s.OpeningBalanceTYpe, '' ) as supplierOpeningBalanceType,IFNULL(s.CreditPeriod, '' ) as supplierCreditPeriod,IFNULL(s.AddrLine1, '' ) as supplierAddrLine1,IFNULL(s.AddrLine2, '' ) as supplierAddrLine2,IFNULL(s.ContactPerson, '' ) as supplierContactPerson,IFNULL(s.Phone, '' ) as supplierPhone,IFNULL(s.Fax, '' ) as supplierFax,IFNULL(s.Email, '' ) as supplierEmail,IFNULL(s.DeliveryTime, '' ) as supplierDeliveryTime,IFNULL(s.flgActive, '' ) as supplierActiveFlag,IFNULL(s.flgOutState, '' ) as supplierOutStateFlag,IFNULL(s.flgEmail, '' ) as supplierEmailFlag,s.flgDefault as supplierDefaultFlag, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag,company.Name as supplierCompanyName from supplier s join city c on s.City=c.id join state st on c.State=st.ID join company on s.CID=company.ID ORDER BY s.Name ASC";
			rs = statement.executeQuery(query);
			
			// retrieve value    
			while(rs.next()){
				Supplier sup = new Supplier();
				sup.setSupplierId(rs.getDouble("supplierId"));
				sup.setRecid(rs.getDouble("supplierId"));
				sup.setSupplierOtherInfo(rs.getString("supplierOtherInfo"));
				sup.setSupplierName(rs.getString("supplierName"));
				sup.setSupplierCompanyName(rs.getString("supplierCompanyName"));
				sup.setSupplierCompanyId(rs.getDouble("supplierCompanyId"));
				sup.setSupplierAccountCode(rs.getString("supplierAccCode"));
				sup.setSupplierAccountName(rs.getString("supplierAccName"));			
				sup.setSupplierRemark(rs.getString("supplierRemark"));
				sup.setSupplierTaxID(rs.getString("supplierTaxID"));
				sup.setSupplierLedgerType(rs.getString("supplierLedgerType"));
				sup.setSupplierAccountGroup(rs.getString("supplierAccGroup"));
				sup.setSupplierOpeningBalance(rs.getDouble("supplierOpeningBalance"));
				sup.setSupplierOpeningBalanceType(rs.getInt("supplierOpeningBalanceTYpe"));
				sup.setSupplierCreditPeriod(rs.getInt("supplierCreditPeriod"));
				sup.setSupplierAddressLine1(rs.getString("supplierAddrLine1"));
				sup.setSupplierAddressLine2(rs.getString("supplierAddrLine2"));
				sup.setSupplierContactPerson(rs.getString("supplierContactPerson"));
				if(rs.getString("supplierPhone").length()!=0){
					sup.setSupplierPhone(Double.parseDouble(rs.getString("supplierPhone")));
				}else sup.setSupplierPhone(0);
				if(rs.getString("supplierFax").length()!=0){
					sup.setSupplierFax(Double.parseDouble(rs.getString("supplierFax")));
				}else sup.setSupplierFax(0);
				
				State state= new State();
				state.setStateId(Integer.parseInt(rs.getString("stateId")));
				state.setStateName(rs.getString("stateName"));
				if(rs.getInt("stateId")==1){
					state.setStateActiveFlag(true);
				}else{
					state.setStateActiveFlag(false);
				}				
				City city =  new City();
				city.setCityId(rs.getInt("cityId"));
				city.setCityName("cityName");
				city.setCityState(state);
				if(rs.getInt("cityActiveFlag")==1){
					city.setCityActiveFlag(true);
				}else{
					city.setCityActiveFlag(false);
				}
				sup.setSupplierCity(city);
				sup.setSupplierEmail(rs.getString("supplierEmail"));
				sup.setSupplierDeliveryTime(rs.getInt("supplierDeliveryTime"));
				
				if(rs.getInt("supplierActiveFlag")== 1) {
					sup.setSupplierActiveFlag(true);
				} else {
					sup.setSupplierActiveFlag(false);
				}
				
				if(rs.getInt("supplierOutStateFlag")== 1) {
					sup.setSupplierOutStatePartyFlag(true);
				} else {
					sup.setSupplierOutStatePartyFlag(false);
				}
				
				if(rs.getInt("supplierEmailFlag")== 1) {
					sup.setSupplierEmailPOFlag(true);
				} else {
					sup.setSupplierEmailPOFlag(false);
				}
				
				if(rs.getInt("supplierDefaultFlag")== 1) {
					sup.setSupplierSetAsDefaultFlag(true);
				} else {
					sup.setSupplierSetAsDefaultFlag(false);
				}
				supplierList.add(sup);
			}	
			
			json = util.util_makeJson(supplierList);
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				con.close();
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		return json;
	} 
	
	public String bl_getCompanyMR(User user){
	    
	    Util_json util = null;
	    String json = null;
	    JdbcConnection JdbcConnectionObj = null;
	    List<MR> mrList = new ArrayList<MR>();
	    Connection con = null;
	    Statement statement = null;
	    String query = null;
	    ResultSet rs = null;
	    
	    try {
	     util= new Util_json();
	     
	     JdbcConnectionObj = new JdbcConnection();
	     con=JdbcConnectionObj.getConnection();
	     statement = con.createStatement();
	     query="select mr.* ,company.Name as mrCompanyName from mr join company on company.ID=mr.CID;";
	     rs = statement.executeQuery(query);
	     
	     // retrieve value    
	     while(rs.next()){
	    	 MR mrObj = new MR();
	    	 mrObj.setMrId(rs.getDouble("ID"));
	    	 mrObj.setRecid(rs.getDouble("ID"));
	    	 mrObj.setMrName(rs.getString("Name"));
	    	 mrObj.setMrCompanyId(rs.getDouble("CID"));
	    	 mrObj.setMrDivisionId(rs.getDouble("DID"));
	    	 mrObj.setMrRemark(rs.getString("Remark"));
	    	 mrObj.setMrCompanyName(rs.getString("mrCompanyName"));
	    	 mrObj.setMrTelephone(rs.getLong("Phone"));
	    	 mrObj.setMrEmail(rs.getString("Email"));
	    	 mrObj.setMrManagerName(rs.getString("Manager"));
	    	 mrObj.setMrManagerTelephone(rs.getLong("mgrPhone"));
	    	 mrObj.setMrManagerEmail(rs.getString("mgrEmail"));
	    	 if(rs.getInt("FlgActive")==1){
	    		 mrObj.setMrActiveFlag(true);
	    	 }else{
	    		 mrObj.setMrActiveFlag(false);
	    	 }
	    
	    if(rs.getInt("FlgEmail")==1){
	     mrObj.setMrEmailreportFlag(true);
	    }
	    else{
	     mrObj.setMrEmailreportFlag(false);
	    }
	    mrList.add(mrObj);
	   }      
	   
	     json = util.util_makeJson(mrList);
	    
	    } catch (Exception e) {
	     // TODO Auto-generated catch block
	     e.printStackTrace();
	    } finally {
	     try {
	      con.close();
	     } catch(Exception e) {
	      e.printStackTrace();
	     }
	    }
	    
	    return json;
	   } 
	
	
	 public String bl_getDivision(User user){
	     
	     Util_json util = null;
	     String json = null;
	     JdbcConnection JdbcConnectionObj = null;
	     List<Division> divisionList = new ArrayList<Division>();
	     Connection con = null;
	     Statement statement = null;
	     String query = null;
	     ResultSet rs = null;
	     
	     try {
	      util= new Util_json();
	      
	      JdbcConnectionObj = new JdbcConnection();
	      con=JdbcConnectionObj.getConnection();
	      statement = con.createStatement();
	      query="SELECT division.* , company.Name as divisionCompanyName from division join company on company.Id = division.CID Order by division.Name";
	      rs = statement.executeQuery(query);
	      
	      // retrieve value    
	      while(rs.next()){
	       Division divObj = new Division();
	       divObj.setDivisionId(rs.getDouble("ID"));
	       divObj.setRecid(rs.getDouble("ID"));
	       divObj.setDivisionCompanyId(rs.getDouble("CID"));
	       divObj.setDivisionCode(rs.getString("Code"));
	       divObj.setDivisionName(rs.getString("Name"));
	       divObj.setDivisionRemark(rs.getString("Remark"));
	       divObj.setDivisionContactName(rs.getString("ContactPerson"));
	       divObj.setDivisionContactPhone(rs.getDouble("Phone"));
	       divObj.setDivisionContactEmail(rs.getString("Email"));
	       divObj.setDivisionCompanyName(rs.getString("divisionCompanyName"));
	       if(rs.getInt("flgActive")==1){
	    	   divObj.setDivisionActiveFlag(true);
	       }else{
	    	   divObj.setDivisionActiveFlag(false);
	       }
	     
	      
	     divisionList.add(divObj);
	    }      
	    
	      json = util.util_makeJson(divisionList);
	     
	     } catch (Exception e) {
	    	 // TODO Auto-generated catch block
	    	 e.printStackTrace();
	     } finally {
	    	 try {
	    		 con.close();
	    	 } catch(Exception e) {
	    		 e.printStackTrace();
	    	 }
	     }

	     return json;
	    }
	public String bl_getCompanyOrder(double companyID,String userID,String userPwd){
		
		return "";
	} 
	
	
	
	public String bl_setCompanyOrder(double companyId,double supplierId,String userId,String userPwd,String productOrder[]){
		
		return "";
	}
	
public String bl_saveCompanyPurchaseOrder(CompanyPurchaseOrder cpoObj){
		
		String response = null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		//PreparedStatement prepState = null;
		String query = null;
		//ResultSet rs = null;
		//int genKey = 0;
		CallableStatement callableStatement = null;
		try{
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();	
			con.setAutoCommit(false);
			/*===============================================================================*/
			/*query="INSERT INTO purchaseorder(ID,CID,SID)VALUES (?,?,?) ON DUPLICATE KEY UPDATE    ID=VALUES(ID),CID=VALUES(CID),SID=VALUES(SID)";
			prepState = con.prepareStatement(query,Statement.RETURN_GENERATED_KEYS);
			prepState.setDouble(2,cpoObj.getCpoCompanyId());  // This would set v
			prepState.setDouble(1,cpoObj.getCpoId());
			prepState.setDouble(3,cpoObj.getCpoSupplierId());*/
			//SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	        /*Date parsed = format.parse(System.currentTimeMillis()cpoObj.getCpoDate());*/
	        //java.sql.Date sql = new java.sql.Date(parsed.getTime());
			//java.sql.Date sql = new java.sql.Date(System.currentTimeMillis());
			//query="INSERT INTO purchaseorder(CID,SID,MID,OrderDate,OrderAmt,Remark,flgEmail,flgCancelPending,flgScheme,flgUrgent,flgVoid,VoidReason,ID)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)ON DUPLICATE KEY UPDATE    ID=VALUES(ID),CID=VALUES(CID),SID=VALUES(SID),    MID=VALUES(MID),OrderDate=VALUES(STR_TO_DATE(VALUES(OrderDate),'%d/%m/%Y')),    OrderAmt=VALUES(OrderAmt), Remark=VALUES(Remark),    flgEmail=VALUES(flgEmail),flgCancelPending=VALUES(flgCancelPending),    flgScheme=VALUES(flgScheme),flgUrgent=VALUES(flgUrgent),flgVoid=VALUES(flgVoid),VoidReason=VALUES(VoidReason),ID=VALUES(ID)";
			
			query = "{call InsertCompanyPurchaseOrder(?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			callableStatement = con.prepareCall(query);
			//prepState = con.prepareStatement(query,Statement.RETURN_GENERATED_KEYS);
			callableStatement.setDouble(2,cpoObj.getCpoCompanyId());  // This would set v
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
			callableStatement.setDouble(1,cpoObj.getCpoId());
			
			//callableStatement.executeUpdate();
			
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			
			callableStatement.execute();
			double output = callableStatement.getDouble(1);
			System.out.println("Order Id Saved !!!"+output);
			cpoObj.setCpoId(output);
				
				String query2="Delete from purchaseproducts where CompanyOrderID = ?;";
				PreparedStatement prepState2 = con.prepareStatement(query2);
				prepState2.setDouble(1,cpoObj.getCpoId());
				prepState2.executeUpdate();
				//genKey=(int)cpoObj.getCpoId();
			
			
		
			System.out.println("You have inserted key=="+cpoObj.getCpoId());
			
			//////////////////
			
			
			
			//////////////////
			String query3="INSERT INTO purchaseproducts(CompanyOrderID,CID,PID,Quantity,Scheme,Value,Remark)VALUES(?,?,?,?,?,?,?);";
			//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
			PreparedStatement prepState3 = con.prepareStatement(query3);
			
			CompanyProduct companyProduct = new CompanyProduct();
			for(int i=0;i<cpoObj.getCpoProductList().size();i++){ 
				companyProduct = cpoObj.getCpoProductList().get(i);
				prepState3.setDouble(1, cpoObj.getCpoId());
				prepState3.setDouble(2, cpoObj.getCpoCompanyId());
				prepState3.setDouble(3, companyProduct.getProductId());
				prepState3.setDouble(4, companyProduct.getQty());
				prepState3.setDouble(5, companyProduct.getScheme());
				prepState3.setDouble(6, companyProduct.getValue());
				prepState3.setString(7, companyProduct.getRemark());
				prepState3.addBatch();
			}
			prepState3.executeBatch();
			
			/*===============================================================================*/
			/*if(cpoObj.getCpoId().equals("New#PO")){
				cpoObj.setCpoId("0");
			}
			query="INSERT INTO purchaseorder(CID,SID,MID,OrderDate,OrderAmt,Remark,flgEmail,flgCancelPending,flgScheme,flgUrgent,flgVoid,VoidReason)VALUES (?,?,?,?,?,?,?,?,?,?,?,?);";
			//query="INSERT INTO purchaseorder(CID,SID,MID,OrderDate,OrderAmt,Remark,flgEmail,flgCancelPending,flgScheme,flgUrgent,flgVoid,VoidReason,ID)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)ON DUPLICATE KEY UPDATE    ID=VALUES(ID),CID=VALUES(CID),SID=VALUES(SID),    MID=VALUES(MID),OrderDate=VALUES(OrderDate),    OrderAmt=VALUES(OrderAmt), Remark=VALUES(Remark),    flgEmail=VALUES(flgEmail),flgCancelPending=VALUES(flgCancelPending),    flgScheme=VALUES(flgScheme),flgUrgent=VALUES(flgUrgent),flgVoid=VALUES(flgVoid),VoidReason=VALUES(VoidReason);";
			SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
	        Date parsed = format.parse(cpoObj.getCpoDate());
	        java.sql.Date sql = new java.sql.Date(parsed.getTime());
			prepState = con.prepareStatement(query,Statement.RETURN_GENERATED_KEYS);
			con.setAutoCommit(false);
			prepState.setDouble(1,cpoObj.getCpoCompanyId());  // This would set v
			prepState.setDouble(2,cpoObj.getCpoSupplierId());
			prepState.setDouble(3,cpoObj.getCpoMrId());
			prepState.setDate(4,sql);
			prepState.setDouble(5,cpoObj.getCpoAmount());
			prepState.setString(6,cpoObj.getCpoRemark());
			prepState.setBoolean(7,cpoObj.isCpoEmailFlag());
			prepState.setBoolean(8,cpoObj.isCpoCancelPending());
			prepState.setBoolean(9,cpoObj.isCpoSchemeFlag());
			prepState.setBoolean(10,cpoObj.isCpoUrgentFlag());
			prepState.setBoolean(11,cpoObj.isCpoVoidFlag());
			prepState.setString(12,cpoObj.getCpoVoidText());
			//prepState.setString(13,cpoObj.getCpoId());
			prepState.addBatch();
			prepState.executeUpdate();
			rs=prepState.getGeneratedKeys();  
			System.out.println(rs.getInt(1));
			int cpoId = rs.getInt(1);
			
			String query2="Delete purchaseproducts where CompanyOrderID=?";
			PreparedStatement prepState2 = con.prepareStatement(query2);
			prepState2.setDouble(1, rs.getInt(1));
			prepState2.addBatch();
			prepState2.executeUpdate();
			
			String query3="INSERT INTO purchaseproducts(CompanyOrderID,CID,PID,Quantity,Scheme,Value,Remark)VALUES(?,?,?,?,?,?,?);";
			//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
			PreparedStatement prepState3 = con.prepareStatement(query3);
			
			CompanyProduct companyProduct = new CompanyProduct();
			for(int i=0;i<cpoObj.getCpoProductList().size();i++){ 
				companyProduct = cpoObj.getCpoProductList().get(i);
				prepState3.setDouble(1, cpoId);
				prepState3.setDouble(2, companyProduct.getCompanyId());
				prepState3.setDouble(3, companyProduct.getProductId());
				prepState3.setDouble(4, companyProduct.getQty());
				prepState3.setDouble(5, companyProduct.getScheme());
				prepState3.setDouble(6, companyProduct.getValue());
				prepState3.setString(7, companyProduct.getRemark());
				prepState3.addBatch();
			}
			prepState3.executeBatch();*/
			
			con.commit();
			response = ""+(int)output;
			
		}catch(Exception e){
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			}
		}
		
		return response;
	}
	
	
	 /*public String bl_retrieveCompanyPurchaseOrder(double cpoRetreiveId){
		  Util_json util= null;
		  String json=null;
		  JdbcConnection JdbcConnectionObj = null;
		  List<CompanyPurchaseOrder> companyOrderList =new ArrayList<CompanyPurchaseOrder>();
		  Connection con = null;
		  ResultSet rs = null;
		  
		  try{
			   util= new Util_json();
			   JdbcConnectionObj = new JdbcConnection();
			   con=JdbcConnectionObj.getConnection();
			   PreparedStatement pstate = con.prepareStatement("select * from purchaseorder left join purchaseproducts on purchaseorder.ID = purchaseproducts.CompanyOrderID where ID = ?");
			   pstate.setInt(1, (int) cpoRetreiveId);
			   rs=pstate.executeQuery();
			   CompanyProduct cpObj = new CompanyProduct();
			   List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
		   
		   if (!rs.next()){
			    System.out.println("sorry record not found");
		   }else{
			    CompanyPurchaseOrder cpoObjResponse = new CompanyPurchaseOrder();
			    cpoObjResponse.setCpoId(rs.getDouble("ID"));
			    cpoObjResponse.setCpoCompanyId(rs.getDouble("CID"));
			    cpoObjResponse.setCpoSupplierId(rs.getDouble("SID"));
			    cpoObjResponse.setCpoMrId(rs.getDouble("MID"));
			    cpoObjResponse.setCpoDate(rs.getString("OrderDate"));
			    cpoObjResponse.setCpoAmount(rs.getDouble("OrderAmt"));
			    cpoObjResponse.setCpoRemark(rs.getString("Remark"));
			    cpoObjResponse.setCpoEmailFlag(rs.getBoolean("flgEmail"));
			    cpoObjResponse.setCpoCancelPending(rs.getBoolean("flgCancelPending"));
			    cpoObjResponse.setCpoSchemeFlag(rs.getBoolean("flgScheme"));
			    cpoObjResponse.setCpoUrgentFlag(rs.getBoolean("flgUrgent"));
			    cpoObjResponse.setCpoVoidFlag(rs.getBoolean("flgVoid"));
			    
			    cpObj.setCompanyId(rs.getDouble("CID"));
			    cpObj.setProductId(rs.getDouble("PID"));
			    cpObj.setScheme(rs.getDouble("Scheme"));
			    cpObj.setValue(rs.getDouble("Value"));
			    cpObj.setRemark(rs.getString("Remark"));
			    
			    cpoProductList.add(cpObj);
			    cpoObjResponse.setCpoProductList(cpoProductList);
			    companyOrderList.add(cpoObjResponse);
		   }
		  
		     json = util.util_makeJson(companyOrderList);
		      
		    }catch(Exception e){
		      e.printStackTrace();
		    }
		    
		    return json;
		   }*/
	
public String bl_retrieveCompanyPurchaseOrder(double cpoObj) throws Exception{
	  Util_json util= null;
	  String json=null;
	  JdbcConnection JdbcConnectionObj = null;
	  //List<CompanyPurchaseOrder> companyOrderList =new ArrayList<CompanyPurchaseOrder>();
	  Connection con = null;
	  ResultSet rs = null;
	  CallableStatement cstatement = null;
	  
	  try{
	   util= new Util_json();
	   JdbcConnectionObj = new JdbcConnection();
	   con=JdbcConnectionObj.getConnection();
	   //double id = Double.parseDouble(cpoObj.getCpoId()); 
	   //PreparedStatement pstate = con.prepareStatement("SELECT * FROM purchaseorder p INNER JOIN purchaseproducts po ON p.ID = po.CompanyOrderID JOIN product pod ON po.PID = pod.ID WHERE p.ID = ?");
	   /*PreparedStatement pstate = con.prepareStatement("SELECT p.ID as cpoId, p.CID as cpoCompanyId,p.SID as cpoSupplierId, p.MID as cpoMrId ,p.OrderDate as cpoDate,"
	   +" p.OrderAmt as cpoAmount, IFNULL(p.Remark, '' ) as cpoRemark ,IFNULL(p.flgEmail, '' ) as cpoEmailFlag,"
	   +"IFNULL(p.flgCancelPending, '' ) as cpoCancelPending,IFNULL(p.flgScheme, '' ) as cpoSchemeFlag,"
	   +"IFNULL(p.flgUrgent, '' ) as cpoUrgentFlag, IFNULL(p.flgVoid, '' ) as cpoVoidFlag,"

	   +"po.CID as companyId , po.PID as productId , po.Scheme as scheme , po.Value as value , IFNULL(po.Remark, '' ) as remark ,"
	   +"pod.ID as productId , pod.upcID as productUPCId , IFNULL(pod.Other, '' ) as productOtherInfo, pod.Name as productName,"
	   +"IFNULL(pod.Description, '' ) as productDesc, IFNULL(pod.Remark, '' ) as productRemark , IFNULL(pod.Type, '' ) as productType ,"
	   +"pod.CID as productCompanyId ,pod.DID as productDivisionId , pod.Pack as productPack , pod.Box as productBox ,"
	   +"IFNULL(pod.flgActive, '' ) as productActiveFlag, IFNULL(pod.flgDPCO, '' ) as productDPCOFlag, IFNULL(pod.flgNarcotics, '' ) as productNarcoticsFlag"

	   +"FROM purchaseorder p INNER JOIN purchaseproducts po "
	   +"ON p.ID = po.CompanyOrderID JOIN product pod"
	    +"  ON po.PID = pod.ID"
	   +"WHERE p.ID = ? ");*/
	   
	   
	   
	   String query = "{call retrieveCompanyPurchaseOrderNew (?)}";
	   cstatement = con.prepareCall(query);
	   cstatement.setDouble(1, cpoObj);
	   rs=cstatement.executeQuery();
	   
	   List<CompanyProduct> cpoProductList = new ArrayList<CompanyProduct>();
	  
	   CompanyPurchaseOrder cpoObjResponse = new CompanyPurchaseOrder();
	   
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
	    // companyOrderList.add(cpoObjResponse);
	    
	    
	   }
	    if(cpoObjResponse.getCpoId()==0){
	        throw new Exception("Order ID NOT FOUND!!");
	       
	    };
	  
	     json = util.util_makeJson(cpoObjResponse);
	    
	    }catch(Exception e){
	      e.printStackTrace();
	      throw new Exception(e.getMessage());
	    }
	    
	    return json;
	   }

	public String bl_getCompanyDivisionProductList(User user, double companyId,double divisionId) throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Product> companyProductList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
		
		try {
			companyProductList = new ArrayList<Product>();
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();		
			query="{call getCDProductList(?)}";
			
			callableStatement = con.prepareCall(query);
			callableStatement.setDouble(1, companyId);  // This would set v
			rs = callableStatement.executeQuery();
			//Map<Product,List<Content>> map= new HashMap<Product,List<Content>>();
			List<Content> contentList=new ArrayList<Content>();
			List<Product> innerProductList= new ArrayList<Product>();
			// retrieve value 
			while(rs.next()){
				Content content= new Content(); 
				Product product = new Product();
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
				content.setRecid(rs.getDouble("contentID"));
				content.setContentId(rs.getDouble("contentID"));
				content.setContentName(rs.getString("contentName"));
				content.setContentDesc(rs.getString("contentDesc"));
				content.setContentProductId(rs.getDouble("contentProductId"));
				/*================================*/
				
				contentList.add(content);
				boolean flag = false;
				for(int j=0;j<innerProductList.size();j++){
					if(innerProductList.get(j).getProductId()==product.getProductId()){
						flag=true;
					}
				}
				if(flag){
					
				}else{
					innerProductList.add(product);
				}
				/*if(map.containsKey(product)){
					List<Content> c =new ArrayList<Content>();
					c=map.get(product);
					c.add(content);
					map.remove(product);
					map.put(product, c);
				}else{
					List<Content> contentList = new ArrayList<Content>();
					contentList.add(content);
					map.put(product,contentList);
					
					
				}*/
				
				//companyProductList.add(product);
				
			}
			
			/*for(Map.Entry<Product,List<Content>> entry : map.entrySet()){
				
				Product prod= new Product();
				List<Content> contentList = new ArrayList<Content>();
				prod=entry.getKey();
				contentList=entry.getValue();
				prod.setProductContents(contentList);
				companyProductList.add(prod);


			}*/
			
			for(int i=0;i<innerProductList.size();i++){
				List<Content> a= new ArrayList<Content>();
				for(int j=0;j<contentList.size();j++){
					
					if(innerProductList.get(i).getProductId()==contentList.get(j).getContentProductId()){
						
						a.add(contentList.get(j));
					}
					Product p1 = new Product();
					p1=innerProductList.get(i);
					p1.setProductContents(a);
					companyProductList.add(p1);
				}
			}
			companyProductList=innerProductList;
			
			json = util.util_makeJson(companyProductList);
		
		}catch(Exception e){
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
		return json;
			
	}

	public String bl_getContentList() throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Content> contentList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
		
		try {
			contentList = new ArrayList<Content>();
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();		
			query="{call getallcontent()}";
			
			callableStatement = con.prepareCall(query);
			rs = callableStatement.executeQuery();
			
			// retrieve value 
			while(rs.next()){
				Content content = new Content();
				content.setContentId(rs.getDouble("ID"));
				content.setRecid(rs.getDouble("ID"));
				content.setContentName(rs.getString("Name"));
				content.setContentDesc(rs.getString("Description"));
				content.setContentActiveFlag(rs.getBoolean("flgActive"));
				content.setContentPresence(false);
				
				contentList.add(content);
				
			}
			
			json = util.util_makeJson(contentList);
		
		}catch(Exception e){
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
		return json;
	}

	public Object bl_saveProduct(Product product) throws Exception {
		//Util_json util= null;
		//String json=null;
		JdbcConnection JdbcConnectionObj = null;
		//List<Content> contentList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		//ResultSet rs = null;
		
		try {
			
			//util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();	
			con.setAutoCommit(false);
			query="{call InsertUpdateProductMaster(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
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
			callableStatement.setDouble(17, product.getProductTypeId());
			callableStatement.setString(18, product.getProductUPCId());	
			callableStatement.setString(19, product.getProductName());	
			callableStatement.setBoolean(20, product.isProductLockFlag());	
			
			
	
			callableStatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			
			callableStatement.execute();
			double output = callableStatement.getDouble(1);
			System.out.println("Product Id Saved/Updated !!!"+output);
			product.setProductId(output);
			product.setRecid(output);
			
			String query2="Delete from productcontents where productcontents.productID = ?;";
			PreparedStatement prepState2 = con.prepareStatement(query2);
			prepState2.setDouble(1,product.getProductId());
			prepState2.executeUpdate();
				
			String query3="INSERT INTO productcontents(productID,contentID)VALUES(?,?);";
			//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
			PreparedStatement prepState3 = con.prepareStatement(query3);
			Content contentObj = new Content();
			for(int i=0;i<product.getProductContents().size();i++){ 
				contentObj = product.getProductContents().get(i);
				prepState3.setDouble(1, product.getProductId());
				prepState3.setDouble(2, contentObj.getContentId());
				prepState3.addBatch();
			}
			prepState3.executeBatch();
			
			
			con.commit();
		}catch(Exception e){
			e.printStackTrace();
			con.rollback();
			throw new Exception(e.getMessage());
			
		}
		return product;
	}

	
	//===================================================================
	
	public String bl_getSalesman(User user){
		Util_json util= null;
	    String json=null;
	    JdbcConnection JdbcConnectionObj = null;
	    List <Salesman> salesmanList = null;
	    Connection con = null;
	    Statement statement = null;
	    String query = null;
	    ResultSet rs = null;
	    
	    try {
	    	util= new Util_json();
	    	salesmanList=new ArrayList<Salesman>();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	statement = con.createStatement();
	    	query="select sale.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from salesman sale join city c on sale.City=c.id join state s on c.State=s.ID;";
	    	rs = statement.executeQuery(query);	     
	    	while(rs.next()){
	    		Salesman sObj = new Salesman();
	    		sObj.setSalesmanName(rs.getString("Name"));
	    		sObj.setAddressLine1(rs.getString("AddrLine1"));
	    		sObj.setAddressLine2(rs.getString("AddrLine2"));
	    		sObj.setSalesmanEmail(rs.getString("Email"));
	    		sObj.setSalesmanID(rs.getDouble("ID"));
	    		sObj.setRecid(rs.getDouble("ID"));
	    		sObj.setSalesmanFax(rs.getDouble("Fax"));
	    		sObj.setSalesmanPhone(rs.getDouble("Phone"));
	    		sObj.setSalesmanLandlineNumber(rs.getInt("landlineNumber"));
	    		/*if(rs.getInt("flgActive")==1){
	    			sObj.setSalesmanActiveFlag(true);
	    		}else{
	    			sObj.setSalesmanActiveFlag(false);
	    		}
	    		
	    		if(rs.getInt("flgLock")==1){
	    			sObj.setSalesmanLockFlag(true);
	    		}else{
	    			sObj.setSalesmanLockFlag(false);
	    		}*/
	    		sObj.setSalesmanActiveFlag(rs.getBoolean("flgActive"));
	    		sObj.setSalesmanLockFlag(rs.getBoolean("flgLock"));
	    		State state= new State();
	    		state.setStateId(Integer.parseInt(rs.getString("stateId")));
	    		state.setStateName(rs.getString("stateName"));
	    		if(rs.getInt("stateId")==1){
	    			state.setStateActiveFlag(true);
	    		}else{
	    			state.setStateActiveFlag(false);
	    		}
	    		City city =  new City();
	    		city.setCityId(rs.getInt("cityId"));
	    		city.setCityName("cityName");
	    		city.setCityState(state);
	    		
	    		city.setCityState(state);
	    		sObj.setSalesmanCity(city);
	    		sObj.setSalesmanRouteID(rs.getString("salesmanRouteID"));
	    		sObj.setSalesmanEmergenyContactPerson(rs.getString("emergencyContactPerson"));
	    		sObj.setSalesmanEmergencyAddressLine1(rs.getString("emergencyAddressLine1"));
	    		sObj.setSalesmanEmergencyAddressLine2(rs.getString("emergencyAddressLine2"));
	    		sObj.setSalesmanEmergencyEmail(rs.getString("emergencyEmail"));
	    		sObj.setSalesmanEmergencyFax(rs.getDouble("emergencyFax"));
	    		sObj.setSalesmanEmergencyPhone(rs.getInt("emergencyPhone"));
	    		sObj.setSalesmanEmergencyLandline(rs.getInt("emergencyLandline"));
	    		
	    		salesmanList.add(sObj);	
	     	} 
	     
	     json = util.util_makeJson(salesmanList);
	    
	    } catch (Exception e) {
	    	e.printStackTrace();
	    } finally {
	    	try {
	    		con.close();
	    	} catch(Exception e) {
	    		e.printStackTrace();
	    	}
	    }
	    return json;
	    }	
	

	public String bl_getRoute(User user){
		    
    Util_json util= null;
	String json=null;
	JdbcConnection JdbcConnectionObj = null;
	List<Route> routeList = null;
	Connection con = null;
	Statement statement = null;
	String query = null;
	ResultSet rs = null;
    
    try {
    	util= new Util_json();
    	routeList=new ArrayList<Route>();
		JdbcConnectionObj = new JdbcConnection();
		con=JdbcConnectionObj.getConnection();
		statement = con.createStatement();
    	
    	//query="select rou.*, ra.areaCode as areaCode , a.description as Areadescription , a.regionCode as regionCode , r.description as rDescription from route as rou left join rotearea ra on rou.ID = ra.routeID left join area a on ra.areaCode = a.code left join region r on a.regionCode= r.code";
    
		query="select rou.*, ra.aID as areaID ,a.code as areaCode, a.description as Areadescription , a.regionID as regionID , r.description as rDescription,r.ID as rID ,r.code as regionCode from route as rou left join routearea ra on rou.ID = ra.rID left join area a on ra.aID = a.ID left join region r on a.regionID= r.ID order by rou.ID";
    	rs = statement.executeQuery(query);
		
		double loopRouteID = 0;
		Route rObj = new Route();
		List<RouteAreaRegion> rarList = new ArrayList<RouteAreaRegion>();
    	
    	while(rs.next()){
    		
    		if ( loopRouteID != rs.getDouble("ID"))
    		{
    		
	    		rObj = new Route();
	    		rarList = new ArrayList<RouteAreaRegion>();
	    		
	    		rObj.setIdpk(rs.getDouble("ID"));
	    		rObj.setRecid(rs.getDouble("ID"));
	    		rObj.setRouteID(rs.getDouble("ID"));
	    		rObj.setRrID(rs.getString("routeID"));
	    		
	    		rObj.setRouteDescription(rs.getString("description"));
	    		rObj.setRouteActiveFlag(rs.getBoolean("flgActive"));
	    		
	    		RouteAreaRegion obj = new RouteAreaRegion();
	    		obj.setRarAreaID(rs.getDouble("areaID"));
	    		obj.setRecid(rs.getDouble("areaID"));
	    		obj.setRarAreaCode(rs.getString("areaCode"));
	    		obj.setRarAreaDescription(rs.getString("Areadescription"));
	    		obj.setRarDescription(rs.getString("Areadescription"));
	    		obj.setRarRegionCode(rs.getString("regionCode"));
	    		obj.setRarRegionID(rs.getDouble("rID"));
	    		obj.setRarRegionDescription(rs.getString("rDescription"));
    		
	    		double output = obj.getRarAreaID();
    		    if(output == 0)
        		{
    		    	rObj.setRarList(rarList);  
    	    		routeList.add(rObj);
    		    	
        		}
    		    else{
    		    	
    		    	rarList.add(obj);
    		    	rObj.setRarList(rarList);   
	    		   	routeList.add(rObj);
    		    }
		   
  	    }else{
    			RouteAreaRegion obj = new RouteAreaRegion();
    			obj.setRarAreaID(rs.getDouble("areaID"));
	    		obj.setRecid(rs.getDouble("areaID"));
	    		obj.setRarAreaCode(rs.getString("areaCode"));
	    		obj.setRarAreaDescription(rs.getString("Areadescription"));
	    		obj.setRarDescription(rs.getString("Areadescription"));
	    		obj.setRarRegionCode(rs.getString("regionCode"));
	    		obj.setRarRegionID(rs.getDouble("rID"));
	    		obj.setRarRegionDescription(rs.getString("rDescription"));
	    		
	    		rarList.add(obj);
	    		rObj.setRarList(rarList);
    		}
    		
    		loopRouteID = rs.getDouble("ID");
      }
 	
   json = util.util_makeJson(routeList);
    
    } catch (Exception e) {
    	e.printStackTrace();
    } finally {
    	try {
    		con.close();
    	} catch(Exception e) {
    		e.printStackTrace();
    	}
    }
    return json;
    }	


	
	
	
		//@SuppressWarnings("resource")
	public String bl_getCustomer(User user){
		
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Customer> customerList = null;
		Connection con = null;
		Statement statement = null;
		String query = null;
		ResultSet rs = null;
		
		 
		try {
			util= new Util_json();
			customerList=new ArrayList<Customer>();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			statement = con.createStatement();
			//query="select sup.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from supplier sup join city c on sup.City=c.id join state s on c.State=s.ID";
			//query="select cust.*, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag,s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from customer cust join city c on cust.City=c.id join state s on c.State=s.ID;";
			
			// 1...query="select cust.*,cl.LicenceType as lType , cl.LicenceStartDate as startDate , cl.LicenceEndDate as EndDate , c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag, s.ID stateId,s.Name stateName,s.flgActive as stateActiveFlag from customer cust join city c on cust.City=c.id join state s on c.State=s.ID left join customerlicences cl on cust.ID = cl.CucstomerID";
			//query=" select cust.*,cl.LicenceType as lType , DATE_FORMAT(cl.LicenceStartDate, '%d/%m/%Y') as startDate , DATE_FORMAT(cl.LicenceEndDate,'%d/%m/%Y')  as EndDate ,cl.CustomerID as clID, l.category as category ,cl.licenceID as licenceId, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag, s.ID stateId,s.Name stateName, s.flgActive as stateActiveFlag from customer cust join city c on cust.City=c.id join state s on c.State=s.ID left join customerlicences cl on cust.ID = cl.CustomerID left join licence l on cl.licenceType = l.ID";

			query ="select cust.*,cl.customerNumber as cnum, DATE_FORMAT(cl.LicenceStartDate, '%d/%m/%Y') as startDate , DATE_FORMAT(cl.LicenceEndDate,'%d/%m/%Y') as EndDate ,cl.ID as custID, cl.CustomerID as clID, l.Name as lname , l.licenceType as lid , cl.licenceType as licenceType, c.id as cityId,c.Name cityName,c.flgActive as cityActiveFlag, s.ID stateId,s.Name stateName, s.flgActive as stateActiveFlag from customer cust join city c on cust.City=c.id join state s on c.State=s.ID left join customerlicences cl on cust.ID = cl.CustomerID left join licence l on cl.licenceType = l.licenceType order by cust.ID";
			rs = statement.executeQuery(query);
			//List<CustomerLicences> customerLicencesList = new ArrayList<CustomerLicences>();
			// retrieve value   
			double loopCustID = 0;
			Customer cust = new Customer();
		    List<CustomerLicences> customerLicenceList = new ArrayList<CustomerLicences>();

			while(rs.next()){

			if 	(loopCustID != rs.getDouble("ID")){
				
				cust = new Customer();
			    customerLicenceList = new ArrayList<CustomerLicences>();

			    cust.setCustomerId(rs.getDouble("ID"));
				cust.setRecid(rs.getDouble("ID"));
				cust.setCustomerOtherInfo(rs.getString("Other"));
				cust.setCustomerName(rs.getString("Name"));
				cust.setCustomerAccountCode(rs.getString("acCode"));
				cust.setCustomerAccountName(rs.getString("acName"));
				cust.setCustomerType(rs.getString("Type"));
				cust.setCustomerArea(rs.getString("Area"));
				cust.setCustomerSalesman(rs.getString("Salesman"));
				cust.setCustomerRemark(rs.getString("Remark"));
				cust.setCustomerTaxId(rs.getDouble("TaxID"));
				cust.setCustomerLedgerType(rs.getString("LedgerType"));
				cust.setCustomerAccountGroup(rs.getString("accGroup"));
				cust.setCustomerOpeningBalance(rs.getDouble("OpeningBalance"));
				cust.setCustomerOpeningBalanceType(rs.getString("OpeningBalanceType"));
				cust.setCustomerCreditType(rs.getString("CreditType"));
				cust.setCustomerCreditPeriod(rs.getDouble("CreditPeriod"));
				cust.setCustomerAddressLine1(rs.getString("AddrLine1"));
				cust.setCustomerAddressLine2(rs.getString("AddrLine2"));
				
				State state= new State();
	    		state.setStateId(Integer.parseInt(rs.getString("stateId")));
	    		state.setStateName(rs.getString("stateName"));
	    		if(rs.getInt("stateId")==1){
	    			state.setStateActiveFlag(true);
	    		}else{
	    			state.setStateActiveFlag(false);
	    		}
	    		City city =  new City();
	    		city.setCityId(rs.getInt("cityId"));
	    		city.setCityName("cityName");
	    		city.setCityState(state);
	    			
	    		cust.setCustomerCity(city);
	    		cust.setCustomerContactPerson(rs.getString("ContactPerson"));
	    		cust.setCustomerPhone(rs.getDouble("Phone"));
	    		cust.setCustomerFax(rs.getDouble("Fax"));
	    		cust.setCustomerEmail(rs.getString("Email"));
	    		cust.setCustomerActiveFlag(rs.getBoolean("flgActive"));
	    		cust.setCustomerAutoEmailFlag(rs.getBoolean("flgEmail"));
	    		cust.setCustomerLockFlag(rs.getBoolean("flgLock"));
	    		cust.setCustomerSubStockitsFlag(rs.getBoolean("flgSubstockits"));
				
				//Customer license
			 	CustomerLicences clObj = new CustomerLicences();
	    		
			 	clObj.setCustomerId(rs.getDouble("custID"));
	    		clObj.setRecid(rs.getDouble("custID"));
	    		clObj.setCustomerLicenceNumber(rs.getDouble("cnum"));
	    		clObj.setCustomerLicenceID(rs.getDouble("lid"));
	    		clObj.setCustomerLicenceType(rs.getString("lname"));
    		    clObj.setCustomerLicenceStartDate(rs.getString("startDate"));
    		    clObj.setCustomerLicenceEndDate(rs.getString("EndDate"));
				    			
        		double output = clObj.getCustomerId();
    		    if(output == 0)
        		{
    		    	cust.setCustomerLicenceList(customerLicenceList);  
    	    		
    	    		customerList.add(cust);
    		    	
        		}
    		    else{
    		    customerLicenceList.add(clObj);	
	    		cust.setCustomerLicenceList(customerLicenceList);  
	    		
	    		customerList.add(cust);
    		    }
			} else { // same customer ID 
				
				//Customer license
			 	CustomerLicences clObj = new CustomerLicences();
	    		clObj.setCustomerId(rs.getDouble("custID"));

				
	    		clObj.setRecid(rs.getDouble("custID"));
	    		clObj.setCustomerLicenceNumber(rs.getDouble("cnum"));
    		    clObj.setCustomerLicenceID(rs.getDouble("lid"));
    		    clObj.setCustomerLicenceType(rs.getString("lname"));
    		    clObj.setCustomerLicenceStartDate(rs.getString("startDate"));
    		    clObj.setCustomerLicenceEndDate(rs.getString("EndDate"));
				
    			
        		customerLicenceList.add(clObj);
    	    	    	
	    		cust.setCustomerLicenceList(customerLicenceList);  
	    		
			}// End loopCusID
	    			
			loopCustID = rs.getDouble("ID");  //set loopcustID for comparison

			} // while loop	
			

			json = util.util_makeJson(customerList);
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				con.close();
			} catch(Exception e) {
				e.printStackTrace();
			}
		}
		
		return json;
	} 
	
		public String bl_getArea(User user){
			Util_json util= null;
		    String json=null;
		    JdbcConnection JdbcConnectionObj = null;
		    List <Area> areaList = null;
		    Connection con = null;
		    Statement statement = null;
		    String query = null;
		    ResultSet rs = null;
		    
		    try {
		    	util= new Util_json();
		    	areaList=new ArrayList<Area>();
		    	JdbcConnectionObj = new JdbcConnection();
		    	con=JdbcConnectionObj.getConnection();
		    	statement = con.createStatement();
		    	query="select area.*, r.description as regionDescription,r.code as regionCode from area left join region as r on area.regionID= r.ID";
		    	rs = statement.executeQuery(query);	     
		    	while(rs.next()){
		    		Area areaObj = new Area();
		    		areaObj.setAreaID(rs.getInt("ID"));
		    		areaObj.setAreaCode(rs.getString("code"));
		    		areaObj.setRecid(rs.getDouble("ID"));
		    		areaObj.setAreaDescription(rs.getString("description"));
		    		areaObj.setPincode(rs.getString("pincode"));
		    		areaObj.setAreaRegionID(rs.getDouble("regionID"));
		    		areaObj.setAreaRegionCode(rs.getString("regionCode"));
		    		areaObj.setAreaRegionDescription(rs.getString("regionDescription"));
		    		areaObj.setAreaActiveFlag(rs.getBoolean("flgActive"));
		    		
		    		
		    		areaList.add(areaObj);
		    	} 
		     
		     json = util.util_makeJson(areaList);
		    
		    } catch (Exception e) {
		    	e.printStackTrace();
		    } finally {
		    	try {
		    		con.close();
		    	} catch(Exception e) {
		    		e.printStackTrace();
		    	}
		    }
		    return json;
		    }	
		
		public String bl_getRegion(User user){
			Util_json util= null;
		    String json=null;
		    JdbcConnection JdbcConnectionObj = null;
		    List <Region> regionList = null;
		    Connection con = null;
		    Statement statement = null;
		    String query = null;
		    ResultSet rs = null;
		    
		    try {
		    	util= new Util_json();
		    	regionList=new ArrayList<Region>();
		    	JdbcConnectionObj = new JdbcConnection();
		    	con=JdbcConnectionObj.getConnection();
		    	statement = con.createStatement();
		    	query="select * from region";
		    	rs = statement.executeQuery(query);	     
		    	while(rs.next()){
		    		Region regObj = new Region();
		    		regObj.setRegionID(rs.getDouble("ID"));
		    		regObj.setRecid(rs.getDouble("ID"));
		    		regObj.setRegionCode(rs.getString("code"));
		    		regObj.setRegionDescription(rs.getString("description"));
		    		regionList.add(regObj);
		    	} 
		     
		     json = util.util_makeJson(regionList);
		    
		    } catch (Exception e) {
		    	e.printStackTrace();
		    } finally {
		    	try {
		    		con.close();
		    	} catch(Exception e) {
		    		e.printStackTrace();
		    	}
		    }
		    return json;
		    }	
		

	
	


}
