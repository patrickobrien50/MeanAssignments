var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true, minlength: 3},
	last_name: {type: String, required: true, minlength: 3},
	birthday: Date
});

var Friend = mongoose.model('Friend', FriendSchema);