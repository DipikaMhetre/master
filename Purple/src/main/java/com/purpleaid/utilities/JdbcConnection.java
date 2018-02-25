package com.purpleaid.utilities;

import java.sql.*;

public class JdbcConnection {
	static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	static final String DB_URL = "jdbc:mysql://localhost/purpleaid";
	
	static final String userName ="root";
	static final String pass = "";
	public Connection getConnection() throws SQLException {
		// TODO Auto-generated method stub
		
		Connection connection = null;
		
		try{
			Class.forName(JDBC_DRIVER);
			connection = DriverManager.getConnection(DB_URL, userName , pass);			
			// retrieve value
			
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			//e.printStackTrace();
		}
		return connection;
		
		
	}

}















