package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.*;

import com.purpleaid.bussinessLayer.Bl_Master;
import com.purpleaid.utilities.ResultDTO;

@Path("/apiMasters")
public class ApiMasters {
	
	@POST
	@Path("/apiSaveCompanyMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveCompanyMaster(String cmoObjString) throws JsonParseException, JsonMappingException, IOException{
		Company ComObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			ComObj = new ObjectMapper().readValue(cmoObjString, new TypeReference<Company>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveCompanyMaster(ComObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		 }
		return ResponseJson;
	}
	
	@POST
	@Path("/apiSaveSupplierMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveSupplierMaster(String smoObjString) throws JsonParseException, JsonMappingException, IOException{
		Supplier supObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			supObj = new ObjectMapper().readValue(smoObjString, new TypeReference<Supplier>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveSupplierMaster(supObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		 }
		return ResponseJson;
	 }
	
	 
	@POST
	@Path("/apiSaveMrMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveMrMaster(String MrmoObjString) throws JsonParseException, JsonMappingException, IOException{
		MR mrObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			mrObj = new ObjectMapper().readValue(MrmoObjString, new TypeReference<MR>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveMrMaster(mrObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		 }
		return ResponseJson;
	}
	 
	 
	@POST
	@Path("/apiSaveDivisionMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveDivisionMaster(String MrmoObjString) throws JsonParseException, JsonMappingException, IOException{
		Division divObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			divObj = new ObjectMapper().readValue(MrmoObjString, new TypeReference<Division>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveDivisionMaster(divObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;	 
	 }
	 
	
	
	
	//NIKITAS CODE=============================================
	
	@POST
	@Path("/apiSaveCustomerMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveCustomerMaster(String custmoObjString) throws JsonParseException, JsonMappingException, IOException{
		Customer custObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			custObj = new ObjectMapper().readValue(custmoObjString, new TypeReference<Customer>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveCustomerMaster(custObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;
	 }	
	
	
	@POST
	@Path("/apiSaveAreaMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveAreaMaster(String areaObjString) throws JsonParseException, JsonMappingException, IOException{
		Area areaObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			areaObj = new ObjectMapper().readValue(areaObjString, new TypeReference<Area>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveAreaMaster(areaObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;
	 }	
	
	@POST
	@Path("/apiSaveRegionMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveRegionMaster(String regObjString) throws JsonParseException, JsonMappingException, IOException{
		Region regObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			regObj = new ObjectMapper().readValue(regObjString, new TypeReference<Region>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveRegionMaster(regObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;
	 }	


	
	@POST
	@Path("/apiSaveRouteMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveRouteMaster(String regObjString) throws JsonParseException, JsonMappingException, IOException{
		Route rObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			rObj = new ObjectMapper().readValue(regObjString, new TypeReference<Route>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveRouteMaster(rObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;
	 }	

	
	@POST
	@Path("/apiSaveSalesmanMaster")
	/*@Consumes(MediaType.APPLICATION_JSON)*/
	@Produces(MediaType.APPLICATION_JSON)
	public String api_SaveSalesmanMaster(String regObjString) throws JsonParseException, JsonMappingException, IOException{
		Salesman sObj = null;
		String JsonResponse = null;
		ResultDTO response = null;
		String ResponseJson = null;
		
		try{
			sObj = new ObjectMapper().readValue(regObjString, new TypeReference<Salesman>(){});
			Bl_Master blMasterService=new Bl_Master();
			JsonResponse = blMasterService.bl_SaveSalesmanMaster(sObj);
			response = new ResultDTO();
			response.setData(JsonResponse);
			ResponseJson = new ObjectMapper().writeValueAsString(response);
		}catch(Exception e){
			e.printStackTrace();
		}
		return ResponseJson;
	 }	

	
	
	
}
