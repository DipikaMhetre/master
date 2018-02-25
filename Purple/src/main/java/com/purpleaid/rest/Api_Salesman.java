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
import com.purpleaid.bussinessLayer.Bl_Salesman;

@Path("/apiSalesman")	
public class Api_Salesman {
	@POST
	@Path("/getSalesman")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getSalesman(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Salesman blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Salesman();
			
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_getSalesman(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
		//	responseJSON = "{\"routeList\":"+response.getResponseData()+"}";
			
		} catch (Exception e) {
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;	
		
	}
	@POST
	@Path("/setSalesman")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setCustomer(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Salesman blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Salesman();
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_setSalesman(reqObj));
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
	
}
