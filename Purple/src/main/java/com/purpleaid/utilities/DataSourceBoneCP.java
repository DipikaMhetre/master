/*package com.purpleaid.utilities;


public class DataSourceBoneCP {

    private static DataSourceBoneCP datasource;
    private BoneCP connectionPool;

    public DataSourceBoneCP() throws IOException, SQLException, PropertyVetoException {
        try {
            // load the database driver (make sure this is in your classpath!)
            Class.forName("com.mysql.jdbc.Driver");
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

        try {
            // setup the connection pool using BoneCP Configuration
            BoneCPConfig config = new BoneCPConfig();
            // jdbc url specific to your database, eg jdbc:mysql://127.0.0.1/yourdb
            config.setJdbcUrl("jdbc:mysql://localhost/purpleaid");
            config.setUsername("root");
            config.setPassword("");
            config.setMinConnectionsPerPartition(5);
            config.setMaxConnectionsPerPartition(10);
            config.setPartitionCount(1);
            // setup the connection pool
            connectionPool = new BoneCP(config);
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }

    }

    public static DataSourceBoneCP getInstance() throws IOException, SQLException, PropertyVetoException {
        if (datasource == null) {
            datasource = new DataSourceBoneCP();
            return datasource;
        } else {
            return datasource;
        }
    }

    public Connection getConnection() throws SQLException {
    	;
   	 
    	 System.out.println("Connection Aquired at "+new Timestamp(new java.util.Date().getTime()));
        return this.connectionPool.getConnection();
       
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
*/