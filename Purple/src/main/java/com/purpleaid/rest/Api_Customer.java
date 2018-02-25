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
import com.purpleaid.bussinessLayer.Bl_Customer;


@Path("/apiCustomer")
public class Api_Customer {
	@POST
	@Path("/getCustomer")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCustomer(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Customer blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Customer();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(11);
			response.setResponseData(blObj.bl_getCustomer(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
			//result.s
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
	@Path("/setCustomer")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setCustomer(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Customer blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Customer();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(12);
			reqObj.setUpdatePermissionID(14);
			reqObj.setDeletePermissionID(13);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setCustomer(reqObj));
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

}
