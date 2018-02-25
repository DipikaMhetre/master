package com.mytest;

import java.io.IOException;

import org.apache.http.HttpHost;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.conn.HttpClientConnectionManager;
import org.apache.http.conn.routing.HttpRoute;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.impl.conn.PoolingHttpClientConnectionManager;
import org.apache.http.util.EntityUtils;

public class HttpURLConnectionExample {

	private static final String USER_AGENT = "Mozilla/5.0";

	private static final String GET_URL = "http://localhost:9090/SpringMVCExample";

	//private static final String POST_URL = "http://localhost:8080/Purple/rest/apiReturn/getReturn";

	private static final String POST_PARAMS = "userName=Pankaj";
	
	private PoolingHttpClientConnectionManager poolingConnManager = new PoolingHttpClientConnectionManager();
	
	public HttpURLConnectionExample(){
		poolingConnManager.setMaxTotal(5);
		poolingConnManager.setDefaultMaxPerRoute(5);
		poolingConnManager.setMaxPerRoute(new HttpRoute(new HttpHost("http://localhost:8080/Purple/", 80)), 20);
	}

	public static void main(String[] args) throws IOException {

		String json="{\"entity\":1,\"userName\":\"kiranS\",\"userPassword\":\"kiran123\"}";
		HttpURLConnectionExample post=new HttpURLConnectionExample();		
		/*String out=*/post.sendPOST("http://localhost:8080/Purple/rest/apiapiPurpleaidACL/getPurpleaidACL", json);
		//System.out.println(" api response =="+out);

	}

	/*private static void sendGET() throws IOException {
        URL obj = new URL(GET_URL);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();
        con.setRequestMethod("GET");
        con.setRequestProperty("User-Agent", USER_AGENT);
        int responseCode = con.getResponseCode();
        System.out.println("GET Response Code :: " + responseCode);
        if (responseCode == HttpURLConnection.HTTP_OK) { // success
            BufferedReader in = new BufferedReader(new InputStreamReader(
                    con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // print result
            System.out.println(response.toString());
        } else {
            System.out.println("GET request not worked");
        }

    }*/

	public  PurpleaidResponse sendPOST(String POST_URL,String jsonString) throws IOException {
		/*PurpleaidResponse resp = new PurpleaidResponse(); 
		URL obj = new URL(POST_URL);
		HttpURLConnection con = (HttpURLConnection) obj.openConnection();
		con.setRequestMethod("POST");
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.setRequestProperty("Content-Type", "application/json");
	
		// For POST only - START
		con.setDoOutput(true);
		OutputStream os = con.getOutputStream();
		os.write(jsonString.getBytes());
		int responseCode = con.getResponseCode();
		os.flush();
		os.close();
		// For POST only - END


		System.out.println("POST Response Code :: " + responseCode);
		resp.setResponseCode(""+responseCode);
		if (responseCode == HttpURLConnection.HTTP_OK) { //success
			BufferedReader in = new BufferedReader(new InputStreamReader(
					con.getInputStream()));
			String inputLine;
			StringBuffer response = new StringBuffer();

			while ((inputLine = in.readLine()) != null) {
				response.append(inputLine);
			}
			in.close();

			// print result
			System.out.println(response.toString());

			resp.setResponseData(response.toString());
			resp.setStatusMessage("success");
		} else {
			System.out.println("POST request not worked");
			resp.setStatusMessage("failed");
			if(resp.getResponseCode().equals("404")){
				resp.setResponseData("Not found Error.Server may be down for maintainance !");
			}else if(resp.getResponseCode().equals("500")){
				resp.setResponseData("Internal server error!");
			}else{
				resp.setResponseData("unknown error while post request error");
			}
		}
		con.disconnect();*/
///////////////////apache working code///////////////////
		CloseableHttpResponse httpResponse = null;
		PurpleaidResponse resp = new PurpleaidResponse();
		CloseableHttpClient client = null;
		try{
		//CloseableHttpClient httpClient = HttpClients.createDefault();
		client = HttpClients.custom().setConnectionManager(poolingConnManager).build();
        HttpPost httpPost = new HttpPost(POST_URL);
        httpPost.addHeader("User-Agent", USER_AGENT);
        httpPost.setEntity(new StringEntity(jsonString));
 
        httpResponse = client.execute(httpPost);
        
        if (httpResponse.getStatusLine().getStatusCode() == 200) {
        	 String responseString = EntityUtils.toString(httpResponse.getEntity()); 
        	 resp.setResponseCode(""+httpResponse.getStatusLine().getStatusCode());
 	         resp.setResponseData(responseString);
        }else{
        	EntityUtils.consume(httpResponse.getEntity());
        	
        	System.out.println("POST request not worked");
			resp.setStatusMessage("failed");
			resp.setResponseCode(""+httpResponse.getStatusLine().getStatusCode());
			if(httpResponse.getStatusLine().getStatusCode()==404){
				resp.setResponseData("Not found Error.Server may be down for maintainance !");
			}else if(httpResponse.getStatusLine().getStatusCode()==500){
				resp.setResponseData("Internal server error!");
			}else{
				resp.setResponseData("unknown error while post request error");
			}
        }
		}catch(Exception exe){
			exe.printStackTrace();
		}finally{
			httpResponse.close();
			client.close();
		}
       
       /* System.out.println("POST Response Status:: "
                + httpResponse.getStatusLine().getStatusCode());
 
        BufferedReader reader = new BufferedReader(new InputStreamReader(
                httpResponse.getEntity().getContent()));
 
        String inputLine;
        StringBuffer response = new StringBuffer();
 
        while ((inputLine = reader.readLine()) != null) {
            response.append(inputLine);
        }
        reader.close();
        if (httpResponse.getStatusLine().getStatusCode() == 200) { //success
	        resp.setResponseCode(""+httpResponse.getStatusLine().getStatusCode());
	        resp.setResponseData(response.toString());
        }else{
        	System.out.println("POST request not worked");
			resp.setStatusMessage("failed");
			resp.setResponseCode(""+httpResponse.getStatusLine().getStatusCode());
			if(httpResponse.getStatusLine().getStatusCode()==404){
				resp.setResponseData("Not found Error.Server may be down for maintainance !");
			}else if(httpResponse.getStatusLine().getStatusCode()==500){
				resp.setResponseData("Internal server error!");
			}else{
				resp.setResponseData("unknown error while post request error");
			}
        }
        httpClient.close();*/
		return resp;
	}
///////////////////apache working code ends///////////////////
	
	

}