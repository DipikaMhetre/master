<!DOCTYPE html>
<head>
<meta charset="ISO-8859-1">
<title>Purpleaid Login</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<link rel="shortcut icon" href="../favicon.ico">
<script src="js/modernizr.custom.25376.js"></script>
<!-- Carousel js file -->
<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> -->
<script src="components/angular/jquery-1.11.1.min.js"></script>
<script src="components/bootstrap-3.2.0/js/bootstrap.min.js"></script>
<!--  -->
<link rel="stylesheet" type="text/css"
	href="components/w2uiGrid/w2ui-1.4.1.css" />
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script type="text/javascript"
	src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script>

<link rel="stylesheet"
	href="components/bootstrap-3.2.0/css/bootstrap.min.css" />
<link rel="stylesheet" href="stylesheets/style.css" />
<link href="images/faviconP.ico" rel="icon" type="image/x-icon" />
<script>
	$(document).ready(
			function() {
				console.log("hello world");

				<c:if test="${errorMessage1.responseCode eq 200}">
				var response = $
				{
					errorMessage1.responseCode
				}
				;
				alert(response + " Using Expression Language");
				</c:if>
				$('#carousel-example-generic').on(
						'slid.bs.carousel',
						function() {
							$holder = $("ol li.active");
							$holder.removeClass('active');
							var idx = $('div.active').index('div.item');
							$(
									'ol.carousel-indicators li[data-slide-to="'
											+ idx + '"]').addClass('active');
						});

				$('ol.carousel-indicators  li').on(
						"click",
						function() {
							$('ol.carousel-indicators li.active').removeClass(
									"active");
							$(this).addClass("active");
						});
			});
</script>

</head>
<body>
	<header class="header header_Home">
		<div class="in">
			<img src="images/logo.png" class="logo_pos ">
			<nav class="navbar navbar-login">
				<div id="form" class="row homeLogin">
					<div class="col-md-10">
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
									<input id="user_id" name="user_id" type="text" maxlength="100"
										class="form-control input-sm" placeholder="User ID"
										tabindex="1" value="">
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input id="password" name="password" type="password"
										maxlength="100" class="form-control input-sm homepassPos"
										placeholder="password" tabindex="2" value="">
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<button name="save" class="btn input-sm_btn btn_small btnLogin"
								onclick="login()" tabindex="3">Login</button>

						</div>
					</div>
				</div>
			</nav>
			<div class="row">
				<div class="col-md-12 ErrorMessages">
					<c:if test="${errorMessage.responseCode eq 200}">
						Incorrect User name or password. Please try again.
						<script type="text/javascript">
						$("#user_id").css("background-color", "#fff4eb");	
						$("#password").css("background-color", "#fff4eb");
						</script>
					</c:if>
					<c:if test="${errorMessage.responseCode eq 404}">
							${errorMessage.responseData}
					</c:if>
					<c:if test="${errorMessage.responseCode eq 333}">
							Database Not Connected !!!
					</c:if>
					<c:if test="${errorMessage.responseCode eq 454}">
							No.of login limit reached! You Cannot login!!
					</c:if>
				</div>
			</div>
		</div>
	</header>
	<section>
		<nav class="navbar navbar_Home">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<div class="container-fluid">
							<div class="row advposition_Home">
								<div class="col-md-6">
									<img src="images/adv_1.png" class="imagePosition ">
								</div>
								<div class="col-md-6">
									<div class="textPosition">
										<h3 class="textBlue italicFont">Why walk when you can
											fly?</h3>
										<p class="lineHeight">
											We are offering special schemes on our new medicine<br>
											"Procare". Make most of it and order in bulk.Minimum<br>
											order of 100 strips (1 Box).
										</p>
										<p class="lineHeight">
											We will be having lucky draw every week, and you may<br>
											win a chance to visit Thailand with family for 3 days and<br>
											2 nights. Other many exciting gifts include shopping<br>
											vouchers, silver coins and a lot more. Visit us on web at<br>
											<a class="highlight_purple" href="#">www.dummylink.com</a>
											for more details.<br> * Terms and conditions apply.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="item">
						<div class="container-fluid">
							<div class="row advposition_Home">
								<div class="col-md-6">
									<img src="images/adv_1.png" class="imagePosition ">
								</div>
								<div class="col-md-6">
									<div class="textPosition">
										<h3 class="textBlue italicFont">Why walk when you can
											fly?</h3>
										<p class="lineHeight">
											We are offering special schemes on our new medicine<br>
											"Procare". Make most of it and order in bulk.Minimum<br>
											order of 100 strips (1 Box).
										</p>
										<p class="lineHeight">
											We will be having lucky draw every week, and you may<br>
											win a chance to visit Thailand with family for 3 days and<br>
											2 nights. Other many exciting gifts include shopping<br>
											vouchers, silver coins and a lot more. Visit us on web at<br>
											<a class="highlight_purple" href="#" class="padleft">www.dummylink.com</a>
											for more details.<br> * Terms and conditions apply.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a class="carousel-control" href="#myCarousel" role="button"
					data-slide="prev"> <img src="images/flex-prev.png"
					class="flex-prev"> <span class="sr-only">Previous</span>
				</a> <a class="carousel-right carousel-control" href="#myCarousel"
					role="button" data-slide="next"> <img
					src="images/flex-next.png" class="flex-next"> <span
					class="sr-only">Next</span>
				</a>
			</div>
		</nav>
	</section>
	<footer>
		<nav class="navbar navfooter_Home">
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators indicatorBot">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
				</ol>
			</div>
			<span class="label label-default advpharmaPosition">ABC Pharma
				- Version: W.G.1.2.05</span> <span class="sponsored">** Sponsored
				Advertisements</span>
			<!-- <span class="label label-default advdatePosition"><span id='ct' ></span></span> -->
		</nav>
	</footer>
	<script type="text/javascript">
		function login() {
			var user = {};
			user.userId = $('#user_id').val();//document.getElementsByName('user_id');
			user.userPassword = $('#password').val();//document.getElementsByName('password');
			if (user.userId == '') {
				$("#user_id").css("background-color", "#fff4eb");				
			}
			if (user.userPassword == '') {
				$("#password").css("background-color", "#fff4eb");
				return false;
			}
			var ip = location.host;
			debugger;
			reqData = "userId=" + user.userId + "&" + "pass="
					+ user.userPassword;
			//window.location.assign("http://"+ip+"/UI/LoginServlet?"+reqData);
			//window.location.href="http://"+ip+"/UI/LoginServlet?"+reqData;
			/* $.ajax({
				type:'POST',
			    url: "http://"+ip+"/UI/LoginServlet",
			    data: reqData,  // JSON.stringify(user)  {"userId":user.userId,"pass":user.userPassword}  
			    success: function(response){	 
			    	alert("Login successFull");
			    },
			    error:function(xhr, ajaxOptions, thrownError){
			    	console.log("error")
			    }
			});*/

			var userName = '<input type="hidden" name="userId" value="'+user.userId+'"/>';
			var password = '<input type="hidden" name="pass" value="'+user.userPassword+'"/>';

			//$('<form action=http://'+ip+'/UI/LoginServlet>'+userName + password +' method="post" </form>').appendTo('body').submit();

			post("LoginServlet", {
				userId : user.userId,
				pass : user.userPassword
			}, 'post');

		}

		function post(path, params, method) {
			method = method || "post"; // Set method to post by default if not specified.

			// The rest of this code assumes you are not using a library.
			// It can be made less wordy if you use one.
			var form = document.createElement("form");
			form.setAttribute("method", method);
			form.setAttribute("action", path);

			for ( var key in params) {
				if (params.hasOwnProperty(key)) {
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
	</script>
	<script type="text/javascript">
		$("#user_id").keypress(function() {
			$("#user_id").css("background-color", "white");
		});
		$("#password").keypress(function() {
			$("#password").css("background-color", "white");
		});
	</script>

</body>
</html>