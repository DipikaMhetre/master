pharmApp.controller('MydeatailsPopupCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	$scope.Showcontactselected={}
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");

	$scope.init=function(){
		$scope.contactNameTitles=[{id:0,name:'Mr.'},{id:1,name:'Mrs.'},{id:2,name:'Miss.'}];
		$scope.reqdata=angular.element(document.getElementById('MyProfileManager')).scope();
		angular.copy($scope.reqdata.MyProfile[0],$scope.Showcontactselected);
		
		
	};
	$scope.submit=function(){
		a=MydetailsValidation();
		  if(a==false){
			  return false;
		  }
		 
		  var obj={contactNameTitle:$scope.Showcontactselected.contactNameTitle,contactFirstName:$scope.Showcontactselected.contactFirstName,contactMiddleName:$scope.Showcontactselected.contactMiddleName,contactLastName:$scope.Showcontactselected.contactLastName,contactjobTitle:$scope.Showcontactselected.contactjobTitle,contactOrganization:$scope.Showcontactselected.contactOrganization}
		var json1=angular.toJson(obj);
		  var json={entity:1,userId:$scope.activeUser.userId,token:$scope.activeUser.token,requestData:json1};
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiMyProfile/setMyProfile",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var returnObj=JSON.parse(data.responseData);
				
				angular.copy(returnObj,$scope.reqdata.ShowContactSelected);
				$scope.id=$scope.reqdata.ShowContactSelected.contactNameTitle
				$scope.name=$scope.contactNameTitles[$scope.id].name;
				$scope.reqdata.showname=''+$scope.name+''+$scope.reqdata.ShowContactSelected.contactFirstName+' '+$scope.reqdata.ShowContactSelected.contactMiddleName+' '+$scope.reqdata.ShowContactSelected.contactLastName+''
				alert("Save Suceesfully");
				$scope.cancel();
			
				
				$scope.spinner=false;
				
			
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
function MydetailsValidation(){
	flag=true;
	if($.trim($('#firstname').val()).length==0){
		  $("#firstname").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#middlename').val()).length==0){
		  $("#middlename").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#lastname').val()).length==0){
		  $("#lastname").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#jobtitile').val()).length==0){
		  $("#jobtitile").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	if($.trim($('#organaisation').val()).length==0){
		  $("#organaisation").css("background-color", "#fff4eb");
		  //create error message using tooltip
		  flag=false;
		 }
	return flag;
}