angular.module('myApp').controller('postController',['fileUpload', 'fileUpload1', '$scope', '$log', '$http', '$routeParams','$location', '$window','Upload', '$timeout', function(fileUpload, fileUpload1, $scope, $log, $http, $routeParams, $location, $window, Upload, $timeout) {
	//show all posts
    if($location.path()=='/posts'){
        $http.get('/api/posts').then(function(response){
    		$scope.posts = response.data.posts;
    	})  
    }

    //create new post
    // else if($location.path()=='/posts/create'){
    // 	$http.get('/api/posts/create').then(function(response){
    // 		$scope.categories = response.data.categories;
            
    // 	})  
	   //  $scope.addnewpost = function () {
    //         var data = $.param({
    //             title: $scope.title,
    //             category_id: $scope.category_id,
    //             content: $scope.content,
    //             image: $scope.image
    //         });
    //         var config = {
    //             headers : {
    //                 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    //             }
    //         }
    //         $http.post('/posts', data, config)
    //         .success(function (data, status, headers, config) {
    //             $scope.PostDataResponse = data;
    //             $window.location.href = '#/posts';
    //         })
    //         .error(function (data, status, header, config) {
    //             if(status === 422) {
    //                 //console.log(data);
    //             }
    //             $scope.ResponseDetails = data;
    //         });
    //     }
    // }

    //create new post
    else if($location.path()=='/posts/create'){
        $http.get('/api/posts/create').then(function(response){
            $scope.categories = response.data.categories;            
        })
        $scope.customer ={};
        $scope.addnewpost = function(){
            var uploadUrl = '/posts';
            fileUpload.post(uploadUrl, $scope.customer );
        }
    }

    //show a single post
    else if($location.path()=='/posts/'+$routeParams.id){
        $http.get('/api/posts/'+$routeParams.id).then(function(response){
            $scope.post = response.data.post;
        })
        $http.get('/api/posts/'+$routeParams.id+'/edit').then(function(response){
            $scope.error = response.data.message;
        })  
    }

    //edit post
    else if($location.path()=='/posts/'+$routeParams.id+'/edit'){

        $http.get('/api/posts/'+$routeParams.id+'/edit').then(function(response){
    		$scope.post = response.data.post;
    		$scope.categories = response.data.categories;
    		$scope.error = response.data.message;
            if($scope.error){
                $window.location.href = '#/posts/'+$routeParams.id;
                alert($scope.error);
            }
    	})
    	$scope.deleteimage = function($rootScope){
    		var image = angular.element( document.querySelector( '#edit_img' ) );
         	image.remove();
         	var imagevalue = angular.element( document.querySelector( '#image_value' ) );
         	imagevalue.empty();
         	var imagevalue1 = angular.element( document.querySelector( '#image_value1' ) );
         	imagevalue1.empty();
    	}
        $scope.customer ={};
    	$scope.updatepost = function () {
            var uploadUrl = '/api/posts/'+$routeParams.id;
            fileUpload1.post(uploadUrl, $scope.customer );
        };
    }
}]);