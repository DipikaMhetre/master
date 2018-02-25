pharmApp.controller('PO_RegisterFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	
	$scope.StatusList=[{id:1,name:'New'},{id:2,name:'Raised'}];
	$scope.UrgentTypeList=[{id:1,name:"Yes"},{id:2,name:"No"}];
	$scope.VoidList=[{id:1,name:"Yes"},{id:2,name:"No"}];
	$scope.CompanyList=[];
	$scope.SupplierList=[];
	$scope.MrList=[];
	$scope.SupplierFileterList=[];
	$scope.createByNameList=[];
	
	$scope.companyselectedObj={};
	$scope.init=function(){
		$scope.filter={};
		$scope.companyselected=0;
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().CompanyList,$scope.CompanyList);
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().SupplierList,$scope.SupplierList);
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().MrList,$scope.MrList);
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().createByNameList,$scope.createByNameList);
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().filter,$scope.filter);
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().filter,$scope.filter);
		
		angular.copy(angular.element(document.getElementById('PO_Register')).scope().ShowCompanySelected,$scope.companyselectedObj);
		$scope.companyselected=$scope.companyselectedObj.companyId;
	};
	$scope.cancel=function(){
		$scope.$close('');		
	};
	$scope.SupplieListFilter=function(){
		$scope.SupplierFileterList=getPurpleObjArray($scope.SupplierList,{supplierCompanyId:$scope.companyselected})
	};
	$scope.OnCompanyChange=function(){
	$scope.supplierselected=undefined;
	$scope.Mrselected=undefined;
	}
	$scope.MrListFilter=function(){
		$scope.MrFileterList=getPurpleObjArray($scope.MrList,{mrCompanyId:$scope.companyselected})
	};
	$scope.ok=function(result){
		if(typeof $scope.filter.fromDate ==="undefined"){
			$scope.filter.date="";
		}
		if(typeof $scope.filter.fromAmt ==="undefined"){
			$scope.filter.fromAmt="";
		}
		if(typeof $scope.filter.toAmt ==="undefined"){
			$scope.filter.toAmt=0;
		}
		
		if(typeof $scope.filter.poItem ==="undefined"){
			$scope.filter.poItem=0;
		}
		if(typeof $scope.filter.companyId ==="undefined"){
			$scope.companyselected=0;
		}
		if(typeof $scope.filter.supplierId ==="undefined"){
			$scope.supplierselected=0;
		}
		if(typeof $scope.filter.entityId ==="undefined"){
			$scope.Mrselected=0;
		}
		if(typeof $scope.filter.status ==="undefined"){
			$scope.filter.status=0;
		}
		if(typeof $scope.filter.poflgUrgent ==="undefined"){
			$scope.filter.poflgUrgent=0;
		}
		if(typeof $scope.filter.poflgVoid ==="undefined"){
			$scope.filter.poflgVoid=0;
		}
		if(typeof $scope.filter.poflgUrgent ==="undefined"){
			$scope.filter.poflgUrgent=0;
		}
		$scope.filter.companyId=$scope.companyselected;
		$scope.filter.supplierId=$scope.supplierselected;
		$scope.filter.entityId=$scope.Mrselected;
	     
		if(angular.equals($scope.filter,$scope.clearAllFilters)){
			angular.element(document.getElementById('PO_Register')).scope().filterStatus='OFF';
		}else{
			angular.element(document.getElementById('PO_Register')).scope().filterStatus='ON';
		}
		angular.copy($scope.filter,angular.element(document.getElementById('PO_Register')).scope().filter);
		angular.element(document.getElementById('PO_Register')).scope().maxId=0
		//angular.element(document.getElementById('PO_Register')).scope().getFreshPoDetails($scope.filter.companyId);
		
		
		w2ui.grid.unselect($scope.companyselectedObj.companyId);
		if($scope.companyselected==undefined){
			angular.element(document.getElementById('PO_Register')).scope().getFreshPoDetails($scope.filter.companyId);
		}
		else{
     	w2ui.grid.select($scope.companyselected);
		}
		$scope.$close("");
	};
	$scope.clearAllFilters=function(){
		$scope.filter={date:"",fromAmt:0,toAmt:0,cpoItem:0,companyId:0,supplierId:0,entityId:0,cpoStatus:0,poflgUrgent:0,poflgVoid:0,createdByFilterId:0,voidFlag:0};
	};
	
}]);

/*pharmApp.filter('supplierFilter', function() {
    return function(items, company) {
    	if( company== undefined || items==null)
            return items;
    	else{
    		
	        var arrayToReturn = [];
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].supplierCompanyId == company) {
	                arrayToReturn.push(items[i]);
	            }
	        }
	        return arrayToReturn;
        }
    };
});*/