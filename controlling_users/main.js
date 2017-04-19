var appModule = angular.module('app', []);
appModule.controller('userController', function($scope) {
	$scope.users = [];
	$scope.sort = 'first_name'

	$scope.submit = function () {
		var newuser = {};
		newuser.first_name = $scope.first_name;
		newuser.last_name = $scope.last_name;
		newuser.fav_lang = $scope.fav_lang;
		newuser.created_at = new Date();
		$scope.users.push(newuser);
	};

	$scope.delete = function(user) {
		$scope.users = $scope.users.filter(function(obj) {
			return obj !== user;
		});
	};
});
