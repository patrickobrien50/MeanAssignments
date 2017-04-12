const mongoose = require('mongoose');
let Message = mongoose.model('Message');

module.exports = {
	show: function(req, res) {
		Message.find({}).populate('comments').exec(function(err, messages) {
			if (err) {
				console.log("wtf nothing is showing up");
			} else {
				res.render('index', {messages});
			}
		});
	},
	create: function(req, res) {
		let message = new Message({name: req.body.name, message: req.body.message});
		message.save(function(err) {
			if (err) {
				console.log("wtf @ not creating message");	
			} else {
				res.redirect('/');
			}
		});
	}
};