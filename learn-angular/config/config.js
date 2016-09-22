angular.module('myApp').config(function ($routeProvider, $locationProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'pages/index.html',
		controller: 'indexController'
	})
	.when('/login',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/register',{
		templateUrl: 'pages/register.html',
		controller: 'registerController'
	})
	.when('/password/reset',{
		templateUrl: 'pages/email.html',
		controller: 'emailController'
	})
	.when('/password/reset/:id',{
		templateUrl: 'pages/reset.html',
		controller: 'resetController'
	})
	.when('/home',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/home.html',
		controller: 'homeController'
	})
	.when('/about',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/about.html',
		controller: 'aboutController'
	})
	.when('/posts',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/posts.html',
		controller: 'postController'
	})
	.when('/posts/create',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/create.html',
		controller: 'postController'
	})
	.when('/posts/:id',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/show.html',
		controller: 'postController'
	})
	.when('/posts/:id/edit',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/edit.html',
		controller: 'postController'
	})
	.when('/settings',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/settings.html',
		controller: 'settingsController'
	})
	.when('/settings/edit',{
		resolve: {
			'check': check
		},
		templateUrl: 'pages/settingsedit.html',
		controller: 'settingsController'
	})
	.otherwise({
		redirectTo: '/'
	})
});

function check($location,$rootScope){
	if(!$rootScope.loggedIn && localStorage.getItem('email') == null){
		$location.path('/login');
	}
}