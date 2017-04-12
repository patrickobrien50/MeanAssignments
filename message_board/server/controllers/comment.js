const mongoose = require('mongoose');
let Comment = mongoose.model('Comment');
let Message = mongoose.model('Message');

module.exports = {
	create: function(req, res) {
		Message.findOne({_id: req.body.message_id}, function(err, message) {
			let comment = new Comment({name: req.body.name, comment: req.body.comment, _message: req.body.message_id});
			comment.save(function(err) {
				if(err) {
					console.log("wtf @ creating comment");
				} else {
					message.comments.push(comment._id);
					message.save(function(err) {
						if (err) {
							console.log("wtf @ saving comment to message");
						} else {
							res.redirect('/');		
						}
					})
				}
			});
		});
	},

};