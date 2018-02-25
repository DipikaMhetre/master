<title>Route
						Master</title>
<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<div id="RouteMaster" data-ng-controller="RouteMasterCtrl"
	ng-init=init()>
	<toast></toast>
	<% List<PurpleaidACL> xyz= new ArrayList();
		xyz=(ArrayList<PurpleaidACL>) request.getSession().getAttribute("permissionList"); 
		Boolean createPermission = false;
		Boolean modifyPermission = false;
		Boolean deletePermission = false;
		Boolean modifyPurchaseDatePermission = false;//extra
		String x=xyz.get(0).toString();
		for(int i=0;i<xyz.size();i++){
			Double d = new Double(xyz.get(i).getPurpleaidACLpermissionID());
			int n=d.intValue();
			 switch (n) {
	            case 42: deletePermission = true;;//delete 
	                    break;
	            case 41: createPermission = true;//create
	            		break;	
	            case 43: modifyPermission = true;
                		break;     			
	            case 5: modifyPurchaseDatePermission=true;
       					break;
       			default:break;		
			} 		
		}
		
		%>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#puchase" class="highlight_purple not_active">Route
						Master</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span>
				</li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,40);" class="">Refresh</a></li>
				<li><a class="not_implemented_link not_active">Export</a>
				</li>
				<li><a href="#" title="Print"
					class="not_implemented_link not_active">Print</a></li>
				<%if(createPermission || modifyPermission){%>
				<li ng-show="showSaveBtn"><a title="Save"
					data-ng-click=saveRouteMaster(showRouteSelected) tabindex="8">Save</a>
				</li>
				<%}%>
				<%if(createPermission){%>
				<li><a title="New" data-ng-click=newRouteMaster()>New</a></li>
				<%}%>
				<li><a href="#" title="Help"
					class="not_implemented_link not_active">Help</a></li>
			</ul>
			<ul class="rightFloat_Menu">
				<li><a class=" not_active marginZero textCenter">Satyajit
						Toradmal</a> <a href="#" title="Todays Date"
					class=" not_active marginZero textCenter"> <span
						style="font-size: 12px;" id="date_time"></span> <script
							type="text/javascript">
							window.onload = date_time('date_time');
						</script></a></li>
				<li class="editable_btnPos">
					<button type="button"
						class="btn btn-default flag_enable input-sm editable-btn" ng-class="editable ? 'flagselected' : ''"
						tabindex="20">
						<span class="fieldLeft_spacing_lg" ng-click="editable=!editable;$root.editable=!$root.editable">Editable</span>
					</button>
				</li>
			</ul>
		</nav>
	</Section>
	<nav class="navbar navbar-default navbar_master">
		<div class="container">
			<ul class="nav navbar-nav master_nav_element_pos">
				<li><a ng-click="changeView(activeUser.userId,activeUser.token,36)">Area</a></li>
				<li class="active"><a >Route</a></li>
				<!-- <li ><a href="#masterSalesman">Salesman</a></li> -->
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="master_leftUpper">
				<div class="row masterPage_gridText">
					<span>If you select a route from the list it show the
						details of route.</span>
				</div>
			</div>
			<div class="row masterPage_fieldSpacing">

				<!-- =============GRID============-->
				<div id="grid" tabindex="-1" class="master_rought_LeftGrid"></div>
				<!-- =============GRID============-->
			</div>
		</div>
		<div class="col-md-10">
			<div class="">
				<div class="row masterTop_GrayStrip">
					<h6>
						<span class="masterTop_StripText">Route&nbsp;(<span
							class="masterHeading">{{showRouteSelected.routeDescription}}</span><span
							ng-show="!showRouteSelected.routeDescription"
							class="masterHeading">New</span>)
						</span>
					</h6>
				</div>
				<div class="row fields_headingSpacing">
					<span class="col-md-1 control-label">Route&nbsp;Name</span>
					<div class="col-md-2">
						<input ng-disabled="!editable" type="text"
							class="form-control route_master_RouteName input-sm"
							required="required" id="route_desc" name="route_desc"
							allow-alphanumericwithspace
							value={{showRouteSelected.routeDescription}}
							data-ng-model=showRouteSelected.routeDescription tabindex="2"
							onclick="Purplevalidator('route_desc',2,'RouteMaster','')"
							onfocus="Purplevalidator('route_desc',2,'RouteMaster','')">

					</div>

					<span class="col-md-1 control-label">Route&nbsp;Code</span>
					<div class="col-md-2">
						<input ng-disabled="!editable" type="text" required="required"
							id="routecode" name="routecode" allow-alphanumericwithspace
							class="form-control  input-sm" value={{showRouteSelected.rrID}}
							data-ng-model=showRouteSelected.rrID tabindex="3"
							onclick="Purplevalidator('routecode',2,'RouteMaster','')"
							onfocus="Purplevalidator('routecode',2,'RouteMaster','')">
					</div>



				</div>
				<div class="row fields_headingSpacing">
					<h5>
						<span class="submenuBlue_heading ">Route Details</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<div class="col-md-3">
						<select ng-disabled="!editable"
							class="input-sm opt_btn_small input_rightSpecing"
							data-ng-options="opt.regionDescription for opt in showRegionList"
							ng-model="showRegionSelected"
							ng-change="onRegionSelection(showRegionSelected)" tabindex="4">
							<option value='' disabled selected style='display: none;'>Please
								select a Region</option>
							<option>Region</option>
						</select>
					</div>
					<div class="col-md-3">
						<select ng-disabled="!editable"
							class="input-sm opt_btn_small input_rightSpecing"
							data-ng-options="opt.areaDescription for opt in showAreaList"
							ng-model="showAreaSelected" ng-disabled="!showRegionSelected"
							tabindex="4">
							<option value='' disabled selected style='display: none;'>Please
								select an Area</option>
							<option>Area</option>
						</select>
					</div>
					<div class="col-md-1">
						<button type="button"
							class="btn input-sm_btn btn_small btn-primary"
							ng-click="addRecord();" tabindex="5">ADD</button>
					</div>
					<div class="col-md-5">
						<nav class="mainnav">
							<ul class="rightFloat" id="list-nav">
								<li><a title="Remove Record" ng-click="removeRecord();"
									class="master_removePos highlight_red">Remove</a></li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="row fieldsTop_Spacing">
					<!-- =============GRID============-->
					<div id="gridRA" tabindex="-1" class="routeRightGrid"></div>
					<!-- =============GRID============-->
				</div>
				<div class="row fields_headingSpacing">
					<h5>
						<span class="submenuBlue_heading ">Route Settings</span>
					</h5>
					<hr class="horizontal_line">
				</div>
				<div class="row">
					<span class="col-md-2"> <input ng-disabled="!editable"
						class="checkBox" type="checkbox" tabindex="7"
						ng-value={{showRouteSelected.routeActiveFlag}}
						ng-model=showRouteSelected.routeActiveFlag> <span>Active</span>
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <script type="text/javascript">
     $( document ).ready(function() {
        // Handler for .ready() called.
        $('#routecode').allowNumbersOnly();         
      }); 
    </script>  -->
<script type="text/javascript">
    $(document).ready(function(){
        
          $("#routecode").keyup(function(){
             $("#routecode").css("background-color", "white");
        });
          $("#route_desc").keyup(function(){
              $("#route_desc").css("background-color", "white");
         });
          angular.element('*[ng-app]').injector().get("configurable").createPermission=<%=createPermission %>;
  		debugger;
  		var pCookie={createPermission:<%=createPermission %>,deletePermission:<%=deletePermission%>,modifyPermission:<%=modifyPermission %>,modifyPurchaseDatePermission:<%=modifyPurchaseDatePermission %>};
  		angular.element('*[ng-app]').injector().get('$cookieStore').put("userPermission",pCookie);
  		<% if(createPermission && !modifyPermission){%>	    		
  			angular.element(document.getElementById('RouteMaster')).scope().showSaveBtn=false;
  		<%}else if(modifyPermission){%>
  			angular.element(document.getElementById('RouteMaster')).scope().showSaveBtn=true;
  		<% }%>
       
       
    
    });
    </script>
