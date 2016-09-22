angular.module("app").controller('allpostsCtrl', ['$scope','$http',function($scope, $http){

    $http.get('http://laravel.dev/api/posts').success(function(response) {

            $scope.posts = response;
            console.log(response);
        }
    );
}]);
