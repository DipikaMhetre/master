package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.purpleaid.beans.Account;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Account_IF;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class AccountImpl implements Account_IF {

	@Override
	public String bl_getAccount(int i) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String bl_getAllAccountList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
	    String json=null;
	    int status =444;
	    List <Account> accountList = null;
	    Connection con = null;
	    String query = null;
	    ResultSet rs = null;
	    CallableStatement callableStatement = null;
	    JdbcConnection JdbcConnectionObj = null;
	   
	    try {
	    	
	    	util= new Util_json();
	    	accountList=new ArrayList<Account>();
	    	
	    	//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
	    	
	    	query="{call getAccountList(?,?,?,?)}";
	    	
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
		    		Account accObj = new Account();
		    		accObj.setAccountId(rs.getDouble("ID"));
		    		accObj.setAccountCode(rs.getString("acCode"));
		    		accObj.setAccountDescription(rs.getString("description"));
		    		accObj.setAccountType(rs.getString("acType"));
		    		if(rs.getInt("flgActive")==1){
		    			accObj.setAccountActiveFlag(true);
		    		}else{
		    			accObj.setAccountActiveFlag(false);
		    		}
		    		accountList.add(accObj);
		    	} 
			}
	     json = util.util_makeJson(accountList);
	    
	    }catch (Exception e) {
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

			}
	    }
	    return json;
	}

	@Override
	public String bl_setAccount(String reqObj) throws Exception {
		// TODO Auto-generated method stub
		return null;
	}
}
