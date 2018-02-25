
pharmApp.controller('ReturnRegisterFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	
	$scope.filter={};
	$scope.statusTypeList=[{id:1,name:'New'},{id:2,name:'Raised'},{id:0,name:'ALL'}];
	$scope.yesNoList=[{id:1,name:'Yes'},{id:2,name:'No'},{id:0,name:'ALL'}];
	$scope.clearValue={fromDate:"",toDate:"",createdByFilterId:0,creditNoteId:0,status:0,fromAmt:0,toAmt:0};
	$scope.init=function(){
		$scope.createdByNameList=[];
		angular.copy(angular.element(document.getElementById('ReturnsRegister')).scope().createdByNameList,$scope.createdByNameList);
		angular.copy(angular.element(document.getElementById('ReturnsRegister')).scope().filter,$scope.filter);
		$scope.createdByNameList.unshift({contactId:0,contactFullName:'ALL'});
	};
	
	$scope.ok=function(result){
		if(typeof $scope.filter.fromDate ==="undefined"){
			$scope.filter.fromDate="";
		}
		
		if(typeof $scope.filter.toDate ==="undefined"){
			$scope.filter.toDate="";
		}
		if(typeof $scope.filter.creditNoteId ==="undefined"){
			$scope.filter.creditNoteId=0;
		}
		if(typeof $scope.filter.createdByFilterId ==="undefined"){
			$scope.filter.createdByFilterId=0;
		}
		if(typeof $scope.filter.status ==="undefined"){
			$scope.filter.status=0;
		}
		if(typeof $scope.filter.fromAmt ==="undefined"){
			$scope.filter.fromAmt=0;
		}
		if(typeof $scope.filter.toAmt ==="undefined"){
			$scope.filter.toAmt=0;
		}
		
				
		if(angular.equals($scope.filter,$scope.clearValue)){
			angular.element(document.getElementById('ReturnsRegister')).scope().filterStatus='OFF';
		}else{
			angular.element(document.getElementById('ReturnsRegister')).scope().filterStatus='ON';
		}
		angular.copy($scope.filter,angular.element(document.getElementById('ReturnsRegister')).scope().filter);
		angular.element(document.getElementById('ReturnsRegister')).scope().getFreshCustomerDetails(angular.element(document.getElementById('ReturnsRegister')).scope().showCustomerSelected.customerId);
		$scope.$close("");
	};
	$scope.cancel=function(){
		$scope.$close('');		
	};
	
	$scope.clearAllFilters=function(){
		$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,creditNoteId:0,status:0,fromAmt:0,toAmt:0};
	};
	
	
}]);