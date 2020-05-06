package com;
import model.Admin;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AdminsAPI
 */
@WebServlet("/AdminsAPI")
public class AdminsAPI extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
	
	Admin adminObj = new Admin();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
	 public AdminsAPI() {
    super();
     //TODO Auto-generated constructor stub
}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		//NOT USED
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String output = adminObj.insertAdmin(request.getParameter("doctorID"), 
				request.getParameter("doctorName"),     
				request.getParameter("userCount"),
				request.getParameter("roomNo"),
				request.getParameter("hospital"),
				request.getParameter("aDate"),
				request.getParameter("description")); 
		 


		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doPut(HttpServletRequest, HttpServletResponse)
	 */
	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		
		String output = adminObj.updateAdmin(paras.get("hidnumberSave").toString(), 
				 paras.get("doctorID").toString(),   
				 paras.get("doctorName").toString(),  
				 paras.get("userCount").toString(),
				 paras.get("roomNo").toString(), 
				 paras.get("hospital").toString(), 
				 paras.get("aDate").toString(), 
				 paras.get("description").toString()); 
		 

		
		response.getWriter().write(output);
	}

	/**
	 * @see HttpServlet#doDelete(HttpServletRequest, HttpServletResponse)
	 */
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		Map paras = getParasMap(request);
		
		String output = adminObj.deleteAdmin(paras.get("number").toString()); 
		
		response.getWriter().write(output);
	}
	
	// Convert request parameters to a Map
			private static Map getParasMap(HttpServletRequest request)
			{
				Map<String, String> map = new HashMap<String, String>();
				
				try
				{
					Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
					String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
					scanner.close();
					
					String[] params = queryString.split("&");
					
					for (String param : params)
					{
						String[] p = param.split("=");
						map.put(p[0], p[1]);
					}
				}
				catch (Exception e)
				{
				}
				
				return map;
			}



}
