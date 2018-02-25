<div id="CrNPModifyProduct" ng-init="init()"
	class="container lightBox_CreditNote_ProductModify">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">{{opType}} PRODUCT</span>
			<img alt="" ng-click="cancel()" class="close_popupImage"
				tabindex="2" src="images/close_popup.png">
		</h6>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Product and Batch Details</span>
			
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-6">
			<div class="row">
				<div class=" col-md-2">
					<span class="control-label">Product</span>
				</div>
				<div class=" col-md-10">
					<input type="text" class="form-control input-sm"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductName">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Pack</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductPack">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Batch</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm "
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductBatchNo">
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Product&nbsp;Disc%</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductPack">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Cash&nbsp;Disc%</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductPack">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Expiry</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductExpiryDate">
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">MRP</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							readonly="readonly"
							ng-model="showProductSelected.returnRegisterProductMRP">
						<span class="input-group-addon input-sm">Rs.</span>
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
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							readonly="readonly"
							ng-model="showProductSelected.returnRegisterProductPurchaseRate">
						<span class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">S.&nbsp;Rate</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							readonly="readonly"
							ng-model="showProductSelected.returnRegisterProductSellRate">
						<span class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">VAT&nbsp;Rate</span>
				</div>
				<div class=" col-md-8">

					<input type="text" class="form-control input-sm"
						readonly="readonly"
						ng-model="showProductSelected.creditNoteVATchargedOnLabel">
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Condition</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm"
						readonly="readonly"
						ng-model="showProductSelected.returnRegisterProductConditionName">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Quantity</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly" ng-model="showProductSelected.creditNoteQty">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Free&nbsp;Qty</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly"
						ng-model="showProductSelected.creditNoteQtyFree">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<input readonly class="checkBox" ng-disabled="true"
				ng-model="showProductSelected.creditNoteVATonFree" type="checkbox"
				tabindex="35"> <span class="fieldLeft_spacing">VAT&nbsp;on&nbsp;Free</span>
		</div>
	</div>
	<div class="row fieldsSpacing">
		<div class="col-md-4">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Sale&nbsp;History </span>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			<!--=============GRID========== -->
			<div id="grid2" tabindex="-1"
				class="CN_saleHistory_ModifyProductType_GridSize"></div>
			<!--=============GRID========== -->
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
					<span class="control-label">Use&nbsp;Rate</span>
				</div>
				<div class=" col-md-8">
					<select class="input-sm form-control input_rightSpecing"
						tabindex="31" ng-disabled="verifiedFlag || !editable"
						ng-options="opt.id as opt.name for opt in useRateList"
						ng-model="showProductSelected.creditNoteUseRate"
						ng-change="valueMath('main')">
					</select>
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Less%</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight" tabindex="32"
						ng-disabled="verifiedFlag || !editable"
						ng-model="showProductSelected.creditNoteLessPercentage"
						ng-change="valueMath('percentage')">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">Less&nbsp;Amt</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight" tabindex="33"
							ng-disabled="verifiedFlag || !editable"
							ng-model="showProductSelected.creditNoteLessAmt"
							ng-change="valueMath('amount')"> <span
							class="input-group-addon input-sm">Rs.</span>
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
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight" tabindex="34"
							ng-model="showProductSelected.creditNotereturnAmount"
							ng-disabled="verifiedFlag || !editable" ng-change="valueMath('finalAmt')">
						<span class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsBot_Spacing LessHighlightSection">
		<div class="col-md-3">
			<input class="checkBox" type="checkbox" tabindex="35"
				ng-disabled="verifiedFlag || !editable"
				ng-model="showProductSelected.creditNoteflgRefundVAT" ng-change="adjustVat()"> <span
				class="fieldLeft_spacing">Refund VAT</span>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">VAT%</span>
				</div>
				<div class=" col-md-8">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly" ng-disabled="verifiedFlag || !editable"
						ng-model="showProductSelected.creditNoteVATpercentage">
				</div>
			</div>
		</div>
		<div class="col-md-3">
			<div class="row">
				<div class=" col-md-4">
					<span class="control-label">VAT&nbsp;Amt</span>
				</div>
				<div class=" col-md-8">
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight"
							readonly="readonly" ng-disabled="verifiedFlag || !editable"
							ng-model="showProductSelected.creditNoteVAT"> <span
							class="input-group-addon input-sm">Rs.</span>
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
					<div class="input-group inputGroupWidth_sm">
						<input
							ng-disabled="!showProductSelected.creditNoteflgRefundVAT || verifiedFlag || !editable"
							type="text" class="form-control input-sm textRight" tabindex="36"
							ng-model="showProductSelected.creditNoteVATrefund"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row fieldsBot_Spacing">
		<div class="col-md-1">
			<span class="fieldLeft_spacing_md1">Remark</span>
		</div>
		<div class="col-md-11">
			<input type="text" class="form-control input-sm CN_DN_Remarks"
				tabindex="36" ng-disabled="verifiedFlag || !editable"
				ng-model="showProductSelected.creditNoteRemark">
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
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly"
							ng-model="showProductSelected.creditNotereturnAmount">
						<!-- ng-change="adjustCreditAmount('cnpAmount')" -->
						<span class="input-group-addon input-sm">Rs.</span>
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
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly"
							ng-model="showProductSelected.creditNoteVATrefund">
						<!-- ng-change="adjustCreditAmount('cnpVAT')" -->
						<span class="input-group-addon input-sm">Rs.</span>
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
					<div class="input-group inputGroupWidth_sm">
						<input type="text" class="form-control input-sm textRight orangeBG WhiteText"
							readonly="readonly"
							ng-model="showProductSelected.creditNoteAmount"> <span
							class="input-group-addon input-sm">Rs.</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class="col-md-12">
			<button ng-hide="verifiedFlag"  class="btn canclebtnSize" tabindex="37" ng-click="cancel()">Cancel</button>
			<button ng-show="verifiedFlag" class="btn okbtnSize" tabindex="38"
				ng-click="cancel()">Close</button>
			<button ng-hide="verifiedFlag" class="btn okbtnSize" tabindex="38"
				ng-click="submit(showProductSelected)">OK</button>
		</div>
	</div>
</div>

