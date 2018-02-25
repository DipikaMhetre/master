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
import com.purpleaid.bussinessLayer.Bl_ControlPanel;

@Path("/apiControlPanel")
public class Api_ControlPanel {
	@POST
	@Path("/getControlPanel")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getControlPanel(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_ControlPanel blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		response = new PurpleaidResponse();
		try{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_ControlPanel();
			
			reqObj.setViewPermissionID(159);
			response.setResponseData(blObj.bl_getControlPanel(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		}catch(Exception e){
			
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
			
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
	}
	
	@POST
	@Path("/setControlPanel")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setControlPanel(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_ControlPanel blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		response = new PurpleaidResponse();
		try{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_ControlPanel();
			
			
			reqObj.setUpdatePermissionID(160);
			response.setResponseData(blObj.bl_setControlPanel(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		}catch(Exception e){
			
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
			
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
	}
	

}
