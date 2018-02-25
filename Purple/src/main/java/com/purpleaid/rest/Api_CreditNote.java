package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.PurpleaidResponse;
import com.purpleaid.bussinessLayer.Bl_CreditNote;

@Path("/apiCreditNote")
public class Api_CreditNote {

	@POST
	@Path("/getCreditNote")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCreditNote(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_CreditNote blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			reqObj.setViewPermissionID(126);
			reqObj.setViewCNDNPermissionID(127);
			blObj = new Bl_CreditNote();
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_getCreditNote(reqObj));
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
	@Path("/setCreditNote")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setCreditNote(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_CreditNote blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_CreditNote();
			response = new PurpleaidResponse();
			reqObj.setInsertCNDNPermissionID(128);
			reqObj.setUpdateCNDNPermissionID(129);
			//reqObj.setVerifiedPermisionID(131);
			reqObj.setDeleteCNDNPermissionID(130);
			response.setResponseData(blObj.bl_setCreditNote(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
			//result.s
		} catch (Exception e) {
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
		}
	
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
	}
	
	
	
	
	
}
