package com.purpleaid.utilities;

import java.io.IOException;
import java.util.List;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

public  class Util_json {
	
	public String util_makeJson(Object obj){
		String json = null;
		ObjectMapper mapper = new ObjectMapper();
		
			try {
				json = mapper.writeValueAsString(obj);
				
			} catch (JsonGenerationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
		return json;
	}
	
	
	public Object util_makeArray(String json,boolean isArray){
		List<Object> list = null;
		ObjectMapper mapper = new ObjectMapper();
		Object obj = null;
		if(!isArray){
			try {
				obj=mapper.readValue(json,new TypeReference<Object>(){});
			} catch (JsonParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return obj;
			
		}else{
			
			try {
				list = mapper.readValue(json, new TypeReference<List<Object>>() {
				});
			} catch (JsonParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (JsonMappingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return list;
		}
		
		
	}

}
