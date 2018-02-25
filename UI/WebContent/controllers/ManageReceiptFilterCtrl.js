pharmApp.controller('ManageReceiptFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','$filter','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,$filter,ngToast) {
	$scope.SalesmanList=[]
	 $scope.init=function(){
		$scope.filter={};
		 $scope.reqdata=angular.element(document.getElementById('salesmanreceipt')).scope();
		 angular.copy($scope.reqdata.MainSalesmanList,$scope.SalesmanList);
			$scope.filter={entityId:0,receiptNo:""};
			$scope.ok=function(){
				
				if( $scope.filter.entityId ===undefined){
					$scope.filter.entityId=0;
				}
				if( $scope.filter.receiptNo ===""){
					$scope.filter.receiptNo=0;
				}
				if(angular.equals($scope.filter,$scope.clearAllFilters)){
					angular.element(document.getElementById('salesmanreceipt')).scope().filterStatus='OFF';
				}else{
					angular.element(document.getElementById('salesmanreceipt')).scope().filterStatus='ON';
				}
				angular.copy($scope.filter,angular.element(document.getElementById('salesmanreceipt')).scope().filter);
				 angular.element(document.getElementById('salesmanreceipt')).scope().acivateReceiptWidget();
					angular.copy($scope.filter,angular.element(document.getElementById('salesmanreceipt')).scope().filter);
				 $scope.$dismiss('cancel');
				
			};
		 
	 };
		$scope.cancel = function() {
			
			$scope.$dismiss('cancel');
		};
	 $scope.clearAllFilters=function(){
			$scope.filter={entityId:"",receiptId:""};
		};
}]);
