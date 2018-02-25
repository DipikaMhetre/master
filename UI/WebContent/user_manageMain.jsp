<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.ActiveUsers"%>
<%@page import="com.purpleaid.beans.User"%>
<%@page import="java.util.List"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Manage Active Users</title>
<script src="components/angular/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" href="css/demo.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />
<link rel="stylesheet" type="text/css" href="css/default.css" />
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
<link rel="stylesheet" type="text/css"
	href="css/jquery.switchButton.css" />
<link href="css/jquery.switchButton.css" />
<link rel="stylesheet" type="text/css"
	href="components/bootstrap-3.2.0/css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="components/ngToust/ngToast.css" />
<link rel="stylesheet" type="text/css"
	href="components/ngToust/ngToast-animations.css" />
<script src="scripts/libs/modernizr.js"></script>
<script src="components/w2uiGrid/w2ui-1.4.1.js"></script>
<script src="js/userManagerMain.js"></script>
<link rel="stylesheet" type="text/css"
	href="components/w2uiGrid/w2ui-1.4.1.css" />
<script src="js/modernizr.custom.25376.js"></script>
<script src="components/bootstrap-3.2.0/js/bootstrap.js"></script>
<link rel="stylesheet" href="stylesheets/style.css" />
<link rel="stylesheet" href="stylesheets/media_style.css" />
<link href="images/faviconP.ico" rel="icon" type="image/x-icon" />
</head>
<body>
	<!-- <form name="userMangerForm"> -->
	<div id="UserManager" data-ng-controller="UserManagerCtrl"
		ng-init=init()>
		<Section class="pageheader"> <nav class="mainnav">
		<ul class="leftFloat_Menu" id="list-nav">
			<li><a href="#" title="New Contact Manager"
				class="highlight_purple not_active">Manage Active Users</a></li>
			<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
			<li><a href="#" title="" class=" ">Refresh</a></li>
			<li><a href="#" title="Help"
				class="not_implemented_link not_active">Help</a></li>
		</ul>
		<!-- <ul class="rightFloat_Menu">
			<li><a class="highlight_purple not_active marginZero">Satyajit
					Toradmal</a> <a href="#" title="Todays Date"
				class="highlight_purple not_active marginZero"> <span
					id="date_time"></span> <script type="text/javascript">
						window.onload = date_time('date_time');
					</script></a></li>
		</ul> -->
		</nav> </Section>
		<div class="containerUserManager">
			<div class="row">
				<h5>
					<span class="submenuBlue_heading"> Active User Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-12">
					<div id="grid" tabindex="-1" class="user_manager_Grid"></div>
				</div>
			</div>
			<div class="row fieldsSpacing fieldsTop_Spacing">
				<div class="col-md-12 textRight">
					<button onclick="submit2()"
						class="btn btn-primary Force_LoginLogout">Reattempt Login</button>
					<button onclick="submit1()"
						class="btn btn-danger Force_LoginLogout ">Force Logout
						Selected & Login</button>
				</div>
			</div>
			<div class="row fieldsTop_Spacing">
				<h5>
					<span class="submenuBlue_heading">Active User Summery</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsTop_Spacing">
				<div class="col-md-3 textCenter">
					<div class=" thumbnail Users_SummaryThumbnail">
						<span class="Users_ActiveAvalable_Total">2</span><br> <span
							class="Users_Text">User</span> <br> <span
							class="Users_ActiveAvalable_Status">ACTIVE</span>
					</div>
				</div>
				<div class="col-md-1 textRight">
					<span class="glyphicon glyphicon-plus User_Active_Glyphicon"
						aria-hidden="true"></span>
				</div>
				<div class="col-md-4 textCenter">
					<div class=" thumbnail Users_SummaryThumbnail"
						style="width: 73%; margin: auto;">
						<span class="Users_ActiveAvalable_Total">0</span><br> <span
							class="Users_Text">User</span> <br> <span
							class="Users_ActiveAvalable_Status"> AVAILABLE</span>
					</div>
				</div>
				<div class="col-md-1">
					<span class="glyphicon glyphicon-arrow-right User_Active_Glyphicon"
						aria-hidden="true"></span>
				</div>
				<div class="col-md-3 textCenter">
					<div class=" thumbnail Users_SummaryThumbnail">
						<span class="Users_ActiveAvalable_Total">2</span><br> <span
							class="Users_Text">User</span> <br> <span
							class="Users_ActiveAvalable_Status">User License</span>
					</div>
				</div>

			</div>
		</div>
	</div>
</body>
<script type="text/javascript">
	function myPost(path, params, method) {
		
	    method = method || "post"; // Set method to post by default if not specified.

	    // The rest of this code assumes you are not using a library.
	    // It can be made less wordy if you use one.
	    var form = document.createElement("form");
	    form.setAttribute("method", method);
	    form.setAttribute("action", path);

	    for(var key in params) {
	        if(params.hasOwnProperty(key)) {
	            var hiddenField = document.createElement("input");
	            hiddenField.setAttribute("type", "hidden");
	            hiddenField.setAttribute("name", key);
	            hiddenField.setAttribute("value", params[key]);

	            form.appendChild(hiddenField);
	         }
	    }

	    document.body.appendChild(form);
	    form.submit();
	}
function submit1(){
	
	//validations reqired for 
	var user={};
	user.userId =window['userName'];//$('#user_id').val();//document.getElementsByName('user_id');
	user.userPassword =window['userPass']; //$('#password').val();//document.getElementsByName('password');
	if(user.userId == ''){
		alert('Please enter userId!!');
		return false;
	}
	if(user.userPassword == ''){
		alert('Please enter Password!!');
		return false;
	}
	var ip = location.host;
	var users=[];
	if(w2ui.grid.getSelection().length == 0){
		alert('Please select atleast 1 user to be logged out');
		return false;
	}
	var objj={};
	for(i=0;i<w2ui.grid.getSelection().length;i++){
		objj=w2ui.grid.get(w2ui.grid.getSelection()[i]);
		
		users.push(objj);
	}	
	userData=JSON.stringify(users);
	
	myPost("LoginServlet",{userId: user.userId,pass:user.userPassword,userList:userData},'post');  
	
}

function submit2(){
	var user={};
	user.userId =window['userName'];//$('#user_id').val();//document.getElementsByName('user_id');
	user.userPassword =window['userPass']; //$('#password').val();//document.getElementsByName('password');
	myPost("LoginServlet",{userId: user.userId,pass:user.userPassword},'post');     
}
</script>
<script type="text/javascript">
    $(document).ready(function(){
    	<%String uList = (String) request.getSession().getAttribute(
					"usersList");
			User user = (User) request.getSession().getAttribute("userObj");
			/* String maxUserCount=(String)request.getSession().getAttribute("maxUserCount");
			String usersLogged=(String)request.getSession().getAttribute("usersLogged");
			String logsAvailable=(String)request.getSession().getAttribute("logsAvailable"); */
			%>
	    var records=<%=uList%>;
	    var userName='<%=user.getUserId()%>';
	    var userPass='<%=user.getUserPwd()%>';
	    window['userName']='<%=user.getUserId()%>';
	    window['userPass']='<%=user.getUserPwd()%>';
						//records=JSON.parse(records);
						$('#grid').w2grid({
							name : 'grid',
							header : 'List of Names',
							show : {
								selectColumn : true,
								toolbar : false,
								footer : true
							},
							columns : [ {
								field : 'recid',
								caption : 'ID',
								size : '50px',
								sortable : true,
								attr : 'align=center'
							}, {
								field : 'activeUsersId',
								caption : 'User Name',
								size : '50%'
							}, {
								field : 'activeUsersName',
								caption : 'User',
								size : '50%',
								sortable : true,
								resizable : true
							}, {
								field : 'activeUsersIpAddress',
								caption : 'Ip Adress',
								size : '50%'
							}, {
								field : 'activeUsersActiveTime',
								caption : 'Active Time',
								size : '50%'
							},

							{
								field : 'activeUsersLoginActivity',
								caption : 'Last Activity',
								size : '50%'
							},

							{
								field : 'activeUsersLoginTime',
								caption : 'Login Time',
								size : '50%'
							}

							],
							records : records
						});
					});
</script>
</html>