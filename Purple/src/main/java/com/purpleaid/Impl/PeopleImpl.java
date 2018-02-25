package com.purpleaid.Impl;


import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Address;
import com.purpleaid.beans.Association;
import com.purpleaid.beans.Company;
import com.purpleaid.beans.Contact;
import com.purpleaid.beans.Customer;
import com.purpleaid.beans.Division;
import com.purpleaid.beans.Email;
import com.purpleaid.beans.EntityDetails;
import com.purpleaid.beans.ImportantDates;

import com.purpleaid.beans.Phone;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.RelatedNames;
import com.purpleaid.beans.Role;
import com.purpleaid.beans.Supplier;
import com.purpleaid.beans.Url;
import com.purpleaid.interfaces.People_IF;
import com.purpleaid.utilities.DataSource;
import com.purpleaid.utilities.JdbcConnection;
import com.purpleaid.utilities.Util_json;

public class PeopleImpl implements People_IF{

	@Override
	public String bl_getAllMasterList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		
		Connection con = null;
		CallableStatement callableStatement = null;
		CallableStatement callableStatement1 = null;
		CallableStatement callableStatement2 = null;
		String query = null;
		String query1 = null;
		String query2 = null;
		String query3 = null;
		String query4 = null;
		ResultSet rs = null;
		ResultSet rs1 = null;
		ResultSet rs2 = null;
		ResultSet rs3 = null;
		ResultSet rs4 = null;
		int status =444;
		try {
			
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			EntityDetails edObj = new EntityDetails();
			List<EntityDetails> edList1 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList2 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList3 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList4 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList5 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList6 = new ArrayList<EntityDetails>();
			List<EntityDetails> edList7 = new ArrayList<EntityDetails>();
			List<Customer> customerList = new ArrayList<Customer>();
			List<Division> divisionList = new ArrayList<Division>();
			List<Supplier> supplierList = new ArrayList<Supplier>();
			List<Company> companyList = new ArrayList<Company>();
						
			util= new Util_json();
							
			query="{call getContactTypeList(?,?,?,?)}";
			
			callableStatement = con.prepareCall(query);
			
			
			callableStatement.setString(1, reqObj.getUserId());
			callableStatement.setString(2, reqObj.getToken());
			callableStatement.setInt(3, reqObj.getViewPermissionID());
			callableStatement.setInt(4, status);
			rs = callableStatement.executeQuery();
					
			callableStatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = callableStatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
					while(rs.next()){
						
						if(rs.getDouble("TypeID") == 1){
							//contact list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList1.add(edObj);
											
						}
						else if(rs.getDouble("TypeID") == 2){
							// address list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList2.add(edObj);
							
						}
						else if(rs.getDouble("TypeID") == 3){
							//phone list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList3.add(edObj);
						}
						else if(rs.getDouble("TypeID") == 4){
							//important date list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList4.add(edObj);
						}
						else if(rs.getDouble("TypeID") == 5){
							// email list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList5.add(edObj);
						}
						else if(rs.getDouble("TypeID") == 6){
							// url list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList6.add(edObj);
						}
						else {
							//related people list
							edObj = new EntityDetails();
							edObj.setEntityDetailsId(rs.getDouble("ID"));
							edObj.setEntityDetailsTypeId(rs.getDouble("TypeID"));
							edObj.setEntityDeatilsDescription(rs.getString("Description"));
							edList7.add(edObj);
						}
					}
					
				}
			
				query1="{call getCompanyList(?,?,?,?)}";
				
				callableStatement1 = con.prepareCall(query1);
				callableStatement1.setString(1, reqObj.getUserId());
				callableStatement1.setString(2,  reqObj.getToken());
				callableStatement1.setInt(3, reqObj.getViewPermissionID());
				callableStatement1.setInt(4, status);
				rs1 = callableStatement1.executeQuery();
						
				callableStatement1.registerOutParameter(4, java.sql.Types.INTEGER);
				status = callableStatement1.getInt(4);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{	
									
					companyList = new ArrayList<Company>();
					while(rs1.next()){
						
						Company cObj = new Company();
						cObj.setCompanyId(rs1.getDouble("ID"));
						cObj.setCompanyName(rs1.getString("Name"));
						
						companyList.add(cObj);
									
					}
				}
				
				
				query2="{call getSupplierList(?,?,?,?)}";
				callableStatement2 = con.prepareCall(query2);
				callableStatement2.setString(1, reqObj.getUserId());
				callableStatement2.setString(2,  reqObj.getToken());
				callableStatement2.setInt(3, reqObj.getViewPermissionID());
				callableStatement2.setInt(4, status);
				rs2 = callableStatement2.executeQuery();
						
				callableStatement2.registerOutParameter(4, java.sql.Types.INTEGER);
				status = callableStatement2.getInt(4);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{	
									
				     supplierList = new ArrayList<Supplier>();
					while(rs2.next()){
						Supplier sObj = new Supplier();
						sObj.setSupplierId(rs2.getDouble("supplierId"));
						sObj.setSupplierName(rs2.getString("supplierName"));
						sObj.setSupplierCompanyId(rs2.getDouble("supplierCompanyId"));	
						supplierList.add(sObj);
										
					}
				}
				
				
				
				query3="{call getDivisionList(?,?,?,?)}";
					
				callableStatement2 = con.prepareCall(query3);
				callableStatement2.setString(1, reqObj.getUserId());
				callableStatement2.setString(2,  reqObj.getToken());
				callableStatement2.setInt(3, reqObj.getViewPermissionID());
				callableStatement2.setInt(4, status);
				rs3 = callableStatement2.executeQuery();
						
				callableStatement2.registerOutParameter(4, java.sql.Types.INTEGER);
				status = callableStatement2.getInt(4);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{	
									
					divisionList = new ArrayList<Division>();
					while(rs3.next()){
						Division dObj = new Division();
						dObj.setDivisionId(rs3.getDouble("ID"));
						dObj.setDivisionName(rs3.getString("Name"));
						dObj.setDivisionCompanyId(rs3.getDouble("CID"));
						divisionList.add(dObj);
										
					}
				}
				
				
				query4="{call getCustomerList(?,?,?,?)}";
					
				callableStatement2 = con.prepareCall(query4);
				callableStatement2.setString(1, reqObj.getUserId());
				callableStatement2.setString(2,  reqObj.getToken());
				callableStatement2.setInt(3, reqObj.getViewPermissionID());
				callableStatement2.setInt(4, status);
				rs4 = callableStatement2.executeQuery();
						
				callableStatement2.registerOutParameter(4, java.sql.Types.INTEGER);
				status = callableStatement2.getInt(4);
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{	
					
					customerList = new ArrayList<Customer>();
					while(rs4.next()){
						Customer custObj = new Customer();
						custObj.setCustomerId(rs4.getDouble("ID"));
						custObj.setCustomerName(rs4.getString("cname"));
						customerList.add(custObj);			
					}
				}
				json = "{\"contactTypeList\":"+util.util_makeJson(edList1)+",\"addressList\":"+util.util_makeJson(edList2)+",\"phoneList\":"+util.util_makeJson(edList3)+",\"dateList\":"+util.util_makeJson(edList4)+",\"emailList\":"+util.util_makeJson(edList5)+",\"urlList\":"+util.util_makeJson(edList6)+",\"associationList\":"+util.util_makeJson(edList7)+",\"companyList\":"+util.util_makeJson(companyList)+",\"supplierList\":"+util.util_makeJson(supplierList)+",\"divisionList\":"+util.util_makeJson(divisionList)+",\"customerList\":"+util.util_makeJson(customerList)+"}";
			
		} catch (Exception e) {
			try {	
				con.close();
				throw new Exception("\nError 19000101: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 19000101: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 19000101: "+e.getMessage()+"->"+status);
				}

			}
		}
		
		return json;
	
	}

	@Override
	public String bl_getContactDetails(PurpleaidRequest reqObj, double filterType ,int detailsFilterCount , double maxID )throws Exception {
		JdbcConnection JdbcConnectionObj = null;
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Contact> contactList = null;
		int status =444 ;
		
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			contactList =new ArrayList<Contact>();
				
			filterType = 0;
			
			if((reqObj.isContactMyFavoriteFlag() == true  || reqObj.isContactMyContactFlag() == true  || reqObj.isContactSystemUser() == true  || reqObj.getContactName() != null && !" ".equals(reqObj.getContactName()) && !reqObj.getContactName().isEmpty()) ||  (reqObj.getUserName() != null && !" ".equals(reqObj.getUserName()) && !reqObj.getUserName().isEmpty())  || reqObj.isUserLock() == true || (reqObj.getContactHQ() != null && !" ".equals(reqObj.getContactHQ()) && !reqObj.getContactHQ().isEmpty()) ||  reqObj.getContactArea() !=  0.0  || reqObj.getContactRoute() != 0.0 || (reqObj.getContactLabel() != null && !" ".equals(reqObj.getContactLabel()) && !reqObj.getContactLabel().isEmpty())){
				
				filterType = filterType + 1;
			}

			
			if( (reqObj.getContactPhone() != null && !reqObj.getContactPhone().isEmpty() && !" ".equals(reqObj.getContactPhone())) || (reqObj.getContactURL() != null && !reqObj.getContactURL().isEmpty() && !" ".equals(reqObj.getContactURL())) ||( reqObj.getContactCity() != null && !reqObj.getContactCity().isEmpty() && !" ".equals(reqObj.getContactCity())) ||  (reqObj.getContactDate() != null && !reqObj.getContactDate().isEmpty() && !" ".equals(reqObj.getContactDate())) || (reqObj.getContactEmail() != null && !reqObj.getContactEmail().isEmpty() && !" ".equals(reqObj.getContactEmail())) ){
				filterType = filterType + 2;
				
			}
			
			detailsFilterCount = 0;
			
			if( (reqObj.getContactPhone() != null && !reqObj.getContactPhone().isEmpty() && !" ".equals(reqObj.getContactPhone()))){
				detailsFilterCount = detailsFilterCount + 1;
			}
						
			if( (reqObj.getContactURL() != null && !reqObj.getContactURL().isEmpty() && !" ".equals(reqObj.getContactURL()))){
				detailsFilterCount = detailsFilterCount + 1;
			}
			
			if( (reqObj.getContactCity() != null && !reqObj.getContactCity().isEmpty() && !" ".equals(reqObj.getContactCity()))){
				detailsFilterCount = detailsFilterCount + 1;
			}
			
			if( (reqObj.getContactDate() != null && !reqObj.getContactDate().isEmpty() && !" ".equals(reqObj.getContactDate()))){
				detailsFilterCount = detailsFilterCount + 1;
			}
			
			
			if( (reqObj.getContactEmail() != null && !reqObj.getContactEmail().isEmpty() && !" ".equals(reqObj.getContactEmail()))){
				detailsFilterCount = detailsFilterCount + 1;
			}

			
			String query = "{call getContact (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			
			cstatement = con.prepareCall(query);
			cstatement.setDouble(1, reqObj.getContactTypeId());
			cstatement.setString(2, reqObj.getUserId());
			cstatement.setDouble(3, filterType);
			cstatement.setDouble(4, maxID);
			cstatement.setInt(5, reqObj.getListLimit());
			cstatement.setString(6, reqObj.getUserName());
			cstatement.setBoolean(7, reqObj.isUserLock());
			cstatement.setString(8, reqObj.getContactHQ());
			cstatement.setDouble(9, reqObj.getContactArea());
			cstatement.setDouble(10,reqObj.getContactRoute());
			cstatement.setString(11, reqObj.getContactLabel());
			cstatement.setString(12,reqObj.getContactPhone());
			cstatement.setString(13,reqObj.getContactEmail());
			cstatement.setString(14, reqObj.getContactURL() );
			cstatement.setBoolean(15, reqObj.isContactMyFavoriteFlag());
			cstatement.setString(16, reqObj.getContactCity());
			cstatement.setString(17, reqObj.getContactDate());
			cstatement.setString(18, reqObj.getContactName());
			cstatement.setBoolean(19, reqObj.isContactMyContactFlag());
			cstatement.setBoolean(20, reqObj.isContactSystemUser());
			cstatement.setInt(21, detailsFilterCount);
			cstatement.setString(22, reqObj.getToken());
			cstatement.setInt(23, reqObj.getViewPermissionID());
			cstatement.setInt(24, status);
			
			rs=cstatement.executeQuery();
			
			
			cstatement.registerOutParameter(24, java.sql.Types.INTEGER);
		    status = cstatement.getInt(24);
			
		    if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
						int loopContactID = 0;
						
						Contact contactObj = new Contact();
						
						List<Address> addressList = new ArrayList<Address>();
						List<Phone> phoneList = new ArrayList<Phone>();
						List<ImportantDates> importantDatesList = new ArrayList<ImportantDates>();
						List<Url> urlList = new ArrayList<Url>();
						List<Email> emailList = new ArrayList<Email>();
						List<RelatedNames> relatedNamesList = new ArrayList<RelatedNames>();
						List<Association> associationList = new ArrayList<Association>();
						
					    while(rs.next()){
					    	
					    	if (loopContactID != rs.getDouble("ID")){
					    		
					    		contactObj = new Contact();
						    	addressList = new ArrayList<Address>();
						    	phoneList = new ArrayList<Phone>();
								importantDatesList = new ArrayList<ImportantDates>();
								urlList = new ArrayList<Url>();
								emailList = new ArrayList<Email>();
								relatedNamesList = new ArrayList<RelatedNames>();
								associationList = new ArrayList<Association>();
						    	
						    	contactObj.setContactId(rs.getDouble("ID"));
						    	contactObj.setRecid(rs.getDouble("ID"));
						    	
						    	/*if( maxID < rs.getDouble("ID")){
						    		maxID =  rs.getDouble("ID");
						    	}*/
						    	contactObj.setContactMyContactId(rs.getDouble("myContactID"));
					    		contactObj.setContactNameTitle(rs.getInt("NameTitle"));
						    	contactObj.setContactFirstName(rs.getString("FirstName"));
						    	contactObj.setContactMiddleName(rs.getString("MiddleName"));
						    	contactObj.setContactLastName(rs.getString("LastName"));
						    	contactObj.setContactNickName(rs.getString("NickName"));
						    	contactObj.setContactTypeId(rs.getDouble("contactTypeID"));
						    	contactObj.setContactOrganization(rs.getString("organization")); 
						    	contactObj.setContactjobTitle(rs.getString("JobTitle"));
						    	contactObj.setContactLabel(rs.getString("label"));
						    	contactObj.setContactHQ(rs.getString("HQ"));
						    	contactObj.setContactArea(rs.getDouble("Area"));
						    	contactObj.setContactRoute(rs.getDouble("Route"));
						    	contactObj.setContactNotes(rs.getString("Notes"));
						    	contactObj.setContactActiveFlag(rs.getBoolean("flgActive"));
						    	contactObj.setContactMyFavouriteFlag(rs.getBoolean("flgMyFavoriteNew"));
						    	
						    	if(rs.getInt("flgMyContactNew") == 1){
						    	//contactObj.setContactOnlyMyContactFlag(rs.getBoolean("flgMyContactNew"));
						    		contactObj.setContactOnlyMyContactFlag(true);
						    	}else{
						    		contactObj.setContactOnlyMyContactFlag(false);
						    	}
						    	contactObj.setContactSendGreetingFlag(rs.getBoolean("flgSendGeetings"));
						    	contactObj.setContactTypeDescription(rs.getString("entityDetailsDescription"));
						    	contactObj.setContactNotificationFlag(rs.getBoolean("flgNotification"));
						    	contactObj.setContactLockFlag(rs.getBoolean("flgLock"));
						    	contactObj.setContactUserName(rs.getString("userName"));
						    	contactObj.setContactUserPassward(rs.getString("userPassward"));
						    	contactObj.setContactUserLock(rs.getBoolean("userLock")); 
						    	contactObj.setContactIsDeleted(rs.getBoolean("deleted"));
						    	contactObj.setContactFullName(rs.getString("FirstName")+" "+rs.getString("LastName"));
						    	contactObj.setContactFacebookUrl(rs.getString("facebookUrl"));
						    	contactObj.setContactTwitterUrl(rs.getString("twitterUrl"));
						    	contactObj.setContactLinkedinUrl(rs.getString("linkedinUrl"));
						    	
						    	//Address
						    	
						    	if(rs.getDouble("entityDetailsTypeID") == 2){
						    		Address aObj = new Address();
							    	aObj.setAdreessId(rs.getDouble("contactDetailsId"));
								    aObj.setAddressTypeId(rs.getDouble("entityDetailsTypeID"));
							    	aObj.setAddressLine1(rs.getString("contactDetailsDetails1"));
							    	aObj.setAddressLine2(rs.getString("contactDetailsDetails2"));
							    	aObj.setAddressCity(rs.getString("contactDetailsDetails3"));
							    	aObj.setAddressCountry(rs.getString("contactDetailsDetails4"));
							    	aObj.setAddressPinCode(rs.getString("contactDetailsDetails5"));
							    	aObj.setAddressState(rs.getString("contactDetailsDetails6"));
							    	aObj.setAddressTypeDescription(rs.getString("entityDetailsDescription"));
							    	aObj.setAddressCDID(rs.getDouble("contactDetailsId"));
							    				    	
							    	if(rs.getInt("deleted") == 1){
							    		aObj.setAddressIsDeleted(true);
						    		}else{
						    			aObj.setAddressIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	aObj.setEntity(edObj);
							    	
							    	aObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	aObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	addressList.add(aObj);
							    	contactObj.setContactAddressList(addressList);
						    	}
						    	else if(rs.getDouble("entityDetailsTypeID") == 3){
						    	
						    		//Phone
							    	Phone pObj = new Phone();
							    	pObj.setPhoneId(rs.getDouble("contactDetailsId"));
							    	pObj.setPhoneTypeId(rs.getDouble("entityDetailsTypeID"));
							    	pObj.setPhone(rs.getString("contactDetailsDetails1"));
							    	pObj.setPhoneAreaCode(rs.getString("contactDetailsDetails2"));
							    	pObj.setPhoneCountry(rs.getString("contactDetailsDetails3"));
							    	pObj.setPhoneExtension(rs.getString("contactDetailsDetails4"));
							    	pObj.setPhoneLocalNumber(rs.getString("contactDetailsDetails5"));
							    	pObj.setPhoneTypeDescription(rs.getString("entityDetailsDescription"));
							    	pObj.setPhoneCDID(rs.getDouble("contactDetailsId"));
							    					    	
							    	if(rs.getInt("deleted") == 1){
							    		pObj.setPhoneIsDeleted(true);
						    		}else{
						    			pObj.setPhoneIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	pObj.setEntity(edObj);
							    	
							    	pObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	pObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	phoneList.add(pObj);
							    	contactObj.setContctPhoneList(phoneList);
							    	
						    	}
						       	else if(rs.getDouble("entityDetailsTypeID") == 4){
						    		//Important dates
						    		ImportantDates idObj = new ImportantDates();
							    	idObj.setImportantDatesId(rs.getDouble("contactDetailsId"));
							    	idObj.setImportantTypeId(rs.getDouble("entityDetailsTypeID"));
							    	idObj.setImportantDates(rs.getString("contactDetailsDetails1"));
							    	idObj.setImportantDatesTypesDescription(rs.getString("entityDetailsDescription"));
							    	idObj.setImportantDatesCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		idObj.setImportantDatesIsDeleted(true);
						    		}else{
						    			idObj.setImportantDatesIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	idObj.setEntity(edObj);
							    	
							    	idObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	idObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	importantDatesList.add(idObj);
							    	contactObj.setContctImportantDatesList(importantDatesList);
						    	}
						    	
						    	else if(rs.getDouble("entityDetailsTypeID") == 5){
						    		// email
							    	
							    	Email eObj = new Email();
							    	eObj.setEmailId(rs.getDouble("contactDetailsId"));
							    	eObj.setEmailTypeId(rs.getDouble("entityDetailsTypeID"));
							    	eObj.setEmail(rs.getString("contactDetailsDetails1"));
							    	eObj.setEmailTypeDescription(rs.getString("entityDetailsDescription"));
							    	eObj.setEmailCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		eObj.setEmailIsDeleted(true);
						    		}else{
						    			eObj.setEmailIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	eObj.setEntity(edObj);
							    	
							    	eObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	eObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	emailList.add(eObj);
							    	contactObj.setContactEmailList(emailList);
						    	}
						    	else if(rs.getDouble("entityDetailsTypeID") == 6){
						    		// URL
							    	
							    	Url uObj = new Url();
							    	uObj.setUrlId(rs.getDouble("contactDetailsId"));
							    	uObj.setUrlTypeId(rs.getDouble("entityDetailsTypeID"));
							    	uObj.setUrl(rs.getString("contactDetailsDetails1"));
							    	uObj.setUrlTypeDescription(rs.getString("entityDetailsDescription"));
							    	uObj.setUrlCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		uObj.setUrlIsDeleted(true); 
						    		}else{
						    			uObj.setUrlIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	uObj.setEntity(edObj);
							    	
							    	uObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	uObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	urlList.add(uObj);
							    	contactObj.setContactUrlList(urlList);
							    	
						    	}
						    	else if(rs.getDouble("entityDetailsTypeID") == 1){
						    		// Relates Names
							    	
							    	RelatedNames rnObj = new RelatedNames();
							    	rnObj.setRelatedNamesId(rs.getDouble("contactDetailsOtherID"));
							    	rnObj.setRelatedNamesTypeId(rs.getDouble("entityDetailsTypeID"));
							    	rnObj.setRelatedNames(rs.getString("contactDetailsDetails1"));
							    	rnObj.setRelatedNamesTypeDescription(rs.getString("entityDetailsDescription"));
							    	rnObj.setRelatedNamesCDID(rs.getDouble("contactDetailsId"));
							    	rnObj.setRelatedNamesIsDeleted(rs.getBoolean("deleted"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		rnObj.setRelatedNamesIsDeleted(true); 
						    		}else{
						    			rnObj.setRelatedNamesIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	rnObj.setEntity(edObj);
							    	
							    	rnObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	rnObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	relatedNamesList.add(rnObj);
							    	contactObj.setContactRelatedNamesList(relatedNamesList);
						    	}
						    	
						    	else if(rs.getDouble("entityDetailsTypeID") == 7){
						    		// association
							    	
							    	Association asObj = new Association();
							    	asObj.setAssociationId(rs.getDouble("contactDetailsOtherID"));
							    	asObj.setAssociationTypeId(rs.getDouble("entityDetailsTypeID"));
							    	asObj.setAssociationName(rs.getString("contactDetailsDetails1"));
							    	asObj.setAssociationTypeDescription(rs.getString("entityDetailsDescription"));
							    	asObj.setAssociationCDID(rs.getDouble("contactDetailsId"));
							    	asObj.setAssocitaionIsDeleted(rs.getBoolean("deleted"));
							    					    	
							    	EntityDetails edObj = new EntityDetails();
							    	asObj.setEntity(edObj);
							    	
							    	asObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	asObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	associationList.add(asObj);
							    	contactObj.setContactAssociationList(associationList);
						    	}
						    	
						    	contactList.add(contactObj);
					    	
					    	
					    	} else {
					    		
					    		if(rs.getDouble("entityDetailsTypeID") == 2){
					    			Address aObj = new Address();
					    			aObj.setAdreessId(rs.getDouble("contactDetailsId"));
								    aObj.setAddressTypeId(rs.getDouble("entityDetailsTypeID"));
							    	aObj.setAddressLine1(rs.getString("contactDetailsDetails1"));
							    	aObj.setAddressLine2(rs.getString("contactDetailsDetails2"));
							    	aObj.setAddressCity(rs.getString("contactDetailsDetails3"));
							    	aObj.setAddressCountry(rs.getString("contactDetailsDetails4"));
							    	aObj.setAddressPinCode(rs.getString("contactDetailsDetails5"));
							    	aObj.setAddressState(rs.getString("contactDetailsDetails6"));
							    	aObj.setAddressTypeDescription(rs.getString("entityDetailsDescription"));
							    	aObj.setAddressCDID(rs.getDouble("contactDetailsId"));
							    				    	
							    	if(rs.getInt("deleted") == 1){
							    		aObj.setAddressIsDeleted(true);
						    		}else{
						    			aObj.setAddressIsDeleted(false);
						    		}
							    	EntityDetails edObj = new EntityDetails();
							    	aObj.setEntity(edObj);
							    	
							    	aObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	aObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	addressList.add(aObj);
							    	contactObj.setContactAddressList(addressList);
							    }
					    		else if(rs.getDouble("entityDetailsTypeID") == 3){
							    	//Phone
								    	
							    	Phone pObj = new Phone();
							    	pObj.setPhoneId(rs.getDouble("contactDetailsId")); // entityDeatilsId replaced by contactDetailsId 
							    	pObj.setPhoneTypeId(rs.getDouble("entityDetailsTypeID"));
							    	pObj.setPhone(rs.getString("contactDetailsDetails1"));
							    	pObj.setPhoneAreaCode(rs.getString("contactDetailsDetails2"));
							    	pObj.setPhoneCountry(rs.getString("contactDetailsDetails3"));
							    	pObj.setPhoneExtension(rs.getString("contactDetailsDetails4"));
							    	pObj.setPhoneLocalNumber(rs.getString("contactDetailsDetails5"));
							    	pObj.setPhoneTypeDescription(rs.getString("entityDetailsDescription"));
							    	pObj.setPhoneCDID(rs.getDouble("contactDetailsId"));
							    					    	
							    	if(rs.getInt("deleted") == 1){
							    		pObj.setPhoneIsDeleted(true);
						    		}else{
						    			pObj.setPhoneIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	pObj.setEntity(edObj);
							    	
							    	pObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	pObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	phoneList.add(pObj);
							    	contactObj.setContctPhoneList(phoneList);
							    	
							    }
							    				    	
							    else if(rs.getDouble("entityDetailsTypeID") == 4){
						    		//Important dates
						    		ImportantDates idObj = new ImportantDates();
							    	idObj.setImportantDatesId(rs.getDouble("contactDetailsId"));
							    	idObj.setImportantTypeId(rs.getDouble("entityDetailsTypeID"));
							    	idObj.setImportantDates(rs.getString("contactDetailsDetails1"));
							    	idObj.setImportantDatesTypesDescription(rs.getString("entityDetailsDescription"));
							    	idObj.setImportantDatesCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		idObj.setImportantDatesIsDeleted(true);
						    		}else{
						    			idObj.setImportantDatesIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	idObj.setEntity(edObj);
							    	
							    	idObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	idObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	importantDatesList.add(idObj);
							    	contactObj.setContctImportantDatesList(importantDatesList);
							   	}
							    else if(rs.getDouble("entityDetailsTypeID") == 5){
						    		// email
							    	
							    	Email eObj = new Email();
							    	eObj.setEmailId(rs.getDouble("contactDetailsId"));
							    	eObj.setEmailTypeId(rs.getDouble("entityDetailsTypeID"));
							    	eObj.setEmail(rs.getString("contactDetailsDetails1"));
							    	eObj.setEmailTypeDescription(rs.getString("entityDetailsDescription"));
							    	eObj.setEmailCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		eObj.setEmailIsDeleted(true);
						    		}else{
						    			eObj.setEmailIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	eObj.setEntity(edObj);
							    	
							    	eObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	eObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	emailList.add(eObj);
							    	contactObj.setContactEmailList(emailList);
							   }
							   else if(rs.getDouble("entityDetailsTypeID") == 6){
						    		// URL
							    	
							    	Url uObj = new Url();
							    	uObj.setUrlId(rs.getDouble("contactDetailsId"));
							    	uObj.setUrlTypeId(rs.getDouble("entityDetailsTypeID"));
							    	uObj.setUrl(rs.getString("contactDetailsDetails1"));
							    	uObj.setUrlTypeDescription(rs.getString("entityDetailsDescription"));
							    	uObj.setUrlCDID(rs.getDouble("contactDetailsId"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		uObj.setUrlIsDeleted(true); 
						    		}else{
						    			uObj.setUrlIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	uObj.setEntity(edObj);
							    	
							    	uObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	uObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	urlList.add(uObj);
							    	contactObj.setContactUrlList(urlList);
								    	
							   }
							   else if(rs.getDouble("entityDetailsTypeID") == 1){
						    		// Relates Names
							    	
							    	RelatedNames rnObj = new RelatedNames();
							    	rnObj.setRelatedNamesId(rs.getDouble("contactDetailsOtherID"));
							    	rnObj.setRelatedNamesTypeId(rs.getDouble("entityDetailsTypeID"));
							    	rnObj.setRelatedNames(rs.getString("contactDetailsDetails1"));
							    	rnObj.setRelatedNamesTypeDescription(rs.getString("entityDetailsDescription"));
							    	rnObj.setRelatedNamesCDID(rs.getDouble("contactDetailsId"));
							    	rnObj.setRelatedNamesIsDeleted(rs.getBoolean("deleted"));
							    	
							    	if(rs.getInt("deleted") == 1){
							    		rnObj.setRelatedNamesIsDeleted(true); 
						    		}else{
						    			rnObj.setRelatedNamesIsDeleted(false);
						    		}
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	rnObj.setEntity(edObj);
							    	
							    	rnObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	rnObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	relatedNamesList.add(rnObj);
							    	contactObj.setContactRelatedNamesList(relatedNamesList);
						    	}
						    	
							   else if(rs.getDouble("entityDetailsTypeID") == 7){
						    		// association list
							    	
							    	Association asObj = new Association();
							    	
							    	
							    	asObj.setAssociationId(rs.getDouble("contactDetailsOtherID"));
							    	asObj.setAssociationTypeId(rs.getDouble("entityDetailsTypeID"));
							    	asObj.setAssociationName(rs.getString("contactDetailsDetails1"));
							    	asObj.setAssociationTypeDescription(rs.getString("entityDetailsDescription"));
							    	asObj.setAssociationCDID(rs.getDouble("contactDetailsId"));
							    	asObj.setAssocitaionIsDeleted(rs.getBoolean("deleted"));
							    	
							    	EntityDetails edObj = new EntityDetails();
							    	asObj.setEntity(edObj);
							    	
							    	asObj.getEntity().setEntityDetailsId(rs.getDouble("entityDetailsID"));
							    	asObj.getEntity().setEntityDeatilsDescription(rs.getString("entityDetailsDescription"));
							    	
							    	associationList.add(asObj);
							    	contactObj.setContactAssociationList(associationList);
						    	}
					    		
					    	}// End loopContactID
					    	
					    	loopContactID = rs.getInt("ID");  //set loopContactID for comparison
					    
					    }//  while loop	
					    maxID =  loopContactID;
					    //json = util.util_makeJson(contactList);
	    	}
		    json = "{\"cList\":"+util.util_makeJson(contactList) +",\"maxId\":"+maxID+"}";
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    }
		   } 
		    
		    return json;
	}

	@Override
	public String bl_setPeople(PurpleaidRequest requestData) throws Exception {
		Util_json util= null;
		String response=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		CallableStatement cstatement1 = null;
		CallableStatement cstatement2 = null;
		int status = 444;
		Contact Obj = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			 con.setAutoCommit(false);
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<Contact>() {});		
			query = "{call InsertUpdateContactManager (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			
			cstatement.setDouble(1, Obj.getContactId());
			cstatement.setDouble(2, Obj.getContactMyContactId());
			cstatement.setDouble(3, Obj.getContactTypeId());
			cstatement.setString(4, Obj.getContactOrganization());
			cstatement.setInt(5, Obj.getContactNameTitle());
			cstatement.setString(6, Obj.getContactFirstName());
			cstatement.setString(7, Obj.getContactMiddleName());
			cstatement.setString(8, Obj.getContactLastName());
			cstatement.setString(9, Obj.getContactNickName());
			cstatement.setString(10, Obj.getContactjobTitle());
			cstatement.setString(11, Obj.getContactLabel());
			cstatement.setString(12, Obj.getContactHQ());
			cstatement.setDouble(13, Obj.getContactArea());
			cstatement.setDouble(14, Obj.getContactRoute());
			cstatement.setString(15, Obj.getContactNotes());
			cstatement.setBoolean(16, Obj.isContactActiveFlag());
			cstatement.setBoolean(17, Obj.isContactSendGreetingFlag());
			cstatement.setBoolean(18, Obj.isContactOnlyMyContactFlag());
			cstatement.setBoolean(19, Obj.isContactNotificationFlag());
			cstatement.setBoolean(20, Obj.isContactLockFlag());
			cstatement.setString(21, requestData.getUserId());
			cstatement.setBoolean(22, false);
			cstatement.setString(23, requestData.getToken());
			cstatement.setInt(24, requestData.getInsertPermissionID());
			cstatement.setInt(25,requestData.getUpdatePermissionID());
			cstatement.setDouble(26, status);
			cstatement.setString(27, Obj.getContactFacebookUrl());
			cstatement.setString(28, Obj.getContactTwitterUrl());
			cstatement.setString(29, Obj.getContactLinkedinUrl());
			
			
                   
			cstatement.execute();
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE); 
	        cstatement.registerOutParameter(26, java.sql.Types.INTEGER ); 
			
			Double output = cstatement.getDouble(1);
			status = cstatement.getInt(26);
						
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
						
				System.out.println("Contact Manager id inserted/updated"+output);
				Obj.setContactId(output);
				Obj.setRecid(output);
				con.commit();
				
				List<Address> addressListFinal = new ArrayList<Address>();
				List<Email> emailListFinal = new ArrayList<Email>();
				List<Phone> phoneListFinal = new ArrayList<Phone>();
				List<ImportantDates> importantDatesListFinal = new ArrayList<ImportantDates>();
				List<Url> urlListFinal = new ArrayList<Url>();
				List<RelatedNames> relatedNamesListFinal = new ArrayList<RelatedNames>();
				List<Association> associationListFinal = new ArrayList<Association>();
				
				for(int i =0 ;i<Obj.getContactAddressList().size();i++){
					
					String query2 ="{call insertUpdateContactDetails(?,?,?,?,?,?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					
					Address aObj = new Address();
					aObj = Obj.getContactAddressList().get(i);
					cstatement1.setDouble(1, aObj.getAdreessId());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, aObj.getEntity().getEntityDetailsId() );
					cstatement1.setString(4, aObj.getAddressLine1());
					cstatement1.setString(5, aObj.getAddressLine2());
					cstatement1.setString(6, aObj.getAddressCity());
					cstatement1.setString(7, aObj.getAddressCountry());
					cstatement1.setString(8, aObj.getAddressPinCode());
					cstatement1.setString(9, aObj.getAddressState());
					cstatement1.setBoolean(10, aObj.isAddressIsDeleted());
					cstatement1.setString(11, requestData.getUserId());
					cstatement1.setString(12, requestData.getToken());
					
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(13, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(13, requestData.getUpdatePermissionID());
					}
					
					cstatement1.setDouble(14, status);
					
					cstatement1.registerOutParameter(14, java.sql.Types.INTEGER ); 
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
										
					cstatement1.execute();
					
					status = cstatement1.getInt(14);
					Double CDID = cstatement1.getDouble(1);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
											
						System.out.println("contactDetails ID save / Updated"+CDID);
						con.commit();
						aObj.setAdreessId(CDID);
						if(aObj.isAddressIsDeleted() != true){
							addressListFinal.add(aObj);
						}
					
					
					}
					
				}
				
				
				
				
				for(int i =0 ;i<Obj.getContctPhoneList().size();i++){
					
					String query2 ="{call insertUpdateContactDetails2(?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					Phone pObj = new Phone();
					pObj = Obj.getContctPhoneList().get(i);
					cstatement1.setDouble(1, pObj.getPhoneCDID());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, pObj.getEntity().getEntityDetailsId());
					cstatement1.setString(4, pObj.getPhone());
					cstatement1.setBoolean(5, pObj.isPhoneIsDeleted());
					
					
					
					cstatement1.setString(6, requestData.getUserId());
					cstatement1.setString(7, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(8, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(8, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(9, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(9, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
					
					System.out.println("contactDetails ID save / Updated"+CDID);
					con.commit();
					pObj.setPhoneId(CDID);
				
					if(pObj.isPhoneIsDeleted() != true){
						phoneListFinal.add(pObj);
					}
					
				}
				}
				
		

				
				
				
				
				for(int i =0 ;i<Obj.getContactEmailList().size();i++){
					String query2 ="{call insertUpdateContactDetails2(?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					Email eObj = new Email();
					eObj = Obj.getContactEmailList().get(i);
					cstatement1.setDouble(1, eObj.getEmailId());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, eObj.getEntity().getEntityDetailsId());
					cstatement1.setString(4, eObj.getEmail());
					cstatement1.setBoolean(5, eObj.isEmailIsDeleted());
					cstatement1.setString(6, requestData.getUserId());
					cstatement1.setString(7, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(8, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(8, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(9, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(9, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						System.out.println("contactDetails ID save / Updated"+CDID);
						
						eObj.setEmailId(CDID);
						con.commit();
						if(eObj.isEmailIsDeleted() != true){
							emailListFinal.add(eObj);
						}
					}
				}
				
				
				for(int i =0 ;i<Obj.getContactUrlList().size();i++){
					String query2 ="{call insertUpdateContactDetails2(?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					Url uObj = new Url();
					uObj = Obj.getContactUrlList().get(i);
					cstatement1.setDouble(1, uObj.getUrlId());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, uObj.getEntity().getEntityDetailsId() );
					cstatement1.setString(4, uObj.getUrl());
					cstatement1.setBoolean(5, uObj.isUrlIsDeleted());
					cstatement1.setString(6, requestData.getUserId());
					cstatement1.setString(7, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(8, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(8, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(9, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(9, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						System.out.println("contactDetails ID save / Updated"+CDID);
						con.commit();
						uObj.setUrlId(CDID);
										
						if(uObj.isUrlIsDeleted() != true){
							urlListFinal.add(uObj);
						}
					}
				}	
				
				
				
				for(int i =0 ;i<Obj.getContactRelatedNamesList().size();i++){
					String query2 ="{call insertUpdateContactDetailsReltdName(?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					RelatedNames rnObj = new RelatedNames();
					rnObj = Obj.getContactRelatedNamesList().get(i);
					
					cstatement1.setDouble(1, rnObj.getRelatedNamesCDID());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, rnObj.getEntity().getEntityDetailsId());
					cstatement1.setDouble(4, rnObj.getRelatedNamesId());
					cstatement1.setBoolean(5, rnObj.isRelatedNamesIsDeleted());
					cstatement1.setString(6, requestData.getUserId());
					cstatement1.setString(7, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(8, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(8, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(9, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(9, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						System.out.println("contactDetails ID save / Updated"+CDID);
						con.commit();
						rnObj.setRelatedNamesCDID(CDID);
						
						if(rnObj.isRelatedNamesIsDeleted() != true){
							relatedNamesListFinal.add(rnObj);
						}
					}
				}	
				
				for(int i =0 ;i<Obj.getContctImportantDatesList().size();i++){
					String query2 ="{call insertUpdateContactDetails2(?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					ImportantDates idObj = new ImportantDates();
					idObj = Obj.getContctImportantDatesList().get(i);
					cstatement1.setDouble(1, idObj.getImportantDatesId());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, idObj.getEntity().getEntityDetailsId());
					cstatement1.setString(4, idObj.getImportantDates());
					cstatement1.setBoolean(5, idObj.isImportantDatesIsDeleted());
					cstatement1.setString(6, requestData.getUserId());
					cstatement1.setString(7, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(8, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(8, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(9, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(9, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(9);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						System.out.println("contactDetails ID save / Updated"+CDID);
						con.commit();
						idObj.setImportantDatesId(CDID);
						
						if(idObj.isImportantDatesIsDeleted() != true){
							importantDatesListFinal.add(idObj);
						}
					}
				}	
				
				for(int i =0 ;i<Obj.getContactAssociationList().size();i++){
					String query2 ="{call insertUpdateContactDetails3(?,?,?,?,?,?,?,?,?,?)}";
					cstatement1 = con.prepareCall (query2);
					Association asObj = new Association();
					asObj = Obj.getContactAssociationList().get(i);
					cstatement1.setDouble(1, asObj.getAssociationCDID());
					cstatement1.setDouble(2, output);
					cstatement1.setDouble(3, asObj.getEntity().getEntityDetailsId());
					cstatement1.setDouble(4, asObj.getAssociationId());
					cstatement1.setString(5, asObj.getAssociationName());
					cstatement1.setBoolean(6, asObj.isAssocitaionIsDeleted());
					cstatement1.setString(7, requestData.getUserId());
					cstatement1.setString(8, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement1.setInt(9, requestData.getInsertPermissionID());
					}else{
						cstatement1.setInt(9, requestData.getUpdatePermissionID());
					}
					cstatement1.setDouble(10, status);
										
					cstatement1.registerOutParameter(1, java.sql.Types.DOUBLE); 
					cstatement1.registerOutParameter(10, java.sql.Types.INTEGER ); 
					
					cstatement1.execute();
										
					Double CDID = cstatement1.getDouble(1);
					status = cstatement1.getInt(10);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
						System.out.println("contactDetails ID save / Updated"+CDID);
						con.commit();
						asObj.setAssociationCDID(CDID);
						
						if(asObj.isAssocitaionIsDeleted() != true){
							associationListFinal.add(asObj);
						}
					}
				}
				
				if(Obj.isContactMyFavouriteFlag() == true){
					String query3 ="{call insertUpdateFavouriteContacts(?,?,?,?,?)}";
					cstatement2 = con.prepareCall (query3);
					
					cstatement2.setString(1, requestData.getUserId());
					cstatement2.setDouble(2, output);
					cstatement2.setString(3, requestData.getToken());
					if(Obj.getContactId() == 0 ){
						cstatement2.setInt(4, requestData.getInsertPermissionID());
					}else{
						cstatement2.setInt(4, requestData.getUpdatePermissionID());
					}
					cstatement2.setDouble(5, status);
					
					cstatement2.registerOutParameter(5, java.sql.Types.INTEGER );
					cstatement2.execute();
					status = cstatement2.getInt(5);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
					
						con.commit();
					}
				
				if(Obj.isContactMyFavouriteFlag() == false){
					String query4="Delete from favouritecontacts where favouritecontacts.contactID = ?;";
					PreparedStatement prepState2 = con.prepareStatement(query4);
					prepState2.setDouble(1,output);
					prepState2.executeUpdate();
				}
				
				
				Obj.setContactAddressList(addressListFinal);
				Obj.setContctPhoneList(phoneListFinal);	
				Obj.setContactEmailList(emailListFinal);
				Obj.setContactUrlList(urlListFinal);
				Obj.setContactRelatedNamesList(relatedNamesListFinal);
				Obj.setContctImportantDatesList(importantDatesListFinal);
				Obj.setContactAssociationList(associationListFinal);
				Obj.setContactFullName(Obj.getContactFirstName()+" "+Obj.getContactLastName());
			
			}	
			response = util.util_makeJson(Obj);
		}
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				}

				
				
			}

		} 
		return response;
	}

/*	@Override  ---------------replace by dipika's method----------------------------
	public String bl_setUser(PurpleaidRequest requestData) throws Exception {
		Util_json util= null;
		String response=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status =444;
		Contact Obj = null;
		
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<Contact>() {});
			query = "{call InsertUpdateContactUser  (?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
					
			cstatement.setDouble(1, Obj.getContactId());
			cstatement.setString(2, Obj.getContactUserName());
			cstatement.setString(3, Obj.getContactUserPassward());
			cstatement.setBoolean(4, Obj.isContactUserLock());
			cstatement.setString(5, requestData.getUserId());
			cstatement.setString(6, requestData.getToken());
			
			cstatement.setInt(7, requestData.getInsertPermissionID());
			cstatement.setInt(8, requestData.getUpdatePermissionID());
			
			cstatement.setDouble(9, status);
			
			
			cstatement.execute();
			
			cstatement.registerOutParameter(9, java.sql.Types.INTEGER);
			status = cstatement.getInt(9);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				con.commit();
			}
			
			response = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				}

			}

		} 
		return response;
	}
*/
	@Override
	public String bl_getContactNameList(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Contact> contactNameList = null;
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			contactNameList =new ArrayList<Contact>();
			String query = "{call getContactNameList (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			rs=cstatement.executeQuery();
		   
			
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = cstatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
				
			    while(rs.next()){
			    	
			    	Contact cObj = new Contact();
			    	
			    	cObj.setContactId(rs.getDouble("ID"));
			    	cObj.setContactFirstName(rs.getString("FirstName"));
			    	cObj.setContactLastName(rs.getString("LastName"));
			    	 cObj.setContactTypeId(rs.getDouble("contactTypeID")); 	
			    	contactNameList.add(cObj);
			    	
			    }
			}  
		   json = util.util_makeJson(contactNameList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } 
		    
		    return json;
	}

	@Override
	public String bl_setDeletedPeople(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status= 444;
		Contact Obj = null;
		JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			query = "{call updateContactForDelete(?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
					
			cstatement.setDouble(1, reqObj.getEntityId());
			cstatement.setBoolean(2, true);
			cstatement.setString(3, reqObj.getUserId());
			cstatement.setString(4, reqObj.getToken());
			cstatement.setInt(5, reqObj.getDeletePermissionID());
			cstatement.setInt(6, status);
			cstatement.execute();
						
			cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
			status = cstatement.getInt(6);
						
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{		
			
				
				con.commit();
			}
			
			response = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				}

			}

		} 
		return response;
	}

	@Override
	public String bl_getAllCreatedByNameListForRR(PurpleaidRequest reqObj) throws Exception {
		Util_json util= null;
		String json=null;
		JdbcConnection JdbcConnectionObj = null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Contact> contactNameList = null;
		
		int status =444;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			contactNameList =new ArrayList<Contact>();
			String query = "{call getCreatedByNameListRR (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = cstatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
				
		   
			    while(rs.next()){
			    	
			    	Contact cObj = new Contact();
			    	
			    	cObj.setContactId(rs.getDouble("ID"));
			    	cObj.setContactFullName(rs.getString("createdByName"));	
			    	contactNameList.add(cObj);
			    	
			    }
			}  
		    json = util.util_makeJson(contactNameList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}
		    
		    return json;
	}

//	@Override
//	public String bl_getAllUserRoleList(PurpleaidRequest reqObj)throws Exception {
//		Util_json util= null;
//		String json=null;
//		Connection con = null;
//		ResultSet rs = null;
//		CallableStatement cstatement = null;
//		List<Role> roleList = null;
//		int status =444;
//		JdbcConnection JdbcConnectionObj = null;
//		try{
//			util= new Util_json();
//			//con = DataSource.getInstance().getConnection();
//	    	JdbcConnectionObj = new JdbcConnection();
//	    	con=JdbcConnectionObj.getConnection();
//			
//			roleList =new ArrayList<Role>();
//			String query = "{call getRoleList (?,?,?,?)}";
//			cstatement = con.prepareCall(query);
//			cstatement.setString(1, reqObj.getUserId());
//			cstatement.setString(2, reqObj.getToken());
//			cstatement.setInt(3, reqObj.getViewPermissionID());
//			cstatement.setInt(4, status);
//			rs=cstatement.executeQuery();
//		   		
//			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
//			status = cstatement.getInt(4);
//					
//			
//			if(status == 0){
//				throw new Exception("User is not Authorized"+"->"+status);
//			}else if(status == 1){
//				throw new Exception("No Permission"+"->"+status);
//			}else{						
//				double loopRoleID = 0;
//			
//				Role rObj = new Role();
//			    List<PurpleaidACL> rolePermissionList = new ArrayList<PurpleaidACL>();
//		   
//			    while(rs.next()){
//			    	
//			    	if 	(loopRoleID != rs.getDouble("ID")){
//						
//			    		rObj = new Role();
//			    		rolePermissionList = new ArrayList<PurpleaidACL>();
//			    	
//					    rObj.setRoleId(rs.getDouble("ID"));
//					    rObj.setRecid(rs.getDouble("ID"));
//					    rObj.setRole(rs.getString("Role"));
//					   
//					    
//					    PurpleaidACL pObj1 =null;
//					   					   
//					    if(rs.getInt("Type") == 1 ){   
//						    pObj1 = new PurpleaidACL();
//						    pObj1.setPurpleaidACLpermissionID(rs.getDouble("PermissionID"));
//						    pObj1.setPurpleaidACLpermission(rs.getString("Description"));
//						    pObj1.setRecid(rs.getDouble("PermissionID"));
//						    rolePermissionList.add(pObj1);
//						   
//					    }   
//					       
//						rObj.setRolePermissionList(rolePermissionList); 
//					    roleList.add(rObj);
//					    
//			    	}else{
//			    		PurpleaidACL pObj1 =null;
//					    //PurpleaidACL pObj = new PurpleaidACL();
//					  
//					   
//					    if(rs.getInt("Type") == 1 ){
//					    	pObj1 = new PurpleaidACL();
//						    pObj1.setPurpleaidACLpermissionID(rs.getDouble("PermissionID"));
//						    pObj1.setPurpleaidACLpermission(rs.getString("Description"));
//						    pObj1.setRecid(rs.getDouble("PermissionID"));
//						    rolePermissionList.add(pObj1);
//						}   
//					       
//						rObj.setRolePermissionList(rolePermissionList); 
//			    	}
//			    
//			    	loopRoleID = rs.getDouble("ID");  //set loopcustID for comparison
//			    	
//				} // while loop	
//			    
//			}  
//		    json = util.util_makeJson(roleList);
//		    
//		 }catch (Exception e) {
//			 try {
//				 con.close();
//				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
//			 } catch(Exception e1) {
//				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
//		    	}
//		   } finally{
//				if(con!=null){
//					DataSource.getInstance().closeConnection(con);
//				}
//				
//				if(cstatement!=null){
//					DataSource.getInstance().closeCallableStatment(cstatement);
//				}
//				
//			}
//		    
//		    return json;
//	}

/*	@Override
	public String bl_getUserRolePermissionList(PurpleaidRequest reqObj)	throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<PermissionGroup> permissionGroupList = null;
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
			permissionGroupList =new ArrayList<PermissionGroup>();
			
			String query = "{call getUserRolePermissionList (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, 95);
			cstatement.setInt(4, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = cstatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
				double loopGroupID = 0;
			
				PermissionGroup pgObj = new PermissionGroup();
			    List<PurpleaidACL> rolePermissionList = new ArrayList<PurpleaidACL>();
			    List<Role> roleList = new ArrayList<Role>();
			    PurpleaidACL pObj1 =null;
			    while(rs.next()){
			    	
			    	if 	(loopGroupID != rs.getDouble("permissionGroupID")){
						
			    		pgObj = new PermissionGroup();
			    		rolePermissionList = new ArrayList<PurpleaidACL>();
			    		roleList = new ArrayList<Role>();
			    		
			    		pgObj.setPermissionGroupId(rs.getDouble("permissionGroupID"));
			    		pgObj.setRecid(rs.getDouble("permissionGroupID"));
			    		pgObj.setPermissionGroup(rs.getString("permissionGroupDescription"));
			    							   
					  
					    pObj1 = new PurpleaidACL();
					    pObj1.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
					    pObj1.setPurpleaidACLpermission(rs.getString("permission"));
					    pObj1.setRecid(rs.getDouble("permissionID"));
					    pObj1.setPurpleaidACLFlgExclusive(rs.getBoolean("flgExclusive"));
					    pObj1.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
					    pObj1.setPurpleaidACLupid(rs.getDouble("UPID"));
					    pObj1.setPurpleaidACLroleID(rs.getDouble("userRoleID"));
					    rolePermissionList.add(pObj1);
						
					    if(rs.getDouble("userRoleID") != 0){
					    	 Role rObj = new Role();
							    rObj.setRoleId(rs.getDouble("userRoleID"));
							    roleList.add(rObj);
							    pObj1.setPermissionRoleList(roleList);
					    }
					   
					    
					    pgObj.setPermissionList(rolePermissionList);
					    
					    permissionGroupList.add(pgObj);
					    
			    	}else{
			    		 pObj1 = new PurpleaidACL();
						    pObj1.setPurpleaidACLpermissionID(rs.getDouble("permissionID"));
						    pObj1.setPurpleaidACLpermission(rs.getString("permission"));
						    pObj1.setRecid(rs.getDouble("permissionID"));
						    pObj1.setPurpleaidACLFlgExclusive(rs.getBoolean("flgExclusive"));
						    pObj1.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
						    pObj1.setPurpleaidACLupid(rs.getDouble("UPID"));
						    pObj1.setPurpleaidACLroleID(rs.getDouble("userRoleID"));
						    rolePermissionList.add(pObj1);
							   
						    if(rs.getDouble("userRoleID") != 0){
						    	 Role rObj = new Role();
								    rObj.setRoleId(rs.getDouble("userRoleID"));
								    roleList.add(rObj);
								    pObj1.setPermissionRoleList(roleList);
						    }
						    
						    pgObj.setPermissionList(rolePermissionList);
			    	}
			    
			    	loopGroupID = rs.getDouble("permissionGroupID");  //set loopcustID for comparison
			    	
				} // while loop	
			    
			}  
		    json = util.util_makeJson(permissionGroupList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}
		    
		    return json;
	}
	
	@Override
	public String bl_setUserPermission(PurpleaidRequest requestData)throws Exception {
		Util_json util= null;
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status =444;
		Role Obj = null;
		JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<Role>() {});
			query = "{call InsertUpdateUserPermission  (?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
			PurpleaidACL aclObj = new PurpleaidACL();
			
			for(int i=0;i<Obj.getRolePermissionList().size();i++){
				
				aclObj = Obj.getRolePermissionList().get(i);

				cstatement.setString(1, requestData.getUserId());
				cstatement.setDouble(2, Obj.getRoleId());
     			cstatement.setDouble(3 ,aclObj.getPurpleaidACLpermissionID());
				cstatement.setBoolean(4 ,aclObj.isPurpleaidACLIsPermissionDeleted());
				cstatement.setBoolean(5, aclObj.isPurpleaidACLManualFlag());
				cstatement.setString(6, requestData.getToken());
				cstatement.setInt(7, requestData.getInsertPermissionID());
				cstatement.setInt(8, requestData.getUpdatePermissionID());
				cstatement.setDouble(9, aclObj.getPurpleaidACLupid());
				cstatement.setDouble(10, status);
				cstatement.addBatch();
				
			}
						
			cstatement.executeBatch();
			
			cstatement.registerOutParameter(10, java.sql.Types.INTEGER);
			status = cstatement.getInt(10);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
			
				con.commit();
			}
			
			response = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
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
	public String bl_getAllRolePermissionList(PurpleaidRequest reqObj)throws Exception {
		Util_json util= null;
		String json=null;
		Connection con = null;
		ResultSet rs = null;
		CallableStatement cstatement = null;
		List<Role> roleList = null;
		int status =444;
		JdbcConnection JdbcConnectionObj = null;
		try{
			util= new Util_json();
			
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			
	    	
			roleList =new ArrayList<Role>();
			
			String query = "{call getAllRolePermissionList (?,?,?,?)}";
			cstatement = con.prepareCall(query);
			cstatement.setString(1, reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewAdvanceSettings());
			cstatement.setInt(4, status);
			rs=cstatement.executeQuery();
		   		
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			status = cstatement.getInt(4);
					
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{						
				double loopRoleID = 0;
			
				Role rObj = new Role();
			    List<PermissionGroup> rolePermissionList = null;
			    List<PurpleaidACL> PermissionList =null;
			    
			    while(rs.next()){
			    	
			    	if 	(loopRoleID != rs.getDouble("ID")){
						
			    		rObj = new Role();
			    		rolePermissionList = new ArrayList<PermissionGroup>();
			    		PermissionList = new ArrayList<PurpleaidACL>();
			    		
			    		
					    rObj.setRoleId(rs.getDouble("ID"));
					    rObj.setRecid(rs.getDouble("ID"));
					    rObj.setRole(rs.getString("Role"));
					    rObj.setRoleActiveFlag(rs.getBoolean("flgActive"));
					    
					    PermissionGroup pgObj = null;
					    PurpleaidACL pObj2 =null;
					    
					    if(rs.getInt("permissionType") == 0 ){   
					    	pgObj = new PermissionGroup();
					    	pgObj.setPermissionGroupId(rs.getDouble("groupID"));
				    		pgObj.setRecid(rs.getDouble("groupID"));
				    		pgObj.setPermissionGroup(rs.getString("permission"));
						    rolePermissionList.add(pgObj);
						} 
					    
					    if(rs.getInt("permissionType") == 1){
					    	pObj2 = new PurpleaidACL();
						    pObj2.setPurpleaidACLpermissionID(rs.getDouble("PermissionID"));
						    pObj2.setPurpleaidACLpermission(rs.getString("permission"));
						    pObj2.setRecid(rs.getDouble("PermissionID"));
						    pObj2.setPurpleaidACLpermissionGroupID(rs.getDouble("groupID"));
						    pObj2.setPurpleaidACLroleID(rs.getDouble("ID"));
						    pObj2.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
						    PermissionList.add(pObj2);
						    
					    }
					    pgObj.setPermissionList(PermissionList);
					  
						rObj.setPermissionList(rolePermissionList); 
					    roleList.add(rObj);
					    
			    	}else{
			    		  
			    		PermissionGroup pgObj =  new PermissionGroup();
					    PurpleaidACL pObj2 =null;
					    
					    if(rs.getInt("permissionType") == 0 ){   
					    	pgObj = new PermissionGroup();
					    	pgObj.setPermissionGroupId(rs.getDouble("groupID"));
				    		pgObj.setRecid(rs.getDouble("groupID"));
				    		pgObj.setPermissionGroup(rs.getString("permission"));
						    rolePermissionList.add(pgObj);
						} 
					    
					    if(rs.getInt("permissionType") == 1){
					    	pObj2 = new PurpleaidACL();
						    pObj2.setPurpleaidACLpermissionID(rs.getDouble("PermissionID"));
						    pObj2.setPurpleaidACLpermission(rs.getString("permission"));
						    pObj2.setRecid(rs.getDouble("PermissionID"));
						    pObj2.setPurpleaidACLpermissionGroupID(rs.getDouble("groupID"));
						    pObj2.setPurpleaidACLroleID(rs.getDouble("ID"));
						    pObj2.setPurpleaidACLIsPermission(rs.getBoolean("permissionFlag"));
						    PermissionList.add(pObj2);
						    
					    }
					    pgObj.setPermissionList(PermissionList);
					  
						rObj.setPermissionList(rolePermissionList);
						
			    	}
			    
			    	loopRoleID = rs.getDouble("ID");  //set loopcustID for comparison
			    	
				} // while loop	
			    
			}  
		    json = util.util_makeJson(roleList);
		    
		 }catch (Exception e) {
			 try {
				 con.close();
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
			 } catch(Exception e1) {
				 throw new Exception("\nError 15000101: "+e.getMessage()+"->"+status);
		    	}
		   } finally{
				if(con!=null){
					DataSource.getInstance().closeConnection(con);
				}
				
				if(cstatement!=null){
					DataSource.getInstance().closeCallableStatment(cstatement);
				}
				
			}
		    
		    return json;
	}

	@Override
	public String bl_setRole(PurpleaidRequest requestData) throws Exception {
		Util_json util= null;
		String response=null;
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status =444;
		Role Obj = null;
		JdbcConnection JdbcConnectionObj = null;
		try{	
			util= new Util_json();
			//con = DataSource.getInstance().getConnection();
	    	JdbcConnectionObj = new JdbcConnection();
	    	con=JdbcConnectionObj.getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<Role>() {});
			
			query = "{call InsertUpdateSecurityRoleMaster  (?,?,?,?,?,?,?,?,?,?)}";
			cstatement = con.prepareCall (query);
					
			cstatement.setDouble(1, Obj.getRoleId());
			cstatement.setString(2, Obj.getRole());
			cstatement.setBoolean(3, Obj.isRoleActiveFlag());
			cstatement.setString(4, requestData.getUserId());
			cstatement.setString(5, requestData.getToken());
			cstatement.setInt(6, requestData.getInsertPermissionID());
			cstatement.setInt(6, requestData.getUpdatePermissionID());
			cstatement.setDouble(7, status);
			
			
			cstatement.execute();
			
			cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
			cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
			
			status = cstatement.getInt(7);
			double output = cstatement.getDouble(1);
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
				String query3="{call  insertUpdateRolePermission (?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall (query3);
				
				for(int i =0;i<Obj.getRolePermissionList().size();i++){
					PurpleaidACL aclObj = new PurpleaidACL();
					aclObj = Obj.getRolePermissionList().get(i);
					
					cstatement.setDouble(1, aclObj.getPurpleaidACLrolePermissionID());
					
					if(Obj.getRoleId() == 0 ){
						cstatement.setDouble(2, output);
					}else{
						cstatement.setDouble(2, Obj.getRoleId());
					}
					
					cstatement.setDouble(3, aclObj.getPurpleaidACLpermissionID());
					cstatement.setString(4, requestData.getUserId());
					cstatement.setString(5, requestData.getToken());
					
					if(Obj.getRoleId() == 0){
						cstatement.setInt(6, requestData.getInsertPermissionID());
					}else{
						cstatement.setInt(6, requestData.getUpdatePermissionID());
					}
					
					cstatement.setDouble(7, status);
					cstatement.setBoolean(8, aclObj.isPurpleaidACLIsPermission());
					
					cstatement.addBatch();
					
					
				}
				cstatement.executeBatch();
				
				cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
				status = cstatement.getInt(7);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					
					if(Obj.getRoleId() != 0){
					
					String query4="{call  insertUpdateUserPermission (?,?,?,?,?,?,?,?,?,?,?)}";
					cstatement = con.prepareCall (query4);
					
					for(int i =0;i<Obj.getRolePermissionList().size();i++){
						PurpleaidACL aclObj = new PurpleaidACL();
						aclObj = Obj.getRolePermissionList().get(i);
						
						
						cstatement.setString(4, requestData.getUserId());
						cstatement.setDouble(2, Obj.getRoleId());
						cstatement.setDouble(3, aclObj.getPurpleaidACLpermissionID());
						cstatement.setString(5, requestData.getToken());
						cstatement.setInt(6, requestData.getUpdatePermissionID());
						cstatement.setDouble(7, status);
						cstatement.setBoolean(8, aclObj.isPurpleaidACLIsPermission());
					    cstatement.addBatch();
					
						
					}
					cstatement.executeBatch();
					
					cstatement.registerOutParameter(7, java.sql.Types.INTEGER);
					status = cstatement.getInt(7);
					
					if(status == 0){
						throw new Exception("User is not Authorized"+"->"+status);
					}else if(status == 1){
						throw new Exception("No Permission"+"->"+status);
					}else{
							
						con.commit();
				
					}
				}else{
					con.commit();
				}
					
				}	
				
			}
			response = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage()+"->"+status);
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
	}*/

	@Override
	public String bl_getMyProfileDetails(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		List<Contact> ProfileList = null;
		Contact cObj = null;
		CallableStatement cstatement = null;
		try
		{
			util = new Util_json();
			ProfileList = new ArrayList<Contact>();
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			query ="{call getMyProfileDetails(?,?,?,?)}";	// retrieves single record
			
			cstatement = con.prepareCall(query);
			cstatement.setString(1,reqObj.getUserId());
			cstatement.setString(2,reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			
			rs = cstatement.executeQuery();
			status = cstatement.getInt(4);	
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);				
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				while(rs.next()){
					
					cObj = new Contact();
					
					cObj.setContactId(rs.getDouble("ContactID"));
					cObj.setRecid(rs.getDouble("ContactID"));
					cObj.setContactFirstName(rs.getString("FirstName"));
					cObj.setContactMiddleName(rs.getString("MiddleName"));
					cObj.setContactLastName(rs.getString("LastName"));
					cObj.setContactjobTitle(rs.getString("JobTitle"));
					cObj.setContactOrganization(rs.getString("Organization"));
					cObj.setContactTypeDescription(rs.getString("ContactType"));
					
					ProfileList.add(cObj);
				}
			}
			
			json = util.util_makeJson(ProfileList);
	
		}catch(Exception e){
			
			try{
				con.close();
				throw new Exception("\n error 40000101"+e.getMessage());
				
			}catch(Exception e1){
				throw new Exception("\n error 40000101"+e1.getMessage());
			}	
		}
		return json;
			
	}

	
	@Override
	public String bl_setMyProfilDetails(PurpleaidRequest reqObj) throws Exception {

		//Util_json util = null;
		Connection con = null;
		JdbcConnection connection = null;
		CallableStatement cstatement = null;
		String query = null;
		String json = null;
		Contact cObj = null;
		int status = 444;
		
		try{
			
			//util = new Util_json();
			connection = new JdbcConnection();
			con =connection.getConnection();
			con.setAutoCommit(false);
			
			cObj = new ObjectMapper().readValue(reqObj.getRequestData(),new TypeReference<Contact>() {});
			
				query = "{call updatemyProfile(?,?,?,?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query);
				
				cstatement.setString(1,reqObj.getUserId());
				cstatement.setInt(2, cObj.getContactNameTitle());
				cstatement.setString(3, cObj.getContactFirstName());
				cstatement.setString(4, cObj.getContactMiddleName());
				cstatement.setString(5, cObj.getContactLastName());
				cstatement.setString(6, cObj.getContactjobTitle());
				cstatement.setString(7, cObj.getContactOrganization());
				cstatement.setString(8, reqObj.getToken());
				cstatement.setInt(9, reqObj.getViewPermissionID());
				cstatement.setInt(10, status);
				cstatement.setString(11, cObj.getContactTypeDescription());
				
				cstatement.registerOutParameter(1, java.sql.Types.DOUBLE);
				cstatement.registerOutParameter(10, java.sql.Types.DOUBLE);
				cstatement.registerOutParameter(11, java.sql.Types.VARCHAR);
				cstatement.execute();
				
				double CID = cstatement.getDouble(1);
				status = cstatement.getInt(10);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					
					System.out.println("contact "+CID +"updated successfully");
					
					cObj.setRecid(CID);
					String desc = cstatement.getString(11);
					cObj.setContactTypeDescription(desc);
					con.commit();
				}
				
		
		con.close();
		
		json = new ObjectMapper().writeValueAsString(cObj);
					
			
		}catch(Exception e){
			
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage());
				}
			}
		}
		
		return json;
	}

	@Override
	public String bl_getAllUserRoleList(PurpleaidRequest reqObj) throws Exception {
		
		Util_json util = null;
		JdbcConnection connectionObj = null;
		Connection con = null;
		String query = null;
		String json = null;
		ResultSet rs = null;
		int status = 444;
		CallableStatement cstatement = null;
		
		try
		{
			util = new Util_json();
			
			connectionObj = new JdbcConnection();
			con = connectionObj.getConnection();
			List<Contact> UserRoleList = new ArrayList<Contact>();
			
			query ="{call getUserRoleList(?,?,?,?)}";	// retrieves single record
			cstatement = con.prepareCall(query);
			cstatement.setString(1,reqObj.getUserId());
			cstatement.setString(2, reqObj.getToken());
			cstatement.setInt(3, reqObj.getViewPermissionID());
			cstatement.setInt(4, status);
			cstatement.registerOutParameter(4, java.sql.Types.INTEGER);
			rs = cstatement.executeQuery();
			status = cstatement.getInt(4);						
			
			
			if(status == 0){
				throw new Exception("User is not Authorized"+"->"+status);
			}else if(status == 1){
				throw new Exception("No Permission"+"->"+status);
			}else{
				
			double loopRID = 0;
			
			 Contact cObj1 = new Contact();
			 List<Role> roleList = new ArrayList<Role>();
			
			while(rs.next()){
			    
			     if(loopRID != rs.getDouble("contactID")){
			    	 
			    	 cObj1 = new Contact();
			    	 roleList = new ArrayList<Role>();
			    	 
			    	 cObj1.setContactId(rs.getDouble("contactID"));
				     cObj1.setRecid(rs.getDouble("contactID"));
				     cObj1.setContactUserName(rs.getString("userID"));
				     
				     Role Obj = new Role();
				     Obj.setRoleId(rs.getDouble("userRoleID"));
				     Obj.setRecid(rs.getDouble("userRoleID"));
				     Obj.setRole(rs.getString("UserRole"));
				     roleList.add(Obj);
				     cObj1.setRoleList(roleList);
				     
				     double output = cObj1.getContactId();
		    		    if(output != 0){
		    		     
		    		    cObj1.setRoleList(roleList); 
		    		    UserRoleList.add(cObj1);
		    		    	
		    		   	}else{
		    		   		
		    		   	 roleList.add(Obj);
		    		   	 cObj1.setRoleList(roleList); 
	    		    	 UserRoleList.add(cObj1);
		    		    }
			    	 
			     }else{
			    	 
			    	 Role Obj = new Role();
			    	 
				     Obj.setRoleId(rs.getDouble("userRoleID"));
				     Obj.setRecid(rs.getDouble("userRoleID"));
				     Obj.setRole(rs.getString("UserRole"));
				     
				     roleList.add(Obj);
				     cObj1.setRoleList(roleList);
			     }
			   
			     loopRID =  rs.getDouble("contactID");
			    
			     
			    }
			  }
	
		json = util.util_makeJson(UserRoleList);
			
		}catch(Exception e){
			
			try{
				con.close();
				throw new Exception("\n error 40000101"+e.getMessage());
				
			}catch(Exception e1){
				throw new Exception("\n error 40000101"+e1.getMessage());
			}	
		}
		return json;
		
	}
	
	@Override
	public String bl_setUser(PurpleaidRequest requestData) throws Exception {
		Util_json util= null;
		String response=null;
		
		Connection con = null;
		String query = null;
		CallableStatement cstatement = null;
		int status =0;
		Contact Obj = null;
		
		try{	
			util= new Util_json();
			con = DataSource.getInstance().getConnection();
			con.setAutoCommit(false);
			
			Obj = new ObjectMapper().readValue(requestData.getRequestData(), new TypeReference<Contact>() {});
			
			if(requestData.getIsMyProfileSetUser() == 1){
				
				query = "{call recetPassword(?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall(query);
					
				cstatement.setString(1,requestData.getUserId());
				cstatement.setString(2, Obj.getContactOldPassword());
				//cstatement.setString(3, Obj.getContactNewPassword());
				cstatement.setString(3, Obj.getContactUserPassward());
				cstatement.setString(4, requestData.getToken());
				cstatement.setInt(5, requestData.getUpdatePermissionID());
				cstatement.setInt(6,status);
				cstatement.setDouble(7, requestData.getStatus());
				
				//cstatement.registerOutParameter(1, java.sql.Types.VARCHAR);
				cstatement.registerOutParameter(6, java.sql.Types.INTEGER);
				cstatement.registerOutParameter(7, java.sql.Types.DOUBLE);
				cstatement.execute();
				
				//double CID = cstatement.getDouble(1);
				status = cstatement.getInt(6);
				
				if(status == 0){
					throw new Exception("User is not Authorized"+"->"+status);
				}else if(status == 1){
					throw new Exception("No Permission"+"->"+status);
				}else{
					
					int output = cstatement.getInt(7);
					if(output == 0){
						
						con.commit();
						//Obj.setOutputStatus(output);
					}else{
						System.out.println("password not match");
						//Obj.setOutputStatus(output);
						
					}	
				}		
			}else{
			
				query = "{call InsertUpdateContactUser  (?,?,?,?,?,?,?,?)}";
				cstatement = con.prepareCall (query);
						
				cstatement.setDouble(1, Obj.getContactId());
				cstatement.setString(2, Obj.getContactUserName());
				cstatement.setString(3, Obj.getContactUserPassward());
				cstatement.setBoolean(4, Obj.isContactUserLock());
				cstatement.setString(5, requestData.getUserId());
				cstatement.setString(6, requestData.getToken());
				cstatement.setInt(7, requestData.getInsertPermissionID());
				/*cstatement.setInt(8, requestData.getUpdatePermissionID());
				cstatement.setInt(9, requestData.getDeletePermissionID());*/
				cstatement.setDouble(8, status);
						
				cstatement.execute();
				
				cstatement.registerOutParameter(8, java.sql.Types.INTEGER);
				status = cstatement.getInt(8);
				
				if(status == 0){
					throw new Exception("User is not Authorized");
				}else if(status == 1){
					throw new Exception("No Permission");
				}else{
				
					con.commit();
				}
			}
			
			response = util.util_makeJson(Obj);
		}catch (Exception e) {
			try {	
				con.rollback();
				con.close();
				throw new Exception("\nError 10000102: "+e.getMessage());
			} catch (Exception e1) {
				try {
					con.close();
					throw new Exception("\nError 10000102: "+e.getMessage());
				} catch (Exception e2) {
					throw new Exception("\nError 10000102: "+e.getMessage());
				}

			}

		} 
		return response;
	}


}
