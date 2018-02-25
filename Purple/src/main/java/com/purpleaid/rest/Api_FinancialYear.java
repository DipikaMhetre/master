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
import com.purpleaid.bussinessLayer.Bl_FinancialYear;


@Path("/apiFinancialyear")
public class Api_FinancialYear {
	
	@POST
	@Path("/getFinancialYear")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getFinancialYear(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_FinancialYear blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_FinancialYear();
			
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(108);
			response.setResponseData(blobj.bl_getFinancialYear(reqObj));
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
	@Path("/setFinancialYear")
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_setFinancialYear(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_FinancialYear blobj = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try{
			reqObj = new ObjectMapper().readValue(reqString, new TypeReference<PurpleaidRequest>(){});
			blobj = new Bl_FinancialYear();
			
			response = new PurpleaidResponse();
			reqObj.setUpdatePermissionID(110);
			reqObj.setInsertPermissionID(109);
			response.setResponseData(blobj.bl_setFinancialYear(reqObj));
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




	
	