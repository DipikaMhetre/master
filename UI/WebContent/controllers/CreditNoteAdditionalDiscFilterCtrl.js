

pharmApp.controller('CreditNoteAdditionalDiscFilterCtrl', ['$scope','$rootScope','$modalInstance','companyList','productList', function ($scope,$rootScope,$modalInstance,companyList,productList) {
	/*$rootScope.topManu=$scope.topManu;
	$scope.userLogged={name:"Rajesh Mahale"}*/
	$scope.user={};
	$scope.companyList=companyList;
	$scope.productList=productList;
	$scope.clearFilter={fromDate:'',toDate:'',invoiceId:'',companyId:0,productId:0};
	$scope.filter={}
	$scope.init=function(){
		angular.copy(angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().filter,$scope.filter);
		
	};
	$scope.clearAllFilters=function(){
		angular.copy($scope.clearFilter,$scope.filter);
	};
	$scope.submit=function(filter){
		angular.copy(filter,angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().filter)
		if(!angular.equals(filter,$scope.clearFilter)){
			angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().filterStatus='ON';
		}else{
			angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().filterStatus='OFF';
		}
		angular.element(document.getElementById('CreditNoteAdditionalDiscount')).scope().sortAndFilter();
		$modalInstance.close();
	};
	$scope.cancel=function(){
		$modalInstance.close();
	};
	
}]);
