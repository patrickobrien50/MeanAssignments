var friends = require('../controllers/friends.js'); //makes an instance of the friends controller to access and send requests to.

module.exports = function(app){
	app.get('/friends', function(req, res) {   //Performs a get request to the route at '/friends' and performs the controllers 'index'
	  friends.index(req, res);                 //function via dot notation and sends the request and response data with it.
	});
	app.get('/show/:id', function(req, res) {	//Performs a get request similar to the one at the '/friends' route but is instead passing request params data
	  friends.show(req, res);									//to the controller with the syntax '/ROUTENAME/:PARAMETERNAME'. The colon indicates it is a request parameter.
	});																				//Then goes to the controller and performs the show funciton.
	app.post('/friends', function(req, res) {
	  friends.create(req, res);								//Performs a post request using the data passed from the friends controller. In that request body are attributes that the controller
	});																				//will use to create an object using the controllers create function.
	app.get('/friends/:id', function(req, res) {
		friends.findOne(req, res);							//Not sure what this one does yet.
	});
	app.put('/friends/:id', function(req, res) {
	  friends.update(req, res);								//Performs a put request which is a request that refers to an existing object in the database. Used to update
	});																				//existing objects.
	app.post('/friends/:id', function(req, res) {
	  friends.delete(req, res);								//Performs a post request using the request parameter 'id' to find the specific object in the database.
	});																				//Then performs the controllers delete function using that data. 
};
