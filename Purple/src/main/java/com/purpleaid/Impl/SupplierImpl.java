package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.City;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.State;
import com.purpleaid.beans.Supplier;
import com.purpleaid.interfaces.Supplier_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class SupplierImpl implements Supplier_IF {

	@Override
	public String bl_getAllSupplierList(PurpleaidRequest reqObj) throws Exception {
		JdbcConnection JdbcConnectionObj = null;
		Util_json util= null;
		String json=null;
		int status =444;
		List<Supplier> supplierList = null;
		Connection con = null;
		
		String query = null;
		ResultSet rs = null;
		CallableStatement callableStatement = null;
		try {
			util= new Util_json();
			supplierList=new ArrayList<Supplier>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
						
			query="call getAllSupplierList(?,?,?,?)";
			callableStatement = con.prepareCall(query);
	    	callableStatement.setString(1, reqObj.getUserId());
	    	callableStatement.setString(2, reqObj.getToken());
	    	callableStatement.setInt(3, reqObj.getViewPermissionID());
	    	callableStatement.setDouble(4, status);
	    	
	    	callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
	    	rs = callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{     
			
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
			}
			json = util.util_makeJson(supplierList);
		
		} catch (Exception e) {
			try {
	    		con.close();
	    		throw new Exception("\nError 70000101: "+e.getMessage()+"->"+status);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 70000101: "+e.getMessage()+"->"+status);
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
	public String bl_setSupplier(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		Supplier Obj = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Supplier>() {});		
			query = "{call InsertUpdateSupplierMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getSupplierId());
			cstatement.setString(2, Obj.getSupplierOtherInfo());
			cstatement.setDouble(3, Obj.getSupplierCompanyId());
			cstatement.setString(4, Obj.getSupplierName());
			cstatement.setString(5, Obj.getSupplierAccountCode());
			cstatement.setString(6, Obj.getSupplierAccountName());
			cstatement.setString(7, Obj.getSupplierRemark());
			cstatement.setString(8, Obj.getSupplierTaxID());
			cstatement.setString(9, Obj.getSupplierLedgerType());
			cstatement.setString(10, Obj.getSupplierAccountGroup());
			cstatement.setDouble(11,Obj.getSupplierOpeningBalance());
			cstatement.setInt(12, Obj.getSupplierOpeningBalanceType());
			cstatement.setInt(13, Obj.getSupplierCreditPeriod());
			cstatement.setString(14, Obj.getSupplierAddressLine1());
			cstatement.setString(15, Obj.getSupplierAddressLine2());
			cstatement.setDouble(16, Obj.getSupplierCity().getCityId());
			cstatement.setString(17, Obj.getSupplierContactPerson());
			cstatement.setDouble(18, Obj.getSupplierPhone());
			cstatement.setDouble(19, Obj.getSupplierFax());
			cstatement.setString(20, Obj.getSupplierEmail());
			cstatement.setInt(21, Obj.getSupplierDeliveryTime());
			cstatement.setBoolean(22, Obj.isSupplierActiveFlag());
			cstatement.setBoolean(23,Obj.isSupplierOutStatePartyFlag());
			cstatement.setBoolean(24, Obj.isSupplierEmailPOFlag());
			cstatement.setBoolean(25, Obj.isSupplierSetAsDefaultFlag());
			cstatement.setString(26, reqObj.getUserId());
			cstatement.setString(27, reqObj.getToken());
			cstatement.setInt(28, reqObj.getInsertPermissionID());
			cstatement.setInt(29, reqObj.getUpdatePermissionID());
			cstatement.setInt(30, reqObj.getDeletePermissionID());
			cstatement.setDouble(31, status);
			
			
			
			cstatement.registerOutParameter(31, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.executeUpdate ();
			Double output = cstatement.getDouble(1);
           status = cstatement.getInt(31);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				Obj.setSupplierId(output);
				Obj.setRecid(output);
				System.out.println("supplier id in insert update"+output);			
				con.commit();
			}
			json = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
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
	public String bl_setSupplierList(PurpleaidRequest reqObj) throws Exception {
		//Util_json util= null;
		JdbcConnection JdbcConnectionObj = null;
		String json=null;
		int status = 444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Supplier> ObjList = null;
		try{
			//util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Supplier>>() {});	
			
			query = "{call updateSupplierLockSmith (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Supplier Obj = new Supplier();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isSupplierActiveFlag());
				cstatement.setString(3, reqObj.getUserId());
				cstatement.setString(4, reqObj.getToken());
				cstatement.setInt(5, reqObj.getUpdateLockSmithPermissionID());
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
				throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 70000102: "+e.getMessage()+"->"+status);
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
	public String bl_getAllActiveSupplierList(PurpleaidRequest reqObj) throws Exception {
		JdbcConnection JdbcConnectionObj = null;
		Util_json util= null;
		String json=null;
		int status = 444;
		List<Supplier> supplierList = null;
		Connection con = null;
		
		String query = null;
		ResultSet rs = null;
		CallableStatement callableStatement = null;
		try {
			util= new Util_json();
			supplierList=new ArrayList<Supplier>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			query="{call getAllActiveSupplierList(?,?,?,?)}";
			callableStatement = con.prepareCall(query);
	    	callableStatement.setString(1, reqObj.getUserId());
	    	callableStatement.setString(2, reqObj.getToken());
	    	callableStatement.setInt(3, reqObj.getViewPermissionID());
	    	callableStatement.setDouble(4, status);
	    	
	    	callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
	    	rs = callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{     
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
			}
			json = util.util_makeJson(supplierList);
		
		} catch (Exception e) {
			try {
	    		con.close();
	    		throw new Exception("\nError 70000101: "+e.getMessage()+"->"+status);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 70000101: "+e.getMessage()+"->"+status);
	    	}
		} finally{
			if(con!=null){
				DataSource.getInstance().closeConnection(con);
			}
			
			if(callableStatement!=null){
				DataSource.getInstance().closeCallableStatment(callableStatement);
			}
			
		}
		
		return json;
	}
	
	
}
