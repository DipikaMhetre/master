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

import com.purpleaid.bussinessLayer.Bl_Content;

@Path("/apiContent")
public class Api_Content {
	@POST
	@Path("/getContent")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getContent(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Content blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Content();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(32);
			response.setResponseData(blObj.bl_getContent(reqObj));
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
	@Path("/setContent")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setContent(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Content blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Content();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(33);
			reqObj.setUpdatePermissionID(35);
			reqObj.setDeletePermissionID(34);
			response.setResponseData(blObj.bl_setContent(reqObj));
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
