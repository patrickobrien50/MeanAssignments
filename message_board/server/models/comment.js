const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CommentSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	comment: {type: String, required: true},
	_message: {type: Schema.Types.ObjectId, ref: "Message"}
}, {timestamps: true});

let Comment = mongoose.model('Comment', CommentSchema);