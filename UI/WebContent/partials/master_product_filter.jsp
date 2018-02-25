<!DOCTYPE html>
<html lang="en" class="no-js" data-ng-app="pharmApp">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>Purpleaid ...Connecting The Dots</title>
		<meta name="description" content="Blueprint: Slide and Push Menus" />
		<meta name="keywords" content="sliding menu, pushing menu, navigation, responsive, menu, css, jquery" />
		<meta name="author" content="Codrops" />
		<link rel="shortcut icon" href="../favicon.ico">
		
		<!-- JQUERY LOADED -->
		<script src="components/angular/jquery-1.11.1.min.js"></script>
		
		<!-- CSS Files -->
		<!-- <link rel="stylesheet" type="text/css" href="css/default.css" /> -->
		<!-- <link rel="stylesheet" type="text/css" href="css/component.css" /> -->
		<link rel="stylesheet" type="text/css" href="components/bootstrap-3.2.0/css/bootstrap.css" />
		<link rel="stylesheet" type="text/css" href="style.css" />
		
		<!-- JS Files -->
		<script src="js/modernizr.custom.js"></script>
		
		<script src="components/angular/angular.js"></script>
		<script src="components/angular/angular-route.min.js"></script>
		<script src="components/bootstrap-3.2.0/js/bootstrap.js"></script>
		<script src="app.js"></script>
		
		<!-- Controller Files -->
		<script src="controllers/MainCtrl.js"></script>
		<script src="controllers/PurchaseCtrl.js"></script>
	</head>
	<body class="grayBG">
		<div class="container lightBox_masterPrductFilter">
			<div class="row topblueStrip ">
				<h6><span class="topblueStripText">PRODUCT FILTERS</span></h6>
			</div>
			<div class="row fields_headingSpacing">		
				<div class=" col-md-5">
      				<div class="row">
      					<div class=" col-md-4">
		      				<label class="control-label textMargin">Type</label>
		   				</div>
		                <div class=" col-md-8">
					      	<select class="form-control productboxSize input-sm" tabindex="1">
			         			<option value=""></option>
			      			</select>
					   </div>
      				</div>
   				</div> 
      		</div>
      		<div class="row fields_headingSpacing1">
      			<div class=" col-md-4">
      				<div class="row">
      					<div class=" col-md-5">
		      				<label class="control-label textMargin">Product&nbsp;ID</label>
		   				</div>
		                <div class=" col-md-7">
					     <input type="text" class="form-control input-sm iptextRight" >
					   </div>
      				</div>
   				</div> 
   				<div class=" col-md-4">
      				<div class="row">
      					<div class=" col-md-5">
		      				<label class="control-label textMargin">UPC&nbsp;ID</label>
		   				</div>
		                <div class=" col-md-7">
					     <input type="text" class="form-control input-sm iptextRight" >
					   </div>      				
      				</div>
   				</div>
   				<div class=" col-md-4">
      				<div class="row">
      					<div class=" col-md-5">
		      				<label class="control-label textMargin">Other</label>
		   				</div>
		                <div class=" col-md-7">
					     <input type="text" class="form-control input-sm iptextRight" >
					   </div>
      				</div>
   				</div>    		
      		</div>
      		<div class="row fields_headingSpacing1">
      			<div class=" col-md-4">
      				<div class="row">
      					<div class=" col-md-5">
		      				<label class="control-label textMargin">Product&nbsp;Name</label>
		   				</div>
		                <div class=" col-md-7">
					     <input type="text" class="form-control input-sm iptextRight" >
					   </div>
      				</div>
   				</div> 
   				<div class=" col-md-4">
      				<div class="row">
      					<div class=" col-md-5">
		      				<label class="control-label textMargin">Content</label>
		   				</div>
		                <div class=" col-md-7">
					     <input type="text" class="form-control input-sm iptextRight" >
					   </div>      				
      				</div>
   				</div> 						
      		</div>
      		<div class="row fields_headingSpacing1">
      			<div class=" col-md-4">      				
   					<span>
						<input type="checkbox"  checked="on">
						<label class="chechBox_lablePos">Show Only Active</label>
					</span>    				
   				</div> 
   				<div class=" col-md-4">      				
   					<span>
						<input type="checkbox">
						<label class="chechBox_lablePos">Show Only DPCO </label>
					</span>     				      				
      			</div>
      			<div class=" col-md-4">      				
      				<span>
						<input type="checkbox">
						<label class="chechBox_lablePos">Show Only Narcotics</label>
					</span>     				    				
      			</div>
      		</div>
			<div class="row fields_headingSpacing">
				<div class="col-md-4">
				</div>	
				<div class="col-md-6">
					<a href="#" title="Remove Product" class="rightFloat clearAllFilterPos">CLEAR&nbsp;ALL&nbsp;FILTERS</a>
				</div>	
				<div class="col-md-2">
					<button type="button" class="okbtnSize">OK</button>
				</div>	              
       		</div>
		</div>
	</body>
</html>