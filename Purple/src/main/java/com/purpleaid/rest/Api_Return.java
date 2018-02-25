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
import com.purpleaid.bussinessLayer.Bl_Return;


@Path("/apiReturn")
public class Api_Return {
 	@POST
	@Path("/getReturn")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getReturn(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Return blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_Return();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(53);
			response.setResponseData(blObj.bl_getReturn(reqObj));
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
	@Path("/setReturn")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setReturn(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Return blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Return();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(54);
			reqObj.setUpdatePermissionID(56);
			reqObj.setDeletePermissionID(55);
			response.setResponseData(blObj.bl_setReturn(reqObj));
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
