pharmApp.controller('SMChangeBatchDetailsCtrl', ['$scope','$rootScope','$http','$modalInstance','$log', function ($scope,$rootScope,$http, $modalInstance, $log) {
	$scope.popupActiveBatch={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init=function(){
		//Got Batch Data selected in Grid2
		$scope.popupRecievedBatch=w2ui.grid2.get(w2ui.grid2.getSelection());
		
		/*===========================*/
		var month = (new Date()).getMonth() + 1;
		var year  = (new Date()).getFullYear();
		
		// EU Common Format
		$('input[type=eu-date]').w2field('date',  { format: 'd/m/yyyy' });
		$('input[type=eu-dateA]').w2field('date', { format: 'd/m/yyyy', start:  '5.' + month + '.' + year, end: '25.' + month + '.' + year });
		$('input[type=eu-dateB]').w2field('date', { format: 'd/m/yyyy', blocked: ['12.' + month + '.' + year, '13.' + month + '.' + year, '14.' + month + '.' + year]});
		$('input[type=eu-date1]').w2field('date', { format: 'd/m/yyyy', end: $('input[type=eu-date2]') });
		$('input[type=eu-date2]').w2field('date', { format: 'd/m/yyyy', start: $('input[type=eu-date1]') });
		$('input[type=eu-time]').w2field('time',  { format: 'h24' });
		$('input[type=eu-timeA]').w2field('time', { format: 'h24', start: '8:00 am', end: '4:30 pm' });
		/*===========================*/
		
		
	};
	
	$scope.calculatePercentMargin=function(){
		 (($scope.popupRecievedBatch.grProductBatchSellRate - $scope.popupRecievedBatch.grProductBatchPurchaseRate )/$scope.popupRecievedBatch.grProductBatchPurchaseRate) * 100
	};
	

	$scope.saveBatchChanged=function(){
		var a=SMChangeBatchschemeValidate();
		  if(a==false){
		   return false;
		  }
		if(typeof $scope.popupRecievedBatch.expanded !== "undefined"){
			delete $scope.popupRecievedBatch.expanded;
		}
		if(typeof $scope.popupRecievedBatch.changes !== "undefined"){
			delete $scope.popupRecievedBatch.changes;
		}
		
		json1=JSON.stringify($scope.popupRecievedBatch);
		var json={entity:3,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,companyId:0,grDate:0};
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
				//$scope.popupRecievedBatch.productBatch
		
				var obj=$.grep(angular.element(document.getElementById('StockManager')).scope().companyBatchList, function(e){ return e.grProductBatchId==$scope.popupRecievedBatch.grProductBatchId ; })[0];
				var index=angular.element(document.getElementById('StockManager')).scope().companyBatchList.indexOf(obj);
				angular.element(document.getElementById('StockManager')).scope().companyBatchList[index]=$scope.popupRecievedBatch;
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(w2ui.grid.records[0]);
				
				/*
				var compList=angular.element(document.getElementById('StockManager')).scope().showCompanyList;
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
				angular.element(document.getElementById('StockManager')).scope().onDivisionSelection(compList[compIndex].companyDivisionsList[divIndex]);
				
				*/
				
				
				
				
				
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
function SMChangeBatchschemeValidate(){
 flag=true;
 if($.trim($('#changeBatch_mrp').val()).length==0){
  $('#changeBatch_mrp').css("background-color", "#fff4eb");
  //create error message using tooltip
  flag=false;
 }
 if($.trim($('#changeBatch_trade').val()).length==0){
  $('#changeBatch_trade').css("background-color", "#fff4eb");
  //create error message using tooltipscheme_start_date
  flag=false;
 }
 if($.trim($('#changeBatch_purchase_rate').val()).length==0){
  $('#changeBatch_purchase_rate').css("background-color", "#fff4eb"); 
  //create error message using tooltip
  flag=false;
 }
 if($.trim($('#changeBatch_selling_rate').val()).length==0){
  $('#changeBatch_selling_rate').css("background-color", "#fff4eb"); 
  //create error message using tooltip
  flag=false;
 }
 return flag;
 }