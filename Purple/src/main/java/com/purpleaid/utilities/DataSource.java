package com.purpleaid.utilities;

import java.beans.PropertyVetoException;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;

import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DataSource {
	private static DataSource datasource;
	private static int connectionNo;
    private ComboPooledDataSource cpds = new ComboPooledDataSource();

    public DataSource() throws IOException, SQLException, PropertyVetoException {
      try{
    	cpds.setDriverClass("com.mysql.jdbc.Driver"); //loads the jdbc driver            
        cpds.setJdbcUrl( "jdbc:mysql://localhost/purpleaid" );
        cpds.setUser("root");                                  
        cpds.setPassword("");                                  
        	
        // the settings below are optional -- c3p0 can work with defaults
        cpds.setMinPoolSize(5);                                     
        cpds.setAcquireIncrement(5);
        cpds.setMaxPoolSize(20);
      }catch(Exception exception){
    	  exception.printStackTrace();
      }

    }

    public static DataSource getInstance() throws IOException, SQLException, PropertyVetoException {
    	 if (datasource == null) {
    		 connectionNo=0;
    		 System.out.println("========Data count set to zero=======");
             datasource = new DataSource();
             return datasource;
         } else {
             return datasource;
         }
    }

    public Connection getConnection() throws SQLException {
    	connectionNo++;
    	System.out.println("Connection Aquired at "+new Timestamp(new java.util.Date().getTime())+" Connection No.="+connectionNo);
        return cpds.getConnection();
       
    }
    
    public void closeConnection(Connection con){
    	try{
    	con.close();
    	}catch(Exception exe){
    		exe.printStackTrace();
    	}
    }
    
    public void closePreparedStatment(PreparedStatement prep){
    	try{
    		prep.close();
    	}catch(Exception exe){
    		exe.printStackTrace();
    	}
    }
    
    public void closeCallableStatment(CallableStatement callableStatement){
    	try{
    		callableStatement.close();
    	}catch(Exception exe){
    		exe.printStackTrace();
    	}
    }
    

}
