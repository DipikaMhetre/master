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
import com.purpleaid.bussinessLayer.Bl_StockManager;

@Path("/apiStockManager")
public class Api_StockManager {
	@POST
	@Path("/getStockManager")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getStockManager(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_StockManager blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_StockManager();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(48);
			response.setResponseData(blObj.bl_getStockManager(reqObj));
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
	@Path("/setStockManager")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setStockManager(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_StockManager blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_StockManager();
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(49);
			reqObj.setUpdatePermissionID(51);
			reqObj.setDeletePermissionID(50);
			
			response.setResponseData(blObj.bl_setStockManager(reqObj));
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
