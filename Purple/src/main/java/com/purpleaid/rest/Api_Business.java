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
import com.purpleaid.bussinessLayer.Bl_Business;

@Path("/apiBusiness")
public class Api_Business {
	
	@POST
	@Path("/getBusiness")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getBusiness(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_Business blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blObj = new Bl_Business();
			response = new PurpleaidResponse();
			
			reqObj.setViewPermissionID(120);
			response.setResponseData(blObj.bl_BusinessDetails(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("OK");
			
			
		}catch(Exception e){
			
			response = new PurpleaidResponse();
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("Failed");	
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		
		return responseJSON;
		
	}

	@POST
	@Path("/setBusiness")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setBusiness(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Business blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Business();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(123);
			//reqObj.setUpdatePermissionID(201);
			//reqObj.setDeletePermissionID(204);
			//reqObj.setChangeDatePermissionID(5);
			response.setResponseData(blObj.bl_setBusinessDetails(reqObj));
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
