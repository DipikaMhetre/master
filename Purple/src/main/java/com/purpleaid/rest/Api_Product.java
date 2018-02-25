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
import com.purpleaid.bussinessLayer.Bl_Product;

@Path("/apiProduct")	
public class Api_Product {
	@POST
	@Path("/getProduct")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getProduct(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Product blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_Product();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(28);
			response.setResponseData(blObj.bl_getProduct(reqObj));
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
	@Path("/setProduct")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setArea(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Product blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_Product();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(29);
			reqObj.setUpdatePermissionID(31);
			reqObj.setDeletePermissionID(30);
			reqObj.setUpdateLockSmithPermissionID(66);
			response.setResponseData(blObj.bl_setProduct(reqObj));
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
	
	/*@POST
	@Path("/getListProduct")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getListProduct(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_Product blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			
			blObj = new Bl_Product();
			
			response = new PurpleaidResponse();
			response.setResponseData(blObj.bl_getListProduct(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		} catch (Exception e) {
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed");
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;	
		
	}*/

}
