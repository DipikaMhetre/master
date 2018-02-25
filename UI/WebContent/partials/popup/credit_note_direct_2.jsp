<div id="CNRDirect" ng-init="init()"
	class="container lightBox_CreditNote_Direct">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">{{opType}} Credit Note - Direct
			</span> <img alt="" ng-click="cancel()" class="close_popupImage"
				tabindex="2" src="images/close_popup.png">
		</h6>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Customer Details</span>
			<button ng-disabled="opType=='New'" ng-click="showConsumptionPopup()"
				class="btn btn-primary consumptionDetailsBtn">Consumption
				Details</button>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row fieldsSpacing ">
		<div class="col-md-6 sectionvline">
			<div class="row visitingCard_view Customer_Premium_Bg">
				<div class="col-md-12 visitingCard_innerView">
					<span style="font-size: 18px; color: #cc0099;"><span
						ng-if="showCustomerSelected.recid !=-1 ">{{showCustomerSelected.customerName}}</span><span
						ng-if="showCustomerSelected.recid ==-1 ">Please select
							customer</span></span>
					<!-- <span>(3245454)</span> -->
					<span ng-hide="showCustomerSelected.recid ==-1"
						class="Customer_Premium_text">Premium</span> <br> <span>{{showCustomerSelected.customerContactPerson}}</span>
					<br> <span> <!-- Aditya Garden City, Warje-Malwadi,
						Pune-400551 -->{{showCustomerSelected.customerAddressLine1}}
					</span> <br> <span ng-hide="showCustomerSelected.recid ==-1">Mobile
						No. - {{showCustomerSelected.customerPhone}}</span> <br> <span
						ng-hide="showCustomerSelected.recid ==-1">Area&nbsp;-&nbsp;{{showCustomerSelected.customerArea}}</span>
					<span ng-hide="showCustomerSelected.recid ==-1"
						class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;{{showCustomerSelected.customerSalesman}}
					</span> <img ng-hide="opType=='Modify'" ng-click="showCustomerListPopup()"
						class="editButton " alt="" src="images/edit.png">
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row fieldsSpacing">
				<div class=" col-md-2">
					<span class="control-label">C.N.&nbsp;ID</span>
				</div>
				<div class=" col-md-4">
					<input ng-model="showDirectCN.creditNoteID" readonly type="text" class="form-control input-sm">
				</div>
				<div class=" col-md-2">
					<span class="control-label">C.N.&nbsp;Type</span>
				</div>
				<div class=" col-md-4">
					<input readonly type="text" class="form-control input-sm"
						ng-model="showDirectCN.creditNoteTypeDescription"><!-- value="Direct" -->
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-2">
					<span class="control-label">Date</span>
				</div>
				<div class=" col-md-4">
					<input type="text" class="form-control input-sm" readonly
						ng-model="showDirectCN.creditNoteDate">
				</div>
				<div class=" col-md-2">
					<span class="control-label">Status</span>
				</div>
				<div class=" col-md-4">
					<input type="text" class="form-control input-sm" disabled
						ng-model="showDirectCN.creditNoteStatusDescription">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-2">
					<span class="control-label">Created&nbsp;By</span>
				</div>
				<div class=" col-md-10">
					<!-- <textarea rows="2" readonly="readonly" class="textarea_fixSize" ></textarea> -->
					<input type="text" class="form-control input-sm" readonly
						value="[{{showDirectCN.creditNoteCreatedByName}}] {{showDirectCN.creditNoteCreatedOn}}">
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class=" col-md-2">
					<button type="button" ng-class="showDirectCN.creditNoteflgLedger? 'flagselected' : ''"  ng-click="changeStatusFlag('ledger')"
						class="btn btn-default input-sm flag_enable PopupLedgerBtn1"
						tabindex="8">
						<span class="fieldLeft_spacing_Xlg">Ledger</span>
					</button>
				</div>
				<div class=" col-md-10">
					<input ng-model="ledgerText" readonly type="text" class="form-control input-sm">
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
						tabindex="1"
						ng-options="opt.reasonID as opt.reasonReason for opt in reasonList"
						ng-model="showDirectCN.creditNoteReason"
						ng-disabled="showDirectCN.creditNoteflgVoid || showDirectCN.creditNoteflgLock">
					</select>
				</div>
				<div class=" col-md-6">
					<input type="text" class="form-control input-sm" tabindex="2"
						ng-model="showDirectCN.creditNoteReasonOther"
						ng-disabled="showDirectCN.creditNoteflgVoid || showDirectCN.creditNoteflgLock || showDirectCN.creditNoteReason != -1">
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class=" col-md-3">
					<span class="control-label">Amount</span>
				</div>
				<div class="col-md-9">
					<div class="input-group inputGroupWidth_sm">
						<input type="text"
							ng-disabled="showDirectCN.creditNoteflgVoid || showDirectCN.creditNoteflgLock"
							class="form-control input-sm textRight"
							ng-model="showDirectCN.creditNoteAmount"><span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-1">
			<span class="control-label">Remark</span>
		</div>
		<div class=" col-md-11">
			<input
				ng-disabled="showDirectCN.creditNoteflgVoid || showDirectCN.creditNoteflgLock"
				type="text" class="form-control input-sm CN_type_DirectRemarkPos"
				tabindex="4" ng-model="showDirectCN.creditNoteRemark">
		</div>
	</div>
	<div class="row fieldsSpacing MedHighlightSection">
		<div class="col-md-3">
			<span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Amount</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth">
						<input type="text"
							class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly" ng-model="showDirectCN.creditNoteAmount"><span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">VAT</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth">
						<input type="text"
							class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly" value="0"><span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Total</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth">
						<input type="text"
							class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly" ng-model="showDirectCN.creditNoteAmount"><span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-6">
			<div class="row">
				<div class="col-md-3">
					<input class="" type="checkbox"
						ng-model="showDirectCN.creditNoteflgLock"
						ng-change="changeStatusFlag('lock')"><span
						class="fieldLeft_spacing">Lock</span>
				</div>
				<div class="col-md-9">
					<input type="text" class=" input-sm form-control Direct_lock"
						readonly="readonly" ng-model="lockText">
				</div>
			</div>
		</div>
		<div class="col-md-6">
			<div class="row">
				<div class="col-md-3">
					<input class="" type="checkbox"
						ng-model="showDirectCN.creditNoteflgVoid"
						ng-disabled="showDirectCN.creditNoteflgLock"
						ng-change="changeStatusFlag('void')"><span
						class="fieldLeft_spacing ">Void</span>
				</div>
				<div class="col-md-9">
					<input type="text" class=" input-sm form-control Direct_void"
						readonly="readonly" ng-model="voidText">
				</div>
			</div>
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class="col-md-12">
			<button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button>
			<button class="btn okbtnSize" tabindex="6" ng-click="submit()">Save</button>
		</div>
	</div>
</div>

