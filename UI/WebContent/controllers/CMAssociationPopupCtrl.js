
pharmApp.controller('CMAssociationPopupCtrl', ['$scope','$modalInstance','popuptype','objIndex', function ($scope,$modalInstance,popuptype,objIndex) {
	
	$scope.companyList=[];
	$scope.supplierList=[];
	$scope.divisionList=[];
	$scope.customerList=[];
	$scope.type=popuptype;
	$scope.temp=0;
	$scope.showCompany=false;
	$scope.showSupplier=false;
	$scope.showDivision=false;
	$scope.showCustomer=false;
	$scope.showAssoSelected={};
	/*$scope.masterId=1000;
	$scope.child1Id=5;*/
	
	
	$scope.init=function(){
		$scope.companyList=angular.element(document.getElementById('ContactManager')).scope().companyList;
		$scope.supplierList=angular.element(document.getElementById('ContactManager')).scope().supplierList;
		$scope.divisionList=angular.element(document.getElementById('ContactManager')).scope().divisionList;
		$scope.customerList=angular.element(document.getElementById('ContactManager')).scope().customerList;
		$scope.type=popuptype;
		if($scope.type == 'Company' || $scope.type == 'Supplier' || $scope.type == 'Division'){
			$scope.showCompany=true;
		}
		if( $scope.type == 'Supplier'){
			$scope.showSupplier=true;
		}
		if( $scope.type == 'Division'){
			$scope.showDivision=true;
		}
		angular.copy(angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAssociationList[objIndex],$scope.showAssoSelected);
		//$scope.showAssoSelected=angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAssociationList[objIndex];
		if($scope.type == 'Company'){
			$scope.masterId=$scope.showAssoSelected.associationId;
			$scope.$apply();
		}else if($scope.type == 'Supplier'){
			$scope.temp=$scope.showAssoSelected.associationId;
			if($scope.temp != 0){
				var obj = $.grep($scope.supplierList,function(e){return e.supplierId == $scope.temp})[0];
				$scope.masterId=obj.supplierCompanyId;
				$scope.$apply();
				$scope.child1Id=obj.supplierId;
				$scope.$apply();
			}else{
				
			}
		}else if($scope.type == 'Division'){
			$scope.temp=$scope.showAssoSelected.associationId;
			if($scope.temp != 0){
				var obj = $.grep($scope.divisionList,function(e){return e.divisionId == $scope.temp})[0];
				$scope.masterId=obj.divisionCompanyId;
				$scope.$apply();
				$scope.child2Id=obj.divisionId;
				$scope.$apply();
			}else{
				
			}
		}else if($scope.type == 'Costomer'){
			
		}
		
		
	};
	
	$scope.submit=function(){
		if($scope.type == 'Company'){
			$scope.showAssoSelected.associationId=$scope.masterId;
			var obj = $.grep($scope.companyList,function(e){return e.companyId == $scope.masterId})[0];
			$scope.showAssoSelected.associationName=obj.companyName;
		}else if($scope.type == 'Supplier'){
			$scope.showAssoSelected.associationId=$scope.child1Id;
			var obj = $.grep($scope.supplierList,function(e){return e.supplierId == $scope.child1Id})[0];
			
			$scope.showAssoSelected.associationName=obj.supplierName;
			
		}else if($scope.type == 'Division'){
			$scope.showAssoSelected.associationId=$scope.child2Id;
			var obj = $.grep($scope.divisionList,function(e){return e.divisionId == $scope.child2Id})[0];
			$scope.showAssoSelected.associationName=obj.divisionName;
		}else if($scope.type == 'Costomer'){
			$scope.showAssoSelected.associationId=$scope.child2Id;
			//$scope.showAssoSelected.associationName=
		}
		angular.copy($scope.showAssoSelected,angular.element(document.getElementById('ContactManager')).scope().showContactSelected.contactAssociationList[objIndex]);
		$modalInstance.close('');
	};
	
	$scope.cancel=function(){
		
		$modalInstance.close('');
		
	};





}]);


pharmApp.filter('supplierFilter', function() {
    return function(items, companyId){
    	if(name == undefined || companyId == undefined || items==null || companyId.companyId == undefined)
            return items;
    	else{
    		
	        var arrayToReturn = [];
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].supplierCompanyId == companyId.companyId) {
	            	//console.log(''+items[i].supplierName);
	                arrayToReturn.push(items[i]);
	            }
	        }
	        return arrayToReturn;
        }
    };
});

pharmApp.filter('divisionFilter', function() {
    return function(items, companyId){
    	if(name == undefined || companyId == undefined || items==null || companyId.companyId == undefined)
            return items;
    	else{
    		
	        var arrayToReturn = [];
	        for (var i = 0; i < items.length; i++) {
	            if (items[i].divisionCompanyId == companyId.companyId) {
	            	//console.log(''+items[i].supplierName);
	                arrayToReturn.push(items[i]);
	            }
	        }
	        return arrayToReturn;
        }
    };
});
