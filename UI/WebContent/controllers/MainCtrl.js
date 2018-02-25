pharmApp.controller('MainCtrl', ['$scope','$rootScope','$cookieStore','$http', function ($scope,$rootScope,$cookieStore,$http) {
	/*$rootScope.topManu=$scope.topManu;
	$scope.userLogged={name:"Rajesh Mahale"}*/
	$scope.user={};
	$scope.init=function(){
		$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
		$scope.user={userId:'Satyajit',userName:'Satyajit Toradmal',userSoftwareType:'Purpleaid Wholesale',userSoftwareVersion:'U1.0.002',userFirm:'HS Pharma,Ahmednagar'};
	
		//Username used in Creditnote product created b
		$rootScope.editable=true;
		
	};
	$scope.changeView=function(userId,token,pageId){
		
		changeView(userId,token,pageId);
		
	};
	$scope.Logout=function(uId,token){
		
		var json={entity:4,userId:uId/*$scope.activeUser.userId*/,token:token/*$scope.activeUser.token*/};
		   $http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiPurpleaidACL/setPurpleaidACL",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		   }).success(function(data, status, headers, config) {
		    if(data.responseCode == 200){
		    	a=history.length
		    	 history.go(-a);
		    	window.location.assign("http://localhost:8080/UI"); 
		    	
		    
		    }else{
		     alert('Purpleaid Error Manager \n'+data.responseCode);
		    }
		   }).error(function(data, status, headers, config) {          
		    return false;
		   }); 
	};
	
}]);

function akricksGetObjIndex(source,criteria){

	var reultArray=akricksFilter(source,criteria);
	n=reultArray.length;
	if(n>1){
		return -2; 
	}else if(n==1){
		return source.indexOf(reultArray[0]); 
	}else if(n==0){
		return -1;
	}
};

function akricksFilter(source, criteria) {
	return source.filter(function(obj) {
		return Object.keys(criteria).every(function(c) {
			return obj[c] == criteria[c];
		});
	});
};

function purpleToDecimal(num){
	var n=Number(num);
	n = n.toFixed(2); 
	return Number(n);
}
