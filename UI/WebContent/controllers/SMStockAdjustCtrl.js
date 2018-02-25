pharmApp.controller('SMStockAdjustCtrl', ['$scope','$rootScope','$http','$modalInstance','$log', function ($scope,$rootScope,$http, $modalInstance, $log) {
	$scope.popupActiveBatch={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.stockAdjustmentOptionList=[{id:1,name:'Stock/Quantity'},{id:2,name:'Free Stock'}];
	$scope.init=function(){
		//Got Batch Data selected in Grid2
		$scope.popupRecievedBatch=w2ui.grid2.get(w2ui.grid2.getSelection());
		if($scope.popupRecievedBatch.expiry == 0){
			$scope.popupRecievedBatch.expiry=null;
		}
		if($scope.popupRecievedBatch.breakage == 0){
			$scope.popupRecievedBatch.breakage=null;
		}
		if($scope.popupRecievedBatch.cotransfer == 0){
			$scope.popupRecievedBatch.cotransfer=null;
		}
		
		/*var json={entity:2,entityId:$scope.popupActiveBatch.productBatch.grProductBatchSAID,listType:1,requestData:"",userId:10,tokenId:1,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiBatchScheme/getBatchScheme",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				$scope.showBatchScheme=respData.batchSchemeList;
				$scope.showGrHistory=respData.grHistoryList;
				for(i=0;i<$scope.showBatchScheme.bsdList.length;i++){
					//==================HARDCODE==============
					if(i==0){
						$scope.showBatchScheme.Q1=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F1=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q1ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
					if(i==1){
						$scope.showBatchScheme.Q2=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F2=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q2ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
					if(i==2){
						$scope.showBatchScheme.Q3=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsQuantity;
						$scope.showBatchScheme.F3=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsFree;
						$scope.showBatchScheme.Q3ID=$scope.showBatchScheme.bsdList[i].batchSchemeDetailsId;
						
					}
				}
				
				w2ui.grid3.records=$scope.showGrHistory;
				w2ui.grid3.refresh();
					
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });*/
		
		
		//=============History grid Load
		
		
		
		/*===========================*/
		/*===========================*/
		
	};

	$scope.saveStockAdjust=function(){
		debugger;
		var a=SMStockAdjustValidate();
		  if(a==false){
		   return false;
		  }
		if(typeof $scope.popupRecievedBatch.expanded !== "undefined"){
			delete $scope.popupRecievedBatch.expanded;
		}
		if(typeof $scope.popupRecievedBatch.changes !== "undefined"){
			delete $scope.popupRecievedBatch.changes;
		}
		
		if($scope.popupRecievedBatch.expiry == null){
			$scope.popupRecievedBatch.expiry=0;
		}
		if($scope.popupRecievedBatch.breakage == null){
			$scope.popupRecievedBatch.breakage=0;
		}
		if($scope.popupRecievedBatch.cotransfer == null){
			$scope.popupRecievedBatch.cotransfer=0;
		}
		json1=JSON.stringify($scope.popupRecievedBatch);
		
		var json={entity:2,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
		//HTTP CALL FOR GETTING 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiStockManager/setStockManager",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				/*var respData=JSON.parse(data.responseData);
				$scope.showBatchScheme=respData.batchSchemeList;
				$scope.showGrHistory=respData.grHistoryList;*/
				
				/*var record =w2ui.grid2.get($scope.popupRecievedBatch.recid);
				record.productBatch=$scope.popupRecievedBatch.productBatch;
				var obj=$.grep(record.productBatchList,function(e){return e.grProductBatchId==record.productBatch.grProductBatchId })[0];
				var index=record.productBatchList.indexOf(obj);
				record.productBatchList[index]=record.productBatch;
				w2ui.grid2.set(record.recid,record,false);
				w2ui.grid2.refresh();*/
				
				var obj=$.grep(angular.element(document.getElementById('StockManager')).scope().companyBatchList, function(e){ return e.grProductBatchId==$scope.popupRecievedBatch.grProductBatchId ; })[0];
				var index=angular.element(document.getElementById('StockManager')).scope().companyBatchList.indexOf(obj);
				angular.element(document.getElementById('StockManager')).scope().companyBatchList[index]=$scope.popupRecievedBatch;
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(w2ui.grid.records[0]);
				
				/*var compList=angular.element(document.getElementById('StockManager')).scope().showCompanyList;
				==========
				for(i=0;i<compList.length;i++){
					if(compList[i].companyId==$scope.popupRecievedBatch.productCompanyId){
						for(j=0;j<compList[i].companyDivisionsList.length;j++){
							if(compList[i].companyDivisionsList[j].divisionId==$scope.popupRecievedBatch.productDivisionId){
								for(k=0;k<compList[i].companyDivisionsList[j].productList.length;k++){
									for(l=0;l<compList[i].companyDivisionsList[j].productList[k].productBatchList.length;l++){
										if(compList[i].companyDivisionsList[j].productList[k].productBatchList[l].grProductBatchId==$scope.popupRecievedBatch.productBatch.grProductBatchId){
											compList[i].companyDivisionsList[j].productList[k].productBatchList[l]=$scope.popupRecievedBatch.productBatch;
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
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(compList[compIndex].companyDivisionsList[divIndex]);*/
				/*==========*/
				$modalInstance.close('');
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	
	$scope.cancel=function(){	
		$modalInstance.close('');		
	};


}]);
function SMStockAdjustValidate()
{
 flag=true;
if($.trim($('#stockAdj_breakage').val()).length==0 && $.trim($('#stockAdj_company_transfer').val()).length==0 && $.trim($('#stockAdj_expiry').val()).length==0 ){
  /*$('#stockAdj_company_transfer').css("background-color", "#fff4eb");
  $('#stockAdj_breakage').css("background-color", "#fff4eb");
  */
  alert("Please Enter Atleast one value");
  //create error message using tooltip
  flag=false;
 }
 
 
 return flag;
 }