appModule.controller('PlayersController', function($scope, PlayerFactory) {
	$scope.players = [];
	$scope.new_player = {};

	function getPlayers(data) {
		$scope.players = data;
	};

	PlayerFactory.givePlayers(getPlayers);

	$scope.createPlayer = function() {
		PlayerFactory.createPlayer($scope.new_player, getPlayers);
		$scope.new_player = null;
	};

	$scope.deletePlayer = function(obj) {
		PlayerFactory.deletePlayer(obj, getPlayers);
	};
});