pharmApp.controller('GoodsRecipt_RegisterFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.CompanyList=[];
	$scope.SupplierList=[];
	$scope.SupplierFileterList=[];
	$scope.TrasporterList=[];
	
	$scope.companyselectedObj={};
	$scope.LedgerList=[{id:1,name:'Yes'},{id:2,name:'No'}];
	$scope.createByNameList=[];
	$scope.init=function(){
		$scope.filter={};
		$scope.companyselected=0;
		angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().CompanyList,$scope.CompanyList);
		angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().SupplierList,$scope.SupplierList);
		angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().TrasporterList,$scope.TrasporterList);
		angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().createByNameList,$scope.createByNameList);
		//angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().filter,$scope.filter);
		$scope.filter={companyId:0,supplierId:0,transporterId:0,fromDate:"",toDate:"",lRDate:"",dueDate:"",ledger:"",poItem:"",fromAmt:"",toAmt:"",grID:"",verifiedByFilterId:"",createdByFilterId:0}
		angular.copy(angular.element(document.getElementById('GoodsReciept_Register')).scope().ShowCompanySelected,$scope.companyselectedObj);
		$scope.companyselected=$scope.companyselectedObj.companyId;
		
	};
	$scope.ok=function(){
		
		$scope.filter.companyId=$scope.companyselected;
		$scope.filter.supplierId=$scope.supplierselected;
		
		if( $scope.filter.companyId ===undefined){
			$scope.filter.companyId=0;
		}
		if( $scope.filter.supplierId ===undefined){
			$scope.filter.supplierId=0;
		}
		if( $scope.filter.transporterId ===0){
			$scope.filter.transporterId=0;
		}
		if( $scope.filter.ledger ===""){
			$scope.filter.ledger=-1;
		}
		if( $scope.filter.poItem ===""){
			$scope.filter.poItem=0;
		}
		if( $scope.filter.fromAmt ===""){
			$scope.filter.fromAmt=0;
		}
		if( $scope.filter.toAmt ===""){
			$scope.filter.toAmt=0;
		}
		if( $scope.filter.poItem ===""){
			$scope.filter.poItem=0;
		}
		if( $scope.filter.grID ===""){
			$scope.filter.grID=0;
		}
		if( $scope.filter.verifiedByFilterId ===""){
			$scope.filter.verifiedByFilterId=0;
		}
		if( $scope.filter.createdByFilterId ===""){
			$scope.filter.createdByFilterId=0;
		}
		if(angular.equals($scope.filter,$scope.clearAllFilters)){
			angular.element(document.getElementById('GoodsReciept_Register')).scope().filterStatus='OFF';
		}else{
			angular.element(document.getElementById('GoodsReciept_Register')).scope().filterStatus='ON';
		}
		angular.copy($scope.filter,angular.element(document.getElementById('GoodsReciept_Register')).scope().filter);
		angular.element(document.getElementById('GoodsReciept_Register')).scope().maxId=0
		
		w2ui.grid.unselect($scope.companyselectedObj.companyId);
		 if($scope.companyselected==undefined){
			 angular.element(document.getElementById('GoodsReciept_Register')).scope().getFreshGrDetails($scope.filter.companyId);
		 }
		 else{
     	w2ui.grid.select($scope.companyselected);
		 }
		$scope.$close("");
	}
	$scope.cancel=function(){
		$scope.$close('');		
	};
	$scope.SupplieListFilter=function(){
		$scope.SupplierFileterList=getPurpleObjArray($scope.SupplierList,{supplierCompanyId:$scope.companyselected})
	};
	$scope.OnCompanyChange=function(){
	$scope.supplierselected=undefined;
	
	}
	$scope.clearAllFilters=function(){
		$scope.filter={companyId:0,supplierId:0,transporterId:0,fromDate:"",lRDate:"",dueDate:"",ledger:"",poItem:"",fromAmt:"",toAmt:"",grID:"",verifiedByFilterId:"",createdByFilterId:0}
	};
}]);