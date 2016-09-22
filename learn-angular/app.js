var app = angular.module('myApp', ['ngRoute','ngFileUpload']);
app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
app.service('fileUpload', ['$http','$window', function ($http, $window) {
    this.post = function(uploadUrl,data){
        var fd = new FormData();
        for(var key in data)
        fd.append(key, data[key]);
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data, status, headers, config){
        	this.PostDataResponse = data;
            $window.location.href = '#/posts';
        })
        .error(function(data, status, headers, config){
        	if(status === 422) {
                //console.log(data);
            }
            return this.ResponseDetails = data;
            //console.log(data);
        });
    }
}]);
app.service('fileUpload1', ['$http','$window', function ($http, $window) {
    this.post = function(uploadUrl,data){
    	console.log(data);
        var fd = new FormData();
        for(var key in data)
        fd.append(key, data[key]);
        $http.put(uploadUrl, fd, {
            stransformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(data, status, headers, config){
        	this.PostDataResponse = data;
            $window.location.href = '#/posts';
        })
        .error(function(data, status, headers, config){
        	if(status === 422) {
                //console.log(data);
            }
            return this.ResponseDetails = data;
            //console.log(data);
        });
    }
}]);


