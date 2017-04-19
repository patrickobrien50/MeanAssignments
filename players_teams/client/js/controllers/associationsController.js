appModule.controller('AssociationsController', function ($scope, TeamFactory, PlayerFactory) {
	$scope.players = [];
	$scope.teams = [];

	function getPlayers(data) {
		$scope.players = data;
	};
	PlayerFactory.givePlayers(getPlayers);

	function getTeams(data) {
		$scope.teams = data;
	};
	TeamFactory.giveTeams(getTeams);

	$scope.assignTeam = function() {
		PlayerFactory.assignTeam($scope.selected_player, $scope.selected_team, getPlayers);
	};

	$scope.leaveTeam = function(player) {
		PlayerFactory.leaveTeam(player, getPlayers);
	};
});