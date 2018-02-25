<div id="CreditNoteCustomerListPopup"
	ng-controller="CreditNoteCustomerListPopupCtrl" ng-init="init()">
	<div class="container goodReceipt_productListPopup">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">CUSTOMER LIST</span>
			</h6>
		</div>
		<div class="row">
			<!--=============GRID========== -->
			<div id="grid2" tabindex="-1"
				class="gridSizeGoodsReceipt_productList"></div>
			<!--=============GRID========== -->
		</div>
		<div class="row fieldsTop_Spacing fieldsBot_Spacing">
			<div class=" col-md-6"></div>
			<div class=" col-md-6">
				<div class="row">
					<div class=" col-md-5">
						<button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button>
					</div>
					<div class=" col-md-5">
						<button type="button" ng-click="submit()" class="okbtnSize">OK</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

