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
import com.purpleaid.bussinessLayer.Bl_ActiveUsers;


@Path("/apiActiveUsers")
public class Api_ActiveUsers {

	@POST
	@Path("/getActiveUsers")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getActiveUsers(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_ActiveUsers blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_ActiveUsers();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(92);
			response.setResponseData(blObj.bl_getActiveUsers(reqObj));
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
	@Path("/setActiveUsers")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setActiveUsers(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_ActiveUsers blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_ActiveUsers();
			response = new PurpleaidResponse();
			reqObj.setDeletePermissionID(148);
			reqObj.setViewPermissionID(92);
			response.setResponseData(blObj.bl_setActiveUsers(reqObj));
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
	
	
	
	
}
