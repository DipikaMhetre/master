package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Content;
import com.purpleaid.beans.ContentType;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Content_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class ContentImpl implements Content_IF {

	@Override
	public String bl_getContent(double id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_setContent(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		int status =444;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		Content Obj = null;
		 JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<Content>() {});		
			query = "{call InsertUpdateContentMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			System.out.println("Stored Procedure InsertUpdateCustomerMaster Called");
			
			cstatement.setDouble(1, Obj.getContentId());
			cstatement.setString(2, Obj.getContentName());
			cstatement.setString(3, Obj.getContentDesc());
			
			cstatement.setDouble(4, Obj.getContentDPCOLiquidRate());
			cstatement.setDouble(5, Obj.getContentDPCOLiquidUnit());
			
			cstatement.setDouble(6, Obj.getContentDPCOTabletRate());
			cstatement.setDouble(7, Obj.getContentDPCOTabletUnit());
			
			cstatement.setDouble(8, Obj.getContentDPCOInjectionRate());
			cstatement.setDouble(9, Obj.getContentDPCOInjectionUnit());
			cstatement.setBoolean(10, Obj.isContentActiveFlag());
			
			cstatement.setString(11, reqObj.getUserId());
			cstatement.setString(12, reqObj.getToken());
			cstatement.setInt(13, reqObj.getInsertPermissionID());
			cstatement.setInt(14, reqObj.getUpdatePermissionID());
			cstatement.setInt(15, reqObj.getDeletePermissionID());
			cstatement.setInt(16, status);
			
			cstatement.registerOutParameter(16, java.sql.Types.INTEGER); 
            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);           
			cstatement.execute();
			
			
			Double output = cstatement.getDouble(1);
			status  = cstatement.getInt(16);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				System.out.println("Content id inserted/updated"+output);
				Obj.setContentId(output);
				
				String query2="{call deleteContentType(?,?,?,?,?)}";
				cstatement = con.prepareCall(query2);
				cstatement.setDouble(1, Obj.getContentId());
				cstatement.setString(2, reqObj.getUserId());
				cstatement.setString(3, reqObj.getToken());
				
				if( Obj.getContentId() == 0){ 
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
							
					System.out.println("You have Deleted contentType for contentTypeId=="+Obj.getContentId());
					
					String query3="{call  insertContentType(?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query3);
					
					ContentType conTypeObj = new ContentType();
					for(int i=0;i<Obj.getContentTypeList().size();i++){ 
						conTypeObj = Obj.getContentTypeList().get(i);
						cstatement.setDouble(1, conTypeObj.getId());
						
						if(Obj.getContentId() == 0){
							cstatement.setDouble(2, output);
						}else{
							cstatement.setDouble(2, Obj.getContentId());
						}
						
						cstatement.setDouble(3, conTypeObj.getContentTypeId());
						cstatement.setString(4, reqObj.getUserId());
						cstatement.setString(5, reqObj.getToken());
						if( Obj.getContentId() == 0){ 
							cstatement.setInt(6, reqObj.getInsertPermissionID());
					    }else{
					    	cstatement.setInt(6, reqObj.getUpdatePermissionID());
					    }
						cstatement.setDouble(7, status);
						cstatement.execute();
						cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
						
						status = cstatement.getInt(7);
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
				throw new Exception("\nError 14000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 14000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 14000102: "+e.getMessage()+"->"+status);
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
		return response;
	}

	@Override
	public String bl_getAllContentList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		 JdbcConnection JdbcConnectionObj = null;
		List<Content> contentList = null;
		Connection con = null;
		
		String query = null;
		ResultSet rs = null;
		CallableStatement callableStatement= null;
		int status =444;
		 
		try {
			util= new Util_json();
			contentList=new ArrayList<Content>();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
		
		
			query ="{call getAllContentList(?,?,?,?)}";
			callableStatement = con.prepareCall(query);
			callableStatement.setString(1, reqObj.getUserId());
			callableStatement.setString(2, reqObj.getToken());
			callableStatement.setInt(3, reqObj.getViewPermissionID());
			callableStatement.setDouble(4, status);
			
			callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
				double loopConID = 0;
				Content conObj = new Content();
			    List<ContentType> contentTypeList = new ArrayList<ContentType>();
	
				while(rs.next()){
	
				if 	(loopConID != rs.getDouble("ID")){
					
					conObj = new Content();
					contentTypeList = new ArrayList<ContentType>();
	
					
					conObj.setContentId(rs.getDouble("ID"));
					conObj.setRecid(rs.getDouble("ID"));
					conObj.setContentName(rs.getString("Name"));
					conObj.setContentDesc(rs.getString("Description"));
					
					conObj.setContentDPCOLiquidRate(rs.getDouble("DPCOliquidRate"));
					conObj.setContentDPCOLiquidUnit(rs.getDouble("DPCOliquidUnit"));
					
					conObj.setContentDPCOTabletRate(rs.getDouble("DPCOtabletRate"));
					conObj.setContentDPCOTabletUnit(rs.getDouble("DPCOtabletUnit"));
					
					conObj.setContentDPCOInjectionRate(rs.getDouble("DPCOinjectionRate"));
					conObj.setContentDPCOInjectionUnit(rs.getDouble("DPCOinjectionUnit"));
					
					conObj.setContentTypeId(rs.getDouble("ctID"));
				    
					conObj.setContentActiveFlag(rs.getBoolean("flgActive"));
				    
					//Content Type
				 	ContentType conTypeObj = new ContentType();
		    		
				 	conTypeObj.setId(rs.getDouble("CTID"));
				 	conTypeObj.setContentId(rs.getDouble("contentID"));
				 	conTypeObj.setRecid(rs.getDouble("contentID"));
				 	conTypeObj.setContentTypeId(rs.getDouble("contentTypeID"));
				 	conTypeObj.setContentTypeName(rs.getString("contentTypeName"));
				 	conTypeObj.setContentTypeDescription(rs.getString("contentTypeDescription"));
				 	if(rs.getInt("contentFlag")==1){
				 		conTypeObj.setContentTypeFlag(true);
		    		}else{
		    			conTypeObj.setContentTypeFlag(false);
		    		}
				 	double output = conTypeObj.getContentId();
	    		    if(output == 0)
	        		{
	    		    	conObj.setContentTypeList(contentTypeList);
	    		    	contentList.add(conObj);
	    		   	}else{
	    		   		contentTypeList.add(conTypeObj);	
	    		   		conObj.setContentTypeList(contentTypeList);
	    		    	contentList.add(conObj);
	    		    }
				}else{ // same content ID
					//Content Type
					ContentType conTypeObj = new ContentType();
		    		
					conTypeObj.setId(rs.getDouble("CTID"));
				 	conTypeObj.setContentId(rs.getDouble("contentID"));
				 	conTypeObj.setRecid(rs.getDouble("contentID"));
				 	conTypeObj.setContentTypeId(rs.getDouble("contentTypeID"));
				 	conTypeObj.setContentTypeName(rs.getString("contentTypeName"));
				 	conTypeObj.setContentTypeDescription(rs.getString("contentTypeDescription"));
				 	if(rs.getInt("contentFlag")==1){
				 		conTypeObj.setContentTypeFlag(true);
		    		}else{
		    			conTypeObj.setContentTypeFlag(false);
		    		}
				 	contentTypeList.add(conTypeObj);
				 	conObj.setContentTypeList(contentTypeList);
	    	    	
				}// End loopConID
		    			
				loopConID = rs.getDouble("ID");  //set loopConID for comparison
	
				} // while loop	
				
			}
			json = util.util_makeJson(contentList);
		
		} catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 14000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 14000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 14000101: "+e.getMessage()+"->"+status);
				}

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
	public String bl_getAllContentTypeList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
	    String json=null;
	    JdbcConnection JdbcConnectionObj = null;
	    List <ContentType> contentTypeList = null;
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement callableStatement =null;
	    int status =444;
	    
	    try {
	    	util= new Util_json();
	    	contentTypeList=new ArrayList<ContentType>();
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    
	    	
	    	query="{call getAllContentTypeList(?,?,?,?)}";
	    	callableStatement = con.prepareCall(query);
			callableStatement.setString(1, reqObj.getUserId());
			callableStatement.setString(2, reqObj.getToken());
			callableStatement.setInt(3, reqObj.getViewPermissionID());
			callableStatement.setDouble(4, status);
			
			callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 	     
		    	while(rs.next()){
		    		ContentType cObj = new ContentType();
		    	
		    		/*cObj.setId(rs.getDouble("CTID"));
		    		cObj.setContentId(rs.getDouble("CID"));
		    		cObj.setContentTypeId(rs.getDouble("CTID"));
		    		cObj.setContentTypeName(rs.getString("Type"));*/
		    		cObj.setContentTypeId(rs.getDouble("ID"));
		    		cObj.setRecid(rs.getDouble("ID"));
		    		cObj.setContentTypeName(rs.getString("Type"));
		    		cObj.setContentTypeDescription(rs.getString("Description"));
		    		cObj.setContentTypeFlag(false);
		    		/*if(rs.getInt("contentFlag")==1){
		    			cObj.setContentFlag(true);
		    		}else{
		    			cObj.setContentFlag(false);
		    		}*/
		    		contentTypeList.add(cObj);	
		     	} 
			}
	     json = util.util_makeJson(contentTypeList);
	    
	    } catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
				}

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
	public String bl_getContentList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		List<Content> contentList = null;
		Connection con = null;
		CallableStatement callableStatement = null;
		String query = null;
		ResultSet rs = null;
		int status =444;
		try {
			contentList = new ArrayList<Content>();
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			query="{call getallcontent(?,?,?,?)}";
			callableStatement = con.prepareCall(query);
			callableStatement.setString(1, reqObj.getUserId());
			callableStatement.setString(2, reqObj.getToken());
			callableStatement.setInt(3, reqObj.getViewPermissionID());
			callableStatement.setDouble(4, status);
			
			callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs=callableStatement.executeQuery();
			
			 status = callableStatement.getInt(4);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{ 
				
				// retrieve value 
				while(rs.next()){
					Content content = new Content();
					content.setContentId(rs.getDouble("ID"));
					content.setRecid(rs.getDouble("ID"));
					content.setContentName(rs.getString("Name"));
					content.setContentDesc(rs.getString("Description"));
					content.setContentActiveFlag(rs.getBoolean("flgActive"));
					content.setContentPresence(false);
					content.setContentTypes(rs.getString("contentTypes"));
					
					contentList.add(content);
					
				}
				
			}
			
			json = util.util_makeJson(contentList);	
		}catch (Exception e) {
	    	try {	
				con.close();
				throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 30000101: "+e.getMessage()+"->"+status);
				}

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
	
}
