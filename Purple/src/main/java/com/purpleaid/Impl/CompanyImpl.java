package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.City;
import com.purpleaid.beans.Company;
import com.purpleaid.beans.Division;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.State;
import com.purpleaid.beans.Supplier;
import com.purpleaid.interfaces.Company_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class CompanyImpl implements Company_IF {
	@Override
	public String bl_getAllCompanyList(PurpleaidRequest reqObj) throws Exception {
	
		Util_json util= null;
	    String json=null;
	    int status =444;
	    List <Company> companyList = null;
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement cstatement = null;
	    JdbcConnection JdbcConnectionObj = null;
	    try {
	    	
	    	util= new Util_json();
	    	companyList=new ArrayList<Company>();
	    	
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
	    	query="{call getAllcompanyList(?,?,?,?)}";
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
		    		Company compObj = new Company();
		    		compObj.setCompanyId(rs.getDouble("ID"));
		    		compObj.setRecid(rs.getDouble("ID"));
		    		compObj.setCompanyName(rs.getString("Name"));
		    		compObj.setEdeCode(rs.getString("EdeCode"));
		    		compObj.setCompanyCode(rs.getString("Code"));
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
			}
	     json = util.util_makeJson(companyList);
	    
	    }catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
				}

			}finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			}
	    }
	    return json;
	}
	
	@Override
	public String bl_setCompany2(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		Company Obj = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Company>() {});	
			
			query = "{call insertUpdateCompanyMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getCompanyId());
			cstatement.setString(2, Obj.getCompanyName());
			cstatement.setString(3, Obj.getEdeCode());
			cstatement.setString(4, Obj.getCompanyCode());
			cstatement.setString(5, Obj.getCompanyRemarks());
			cstatement.setString(6, Obj.getCompanyAddressLine1());
			cstatement.setString(7, Obj.getCompanyAddressLine2());
			cstatement.setDouble(8, Obj.getCompanyCity().getCityId());
			cstatement.setString(9, Obj.getCompanyContactPerson());
			cstatement.setDouble(10, Obj.getCompanyPhone());
			cstatement.setDouble(11, Obj.getCompanyFax());
			cstatement.setString(12, Obj.getCompanyEmail());
			cstatement.setInt(13, Obj.getCompanyStockCalculationMode());
			cstatement.setDouble(14, Obj.getCompanyOrderLimit());
			cstatement.setInt(15, Obj.getCompanyPaymentTerms());
			cstatement.setInt(16, Obj.getCompanyPaymentDays());
			cstatement.setBoolean(17, Obj.isCompanyActiveFlag());
			cstatement.setBoolean(18, Obj.isCompanyEmailPOFlag());
			cstatement.setDouble(19, Obj.getCompanyActiveSupplierId());
			cstatement.setString(20, reqObj.getUserId());
			cstatement.setString(21, reqObj.getToken());
			cstatement.setInt(22, reqObj.getInsertPermissionID());
			cstatement.setInt(23, reqObj.getUpdatePermissionID());
			cstatement.setInt(24, reqObj.getDeletePermissionID());
			cstatement.setDouble(25, status);
			
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(25, java.sql.Types.INTEGER);
			cstatement.execute();
			Double output = cstatement.getDouble(1);
			status = cstatement.getInt(25);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				con.commit();
				Obj.setCompanyId(output);
				System.out.println("company idin insert update"+output);
			}
			
			json = util.util_makeJson(Obj);
			
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

			}finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			}

		  }
		return json;
	}

	@Override
	public String bl_getCompany2(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_setCompany2List(PurpleaidRequest reqObj) throws Exception {
		 JdbcConnection JdbcConnectionObj = null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Company> ObjList = null;
		
		try{
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Company>>() {});	
			
			query = "{call updateCompanyLockSmith (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Company Obj = new Company();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isCompanyActiveFlag());
				cstatement.setString(3, reqObj.getUserId());
				cstatement.setString(4, reqObj.getToken());
				cstatement.setInt(5, reqObj.getUpdatePermissionID());
				cstatement.setInt(6, status);
				
				cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
				cstatement.execute();	
			
				status= cstatement.getInt(6);
				
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

			}finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			}

		  }
		return json;
	}

	@Override
	public String bl_getAllCompanyListEnclosesDivisionList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Company> companyList = null;
		 JdbcConnection JdbcConnectionObj = null;
		
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			companyList =new ArrayList<Company>();
			String query = "{call getCompanyDivision (?,?,?,?)}";
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
				double loopCompanyID = 0;
				Company cObj = new Company(); 
				List<Division> divisionList = new ArrayList<Division>();
							
			    while(rs.next()){
			    	
			    	if 	(loopCompanyID != rs.getDouble("cID")){
			    		
			    		cObj = new Company();
				    	divisionList = new ArrayList<Division>();
				    					    	
				    	//company details 
				    	cObj.setCompanyId(rs.getDouble("cID"));
				    	cObj.setCompanyName(rs.getString("cName"));
				    					    					    	
				    	Division dObj =new Division();
				    	dObj.setDivisionId(rs.getDouble("DID"));
				    	dObj.setRecid(rs.getDouble("DID"));
				    	dObj.setDivisionName(rs.getString("dName"));
				    	dObj.setDivisionCompanyName(rs.getString("cName"));
				    	dObj.setDivisionCompanyId(rs.getDouble("DID"));
					    
						divisionList.add(dObj);
					    cObj.setCompanyDivisionsList(divisionList);
					    companyList.add(cObj);
												
				    	}
				    	
			    	else{ // same company ID
			    		Division dObj =new Division();
				    	dObj.setDivisionId(rs.getDouble("DID"));
				    	dObj.setRecid(rs.getDouble("DID"));
				    	dObj.setDivisionName(rs.getString("dName"));
				    	dObj.setDivisionCompanyName(rs.getString("cName"));
				    	dObj.setDivisionCompanyId(rs.getDouble("DID"));
					 					    
						divisionList.add(dObj);
					    cObj.setCompanyDivisionsList(divisionList);
			    		
								
					}// End loopCompanyID
			    			
			    	loopCompanyID = rs.getDouble("cID");  //set loopCompanyID for comparison
			    			    	
					} // while loop	
			}
		    json = util.util_makeJson(companyList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 18000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 18000101: "+e.getMessage()+"->"+status);
		    	}
		   }finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			} 
		    
		    return json;
	}

	@Override
	public String bl_getAllActiveNonActiveCompanyList(PurpleaidRequest reqObj) throws Exception {
		
				Util_json util= null;
			    String json=null;
			   
			    List <Company> companyList = null;
			    Connection con = null;
			    String query = null;
			    ResultSet rs = null;
			    JdbcConnection JdbcConnectionObj = null;
				
				CallableStatement cstatement = null;
				int status =444;
			    try {
			    	
			    	util= new Util_json();
			    	companyList=new ArrayList<Company>();
			    	//con = DataSource.getInstance().getConnection();
			    	JdbcConnectionObj = new JdbcConnection();
			    	con=JdbcConnectionObj.getConnection();
			    	query="{call getAllActiveNonActiveCompanyList(?,?,?,?)}";
			    	cstatement = con.prepareCall(query);
			    	cstatement.setString(1, reqObj.getUserId());
			    	cstatement.setString(2, reqObj.getToken());
			    	cstatement.setInt(3, reqObj.getViewPermissionID());
			    	cstatement.setInt(4, status);
					rs = cstatement.executeQuery();
							
					cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
					status = cstatement.getInt(4);
							
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{						
					   
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
					}
			     json = util.util_makeJson(companyList);
			    
			    }catch (Exception e) {
			    	try {	
						con.close();
						throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
					} catch (Exception e1) {
						try {
							con.close();
							throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
						} catch (Exception e2) {
							throw new Exception("\nError 50000101: "+e.getMessage()+"->"+status);
						}

					}finally{
						if(con!=null){
							con.close();
						}
						
						if(cstatement!=null){
							cstatement.close();
						}
						
					}
			    }
			    return json;
	}

	@Override
	public String bl_getAllCompanyListEmbeddedSupplierList(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		String json=null;
		CallableStatement cstatement = null;
		Connection con = null;
		ResultSet rs = null;
		List<Company> companySupplierList = null;
		int status =444;
		 JdbcConnection JdbcConnectionObj = null;
		try {
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			companySupplierList = new ArrayList<Company>();
			
		
			String query2 = "{call getSupplierBycompany(?,?,?,?)}";
			cstatement = con.prepareCall(query2);
			cstatement.setString(1, reqObj.getUserId());
	    	cstatement.setString(2, reqObj.getToken());
	    	cstatement.setInt(3, reqObj.getViewPermissionID());
	    	cstatement.setInt(4, status);
			rs = cstatement.executeQuery();
					
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = cstatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{			
				double loopCompanyID = 0;
				Company compObj = new Company();
			    List<Supplier> supplierList = new ArrayList<Supplier>();
					
				while(rs.next()){
					
					if 	(loopCompanyID != rs.getDouble("CID")){
						compObj = new Company();
						supplierList = new ArrayList<Supplier>();
						
						
			    		compObj.setCompanyId(rs.getDouble("CID"));
			    		compObj.setCompanyName(rs.getString("companyName"));
			    		
			    		Supplier sObj = new  Supplier();
			    		sObj.setSupplierId(rs.getDouble("SID"));
			    		sObj.setSupplierName(rs.getString("supplierName"));
			    		
			    		supplierList.add(sObj);
			    		compObj.setCompanySuppliersList(supplierList);
	    		   		companySupplierList.add(compObj);
		    		
					}
					else{
						Supplier sObj = new  Supplier();
			    		sObj.setSupplierId(rs.getDouble("SID"));
			    		sObj.setSupplierName(rs.getString("supplierName"));
			    		
			    		supplierList.add(sObj);
			    		compObj.setCompanySuppliersList(supplierList);
					}
					loopCompanyID = rs.getDouble("CID");  //set loopcustID for comparison
				}
			}
			 json = util.util_makeJson(companySupplierList);
		} catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000101: "+e.getMessage()+"->"+status);
				}

			}finally{
				if(con!=null){
					con.close();
				}
				
				if(cstatement!=null){
					cstatement.close();
				}
				
			}
	    }
		
		return json;
	}

}
