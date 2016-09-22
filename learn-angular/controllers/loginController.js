angular.module('myApp').controller('loginController',['$scope', '$routeParams','$location', '$rootScope', function($scope, $routeParams, $location, $rootScope) {
	$scope.submit = function() {
    	if($scope.email == 'admin@gmail.com' && $scope.password == 'admin'){
    		localStorage.setItem('email', 'admin@gmail.com');
    		console.log(localStorage);
    		$rootScope.loggedIn = true;
    		$location.path('/home');
    	} else{
    		alert("wrong!!!");
    	}
  	};
  	$scope.logout = function() {
        localStorage.clear();
        //console.log(localStorage);
    };
    $scope.checkStorage = function ()
	{
	   return localStorage.getItem('email') !== null;
    };
    $scope.isCurrentPath = function (path) {
      return $location.path() == path;
    };
    $scope.id = $routeParams.id;//????????
}]);