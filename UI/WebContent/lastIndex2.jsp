
<%-- <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> --%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<%@page import="java.util.*"%>
<%@page import="com.mytest.HttpURLConnectionExample"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>

<!DOCTYPE html>
<html ng-app="pharmApp" dir="ltr">
<head>
<!-- <title>Purpleaid</title> -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- Menu files -->
<%-- <%@ page import="com.sun.jersey.api.client.Client" %>  --%>
<link rel="shortcut icon" href="../favicon.ico">
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
<script src="components/angular/angular-cookies.js"></script>
<script src="components/bootstrap-3.2.0/ui-bootstrap.js"></script>
<script src="components/bootstrap-3.2.0/ui-bootstrap-tpls-0.12.0.js"></script>
<!-- <script
	src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.10.0.js"></script> -->
<script src="components/ngToust/ngToast.js"></script>
<script src="components/ngToust/angular-sanitize.js"></script>
<script src="components/fileupload/ng-file-upload.js"></script>
<script src="components/fileupload/ng-file-upload-shim.js"></script>
<script src="js/purpleGrep.js"></script>
<script src="js/jquery.treemenu.js"></script>

<link rel="stylesheet" type="text/css" href="css/CalcSS3.css" />
<script src="app.js"></script>
<!-- Controller Files -->
<script src="controllers/MainCtrl.js"></script>
<script src="controllers/PurchaseCtrl.js"></script>
<script src="controllers/PurchaseCtrl2.js"></script>
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
<script src="controllers/CompanyClaimFilterCtrl.js"></script>
<script src="controllers/ReturnRegisterFilterCtrl.js"></script>
<script src="controllers/GoodReturnAddNearExpiryCtrl.js"></script>
<script src="controllers/ContactusCtrl.js"></script>
<script src="controllers/ReportMasterCtrl.js"></script>
<script src="controllers/ControlPanelMisc.js"></script>
<script src="controllers/CtrlpanelMiscAddcontactype.js"></script>
<script src="controllers/SalesCtrl.js"></script>
<script src="controllers/SystemPermissionCtrl.js"></script>
<script src="controllers/debitCreditNoteReasonsCtrl.js"></script>
<script src="controllers/myC.js"></script>
<script src="controllers/ContacttypeCtrl.js"></script>
<script src="controllers/CtrlpanelMiscAddcontactype.js"></script>
<script src="controllers/CredebitReasonCtrl.js"></script>
<script src="controllers/ReasonsCtrl.js"></script>
<script src="controllers/ReasonsCtrl.js"></script>
<script src="controllers/NarrationMiscCtrl.js"></script>
<script src="controllers/VoucherNarrationCtrl.js"></script>
<script src="controllers/ManageFinacialYearCtrl.js"></script>
<script src="controllers/SalesmanRecieptCtrl.js"></script>
<script src="controllers/ManageRecieptBook.js"></script>
<script src="controllers/ManageReceiptFilterCtrl.js"></script>
<script src="controllers/multidrop.js"></script>
<script src="controllers/lodash.js"></script>
<script src="controllers/SPFilterCtrl.js"></script>
<script src="controllers/SystemRoleCtrl.js"></script>
<script src="controllers/SystemRoleFilter.js"></script>
<script src="controllers/AdvancedSettingsCtrl.js"></script>
<script src="controllers/CreditNoteCtrl.js"></script>
<script src="controllers/CreditNoteRegisterFilterCtrl.js"></script>
<script src="controllers/MyProfileManagerCtrl.js"></script>
<script src="controllers/MydeatailsPopupCtrl.js"></script>
<script src="controllers/ResetpwdCtrl.js"></script>
<script src="controllers/BusinessDetailsCtrl.js"></script>
<script src="controllers/CNRDirectCtrl.js"></script>
<script src="controllers/CNRDirectCtrl.js"></script>
<script src="controllers/CNRDirectCustomerListCtrl.js"></script>
<script src="controllers/CreditNoteProductCtrl.js"></script>
<script src="controllers/CrNPModifyProductCtrl.js"></script>
<script src="controllers/CreditNoteProductFilterCtrl.js"></script>
<script src="controllers/CreditNoteAdditionalDiscountCtrl.js"></script>
<script src="controllers/CreditNoteCustomerListPopupCtrl.js"></script>
<script src="controllers/HelpCtrl.js"></script>
<script src="controllers/ConsumptionCtrl.js"></script>
<script src="controllers/CreditNoteAdditionalManageCtrl.js"></script>
<script src="controllers/CreditNoteAdditionalDiscFilterCtrl.js"></script>
<script src="controllers/DebitNoteCtrl.js"></script>
<script src="controllers/UserManagerCtrl.js"></script>
<script src="controllers/CreditNoteRateDiffCtrl.js"></script>
<script src="controllers/SocialMediaCtrl.js"></script>
<script src="controllers/StockAuditCtrl.js"></script><!-- by Sagar -->
<script src="controllers/StockAuditfilterCtrl.js"></script><!-- by Sagar -->
<script src="controllers/PO_RegisterCtrl.js"></script><!-- by Sagar -->
<script src="controllers/PO_RegisterFilterCtrl.js"></script><!-- by Sagar -->
<script src="controllers/GoodsReciept_RegisterCtrl.js"></script><!-- by Sagar -->
<script src="controllers/GoodsRecipt_RegisterFilterCtrl.js"></script><!-- by Sagar -->
<script src="controllers/ControlPanelCtrl.js"></script><!-- by Sagar -->

<script type="text/javascript" src="components/w2uiGrid/w2ui-1.4.1.js"></script>
<!-- =================================================== -->


<!-- =================================================== -->
</head>

<script type="text/javascript">
var SERVER_URL="http://localhost:8080/Purple/";
	    $( document ).ready(function() {
	    	
	    	angular.element(document.getElementById('AllMainCtrl')).scope().$parent.loggedUserId= ${userId};
	    	angular.element(document.getElementById('AllMainCtrl')).scope().$parent.userToken= ${userToken};
	    	//alert('Coockie Set');
	    	var c={};
	    	
	    	c.userId=${userId};
	    	c.token=${userToken};
	    	angular.element('*[ng-app]').injector().get('$cookieStore').put('userInfoCookie',c);
	    	
	        var list=${menuList};
	    	
	    	renderMenu(list,angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie').userId,angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie').token);
	    	angular.element(document.getElementById('AllMainCtrl')).scope().$parent.menus=list;
	    	/////////////HArcoded Menus///////////
	    	document.getElementById('profile').setAttribute("onclick", "changeView("+c.userId+","+c.token+",115)");
	    	/* angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path("userDashboard"); */
	    	});
	   
    </script>

<body id="AllMainCtrl" ng-controller="MainCtrl" ng-init="init()"
	class="purpleaid"  onload="window.history.forward()">
	<!-- onload=GetClock(); -->


	<div class="row">
		<%--   Hello!  The time is now <%= new java.util.Date() %>
         <c:if test="${not empty message}">
    		<h1>${message}</h1>
    		TEST CODE SUccessful
		</c:if> --%>
		<%-- <c:out value="${sessionScope.message}" /> --%>
		<ng-view></ng-view>
	</div>

	<section class="column"
		style="background-color: white; box-shadow: 0 5px 15px rgba(0, 0, 0, .5); bottom: 27px; position: fixed; height: 554px; display: none;"
		id="purpleaid_menu" onclick=showmenu()>
		<!-- <div class="fieldsTop_Spacing">
			<input type="text" class="form-control input-sm textCenter menu_user"
				readonly="readonly" value="{{user.userName}}">

		</div> -->


		<div id="dl-menu" class="dl-menuwrapper outer-nav right vertical">
			


			
		</div>


		<nav class="menu_btn">
			<div class="row container">
				<div class="col-md-4" ng-click="Logout(${userId},${userToken})">

					<a><img class="menu_imageSize not_active"
						src="images/menu_images/logout.png"></a><br> <span class="">Logout</span>
				</div>
				<div class="col-md-4">
					<a id="profile"><img class="menu_imageSize"
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

			<span class="">{{user.userSoftwareType}}<br><span
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

		</ul>
		<ul class="rightFloat_Menu">
			<li ng-show="$root.prevPageFlag">
				<button type="button" onclick="back2();"
					class="footer_openMenu back_btn">Back</button>
			</li>
			
		</ul>
	</nav>

	<!-- Menu files -->




	<!-- <script src="bootbox.min.js"></script> -->
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
		}
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
			         function loadGrid6(config) {
			              
			             $('#grid6').w2layout(config.layout);
			          w2ui.layout6.content('left', $().w2grid(config.grid));
			          angular.element(document.getElementById('AllMainCtrl')).scope().$parent.grid6=true;
			             }
			         function back(){
			        	 
			        	 if(typeof angular.element(document.getElementById('AllMainCtrl')).scope().$root.currPage !=="undefined" && typeof angular.element(document.getElementById('AllMainCtrl')).scope().$root.currPage !=""){
			        		 var a=angular.element(document.getElementById('AllMainCtrl')).scope().$root.currPage;
			        		 var b=angular.element(document.getElementById('AllMainCtrl')).scope().$root.prevPage;
			        		 var c = b;
			        		 
			        		 //b = [a, a = b][0];
			        		 //angular.element(document.getElementById('AllMainCtrl')).scope().$root.
			        		 angular.element(document.getElementById('AllMainCtrl')).scope().$root.currPage="";
			        		 angular.element(document.getElementById('AllMainCtrl')).scope().$root.prevPage="";
			        		 angular.element(document.getElementById('AllMainCtrl')).scope().$root.prevPageFlag=false;
			        		 angular.element(document.getElementById('AllMainCtrl')).scope().$root.reAssignFlag=true;
			        		 window.location.assign("http://localhost:8080/UI/lastIndex2.html#/"+c);
			        		 angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path(c);
			        		 //$location.path(view);
			        		
			        	 };
			     		
			         }
			         
			         function back2(){
			        	var curr=angular.element('*[ng-app]').injector().get("configurable");							
			        	 changeView2(curr.userId,curr.token,curr.prevPageId);
			         }
			         
			         //////////////=====Manu functions======///////////////// 
			         function renderMenu(list,userId,token){
			        	 
			        	 var data=getStructuredArrayJson(list);
			        	//=========
			        	 var builddata = function () {
			        		    var source = [];
			        		    var items = [];
			        		    // build hierarchical source.
			        		    for (i = 0; i < data.length; i++) {
			        		        var item = data[i];
			        		        var label = item["text"];
			        		        var parentid = item["parentid"];
			        		        var id = item["id"];
									var purpleaidACLpermissionID=item["purpleaidACLpermissionID"]
			        		        if (items[parentid]) {
			        		            var item = { parentid: parentid, label: label, item: item,purpleaidACLpermissionID:purpleaidACLpermissionID };
			        		            if (!items[parentid].items) {
			        		                items[parentid].items = [];
			        		            }
			        		            items[parentid].items[items[parentid].items.length] = item;
			        		            items[id] = item;
			        		        }
			        		        else {
			        		            items[id] = { parentid: parentid, label: label, item: item,purpleaidACLpermissionID:purpleaidACLpermissionID };
			        		            source[id] = items[id];
			        		        }
			        		    }
			        		    return source;
			        		}
			        		var source = builddata();
			        	 	//=========
			        		var buildUL = function (parent, items) {
			        		    $.each(items, function () {
			        		        if (this.label) {
			        		            // create LI element and append it to the parent element.
			        		            
			        		            // if there are sub items, call the buildUL function.
			        		            if (this.items && this.items.length > 0) {
			        		            	var li = $("<li><a href=\"#\" class=\"\">" + this.label + "</a></li>");///moved			        		            		        		  
				        		            li.appendTo(parent);///moved
			        		                var ul = $("<ul class=\"dl-submenu\"><li class=\"divider\"></li></ul>");
			        		                ul.appendTo(li);
			        		                buildUL(ul, this.items);
			        		            }else{
			        		            	
			        		
			        		            	var li = $("<li><a class=\"\" onclick=changeView("+userId+","+token+","+this.purpleaidACLpermissionID+");showmenu()>" + this.label + "</a></li>");			        		   
				        		            li.appendTo(parent);
			        		            }
			        		        }
			        		    });
			        		}
			        		var ul = $("<ul class=\"dl-menu dl-menuopen menu_contentPos menu_scrollbar\"id=\"scrollstyle\">");
			        		
			        		ul.appendTo("#dl-menu");
			        		buildUL(ul, source);
			        	 
			        	 
			         };
					//////////////=====Manu functions======///////////////// 
			         
			         
			         function isLeaf(menuId,menulist){
						flag = false;
						for(i=0;i<menulist.length;i++){
							if(menulist[i].purpleaidACLParentMenuID == menuId){
							flag=true;
							}
							
						}
					    return flag;
					
					};
			         
			         /////generating menustructure
			         function getStructuredArrayJson(myList){
			         for(i=0;i<myList.length;i++){
			        	 myList[i].id = myList[i].purpleaidACLMenuID;
			        	 if(myList[i].purpleaidACLParentMenuID == 0){
			        		 		myList[i].parentid=-1;
			        	 		}else{
			        	 			myList[i].parentid=myList[i].purpleaidACLParentMenuID;
			        	 		}
			        	 myList[i].text=myList[i].purpleaidACLMenu;		
			        	 }	
			         
			           return myList;
			         }
			         
			         //
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
				 angular.element(document.getElementById('AllMainCtrl')).scope().Logout();
				
		    	
		    	
					   
					  };
			// 
			
			 function changeView(userId,token,pageId){
				 
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.pageId=pageId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.userId=userId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.token=token;
				 angular.element(document.getElementById('AllMainCtrl')).scope().pageId=pageId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().userId=userId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().token=token;
				// alert('pageId '+pageId);
				
				
				angular.element('*[ng-app]').injector().get("configurable").prevPageId=angular.element('*[ng-app]').injector().get("configurable").pageId;//new for back logic
				angular.element('*[ng-app]').injector().get("configurable").pageId=pageId;
				angular.element('*[ng-app]').injector().get("configurable").userId=userId;
				angular.element('*[ng-app]').injector().get("configurable").token=token;
				
				
				
				
				if(typeof angular.element('*[ng-app]').injector().get("configurable").activeView === "undefined"){
					 angular.element('*[ng-app]').injector().get("configurable").activeView=1;
					 
				}
				
				
				
				if(angular.element('*[ng-app]').injector().get("configurable").activeView==1){
					angular.element('*[ng-app]').injector().get("configurable").activeView=2;
					//setting cockie for page id and activeView
					var cokieObj={};
					angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie'),cokieObj);
					cokieObj.pageId=pageId;
					cokieObj.activeView=angular.element('*[ng-app]').injector().get("configurable").activeView;
					angular.element('*[ng-app]').injector().get('$cookieStore').put('userInfoCookie2',cokieObj);
					////////ends
					angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path("view2");
					
				}else{
					angular.element('*[ng-app]').injector().get("configurable").activeView=1;
					//setting cockie for page id and activeView
					var cokieObj={};
					angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie'),cokieObj);
					cokieObj.pageId=pageId;
					cokieObj.activeView=angular.element('*[ng-app]').injector().get("configurable").activeView;
					angular.element('*[ng-app]').injector().get('$cookieStore').put('userInfoCookie2',cokieObj);
					////////ends
					angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path("view1");
				}
				
				
				//angular.element('*[ng-app]').injector().get("configurable").setData(userId,pageId,token);
				
				if(!angular.element(document.getElementById('AllMainCtrl')).scope().$$phase) {
						angular.element(document.getElementById('AllMainCtrl')).scope().$apply();
				}
				
				if(typeof angular.element(document.getElementById('AllMainCtrl')).scope().$root.prevPageFlag !== 'undefined'){
					delete angular.element(document.getElementById('AllMainCtrl')).scope().$root.prevPageFlag;
				}
			 };
			 
 function changeView2(userId,token,pageId){//this is for transformation of 
				 
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.pageId=pageId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.userId=userId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().$parent.token=token;
				 angular.element(document.getElementById('AllMainCtrl')).scope().pageId=pageId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().userId=userId;
				 angular.element(document.getElementById('AllMainCtrl')).scope().token=token;
				// alert('pageId '+pageId);
				
				
				angular.element('*[ng-app]').injector().get("configurable").prevPageId=angular.element('*[ng-app]').injector().get("configurable").pageId;//new for back logic
				angular.element('*[ng-app]').injector().get("configurable").pageId=pageId;
				angular.element('*[ng-app]').injector().get("configurable").userId=userId;
				angular.element('*[ng-app]').injector().get("configurable").token=token;
				
				
				
				
				if(typeof angular.element('*[ng-app]').injector().get("configurable").activeView === "undefined"){
					 angular.element('*[ng-app]').injector().get("configurable").activeView=1;
					 
				}
				
				
				
				if(angular.element('*[ng-app]').injector().get("configurable").activeView==1){
					angular.element('*[ng-app]').injector().get("configurable").activeView=2;
					//setting cockie for page id and activeView
					var cokieObj={};
					angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie'),cokieObj);
					cokieObj.pageId=pageId;
					cokieObj.activeView=angular.element('*[ng-app]').injector().get("configurable").activeView;
					angular.element('*[ng-app]').injector().get('$cookieStore').put('userInfoCookie2',cokieObj);
					////////ends
					angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path("view2");
					
				}else{
					angular.element('*[ng-app]').injector().get("configurable").activeView=1;
					//setting cockie for page id and activeView
					var cokieObj={};
					angular.copy(angular.element('*[ng-app]').injector().get('$cookieStore').get('userInfoCookie'),cokieObj);
					cokieObj.pageId=pageId;
					cokieObj.activeView=angular.element('*[ng-app]').injector().get("configurable").activeView;
					angular.element('*[ng-app]').injector().get('$cookieStore').put('userInfoCookie2',cokieObj);
					////////ends
					angular.element(document.getElementById('AllMainCtrl')).injector().get('$location').path("view1");
				}
				
				
				//angular.element('*[ng-app]').injector().get("configurable").setData(userId,pageId,token);
				
				if(!angular.element(document.getElementById('AllMainCtrl')).scope().$$phase) {
						angular.element(document.getElementById('AllMainCtrl')).scope().$apply();
				}
				
				 
			 };
			 	
				
				/* window.onbeforeunload = function(e) {
					e.preventDefault();
					  // return 'Refresh will occrs some data losss .Are you sure?';
					return false;
					}; */
				
		 
		////////browser refresh
		
			
		
		</script>

	<script type="text/javascript">
		function date_time(id)
			{
	        date = new Date;
	        year = date.getFullYear();
	        month = date.getMonth();
	        months = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');
	        d = date.getDate();
	        day = date.getDay();
	        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	        h = date.getHours();
	        if(h<10)
	        {
	                h = "0"+h;
	        }
	        m = date.getMinutes();
	        if(m<10)
	        {
	                m = "0"+m;
	        }
	        s = date.getSeconds();
	        if(s<10)
	        {
	                s = "0"+s;
	        }
	        result = ' '+d+'/'+months[month]+'/'+year+' '+h+':'+m;
	        document.getElementById(id).innerHTML = result;
	        setTimeout('date_time("'+id+'");','1000');
	        return true;
			}
	</script>


	<script type="text/javascript">
	 /*  window.onbeforeunload = function(event) {
	     alert("dsghjkadghjl");
	  }  
	      document.onkeydown = function(event){
				  switch (event.keyCode){
				        case 116 : //F5 button
				             event.returnValue = false;
				            event.keyCode = 0;
				            return false; 
				            alert('f5');
				            event.preventDefault();
				            break;
				        case 82 : //R button
				            if (event.ctrlKey){ 
				                event.returnValue = false;
				                event.keyCode = 0;
				                return false;
				            }; break;
				        case 27 : //esc button
				        	 return false;
				        	 event.preventDefault(); break;
				    };
				};
				*/ 

</script>
</html>
