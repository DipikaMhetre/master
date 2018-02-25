pharmApp.controller('ResetpwdCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.showUserId={};
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	
	$scope.ShowPwdSelected={};
	$scope.init=function(){
		$scope.reqdata=angular.element(document.getElementById('MyProfileManager')).scope();
			angular.copy($scope.reqdata.ShowUserId,$scope.showUserId);
	};
	$scope.submit=function(){
		a=ResetPwdValidation();
		 if(a==false){
			 return false;
		 }
		 if(angular.element(document.getElementById('resetpwd')).scope().ShowNewPwd==$scope.ShowPwdSelected.contactUserPassward){
			 
					var json1=angular.toJson($scope.ShowPwdSelected);
		 }
		 else{
			 alert("Old and New Password Does not match");
		 }
		var json={entity:2,isMyProfileSetUser:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,requestData:json1};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiMyProfile/setMyProfile",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				   if(returnObj.outputStatus==1){
					   alert("Old Password is Wrong");
					   return false;
				   }
				   else{
					   alert("Password Updated...");
					   ngToast.create({
							  className: 'success',
							  content: '<span>Delete successfull...!</span>',
							  timeout: 3000,
							  animation:'fade'
							});
				   }
				$scope.spinner=false;
				 $scope.cancel();
			
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
				//$scope.spinner=false;
			}
        }).error(function(data, status, headers, config) { 
        	//$scope.spinner=false;
        	return false;
        	
        });
	};
  $scope.cancel = function() {
		
		$scope.$dismiss('cancel');
	};
}]);
function ResetPwdValidation(){
	flag=true;
	if($.trim($('#old_pwd').val()).length==0){
		  $("#old_pwd").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#new_pwd').val()).length==0){
		  $("#new_pwd").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#con_pwd').val()).length==0){
		  $("#con_pwd").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	return flag;
}