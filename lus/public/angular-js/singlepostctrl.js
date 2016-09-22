angular.module("app").controller('allpostsCtrl', ['$scope','$http',function($scope, $http){

    $http.get('/posts').success(function(response) {

            $scope.posts = response;
        }
    );
}]))
