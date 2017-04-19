appModule.controller('TeamsController', function($scope, TeamFactory) {
	$scope.teams = [];
	$scope.new_team = {};

	function getTeams(data) {
		$scope.teams = data;
	};

	TeamFactory.giveTeams(getTeams);

	$scope.createTeam = function() {
		TeamFactory.createTeam($scope.new_team, getTeams);
		$scope.new_team = null;
	};

	$scope.deleteTeam = function(obj) {
		TeamFactory.deleteTeam(obj, getTeams);
	};
});