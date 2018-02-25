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
import com.purpleaid.bussinessLayer.Bl_ControlPanelMisc;

@Path("/apiControlPanelMisc")
public class Api_ControlPanelMisc {
	
	@POST
	@Path("/getControlPanelMisc")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getControlPanelMisc(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_ControlPanelMisc blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_ControlPanelMisc();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(96);
			response.setResponseData(blobj.bl_getControlPanelMisc(reqObj));
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
	@Path("/setControlPanelMisc")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setControlPanelMisc(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_ControlPanelMisc blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_ControlPanelMisc();
			
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(97);
			reqObj.setUpdatePermissionID(99);
			reqObj.setDeletePermissionID(98);
			
			response.setResponseData(blobj.bl_setControlPanelMisc(reqObj));
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
