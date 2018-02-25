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
import com.purpleaid.bussinessLayer.Bl_StockAudit;


@Path("/apiStockAudit")
public class Api_StockAudit {
	
	@POST
	@Path("/getStockAudit")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getStockAudit(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_StockAudit blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		response = new PurpleaidResponse();
		try{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_StockAudit();
			
			reqObj.setViewPermissionID(151);
			response.setResponseData(blObj.bl_getStockaudit(reqObj));
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
	@Path("/setStockAudit")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setStockAudit(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_StockAudit blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		response = new PurpleaidResponse();
		try{
			
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_StockAudit();
			
			reqObj.setInsertPermissionID(152);
			reqObj.setUpdatePermissionID(153);
			reqObj.setDeletePermissionID(156);
			/*reqObj.setAuditLockPermissionID(0);
			reqObj.setSaleLockPermissionID(0);
			reqObj.setDataEntryLockpermissionID(0);*/
			
			response.setResponseData(blObj.bl_setStockaudit(reqObj));
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
