package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.Route;
import com.purpleaid.beans.RouteAreaRegion;
import com.purpleaid.interfaces.Route_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class RouteImpl implements Route_IF {

	@Override
	public String bl_getRoute(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllRouteList(PurpleaidRequest reqObj) throws Exception {
		// TODO Auto-generated method stub
		JdbcConnection JdbcConnectionObj = null;
	    Util_json util= null;
		String json=null;
		int status =444;
		List<Route> routeList = null;
		Connection con = null;
		
		String query = null;
		ResultSet rs = null;
	    CallableStatement callableStatement = null;
	    try {
	    	util= new Util_json();
	    	routeList=new ArrayList<Route>();
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
				    	    
			query="{call getAllRouteList(?,?,?,?)}";
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
			}
	   json = util.util_makeJson(routeList);
	    
	    } catch (Exception e) {
	    	try {
	    		con.close();
	    		throw new Exception("\nError 20000101: "+e.getMessage()+"->"+status);
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 20000101: "+e.getMessage()+"->"+status);
	    	}
	    }
	    return json;
		
		
		
	}

	@Override
	public String bl_setRoute(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		Route Obj = null;
		int status = 0;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Route>() {});		
			query = "{call InsertUpdateRouteMaster   (?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getIdpk());
			cstatement.setString(2, Obj.getRrID());
			cstatement.setString(3, Obj.getRouteDescription());
			cstatement.setBoolean(4, Obj.isRouteActiveFlag());
			cstatement.setString(5, reqObj.getUserId());
			cstatement.setString(6, reqObj.getToken());
			cstatement.setInt(7, reqObj.getInsertPermissionID());
			cstatement.setInt(8, reqObj.getUpdatePermissionID());
			cstatement.setInt(9, reqObj.getDeletePermissionID());
			cstatement.setDouble(10, status);
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(10, java.sql.Types.INTEGER);
			cstatement.execute();
			double output = cstatement.getDouble(1);
			
            status = cstatement.getInt(10);
			
			if(status == 0){
				throw new Exception("User is not Authorized");
			}else if(status == 1){
				throw new Exception("No Permission");
			}else{
			
					System.out.println("Route code in inserted/updated "+output);
					
					
					String query2="{call deleteRouteArea(?,?,?,?,?)}";
					cstatement = con.prepareCall(query2);
					
					if(Obj.getIdpk() == 0){
						cstatement.setDouble(1, output);
					}else{
					cstatement.setDouble(1, Obj.getIdpk());
					}
					cstatement.setString(2, reqObj.getUserId());
					cstatement.setString(3, reqObj.getToken());
					
					if( Obj.getIdpk() == 0){ 
						cstatement.setInt(4, reqObj.getInsertPermissionID());
				    }else{
				    	cstatement.setInt(4, reqObj.getUpdatePermissionID());
				    }
					cstatement.setDouble(5, status);
					
					cstatement.registerOutParameter(5, java.sql.Types.INTEGER);
					cstatement.executeUpdate();
					
					status = cstatement.getInt(5);
					
					if(status == 0){
						throw new Exception("User is not Authorized");
					}else if(status == 1){
						throw new Exception("No Permission");
					}else{ 
										
						System.out.println("You have inserted key=="+Obj.getRouteID());
										
						String query3="{call  InsertRouteAreaMaster   (?,?,?,?,?,?)}";
						cstatement = con.prepareCall (query3);
						
						RouteAreaRegion raObj = new RouteAreaRegion();
						for(int i=0;i<Obj.getRarList().size();i++){ 
							raObj = Obj.getRarList().get(i);
							if(Obj.getIdpk() == 0){
								cstatement.setDouble(1, output);
							}else{
							cstatement.setDouble(1, Obj.getIdpk());
							}
							cstatement.setDouble(2, raObj.getRarAreaID());
							cstatement.setString(3, reqObj.getUserId());
							cstatement.setString(4, reqObj.getToken());
							
							if( Obj.getIdpk() == 0){ 
								cstatement.setInt(5, reqObj.getInsertPermissionID());
						    }else{
						    	cstatement.setInt(5, reqObj.getUpdatePermissionID());
						    }
							cstatement.setDouble(6, status);
							cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
							cstatement.execute();
							status = cstatement.getInt(6);
							if(status == 0){
								throw new Exception("User is not Authorized");
							}else if(status == 1){
								throw new Exception("No Permission");
							}else{ 
							  con.commit();
							 
							}
						
						
						
						}
						
						 Obj.setIdpk(output);
							Obj.setRecid(output);
					}		
						
			}
			json = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 20000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 20000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 20000102: "+e.getMessage());
				}

			}

		} 
		return json;
	}

	@Override
	public String bl_setRouteList(PurpleaidRequest reqObj) throws Exception {
		//Util_json util= null;
		String json=null;
		int status =0;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		List<Route> ObjList = null;
		JdbcConnection JdbcConnectionObj = null;
		try{
			//util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			ObjList = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<List<Route>>() {});	
			
			query = "{call updateRouteLockSmith (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			for(int i=0;i<ObjList.size();i++){
				Route Obj = new Route();
				Obj = ObjList.get(i);
				cstatement.setDouble(1, Obj.getRecid());
				cstatement.setBoolean(2, Obj.isRouteActiveFlag());
				cstatement.setString(3, reqObj.getUserId());
				cstatement.setString(4, reqObj.getToken());
				cstatement.setInt(5, reqObj.getUpdatePermissionID());
				cstatement.setInt(6, status);
				
				cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
				cstatement.execute();	
			
				status= cstatement.getInt(6);
				
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{  
					con.commit();
				}
				
			}
			
			
			
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 20000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 20000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 20000102: "+e.getMessage());
				}

			}

		  }
		return json;
	}

}
