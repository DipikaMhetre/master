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
import com.purpleaid.bussinessLayer.Bl_Company2;

@Path("/apiCompany2")	
public class Api_Company2 {
	@POST
	@Path("/getCompany2")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCompany(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Company2 blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_Company2();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(15);
			response.setResponseData(blObj.bl_getCompany2(reqObj));
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
	@Path("/setCompany2")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setCompany(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Company2 blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Company2();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(16);
			reqObj.setUpdatePermissionID(18);
			reqObj.setDeletePermissionID(17);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setCompany2(reqObj));
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
