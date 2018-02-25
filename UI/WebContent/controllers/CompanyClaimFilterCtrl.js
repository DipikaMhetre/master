
pharmApp.controller('CompanyClaimFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	
	$scope.filter={};
	$scope.statusTypeList=[{id:1,name:'New'},{id:2,name:'Raised'}];
	$scope.clearValue={fromDate:"",toDate:"",createdByFilterId:0,status:0,fromAmt:0,toAmt:0};
	$scope.init=function(){
		$scope.createdByNameList=[];
		angular.copy(angular.element(document.getElementById('CompanyClaim')).scope().createdByNameList,$scope.createdByNameList);
		angular.copy(angular.element(document.getElementById('CompanyClaim')).scope().filter,$scope.filter);
	};
	
	$scope.ok=function(result){
		if(typeof $scope.filter.fromDate ==="undefined"){
			$scope.filter.fromDate="";
		}
		if(typeof $scope.filter.toDate ==="undefined"){
			$scope.filter.toDate="";
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
			angular.element(document.getElementById('CompanyClaim')).scope().filterStatus='OFF';
		}else{
			angular.element(document.getElementById('CompanyClaim')).scope().filterStatus='ON';
		}
		angular.copy($scope.filter,angular.element(document.getElementById('CompanyClaim')).scope().filter);
		angular.element(document.getElementById('CompanyClaim')).scope().getCompanyClaims(angular.element(document.getElementById('CompanyClaim')).scope().showCompanySelectedId);
		$scope.$close("");
	};
	$scope.cancel=function(){
		$scope.$close('');		
	};
	
	$scope.clearAllFilters=function(){
		$scope.filter={fromDate:"",toDate:"",createdByFilterId:0,status:0,fromAmt:0,toAmt:0};
	};
	
	
}]);