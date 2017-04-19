var appModule = angular.module('app', ['ngRoute']);

appModule.config(function($routeProvider){
	$routeProvider
		.when('/users', {
			templateUrl: 'partials/userList.html', 
			controller: 'UsersListController'
		})
		.when('/list', {
			templateUrl: 'partials/customizeUsers.html',
			controller: 'CustomizeUsersController'
		})
		.otherwise({
			redirectTo: '/users'
		});
});

appModule.factory('userFactory', function() {
	var factory = {};
	var users = [{firstname: "arnold", lastname: "son", language: "korean"}];

	factory.giveUsers = function(callback) {
		callback(users);
	};

	factory.createUser = function(obj, callback) {
		users.push(obj);
		callback(users);
	};

	factory.deleteUser = function(obj, callback) {
		users.splice(users.indexOf(obj), 1);
		callback(users);
	};

	return factory;
});

appModule.controller('UsersListController', function($scope, userFactory) {
	$scope.users = [];

	var getUsers = function(data) {
		$scope.users = data;
	};

	userFactory.giveUsers(getUsers);
});

appModule.controller('CustomizeUsersController', function($scope, userFactory) {
	$scope.users = [];
	$scope.new_user = {};

	var getUsers = function(data) {
		$scope.users = data;
	};

	userFactory.giveUsers(getUsers);

	$scope.createUser = function() {
		userFactory.createUser($scope.new_user, getUsers);
		$scope.new_user = null;
	};

	$scope.deleteUser = function(obj) {
		userFactory.deleteUser(obj, getUsers);
	};
});
