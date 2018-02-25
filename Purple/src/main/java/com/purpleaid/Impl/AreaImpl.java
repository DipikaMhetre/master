package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;

import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Area;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Area_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class AreaImpl implements Area_IF {
	
	@Override
	public String bl_getAllAreaList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
	    String json=null;
	    List <Area> areaList = null;
	    Connection con = null;
	    int status =444;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement callableStatement = null;
	    JdbcConnection JdbcConnectionObj = null;
	    
	    
	    try {
	    	util= new Util_json();
	    	areaList=new ArrayList<Area>();
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
	    	query="{call getAllAreaList(?,?,?,?)}";
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
		    		Area areaObj = new Area();
		    		areaObj.setAreaID(rs.getInt("ID"));
		    		areaObj.setAreaCode(rs.getString("code"));
		    		areaObj.setRecid(rs.getDouble("ID"));
		    		areaObj.setAreaDescription(rs.getString("description"));
		    		areaObj.setPincode(rs.getString("areaPincode"));
		    		areaObj.setAreaRegionID(rs.getDouble("regionID"));
		    		areaObj.setAreaRegionCode(rs.getString("regionCode"));
		    		areaObj.setAreaRegionDescription(rs.getString("regionDescription"));
		    		areaObj.setAreaActiveFlag(rs.getBoolean("flgActive"));
		    		   		
		    		areaList.add(areaObj);
				}
	    	} 
	     
	     json = util.util_makeJson(areaList);
	    
	    } catch (Exception e) {
	    	try {
	    		con.close();
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 40000101: "+e.getMessage()+"->"+status);
	    	}
	    } 
	    
	    return json;
	}


	@Override
	public String bl_setArea(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		
		Area Obj = null;
		int status =444;
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Area>() {});
			query = "{call InsertUpdateAreaMaster  (?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getAreaID());
			cstatement.setString(2, Obj.getAreaCode());
			cstatement.setString(3, Obj.getAreaDescription());
			cstatement.setString(4, Obj.getPincode());
			cstatement.setDouble(5, Obj.getAreaRegionID());
			cstatement.setBoolean(6, Obj.isAreaActiveFlag());
			cstatement.setString(7, reqObj.getUserId());
			cstatement.setString(8, reqObj.getToken());
			cstatement.setInt(9, reqObj.getInsertPermissionID());
			cstatement.setInt(10, reqObj.getUpdatePermissionID());
			cstatement.setInt(11, reqObj.getDeletePermissionID());
			cstatement.setInt(12, status);
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(12, java.sql.Types.INTEGER);
			
			cstatement.execute();
			
			double output = cstatement.getDouble(1);
			status= cstatement.getInt(12);
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{    
						
				Obj.setAreaID(output);
				Obj.setRecid(output);
				System.out.println("area code in insert update"+output);
				con.commit();
			}
			json = util.util_makeJson(Obj);
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
	public String bl_getArea(int i) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public String bl_setAreaList(PurpleaidRequest reqObj) throws Exception {

		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Area> ObjList = null;
		int status =444;
		try{
		
			JdbcConnectionObj = new JdbcConnection();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Area>>() {});	
			
			query = "{call updateAreaLockSmith (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Area Obj = new Area();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isAreaActiveFlag());
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

}
