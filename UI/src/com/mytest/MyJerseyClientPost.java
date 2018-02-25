package com.mytest;

import java.io.IOException;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class MyJerseyClientPost {
	
	public synchronized PurpleaidResponse JCsendPOST(String POST_URL,String jsonString) throws JsonGenerationException, JsonMappingException, IOException{
		Client client = Client.create();
		PurpleaidResponse resp = new PurpleaidResponse(); 
		WebResource webResource = client.resource(POST_URL);
		//WebResource webResource = client.resource("http://localhost:8080/Purple/rest/apiCompany/apiGetProductList");
 
		String input = jsonString;
 
		//ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);
		ClientResponse response = webResource.type("application/json").post(ClientResponse.class, input);
		resp.setResponseCode("200");
		if (response.getStatus() != 200) {
			System.out.println("My jercy client response got some error");
			resp.setResponseData("My jercy client response got some error");
			resp.setStatusMessage("failed");
		}else{
			
			resp.setResponseData(response.getEntity(String.class));
			resp.setStatusMessage("succcess");			
		}
		return resp;
		
	}

}
