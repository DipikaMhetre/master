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
import com.purpleaid.bussinessLayer.Bl_MyProfile;

@Path("/apiMyProfile")
public class Api_MyProfile {
	
	@POST
	@Path("/getMyProfile")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getMyProfile(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_MyProfile blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_MyProfile();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(115);
			response.setResponseData(blobj.bl_getMyProfile(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("OK");
			
		}catch(Exception e){
			
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("Failed");	
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
	}	


	@POST
	@Path("/setMyProfile")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setMyProfile(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_MyProfile blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_MyProfile();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(115);
			reqObj.setUpdatePermissionID(107);
			response.setResponseData(blobj.bl_setMyProfile(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("OK");
			
		}catch(Exception e){
			
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("Failed");	
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
	}	
}




	
	