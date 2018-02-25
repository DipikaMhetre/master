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
import com.purpleaid.bussinessLayer.Bl_SystemRole;

@Path("/apiSystemRole")
public class Api_SystemRole {

	@POST
	@Path("/getSystemRole")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getSystemRole(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_SystemRole blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_SystemRole();
			reqObj.setViewPermissionID(117);
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_getSystemRole(reqObj));
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
	@Path("/setSystemRole")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setSystemRole(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_SystemRole blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_SystemRole();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(135);
			reqObj.setUpdatePermissionID(118);
			response.setResponseData(blObj.bl_setSystemRole(reqObj));
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
