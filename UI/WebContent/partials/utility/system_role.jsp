<title>System
						Role</title>
<div id="SystemRole" data-ng-controller="SystemRoleCtrl" ng-init=init()>
	<toast></toast>
	<Section class="pageheader">
		<nav class="mainnav">
			<ul class="leftFloat_Menu" id="list-nav">
				<li><a href="#" class="highlight_purple not_active">System
						Role</a></li>
				<li><span class="glyphicon glyphicon-play newShowGlyphicon"></span></li>
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,117);">Refresh</a></li>
				<li><a ng-click="newRole()">New</a></li>
				<li><a ng-click="save()">Save</a></li>
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
				<li><a ng-click="$parent.changeView(activeUser.userId,activeUser.token,93);">System Permission</a></li>
				<li class="active"><a >System Role</a></li>
			</ul>
		</div>
	</nav>
	<div class="row container">
		<div class="col-md-2 sectiondivider">
			<div class="row ">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid" tabindex="2"
						class="gridSizeLeft_SystemRole fieldsBot_Spacing"></div>
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
		<div class="col-md-10">
			<div class="row masterTop_GrayStrip fieldsBot_Spacing">
				<nav class="mainnav">
					<ul class="leftFloat " id="list-nav">
						<li class="returnReg_headingPos"><span
							class="masterTop_StripText">Role</span>&nbsp;<!-- (<span
							class="masterHeading"></span><span class="masterHeading">New</span>) --></li>
					</ul>
					<ul class="rightFloat " id="list-nav">
						<li class="returnReg_headingPos"
							ng-click="showSysRoleUserSettingPopup()"><span
							class="masterTop_StripText"></span></li>
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
				<div class=" col-md-5">
					<span class="control-label">Role</span>&nbsp;&nbsp;&nbsp; <input
						type="text" ng-disabled="!editable"
						ng-model="showRoleSelected.role" class=" input-sm">
				</div>

			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-12">
					<span class="control-label">Role&nbsp;Description</span>
					<!-- User=={{changedUserStorage}}  <br>Permissin=={{changedPermissionStorage}} <br>roles={{changedRoles}}  -->
				</div>
				<div class=" col-md-12">
					<textarea ng-disabled="!editable" rows="2" cols=""
						class="textarea_fixSize"
						ng-model="showRoleSelected.roleDescription"></textarea>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3">
					<div class="row fields_headingSpacing1">
						<h5>
							<span class="submenuBlue_heading">Permissions</span>
						</h5>
						<hr class="horizontal_line">
					</div>
					<div class="row ">
						<div class="col-md-12" style="margin-top: -18px;">
							<nav class="mainnav">
								<ul class="rightFloat" id="list-nav">
									<li><a ng-click="changeFlag('permission')"
										title="Show Selected" tabindex="13">Show Selected(<span
											ng-class="permissionFilterStatus == 'ON'?'highlight_purple':''">{{permissionFilterStatus}}</span>)
									</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="row fieldsSpacing fieldsTop_Spacing">
						<div class="col-md-12">
							<!--=============GRID==========  -->
							<div id="grid2" tabindex="14" class="gridSizeRight_SystemRole"></div>
							<!--=============GRID==========  -->
						</div>
					</div>

				</div>
				<div class="col-md-9">
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
									<li><a ng-click="changeFlag('user')" title="Show Selected"
										tabindex="13">Show Selected Users(<span
											ng-class="userShowFilterStatus == 'ON'?'highlight_purple':''">{{userShowFilterStatus}}</span>)
									</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="row fieldsSpacing fieldsTop_Spacing">
						<div class="col-md-12">
							<!--=============GRID==========  -->
							<div id="grid3" tabindex="14" class="gridSizeRight_SystemRole"></div>
							<!--=============GRID==========  -->
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-12">
					<input class="checkBox" ng-disabled="!editable"
						ng-model="showRoleSelected.roleActiveFlag" type="checkbox">
					<span>Active</span>
				</div>
			</div>
		</div>
	</div>
</div>
