angular.module('myApp').controller('settingsController',['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	$http.get('/api/settings').then(function(response){
		$scope.settings = response.data.user;
	})
}]);