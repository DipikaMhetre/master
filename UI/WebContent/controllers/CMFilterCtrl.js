pharmApp.controller('CMFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout', function ($scope,$rootScope,$http, $modal, $log,$timeout) {
	$scope.areaList=[];
	$scope.routeList=[];
	$scope.filter={};
	$scope.clearValue={"contactCity":"","contactPhone":"","contactEmail":"","contactURL":"","contactDate":"","contactHQ":"","contactLabel":"","contactArea":0,"contactRoute":0,"contactMyFavoriteFlag":false,"contactSystemUserFlag":false,"userName":"","userLock":false,"contactName":"","contactMyContactFlag":false};
	$scope.init=function(){
		$scope.areaList=angular.element(document.getElementById('ContactManager')).scope().entityAreaList;
		$scope.routeList=angular.element(document.getElementById('ContactManager')).scope().entityRouteList;
		angular.copy(angular.element(document.getElementById('ContactManager')).scope().filter,$scope.filter);
	};
	
	$scope.submit=function(result){
		if(typeof $scope.filter.contactCity ==="undefined"){
			$scope.filter.contactCity="";
		}
		if(typeof $scope.filter.contactPhone ==="undefined"){
			$scope.filter.contactPhone="";
		}
		if(typeof $scope.filter.contactEmail ==="undefined"){
			$scope.filter.contactEmail="";
		}
		if(typeof $scope.filter.contactURL ==="undefined"){
			$scope.filter.contactURL="";
		}
		if(typeof $scope.filter.contactDate ==="undefined"){
			$scope.filter.contactDate="";
		}
		if(typeof $scope.filter.contactHQ ==="undefined"){
			$scope.filter.contactHQ="";
		}
		if(typeof $scope.filter.contactArea ==="undefined"){
			$scope.filter.contactArea=0;
		}
		if(typeof $scope.filter.contactRoute ==="undefined"){
			$scope.filter.contactRoute=0;
		}
		if(typeof $scope.filter.contactLabel ==="undefined"){
			$scope.filter.contactLabel="";
		}
		if(typeof $scope.filter.contactMyFavoriteFlag ==="undefined"){
			$scope.filter.contactMyFavoriteFlag=false;
		}
		if(typeof $scope.filter.contactSystemUserFlag ==="undefined"){
			$scope.filter.contactSystemUserFlag=false;
		}
		if(typeof $scope.filter.userName ==="undefined"){
			$scope.filter.userName=false;
		}
		if(typeof $scope.filter.userLock ==="undefined"){
			$scope.filter.userLock=false;
		}
		if(typeof $scope.filter.contactName ==="undefined"){
			$scope.filter.contactName="";
		}
		if(typeof $scope.filter.contactMyContactFlag ==="undefined"){
			$scope.filter.contactMyContactFlag=false;
		}
				
		if(angular.equals($scope.filter,$scope.clearValue)){
			angular.element(document.getElementById('ContactManager')).scope().filterStatus='OFF';
		}else{
			angular.element(document.getElementById('ContactManager')).scope().filterStatus='ON';
		}
		angular.copy($scope.filter,angular.element(document.getElementById('ContactManager')).scope().filter);
		angular.element(document.getElementById('ContactManager')).scope().onMixTypeSelection(angular.element(document.getElementById('ContactManager')).scope().mixTypeSelected);
		$scope.$close("");
	};
	$scope.cancel=function(){
		$scope.$close('');		
	};
	
	$scope.clearAllFilters=function(){
		$scope.filter={"contactCity":"","contactPhone":"","contactEmail":"","contactURL":"","contactDate":"","contactHQ":"","contactLabel":"","contactArea":0,"contactRoute":0,"contactMyFavoriteFlag":false,"contactSystemUserFlag":false,"userName":"","userLock":false,"contactName":"","contactMyContactFlag":false};
	};

}]);