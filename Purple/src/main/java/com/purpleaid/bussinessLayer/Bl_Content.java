package com.purpleaid.bussinessLayer;


import com.purpleaid.Impl.ContentImpl;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.interfaces.Content_IF;


public class Bl_Content {
	public String bl_getContent(PurpleaidRequest reqObj) throws Exception{
		Content_IF interfaceRef = null;
		
		String result = null;
		
		try {
			interfaceRef =  new ContentImpl();
			
			result = null;
			
			switch(reqObj.getEntity()){
				case 1:	result=interfaceRef.bl_getContent(0);	
						break;
				
				case 2: switch(reqObj.getListType()){
				
							case 1: result="{\"contentList\":"+interfaceRef.bl_getAllContentList(reqObj)+",\"contentTypeList\":"+interfaceRef.bl_getAllContentTypeList(reqObj)+"}";		
									break;
							
							case 2:result= "{\"contentList\":"+interfaceRef.bl_getContentList(reqObj)+",\"contentTypeList\":"+interfaceRef.bl_getAllContentTypeList(reqObj)+"}";		
											break;
							
											/*case 2: result=interfaceRef.bl_getAllDivisionList();	
									result=companyInterface.bl_getAllCompanyList();
									result="{\"divisionList\":"+interfaceRef.bl_getAllDivisionList()+",\"companyList\":"+companyInterface.bl_getAllCompanyList()+"}";
									break;

*/							/*case 3:interfaceRef.bl_getAllRouteList();	
							break;	*/
						};
						break;
			    
				default:System.out.println("Default");;
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
		
		return result;
	}
	
	public String bl_setContent(PurpleaidRequest reqObj) throws Exception{
		Content_IF interfaceRef = null;
		String result = null;
		
		try {
			interfaceRef =  new ContentImpl();
			switch(reqObj.getEntity()){
				case 1:		
					result=interfaceRef.bl_setContent(reqObj);	
					break;
				/*case 2: switch(reqObj.getListType()){ 		
				
								case 1: interfaceRef.bl_setDivisionList(reqObj.getRequestData());
			
				}
			*/	default:System.out.println("Default");
			    break;
			}
		} catch (Exception e) {
			throw new Exception(e.getMessage());
		}
			
		return result;
	}

}
