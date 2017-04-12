const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	message: {type: String, required: true},
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
}, {timestamps: true});

let Message = mongoose.model('Message', MessageSchema);