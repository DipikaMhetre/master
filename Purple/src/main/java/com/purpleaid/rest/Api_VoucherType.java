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
import com.purpleaid.bussinessLayer.Bl_VoucherType;

@Path("/apiVoucherType")
public class Api_VoucherType {
	
	@POST
	@Path("/getVoucherType")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getVoucherType(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_VoucherType blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_VoucherType();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(104);
			response.setResponseData(blobj.bl_getVoucherType(reqObj));
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
	@Path("/setVoucherType")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setControlPanelMisc(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_VoucherType blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_VoucherType();
			
			response = new PurpleaidResponse();
			reqObj.setInsertPermissionID(105);
			reqObj.setUpdatePermissionID(107);
			reqObj.setDeletePermissionID(106);
			response.setResponseData(blobj.bl_setVoucherType(reqObj));
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
