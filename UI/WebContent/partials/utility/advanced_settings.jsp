<div  ng-init=init() id="AdvancedSettings" class="purpleaid">
	<toast></toast>
	<div class="grayBG">
		<div class="container contacts_managerAdvanceSettingForm">
			<div class="row topblueStrip">
				<h6 class="fieldsTop_Spacing">
					<span class="topblueStripText">Advance Setting</span> <img alt=""
						class="close_popupImage" tabindex="2" src="images/close_popup.png">
				</h6>
			</div>
			<div class="row fieldsSpacing fieldsTop_Spacing">
				<div class=" col-md-1">
					<span class="control-label">User</span>
				</div>
				<div class=" col-md-3">
					<select ng-disabled="userSelectionDisabled" class="form-control input-sm input_rightSpecing" ng-options="opt.contactId as opt.contactFullName for opt in userNameList" ng-model="userSelectedId" ng-change="getUserData(userSelectedId)">
					</select>
				</div>
			</div>
			<div class="row ">
				<div class="col-md-3">
					<div class="row">
						<h5>
							<span class="submenuBlue_heading">Roles</span>
						</h5>
						<hr class="horizontal_line">
					</div>
					<div class="row contacts_managerUserPermission_showSelected">
						<div class="col-md-12">
							<nav class="mainnav">
								<ul class="rightFloat_Menu" id="list-nav">
									<li><a ng-click="filterGrids('role')">Show Selected(<span ng-class="roleFilterStatus == 'ON'?'highlight_purple':''">{{roleFilterStatus}}</span>)</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<!--=============GRID========== -->
							<div id="grid4" tabindex="-1"
								class="contactsManager_AdvSetting_Grid"></div>
							<!--=============GRID========== -->
						</div>
					</div>
				</div>
				<div class="col-md-9">
					<div class="row">
						<h5>
							<span class="submenuBlue_heading">Permissions</span>
						</h5>
						<hr class="horizontal_line">
					</div>
					<div class="row contacts_managerUserPermission_showSelected">
						<div class="col-md-12">
							<nav class="mainnav">
								<ul class="rightFloat_Menu" id="list-nav">
									<li><a ng-click="filterGrids('permisiion')">Show Selected(<span ng-class="permissionFilterStatus == 'ON'?'highlight_purple':''">{{permissionFilterStatus}}</span>)</a></li>
								</ul>
							</nav>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<!--=============GRID========== -->
							<div id="grid5" tabindex="-1"
								class="contactsManager_AdvSetting_Grid"></div>
							<!--=============GRID========== -->
						</div>
					</div>
				</div>
			</div>
			<div class="row Ok_Cancle_BtnPos_Popup">
				<div class="col-md-12">
					<button class="btn canclebtnSize" tabindex="6" ng-click="cancel()">Cancel</button>
					<button class="btn okbtnSize" tabindex="7" ng-click="save()">Save</button>
				</div>
			</div>
		</div>
	</div>
</div>
