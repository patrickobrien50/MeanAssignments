var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');   //creates an object contructor to use in the process of making a friend object.

module.exports = {
  index: function(req, res){                   //takes the request and response data and performs the index function. index()
    Friend.find({}, function(err, friends) {   //makes a query to the database and finds all the objects currently stored in it.
      console.log(req.body);                   //then uses an anonymous function as a callback to handle the data we get back from the query.
      if (!err) {                              //If there is an error, we handle it, else we send the friends we got to the factory.
        res.json({message: "Success", friends: friends});
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },

  findOne: function(req, res) {
    var id = req.params.id;
    console.log("this is some id maybe:", req.params.id);
    Friend.findOne({_id: id}, function(err, friend) {
      if (!err) {
        res.json({message: "Success", friend: friend});
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },

  create: function(req, res){                     //takes the request data and creates a new Friend object and assigns the attributes we sent in the request
    var friend = new Friend();                    //by using body-parser and parsing the data so we can access each individual piece.
    friend.first_name = req.body.first_name;
    friend.last_name = req.body.last_name;
    friend.birthday = req.body.birthday;
    friend.save(function(err) {                   //performs a built in method for objects called save(). This takes an anonymous function for a callback
      if (!err) {                                 //and saves the friend object into the database. 
        res.json({message: "Success", friend: friend});
      } else {
        res.json({message: "Error", error: err});
      }
    })
  },
  update: function(req, res){
    // console.log('we are at freinds.js')
    console.log(req.body);
    var id = req.params.id;
    Friend.findOne({_id: id}, function(err, friend) {
      friend.first_name = req.body.first_name;
      friend.last_name = req.body.last_name;
      friend.birthday = req.body.birthday;
      friend.save(function(err) {
        if (!err) {
          res.json({message: "Success", friend: friend});
        } else {
          res.json({message: "Error", error: err});
        }
      })
    })
  },
  delete: function(req, res){
    var id = req.params.id;
    Friend.remove({_id: id}, function(err, friends) {
      if (!err) {
        res.json({message: "Success"});
      } else {
        res.json({message: "Error", error: err});
      }
    });
  }
}
