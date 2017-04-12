let messages = require('../controllers/message.js');
let comments = require('../controllers/comment.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		messages.show(req, res);
	});

	app.post('/create_message', function(req, res) {
		messages.create(req, res);
	});

	app.post('/create_comment', function(req, res) {
		comments.create(req, res);
	});
};