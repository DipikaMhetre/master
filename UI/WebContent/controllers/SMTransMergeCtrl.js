pharmApp.controller('SMTransMergeCtrl', ['$scope','$rootScope','$http','$modal','$log', function ($scope,$rootScope,$http, $modal, $log) {
	$scope.popupActiveBatch={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	
	$scope.$watch('removeStock',function() {
		
	    $scope.sourceNewStock=$scope.sourceBatch.stock- $scope.removeStock;
	});
	
	$scope.$watch('removeStock',function() {
		
	    $scope.targetNewStock=Number($scope.targetBatch.stock)+ Number($scope.removeStock);
	});
	
	$scope.$watch('removeFreeStock',function() {
		
	    $scope.sourceNewFreeStock=$scope.sourceBatch.freeStock- $scope.removeFreeStock;
	});
	
	$scope.$watch('removeFreeStock',function() {
		
	    $scope.targetNewFreeStock=Number($scope.targetBatch.freeStock)+ Number($scope.removeFreeStock);
	});
	
	
	$scope.init=function(){
		//Got Batch Data selected in Grid2
		$scope.popupRecievedBatch=w2ui.grid2.get(w2ui.grid2.getSelection());
		if(typeof $scope.popupRecievedBatch.changes !=="undefined"){
			delete $scope.popupRecievedBatch.changes;
		}
		$scope.sourceBatch=$scope.popupRecievedBatch;
		$scope.targetBatch={};
	};
	
	$scope.getTargetBatch=function(){
		$scope.targetBatchList=[];
		angular.copy($.grep(w2ui.grid2.records,function(e){return e.grProductBatchProductId==$scope.sourceBatch.grProductBatchProductId }),$scope.targetBatchList);
		
		var obj=$.grep($scope.targetBatchList,function(e){return e.grProductBatchId==$scope.sourceBatch.grProductBatchId })[0];
		var index=$scope.targetBatchList.indexOf(obj);
		$scope.targetBatchList.splice(index, 1);
		$modal.open({
			template :' <div ng-init="init()" id="SMTM_BatchSelector" class="grayBG"> <div class="container stockManagerPopup_TMB_batch"> <div class="row topblueStrip"><h6 class="fieldsTop_Spacing"><span class="topblueStripText">Batch</span></h6></div><div class=" row fieldsSpacing"> <div class="col-md-12"> <nav class="mainnav"> <ul class="rightFloat"> <li><a ng-click="showContentPopup()" title="Show Selected" class="">Show Only Active<span class="highlight_purple">(ON)</span></a> </li> </ul> </nav> </div> </div> <div class="row"> <!--=============GRID========== --> <div id="grid3" tabindex="-1" class="transferMergeBatch_batchPopup"></div> <!--=============GRID========== --> </div> </div> </div> ',
			controller :'SMTransMergeTargetBatchSelectorPopupCtrl',
			backdrop: 'static',
			size:'lg',
			windowClass: 'stockManager_TransferBatch_Medium_Popup_Model',
			/*resolve : {
				noteType : function() {
					return $scope.type;
				}
			}	*/	
		}).result.then(function(result) {
			$scope.targetBatch=result;
			
		});
		
	};
	
	$scope.transfer=function(){
		if(angular.equals($scope.targetBatch,{})){
			alert('Please select target batch!!');
			return false;
		}
		var list=[];
		$scope.sourceBatch.stock=$scope.sourceNewStock;
		$scope.sourceBatch.freeStock=$scope.sourceNewFreeStock;
		$scope.targetBatch.stock=$scope.targetNewStock;
		$scope.targetBatch.freeStock=$scope.targetNewFreeStock;
		if(typeof $scope.sourceBatch.expanded !== "undefined"){
			delete $scope.sourceBatch.expanded;
		}
		if(typeof $scope.sourceBatch.changes !== "undefined"){
			delete $scope.sourceBatch.changes;
		}
		if(typeof $scope.targetBatch.expanded !== "undefined"){
			delete $scope.targetBatch.expanded;
		}
		if(typeof $scope.targetBatch.changes !== "undefined"){
			delete $scope.targetBatch.changes;
		}
		list.push($scope.sourceBatch);
		list.push($scope.targetBatch);
		
		json1=JSON.stringify(list);
		var json={entity:1,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token
,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/setStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var obj=$.grep(angular.element(document.getElementById('StockManager')).scope().companyBatchList, function(e){ return e.grProductBatchId==$scope.sourceBatch.grProductBatchId ; })[0];
				var index=angular.element(document.getElementById('StockManager')).scope().companyBatchList.indexOf(obj);
				angular.element(document.getElementById('StockManager')).scope().companyBatchList[index]=$scope.sourceBatch;
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(w2ui.grid.records[0]);
				
				
				var obj2=$.grep(angular.element(document.getElementById('StockManager')).scope().companyBatchList, function(e){ return e.grProductBatchId==$scope.targetBatch.grProductBatchId ; })[0];
				var index2=angular.element(document.getElementById('StockManager')).scope().companyBatchList.indexOf(obj2);
				angular.element(document.getElementById('StockManager')).scope().companyBatchList[index2]=$scope.targetBatch;
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(w2ui.grid.records[0]);
				
				
				/*var compList=angular.element(document.getElementById('StockManager')).scope().showCompanyList;
				==========
				for(i=0;i<compList.length;i++){
					if(compList[i].companyId==$scope.popupRecievedBatch.productCompanyId){
						for(j=0;j<compList[i].companyDivisionsList.length;j++){
							if(compList[i].companyDivisionsList[j].divisionId==$scope.popupRecievedBatch.productDivisionId){
								for(k=0;k<compList[i].companyDivisionsList[j].productList.length;k++){
									for(l=0;l<compList[i].companyDivisionsList[j].productList[k].productBatchList.length;l++){
										if(compList[i].companyDivisionsList[j].productList[k].productBatchList[l].grProductBatchId==$scope.sourceBatch.grProductBatchId){
											compList[i].companyDivisionsList[j].productList[k].productBatchList[l]=$scope.sourceBatch;
											var compIndex=i;
											var divIndex=j;
										}
										if(compList[i].companyDivisionsList[j].productList[k].productBatchList[l].grProductBatchId==$scope.targetBatch.grProductBatchId){
											compList[i].companyDivisionsList[j].productList[k].productBatchList[l]=$scope.targetBatch;
											var compIndex=i;
											var divIndex=j;
										}
										
									}
									
								}
							}
						}
						
					}
				}
				
				angular.element(document.getElementById('StockManager')).scope().showCompanyList=compList;
				angular.element(document.getElementById('StockManager')).scope().onCompanySelection(compList[compIndex]);
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(compList[compIndex].companyDivisionsList[divIndex]);
				==========*/
				$scope.$close('');
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	
	$scope.cancel=function(){	
		$scope.$dismiss('');		
	};


}]);
/*function SMTransferValidate()
{
 flag=true;
 if($.trim($('#mergeBatch_quantity2').val()).length==0 && $.trim($('#mergeBatch_quantity1').val()).length==0){
  $('#mergeBatch_quantity2').css("background-color", "#fff4eb");
  $('#mergeBatch_quantity1').css("background-color", "#fff4eb");
  //create error message using tooltip
  flag=false;
 }
 
 
 return flag;
 }*/