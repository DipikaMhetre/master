<%@page import="java.util.ArrayList"%>
<%@page import="com.purpleaid.beans.PurpleaidACL"%>
<%@page import="java.util.List"%>
<title>System Permission</title>
<div id="SystemPermission" data-ng-controller="SystemPermissionCtrl"
	ng-init=init()>
	<toast></toast>
	<%
		List<PurpleaidACL> xyz= new ArrayList();
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
		      /*       case 22: deletePermission = true;;//delete 
		                    break;
		            case 21: createPermission = true;//create
		            		break;	 */
		            case 94: modifyPermission = true;
	                		break;     			
		            /* case 5: modifyPurchaseDatePermission=true;
	       					break; */
	       			default:break;		
		} 		
			}
	%>
	
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">System
						Permission & Role</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,93);">Refresh</a></li>
				<%
					if(modifyPermission){
				%>
				<li><a ng-click="save()" title="Save">Save</a></li>
				<%
					}
				%>
				<li><a href="#" class="not_implemented_link not_active">Help</a></li>
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
					<button type="button" ng-class="editable ? 'flagselected' : ''"
						class="btn btn-default flag_enable input-sm editable-btn"
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
				<li class="active"><a href="#SystemPermission">System
						Permission</a></li>
				<li><a
					ng-click="changeView(activeUser.userId,activeUser.token,117);">System
						Role</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-4 sectiondivider">
			<div class="row fieldsBot_Spacing">
				<div class="col-md-4">
					<span>Permission&nbsp;Group</span>
				</div>
				<div class="col-md-8">
					<select ng-options="op as op.permissionGroup for op in pGroupList"
						class="form-control input-sm input_rightSpecing"
						ng-model="pGroupSelected" ng-change="onPGroupSelected()">

					</select>
				</div>
			</div>
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="gridSizeLeft_SystemPermission fieldsBot_Spacing"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row textCenter">
				<a ng-click="showFilterPopup()" tabindex="3" title="Filter">Filter(<span
					class="highlight_purple" ng-show="mainFilterStatus == 'ON'">ON</span><span
					ng-show="mainFilterStatus == 'OFF'">OFF</span>)
				</a> <img ng-show="mainFilterStatus == 'ON'"
					ng-click="cancelMainFilter()" alt="" class="filterOff_closeImage"
					tabindex="4" src="images/contacts_manager/close.png">
			</div>
		</div>
		<div class="col-md-8">
			<div class="row masterTop_GrayStrip fieldsBot_Spacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Permission</span>&nbsp;(<span
							class="masterHeading">{{showPermissionSelected.purpleaidACLpermission}}</span>)</li>
					</ul>
					<ul class="rightFloat " id="list-nav">
						<li class="limitSection_pos"
							ng-click="showAdvancedSettingsPopup()">
							<button class="btn btn-primary consumptionDetailsBtn"
								style="margin: -1px 4px 0px 0px;">Advanced&nbsp;Settings</button>
						</li>
					</ul>
				</nav>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-12">
					<span class="control-label">Permission&nbsp;Description</span>

				</div>
				<div class=" col-md-12">
					<textarea rows="2" cols="" class="textarea_fixSize" value=""
						readonly="readonly">{{showPermissionSelected.purpleaidACLpermissionDescription}}</textarea>
				</div>
			</div>
			<div class="row fields_headingSpacing1">
				<h5>
					<span class="submenuBlue_heading">Users</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row ">
				<div class="col-md-12" style="margin-top: -18px;">
					<nav class="mainnav">
						<ul class="rightFloat" id="list-nav">
							<li><a ng-click="changeFlag('group')" title="Show Selected"
								tabindex="13">Group Selected(<span
									ng-class="groupFlag=='ON'?'highlight_purple':''">{{groupFlag}}</span>)
							</a></li>
							<li><a ng-click="changeFlag('selectAll')" tabindex="13">Show
									Selected(<span
									ng-class="selectAllFlag=='ON'?'highlight_purple':''">{{selectAllFlag}}</span>)
							</a></li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="row fieldsSpacing fieldsTop_Spacing">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid2" tabindex="14"
						class="gridSizeRight_SystemPermission"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
		</div>
	</div>
</div>
<!-- <script type="text/javascript">
	$(function() {
		$('#grid').w2grid({
			name : 'grid',
			show : {

			},
			columns : [ {
				field : '',
				caption : 'Permission Group',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Permission',
				size : '50%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script>
<script type="text/javascript">
	$(function() {
		$('#grid2').w2grid({
			name : 'grid2',
			show : {
				selectColumn : true
			},
			columns : [ {
				field : '',
				caption : 'User Name',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Label',
				size : '40%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'User ID',
				size : '30%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Contact Type',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Staff',
				size : '20%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Organization',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Permission Type',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'Permission Since',
				size : '50%',
				style : 'text-align: left'
			}, {
				field : '',
				caption : 'User Since',
				size : '50%',
				style : 'text-align: left'
			} ],
			records : [

			]
		});
	});
</script> -->
<script type="text/javascript">
	$(document)
			.ready(
					function() {

						angular.element('*[ng-app]').injector().get(
								"configurable").createPermission =
<%=createPermission%>
	;
						debugger;
						var pCookie = {
							createPermission :
<%=createPermission%>
	,
							deletePermission :
<%=deletePermission%>
	,
							modifyPermission :
<%=modifyPermission%>
	,
							modifyPurchaseDatePermission :
<%=modifyPurchaseDatePermission%>
	};
						angular.element('*[ng-app]').injector().get(
								'$cookieStore').put("userPermission", pCookie);

					});
</script>