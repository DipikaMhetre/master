package com.purpleaid.bussinessLayer;

import com.purpleaid.Impl.CompanyImpl;
import com.purpleaid.Impl.ContentImpl;
import com.purpleaid.Impl.DivisionImpl;
import com.purpleaid.Impl.ProductImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Company_IF;
import com.purpleaid.interfaces.Content_IF;
import com.purpleaid.interfaces.Division_IF;
import com.purpleaid.interfaces.Product_IF;

public class Bl_Product {

	public String bl_setProduct(PurpleaidRequest reqObj) throws Exception {
		Product_IF interfaceRef = null;
		
		String result = null;
		
		try {
			interfaceRef =  new ProductImpl();
			
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_setProduct(reqObj);	
						break;
					
				case 2: switch (reqObj.getListType()){
						
						case 1: result = interfaceRef.bl_setReassignProduct(reqObj);
						 		break;
						case 2: result = interfaceRef.bl_setProductListActiveLock(reqObj);
								break;
						 
				}
						
			    default:;
			    break;
			}
			
			
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}

	/*public String bl_getListProduct(PurpleaidRequest reqObj) throws Exception {
		Product_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new ProductImpl();
			switch(reqObj.getListType()){
				case 1:		
					result=interfaceRef.bl_getListCompanyProduct(reqObj.getEntityId());//Here Entity Id is reqired companys Id	
					break;
						
			    default:;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}*/

	public String bl_getProduct(PurpleaidRequest reqObj) throws Exception {
		Product_IF interfaceRef = null;
		Company_IF companyInterface = null;
		Division_IF divisionInterface = null;
		Content_IF contentInterface = null;
		String result = null;
		
		try {
			interfaceRef =  new ProductImpl();
			companyInterface = new CompanyImpl();
			divisionInterface = new DivisionImpl();
			contentInterface = new ContentImpl();
			switch(reqObj.getEntity()){
				/*case 1:		
					result=interfaceRef.bl_getListCompanyProduct(reqObj.getEntityId());//Here Entity Id is reqired companys Id	
					break;*/
			case 2: switch(reqObj.getEntity()){
				
					case 1: result = interfaceRef.getAllProductList(reqObj);
					 			break;
					
		 			default:     ;
				    		break;
			    
				
				}	
				 break;
			case 3:
				switch(reqObj.getListType()){
					case 1: result = interfaceRef.getAllProductListByCompany(reqObj);//ProductList for companyId
		 					break;
		 			case 2: result="{\"companyList\":"+companyInterface.bl_getAllActiveNonActiveCompanyList(reqObj)+",\"divisionList\":"+divisionInterface.bl_getAllDivisionList(reqObj)+"}";
		 					break;
					case 3: result= "{\"contentList\":"+contentInterface.bl_getContentList(reqObj)+",\"contentTypeList\":"+contentInterface.bl_getAllContentTypeList(reqObj)+"}";		
							break;
					/*case 4: result = interfaceRef.getAllProductListByMr(reqObj.getEntityId());//ProductList for mrId
							break;*/
					case 5: result = interfaceRef.getAllProductListByCompanySupplier(reqObj);//ProductList for divisionId
							break;
					
					default:     ;
							break;
				}
				break;
			  default:;
			  break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}

}
