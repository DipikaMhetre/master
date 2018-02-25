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
import com.purpleaid.bussinessLayer.Bl_SysPermissionRole;

@Path("/apiSysPermissionRole")
public class Api_SysPermissionRole {
	@POST
	@Path("/getSysPermissionRole")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getSysPermissionRole(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_SysPermissionRole blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_SysPermissionRole();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(93);
			response.setResponseData(blObj.bl_getSysPermissionRole(reqObj));
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
	@Path("/setSysPermissionRole")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setSysPermissionRole(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_SysPermissionRole blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_SysPermissionRole();
			response = new PurpleaidResponse();
			reqObj.setUpdatePermissionID(94);
			
			response.setResponseData(blObj.bl_setSysPermissionRole(reqObj));
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
