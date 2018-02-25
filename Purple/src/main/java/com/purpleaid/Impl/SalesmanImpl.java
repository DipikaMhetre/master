package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.City;
import com.purpleaid.beans.Salesman;
import com.purpleaid.beans.State;
import com.purpleaid.interfaces.Salesman_IF;
import com.purpleaid.utilities.DataSource;

import com.purpleaid.utilities.Util_json;

public class SalesmanImpl implements Salesman_IF {
	@Override
	public String bl_getAllSalesmanList() throws Exception {
		Util_json util= null;
	    String json=null;
	   
	    List <Salesman> salesmanList = null;
	    Connection con = null;
	    Statement statement = null;
	    String query = null;
	    ResultSet rs = null;
	    
	    try {
	    	util= new Util_json();
	    	salesmanList=new ArrayList<Salesman>();
	    	con = DataSource.getInstance().getConnection();
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
	    		sObj.setSalesmanEmergencyPhone(rs.getDouble("emergencyPhone"));
	    		sObj.setSalesmanEmergencyLandline(rs.getInt("emergencyLandline"));
	    		
	    		salesmanList.add(sObj);	
	     	} 
	     
	     json = util.util_makeJson(salesmanList);
	    
	    } catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 30000101: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 30000101: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 30000101: "+e.getMessage());
				}

			}
	    }
	    return json;
	}

	@Override
	public String bl_setSalesman(String reqObj) throws Exception {
		Util_json util= null;
		String json = null;
		Salesman Obj = null;
		
		
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj, new TypeReference<Salesman>() {});
			query = "{call InsertUpdateSalesman    (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getSalesmanID());
			cstatement.setString(2, Obj.getSalesmanName());
			cstatement.setDouble(3, Obj.getSalesmanPhone());
			cstatement.setDouble(4, Obj.getSalesmanFax());
			cstatement.setString(5, Obj.getAddressLine1());
			cstatement.setString(6, Obj.getAddressLine2());
			cstatement.setInt(7,Obj.getSalesmanLandlineNumber());
			cstatement.setString(8, Obj.getSalesmanEmail());
			cstatement.setDouble(9, Obj.getSalesmanCity().getCityId());
			cstatement.setString(10, Obj.getSalesmanRouteID());
			cstatement.setString(11,Obj.getSalesmanEmergenyContactPerson());
			cstatement.setString(12, Obj.getSalesmanEmergencyAddressLine1());
			cstatement.setString(13, Obj.getSalesmanEmergencyAddressLine2());
			cstatement.setDouble(14, Obj.getSalesmanEmergencyPhone());
			cstatement.setInt(15, Obj.getSalesmanEmergencyLandline());
			cstatement.setDouble(16, Obj.getSalesmanEmergencyFax());
			cstatement.setString(17, Obj.getSalesmanEmergencyEmail());
			cstatement.setBoolean(18, Obj.isSalesmanActiveFlag());
			cstatement.setBoolean(19, Obj.isSalesmanLockFlag());
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			String output = cstatement.getString(1);
			System.out.println("salesman code in insert update"+output);
					
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 30000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 30000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 30000102: "+e.getMessage());
				}

			}

			

		} 
		return json;
	}

	@Override
	public String bl_getSalesman(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_setSalesmanList(String reqObj) throws Exception {
		//Util_json util= null;
		String json=null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Salesman> ObjList = null;
		try{
			//util= new Util_json();
			con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj, new TypeReference<List<Salesman>>() {});	
			
			query = "{call updateSalesmanLockSmith (?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Salesman Obj = new Salesman();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isSalesmanActiveFlag());
				cstatement.setBoolean(3, Obj.isSalesmanLockFlag());
				cstatement.addBatch();
			}
			
			
			cstatement.executeBatch();	
			con.commit();
			
			
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 30000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 30000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 30000102: "+e.getMessage());
				}

			}

		  }
		return json;
	}

	

}
