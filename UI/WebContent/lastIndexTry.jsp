<!DOCTYPE html>
<html ng-app="pharmApp" dir="ltr" lang="en">
<head>
<title>Purpleaid</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Menu files -->
<link rel="shortcut icon" href="../favicon.ico">
<script src="components/angular/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="css/normalize.css" />
<link rel="stylesheet" type="text/css" href="css/demo.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />
<link rel="stylesheet" type="text/css" href="css/default.css" />
<link rel="stylesheet" type="text/css" href="css/jquery-ui.css" />
<link rel="stylesheet" type="text/css"
	href="css/jquery.switchButton.css" />
<link rel="stylesheet" type="text/css"
	href="components/bootstrap-3.2.0/css/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="components/ngToust/ngToast.css" />
<link rel="stylesheet" type="text/css"
	href="components/ngToust/ngToast-animations.css" />

<script src="scripts/libs/modernizr.js"></script>
<link rel="stylesheet" type="text/css"
	href="components/w2uiGrid/w2ui-1.4.1.css" />
<script src="js/modernizr.custom.25376.js"></script>
<script src="components/bootstrap-3.2.0/js/bootstrap.js"></script>
<link rel="stylesheet" href="stylesheets/style.css" />
<link rel="stylesheet" href="stylesheets/media_style.css" />
<link href="images/faviconP.ico" rel="icon" type="image/x-icon" />
<!-- Menu files Ends-->

<!-- Angular + UI GRID -->
<script src="components/angular/angular.js"></script>
<script src="components/angular/angular-route.min.js"></script>
<script src="components/bootstrap-3.2.0/ui-bootstrap.js"></script>
<script src="components/bootstrap-3.2.0/ui-bootstrap-tpls-0.12.0.js"></script>
<script src="components/ngToust/ngToast.js"></script>
<script src="components/ngToust/angular-sanitize.js"></script>
<script src="components/fileupload/ng-file-upload.js"></script>
<script src="components/fileupload/ng-file-upload-shim.js"></script>
<link rel="stylesheet" type="text/css" href="css/CalcSS3.css" />

<script src="app.js"></script>

<!-- Controller Files -->
<script src="controllers/MainCtrl.js"></script>
<script src="controllers/PurchaseCtrl.js"></script>
<script src="controllers/PersonModalInstanceCtrl.js"></script>
<script src="controllers/CompanyMasterCtrl.js"></script>
<script src="controllers/MrMasterCtrl.js"></script>
<script src="controllers/DivisionMasterCtrl.js"></script>
<script src="controllers/SupplierMasterCtrl.js"></script>
<script src="controllers/ProductMasterCtrl.js"></script>
<script src="controllers/CustomerMasterCtrl.js"></script>
<script src="controllers/SalesmanMasterCtrl.js"></script>
<script src="controllers/AreaMasterCtrl.js"></script>
<script src="controllers/RouteMasterCtrl.js"></script>
<script src="controllers/LockSmithCtrl.js"></script>
<script src="controllers/TaxCodeMasterCtrl.js"></script>
<script src="controllers/GoodsRecieptCtrl.js"></script>
<script src="controllers/GRProductPopupCtrl.js"></script>
<script src="controllers/GRProductListPopupCtrl.js"></script>
<script src="controllers/ContentMasterCtrl.js"></script>
<script src="controllers/GRCreditDebitPopupCtrl.js"></script>
<script src="controllers/GRProductBatchPopupCtrl.js"></script>
<script src="controllers/GRLinkPopupCtrl.js"></script>
<script src="controllers/StockManagerCtrl.js"></script>
<script src="controllers/SMBatchSchemeCtrl.js"></script>
<script src="controllers/SMChangeBatchDetailsCtrl.js"></script>
<script src="controllers/SMStockAdjustCtrl.js"></script>
<script src="controllers/SMTransMergeCtrl.js"></script>
<script src="controllers/ContactManagerCtrl.js"></script>
<script src="controllers/LoginCtrl.js"></script>
<script src="controllers/CMFilterCtrl.js"></script>
<script src="controllers/UserSettingsCtrl.js"></script>
<script src="controllers/CMAssociationPopupCtrl.js"></script>
<script src="controllers/CMImageUploadCtrl.js"></script>
<script src="controllers/SMTransMergeTargetBatchSelectorPopupCtrl.js"></script>
<script src="controllers/SMProductReassignCtrl.js"></script>
<script src="controllers/PurpleaidValidations.js"></script>
<script src="controllers/CMAddressPopupCtrl.js"></script>
<script src="controllers/ReturnsRegisterCtrl.js"></script>
<script src="controllers/GoodsReturn.js"></script>
<script src="controllers/GoodReturnAddProductCtrl.js"></script>
<script src="controllers/GoodReturnProductListPopupCtrl.js"></script>
<script src="controllers/GoodsReturnProductBatchPopupCtrl.js"></script>
<script src="controllers/GoodReturnCustomerListPopupCtrl.js"></script>
<script src="controllers/CompanyClaimCtrl.js"></script>
<script src="controllers/debitCreditNoteReasonsCtrl.js"></script>
<script src="controllers/ContactusCtrl.js"></script>
<script src="controllers/ControlPanelCtrl.js"></script>
<script src="controllers/SalesCtrl.js"></script>

<script type="text/javascript" src="components/w2uiGrid/w2ui-1.4.1.js"></script>
<!-- =================================================== -->

<!-- =================================================== -->
</head>

<body id="AllMainCtrl" ng-controller="MainCtrl" ng-init="init()"
	class="purpleaid" onload="GetClock();">

	<div class="row">
		<ng-view></ng-view>
	</div>

	<section class="column MainMenu"
		style=""
		id="purpleaid_menu" onclick="showmenu()">
		<div class="fieldsTop_Spacing">
			<input type="text" class="form-control input-sm textCenter menu_user"
				readonly="readonly" value="{{user.userName}}">
		</div>

		<div id="dl-menu" class="dl-menuwrapper outer-nav right vertical">
			<!-- <button class="dl-trigger">Open Menu</button> -->
			<ul class="dl-menu dl-menuopen menu_contentPos menu_scrollbar"
				id="scrollstyle">
				<li><a href="#Sales" class="">Sales</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#Sales" class=""
							onclick="showmenu()">Create or Modify Invoice</a></li>
						<li><a href="#Sales" class=""
							onclick="showmenu()">Create or Modify Challan</a></li>
					</ul></li>
				<li><a href="#" class="">Stock Management</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#purchase" class="" onclick="showmenu()">Create
								or Modify PO</a></li>
						<li><a href="#goodsReciept" onclick="showmenu()" class="">Good
								Receipt</a></li>
						<li><a href="#stockMangaer" onclick="showmenu()" class="">Stock
								Manager</a></li>

						<li><a href="#" class="not_implemented_link not_active">Product
								Schemes</a></li>
						<li><a href="#" class="not_implemented_link not_active">Scheme
								Customer Adj</a></li>
					</ul></li>
				<li><a href="#" class="">Returns Management</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#returnregister" onclick="showmenu()" class=" ">Returns
								Register</a></li>
						<li><a href="#goodsreturn" onclick="showmenu()" class="">Goods
								Return</a></li>
						<li><a href="#CompanyClaim" onclick="showmenu()" class="">Company
								Claim</a></li>
					</ul></li>
				<li><a href="#" class="not_implemented_link not_active">Accounting</a></li>
				<li><a href="#" class="">Utility</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#utilityLocksmith" onclick="showmenu()">Locksmith</a></li>
						<li><a href="#ContactManager" onclick="showmenu()">People
								Manager</a></li>
						<li><a href="#ControlPanel">Control Panel</a>
							<ul class="dl-submenu">
								<li class="divider"></li>
								<li><a href="#ControlPanelSystemValue" onclick="showmenu()">System
										Value</a></li>
								<li><a href="#ControlPanelMiscellaneous" onclick="showmenu()">Miscellaneous</a></li>
							</ul></li>
						<!-- 	<li><a href="#MyProfileManager" onclick=showmenu()>My Profile</a></li> -->

					</ul></li>
				<li><a href="#" class=" ">Reporting Centre</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#ReportManager" onclick="showmenu()">Reporting
								Manager</a></li>
					</ul></li>
				<li><a href="#masterCompany">Masters</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#masterCompany" onclick="showmenu()">Company</a></li>
						<li><a href="#masterSupplier" onclick="showmenu()">Supplier</a></li>
						<li><a href="#masterDivision" onclick="showmenu()">Division</a></li>
						<!-- <li><a href="#masterMr" onclick="showmenu()">MR</a></li> -->
						<li><a href="#masterProduct" onclick="showmenu()">Product</a></li>
						<li><a href="#masterContent" onclick="showmenu()">Content
								Master</a></li>
						<li class="divider"></li>
						<li><a href="#masterCustomer" onclick="showmenu()">Customer</a></li>
						<li><a href="#masterArea" onclick="showmenu()">Area</a></li>
						<li><a href="#masterRoute" onclick="showmenu()">Route</a></li>
						<!-- <li><a href="#masterSalesman" onclick=showmenu()>Salesman</a></li> -->
						<li class="divider"></li>
						<li><a href="#masterTaxCode" class="not_implemented_link "
							onclick="showmenu()">Tax Codes</a></li>
						<li><a href="#debitCreditNoteReasons"
							class="not_implemented_link" onclick="showmenu()">Debit/Credit
								Note Reasons</a></li>
						<li><a href="#masterProductReassignment"
							class="not_implemented_link not_active" onclick="showmenu()">Product
								Reassignment</a></li>
					</ul></li>
				<li><a href="#">Bookmarks</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#" class="not_implemented_link not_active">Bookmarks
								Manager</a></li>
						<li><a href="#purchase" onclick="showmenu()">Create or
								Modify PO</a></li>
						<li><a href="#masterCompany" onclick="showmenu()">Company</a></li>
						<li><a href="#masterCustomer" onclick="showmenu()">Customer</a></li>
						<li><a href="#masterProduct" onclick="showmenu()">Product</a></li>
					</ul></li>
				<li><a href="#">Help</a>
					<ul class="dl-submenu">
						<li class="divider"></li>
						<li><a href="#" class="not_implemented_link not_active">Help</a></li>
						<li><a href="#">About</a>
							<ul class="dl-submenu">
						<li class="divider"></li>
					<li><a href="#ReleaseNote" onclick="showmenu()">Release Notes</a></li>	
	        	<li><a href="#FAQs" onclick="showmenu()">FAQs</a></li>
	        	<li ><a href="#KnownIssues" onclick="showmenu()">Known Issues</a></li>	        	
	        	<li><a href="#SiteMap" onclick="showmenu()">Site Map</a></li>
	        	<li ><a href="#AboutUs" onclick="showmenu()">About Us</a></li>
	        	<li ><a href="#ContactUs" onclick="showmenu()">Contact Us</a></li>
								</ul>
						</li>
					</ul></li>
			</ul>
		</div>
<!-- 		<nav class="navbar navbar-default navbar_master"
			style="width: 131%; margin-left: -28px; margin-top: 373px;">
			<div class="">
				<ul class="nav navbar-nav">
					<li class=""><a href="#AboutUs" style="padding: 15px 10px;">About Us</a></li>
				</ul>
			</div>
		</nav> -->
		<nav class="menu_btn">
			<div class="row container">
				<div class="col-md-4" onclick="logout()">
					<a><img class="menu_imageSize not_active"
						src="images/menu_images/logout.png"></a><br> <span class="">Logout</span>
				</div>
				<div class="col-md-4">
					<a href="#MyProfileManager"><img class="menu_imageSize"
						src="images/menu_images/profile.png"></a><br> <span
						class="">Profile</span>
				</div>
				<div class="col-md-4">
					<a><img class="menu_imageSize" onclick="popup()"
						src="images/menu_images/calculator.png"></a><br> <span
						class="">Calc</span>
				</div>
				<!--  <div class="col-md-3">
						    	<a href="#"><img class="menu_imageSize not_active" src="images/menu_images/favourite.png"></a><br>
								<span class="menu_favoritePos">Favorite</span>
						    </div> -->
			</div>
		</nav>
		<div class="row menu_version">
			<span class="">{{user.userSoftwareType}}<span
				class="purpleaid_version">{{user.userSoftwareVersion}}</span>
			</span>
		</div>
		<div class="row menu_companyName">
			<span class="">{{user.userFirm}} </span>
		</div>
	</section>
	<nav class="mainnav navbar-fixed-bottom footerMenu">
		<ul class="leftFloat_Menu">
			<li>
				<button type="button" id="showMenu" class="purpleaidMenu"
					onclick="showmenu()">Purpleaid Menu</button>
			</li>
			<li>
				<button type="button" class="footer_openMenu">PO: UNICHEM</button> <!-- <a href="#" title="">PO: UNICHEM</a> -->
			</li>
			<!-- <li >
	                	<button type="button" class="footer_openMenu"></button>
						
	                </li>	 -->
		</ul>
		<ul class="rightFloat_Menu">
			<li ng-show="$root.prevPageFlag">
				<button type="button" onclick="back();"
					class="footer_openMenu back_btn">Back</button>
			</li>
		</ul>
	</nav>

	<!-- Menu files -->
	<script src="bootbox.min.js"></script>
	<script src="js/ticker.js"></script>
	<script src="js/classie.js"></script>
	<script src="js/menu.js"></script>
	<!--  <script src="scripts/libs/jquery-1.9.1.min.js"></script> -->
	<script src="scripts/libs/jquery.validate.min.js"></script>
	<script src="scripts/libs/enquire.min.js"></script>
	<script src="scripts/libs/plugins3rd.js"></script>
	<script src="scripts/plugins.js"></script>
	<script src="js/jquery.dlmenu.js"></script>
	<script src="components/jquery/jquery-ui.js"></script>
	<script src="components/jquery/jquery.switchButton.js"></script>
	<script src="js/CalcSS3.js"></script>
	<script>
		$(function() {
			$( '#dl-menu' ).dlmenu();
			
		});
	</script>
	<script language="JavaScript">
	 function showmenu()
		{
			var styl = document.getElementById('purpleaid_menu').style;
			if (styl.display == "none")								
			{
				styl.display = "block";				
			} else {
				styl.display = "none";				
			};
		};
	</script>
	<script src="js/BootSideMenu.js"></script>
	<script src="js/modernizr.custom.js"></script>
	<!-- <script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.1.js"></script> -->
	<script type="text/javascript" src="components/w2uiGrid/grid.js"></script>

	<script type="text/javascript">
			function load (config) {
			
				$('#main').w2layout(config.layout);
			    w2ui.layout.content('left', $().w2grid(config.grid));
			    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
			   /*  w2ui.layout.content('main', $().w2form(config.form)); */						
			}
			function loadC (config) {
				
				$('#grid').w2layout(config.layout);
			    w2ui.layout.content('left', $().w2grid(config.grid));
			    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
			    //angular.element(document.getElementById('CompanyMaster')).scope().$parent.$parent.grid=true;
			   /*  w2ui.layout.content('main', $().w2form(config.form)); */						
			}
			
		
			function loadM (config) {
				
				$('#grid').w2layout(config.layout);
			    w2ui.supLayout.content('left', $().w2grid(config.grid));
			   /*  w2ui.layout.content('main', $().w2form(config.form)); */						
			}
			function loadContentGrid (config) {
				
				$('#grid2').w2layout(config.layout);
			    w2ui.layout2.content('left', $().w2grid(config.grid));
			    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid2=true;
			   /*  w2ui.layout.content('main', $().w2form(config.form)); */						
			}
			function loadContentpopupGrid (config) {
				
				$('#grid3').w2layout(config.layout);
			    w2ui.layout3.content('left', $().w2grid(config.grid));
			    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid3=true;
			   /*  w2ui.layout.content('main', $().w2form(config.form)); */						
			}
			function loadCustomer (config) {
		        
		        $('#grid').w2layout(config.layout);
		           w2ui.layout.content('left', $().w2grid(config.grid));
		           //angular.element(document.getElementById('CustomerCtrl')).scope().$parent.grid=true;
		           //angular.element(document.getElementById('CompanyMaster')).scope().$parent.$parent.grid=true;
		           angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
		          /  w2ui.layout.content('main', $().w2form(config.form)); /      
		       }
			      
			      
			      
			    function loadS (config) {
			       
			       $('#grid').w2layout(config.layout);
			          w2ui.layout.content('left', $().w2grid(config.grid));
			         w2ui.layout.content('main', $().w2form(config.form));
			      }
			    
			    function loadA (config) {
			           
			           $('#grid').w2layout(config.layout);
			              w2ui.layout.content('left', $().w2grid(config.grid));
			             w2ui.layout.content('main', $().w2form(config.form));
			             angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
			          }
			    
			    
			    
			    function loadR(config) {
			           
			           $('#grid').w2layout(config.layout);
			              w2ui.layout.content('left', $().w2grid(config.grid));
			             w2ui.layout.content('main', $().w2form(config.form));
			             angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
			          }
			   
			   function loadSalesman(config) {
			          
			          $('#grid').w2layout(config.layout);
			             w2ui.layout.content('left', $().w2grid(config.grid));
			            w2ui.layout.content('main', $().w2form(config.form));
			            angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid=true;
			         }loadContentGrid
			         
			         function loadGrid4(config) {
				          
			        	 $('#grid4').w2layout(config.layout);
						    w2ui.layout4.content('left', $().w2grid(config.grid));
						    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid4=true;
				         }
			         
			         function loadGrid5(config) {
				          
			        	 $('#grid5').w2layout(config.layout);
						    w2ui.layout5.content('left', $().w2grid(config.grid));
						    angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid5=true;
				         }
			  
			  </script>
	<script type="text/javascript">
			  function loadL (config) {
		          
		          $('#gridL').w2layout(config.layout);
		             w2ui.layout1.content('left', $().w2grid(config.grid));
		             angular.element(document.getElementById('AllMainCtrl')).scope().$parent.gridL=true;
		                  
		         }
		</script>

	<script type="text/javascript">
			function focusGrid(){
			debugger;
			//document.activeElement=$("#main");
			//$(window).scrollTop($('#main').offset().top);
			
			w2ui.grid.keyboard=true;
			w2ui.grid.click(1,'click');
			document.activeElement=$("#grid_grid_main");											
		};
			
			 function loadRA (config) {
		          
		          $('#gridRA').w2layout(config.layout);
		             w2ui.layout1.content('left', $().w2grid(config.grid));
		             angular.element(document.getElementById('AllMainCtrl')).scope().$parent.gridRA=true;
		                  
		};
			 function logout () {
			 window.location.assign("http://localhost:8080/UI"); 
		};
		</script>


	<script type="text/javascript">
function popup() {
    w2popup.open({
    	  title: 'Calculator',
        body: '<div class="calc-main"> <div class="calc-display"> <span>0</span> <div class="calc-rad">Rad</div> <div class="calc-hold"></div> <div class="calc-buttons"> <div class="calc-info">?</div> <div class="calc-smaller">&gt;</div> <div class="calc-ln">.</div> </div> </div> <div class="calc-left"> <div><div>2nd</div></div> <div><div>(</div></div> <div><div>)</div></div> <div><div>%</div></div> <div><div>1/x</div></div> <div><div>x<sup>2</sup></div></div> <div><div>x<sup>3</sup></div></div> <div><div>y<sup>x</sup></div></div> <div><div>x!</div></div> <div><div>&radic;</div></div> <div><div class="calc-radxy"> <sup>x</sup><em>&radic;</em><span>y</span> </div></div> <div><div>log</div></div> <div><div>sin</div></div> <div><div>cos</div></div> <div><div>tan</div></div> <div><div>ln</div></div> <div><div>sinh</div></div> <div><div>cosh</div></div> <div><div>tanh</div></div> <div><div>e<sup>x</sup></div></div> <div><div>Deg</div></div> <div><div>&pi;</div></div> <div><div>EE</div></div> <div><div>Rand</div></div> </div> <div class="calc-right"> <div><div>mc</div></div> <div><div>m+</div></div> <div><div>m-</div></div> <div><div>mr</div></div> <div class="calc-brown"><div >AC</div></div> <div class="calc-brown"><div>+/&#8211;</div></div> <div class="calc-brown calc-f19"><div>&divide;</div></div> <div class="calc-brown calc-f21"><div>&times;</div></div> <div class="calc-black"><div>7</div></div> <div class="calc-black"><div>8</div></div> <div class="calc-black"><div>9</div></div> <div class="calc-brown calc-f18"><div>&#8211;</div></div> <div class="calc-black"><div>4</div></div> <div class="calc-black"><div >5</div></div> <div class="calc-black"><div>6</div></div> <div class="calc-brown calc-f18"><div>+</div></div> <div class="calc-black"><div>1</div></div> <div class="calc-black"><div>2</div></div> <div class="calc-black"><div>3</div></div> <div class="calc-blank"><textarea></textarea></div> <div class="calc-orange calc-eq calc-f17"><div> <div class="calc-down">=</div> </div></div> <div class="calc-black calc-zero"><div> <span>0</span> </div></div> <div class="calc-black calc-f21"><div>.</div></div> </div> </div> ',
        	 width     : 516,
             height    : 360,            
             color     : '#333',
             speed     : '0.3',
             opacity   : '0.8',
             modal     : true     
    });
}
</script>
 
	<!-- ================================= -->


	<!-- ================================= -->
</html>
