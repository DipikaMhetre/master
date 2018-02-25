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
import com.purpleaid.bussinessLayer.Bl_Route;

@Path("/apiRoute")
public class Api_Route {
	@POST
	@Path("/getRoute")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getRoute(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Route blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Route();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(40);
			response.setResponseData(blObj.bl_getRoute(reqObj));
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
	@Path("/setRoute")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setRoute(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Route blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Route();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(41);
			reqObj.setUpdatePermissionID(43);
			reqObj.setDeletePermissionID(42);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setRoute(reqObj));
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
