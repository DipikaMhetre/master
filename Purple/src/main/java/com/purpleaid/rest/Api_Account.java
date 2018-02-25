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
import com.purpleaid.bussinessLayer.Bl_Account;
import com.purpleaid.bussinessLayer.Bl_Company2;

@Path("/apiAccount")
public class Api_Account {
	@POST
	@Path("/getAccount")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getAccount(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Account blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_Account();
			response = new PurpleaidResponse();
			//reqObj.setViewPermissionID(); 
			response.setResponseData(blObj.bl_getAccount(reqObj));
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
			/*reqObj.setInsertPermissionID();
			reqObj.setUpdatePermissionID();
			reqObj.setDeletePermissionID();*/
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
