<div ng-init="init()" id="grAddModifyProduct" class="grayBG">
	<div class="container lightBox_addProduct_GoodsReceipt">
		<div class="row topblueStrip">
			<h6 class="fieldsTop_Spacing">
				<span class="topblueStripText">ADD PRODUCT</span>
			</h6>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Product Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row">
			<div class="col-md-6 col_GR1_addProduct">
				<div class="row fieldsSpacing">
					<div class=" col-md-3">
						<span class="control-label">Product</span>
					</div>
					<div class=" col-md-4">
						<input type="text" id="product" required
							class="form-control input-sm" ng-focus="showNextPopup();"
							ng-model="showProductSelected.goodsReceiptProductProductName"
							value={{showProductSelected.goodsReceiptProductProductName}}>
					</div>
					<div class=" col-md-5">
						<input type="text" class="form-control input-sm GRaddPrduct"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductPack"
							value={{showProductSelected.goodsReceiptProductPack}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_GR2_addProduct">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Type</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductType"
							value={{showProductSelected.goodsReceiptProductType}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_GR2_addProduct">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Contents</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm" tabindex="2"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductContents"
							value={{showProductSelected.goodsReceiptProductContents}}>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6 col_GR1_addProduct">
				<div class="row">
					<div class="col-md-3">
						<span class="control-label">Receipt&nbsp;Type</span>
					</div>
					<div class="col-md-9">
						<select class="form-control input-sm" tabindex="16"
							ng-model="showProductSelected.productRecieptTypeSelected"
							ng-options="op.name for op in productRecieptTypeList">
						</select>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_GR2_addProduct">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Vat&nbsp;Charged</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductVatChargedOn"
							value={{showProductSelected.goodsReceiptProductVatChargedOn}}>
					</div>
				</div>
			</div>
			<div class="col-md-3 col_GR2_addProduct">
				<div class="row">
					<div class="col-md-4">
						<span class="control-label">Godown/Shelf</span>
					</div>
					<div class="col-md-8">
						<select class="form-control input-sm" tabindex="16"
							ng-model="showProductSelected.productStorageTypeSelected"
							ng-options="op.name for op in productStorageTypeList">
						</select>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<h5>
				<span class="submenuBlue_heading">Batch Details</span>
			</h5>
			<hr class="horizontal_line">
		</div>
		<div class="row">
			<div class="col-md-4 sectionvline" style="width: 31%;">
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Batch#</span>
					</div>
					<div class="col-md-6">
						<input type="text" id="gr_batch" required
							class="form-control input-sm grBatchID"
							ng-blur="showBatchPopup(\'id\')"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchNo"
							value={{showProductSelected.grProductBatchObj.grProductBatchNo}}>
					</div>
					<div class="col-md-2">
						<a ng-click="showBatchPopup()"><img src="images/openPopup.png"></a>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Expiry&nbsp;Date</span>
					</div>
					<div class="col-md-8">
						<input type="eu-date" required id="gr_expirydate"
							class="form-control input-sm textCenter"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchExpiryDate"
							value={{showProductSelected.grProductBatchObj.grProductBatchExpiryDate}}>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">MRP</span>
					</div>
					<div class="col-md-8">
						<input allow-numberswithdot type="text" id="gr_mrp" name="gr_mrp"
							required class="form-control input-sm numberField"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchMRP"
							value={{showProductSelected.grProductBatchObj.grProductBatchMRP}}
							onclick="Purplevalidator('gr_mrp',2,'grAddModifyProduct','');"
							onfocus="Purplevalidator('gr_mrp',2,'grAddModifyProduct','');">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Trade</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="gr_trade" name="gr_trade"
							allow-numberswithdot required
							class="form-control input-sm numberField"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchTrade"
							value={{showProductSelected.grProductBatchObj.grProductBatchTrade}}
							onclick="Purplevalidator('gr_trade',2,'grAddModifyProduct','')"
							onfocus="Purplevalidator('gr_trade',2,'grAddModifyProduct','');">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Quantity</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="gr_quantity" name="gr_quantity"
							allow-numberswithdot required
							class="form-control input-sm numberField"
							ng-model="showProductSelected.goodsReceiptProductQty"
							value={{showProductSelected.goodsReceiptProductQty}}
							onclick="Purplevalidator('gr_quantity',2,'grAddModifyProduct','')"
							onfocus="Purplevalidator('gr_quantity',2,'grAddModifyProduct','');">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Free</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="gr_free" name="gr_free"
							allow-numberswithdot class="form-control input-sm numberField"
							ng-model="showProductSelected.goodsReceiptProductFree"
							value={{showProductSelected.goodsReceiptProductFree}}>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Stock</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							value={{showProductSelected.goodsReceiptProductFreeAvailable+showProductSelected.goodsReceiptProductQtyAvailable}}>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Pending&nbsp;Order</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							value={{showProductSelected.goodsReceiptProductPurchaseQtyAvl+showProductSelected.goodsReceiptProductPurchaseFreeAvl}}>
					</div>
				</div>
			</div>
			<div class="col-md-4 sectionvline" style="width: 31%;">
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Purchase&nbsp;Rate</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="gr_purchaserate" name="gr_purchaserate"
							allow-numberswithdot required
							class="form-control input-sm numberField"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchPurchaseRate"
							value="{{showProductSelected.grProductBatchObj.grProductBatchPurchaseRate}}"
							onclick="Purplevalidator(\'gr_purchaserate\',2,\'grAddModifyProduct\',\' \')"
							onfocus="Purplevalidator(\'gr_purchaserate\',2,\'grAddModifyProduct\',\'\');">{{showProductSelected.grProductBatchObj.GrProductBatchPurchaseRate}}
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Value</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductValue"
							value="{{showProductSelected.goodsReceiptProductValue}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">C.S.T.%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductCST"
							value="{{showProductSelected.goodsReceiptProductCST}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">L.T.%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductLT"
							value="{{showProductSelected.goodsReceiptProductLT}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Selling&nbsp;Rate</span>
					</div>
					<div class="col-md-8">
						<input type="text" id="gr_sellingrate" name="gr_sellingrate"
							allow-numberswithdot required
							class="form-control input-sm numberField"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchSellRate"
							value="{{showProductSelected.grProductBatchObj.grProductBatchSellRate}}"
							onclick="Purplevalidator('gr_sellingrate',2,'grAddModifyProduct',' ')"
							onfocus="Purplevalidator('gr_sellingrate',2,'grAddModifyProduct','');">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">R.M.%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductRM"
							value="{{showProductSelected.goodsReceiptProductRM}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">W.M.%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductWM"
							value="{{showProductSelected.goodsReceiptProductWM}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-4">
						<span class="control-label">Vat%</span>
					</div>
					<div class="col-md-8">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							ng-model="showProductSelected.goodsReceiptProductVAT"
							value="{{showProductSelected.goodsReceiptProductVAT}}">
					</div>
				</div>
			</div>
			<div class="col-md-4" style="width: 38%;">
				<div class="row fieldsSpacing">
					<div class="col-md-5">
						<span class="control-label">Trade&nbsp;Discount&nbsp;%</span>
					</div>
					<div class="col-md-7">
						<input type="text" id="gr_tradediscount" name="gr_tradediscount"
							allow-numberswithdot class="form-control input-sm numberField"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchTradeDiscount"
							value="{{showProductSelected.grProductBatchObj.grProductBatchTradeDiscount}}">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-5">
						<span class="control-label">Trade&nbsp;Discount&nbsp;Amount</span>
					</div>
					<div class="col-md-7">
						<input type="text" class="form-control input-sm numberField"
							readonly="readonly"
							value={{showProductSelected.grProductBatchObj.grProductBatchTradeDiscount*showProductSelected.goodsReceiptProductValue}}>
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-5">
						<span class="control-label">Special&nbsp;Discount&nbsp;%</span>
					</div>
					<div class="col-md-7">
						<input type="text" id="gr_specialdisc"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchSpecialDiscount" class="form-control input-sm numberField">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-5">
						<span class="control-label">Special&nbsp;Discount&nbsp;Amount</span>
					</div>
					<div class="col-md-7">
						<input type="text" id="gr_specialdisc" name="gr_specialdisc"
							allow-nmbers disabled ng-model="showProductSelected.grProductBatchObj.grProductBatchSpecialDiscountAmount" class="form-control input-sm numberField">
					</div>
				</div>
				<div class="row fieldsSpacing">
					<div class="col-md-5">
						<span class="control-label">Batch&nbsp;Remark</span>
					</div>
					<div class="col-md-7">
						<textarea rows="4" cols="26"
							style="max-width: 182px; max-height: 90px;"
							ng-model="showProductSelected.grProductBatchObj.grProductBatchRemark"
							value={{showProductSelected.grProductBatchObj.grProductBatchRemark}}></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="row fields_headingSpacing ">
			<div class="col-md-6">
				<button class="btn btn-default fieldLeft_spacing resetbtnSize"
					ng-click="clear()">Clear</button>
			</div>
			<div class="col-md-6 textRight">
				<button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>
				<button class="btn okbtnSize" ng-click="submit(showProductSelected)">
					<span ng-show="statusflag == 'new'">ADD</span><span
						ng-show="statusflag == 'update'">Modify</span>
				</button>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript"> $(document).ready(function() {$("#gr_trade").keypress(function() { $("#gr_trade").css("background-color", "white");}); $("#gr_quantity").keypress(function() { $("#gr_quantity").css("background-color", "white");}); $("#gr_mrp").keypress(function() { $("#gr_mrp").css("background-color", "white");}); $("#gr_free").keypress(function() { $("#gr_free").css("background-color", "white");}); $("#gr_purchaserate").keypress(function() { $("#gr_purchaserate").css("background-color", "white");}); $("#gr_sellingrate").keypress(function() { $("#gr_sellingrate").css("background-color", "white");}); $("#gr_specialdisc").keypress(function() { $("#gr_specialdisc").css("background-color", "white");}); $("#product").focus(function() { $("#product").css("background-color", "white");});$("#gr_batch").focus(function() { $("#gr_batch").css("background-color", "white");}); $("#gr_expirydate").keypress(function() { $("#gr_expirydate").css("background-color", "white");}); }); </script>
<script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format: "d/m/yyyy" }); $("input[type=eu-date1]").w2field("date", { format: "d/m/yyyy", end: $("input[type=eu-date2]") }); $("input[type=eu-date2]").w2field("date", { format: "d/m/yyyy", start: $("input[type=eu-date1]") }); $("input[type=eu-time]").w2field("time", { format: "h24" }); $("input[type=eu-timeA]").w2field("time", { format: "h24", start: "8:00 am", end: "4:30 pm" }); </script>

