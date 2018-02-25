
pharmApp.controller('UserSettingsCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout', function ($scope,$rootScope,$http, $modal, $log,$timeout) {
	$scope.contact={};
	$scope.confirmPass='';
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.showContactSelected=angular.element(document.getElementById('ContactManager')).scope().showContactSelected;
	
	
	$scope.init=function(){
		angular.copy(angular.element(document.getElementById('ContactManager')).scope().showContactSelected,$scope.contact);
		$scope.confirmPass=angular.copy($scope.contact.contactUserPassward,$scope.confirmPass);
		angular.element(document.getElementById('UserSettingsPopup')).scope().$apply();
	}
	
	$scope.submit=function(){
		if($scope.confirmPass != $scope.contact.contactUserPassward){
			alert('Password and confirmation password doesnt match !');
			return false;
		}
		
		if($scope.contact.contactUserPassward != $scope.showContactSelected.contactUserPassward || $scope.contact.contactUserName != $scope.showContactSelected.contactUserName || $scope.contact.contactUserLock != $scope.showContactSelected.contactUserLock){
			
			var json1=JSON.stringify($scope.contact);
			var json={entity:2,entityId:0,listType:0,requestData:json1,userId:$scope.activeUser.userId,token:$scope.activeUser.token};
			//HTTP CALL FOR GETTING CompanyList enclosed division 
			$http({
			    method: 'POST',
			    url: "http://localhost:8080/Purple/rest/apiPeople/setPeople",
			    async:false,
			    data:JSON.stringify(json),
			    headers: {'Content-Type': 'application/json'}
			}).success(function(data, status, headers, config) {
				if(data.responseCode == 200){
					var respData=JSON.parse(data.responseData);
					angular.copy(respData,angular.element(document.getElementById('ContactManager')).scope().showContactSelected);
					
					$scope.$close('');
					
					//$scope.onCompanySelection($scope.showCompanyList[0]);
				}else{
					alert('Purpleaid Error Manager \n'+data.responseCode);
				}
	        }).error(function(data, status, headers, config) {          
	        	return false;
	        });
		}else{
			$scope.$close('');
		}
	}
	$scope.cancel=function(){
		$scope.$close('');
	}
	
	
}]);