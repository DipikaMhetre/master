package com.purpleaid.Impl;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.TaxCode;
import com.purpleaid.interfaces.TaxCode_IF;

import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class TaxCodeImpl implements TaxCode_IF {

	@Override
	public String bl_getTaxCode(double id) {
		return null;
	}

	@Override
	public String bl_getAllTaxCodeList(PurpleaidRequest reqObj) throws Exception {
		JdbcConnection JdbcConnectionObj = null;
			Util_json util= null;
		    String json=null;
		    int status =444;
		    List <TaxCode> taxCodeList = null;
		    Connection con = null;
		    String query = null;
		    ResultSet rs = null;
		    CallableStatement callableStatement =null;
		    try {
		    	
		    	util= new Util_json();
		    	taxCodeList=new ArrayList<TaxCode>();
		    	//con = DataSource.getInstance().getConnection();
		    	JdbcConnectionObj = new JdbcConnection();
		    	con=JdbcConnectionObj.getConnection();
		    	
		    	query="{call getAllTaxCode(?,?,?,?)}";
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
			    		TaxCode taxObj = new TaxCode();
			 
			    		taxObj.setTaxId(rs.getDouble("ID"));
			    		taxObj.setRecid(rs.getDouble("ID"));
			    		taxObj.setTaxCode(rs.getString("TaxCode"));
			    		taxObj.setTaxDescription(rs.getString("TaxDescription"));
			    		taxObj.setVatTax(rs.getBigDecimal("vatTax"));
			    		taxObj.setCentralSalesTax(rs.getBigDecimal("centralSalesTax"));
			    		taxObj.setLocalTax(rs.getBigDecimal("localTax"));
			    		taxObj.setGeneralSalesTax(rs.getBigDecimal("generalSalesTax"));
			    		taxObj.setTaxCodeSalesSeperateVATFlag(rs.getBoolean("flgSalesSeperateVAT"));
			    		taxObj.setTaxCodeSalesVATonFreeFlag(rs.getBoolean("flgSalesVATonFree"));
			    		taxObj.setTaxCodeSalesVATChargeOn(rs.getInt("SalesVATChargeOn"));
			    		taxObj.setTaxCodePurchaseSeperateVATFlag(rs.getBoolean("flgPurchaseSeperateVAT"));
			    		taxObj.setTaxCodePurchaseVATonFreeFlag(rs.getBoolean("flgPurchaseVATonFree"));
			    		taxObj.setTaxCodePurchaseVATChargeOn(rs.getInt("PurchaseVATChargeOn"));
			    		taxObj.setTaxCodeSalesACId(rs.getDouble("SaleACid"));
			    		taxObj.setTaxCodeSalesVATACId(rs.getDouble("SaleVATACid"));
			    		taxObj.setTaxCodeSalesReturnVATACId(rs.getDouble("SaleReturnVATACid"));
			    		taxObj.setTaxCodePurchaseACId(rs.getDouble("PurchaseACid"));
			    		taxObj.setTaxCodePurchaseVATACId(rs.getDouble("PurchaseVATACid"));
			    		taxObj.setTaxCodePurchaseReturnVATACId(rs.getDouble("PurchaseReturnVATACid"));
			    		
			    		//account id and description
			    		taxObj.setTaxCodeAccountId(rs.getDouble("accID"));
			    		taxObj.setTaxCodeAccountCode(rs.getString("accCode"));
			    		
			    		//sales account description
			    		taxObj.setTaxCodeSaleAccDescription(rs.getString("saleAcDesc"));
			    		taxObj.setTaxCodeSaleVatAccDescription(rs.getString("saleVatAcDesc"));
			    		taxObj.setTaxCodeSaleReturnVatAccDescription(rs.getString("saleReturnAccDesc"));
			    		
			    		//purchase account description
			    		taxObj.setTaxCodePurchaseAccDescription(rs.getString("PurchaseAcDesc"));
			    		taxObj.setTaxCodePurchaseVatAccDescription(rs.getString("PurchaseVatAcDesc"));
			    		taxObj.setTaxCodePurchaseReturnVatAccDescription(rs.getString("PurchaseReturnAccDesc"));
			    		
			    		
			    		
			    		if(rs.getInt("flgActive")==1){
			    			taxObj.setTaxCodeActivFlag(true);
			    		}else{
			    			taxObj.setTaxCodeActivFlag(false);
			    		}
			    		taxCodeList.add(taxObj);
			    	} 
				}
		     json = util.util_makeJson(taxCodeList);
		    
		    }catch (Exception e) {
		    	try {	
					con.close();
					throw new Exception("\nError 12000101: "+e.getMessage()+"->"+status);
				} catch (Exception e1) {
					try {
						con.close();
						throw new Exception("\nError 12000101: "+e.getMessage()+"->"+status);
					} catch (Exception e2) {
						throw new Exception("\nError 12000101: "+e.getMessage()+"->"+status);
					}

				}
		    }
		    return json;
	}

	@Override
	public String bl_setTaxCode(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		TaxCode Obj = null;
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(reqObj.getRequestData(), new TypeReference<TaxCode>() {});
			query = "{call InsertUpdateTaxCode  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getTaxId());
			cstatement.setString(2, Obj.getTaxCode());
			cstatement.setString(3, Obj.getTaxDescription());
			cstatement.setBigDecimal(4, Obj.getVatTax());
			cstatement.setBigDecimal(5, Obj.getCentralSalesTax());
			cstatement.setBigDecimal(6, Obj.getLocalTax());
			cstatement.setBigDecimal(7, Obj.getGeneralSalesTax());
			cstatement.setInt(8, Obj.getTaxCodePercentageRate());
			cstatement.setBoolean(9, Obj.isTaxCodeSalesSeperateVATFlag());
			cstatement.setBoolean(10, Obj.isTaxCodeSalesVATonFreeFlag());
			cstatement.setInt(11, Obj.getTaxCodeSalesVATChargeOn());
			cstatement.setBoolean(12, Obj.isTaxCodePurchaseSeperateVATFlag());
			cstatement.setBoolean(13, Obj.isTaxCodePurchaseVATonFreeFlag());
			cstatement.setInt(14, Obj.getTaxCodePurchaseVATChargeOn());
			cstatement.setDouble(15, Obj.getTaxCodeSalesACId());
			cstatement.setDouble(16, Obj.getTaxCodeSalesVATACId());
			cstatement.setDouble(17, Obj.getTaxCodeSalesReturnVATACId());
			cstatement.setDouble(18, Obj.getTaxCodePurchaseACId());
			cstatement.setDouble(19, Obj.getTaxCodePurchaseVATACId());
			cstatement.setDouble(20, Obj.getTaxCodePurchaseReturnVATACId());
			cstatement.setBoolean(21, Obj.isTaxCodeActivFlag());
			cstatement.setString(22, reqObj.getUserId());
			cstatement.setString(23, reqObj.getToken());
			cstatement.setInt(24, reqObj.getInsertPermissionID());
			cstatement.setInt(25, reqObj.getUpdatePermissionID());
			cstatement.setInt(26, reqObj.getDeletePermissionID());
			cstatement.setInt(27, status);
						
			
			cstatement.registerOutParameter(27, java.sql.Types.INTEGER);
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			
			cstatement.execute();
			
			double output = cstatement.getDouble(1);
			status = cstatement.getInt(27);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{  
						
				Obj.setTaxId(output);
				Obj.setRecid(output);
				System.out.println("TaxCode id in insert update"+output);
				con.commit();
			}
			json = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 12000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 12000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 12000102: "+e.getMessage()+"->"+status);
				}

			}

		} 
		return json;
	}

}
