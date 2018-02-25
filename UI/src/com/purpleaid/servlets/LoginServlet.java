package com.purpleaid.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.catalina.mapper.Mapper;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import sun.org.mozilla.javascript.internal.json.JsonParser;

import com.mytest.HttpURLConnectionExample;
import com.mytest.PurpleaidResponse;
//import com.purple.model.User;
import com.purpleaid.beans.ActiveUsers;
import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.beans.User;
import com.purpleaid.ui.utilities.PurpleProperties;
import com.sun.org.apache.bcel.internal.generic.NEW;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("IN GET LOGIN SERVLET");
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();		
		System.out.println("IN POST LOGIN SERVLET");		
		String uId=request.getParameter("userId");
		String pwd=request.getParameter("pass");
		String ipAddress = request.getHeader("HTTP_X_FORWARDED_FOR");
		String userListJSON=request.getParameter("userList");
		if (ipAddress == null) {
		    ipAddress = request.getRemoteAddr();
		}
		
		
		System.out.println("UID=="+uId+"  pass="+pwd+"  ip="+ipAddress+"");		
		request.setAttribute("myName", uId);
		PurpleaidRequest apiReq = new PurpleaidRequest();
		apiReq.setEntity(1);
		apiReq.setUserName(uId);
		apiReq.setUserPassword(pwd);
		
		if(userListJSON != null){
			apiReq.setIsActiveUsersDeleted(1);
			apiReq.setRequestData(userListJSON);
		}
		
		PurpleaidResponse apiResponse = new PurpleaidResponse();
		String baseURL = PurpleProperties.getPurpleProperties().getProperty("baseURL");
		try{
			HttpURLConnectionExample post=new HttpURLConnectionExample();			
			apiResponse=post.sendPOST(baseURL+"apiPurpleaidACL/getPurpleaidACL/", new ObjectMapper().writeValueAsString(apiReq));
		}catch(Exception e){
			apiResponse.setResponseCode(e.getMessage());
			apiResponse.setResponseData(e.getMessage());
		}
		PurpleaidResponse ob = new PurpleaidResponse();
		
		try{
			ob = new ObjectMapper().readValue(apiResponse.getResponseData(), new TypeReference<PurpleaidResponse>() {});
		}catch(Exception e){
			ob = apiResponse;
		}		
		if(ob.getResponseCode().equals("200")){
			//request.setAttribute("message", apiResponse);
			String[] parts = ob.getResponseData().split("-");	
			request.getSession(true).setAttribute("userId", parts[0]);	
			request.getSession(true).setAttribute("userToken", parts[1]);		
			List<PurpleaidACL> menuList=new ObjectMapper().readValue(parts[2], new TypeReference<List<PurpleaidACL>>() {});
			System.out.println("Part 2 is "+parts[2]);
			
			request.getSession(true).setAttribute("menuList", new ObjectMapper().writeValueAsString(menuList));			
			Object o=new ObjectMapper().readValue(ob.getResponseData(), new TypeReference<Object>() {});
			
			response.sendRedirect("lastIndex2.jsp"); //logged-in page
			
		}else{
			if(apiResponse.getResponseData().contains("Connection.close()")){
				
				apiResponse.setResponseCode("333");
				request.setAttribute("errorMessage", apiResponse);
				RequestDispatcher rd = request.getRequestDispatcher("");
				//response.sendRedirect("");
				rd.forward(request, response);
			}
			if(apiResponse.getResponseData().contains("User Not Found")){
				
				apiResponse.setResponseCode("200");
				request.setAttribute("errorMessage", apiResponse);
				RequestDispatcher rd = request.getRequestDispatcher("");
				//response.sendRedirect("");
				rd.forward(request, response);
			}
			if(apiResponse.getResponseData().contains("User is not Authorized")){

				String permissionString="Wrong username,password or No Permission for user to perform action ";				
				//request.setAttribute("errorMessage", permissionString);
				//
				apiResponse.setResponseCode("200");
				request.setAttribute("errorMessage", apiResponse);
				RequestDispatcher rd = request.getRequestDispatcher("");
				//response.sendRedirect("");
				rd.forward(request, response);
			}
			if(apiResponse.getResponseData().contains("Database not connected")){
				apiResponse.setResponseCode("333");
				request.setAttribute("errorMessage", apiResponse);
				RequestDispatcher rd = request.getRequestDispatcher("");
				//response.sendRedirect("");
				rd.forward(request, response);
			}
			
			if(apiResponse.getResponseData().contains("Communications link failure")){
				ob.setResponseCode("404");
				ob.setResponseData("Database Not Connected !!");
				//PurpleaidResponse pObj=new ObjectMapper().readValue(ob.getResponseData(), new TypeReference<PurpleaidResponse>() {});
				request.setAttribute("errorMessage", ob);
				RequestDispatcher rd = request.getRequestDispatcher("");
				//response.sendRedirect("");
				rd.forward(request, response);
			}
			if(apiResponse.getResponseData().contains("Not allowed to login more than 2 users-")){
				String[] parts = ob.getResponseCode().split("->");	

				List <ActiveUsers>usersList=new ObjectMapper().readValue(""+parts[1], new TypeReference<List <ActiveUsers>>() {});

				if(usersList.size()>0){
					User userObj=new User();
					userObj.setUserId(uId);
					userObj.setUserPwd(pwd);
					int usersLogged = usersList.size();
					double max=Double.parseDouble(parts[2]);
					int maxUsers=(int) max;
					
					int logsAvailable=maxUsers-usersLogged;
					request.getSession(true).setAttribute("usersList", ""+parts[1]);
					request.getSession(true).setAttribute("userObj", userObj);
					request.getSession(true).setAttribute("maxUserCount",""+maxUsers);
					request.getSession(true).setAttribute("usersLogged",""+usersLogged);
					request.getSession(true).setAttribute("logsAvailable",""+logsAvailable);
					response.sendRedirect("user_manageMain.jsp");
				}else{
					apiResponse.setResponseCode("454");
					request.setAttribute("errorMessage", apiResponse);
					RequestDispatcher rd = request.getRequestDispatcher("");
					//response.sendRedirect("");
					rd.forward(request, response);
				} //logged-in page
			}	
		}
		
		
	}

}
