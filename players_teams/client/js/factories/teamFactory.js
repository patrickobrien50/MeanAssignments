appModule.factory('TeamFactory', function() {
	var factory = {};
	var teams = [];

	factory.giveTeams = function(callback) {
		callback(teams);
	};

	factory.createTeam = function(obj, callback) {
		teams.push(obj);
		callback(teams);
	};

	factory.deleteTeam = function(obj, callback) {
		teams.splice(teams.indexOf(obj), 1);
		callback(teams);
	};

	return factory;
});