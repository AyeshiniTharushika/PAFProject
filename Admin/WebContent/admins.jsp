<%@page import="model.Admin"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/admins.js"></script>

</head>
<body>
<div class="container">
	<div class="row" >
		<div class="col-6">
			<h1>Admin Management </h1>
			
			<form id="formAdmin" name="formAdmin" method="post" action="admins.jsp">  
    
    doctor ID:
    <input id="doctorID" name="doctorID" type="text"       
     class="form-control form-control-sm"> 
     
     <br> Doctor Name:   
     <input id="doctorName" name="doctorName" type="text"       
     class="form-control form-control-sm"> 
     
     <br> User Count:   
     <input id="userCount" name="userCount" type="number"        
     class="form-control form-control-sm"> 
     
     <br> Room No:   
     <input id="roomNo" name="roomNo" type="text"        
     class="form-control form-control-sm"> 
     
     <br> Hospital:   
     <input id="hospital" name="hospital" type="text"        
     class="form-control form-control-sm"> 
     
     <br> Date:   
     <input id="aDate" name="aDate" type="date"        
     class="form-control form-control-sm"> 
     
     <br> Appointment Description:   
     <input id="description" name="description" type="text"      
     class="form-control form-control-sm"> 
      
      <br>  
      <input id="btnSave" name="btnSave" type="button" value="Save"    
        class="btn btn-primary">   
      <input type="hidden" id="hidnumberSave"       
        name="hidnumberSave" value=""> 
        
 </form> 
			
			
			<div id="alertSuccess" class="alert alert-success"></div>
			<div id="alertError" class="alert alert-danger"></div>
			<br>

			<div id="divAdminsGrid">
				<%
					Admin adminObj = new Admin();
					out.print(adminObj.readAdmin());
				%>
			</div>
		</div>
	</div>
</div>

</body>
</html>
