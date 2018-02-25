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
import com.purpleaid.bussinessLayer.Bl_Division;

@Path("/apiDivision")
public class Api_Division {

	@POST
	@Path("/getDivision")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getDivision(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Division blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_Division();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(24);
			response.setResponseData(blObj.bl_getDivision(reqObj));
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
	@Path("/setDivision")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setDivision(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Division blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Division();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(25);
			reqObj.setUpdatePermissionID(27);
			reqObj.setDeletePermissionID(26);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setDivision(reqObj));
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
