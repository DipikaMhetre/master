pharmApp.controller('LoginCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','$route', function ($scope,$rootScope,$http, $modal, $log,$timeout,$route) {
	$rootScope.userLogged=false;
	$scope.user={};
	$scope.userLogged=false;
	$scope.init=function(){/*alert('lol')*/};
	$scope.login=function(){
		if($scope.user.userId == ''){
			alert('Please enter userId!!');
			return false;
		}
		if($scope.user.userPwd == ''){
			alert('Please enter Password!!');
			return false;
		}
		var json1=JSON.stringify($scope.user);
		var json={entity:2,entityId:0,listType:2,requestData:json1,userId:10,tokenId:1};
		
		//HTTP CALL FOR GETTING COMPANYLIST AND SUPPLIERLIST
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiUser/login",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				
				debugger;
				$rootScope.userLogged=user;
				//$scope.user=user;
				$scope.userLogged=true;
				$route.resolve("/home");
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
				
		
		
	}
}]);	