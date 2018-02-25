
pharmApp.controller('CreditNoteProductFilterCtrl', ['$scope','$rootScope','$cookieStore', function ($scope,$rootScope,$cookieStore) {
	/*$rootScope.topManu=$scope.topManu;
	$scope.userLogged={name:"Rajesh Mahale"}*/
	$scope.user={};
	$scope.clearFilter={fromDate:'',toDate:'',rrId:''};
	$scope.filter={}
	$scope.init=function(){
		angular.copy(angular.element(document.getElementById('CreditNoteProduct')).scope().filter,$scope.filter);
		
	};
	$scope.clearAllFilters=function(){
		angular.copy($scope.clearFilter,$scope.filter);
	};
	$scope.submit=function(filter){
		angular.copy(filter,angular.element(document.getElementById('CreditNoteProduct')).scope().filter)
		if(!angular.equals(filter,$scope.clearFilter)){
			angular.element(document.getElementById('CreditNoteProduct')).scope().filterStatus='ON';
		}else{
			angular.element(document.getElementById('CreditNoteProduct')).scope().filterStatus='OFF';
		}
		angular.element(document.getElementById('CreditNoteProduct')).scope().sortAndFilter();
		$scope.$close();
	};
	$scope.cancel=function(){
		$scope.$close();
	};
	
}]);
