package com.purpleaid.rest;

import java.io.IOException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.purpleaid.beans.Product;
import com.purpleaid.beans.User;
import com.purpleaid.bussinessLayer.Bl_Company;
import com.purpleaid.utilities.ResultDTO;


@Path("/apiCompany")
public class Api_Company {
	String CLASS_NAME = "Api_Company";
	@POST
	@Path("/apiGetProductList")	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getProductList(String userString){
		
		String jsonResponse = null;
		
		double companyId;
		double supplierId;
		String purchaseOrderId;
		try {	
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			companyId = user.getCompanyId();
			supplierId = user.getSupplierId();
			purchaseOrderId = user.getPurchaseOrderId();
			Bl_Company blCompanyService = new Bl_Company();			
			jsonResponse = blCompanyService.bl_getProductList(user,companyId,supplierId,purchaseOrderId);//got product List
			
		} catch (Exception e){
			// TODO Auto-generated catch block
			e.printStackTrace();
		} 
	
		return jsonResponse;		
	}
	
	//This method returns
	@POST
	@Path("/apiGetCompanyList")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCompanyList(String userString){
	
		//String METHOD_NAME="api_getCompanyList";
		String supplierJsonResponse = null;
		String companyJsonResponse  = null;
		String mrJsonResponse  = null;
		String jsonResponse = null;
		String divisionResponse = null;
		
		try {
			//Log.logMessage(Constants.INFO, CLASS_NAME, METHOD_NAME, "HI FROM LOGGER !!");
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			Bl_Company blCompanyService=new Bl_Company();
			companyJsonResponse = blCompanyService.bl_getCompanyList(user);
			
			supplierJsonResponse = blCompanyService.bl_getCompanySupplier(user);//got Supplier List
			
			mrJsonResponse = blCompanyService.bl_getCompanyMR(user);//got MR List
			
			divisionResponse = blCompanyService.bl_getDivision(user);//got division List
			
			jsonResponse = "{\"companyList\":"+companyJsonResponse+",\"supplierList\":"+supplierJsonResponse+",\"mrList\":"+mrJsonResponse+",\"divisionList\":"+divisionResponse+"}";
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return jsonResponse;	
		
	}
	
	@POST
	@Path("/apiGetCompanyDivisionProductList")	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCompanyDivisionProductList(String userString) throws JsonGenerationException, JsonMappingException, IOException{
		
		//String jsonResponse = null;
		ResultDTO resultDTO = null;
		String response = null;
		resultDTO = new ResultDTO();
		ObjectMapper mapper=new ObjectMapper();
		double companyId;
		double divisionId;
		try {	
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			companyId = user.getCompanyId();
			divisionId = user.getDivisionId();
			
			resultDTO.setSuccess(true);
			resultDTO.setErrorMessage(null);
			Bl_Company blCompanyService = new Bl_Company();			
			resultDTO.setData(blCompanyService.bl_getCompanyDivisionProductList(user,companyId,divisionId));//got product Listfor company and division
			response = mapper.writeValueAsString(resultDTO);
		} catch (Exception e){
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultDTO.setSuccess(false);
			resultDTO.setErrorMessage(e.getMessage());
			response = mapper.writeValueAsString(resultDTO);
		} 
		
		return response;		
	}
	
	@POST
	@Path("/apiGetContentList")	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getContentList() throws JsonGenerationException, JsonMappingException, IOException{
		
		//String jsonResponse = null;
		ResultDTO resultDTO = null;
		String response = null;
		resultDTO = new ResultDTO();
		ObjectMapper mapper=new ObjectMapper();
		//double companyId;
		//double divisionId;
		try {	
			
			
			resultDTO.setSuccess(true);
			resultDTO.setErrorMessage(null);
			Bl_Company blCompanyService = new Bl_Company();			
			resultDTO.setData(blCompanyService.bl_getContentList());//got product Listfor company and division
			response = mapper.writeValueAsString(resultDTO);
		} catch (Exception e){
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultDTO.setSuccess(false);
			resultDTO.setErrorMessage(e.getMessage());
			response = mapper.writeValueAsString(resultDTO);
		} 
		
		return response;		
	}
	
	@POST
	@Path("/apiSaveProduct")	
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String api_saveProductContent(String reqString) throws JsonGenerationException, JsonMappingException, IOException{
		
		//String jsonResponse = null;
		ResultDTO resultDTO = null;
		String response = null;
		resultDTO = new ResultDTO();
		ObjectMapper mapper=new ObjectMapper();
		
		try {	
			
			Product product = mapper.readValue(reqString, new TypeReference<Product>() {});
			resultDTO.setSuccess(true);
			resultDTO.setErrorMessage(null);
			Bl_Company blCompanyService = new Bl_Company();			
			resultDTO.setData(blCompanyService.bl_saveProduct(product));//got product Listfor company and division
			response = mapper.writeValueAsString(resultDTO);
		} catch (Exception e){
			// TODO Auto-generated catch block
			e.printStackTrace();
			resultDTO.setSuccess(false);
			resultDTO.setErrorMessage(e.getMessage());
			response = mapper.writeValueAsString(resultDTO);
		} 
		
		return response;		
	}
	///===========================NIKITAS Code============================
	
	@POST
	@Path("/apiGetCustomerList")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getCustomerList(String userString){
		
		String jsonResponse = null;
		String customerResponse = null;
		String areaResponse = null;
		String salesmanResponse = null;
		
		try {
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			Bl_Company blCompanyService=new Bl_Company();
			
			customerResponse = blCompanyService.bl_getCustomer(user);
			areaResponse = blCompanyService.bl_getArea(user);
			salesmanResponse = blCompanyService.bl_getSalesman(user);
			
			
			jsonResponse = "{\"customerList\":"+customerResponse+",\"areaList\":"+areaResponse+",\"salesmanList\":"+salesmanResponse+"}";
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return jsonResponse;	
		
	}

	
	
	
	@POST
	@Path("/apiGetAreaList")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getAreaList(String userString){
		
		String jsonResponse = null;
		String areaResponse = null;
		String regionResponse = null;
		try {
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			Bl_Company blCompanyService=new Bl_Company();
			
			areaResponse = blCompanyService.bl_getArea(user);
			
			regionResponse = blCompanyService.bl_getRegion(user);
			//customerLicenceResponse 
			
			jsonResponse = "{\"areaList\":"+areaResponse+",\"regionList\":"+regionResponse+"}";
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return jsonResponse;	
		
	}
	
	@POST
	@Path("/apiGetRouteList")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getRouteList(String userString){
		
		String jsonResponse = null;
		String routeResponse = null;
		String areaResponse = null;
		String regionResponse = null;
		try {
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			Bl_Company blCompanyService=new Bl_Company();
			
			routeResponse = blCompanyService.bl_getRoute(user);
			areaResponse = blCompanyService.bl_getArea(user);
			regionResponse = blCompanyService.bl_getRegion(user);
			//customerLicenceResponse 
			
			jsonResponse = "{\"routeList\":"+routeResponse+",\"areaList\":"+areaResponse+",\"regionList\":"+regionResponse+" }";
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return jsonResponse;	
		
	}
	
	
	@POST
	@Path("/apiGetSalesmanList")	
	@Produces(MediaType.APPLICATION_JSON)
	public String api_getSalesmanList(String userString){
		
		String jsonResponse = null;
		String salesmanResponse = null;
		String routeResponse = null;
	//	String regionResponse = null;
		try {
			User user = new ObjectMapper().readValue(userString, new TypeReference<User>() {});
			Bl_Company blCompanyService=new Bl_Company();
			
			salesmanResponse = blCompanyService.bl_getSalesman(user);
			routeResponse = blCompanyService.bl_getRoute(user);
			
			
			jsonResponse = "{\"salesmanList\":"+salesmanResponse+",\"routeList\":"+routeResponse+"}";
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
		return jsonResponse;	
		
	}
	//=======================================================================================
	//=======================================================================================
	//=======================================================================================
	//=======================================================================================
	
	
	
}	
