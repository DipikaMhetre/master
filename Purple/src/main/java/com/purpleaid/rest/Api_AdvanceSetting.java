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
import com.purpleaid.bussinessLayer.Bl_AdvanceSetting;

@Path("/apiAdvanceSetting")
public class Api_AdvanceSetting {
	@POST
	@Path("/getAdvanceSetting")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getAdvanceSetting(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_AdvanceSetting blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			reqObj.setViewPermissionID(120);
			blObj = new Bl_AdvanceSetting();
			response = new PurpleaidResponse();
	
			response.setResponseData(blObj.bl_getAdvanceSetting(reqObj));
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
	@Path("/setAdvanceSetting")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setAdvanceSetting(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_AdvanceSetting blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			reqObj.setInsertPermissionID(121);
			blObj = new Bl_AdvanceSetting();
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_setAdvanceSetting(reqObj));
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
