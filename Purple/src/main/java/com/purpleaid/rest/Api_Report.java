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
import com.purpleaid.bussinessLayer.Bl_Report;


@Path("/apiReport")
public class Api_Report {
	
	@POST
	@Path("/getCategoryList")	
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getReportCategoryList(String reqString) throws JsonGenerationException, JsonMappingException, IOException {
		
		Bl_Report blreport = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		//response = new PurpleaidResponse();
		try
		{
			reqObj = new ObjectMapper().readValue(reqString, new  TypeReference<PurpleaidRequest>(){});
			blreport = new Bl_Report();
			response = new PurpleaidResponse();
			reqObj.setViewPermissionID(80);
			response.setResponseData(blreport.bl_getReport(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		}catch(Exception e){
			response = new PurpleaidResponse();
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed to load");
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
		
	}
	
/*	@POST
	@Path("/getReportList")	
	@Produces(MediaType.APPLICATION_JSON)
	
	public String api_getReportList(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		Bl_Report blreport = null;
		PurpleaidRequest reqObj = null;
		PurpleaidResponse response = null;
		String responseJSON = null;
		
		try
		{
			reqObj = new ObjectMapper().readValue(reqString, new  TypeReference<PurpleaidRequest>(){});
			blreport = new Bl_Report();
			response = new PurpleaidResponse();
			response.setResponseData(blreport.bl_getReport(reqObj));
			response.setResponseCode("200");
			response.setStatusMessage("ok");
			
		}catch(Exception e){
			response.setResponseData(null);
			response.setResponseCode(e.getMessage());
			response.setStatusMessage("failed to load");
		}
		
		responseJSON = new ObjectMapper().writeValueAsString(response);
		return responseJSON;
		
		
	}*/
	
}
