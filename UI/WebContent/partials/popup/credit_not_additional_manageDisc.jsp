<div id="CreditNoteAdditionalDiscountManage" ng-init="init()"
	class="container lightBox_CreditNote_AddDisc_ViewDetails">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">Manage Discount</span> <img alt=""
				class="close_popupImage" tabindex="2" src="images/close_popup.png">
		</h6>
	</div>
	<!-- <div class="row fieldsTop_Spacing">
			<div class=" col-md-12 ">
				<button type="button"
					class="btn goodReturnPreviousNext_btn input-sm_btn rightFloat">Next</button>
				<button type="button"
					class="btn goodReturnPreviousNext_btn input-sm_btn rightFloat">Previous</button>
			</div>
		</div> -->
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Invoice Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<!-- <div class="row">
			<hr class="horizontal_line">
			<select ng-options="opt.id as opt.name for opt in salesDiscountTypeList" ng-model="showSalesSelected.salesDiscountType"></select>
			<hr class="horizontal_line">
		</div> -->
	<div class="row fieldsSpacing">

		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Invoice&nbsp;Date</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm" tabindex="3"
						readonly="readonly" ng-model="showSalesSelected.salesDate">
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Invoice#</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						tabindex="2" readonly="readonly"
						ng-model="showSalesSelected.salesId">
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Invoice&nbsp;Amount</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							tabindex="3" readonly="readonly"
							ng-model="showSalesSelected.salesAmount"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Product#</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm" tabindex="2"
						readonly="readonly" ng-model="showSalesSelected.salesProductCount">
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Product&nbsp;Amount</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							tabindex="2" readonly="readonly"
							ng-model="showSalesSelected.salesProductAmount"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">VAT&nbsp;Amount</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							tabindex="2" readonly="readonly"
							ng-model="showSalesSelected.salesVAT"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">

		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Discount&nbsp;Type</span>
				</div>
				<div class=" col-md-8">
					<select ng-disabled="!editable || verifiedFlag"
						ng-options="opt.id as opt.name for opt in salesDiscountTypeList"
						ng-change="onChangeSalesDiscountType()"
						ng-model="showSalesSelected.salesDiscountType"
						class=" form-control input-sm input_rightSpecing"></select>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Product & Discount Details</span><!--  <span
				class="" style="margin-left: 128px;">Discount&nbsp;Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><select
				ng-disabled="!editable || verifiedFlag"
				ng-options="opt.id as opt.name for opt in salesDiscountTypeList"
				ng-change="onChangeSalesDiscountType()"
				ng-model="showSalesSelected.salesDiscountType"
				class="input-sm input_rightSpecing" style="width: 157px"></select> -->
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID==========  -->
			<div id="grid2" tabindex="10" class="AddDisc_InvoiceDetails"></div>
			<!--=============GRID==========  -->
		</div>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Additional Discount Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Add&nbsp;Disc&nbsp;%</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						tabindex="2"
						ng-disabled="!editable || verifiedFlag || showSalesSelected.salesDiscountType == 2"
						ng-model="showSalesSelected.salesAdditionalDiscountPercentage"
						ng-change="calculateInvoiceMath('percentage')">
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Add&nbsp;Disc&nbsp;Amt</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							ng-disabled="showSalesSelected.salesDiscountType == 2 || !editable || verifiedFlag"
							ng-change="calculateInvoiceMath('')"
							ng-model="showSalesSelected.salesAdditionalDiscountAmount"
							tabindex="3"> <span class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Net&nbsp;Invoice&nbsp;Amt</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							readonly="readonly"
							3" ng-model="showSalesSelected.salesNetInvoiceAmount"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class=" col-md-2">
			<span class="control-label">Remark</span>
		</div>
		<div class=" col-md-10">
			<input type="text"
				class="form-control input-sm ManageAddDisc_creditNote_Remark"
				tabindex="4" ng-model="showSalesSelected.salesRemark"
				ng-disabled="!editable || verifiedFlag">
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class="col-md-12">
			<button ng-hide="verifiedFlag || !editable" class="btn canclebtnSize"
				tabindex="5" ng-click="cancel()">Cancel</button>
			<button ng-show="verifiedFlag || !editable" class="btn okbtnSize"
				tabindex="38" ng-click="cancel()">Close</button>
			<button ng-hide="verifiedFlag || !editable" class="btn okbtnSize"
				tabindex="6" ng-click="submit()">OK</button>
		</div>
	</div>
</div>
