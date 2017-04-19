appModule.factory('PlayerFactory', function() {
	var factory = {};
	var players = [];

	factory.givePlayers = function(callback) {
		callback(players);
	};

	factory.createPlayer = function(obj, callback) {
		players.push(obj);
		callback(players);
	};

	factory.deletePlayer = function(obj, callback) {
		players.splice(players.indexOf(obj), 1);
		callback(players);
	};

	factory.assignTeam = function(playerIdx, team, callback) {
		players[playerIdx].team = team;
		callback(players);
	};

	factory.leaveTeam = function(obj, callback) {
		players[players.indexOf(obj)].team = "";
		callback(players);
	};
	return factory;
});