package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.Path;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import com.purpleaid.bussinessLayer.Bl_Reason;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.PurpleaidResponse;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

@Path("/apiReason")
public class Api_Reason {
		@POST
		@Path("/getReason")
		@Produces(MediaType.APPLICATION_JSON)
		
		public String api_getReason(String reqString) throws JsonGenerationException, JsonMappingException, IOException
		{
			Bl_Reason blObj = null;
			PurpleaidRequest reqObj = null;
			PurpleaidResponse response = null;
			String responseJSON = null;
			
			try
			{
				reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){}); 
				blObj = new Bl_Reason();
				response = new PurpleaidResponse();
				reqObj.setViewPermissionID(100);
				response.setResponseData(blObj.bl_getReason(reqObj));
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
		
		@POST
		@Path("/setReason")
		@Produces(MediaType.APPLICATION_JSON)
		
		public String api_Reason(String reqString) throws JsonGenerationException, JsonMappingException, IOException
		{
			Bl_Reason blObj = null;
			PurpleaidRequest reqObj = null;
			PurpleaidResponse response = null;
			String responseJSON = null;
			
			try
			{
				reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){}); 
				blObj = new Bl_Reason();
				response = new PurpleaidResponse();
				
				reqObj.setInsertPermissionID(101);
				reqObj.setUpdatePermissionID(103);
				reqObj.setDeletePermissionID(102);
				response.setResponseData(blObj.bl_setReason(reqObj));
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
