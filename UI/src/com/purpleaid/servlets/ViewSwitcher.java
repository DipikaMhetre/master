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

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

import com.mytest.HttpURLConnectionExample;
import com.mytest.MyJerseyClientPost;
import com.mytest.PurpleaidResponse;
import com.purpleaid.beans.PurpleaidACL;
import com.purpleaid.beans.PurpleaidRequest;
import com.purpleaid.ui.utilities.PurpleProperties;

/**
 * Servlet implementation class VIewSwitcher
 */
@WebServlet("/ViewSwitcher")
public class ViewSwitcher extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewSwitcher() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		System.out.println("===========EENTERING VIEW SWITCHER GET===========");
		System.out.println("IN ViewSwitcher SERVLET CODE "+System.currentTimeMillis());
		out.write("<h1>Hii from servlet</h1>");
		//?pageId=1&userId=10$token=xyz
		String pageId=request.getParameter("pageId");
		String userId=request.getParameter("userId");
		String token=request.getParameter("token");
		String type=request.getParameter("type");
		System.out.println("pageid="+pageId+"  tokenId="+token);
		//HERE POST REQUEST AUTHORIZATION 
		PurpleaidRequest apiReq = new PurpleaidRequest();
		apiReq.setEntity(2);
		apiReq.setUserId(userId);
		apiReq.setToken(token);
		apiReq.setPageId(Integer.parseInt(pageId));
		
		//apiReq.setUserPassword(pwd);
		PurpleaidResponse apiResponse = new PurpleaidResponse();  //cahnged apache clent 
		String baseURL = PurpleProperties.getPurpleProperties().getProperty("baseURL");
		System.out.println("Base URL Is >>"+baseURL);
		try{
			//HttpURLConnectionExample post=new HttpURLConnectionExample();cahnged apache clent 
			MyJerseyClientPost post = new MyJerseyClientPost();
			//try for loop
			//for(int i=0;i<10000;i++){
			//System.out.println("i=="+i);	
			//apiResponse=post.sendPOST(baseURL+"apiPurpleaidACL/getPurpleaidACL", new ObjectMapper().writeValueAsString(apiReq)); 
			apiResponse=post.JCsendPOST(baseURL+"apiPurpleaidACL/getPurpleaidACL", new ObjectMapper().writeValueAsString(apiReq)); 
			//System.out.println("Executed i=="+i);	
			//}//try ends
		}catch(Exception e){
			apiResponse.setResponseCode(e.getMessage());
		}
		
		PurpleaidResponse ob = new ObjectMapper().readValue(apiResponse.getResponseData(), new TypeReference<PurpleaidResponse>() {});
		List<PurpleaidACL> permissionList = new ArrayList<PurpleaidACL>();
		if(ob.getResponseCode().equals("200")){
			
			permissionList = new ObjectMapper().readValue(ob.getResponseData(), new TypeReference<List<PurpleaidACL>>() {});

			String x=permissionList.get(0).getPurpleaidACLMenuUrl();
			//RequestDispatcher rd = request.getRequestDispatcher(x);
			//rd.forward(request, response);
			System.out.println("Changing view jsp to "+x);
			request.getSession().removeAttribute("permissionList");
			request.getSession().setAttribute("permissionList", permissionList);
			request.setAttribute("permissionList", permissionList);
			System.out.println("===========LEAVING VIEW SWITCHER GET WITH REDIRECTS===========");
			response.sendRedirect(x);
			
		}else{
			String[] parts = ob.getResponseCode().split("->");
			String url="partials/unauthorizedUser.jsp";
			RequestDispatcher rd;
			if(parts[1].equals("444")){
				//BACKEND ERROR
				request.setAttribute("errorStatus","You have got error in backend !");
				request.setAttribute("errorMessage",parts[0]);
				if(type == null){
					
				}else{
					url=type;
				}
				rd = request.getRequestDispatcher("");
			}else if(parts[1].equals("0")){
				//unauthorised
				if(type == null){
					
				}else{
					url=type;
				}
				request.setAttribute("errorStatus","You are not authorized user !");
				request.setAttribute("errorMessage",parts[0]);
				rd = request.getRequestDispatcher(url);
			}else if(parts[1].equals("1")){
				//No Permission
				if(type == null){
					
				}else{
					url=type;
				}
				request.setAttribute("errorStatus","NO persmission to access this page/feature !");
				request.setAttribute("errorMessage",parts[0]);
				rd = request.getRequestDispatcher(url);
			}else{
				request.setAttribute("errorStatus","You have got unknown error !");
				request.setAttribute("errorMessage",ob.getResponseCode());
				rd = request.getRequestDispatcher("");
			}
			System.out.println("===========LEAVING VIEW SWITCHER GET WITH RESPONSE===========");			
			rd.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
	}

}
