var app = angular.module('textSupportApp', ['ui.router', 'firebase']);

app.config('Routes', function($stateProvider, $urlRouterProvider, $httpProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'homeTempl.html',
			controller: 'mainCtrl',
		})
		.state('support', {
			url: '/support',
			templateUrl: 'supportTempl.html',
			controller: 'supportCtrl', 
		})
})