<div id="CNRDirect" ng-init="init()" 
	class="container lightBox_CreditNote_Direct">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">{{opType}} Direct</span> <img alt=""
				class="close_popupImage" tabindex="2" src="images/close_popup.png">
		</h6>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Customer Details</span>
			<button class="btn btn-primary consumptionDetailsBtn">Consumption
				Details</button>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div  class="row fieldsSpacing ">
		<div class="col-md-7 sectionvline">
			<div ng-hide="editCustomerMode" class="row visitingCard_view Customer_Premium_Bg">
				<div class="col-md-12 visitingCard_innerView">
					<span style="font-size: 18px; color: #cc0099;">{{showCustomerSelected.customerName}}</span> <!-- <span>(3245454)</span> -->
					<span class="Customer_Premium_text">Premium</span> <br> <span>{{showCustomerSelected.customerContactPerson}}</span> <br> <span><!-- Aditya Garden City, Warje-Malwadi,
						Pune-400551 -->{{showCustomerSelected.customerAddressLine1}}</span> <br> <span>Mobile No. - {{showCustomerSelected.customerPhone}}</span> <br>
					<span>Area&nbsp;-&nbsp;{{showCustomerSelected.customerArea}}</span> <span
						class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;{{showCustomerSelected.customerSalesman}}
						</span> <img ng-click="showCustomerDropDown()" class="editButton " 
						alt="" src="images/edit.png">
				</div>
			</div>
			<div ng-show="editCustomerMode" class="row visitingCard_view Customer_Border_Bg">
				<span class="control-label">Customer</span>
				<select class=" input-sm" ng-options="opt as opt.customerName for opt in customerList" ng-model="showCustomerSelected" ng-change="editCustomerMode=!editCustomerMode"></select>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">C.N.&nbsp;Type</span>
				</div>
				<div class=" col-md-9">
					<input readonly type="text" class="form-control input-sm"
						value="Direct">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Date</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm" readonly
						ng-model="showDirectCN.creditNoteDate">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Status</span>
				</div>
				<div class=" col-md-9">
					<select type="text" class="form-control input-sm" disabled
						ng-options="opt.id as opt.name for opt in statusList"
						ng-model="showDirectCN.creditNoteStatus">
					</select>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Created&nbsp;By</span>
				</div>
				<div class=" col-md-9">
					<!-- <textarea rows="2" readonly="readonly" class="textarea_fixSize" ></textarea> -->
					<input type="text" class="form-control input-sm" readonly
						ng-model="showDirectCN.creditNoteCreatedByName">
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Credit Note Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-7">
			<div class="row">
				<div class=" col-md-2">
					<span class="control-label">Reason</span>
				</div>
				<div class=" col-md-4">
					<select
						class="input-sm form-control masterPage_grid_returnRegister input_rightSpecing"
						tabindex="1" ng-options="opt.id as opt.name for opt in reasonList"
						ng-model="showDirectCN.creditNoteReason">
					</select>
				</div>
				<div class=" col-md-6">
					<input type="text" class="form-control input-sm" tabindex="2"
						ng-modeel="showDirectCN.creditNoteReasonOther">
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class=" col-md-3">
					<span class="control-label">Amount</span>
				</div>
				<div class=" col-md-9">
					<input type="text" class="form-control input-sm" tabindex="3"
						ng-model="showDirectCN.creditNoteAmount">
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-1">
			<span class="control-label">Remark</span>
		</div>
		<div class=" col-md-11">
			<input type="text"
				class="form-control input-sm CN_type_DirectRemarkPos" tabindex="4"
				ng-model="showDirectCN.creditNoteRemark">
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-12">
			<input class="checkBox" type="checkbox"
				ng-model="showDirectCN.creditNoteflgLock"> <span>Lock</span>
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class="col-md-12">
			<button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button>
			<button class="btn okbtnSize" tabindex="6" ng-click="submit()">Save</button>
		</div>
	</div>
</div>
',
