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
import com.purpleaid.bussinessLayer.Bl_Supplier;

@Path("/apiSupplier")	
public class Api_Supplier {
	@POST
	@Path("/getSupplier")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getSupplier(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Supplier blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Supplier();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(20);
			response.setResponseData(blObj.bl_getSupplier(reqObj));
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
	@Path("/setSupplier")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setSupplier(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Supplier blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Supplier();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(21);
			reqObj.setUpdatePermissionID(23);
			reqObj.setDeletePermissionID(22);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setSupplier(reqObj));
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

}
