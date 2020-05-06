$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//SAVE ============================================
$(document).on("click", "#btnSave", function(event)
{
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	// Form validation-------------------
	var status = validateAdminForm();
	
	if (status != true)
	{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	
	// If valid------------------------
	var method = ($("#hidnumberSave").val() == "") ? "POST" : "PUT";
	
	$.ajax(
	{
		url : "AdminsAPI",
		type : method,
		data : $("#formAdmin").serialize(),
		dataType : "text",
		complete : function(response, status)
		{
			onAdminSaveComplete(response.responseText, status);
		}
	});
});

function onAdminSaveComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success")
		{   
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divAdminsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	
	$("#hidnumberSave").val("");
	$("#formAdmin")[0].reset();
}


//UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{ 
		$("#hidnumberSave").val($(this).closest("tr").find('#hidnumberUpdate').val());    
		$("#doctorID").val($(this).closest("tr").find('td:eq(0)').text());   
		$("#doctorName").val($(this).closest("tr").find('td:eq(1)').text());    
		$("#userCount").val($(this).closest("tr").find('td:eq(2)').text());   
		$("#roomNo").val($(this).closest("tr").find('td:eq(3)').text());  
	    $("#hospital").val($(this).closest("tr").find('td:eq(4)').text()); 
        $("#aDate").val($(this).closest("tr").find('td:eq(5)').text());
	    $("#description").val($(this).closest("tr").find('td:eq(6)').text());

});


//REMOVE==========================================
$(document).on("click", ".btnRemove", function(event)
{
	$.ajax(
	{
		url : "AdminsAPI",
		type : "DELETE",
		data : "number=" + $(this).data("number"),
		dataType : "text",
		complete : function(response, status)
		{
			onAdminDeleteComplete(response.responseText, status);
		}
	});
});

function onAdminDeleteComplete(response, status)
{
	if (status == "success")
	{
		var resultSet = JSON.parse(response);
		
		if (resultSet.status.trim() == "success")
		{
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divAdminsGrid").html(resultSet.data);
		} 
		else if (resultSet.status.trim() == "error")
		{
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} 
	else if (status == "error")
	{
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} 
	else
	{
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}


function validateAdminForm()
{
	// Doctor Id
	if ($("#doctorID").val().trim() == "")
	{ 
		return "Insert doctor Id.";
		}
	// Doctor Name
	if ($("#doctorName").val().trim() == "")
	{ 
		return "Insert doctor Name.";
		}
	// User Count
	if ($("#userCount").val().trim() == "")
	{ 
		return "Insert user Count.";
		}
	
	// is numerical value
	var tmpuserCount = $("#userCount").val().trim();  
	if (!$.isNumeric(tmpuserCounnt)) 
	{   
		return "Insert a numerical value for user count.";  
		} 
	 
	 
	// Room No
	if ($("#roomNo").val().trim() == "")
	{ 
		return "Insert room No.";
		}
	// Hospital
	if ($("#hospital").val().trim() == "")
	{ 
		return "Insert Hospital.";
		}
	// Date
	if ($("#aDate").val().trim() == "")
	{ 
		return "Insert Date.";
		}
	 
	// Appointment Description
	if ($("#description").val().trim() == "")
	{ 
		return "Appointment Description.";
		}
	 return true; 
 }
