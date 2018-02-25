
pharmApp.controller('CNRDirectCtrl', ['$scope','$rootScope','$http','$modalInstance','$log','$timeout','$modal','reasonList', function ($scope,$rootScope,$http, $modalInstance, $log,$timeout,$modal,reasonList) {
	$scope.contact={};
	$scope.showDirectCN={};
	$scope.opType='New';
	$scope.confirmPass='';
	$scope.customerList=[];
	$scope.showCustomerSelected={};
	$scope.statusList=[{id:1,name:'Available'},{id:2,name:'Applied'}];
	$scope.reasonList=[{reasonID:-1,reasonReason:'other'}];
	$scope.editCustomerMode=true;
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	//$scope.showContactSelected=angular.element(document.getElementById('ContactManager')).scope().showContactSelected;
	$scope.$watch('showDirectCN.creditNoteReason',function(){
		if($scope.showDirectCN.creditNoteReason == -1){
			
		}else{
			$scope.showDirectCN.creditNoteReasonOther='';
		}
		
	});
	$scope.$watch('showDirectCN.creditNoteflgLedger',function(){
		if($scope.showDirectCN.creditNoteflgLedger){
			$scope.ledgerText='['+$scope.showDirectCN.creditNoteLedgerUserName+'] '+$scope.showDirectCN.creditNoteLedgerDateTime;
		}else{
			$scope.ledgerText='';
		}
		
	});
	$scope.$watch('showDirectCN.creditNoteflgLock',function(){
		//if($scope.opType!='New'){
			if($scope.showDirectCN.creditNoteflgLock){
				$scope.lockText='['+$scope.showDirectCN.creditNoteLockUserName+'] '+$scope.showDirectCN.creditNoteLockDateTime;
			}else{
				$scope.lockText='';
			}
		//}
	});
	$scope.$watch('showDirectCN.creditNoteflgVoid',function(){
		//if($scope.opType!='New'){
			if($scope.showDirectCN.creditNoteflgVoid){
				$scope.voidText='['+$scope.showDirectCN.creditNoteVoidByName+'] '+$scope.showDirectCN.creditNoteVoidOn;
			}else{
				$scope.voidText='';
			}
		//}
	});
	$scope.init=function(){
		$scope.reasonList=$scope.reasonList.concat(reasonList);
		angular.copy(w2ui.grid.records,$scope.customerList);
		$scope.opType='New';
		if(w2ui.grid2.getSelection().length>0){
			$scope.opType='Modify';
			angular.copy(w2ui.grid2.get(w2ui.grid2.getSelection()[0]),$scope.showDirectCN);
			$scope.showCustomerSelected=akricksFilter($scope.customerList,{recid:$scope.showDirectCN.creditNoteCustID})[0];
			if(!$scope.$$phase) {
				$scope.$apply();
				}
			
		}else{
			$scope.showDirectCN={creditNoteID:0,creditNoteCreatedByName:'Rajesh Mahale'/*Hardcode*/,creditNoteDate:getCurrentDate(),creditNoteTypeDescription:'Direct',creditNoteflgLock:false,creditNoteStatus:1,creditNoteStatusDescription:'Available',creditNoteType:2,creditNoteflgVoid:false};
			var currDate=new Date();
			$scope.showDirectCN.creditNoteCreatedOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
			'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
		
			if(w2ui.grid.getSelection().length>0){
				
				angular.copy(w2ui.grid.get(w2ui.grid.getSelection()[0]),$scope.showCustomerSelected);
				/*if($scope.opType == 'New'){
					$scope.editCustomerMode=false;
				}*/
			}else{
				if($scope.opType != 'New'){
					
				}else{
					angular.copy(w2ui.grid.records[0],$scope.showCustomerSelected);
				}
			}
		}
		
	}
	
	$scope.submit=function(){
		//validations
		
		if(angular.equals($scope.showCustomerSelected,{})){
			alert('please select customer');
			return false;
		}
		if($scope.showCustomerSelected.recid ==-1){
			alert('please select customer');
			return false;
		}
		$scope.showDirectCN.creditNoteCustID=$scope.showCustomerSelected.customerId;
		$scope.showDirectCN.creditNoteCustName=$scope.showCustomerSelected.customerName.split('(')[0];
		json1=JSON.stringify($scope.showDirectCN);
		var json={entity:1,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiCreditNote/setCreditNote",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				if($scope.opType!='New'){
					if(respData.creditNoteflgVoid){
						var ind=akricksGetObjIndex(w2ui.grid2.records,{recid:respData.recid});
						w2ui.grid2.records.splice(ind,1);
					}else{
						var ind=akricksGetObjIndex(w2ui.grid2.records,{recid:respData.recid});
						w2ui.grid2.records[ind]=respData;
					}
					
				}else{
					if(w2ui.grid.getSelection()[0]==-1 || angular.element(document.getElementById('CreditNoteRegister')).scope().CNTypeSelected == 2 || angular.element(document.getElementById('CreditNoteRegister')).scope().CNTypeSelected == -1){
						
						w2ui.grid2.records.unshift(respData);
					}
				}
				w2ui.grid2.refresh();
				$modalInstance.close();
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	}
	
	$scope.cancel=function(){
		$modalInstance.close();
	}
	
	$scope.changeStatusFlag=function(type){
		if(type=='lock'){

			if($scope.showDirectCN.creditNoteflgLock){				
				$scope.showDirectCN.creditNoteLockUserName='Rajesh Mahale';//Hardcode				
				$scope.showDirectCN.creditNoteLockByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showDirectCN.creditNoteLockDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{
				$scope.showDirectCN.creditNoteLockDateTime=null;
				$scope.showDirectCN.creditNoteLockUserName=null;
				$scope.showDirectCN.creditNoteLockByID=0;
			}
			//$scope.showCNPSelected.creditNoteflgLedger=!$scope.showCNPSelected.creditNoteflgLedger;
		}else if(type=='void'){
			if($scope.showDirectCN.creditNoteflgVoid){
				var r = confirm("This action will void credit note and no longer available.Are you sure?");
				if (r == true) {    
					
					//////////////
					$scope.showDirectCN.creditNoteVoidByName='Rajesh Mahale';//Hardcode				
					$scope.showDirectCN.creditNoteVoidByID=$scope.activeUser.userId;
					var currDate=new Date();
					///
					$scope.showDirectCN.creditNoteVoidOn=currDate.getDate()+'/'+(currDate.getMonth()+1)+
					'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				} else {
					$scope.showDirectCN.creditNoteflgVoid=!$scope.showDirectCN.creditNoteflgVoid;
				}
			}else{
				//$scope.showDirectCN.creditNoteflgVoid=!$scope.showDirectCN.creditNoteflgVoid;
				$scope.showDirectCN.creditNoteVoidByID=0;
				$scope.showDirectCN.creditNoteVoidOn=null;
				$scope.showDirectCN.creditNoteVoidByName=null;
				$scope.showDirectCN.creditNoteVoidReason=null;
			}
		}else if(type=='ledger'){
			$scope.showDirectCN.creditNoteflgLedger=!$scope.showDirectCN.creditNoteflgLedger;
			if($scope.showDirectCN.creditNoteflgLedger){
				$scope.showDirectCN.creditNoteLedgerUserName='Rajesh Mahale';//Hardcode				
				$scope.showDirectCN.creditNoteLedgerByID=$scope.activeUser.userId;
				var currDate=new Date();
				$scope.showDirectCN.creditNoteLedgerDateTime=currDate.getDate()+'/'+(currDate.getMonth()+1)+
				'/'+currDate.getFullYear()+' '+currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
				
			}else{			
				$scope.ledgerText=null;
			}
		}
		
	};
	$scope.showCustomerListPopup = function(){
		if($scope.showDirectCN.creditNoteflgLock){
			alert('Record is locked .You need to unlock it first')
			return false;
		}
		$modal.open({
			//template :'<div id="CNRDirectCustomerListPopup" ng-controller="CNRDirectCustomerListCtrl" ng-init="init()"> <div class="container goodReceipt_productListPopup"> <div class="row topblueStrip"> <h6 class="fieldsTop_Spacing"> <span class="topblueStripText">CUSTOMER LIST</span> </h6> </div> <div class="row"> <!--=============GRID========== --> <div id="grid3" tabindex="-1" class="gridSizeGoodsReceipt_productList"></div> <!--=============GRID========== --> </div> <div class="row fieldsTop_Spacing fieldsBot_Spacing"> <div class=" col-md-6"> </div> <div class=" col-md-6"> <div class="row"> <div class=" col-md-5"> <button type="button" ng-click="cancel()" class="canclebtnSize">Cancel</button> </div> <div class=" col-md-5"> <button type="button" ng-click="submit()" class="okbtnSize">OK</button> </div> </div> </div> </div> </div> </div> ', 
			templateUrl:'partials/popup/credit_note_customerList_2.jsp',
			controller :'CreditNoteCustomerListPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'listProduct_GoodsReceipt-Modal',
			resolve:{
				customerList:function(){
					$scope.list=[];
					angular.copy(w2ui.grid.records,$scope.list);
					$scope.list.splice(0,1);
					return $scope.list;
				}
			}

		}).result.then(function(result) {
			if(typeof result !== "undefined"){
				$scope.showCustomerSelected=result;
			}

		});
	};
	
	$scope.showConsumptionPopup=function(){
		if($scope.opType=='New'){
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
					return $scope.showDirectCN.creditNoteID;
				}
			}
		
				
		}).result.then(function(result) {

			
		});
		
	};
	
	
}]);