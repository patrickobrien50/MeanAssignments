const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function Route(app) {
	app.get('/', function(req, res) {
		res.render("index");
	});

	app.post('/postquote', function(req, res) {
		var quote = new Quote();
		quote.quote = req.body.quote;
		quote.name = req.body.name;
		quote.likes = 0;
		console.log(quote);
		quote.save(function(error) {
			if (error) {
				console.log("wtf");
			} else {
				console.log("not wtf");
				res.redirect("/quotes");		
			}
		});
	});

	app.post('/like', function(req, res) {
		Quote.update({_id: req.body.quote_id}, {$inc: {likes: 1}}, function(error, quote) {
			if(error){
				console.log("There was an error")
			} else {
				res.redirect("/quotes")
			}
		});
	});
//doesn't work ^
	// 	Quote.findOne({_id: req.body.quote_id}, function(error, quote) {
	// 			if (error) {
	// 				console.log("wtf");
	// 			} else {
	// 				quote.likes++;
	// 				quote.save(function(error) {
	// 					if(error){
	// 						console.log("Errorroroorororor")
	// 					} else {
	// 						console.log("not wtf");
	// 						res.redirect("/quotes");
	// 					}
	// 				}
							
	// 			});
	// 		});
	// 	};
	// });

	app.get('/quotes', function(req, res) {
		Quote.find({}, function(error, quotes) {
			res.render("quotes", {quotes});
		}).sort("-likes");
	});

};