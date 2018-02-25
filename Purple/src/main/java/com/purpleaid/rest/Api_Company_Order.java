package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.CompanyPurchaseOrder;
import com.purpleaid.bussinessLayer.Bl_Company;
import com.purpleaid.utilities.ResultDTO;

@Path("/apiCompanyOrder")
public class Api_Company_Order {
	
	@POST
	@Path("/apiSaveCompanyOrder")
	@Consumes(MediaType.APPLICATION_JSON)
	
	public String api_saveCompanyOrder(String cpoObjString) throws JsonParseException, JsonMappingException, IOException{
		
		String response = null;
		CompanyPurchaseOrder cpoObj = null;
		ResultDTO resultDTO = new ResultDTO();
		
		try{
			cpoObj = new ObjectMapper().readValue(cpoObjString, new TypeReference<CompanyPurchaseOrder>(){});
			resultDTO.setSuccess(true);
			resultDTO.setErrorMessage(null);			
			Bl_Company blCompanyObj = new Bl_Company();
			resultDTO.setData(blCompanyObj.bl_saveCompanyPurchaseOrder(cpoObj));
		}catch(Exception e){
			resultDTO.setSuccess(false);
			resultDTO.setErrorMessage(e.getMessage());
			e.printStackTrace();
		}
		ObjectMapper mapper=new ObjectMapper();
		response=mapper.writeValueAsString(resultDTO);
		return response;
		
	}
	
	@POST
	 @Path("/apiRetrieveCompanyOrder")
	 public String api_retrieveCompanyOrder(double cpoRetrieveId) throws JsonParseException, JsonMappingException, IOException{
	  String response = null;
	     ResultDTO resultDTO = new ResultDTO();
	    
	     try{
	      //cpoObj = new ObjectMapper().readValue(cpoRetrieve, new TypeReference<CompanyPurchaseOrder>(){});
	    
	      resultDTO.setSuccess(true);
	         resultDTO.setErrorMessage(null);
	         Bl_Company blCompanyObj = new Bl_Company();
	         resultDTO.setData(blCompanyObj.bl_retrieveCompanyPurchaseOrder(cpoRetrieveId));
	     }catch(Exception e){
	         resultDTO.setSuccess(false);
	         resultDTO.setErrorMessage(e.getMessage());
	         e.printStackTrace();
	      }
	     response=new ObjectMapper().writeValueAsString(resultDTO);
	     return response;  
	 }

}
