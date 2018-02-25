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
		<link rel="stylesheet" type="text/css" href="stylesheets/style.css" />
		
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
		<div class="container lightBox_quantity">
			<div class="row topblueStrip">
				<h6><span class="topblueStripText">ENTER QUANTITY</span></h6>
			</div>
			<div class="row">
				<h5><span class="submenuBlue_heading">General</span></h5>
				<hr class="horizontal_line">
				<div class="col-md-6">
				 	<div class="form-group">
          				<label class="col-md-2 control-label">Product</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control input-sm" readonly="readonly" value="14570342 &nbsp;&nbsp;|&nbsp;&nbsp CORVADIL_A (Unichem Labs)">
          				</div>
        			</div>
       			 </div>
        		<div class="col-md-6">
        			<div class="form-group">
          				<label class="col-md-2 control-label">Remark</label>
                        <div class="col-md-10">
                            <input type="text" class="form-control input-sm" readonly="readonly">
          				</div>
        			</div>
        		</div>
			</div>
			<div class="row qty_type_sale_purchase_cellBox">
				<div class="col-md-3">
					<div class="form-group">
          				<label class="col-md-4 lable_position control-label">Type</label>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm" readonly="readonly" value="Non Scheduled">
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<label class="col-md-6 lable_position control-label">Division</label>
                        <div class="col-md-6">
                            <input type="text" class="form-control input-sm" readonly="readonly" value="A">
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<label class="col-md-4 lable_position control-label">Pack</label>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="10 TAB">
          				</div>
        			</div>
				</div>
				<div class="col-md-3">
					<div class="form-group">
          				<label class="col-md-4 lable_position control-label">Box</label>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="10">
          				</div>
        			</div>
				</div>
			</div>
			<div class="row qty_type_sale_purchase_cellBox">
				<h5><span class="submenuBlue_heading">Stock & Purchase History</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-6 lable_position control-label">Last sale</label>
                        <div class="col-md-6">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="126">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-7 lable_position left control-label">Current Sale</label>
                        <div class="col-md-5">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="0">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-4  lable_position control-label">Stock</label>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="0">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-4 lable_position control-label">Transit</label>
                        <div class="col-md-8">
                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="0s">
          				</div>
        			</div>
        		</div>
       		</div>
        		<div class="row qty_type_sale_purchase_cellBox">
        			<div class="col-md-3">
	        			<div class="form-group">
	          				<label class="col-md-8 control-label">Last Purchase</label>
	                        <div class="col-md-4">
	                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="56.67 Rs.">
	          				</div>
	        			</div>
	        		</div>
	        		<div class="col-md-3">
	        			<div class="form-group">
	          				<label class="col-md-6 control-label">MRP</label>
	                        <div class="col-md-6">
	                            <input type="text" class="form-control input-sm iptextRight" readonly="readonly" value="60.00 Rs.">
	          				</div>
	        			</div>
	        		</div>	
       		 	</div>
       		 	<div class="row">
	          		<label class=" col-md-2 control-label saleHistory">Sale History</label>
        		</div>
        		<div class="row">
	          		 <table class="table table-bordered">
				        <thead>
				          <tr>
				            <th>JUL</th>
				            <th>AUG</th>
				            <th>SEP</th>
				            <th>OCT</th>
				            <th>NOV</th>
				            <th>DEC</th>
				            <th>JAN</th>
				            <th>FEB</th>
				            <th>MAR</th>
				            <th>APR</th>
				            <th>MAY</th>
				            <th>JUN</th>
				          </tr>
				        </thead>
				        <tbody>
				          <tr>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				            <td></td>
				          </tr>
				        </tbody>
				      </table>
        		</div>
        		<div class="row">
				<h5><span class="submenuBlue_heading">Enter Quantity</span></h5>
				<hr class="horizontal_line">
			</div>
			<div class="row">
				<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-5 control-label">Qantity</label>
                        <div class="col-md-7">
                            <input type="text" class="form-control input-sm iptextRight" value="10" tabindex="1">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-5 control-label">Free</label>
                        <div class="col-md-7">
                            <input type="text" class="form-control input-sm iptextRight" value="0" tabindex="2">
          				</div>
        			</div>
        		</div>
        		<div class="col-md-3">
        			<div class="form-group">
          				<label class="col-md-5 control-label">Value</label>
                        <div class="col-md-7">
                            <input type="text" class="form-control orangeBG input-sm iptextRight" readonly="readonly" value="567.00 Rs.">
          				</div>
        			</div>
        		</div>
       		</div>
       		<div>
       		<button class="okbtnSize" type="button" tabindex="3">OK</button>
       		</div>
		</div>
		
	</body>
	</html>