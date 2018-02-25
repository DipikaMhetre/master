pharmApp.controller('ControlPanelMiscellaneousCtrl', ['$scope','$rootScope','$http','$compile', function ($scope,$rootScope,$http,$compile) {
	
	
	 $scope.showReason=false;
	 $scope.showFinance=false;
	 $scope.showNarration=false;
	 $scope.showReciept=false;
	 $scope.spinner=true;
	 $scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	 $scope.contactyType='';
	 $scope.editable=$rootScope.editable;
	 $scope.init=function(){
		 $scope.spinner=false;


	 };
	 
	 $scope.callWidget=function(pageId,path){
		if(path == '' && pageId==0){
			return '';
		}
	
		 var str="ViewSwitcher?pageId="+pageId+"&userId="+$scope.activeUser.userId+"&token="+$scope.activeUser.token+"&type="+path;
		 return str;
	 };
	
	$scope.activateContactType=function(pageId,path,parentId){
		 /*var html = angular.element("<div ng-include src =\"'partials/utility/contactyType.jsp'\"></div>");
		  //var html="<p>Template:</p>"
		 //angular.element(document..getElementById('#contact')).append ('<div  ng-include="'partials/utility/contactyType.jsp'"></div>' )
		 var x=angular.element(html);
		 var templateGoesHere = angular.element(document.getElementById('templateGoesHere'));
		 iElement.append(x);
		  //$scope.$apply();
		 */	
		
		var templateElement = angular.element("<div ng-include=\"callWidget("+pageId+",'"+path+"')\">");
		//angular.element(document.getElementById('#templateGoesHere')).append (html);
		 //$compile("<div ng-include src =\"'partials/utility/contactyType.jsp'\"></div>");
		 
		 
		/* var templateElement = angular.element('<p>{{total}}</p>'),*/
		    scope = $scope;

		var clonedElement = $compile(templateElement)(scope, function(clonedElement, scope) {
			$('#'+parentId).append(clonedElement);
		  //attach the clone to DOM document at the right place
		});
		}
/*	$scope.contactyType='partials/utility/contactyType.jsp';*/
	
}]);