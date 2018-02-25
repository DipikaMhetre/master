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

import com.purpleaid.bussinessLayer.Bl_People;

@Path("/apiPeople")
public class Api_People {
	@POST
	@Path("/getPeople")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getPeople(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_People blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		response = new PurpleaidResponse();
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_People();
			reqObj.setViewPermissionID(61);
			//reqObj.setViewUserAdvanceSettingPermissionID(149);
			response.setResponseData(blObj.bl_getPeople(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		} catch (Exception e) {
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;	
		
	}
	
	@POST
	@Path("/setPeople")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setContactManager(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_People blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_People();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(62);
			reqObj.setUpdatePermissionID(64);
			reqObj.setDeletePermissionID(63);
			//reqObj.setUpdateUserAdvanceSettingPermissionID(150);
			response.setResponseData(blObj.bl_setPeople(reqObj));
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
