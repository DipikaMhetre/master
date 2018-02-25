pharmApp.controller('ManageFinacialYearCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.ShowContactTypeList=[];
	$scope.ShowControlpanelMiscList=[];
	$scope.recSelected=true;
	$scope.buttonText="Add";
	$scope.buttonaddText="Add";
	$scope.spinner=true;
	$scope.grid1Selected=false;
	$scope.grid2Selected=false;
	$scope.hide=false;
	$scope.Msg='OFF';
	$scope.buttonvoucherText="Add";
	$scope.FinacialYearList=[];
	$scope.FinacialYearSelected={};
	$scope.filterStatus="OFF";
	$scope.ButtonReceipt="Add";
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	
	$scope.msg1="You can not Modify/Remove This Reasons";
	$scope.init=function(){
		$scope.FinanceYearList();
		
	};
	$scope.FinanceYearList=function(){
		var json4={entity:2,listType:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiFinancialyear/getFinancialYear",
		    async:false,
		    data:JSON.stringify(json4),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				
				angular.copy(respData,$scope.FinacialYearList);
				
				angular.copy(respData[0],$scope.FinacialYearSelected);
				 if($scope.FinacialYearSelected.financialYearFlgLock==true){
					 $scope.FinacialYearSelected.financialYearFreezeCreatedByUserName="";
					 $scope.FinacialYearSelected.financialYearActiveRemark="";
					
				 }
				 else{
					 $scope.FinacialYearSelected.financialYearCreatedByUserName="";
					 $scope.FinacialYearSelected.financialYearLockRemark=""
				 }
				//$scope.FinacialYearSelected=$.grep($scope.FinacialYearList,function(e){return e.financialYearId==$scope.FinacialYearSelected.financialYearId})[0]
				
				
			}
			else{
				//alert('Purpleaid Error Manager \n'+data.responseCode);
				var msg = 'Purpleaid Error Manager \n'+data.responseCode;
				//w2ui.w2confirm(msg, function (btn) { console.log(btn); });
				w2alert(msg);
			}
			
		
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	};
	$scope.SaveYear=function(){
		var json1=angular.toJson($scope.FinacialYearSelected);
		var json={entity:1,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiFinancialyear/setFinancialYear",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				 angular.copy(returnObj,$scope.FinacialYearSelected);
				alert("Update Suuccesfully");
				//$scope.spinner=false;
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
	    }).error(function(data, status, headers, config) { 
	    	//$scope.spinner=false;
	    	return false;
	    	
	    });
		
	};
	$scope.ChangeYear=function(){
		var index=akricksGetObjIndex($scope.FinacialYearList,{financialYearId:$scope.FinacialYearSelected.financialYearId});
		angular.copy($scope.FinacialYearList[index],$scope.FinacialYearSelected);
		 if($scope.FinacialYearSelected.financialYearFlgLock==true){
			 $scope.FinacialYearSelected.financialYearFreezeCreatedByUserName="";
			 $scope.FinacialYearSelected.financialYearActiveRemark="";
			
		 }
		 else{
			 $scope.FinacialYearSelected.financialYearCreatedByUserName="";
			 $scope.FinacialYearSelected.financialYearLockRemark=""
		 }
		
	}
	
}]);