package com.purpleaid.bussinessLayer;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;

import java.sql.SQLException;



import com.purpleaid.beans.*;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;
public class Bl_Master {
	
	public String bl_SaveCompanyMaster(Company Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		//List <Company> companyList = null;
		//companyList=new ArrayList<Company>();
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			query = "{call InsertUpdateCompanymaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getCompanyId());
			cstatement.setString(2, Obj.getCompanyName());
			cstatement.setString(3, Obj.getEdeCode());
			cstatement.setString(4, Obj.getCompanyCode());
			cstatement.setString(5, Obj.getCompanyRemarks());
			cstatement.setString(6, Obj.getCompanyAddressLine1());
			cstatement.setString(7, Obj.getCompanyAddressLine2());
			cstatement.setDouble(8, Obj.getCompanyCity().getCityId());
			cstatement.setString(9, Obj.getCompanyContactPerson());
			cstatement.setDouble(10, Obj.getCompanyPhone());
			cstatement.setDouble(11, Obj.getCompanyFax());
			cstatement.setString(12, Obj.getCompanyEmail());
			cstatement.setInt(13, Obj.getCompanyStockCalculationMode());
			cstatement.setDouble(14, Obj.getCompanyOrderLimit());
			cstatement.setInt(15, Obj.getCompanyPaymentTerms());
			cstatement.setInt(16, Obj.getCompanyPaymentDays());
			cstatement.setBoolean(17, Obj.isCompanyActiveFlag());
			cstatement.setBoolean(18, Obj.isCompanyEmailPOFlag());
			cstatement.setDouble(19, Obj.getCompanyActiveSupplierId());
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			Double output = cstatement.getDouble(1);
			Obj.setCompanyId(output);
			System.out.println("company idin insert update"+output);
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			try {
				con.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		 } finally {
			   try {
			    con.close();
			   } catch(Exception e) {
			    e.printStackTrace();
			    }
		  }
		return json;
	}
	
	
	
	public String bl_SaveSupplierMaster(Supplier Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		/*List<Supplier> supplierList = null;
		supplierList=new ArrayList<Supplier>();*/
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
					
			query = "{call InsertUpdateSupplierMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
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
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.executeUpdate ();
			Double output = cstatement.getDouble(1);
			Obj.setSupplierId(output);
			Obj.setRecid(output);
			System.out.println("company idin insert update"+output);			
			//supplierList.add(Obj);
			json = util.util_makeJson(Obj);
		}catch (Exception e) {
			e.printStackTrace();
		 } finally {
			   try {
			    con.close();
			   } catch(Exception e) {
			    e.printStackTrace();
			    }
		  }
		return json;
	}
	
	
	public String bl_SaveMrMaster(MR Obj){
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		//List<MR> mrList=new ArrayList<MR>();
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;

		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);   
			query = "{call InsertUpdateMrMaster (?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getMrId());
			cstatement.setDouble(2, Obj.getMrDivisionId());
			cstatement.setDouble(3, Obj.getMrCompanyId());
			cstatement.setString(4, Obj.getMrName());
			cstatement.setString(5, Obj.getMrRemark());
			cstatement.setDouble(6, Obj.getMrTelephone());
			cstatement.setString(7,Obj.getMrEmail());
			cstatement.setString(8, Obj.getMrManagerName());
			cstatement.setDouble(9, Obj.getMrManagerTelephone());
			cstatement.setString(10, Obj.getMrManagerEmail());
			cstatement.setBoolean(11, Obj.isMrActiveFlag());
			cstatement.setBoolean(12, Obj.isMrEmailreportFlag());
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);

			cstatement.execute();
			Double output = cstatement.getDouble(1);
			System.out.println("Mr ID insert update "+output); 
			//mrList.add(Obj);
			Obj.setMrId(output);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}

			}

		} 

		return json;
	}
	
	
	
	public String bl_SaveDivisionMaster(Division Obj){
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);			
			query = "{call InsertUpdateDivisionMaster (?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
		    cstatement.setDouble(1, Obj.getDivisionId());
		    cstatement.setDouble(2, Obj.getDivisionCompanyId());
		    cstatement.setString(3, Obj.getDivisionCode());
		    cstatement.setString(4, Obj.getDivisionName());
		    cstatement.setString(5, Obj.getDivisionRemark());
		    cstatement.setString(6, Obj.getDivisionContactName());
		    cstatement.setDouble(7, Obj.getDivisionContactPhone());
		    cstatement.setString(8, Obj.getDivisionContactEmail());
		    cstatement.setBoolean(9, Obj.isDivisionActiveFlag());
		    cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			Double output = cstatement.getDouble(1);
			Obj.setDivisionId(output);
			System.out.println("companyId in insert update"+output);			
			//divisionList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			try {
				con.rollback();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			e.printStackTrace();
		 } finally {
			   try {
			    con.close();
			   } catch(Exception e) {
			    e.printStackTrace();
			    }
		  }
		return json;
	}
	
	
	
	//=======================NIKITAS CODE===============
	
	
	
	
	public String bl_SaveRouteMaster(Route Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			query = "{call InsertUpdateRouteMaster   (?,?,?,?)}";
			
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getIdpk());
			cstatement.setString(2, Obj.getRrID());
			cstatement.setString(3, Obj.getRouteDescription());
			cstatement.setBoolean(4, Obj.isRouteActiveFlag());
			
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			double output = cstatement.getDouble(1);
			System.out.println("area code in insert update"+output);
			Obj.setIdpk(output);
			Obj.setRecid(output);
			
		
			String query2="Delete from routearea where rID = ?;";
			PreparedStatement prepState2 = con.prepareStatement(query2);
			prepState2.setDouble(1, Obj.getRouteID());
			prepState2.executeUpdate();
			
			System.out.println("You have inserted key=="+Obj.getRouteID());
		
		
			String query3="{call  InsertRouteAreaMaster   (?,?)}";
			cstatement = con.prepareCall (query3);
			
			RouteAreaRegion raObj = new RouteAreaRegion();
			for(int i=0;i<Obj.getRarList().size();i++){ 
				raObj = Obj.getRarList().get(i);
				//cstatement.setDouble(1, raObj.get());
				cstatement.setDouble(1, Obj.getRouteID());
				cstatement.setDouble(2, raObj.getRarAreaID());
				
				cstatement.addBatch();
			}
			cstatement.executeBatch();
			
			
			
			
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			 }
			
		 } 
		return json;
	}
		
	public String bl_SaveSalesmanMaster(Salesman Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
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
			System.out.println("area code in insert update"+output);
			
			
			
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			 }
			
		 } 
		return json;
	}
	
	
	
	
	
		
	public String bl_SaveCustomerMaster(Customer Obj){
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		//List<Customer> CustomerList=new ArrayList<Customer>();
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			query = "{call InsertUpdateCustomerMaster (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getCustomerId());
			cstatement.setString(2, Obj.getCustomerOtherInfo());
			cstatement.setString(3, Obj.getCustomerName());
            cstatement.setString(4, Obj.getCustomerAccountCode());
            cstatement.setString(5, Obj.getCustomerAccountName());
            cstatement.setString(6, Obj.getCustomerType());
            cstatement.setString(7, Obj.getCustomerArea());
            cstatement.setString(8, Obj.getCustomerSalesman());
            cstatement.setString(9, Obj.getCustomerRemark());
            cstatement.setDouble(10, Obj.getCustomerTaxId());
            cstatement.setString(11, Obj.getCustomerLedgerType());
            cstatement.setString(12, Obj.getCustomerAccountGroup());
            cstatement.setDouble(13, Obj.getCustomerOpeningBalance());
            cstatement.setString(14, Obj.getCustomerOpeningBalanceType());
            cstatement.setString(15, Obj.getCustomerCreditType());
            cstatement.setDouble(16, Obj.getCustomerCreditPeriod());
            cstatement.setString(17, Obj.getCustomerAddressLine1());
            cstatement.setString(18, Obj.getCustomerAddressLine2());
            cstatement.setDouble(19, Obj.getCustomerCity().getCityId());
            cstatement.setString(20, Obj.getCustomerContactPerson());
            cstatement.setDouble(21, Obj.getCustomerPhone());
            cstatement.setDouble(22, Obj.getCustomerFax());
            cstatement.setString(23, Obj.getCustomerEmail());
            cstatement.setBoolean(24, Obj.isCustomerActiveFlag());
            cstatement.setBoolean(25, Obj.isCustomerAutoEmailFlag());
            cstatement.setBoolean(26, Obj.isCustomerLockFlag());
            cstatement.setBoolean(27, Obj.isCustomerSubStockitsFlag());
            cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);           
			cstatement.execute();
			Double output = cstatement.getDouble(1);
			System.out.println("Customer id in insert update"+output);
			Obj.setCustomerId(output);
			
			

			String query2="Delete from customerlicences where CustomerID = ?;";
			PreparedStatement prepState2 = con.prepareStatement(query2);
			prepState2.setDouble(1, Obj.getCustomerId());
			prepState2.executeUpdate();
			
			System.out.println("You have inserted key=="+Obj.getCustomerId());
			
			//String query3="INSERT INTO customerlicences(CustomerID,licenceID,LicenceType,LicenceStartDate,LicenceEndDate)VALUES(?,?,?,?,?,?,?);";
			//CreatedBy,CreatedOn,ModifiedBy,ModifiedOn
			String query3="{call  insertCL (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query3);
			
			CustomerLicences clObj = new CustomerLicences();
			for(int i=0;i<Obj.getCustomerLicenceList().size();i++){ 
				clObj = Obj.getCustomerLicenceList().get(i);
				cstatement.setDouble(1, clObj.getClID());
				cstatement.setDouble(2, Obj.getCustomerId());
				cstatement.setDouble(3, clObj.getCustomerLicenceID());
				cstatement.setDouble(4, clObj.getCustomerLicenceNumber());
				cstatement.setString(5, clObj.getCustomerLicenceStartDate());
				cstatement.setString(6, clObj.getCustomerLicenceEndDate());
				
				cstatement.addBatch();
			}
			cstatement.executeBatch();
			
			
			
			
			
		/*	String query3="{call IUcl (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query3);
			//cstatement.setDouble(1, Obj.getClID());
			cstatement.setDouble(2, Obj.getCustomerId());
			//cstatement.setDouble(3, Obj.getCustomerLicenceID());
		//	cstatement.setString(4, Obj.getCustomerLicenceType());
			//cstatement.setString(5, Obj.getCustomerLicenceStartDate());
		//	cstatement.setString(6, Obj.getCustomerLicenceEndDate());
			cstatement.execute();
			cstatement.executeBatch();*/
			//CustomerList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			 }
		 } 
		return json;
	}
	
	public String bl_SaveAreaMaster(Area Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			query = "{call InsertUpdateAreaMaster  (?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getAreaID());
			cstatement.setString(2, Obj.getAreaCode());
			cstatement.setString(3, Obj.getAreaDescription());
			cstatement.setString(4, Obj.getPincode());
			cstatement.setDouble(5, Obj.getAreaRegionID());
			cstatement.setBoolean(6, Obj.isAreaActiveFlag());
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			double output = cstatement.getDouble(1);
			Obj.setAreaID(output);
			Obj.setRecid(output);
			System.out.println("area code in insert update"+output);
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			 }
			
		 } 
		return json;
	}
	
	
	
	public String bl_SaveRegionMaster(Region Obj){
		Util_json util= null;
		String json=null;
		
		JdbcConnection JdbcConnectionObj = null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		//ResultSet rs=null;
		
		try{
			util= new Util_json();
			JdbcConnectionObj = new JdbcConnection();
			con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			query = "{call InsertUpdateRegionMaster   (?,?,?)}";
			cstatement = con.prepareCall (query);
			cstatement.setDouble(1, Obj.getRegionID());
			cstatement.setString(2, Obj.getRegionCode());
			cstatement.setString(3, Obj.getRegionDescription());
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.execute();
			double output = cstatement.getDouble(1);
			System.out.println("Region code in insert update"+output);
			Obj.setRegionID(output);
			Obj.setRecid(output);
			//companyList.add(Obj);
			json = util.util_makeJson(Obj);
			con.commit();
		}catch (Exception e) {
			e.printStackTrace();
			try {
				con.rollback();
				con.close();
			} catch (SQLException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
				try {
					con.close();
				} catch (SQLException e2) {
					// TODO Auto-generated catch block
					e2.printStackTrace();
				}
				
			 }
			
		 } 
		return json;
	}
	

}
