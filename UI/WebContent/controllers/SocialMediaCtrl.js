pharmApp.controller('SocialMediaCtrl', ['$scope','$window','$rootScope','$cookieStore','$modalInstance','contactSelected', function ($scope,$window,$rootScope,$cookieStore,$modalInstance,contactSelected) {
	/*$rootScope.topManu=$scope.topManu;
	$scope.userLogged={name:"Rajesh Mahale"}*/
	$scope.contact={};
	$scope.init=function(){
		$scope.contact=contactSelected;
	};
	$scope.submit=function(contact){		
		$modalInstance.close(contact);
	};
	$scope.cancel=function(){
		$modalInstance.close();
	};
	
	$scope.redirectToSocial = function(url){
         $window.open(url);/*, '_blank'*/
    };
	
}]);