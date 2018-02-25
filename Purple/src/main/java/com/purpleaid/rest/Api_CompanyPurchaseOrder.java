package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.PurpleaidResponse;
import com.purpleaid.bussinessLayer.Bl_CompanyPurchaseOrder;
@Path("/apiCompanyPurchaseOrder")
public class Api_CompanyPurchaseOrder {
	@POST
	 @Path("/getCompanyPurchaseOrder")
	 public String api_retrieveCompanyOrder(String reqString) throws JsonParseException, JsonMappingException, IOException{
	     	Bl_CompanyPurchaseOrder blObj = null;
			PurpleaidRequest reqObj = null;
			PurpleaidResponse response = null;
			String responseJSON = null;
			
			try {
				reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
				blObj = new Bl_CompanyPurchaseOrder();
				response = new PurpleaidResponse();
				reqObj.setViewPermissionID(1);
				response.setResponseData(blObj.bl_getCompanyPurchaseOrder(reqObj));
				response.setResponseCode("200");
				response.setStatusMessage("ok");
				
			} catch (Exception e) {
				response = new PurpleaidResponse();
				response.setResponseData(null);
				response.setResponseCode(e.getMessage());
				response.setStatusMessage("failed");
			}
			
			responseJSON = new ObjectMapper().writeValueAsString(response);
			return responseJSON;
	     
	     
	 }
	@POST
	@Path("/setCompanyPurchaseOrder")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setCompanyPurchaseOrder(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_CompanyPurchaseOrder blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_CompanyPurchaseOrder();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(2);
			reqObj.setUpdatePermissionID(3);
			reqObj.setDeletePermissionID(4);
			reqObj.setChangeDatePermissionID(5);
			response.setResponseData(blObj.bl_setCompanyPurchaseOrder(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		} catch (Exception e) {
			response = new PurpleaidResponse();
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
		}
	
		responseJSON = new ObjectMapper().writeValueAsString(response);
		/*try {
			responseJSON = new ObjectMapper().writeValueAsString(response);
		} catch (JsonGenerationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}*/
		return responseJSON;	
	}
}
