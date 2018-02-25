


pharmApp.controller('CMImageUploadCtrl', ['$scope','$rootScope','$http','$modal','$log','$timeout','Upload', function ($scope,$rootScope,$http, $modal, $log,$timeout,Upload) {
	$scope.contact={};
	$scope.confirmPass='';
	$scope.showContactSelected=angular.element(document.getElementById('ContactManager')).scope().showContactSelected;
	
	
	$scope.init=function(){
		angular.copy(angular.element(document.getElementById('ContactManager')).scope().showContactSelected,$scope.contact);
		$scope.confirmPass=angular.copy($scope.contact.contactUserPassward,$scope.confirmPass);
		angular.element(document.getElementById('UserSettingsPopup')).scope().$apply();
	}
	
	$scope.submit=function(){
		$('#myimg').attr('src',$('#blah').attr('src'));
		//$scope.upload($scope.picFile);
		
			//HTTP CALL FOR GETTING CompanyList enclosed division 
			/*$http({
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
	        });*/
		$scope.$close('');
	}
	$scope.cancel=function(){
		$scope.$close('');
	}
	
	
	$scope.upload = function (files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                Upload.upload({
                    url: 'http://localhost:8080/Purple/rest/apiPeople/uploadPeople',
                    /*fields: {
                        'username': $scope.username
                    },*/
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    $scope.log = 'progress: ' + progressPercentage + '% ' +
                                evt.config.file.name + '\n' + $scope.log;
                }).success(function (data, status, headers, config) {
                    $timeout(function() {
                        $scope.log = 'file: ' + config.file.name + ', Response: ' + JSON.stringify(data) + '\n' + $scope.log;
                    });
                });
            }
        }
    };
	
	
}]);

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
            $('#blah1')
            .attr('src', e.target.result)
            .width(65)
            .height(65);
            
        };

        reader.readAsDataURL(input.files[0]);
    }
}