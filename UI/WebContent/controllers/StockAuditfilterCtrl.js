
pharmApp.controller('StockAuditfilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {

	$scope.ResultList=[{id:1,name:'Satisfactory'},{id:2,name:'Non-satisfactory'}];
	$scope.OutcomeList=[{id:1,name:'Match'},{id:2,name:'Mismatch'}];
	$scope.LockSale=[{id:1,name:'Yes'},{id:2,name:'No'}];
	$scope.clearFilter={stockAuditId:"",fromDate:'',toDate:'',stockAuditLabel:"",stockAuditOutcome:0,stockAuditResult:0,stockAuditFlgLockSale:false};
	
	$scope.filter={};
	$scope.init=function(){
		
		var parentScope=angular.element(document.getElementById('StockAudit')).scope();
		//$scope.filter=parentScope.clearFilter;
	
		angular.copy(parentScope.filter,$scope.filter);
		if($scope.filter.stockAuditId==0){
			$scope.filter.stockAuditId='';
		}
		
		//angular.copy(parentScope.labelList,$scope.labelList);//filter data
		//angular.copy(parentScope.contactTypeList,$scope.contactTypeList);//filter data
	
	};
	
	$scope.ok=function(filter){
		if($scope.filter.stockAuditId==''){
			$scope.filter.stockAuditId="";
		}
		if($scope.filter.auditFlgSaleLock!=undefined){
		if($scope.filter.auditFlgSaleLock==0){
			$scope.filter.auditFlgSaleLock=true;
			}
		else{
			$scope.filter.auditFlgSaleLock=false;
		}
	} 
	      if($scope.filter.auditOutcome!=undefined){
		if($scope.filter.auditOutcome){
			$scope.filter.auditOutcome=true;
			}
		else{
			$scope.filter.auditOutcome=false;
		}
	}
		angular.copy(filter,angular.element(document.getElementById('StockAudit')).scope().filter);
		if(!angular.equals(filter,$scope.clearFilter)){
			angular.element(document.getElementById('StockAudit')).scope().filterStatus='ON';
		}else{
			angular.element(document.getElementById('StockAudit')).scope().filterStatus='OFF';
		}
		angular.element(document.getElementById('StockAudit')).scope().maxId=0;
		angular.element(document.getElementById('StockAudit')).scope().GetStockAuditDetails();
		$scope.$close();
	};
	
$scope.clearAllFilters=function(){		
	$scope.filter={stockAuditId:0,auditOutcome:0,auditResult:0,auditFlgSaleLock:0,fromDate:"",toDate:""}
	};


	
	$scope.cancel=function(){
		$scope.$close();
	};	



}]);
