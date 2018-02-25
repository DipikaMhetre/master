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
import com.purpleaid.bussinessLayer.Bl_TaxCode;

@Path("/apiTaxCode")
public class Api_TaxCode {
	@POST
	@Path("/getTaxCode")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getTaxCode(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_TaxCode blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});
			blObj = new Bl_TaxCode();
			response = new PurpleaidResponse();
			//reqObj.setViewPermissionID(1);
			response.setResponseData(blObj.bl_getTaxCode(reqObj));
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
	@Path("/setTaxCode")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_setArea(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		Bl_TaxCode blObj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try {
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>() {});		
			blObj = new Bl_TaxCode();
			response = new PurpleaidResponse();
			/*reqObj.setInsertPermissionID(2);
			reqObj.setUpdatePermissionID(3);
			reqObj.setDeletePermissionID(4);*/
			response.setResponseData(blObj.bl_setTaxCode(reqObj));
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
