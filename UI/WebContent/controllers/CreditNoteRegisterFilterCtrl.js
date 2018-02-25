

pharmApp.controller('CreditNoteRegisterFilterCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {

	$scope.approvedList=[{id:-1,name:'All'},{id:1,name:'No'},{id:2,name:'Yes'},{id:2,name:'Rejected'}];	
	$scope.yesNoList=[{id:-1,name:'All'},{id:0,name:'No'},{id:1,name:'Yes'}]; // changed by nikita
	$scope.contactList=[]//get from backend
	$scope.statusList=[{id:-1,name:'All'},{id:1,name:'Available'},{id:2,name:'Applied'}];
	$scope.clearFilter={fromDate:'',toDate:'',ledgerFlag:-1,approvedFlag:-1,contactID:-1,status:-1,fromAmt:0,toAmt:0,creditNoteId:0,creditNoteVoidFlag:-1};
	$scope.clearFilter2={fromDate:'',toDate:'',ledgerFlag:-1,approvedFlag:-1,contactID:-1,status:-1,fromAmt:'',toAmt:'',creditNoteId:'',creditNoteVoidFlag:-1};
	
	$scope.filter={};
	$scope.init=function(){
		
		var parentScope=angular.element(document.getElementById('CreditNoteRegister')).scope();
		//$scope.filter=parentScope.clearFilter;
		$scope.contactList=parentScope.contactList;
		angular.copy(parentScope.filter,$scope.filter);
		if($scope.filter.creditNoteId==0){
			$scope.filter.creditNoteId='';
		}
		if($scope.filter.fromAmt==0){
			$scope.filter.fromAmt='';
		}
		if($scope.filter.toAmt==0){
			$scope.filter.toAmt='';
		}
		//angular.copy(parentScope.labelList,$scope.labelList);//filter data
		//angular.copy(parentScope.contactTypeList,$scope.contactTypeList);//filter data
	
	};
	
	$scope.ok=function(filter){
		if($scope.filter.creditNoteId.trim()==''){
			$scope.filter.creditNoteId=0;
		}
		if($scope.filter.fromAmt.trim()==''){
			$scope.filter.fromAmt=0;
		}
		if($scope.filter.toAmt.trim()==''){
			$scope.filter.toAmt=0;
		}
		angular.copy(filter,angular.element(document.getElementById('CreditNoteRegister')).scope().filter);
		if(!angular.equals(filter,$scope.clearFilter)){
			angular.element(document.getElementById('CreditNoteRegister')).scope().filterStatus='ON';
		}else{
			angular.element(document.getElementById('CreditNoteRegister')).scope().filterStatus='OFF';
		}
		angular.element(document.getElementById('CreditNoteRegister')).scope().maxId=0;
		angular.element(document.getElementById('CreditNoteRegister')).scope().getCustomerCreditNote();
		$scope.$close();
	};
	
	$scope.clearAllFilters=function(){		
		angular.copy($scope.clearFilter2,$scope.filter);
	};


	
	$scope.cancel=function(){
		$scope.$close();
	};	



}]);
