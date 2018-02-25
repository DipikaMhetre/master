<div class="purpleaid" ng-init="init()" id="rateDiffernce">
		<div class="container lightBox_CreditNote_ProductModify">
			<div class="row topblueStrip">
				<h6 class="fieldsTop_Spacing">
					<span class="topblueStripText">Credit Note - Rate Difference</span>
					<img alt="" class="close_popupImage" tabindex="2"
						ng-click="cancel()"src="images/close_popup.png">
				</h6>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Customer Details</span>
					<button ng-disabled="!editable" ng-click="showConsumptionPopup()"
						class="btn btn-primary consumptionDetailsBtn">Consumption
						Details</button>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing ">
				<div class="col-md-6 sectionvline">
					<div class="row visitingCard_view Customer_Premium_Bg">
						<div class="col-md-12 visitingCard_innerView">
							<span style="font-size: 18px; color: #cc0099;">{{showCustomerSelected.customerName}}</span>
							<!-- span>({{customerId}})</span> -->
							<span class="Customer_Premium_text">Premium</span> <br> <span>{{showCustomerSelected.customerContactPerson}}</span>
							<br> <span>{{showCustomerSelected.customerAddressLine1}}
								<span
								ng-if="showCustomerSelected.customerAddressLine2 != null || showCustomerSelected.customerAddressLine2.length>0">,{{showCustomerSelected.customerAddressLine2}}</span>
							</span> <br> <span>Mobile No. -
								{{showCustomerSelected.customerPhone}}</span> <br> <span>Area&nbsp;-&nbsp;{{showCustomerSelected.customerArea}}
							</span> <span class="fieldLeft_spacing_xl ">Salesman&nbsp;-&nbsp;{{showCustomerSelected.customerSalesman}}</span>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="row fieldsSpacing">
						<div class=" col-md-2">
							<span class="control-label">C.N.&nbsp;ID</span>
						</div>
						<div class=" col-md-4">
							<input type="text" class="form-control input-sm textRight"
								readonly="readonly" ng-model="showCNRSelected.creditNoteID">
						</div>
						<div class=" col-md-2">
							<span class="control-label">C.N.&nbsp;Type</span>
						</div>
						<div class=" col-md-4">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteTypeDescription">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class=" col-md-2">
							<span class="control-label">Date</span>
						</div>
						<div class=" col-md-4">
							<input type="text" class="form-control input-sm textCenter"
								readonly="readonly" ng-model="showCNRSelected.creditNoteDate">
						</div>
						<div class=" col-md-2">
							<span class="control-label">Status</span>
						</div>
						<div class=" col-md-4">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteStatusDescription">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class=" col-md-2">
							<span class="control-label">Created&nbsp;by</span>
						</div>
						<div class=" col-md-10">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								value="[{{showCNRSelected.creditNoteCreatedByName}}] {{showCNRSelected.creditNoteCreatedOn}}">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class=" col-md-2">
							<span class="control-label">Remark</span>
						</div>
						<div class=" col-md-10">
							<input ng-disabled="!editable" type="text"
								class="form-control input-sm"
								ng-model="showCNRSelected.creditNoteRemark">
						</div>
					</div>
					<div class="row fieldsSpacing">
						<div class=" col-md-2">
							<button ng-disabled="!editable" type="button"
								ng-class="showCNRSelected.creditNoteflgLedger ? 'flagselected' : ''"
								class="btn btn-default input-sm flag_enable PopupLedgerBtn"
								tabindex="8">
								<span class="fieldLeft_spacing_lg"
									ng-click="changeStatusFlag('ledger')">Ledger</span>
							</button>
						</div>
						<div class=" col-md-10">
							<input type="text" class="form-control input-sm"
								readonly="readonly" ng-model="ledgerText">
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Sales Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Product</span>
						</div>
						<div class=" col-md-8">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteProductName">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Batch</span>
						</div>
						<div class=" col-md-8">
							<input type="text" class="form-control input-sm"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteProductName">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">MRP</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductMRP"> <span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">P.&nbsp;Rate</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductPurchaseRate">
								<span class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">S.&nbsp;Rate</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductSaleRate"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Old&nbsp;S.&nbsp;Rate</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductOldSaleRate"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Rate&nbsp;Diff</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductRateDifference"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Rate&nbsp;Diff%</span>
						</div>
						<div class=" col-md-8">
							<input type="text" class="form-control input-sm textRight"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteProductRateDiffPercentage">
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<!--=============GRID==========  -->
					<div id="grid3" tabindex="2" class="" style="height: 100px;"></div>
					<!--=============GRID==========  -->
				</div>
			</div>
			<div class="row">
				<h5>
					<span class="submenuBlue_heading">Credit Note Details</span>
				</h5>
				<hr class="horizontal_line">
			</div>
			<div class="row fieldsBot_Spacing LessHighlightSection">
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Rate&nbsp;Diff</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteRateDifference"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Less%</span>
						</div>
						<div class=" col-md-8">
							<input type="text" ng-disabled="!editable"
								class="form-control input-sm textRight" tabindex="32"
								ng-model="showCNRSelected.creditNoteLessPercentage"
								ng-change="calculateRateDiffMath('percentage')">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Less&nbsp;Amt</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" ng-disabled="!editable"
									class="form-control input-sm textRight" tabindex="33"
									ng-model="showCNRSelected.creditNoteLessAmt"
									ng-change="calculateRateDiffMath('Amount')"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">Return&nbsp;Amt</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" ng-disabled="!editable"
									class="form-control input-sm textRight" tabindex="34"
									ng-model="showCNRSelected.creditNoteProductReturnAmountTotal"
									ng-change="calculateRateDiffMath('')"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsBot_Spacing LessHighlightSection">
				<div class="col-md-3">
					<input class="checkBox" ng-disabled="!editable"
						ng-model="showCNRSelected.creditNoteFlgRefundVAT"
						ng-change="creditNoteFlgRefundVATChange()" type="checkbox"
						tabindex="35"> <span class="fieldLeft_spacing">Refund
						VAT</span>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">VAT%</span>
						</div>
						<div class=" col-md-8">
							<input type="text" class="form-control input-sm textRight"
								readonly="readonly"
								ng-model="showCNRSelected.creditNoteVATPercentage">
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">VAT&nbsp;Amt</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text" class="form-control input-sm textRight"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductTotalVATamt"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="row">
						<div class=" col-md-4">
							<span class="control-label">VAT&nbsp;Refund</span>
						</div>
						<div class=" col-md-8">
							<div class="input-group">
								<input type="text"
									ng-disabled="!editable || !showCNRSelected.creditNoteFlgRefundVAT"
									class="form-control input-sm textRight" tabindex="36"
									ng-model="showCNRSelected.creditNoteVATrefund"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
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
							<div class="input-group">
								<input type="text"
									class="form-control textRight WhiteText input-sm orangeBG"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteProductReturnAmountTotal"><span
									class="input-group-addon input-sm-addon">Rs.</span>
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
							<div class="input-group">
								<input type="text"
									class="form-control textRight WhiteText input-sm orangeBG"
									readonly="readonly"
									ng-model="showCNRSelected.creditNoteVATrefund"><span
									class="input-group-addon input-sm-addon">Rs.</span>
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
							<div class="input-group">
								<input type="text"
									class="form-control input-sm orangeBG textRight WhiteText"
									readonly="readonly" ng-model="showCNRSelected.creditNoteAmount"><span
									class="input-group-addon input-sm-addon">Rs.</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="row fieldsSpacing">
				<!-- <div class="col-md-6">
				<input ng-disabled="!editable" class="fieldLeft_spacing_md1" type="checkbox" tabindex="37" ng-model="CNRFlag">
				<select ng-disabled="!editable || CNRDropDownDisabled" ng-options="opt.id as opt.name for opt in stateList" ng-model="CNRvalue" class="input-sm">
					
				</select> <input type="text"
					ng-disabled="!editable"
					class=" input-sm ApprovedInput_rateDiff_CreditNote"
					readonly="readonly" ng-model="approvedText">
			</div> -->
				<div class="col-md-6">

					<select ng-disabled="!editable"
						ng-options="opt.id as opt.name for opt in stateList"
						ng-model="showCNRSelected.creditNoteApproved" class="input-sm">

					</select> <input type="text" ng-disabled="!editable"
						class=" input-sm ApprovedInput_rateDiff_CreditNote"
						readonly="readonly"
						ng-model="showCNRSelected.creditNoteApprovedBy">
				</div>
				<div class="col-md-6">
					<div class="row">
						<div class="col-md-2">
							<input class="" ng-disabled="!editable" type="checkbox"
								tabindex="37" ng-model="showCNRSelected.creditNoteflgLock"
								ng-click="changeStatusFlag('lock')"><span
								class="fieldLeft_spacing">Lock</span>
						</div>
						<div class="col-md-10">
							<input type="text" class=" input-sm form-control"
								readonly="readonly" ng-model="lockText">
						</div>
					</div>
				</div>
			</div>
			<div class="row Ok_Cancle_BtnPos_Popup">
				<div class="col-md-12">
					<button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button>
					<button class="btn okbtnSize" tabindex="6"
						ng-click="submit(showCNRSelected)">Save</button>
				</div>
			</div>
		</div>
	</div>