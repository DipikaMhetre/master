<div id="CreditNoteCustomerListPopup"
	class="container CustomerListPopup"
	 ng-init="init()">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">CUSTOMER LIST</span>
		</h6>
	</div>
	<div class="row fieldsTop_Spacing">
		<div class="col-md-12">
			<!--=============GRID========== -->
			<div id="grid3" tabindex="-1" class="CustomerListGrid"></div>
			<!--=============GRID========== -->
		</div>
	</div>
	<div class="row Ok_Cancle_BtnPos_Popup">
		<div class="col-md-12">
			<button class="btn canclebtnSize" tabindex="5" ng-click="cancel()">Cancel</button>
			<button class="btn okbtnSize" tabindex="6" ng-click="submit()">Ok</button>
		</div>
	</div>
</div>

