
pharmApp.controller('SystemRoleFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.labelList=[];
	$scope.contactTypeList=[];
	$scope.userNameList=[];
	$scope.userIDList=[];
	$scope.roleList=[{name:'All'},{name:'Role'},{name:'Manual'}];	
	$scope.staffOptList=[{name:'All'},{name:'No'},{name:'Yes'}];
	$scope.clearFilter={userName:'All',contactLabel:'All',contactUserName:'All',contactType:'All',staff:'All',organisation:'',roleType:'All'};
	$scope.filter={};
	$scope.init=function(){
		
		var parentScope=angular.element(document.getElementById('SystemRole')).scope();
		//$scope.filter=parentScope.clearFilter;
		angular.copy(parentScope.mainFilter,$scope.filter)
		angular.copy(parentScope.labelList,$scope.labelList);//filter data
		angular.copy(parentScope.contactTypeList,$scope.contactTypeList);//filter data
		angular.copy(parentScope.userNameList,$scope.userNameList);//filter data
		angular.copy(parentScope.userIDList,$scope.userIDList);//filter data
		$scope.userNameList.unshift({contactFullName:'All'});
		$scope.labelList.unshift({contactLabel:'All'}); 
		$scope.userIDList.unshift({contactUserName:'All'});
		$scope.contactTypeList.unshift({entityDeatilsDescription:'All'});
		
	};
	
	$scope.ok=function(filter){
		angular.copy(filter,angular.element(document.getElementById('SystemRole')).scope().mainFilter);
		if(!angular.equals(filter,$scope.clearFilter)){
			angular.element(document.getElementById('SystemRole')).scope().mainFilterStatus='ON';
		}else{
			angular.element(document.getElementById('SystemRole')).scope().mainFilterStatus='OFF';
		}
		angular.element(document.getElementById('SystemRole')).scope().sortAndFilter();
		$scope.$close();
	};
	$scope.clearAllFilters=function(){
		
		angular.copy($scope.clearFilter,$scope.filter);
	};


	
	$scope.cancel=function(){
		$scope.$close();
	};	



}]);
