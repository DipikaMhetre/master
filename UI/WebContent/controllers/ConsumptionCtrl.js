pharmApp.controller('ConsumptionCtrl', ['$scope','$rootScope','$http','$modalInstance','$log','$timeout','ngToast','CreditNoteId', function ($scope,$rootScope,$http, $modalInstance, $log,$timeout,ngToast,CreditNoteId) {
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.consumptionStatus='';
	$scope.init=function(){
		var json={entity:2,creditNoteId:CreditNoteId,listType:8,requestData:"",userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//json=angular.extend(json,$scope.filter);
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
				$scope.consumptionStatus=respData.status;
				w2ui.grid5.records=respData.consumptionList;
				w2ui.grid5.refresh();
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded successfully...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
				
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
