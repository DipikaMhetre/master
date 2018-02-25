pharmApp.controller('PersonModalInstanceCtrl', ['$scope','$modalInstance','$http','$log','person', function ($scope, $http, $modalInstance, $log, person) {
	
	if (person === null) {
	    $scope.title = 'New Person';
	    $scope.person = {};
	  } else {
	    $scope.title = 'Edit Person';
	    $log.log('Edit: ', person);
	    $scope.person = person;
	  }

	  $scope.submit = function() {
	    $log.log('Edit: submit person: ' + JSON.stringify($scope.person));
	    $modalInstance.close($scope.person);
	  };

	  $scope.cancel = function() {
	    $modalInstance.dismiss();
	  };
	
}]);