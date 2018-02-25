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
import com.purpleaid.bussinessLayer.Bl_PurpleaidACL;


@Path("/apiPurpleaidACL")
public class Api_PurpleaidACL {
	@POST
	@Path("/getPurpleaidACL")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getPurpleaidACL(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_PurpleaidACL blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_PurpleaidACL();
			
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_getPurpleaidACL(reqObj));
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
	@Path("/setPurpleaidACL")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setPurpleaidACL(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_PurpleaidACL blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_PurpleaidACL();
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_setPurpleaidACL(reqObj));
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
