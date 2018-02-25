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
import com.purpleaid.bussinessLayer.Bl_Receipt;


@Path("/apiReceipt")
public class Api_Receipt {

	@POST
	@Path("/getReceipt")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getReceipt(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_Receipt blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		response = new PurpleaidResponse();
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_Receipt();
			
			
			reqObj.setViewPermissionID(111);
			response.setResponseData(blobj.bl_getReceipt(reqObj));
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
	@Path("/setReceipt")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setReceipt(String reqString) throws JsonGenerationException, JsonMappingException, IOException
	{
		Bl_Receipt blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		response = new PurpleaidResponse();
		try
		{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blObj = new Bl_Receipt();
		
			reqObj.setInsertPermissionID(112);
			reqObj.setUpdatePermissionID(114);
			reqObj.setDeletePermissionID(113);
			
			response.setResponseData(blObj.bl_setReceipt(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("OK");
			
			
		}catch(Exception e){
			
			
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
	}
		responseJSON = new ObjectMapper().writeValueAsString(response);
		
		return responseJSON;
		
	}
}
