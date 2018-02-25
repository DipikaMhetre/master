'
<div id="CMAddressPopup" ng-init="init()" class="purpleaid">
	<div class="grayBG" >
		<div class="container contacts_managerUserForm">
			<div class="row topblueStrip">
				<h6 class="fieldsTop_Spacing">
					<span class="topblueStripText">Address Details</span>
				</h6>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Address&nbsp;Type</span>
				</div>
				<div class=" col-md-9">
					<select ng-options="opt.entityDeatilsDescription for opt in entityList track by opt.entityDetailsId"
						ng-model="showAddressSelected.entity">
					</select>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Address&nbsp;Line1</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm"
						value="{{showAddressSelected.addressLine1}}"
						ng-model="showAddressSelected.addressLine1">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Address&nbsp;Line2</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm"
						value="{{showAddressSelected.addressLine2}}"
						ng-model="showAddressSelected.addressLine2">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">City</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm"
						value="{{showAddressSelected.addressCity}}"
						ng-model="showAddressSelected.addressCity">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">State</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm"
						value="{{showAddressSelected.addressState}}"
						ng-model="showAddressSelected.addressState">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Pin&nbsp;Code</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm"
						value="{{showAddressSelected.addressPinCode}}"
						ng-model="showAddressSelected.addressPinCode">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Country</span>
				</div>
				<div class=" col-md-9">
					<select class="form-control input-sm ">
					</select>
				</div>
			</div>
			<div class="row fields_headingSpacing textRight fieldsBot_Spacing_lg">
				<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
				<button class="btn okbtnSize" ng-click="submit()">Submit</button>
			</div>
		</div>
	</div>
</div>
',
