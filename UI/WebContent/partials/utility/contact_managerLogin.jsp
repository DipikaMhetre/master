
<div id="UserSettingsPopup" ng-controller="UserSettingsCtrl" class="purpleaid">
	<div class="grayBG" ng-init=init();>
		<div class="container contacts_managerUserForm">
			<div class="row topblueStrip">
				<h6 class="fieldsTop_Spacing">
					<span class="topblueStripText"> User Setting</span>
				</h6>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-4">
					<span class="control-label">User Id</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm" ng-model="contact.contactUserName" value={{contact.contactUserName}}>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-4">
					<span class="control-label">Password</span>
				</div>
				<div class=" col-md-8">
					<input type="password" class="form-control input-sm" ng-model="contact.contactUserPassward" value={{contact.contactUserPassward}}>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<span class="control-label">Conform&nbsp;Password</span>
				</div>
				<div class="col-md-8">
					<input type="password" class="form-control input-sm" ng-model="confirmPass" value={{confirmPass}}>
				</div>
			</div>
			<div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg">
				<div class="col-md-4">
					<input type="checkbox" ng-model="contact.contactLockFlag" ng-value={{contact.contactLockFlag}}>
				</div>
				<div class="col-md-8">
					<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
					<button class="btn okbtnSize" ng-click="submit()">Ok</button>
				</div>
			</div>
		</div>
	</div>
</div>

