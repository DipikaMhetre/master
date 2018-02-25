package com.purpleaid.Impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.purpleaid.beans.MR;
import com.purpleaid.interfaces.MR_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class MRImpl implements MR_IF {

	@Override
	public String bl_setMR(String reqObj) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getMR(int i) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllMRList() throws Exception {
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
	    
	    }  catch (Exception e) {
	    	try {
	    		con.close();
	    		throw new Exception("\nError 90000101: "+e.getMessage());
	    	} catch(Exception e1) {
	    		throw new Exception("\nError 90000101: "+e.getMessage());
	    	}
	    } 
	    
	    return json;
	}

}
