
pharmApp.controller('CreditNoteRateDiffCtrl', ['$scope','$rootScope','$http','$modal','$modalInstance','$log','$timeout','$location','ngToast','wareHouse','recid','editable', function ($scope,$rootScope,$http,$modal, $modalInstance, $log,$timeout,$location,ngToast,wareHouse,recid,editable) {
	$scope.recid=recid;
	$scope.editable=editable;
	$scope.showCNRSelected={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.state=0;
	$scope.stateList=[{id:1,name:"Not Approved"},{id:2,name:"Approved"},{id:3,name:"Rejected"}];
	$scope.$watch('showCNRSelected.creditNoteflgLedger',function(){
		if($scope.showCNRSelected.creditNoteflgLedger){
			$scope.ledgerText='['+$scope.showCNRSelected.creditNoteLedgerUserName+'] '+	$scope.showCNRSelected.creditNoteLedgerDateTime;
		}else{
			$scope.ledgerText='';
		}

	});
	$scope.$watch('showCNRSelected.creditNoteflgLock',function(){
		if($scope.showCNRSelected.creditNoteflgLock){
			$scope.lockText='['+$scope.showCNRSelected.creditNoteLedgerUserName+'] '+	$scope.showCNRSelected.creditNoteLockDateTime;
		}else{
			$scope.lockText='';
		}

	});
	$scope.$watch('showCNRSelected.creditNoteVATrefund',function(){
		//$scope.showCNRSelected.creditNoteVATrefund=purpleToDecimal($scope.showCNRSelected.creditNoteVATrefund);
		$scope.showCNRSelected.creditNoteAmount=purpleToDecimal($scope.showCNRSelected.creditNoteProductReturnAmountTotal)+purpleToDecimal($scope.showCNRSelected.creditNoteVATrefund);		
	});
	$scope.$watch('showCNRSelected.creditNoteProductReturnAmountTotal',function(){
		//$scope.showCNRSelected.creditNoteProductReturnAmountTotal=purpleToDecimal($scope.showCNRSelected.creditNoteProductReturnAmountTotal);
		$scope.showCNRSelected.creditNoteAmount=purpleToDecimal($scope.showCNRSelected.creditNoteProductReturnAmountTotal)+purpleToDecimal($scope.showCNRSelected.creditNoteVATrefund);		
	});
	$scope.$watch('showCNRSelected.creditNoteAmount',function(){
		$scope.showCNRSelected.creditNoteAmount=purpleToDecimal($scope.showCNRSelected.creditNoteAmount);		
	});
	
	$scope.$watch('showCNRSelected.creditNoteApproved',function(){
		if($scope.showCNRSelected.creditNoteApproved==0){
			showCNRSelected.creditNoteApprovedBy='';
		}
		
	});
	//CNRFlag CNRDropDownDisabled CNRvalue approvedText
	/*$scope.$watch('showCNRSelected.creditNoteApproved',function(){
		switch($scope.showCNRSelected.creditNoteApproved){
		case 0:
			$scope.CNRFlag=false;
			$scope.CNRDropDownDisabled=true;
			$scope.CNRvalue=1;
			approvedText='';
			break;
		case 1:
			$scope.CNRFlag=true;
			$scope.CNRDropDownDisabled=false;
			$scope.CNRvalue=1;
			approvedText=creditNoteApprovedBy;
			break;
		case 2:
			$scope.CNRFlag=true;
			$scope.CNRDropDownDisabled=false;
			$scope.CNRvalue=2;
			approvedText=creditNoteApprovedBy;
			break;
		}
	});*/
	$scope.init=function(){
		var config3 = {
				layout: {
					name: 'layout3',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main', minSize: 300 }
					         ]
				},
				grid: { 
					name: 'grid3',
					show: {
						toolbar : false,
						toolbarDelete: false,
						toolbarAdd : false
					},

					columns: [
					          {
					        	  field : 'salesDate',
					        	  caption : 'Date',
					        	  size : '80%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'salesId',
					        	  caption : 'Invoice#',
					        	  size : '60%'
					          }, {
					        	  field : 'salesQty',
					        	  caption : 'Qty',
					        	  size : '50%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'salesFreeQty',
					        	  caption : 'Free Qty',
					        	  size : '60%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : '',
					        	  caption : 'PD/CD',
					        	  size : '70%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'salesAmount',
					        	  caption : 'Amt',
					        	  size : '90%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'salesVAT',
					        	  caption : 'Vat Amt',
					        	  size : '70%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'Vat%',
					        	  caption : 'Vat%',
					        	  size : '70%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'Total Amt',
					        	  caption : 'Total Amt',
					        	  size : '100%',
					        	  style : 'text-align: left'
					          }, {
					        	  field : 'Rate Diff Total',
					        	  caption : 'Rate Diff Total',
					        	  size : '90%',
					        	  style : 'text-align: left'
					          } 
					          ],

					          records:[]
				}
		};
		if(typeof w2ui.grid3 !== "undefined"){
			w2ui.grid3.destroy();
			w2ui.layout3.destroy();
		}
		loadContentpopupGrid(config3);
		///grid ends
		var json={entity:2,creditNoteId:$scope.recid,listType:9,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token,listLimit:$scope.listLimit,lastID:$scope.maxId};

		//HTTP CALL FOR GETTING customerlist 
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/getCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);	
				$scope.showCNRSelected={};
				$scope.showCNRSelected=respData[0];
				if($scope.showCNRSelected.creditNoteApproved==0){
					$scope.showCNRSelected.creditNoteApproved=1;
					$scope.showCNRSelected.creditNoteApprovedBy='';
				}
				angular.copy($scope.showCNRSelected.additionalDiscInvoiceList,w2ui.grid3.records);
				w2ui.grid3.refresh();
				$scope.showCustomerSelected={};
				angular.copy(akricksFilter(w2ui.grid.records,{recid:$scope.showCNRSelected.creditNoteCustID})[0],$scope.showCustomerSelected);			
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});
		
	};//init Ends
	
	
	$scope.changeStatusFlag=function(type){
		if(type=='ledger'){
			$scope.showCNRSelected.creditNoteflgLedger=!$scope.showCNRSelected.creditNoteflgLedger;
			if($scope.showCNRSelected.creditNoteflgLedger){
				$scope.showCNRSelected.creditNoteLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNRSelected.creditNoteLedgerByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNRSelected.creditNoteLedgerDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				$scope.ledgerText='['+$scope.showCNRSelected.creditNoteLedgerUserName+'] '+	$scope.showCNRSelected.creditNoteLedgerDateTime;

			}else{			
				$scope.ledgerText=null;
			}
		}
		if(type=='lock'){
			//$scope.showCNRSelected.creditNoteflgLock=!$scope.showCNRSelected.creditNoteflgLock
			if(	$scope.showCNRSelected.creditNoteflgLock){
				$scope.showCNRSelected.creditNoteLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showCNRSelected.creditNoteLockByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showCNRSelected.creditNoteLockDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				$scope.lockText='['+$scope.showCNRSelected.creditNoteLedgerUserName+'] '+	$scope.showCNRSelected.creditNoteLockDateTime;

			}else{			
				$scope.lockText=null;
			}
		}
	};
	$scope.calculateRateDiffMath=function(type){
		if(type=="percentage"){
			$scope.showCNRSelected.creditNoteLessAmt=purpleToDecimal($scope.showCNRSelected.creditNoteRateDifference*$scope.showCNRSelected.creditNoteLessPercentage/100);
			$scope.showCNRSelected.creditNoteProductReturnAmountTotal=purpleToDecimal($scope.showCNRSelected.creditNoteRateDifference- $scope.showCNRSelected.creditNoteLessAmt);
		}
		else {
			if(type=="Amount"){
				$scope.showCNRSelected.creditNoteLessPercentage=purpleToDecimal($scope.showCNRSelected.creditNoteLessAmt*100/$scope.showCNRSelected.creditNoteRateDifference);
				$scope.showCNRSelected.creditNoteProductReturnAmountTotal=purpleToDecimal($scope.showCNRSelected.creditNoteRateDifference-$scope.showCNRSelected.creditNoteLessAmt);

			}
			else{
				$scope.showCNRSelected.creditNoteLessAmt=purpleToDecimal($scope.showCNRSelected.creditNoteRateDifference-$scope.showCNRSelected.creditNoteProductReturnAmountTotal);
				$scope.showCNRSelected.creditNoteLessPercentage=purpleToDecimal($scope.showCNRSelected.creditNoteLessAmt*100/$scope.showCNRSelected.creditNoteRateDifference);

			}


		}

	};


	$scope.creditNoteFlgRefundVATChange=function(){
		if($scope.showCNRSelected.creditNoteFlgRefundVAT){
			if($scope.showCNRSelected.creditNoteVATrefund == 0){
				$scope.showCNRSelected.creditNoteVATrefund=$scope.showCNRSelected.creditNoteProductTotalVATamt;
			}
		}else{
			$scope.showCNRSelected.creditNoteVATrefund=0;
		}
	} 

	$scope.showConsumptionPopup=function(){
		if($scope.showCNRSelected.creditNoteID == 0){
			return false;
		}
		$modal.open({
			//template :'<div ng-controller="CrNPModifyProductCtrl" ng-init="init()" class="container lightBox_CreditNote_ProductModify"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">{{opType}} PRODUCT</span> </h6> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Product and Batch Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsSpacing"> <div class="col-md-6"> <div class="row"> <div class=" col-md-2"> <span class="control-label">Product</span> </div> <div class=" col-md-10"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Pack</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Batch</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductBatchNo"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Product&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Cash&nbsp;Disc%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPack"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Expiry</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductExpiryDate"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">MRP</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductMRP"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">P.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductPurchaseRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">S.&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductSellRate"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Rate</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATchargedOnLabel"> </div> </div> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Condition</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.returnRegisterProductConditionName"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Quantity</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQty"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Free&nbsp;Qty</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteQtyFree"> </div> </div> </div> <div class="col-md-3"> <input readonly class="checkBox" ng-model="showProductSelected.creditNoteVATonFree" type="checkbox" tabindex="35"> <span class="fieldLeft_spacing">VAT&nbsp;on&nbsp;Free</span> </div> </div> <div class="row fieldsSpacing"> <div class="col-md-4"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Sale&nbsp;History </span> </div> </div> </div> </div> <div class="row"> <div class="col-md-12"> <!--=============GRID========== --> <div id="grid2" tabindex="-1" class="CN_saleHistory_ModifyProductType_GridSize"></div> <!--=============GRID========== --> </div> </div> <div class="row"> <h5> <span class="submenuBlue_heading">Credit Note Details</span> </h5> <hr class="horizontal_line"> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Use&nbsp;Rate</span> </div> <div class=" col-md-8"> <select class="input-sm form-control input_rightSpecing" tabindex="31" ng-options="opt.id as opt.name for opt in useRateList" ng-model="showProductSelected.creditNoteUseRate" ng-change="valueMath(\'main\')"> </select> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="32" ng-model="showProductSelected.creditNoteLessPercentage" ng-change="valueMath(\'percentage\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Less&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="33" ng-model="showProductSelected.creditNoteLessAmt" ng-change="valueMath(\'amount\')"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Return&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="34" ng-model="showProductSelected.creditNotereturnAmount" ng-change="valueMath(\'finalAmt\')"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing LessHighlightSection"> <div class="col-md-3"> <input class="checkBox" type="checkbox" tabindex="35" ng-model="showProductSelected.creditNoteflgRefundVAT"> <span class="fieldLeft_spacing">Refund VAT</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT%</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATpercentage"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Amt</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" readonly="readonly" ng-model="showProductSelected.creditNoteVATAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT&nbsp;Refund</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm" tabindex="36" ng-model="showProductSelected.creditNoteVATrefund"> </div> </div> </div> </div> <div class="row fieldsBot_Spacing"> <div class="col-md-1"> <span class="fieldLeft_spacing_md1">Remark</span> </div> <div class="col-md-11"> <input type="text" class="form-control input-sm CN_DN_Remarks" tabindex="36" ng-model="showProductSelected.creditNoteRemark"> </div> </div> <div class="row fieldsSpacing MedHighlightSection"> <div class="col-md-3"> <span class="control-label">Credit&nbsp;Note&nbsp;Summary&nbsp;:&nbsp;</span> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Amount</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNotereturnAmount"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">VAT</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteProductTotalVATamt"> </div> </div> </div> <div class="col-md-3"> <div class="row"> <div class=" col-md-4"> <span class="control-label">Total</span> </div> <div class=" col-md-8"> <input type="text" class="form-control input-sm orangeBG" readonly="readonly" ng-model="showProductSelected.creditNoteAmount"> </div> </div> </div> </div> <div class="row Ok_Cancle_BtnPos_Popup"> <div class="col-md-12"> <button class="btn canclebtnSize" tabindex="37" ng-click="cancel()">Cancel</button> <button class="btn okbtnSize" tabindex="38" ng-click="submit(showProductSelected)">Modify</button> </div> </div> </div> ',    
			templateUrl :'partials/popup/CredNConsumption.jsp',
			controller :'ConsumptionCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'ConsumptionDetails-Model',
			resolve:{
				CreditNoteId:function(){
					return $scope.showCNRSelected.creditNoteID;
				}
			}


		}).result.then(function(result) {


		});

	};
	$scope.submit=function(creditNote){

		var json1=JSON.stringify(creditNote);
		var json={entity:4,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
			method: 'POST',
			url: "http://localhost:8080/Purple/rest/apiCreditNote/setCreditNote",
			async:false,
			data:JSON.stringify(json),
			headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				//manupulations
				respData.creditNoteCustName=$scope.showCustomerSelected.customerName.split('(')[0].trim();
				////////
				angular.copy(respData,$scope.showCNRSelected); 
				var index=akricksGetObjIndex(w2ui.grid2.records,{creditNoteID:$scope.showCNRSelected.creditNoteID});
				
				angular.copy($scope.showCNRSelected,w2ui.grid2.records[index]);
				w2ui.grid2.refresh();
				$modalInstance.close();
				
				//$scope.onCompanySelection($scope.showCompanyList[0]);
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
		}).error(function(data, status, headers, config) {          
			return false;
		});

	};
	
	$scope.cancel=function(){
		$modalInstance.close();
	};


}]);