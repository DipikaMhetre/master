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
import com.purpleaid.bussinessLayer.Bl_GoodsReceipt;


@Path("/apiGoodsReceipt")
public class Api_GoodsReceipt {

	@POST
	@Path("/getGoodsReceipt")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getGoodsReceipt(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_GoodsReceipt blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_GoodsReceipt();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(45);
			response.setResponseData(blObj.bl_getGoodsReceipt(reqObj));
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
	@Path("/setGoodsReceipt")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setGoodsReceipt(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_GoodsReceipt blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_GoodsReceipt();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(45);
			reqObj.setUpdatePermissionID(47);
			reqObj.setDeletePermissionID(46);
			response.setResponseData(blObj.bl_setGoodsReceipt(reqObj));
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

