pharmApp.controller('SalesCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	
	
	$scope.showFilterPopup = function(){
		$modal.open({
			template :'<div class="" ng-init=init()> <div class="container Filter_Popup"> <div class="row topblueStrip "> <h6> <span class="topblueStripText">FILTERS</span> </h6> </div> <div class="row"> <div class="col-md-4"> <span>Order&nbsp;Type:</span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-12"> <span class="salesFilterOrderTypeRadio"> <input type="radio" name="order" tabindex="41"> <span class="">My&nbsp;Orders</span></span> <span class="salesFilterOrderTypeRadio"> <input type="radio" name="order" tabindex="42"> <span class="">All&nbsp;Orders</span></span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span class="control-label">Order&nbsp;Status</span> </div> <div class="col-md-8"> <select class="full_width input-sm"> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span class="control-label">Customer</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm"> </div> </div> <div class="row fieldsTop_Spacing "> <div class=" col-md-3"> <a ng-click="clearAllFilters();" title="Remove Product" tabindex="45" class=" clearAllFilterPos">CLEAR&nbsp;ALL</a> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup Transporter_btnPos"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" ng-click="ok(record)">ADD</button> </div> </div> </div> ',
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'sales-Filter '

		}).result.then(function(result) {


		});
	};

	
	$scope.showCustomerPopup=function(){

		$modal.open({
			template :'<div id="SalesCustomerListPopup" ng-init="init()"> <div class="container goodReceipt_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">CUSTOMER LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div> <!--=============GRID========== --> </div> <div class="row textRight fieldsTop_Spacing fieldsBot_Spacing"><button class="btn canclebtnSize" ng-click="cancel()">Cancel</button>  <button class="btn okbtnSize" ng-click="ok(record)">ADD</button> </div> </div> </div> ',
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReceipt-Modal'
		}).result.then(function(result) {


		});
	};
	
	$scope.showAddProductPopup=function(){

		$modal.open({
			template :'<div class="container lightBox_addProductSales"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">ADD PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-5"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm salesAddProduct_product" tabindex="41"> </div> <div class="col-md-2"> <img src="images/openPopup.png" class="snowflake_image" tabindex="42"> </div> </div> </div> <div class="col-md-7"> <div class="row"> <div class="col-md-5"> <div class="row"> <div class="col-md-4"> <span class="control-label">Product&nbsp;Type</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm salesAddProduct_inputPos1" tabindex="43"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class="col-md-3"> <span class="control-label">DPCO</span> </div> <div class="col-md-9"> <input type="text" class="form-control input-sm salesAddProduct_inputPos1 salesAddProduct_InputField" readonly="readonly"> </div> </div> </div> <div class="col-md-4"> <div class="row"> <div class="col-md-3"> <span class="control-label">PD%</span> </div> <div class="col-md-4"> <input type="text" class="form-control input-sm salesAddProduct_PD_input" tabindex="44"> </div> <div class="col-md-5"> <div class="input-group salesAddProduct_PD_input-group"> <input type="text" class="form-control input-sm textRight salesAddProduct_PD_input-groupPos" tabindex="45"> <span class="input-group-addon input-sm">Rs.</span> </div> </div> </div> </div> </div> </div> </div> <div class="row"> <div class="col-md-1"> <span class="control-label">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm salesAddProduct_remark" readonly="readonly"> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Batch Details And Sales History</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-5"> <div class="row"> <div class="col-md-6"> <div class="row"> <span class="col-md-4 control-label ">Pack</span> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight salesAddProduct_InputField" readonly="readonly"> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class="col-md-4"> <span class=" control-label salesAddProduct_TextField">Box</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight salesAddProduct_InputField1" readonly="readonly"> </div> </div> </div> </div> </div> <div class="col-md-7"> <div class="row"> <div class="col-md-5"> <div class="row"> <span class="col-md-4 control-label">Total&nbsp;Stock</span> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight salesAddProduct_inputPos1" readonly="readonly"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <span class="col-md-3 control-label">Self#</span> <div class="col-md-9"> <input type="text" class="form-control input-sm textRight salesAddProduct_inputPos1 salesAddProduct_InputField" readonly="readonly"> </div> </div> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <!-- =============GRID========== --> <div id="grid2" tabindex="46" class="sale_addProduct_GridSize"></div> <!-- =============GRID========== --> </div> <div class="row"> <span class=" col-md-2 leftMargin_1 control-label">Sale History</span> </div> <div class="row"> <!-- =============GRID========== --> <div id="grid3" tabindex="-1" class="sale_addProduct_GridSize"></div> <!-- =============GRID========== --> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Order Summary</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-5"> <div class="row"> <div class="col-md-6"> <div class="row"> <span class="col-md-4 control-label">Quantity</span> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight salesAddProduct_InputField" readonly="readonly"> </div> </div> </div> <div class="col-md-6"> <div class="row"> <div class="col-md-4"> <span class=" control-label salesAddProduct_TextField">Free</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight salesAddProduct_InputField1" readonly="readonly"> </div> </div> </div> </div> </div> <div class="col-md-7"> <div class="row"> <div class="col-md-5"> <div class="row"> <span class="col-md-2 control-label">Value</span> <div class="col-md-10"> <div class="input-group SalesAddProduct_value_pos"> <input type="text" class="form-control input-sm highlight_white textRight orangeBG" readonly> <span class="input-group-addon input-sm">Rs.</span> </div> </div> </div> </div> </div> </div> </div> <div class="row textRight fieldsBot_Spacing"> <button class="btn canclebtnSize" tabindex="47" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="8" ng-click="ok(record)">ADD</button> </div> </div> ', 	
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'sale_addProduct_Model'
		}).result.then(function(result) {


		});
	};
	
	
	$scope.showTransportDetailsPopup=function(){

		$modal.open({
			template :' <div class="container lightBox_Sales_TransportDetails"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">Transport</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Transport Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>Transport&nbsp;Type</span> </div> <div class="col-md-8"> <select class="full_width input-sm"> <option>L.R. Entry</option> <option>Hand Over</option> <option>Local Shiping</option> <option>Other</option> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>L.R.#</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm" id="lr_id"> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>Date</span> </div> <div class="col-md-8"> <input type="eu-date" class="form-control input-sm textCenter" id="date"> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>Pack</span> </div> <div class="col-md-8"> <input type="text" class="form-control input-sm textRight" id="pack"> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>Transporter</span> </div> <div class="col-md-8"> <select class=" full_width input-sm" id="transporter"> <option>ARCO</option> <option>First Flight</option> <option>DTDC</option> </select> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <span>Remark</span> </div> <div class="col-md-8"> <textarea rows="4" class="textarea_fixSize" id="remark"></textarea> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup Transporter_btnPos"> <button class="btn canclebtnSize" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" ng-click="ok(record)">ADD</button> </div> </div> <script type="text/javascript"> $(document).ready(function() { $("#pack").allowNumbersOnly(); /* $("#lr_id").allowNumbersOnly(); $("#date").allowNumbersOnly(); $("#transport").allowNumbersOnly(); $("#remark").allowNumbersOnly(); */ }); </script> <script type="text/javascript"> var month = (new Date()).getMonth() + 1; var year = (new Date()).getFullYear(); $("input[type=eu-date]").w2field("date", { format : "dd/mm/yyyy" }); </script> ',
			controller :'',
			backdrop: 'static',
			size:'lg',
			windowClass: 'TransportDetails-Modal'
		}).result.then(function(result) {


		});
	};
	

}]);
