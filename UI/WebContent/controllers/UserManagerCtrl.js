

pharmApp.controller('UserManagerCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','ngToast', function ($scope,$rootScope,$http, $modal, $log,$timeout,ngToast) {
	
	$scope.activeUser=angular.element('*[ng-app]').injector().get("configurable");
	
	$scope.maxUsers=0;
	$scope.usersLogged=0;
	$scope.logsAvailable=0;
	$scope.lockFlag=true;
	$scope.editable=$rootScope.editable;
	$scope.init=function(){
		var config2 = {
				layout: {
					name: 'layout2',
					padding: 0,
					panels: [
					         { type: 'left', size: '100%'},
					         { type: 'main' }
					         ]
				},
				grid: { 
					name : 'grid2',
					header : 'List of Names',
					show : {
						selectColumn : true
					},
					columns : [{ field: 'recid', caption: 'ID', size: '50px', sortable: true, attr: 'align=center' },
				    	        { field: 'activeUsersUID',caption:'User Name',size: '50%' },
				    	        { field: 'activeUsersName', caption: 'User', size: '50%', sortable: true, resizable: true },
				    	        { field: 'activeUsersIpAddress',caption:'Ip Adress',size: '50%'  },
				    	        { field: 'activeUsersActiveTime',caption:'Active Time',size: '50%' },
				    	      	       
				    	        { field: 'activeUsersLoginActivity',caption:'Last Activity',size: '50%' },
				    	        
				    	        { field: 'activeUsersLoginTime',caption:'Login Time',size: '50%'}],
					records : []
				}
		}; 
		if(!$rootScope.grid2){
			loadContentGrid(config2);
		}else{
			w2ui.grid2.destroy();
			w2ui.layout2.destroy();
			loadContentGrid(config2);

		}
		
		//=======Grid load Ends
		$scope.getActiveUsers();	
	}
	
	$scope.getActiveUsers=function(){
		var json={entity:2,entityId:0,listType:1,requestData:'',userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiActiveUsers/getActiveUsers",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData.activeUsersList,w2ui.grid2.records);
				$scope.lockFlag=respData.lockFlag;
				$scope.maxUsers=respData.noOfUsers;
				$scope.usersLogged=w2ui.grid2.records.length;
				$scope.logsAvailable=Number($scope.maxUsers)-Number($scope.usersLogged);
				w2ui.grid2.refresh();
				ngToast.create({
					  className: 'success',
					  content: '<span>Data loaded sucessfully ...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
	
	}
	
	
	$scope.forceLogin=function(){
		if(w2ui.grid2.getSelection().length == 0){
			ngToast.create({
				  className: 'warning',
				  content: '<span>Please select user to logoff forcefully ...</span>',
				  timeout: 3000,
				  animation:'fade'
				});
			return false;
		}
		var users=[];
		for(i=0;i<w2ui.grid2.getSelection().length;i++){
			users.push(w2ui.grid2.get(w2ui.grid2.getSelection()[i]));
		}
		var json={entity:1,entityId:0,listType:0,requestData:JSON.stringify(users),userId:$scope.activeUser.userId,token:$scope.activeUser.token};
		//HTTP CALL FOR GETTING CompanyList enclosed division 
		$http({
		    method: 'POST',
		    url: "http://localhost:8080/Purple/rest/apiActiveUsers/setActiveUsers",
		    async:false,
		    data:JSON.stringify(json),
		    headers: {'Content-Type': 'application/json'}
		}).success(function(data, status, headers, config) {
			if(data.responseCode == 200){
				var respData=JSON.parse(data.responseData);
				angular.copy(respData.activeUsersList,w2ui.grid2.records);
				$scope.lockFlag=respData.lockFlag;
				$scope.maxUsers=respData.noOfUsers;
				$scope.usersLogged=w2ui.grid2.records.length;
				$scope.logsAvailable=Number($scope.maxUsers)-Number($scope.usersLogged);
				w2ui.grid2.refresh();
				ngToast.create({
					  className: 'success',
					  content: '<span>Selected users logged off sucessfully ...</span>',
					  timeout: 3000,
					  animation:'fade'
					});
			}else{
				alert('Purpleaid Error Manager \n'+data.responseCode);
			}
        }).error(function(data, status, headers, config) {          
        	return false;
        });
		
	};
	
	$scope.lock=function(){
		
	};
	
	
}]);