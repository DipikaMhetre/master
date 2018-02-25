<div id="GoodReturnAddProduct" ng-controller="GoodReturnAddProductCtrl" ng-init="init()"
	class="container lightBox_addProduct_GoodReturns">
	<div class="row topblueStrip">
		<h6 class="fieldsTop_Spacing">
			<span class="topblueStripText">ADD PRODUCT</span>
		</h6>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row">
		<div class="col-md-7">
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Product</span>
				</div>
				<div class=" col-md-7">
					<input type="text" id="product" class="form-control input-sm"
						ng-model="showRRProductSelected.returnRegisterProductName" value={{showRRProductSelected.returnRegisterProductName}} tabindex="1">
				</div>
				<div class="col-md-2">
					<a><img class="add_details_image" tabindex="2"
						src="images/openPopup.png" ng-click="selectProductPopup()"></a>
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class="col-md-2">
					<span class="control-label returns_popup_labelPos">Pack</span>
				</div>
				<div class="col-md-10">
					<input type="text" class="form-control input-sm textRight"
						readonly="readonly" ng-model="showRRProductSelected.returnRegisterProductPack" value={{showRRProductSelected.returnRegisterProductPack}}>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Product Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row">
		<div class="col-md-7">
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label">Batch</span>
				</div>
				<div class=" col-md-7">
					<input type="text" id="batch" class="form-control input-sm"
						tabindex="3"  ng-model="showRRProductSelected.returnRegisterProductBatchNo" value={{showRRProductSelected.returnRegisterProductBatchNo}}>
				</div>
				<div class="col-md-2">
					<a><img class="add_details_image" tabindex="4"
						src="images/openPopup.png" ng-click="selectBatchPopup()"></a>
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class="col-md-2">
					<span class="control-label returns_popup_labelPos">Expiry</span>
				</div>
				<div class="col-md-10">
					<input type="eu-date" id="expiry"
						class="form-control input-sm textCenter" tabindex="5" ng-model="showRRProductSelected.returnRegisterProductExpiryDate" value={{showRRProductSelected.returnRegisterProductExpiryDate}} >
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class=" col-md-1">
			<span class="control-label">MRP</span>
		</div>
		<div class=" col-md-3">
			<input type="text" id="mrp" class="form-control input-sm textRight"
				ng-model="showRRProductSelected.returnRegisterProductMRP" value={{showRRProductSelected.returnRegisterProductMRP}} tabindex="6">
		</div>
		<div class="col-md-1">
			<span class="control-label">P.R.</span>
		</div>
		<div class="col-md-3">
			<input type="text" id="purchaseRate"
				class="form-control input-sm textRight" tabindex="7" ng-model="showRRProductSelected.returnRegisterProductPurchaseRate" value={{showRRProductSelected.returnRegisterProductPurchaseRate}}>
		</div>
		<div class="col-md-1">
			<span class="control-label">S.R.</span>
		</div>
		<div class="col-md-3">
			<input type="text" id="saleingRate"
				class="form-control input-sm textRight" ng-model="showRRProductSelected.returnRegisterProductSellRate" value={{showRRProductSelected.returnRegisterProductSellRate}} tabindex="8">
		</div>
	</div>
	<div class="row">
		<h5>
			<span class="submenuBlue_heading">Product Details</span>
		</h5>
		<hr class="horizontal_line">
	</div>
	<div class="row">
		<div class="col-md-7">
			<div class="row fieldsSpacing">
				<div class=" col-md-3">
					<span class="control-label ">Condition</span>
				</div>
				<div class=" col-md-7">
					<input type="text" id="condition" class="form-control input-sm"
						ng-model="showRRProductSelected.returnRegisterProductCondition" value={{showRRProductSelected.returnRegisterProductCondition}} tabindex="9">
				</div>
			</div>
		</div>
		<div class="col-md-5">
			<div class="row">
				<div class="col-md-2">
					<span class="control-label returns_popup_labelPos">Quantity</span>
				</div>
				<div class="col-md-10">
					<input type="text" id="quantity"
						class="form-control input-sm textRight" ng-model="showRRProductSelected.returnRegisterProductQuantity" value={{showRRProductSelected.returnRegisterProductQuantity}} tabindex="10">
				</div>
			</div>
		</div>
	</div>
	<div class="row fields_headingSpacing fieldsBot_Spacing_lg">
		<div class="col-md-12 textRight">
			<button class="btn canclebtnSize" ng-click="cancel()" tabindex="11">Cancel</button>
			<button class="btn okbtnSize" ng-click="submit()" tabindex="12">ADD</button>
		</div>
	</div>
</div>
<script type="text/javascript"> $(document).ready(function() { $("#product").allowAlphaNumericOnlywithspace(); $("#batch").allowAlphaNumericOnlywithspace(); $("#expiry").allowNumbersOnly(); $("#mrp").allowNumbersOnly(); $("#purchaseRate").allowNumbersOnly(); $("#saleingRate").allowNumbersOnly(); $("#condition").allowAlphaNumericOnlywithspace(); $("#quantity").allowNumbersOnly(); }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "d/m/yyyy" }); $("input[type=eu-time]").w2field("time", { format : "h24" }); $("input[type=eu-timeA]").w2field("time", { format : "h24", start : "8:00 am", end : "4:30 pm" }); </script>
',
