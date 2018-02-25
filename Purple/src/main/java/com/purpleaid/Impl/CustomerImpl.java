package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.City;
import com.purpleaid.beans.Customer;
import com.purpleaid.beans.CustomerLicences;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.State;
import com.purpleaid.interfaces.Customer_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class CustomerImpl implements Customer_IF {

	@Override
	public String bl_getCustomer(double id) {
		
		return null;
	}

	@Override
	public String bl_getAllCustomerList(PurpleaidRequest reqObj ) throws Exception {
		Util_json util= null;
		String json=null;
		List<Customer> customerList = null;
		Connection con = null;
		String query = null;
		ResultSet rs = null;
		CallableStatement cstatement3 = null;
		int status =444 ;
		 JdbcConnection JdbcConnectionObj = null;
		try {
			util= new Util_json();
			customerList=new ArrayList<Customer>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
					
			query ="{call getAllCustomerList(?,?,?,?)}";
			cstatement3 = con.prepareCall(query);
			cstatement3.setString(1, reqObj.getUserId());
			cstatement3.setString(2, reqObj.getToken());
			cstatement3.setInt(3, reqObj.getViewPermissionID());
			cstatement3.setDouble(4, status);
			
			cstatement3.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement3.executeQuery();
			
			 status = cstatement3.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
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
		    		clObj.setRecid(rs.getDouble("CLindex"));
		    		clObj.setCustomerLicenceNumber(rs.getDouble("cnum"));
		    		clObj.setCustomerLicenceID(rs.getDouble("ltype"));
		    		clObj.setCustomerLicenceType(rs.getString("lname"));
	    		    clObj.setCustomerLicenceStartDate(rs.getString("startDate"));
	    		    clObj.setCustomerLicenceEndDate(rs.getString("EndDate"));
	    		    clObj.setCustomerLicenceIndex(rs.getDouble("CLindex"));
					    			
	        		double output = clObj.getCustomerId();
	    		    if(output == 0)
	        		{
	    		    	cust.setCustomerLicenceList(customerLicenceList);  
	    	    		customerList.add(cust);
	    		   	}else{
	    		   		customerLicenceList.add(clObj);	
	    		   		cust.setCustomerLicenceList(customerLicenceList);  
	    		   		customerList.add(cust);
	    		    }
				}else{ // same customer ID
					//Customer license
				 	CustomerLicences clObj = new CustomerLicences();
		    		clObj.setCustomerId(rs.getDouble("custID"));
		    		clObj.setRecid(rs.getDouble("CLindex"));
		    		clObj.setCustomerLicenceNumber(rs.getDouble("cnum"));
	    		    clObj.setCustomerLicenceID(rs.getDouble("ltype"));
	    		    clObj.setCustomerLicenceType(rs.getString("lname"));
	    		    clObj.setCustomerLicenceStartDate(rs.getString("startDate"));
	    		    clObj.setCustomerLicenceEndDate(rs.getString("EndDate"));
	    		    clObj.setCustomerLicenceIndex(rs.getDouble("CLindex"));
	
	    		    customerLicenceList.add(clObj);
	    	    	cust.setCustomerLicenceList(customerLicenceList);  
		    		
				}// End loopCusID
		    			
				loopCustID = rs.getDouble("ID");  //set loopcustID for comparison
	
				} // while loop	
			
			}
			json = util.util_makeJson(customerList);
		
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

			}
	    }
		
		return json;
	}

	@Override
	public String bl_getAllCustomerListByArea(double areaId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllCustomerListBySalesman(double salesmanId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_setCustomer(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		Customer Obj = null;
		int status =444;
		 JdbcConnection JdbcConnectionObj = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Customer>() {});		
			query = "{call InsertUpdateCustomerMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			System.out.println("Stored Procedure InsertUpdateCustomerMaster Called");
			cstatement.setDouble(1, Obj.getCustomerId());
			cstatement.setString(2, Obj.getCustomerOtherInfo());
			cstatement.setString(3, Obj.getCustomerName());
            cstatement.setString(4, Obj.getCustomerAccountCode());
            cstatement.setString(5, Obj.getCustomerAccountName());
            cstatement.setString(6, Obj.getCustomerType());
            cstatement.setString(7, Obj.getCustomerArea());
            cstatement.setString(8, Obj.getCustomerSalesman());
            cstatement.setString(9, Obj.getCustomerRemark());
            cstatement.setDouble(10, Obj.getCustomerTaxId());
            cstatement.setString(11, Obj.getCustomerLedgerType());
            cstatement.setString(12, Obj.getCustomerAccountGroup());
            cstatement.setDouble(13, Obj.getCustomerOpeningBalance());
            cstatement.setString(14, Obj.getCustomerOpeningBalanceType());
            cstatement.setString(15, Obj.getCustomerCreditType());
            cstatement.setDouble(16, Obj.getCustomerCreditPeriod());
            cstatement.setString(17, Obj.getCustomerAddressLine1());
            cstatement.setString(18, Obj.getCustomerAddressLine2());
            cstatement.setDouble(19, Obj.getCustomerCity().getCityId());
            cstatement.setString(20, Obj.getCustomerContactPerson());
            cstatement.setDouble(21, Obj.getCustomerPhone());
            cstatement.setDouble(22, Obj.getCustomerFax());
            cstatement.setString(23, Obj.getCustomerEmail());
            cstatement.setBoolean(24, Obj.isCustomerActiveFlag());
            cstatement.setBoolean(25, Obj.isCustomerAutoEmailFlag());
            cstatement.setBoolean(26, Obj.isCustomerLockFlag());
            cstatement.setBoolean(27, Obj.isCustomerSubStockitsFlag());
            cstatement.setString(28, reqObj.getUserId());
            cstatement.setString(29, reqObj.getToken());
            cstatement.setInt(30, reqObj.getInsertPermissionID());
            cstatement.setInt(31, reqObj.getUpdatePermissionID());
            cstatement.setInt(32, reqObj.getDeletePermissionID());
            cstatement.setDouble(33, status);
            
            cstatement.registerOutParameter(33, java.sql.Types.INTEGER);
            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);           
			cstatement.execute();
			Double output = cstatement.getDouble(1);
            status  = cstatement.getInt(33);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				System.out.println("Customer id inserted/updated"+output);
				Obj.setCustomerId(output);
				
				String query2="{call deleteCustomerLicence(?,?,?,?,?)}";
				
				cstatement = con.prepareCall(query2);
				cstatement.setDouble(1, Obj.getCustomerId());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				
				if( Obj.getCustomerId() == 0){ 
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
							
					String query3="{call  insertCL (?,?,?,?,?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query3);
					
					CustomerLicences clObj = new CustomerLicences();
					for(int i=0;i<Obj.getCustomerLicenceList().size();i++){ 
						clObj = Obj.getCustomerLicenceList().get(i);
						
						cstatement.setDouble(1, clObj.getClID());
						cstatement.setDouble(2, Obj.getCustomerId());
						cstatement.setDouble(3, clObj.getCustomerLicenceID());
						cstatement.setDouble(4, clObj.getCustomerLicenceNumber());
						cstatement.setString(5, clObj.getCustomerLicenceStartDate());
						cstatement.setString(6, clObj.getCustomerLicenceEndDate());	
						cstatement.setDouble(7, clObj.getCustomerLicenceIndex());
						cstatement.setString(8, reqObj.getUserId());
						cstatement.setString(9, reqObj.getToken());
						
						if( Obj.getCustomerId() == 0){ 
							cstatement.setInt(10, reqObj.getInsertPermissionID());
					    }else{
					    	cstatement.setInt(10, reqObj.getUpdatePermissionID());
					    }
						cstatement.setDouble(11, status);
						cstatement.registerOutParameter(11, java.sql.Types.INTEGER);
						cstatement.execute();
						status = cstatement.getInt(11);	
						
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
	public String bl_setCustomerList(PurpleaidRequest reqObj) throws Exception {
		 JdbcConnection JdbcConnectionObj = null;
		String json=null;
		int status =444 ;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Customer> ObjList = null;
		try{
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Customer>>() {});	
			
			query = "{call updateCustomerLockSmith (?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Customer Obj = new Customer();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isCustomerActiveFlag());
	            cstatement.setBoolean(3, Obj.isCustomerLockFlag());
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
		return json;
	}

	@Override
	public String bl_getAllCustomerForRR(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status = 444;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Customer> customerList = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			customerList =new ArrayList<Customer>();
			String query = "{call getCustomerForRR (?,?,?,?)}";
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
			    	
			    	Customer cObj = new Customer();
			    	
			    	cObj.setCustomerId(rs.getDouble("CustID"));
			    	cObj.setRecid(rs.getDouble("CustID"));
			    	cObj.setCustomerName(rs.getString("cname"));
			    	cObj.setCustomerArea(rs.getString("areadescription"));
			    	cObj.setCustomerSalesman(rs.getString("SalesmanName"));
			    	customerList.add(cObj);
			    	
			    }
			} 
		    json = util.util_makeJson(customerList);
		    
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
	public String bl_getAllCustomerListForCN(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		List<Customer> customerList = null;
		Connection con = null;
		String query = null;
		ResultSet rs = null;
		CallableStatement cstatement3 = null;
		int status =444 ;
		JdbcConnection JdbcConnectionObj = null;
		try {
			util= new Util_json();
			customerList=new ArrayList<Customer>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
					
			query ="{call getAllCustomerListForCN(?,?,?,?)}";
			cstatement3 = con.prepareCall(query);
			cstatement3.setString(1, reqObj.getUserId());
			cstatement3.setString(2, reqObj.getToken());
			cstatement3.setInt(3, reqObj.getViewPermissionID());
			cstatement3.setDouble(4, status);
			
			cstatement3.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=cstatement3.executeQuery();
			
			 status = cstatement3.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
			
				Customer cust = new Customer();
			   
	
				while(rs.next()){
	
				
					
					cust = new Customer();
				   
	
				    cust.setCustomerId(rs.getDouble("customerID"));
					cust.setRecid(rs.getDouble("customerID"));
					cust.setCustomerName(rs.getString("custAccountName"));
					cust.setCustomerType(rs.getString("CustType"));
					cust.setCustomerArea(rs.getString("area"));
					cust.setCustomerSalesman(rs.getString("salesman"));
					cust.setCustomerAddressLine1(rs.getString("CustAddress"));
					cust.setCustomerContactPerson(rs.getString("customerName"));
		    		cust.setCustomerPhone(rs.getDouble("Phone"));
		    		
		    		customerList.add(cust);
	    		 }
				
	
							
			}
			json = util.util_makeJson(customerList);
		
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

			}
	    }
		
		return json;
	}

}
