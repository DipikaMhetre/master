
pharmApp.controller('ReleaseNoteCtrl', ['$scope','$rootScope','$http','$log','$timeout','ngToast', function ($scope,$rootScope,$http,$log,$timeout,ngToast) {
	
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	$scope.init=function(){
	}	
	$scope.changeView=function(userId,token,pageId){
		
		changeView(userId,token,pageId);
		
	};
}]);