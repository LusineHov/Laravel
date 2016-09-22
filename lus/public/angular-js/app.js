var app = angular.module("app", ['ui.router', 'ngResource', 'infinite-scroll', 'monospaced.elastic']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('index', {
      url: '/posts',
      templateUrl: '/views/posts/index.blade.php',
      controller: 'allpostsCtrl'
    })
    .state('show', {
      url: '/posts/?params',
      templateUrl: '/views/posts/show.blade.php',
      controller: 'singlepostCtrl'
    })
    .state('create', {
      url: '/posts/create',
      templateUrl: '/views/posts/create.blade.php',
      controller: 'createpostCtrl'
    })
    .state('edit', {
      url: '/posts/?params/edit',
      templateUrl: '/views/posts/edit.blade.php',
      controller: 'editpostCtrl'
    });

  // default route
  $urlRouterProvider.otherwise('/posts');
});

app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});