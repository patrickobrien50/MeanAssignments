
  var game = {
    players: [],
    addPlayer: function(name){
      this.players.push(new playerConstructor(name));
    },
    // addRandomCardToPlayers: function(){
    //
    //   console.log(game.players[i].hand)
    }

  function playerConstructor(name){
    player = {};
    player.name = name;
      player.hand = [];
    player.addCard = function(card){
      player.hand.push(card);
    };
    return player;
  };


  $(document).ready(function(){
    //Add player button adds players if the game.players array is less than 2 objects
    $('#addPlayerButton').click(function(){
     if (game.players.length < 2) {
       game.addPlayer($('#nameField').val())
       $('#nameField').val("")
       console.log(game.players)
     } else {
       alert("Already 2 players")
     }
   });


   $('#addCardButton').click(function(){
     var index = 0;
     while(index < game.players.length){
       var url = 'http://pokeapi.co/api/v1/pokemon/' + (Math.floor(Math.random() * 721) + 1)
       $.ajax({url: url, success: function(res) {
         console.log(res['name']);
         game.players[index].hand.push(res['name'])
         console.log(game.players[index].hand)
     }})
     index += 1
   }
 });
})





// $.ajax({url: url,success: function(result){
//      console.log(result);
//      game.players[0].hand.push(result)
//      var img_url = `http://pokeapi.co${result["sprites"][0]["resource_uri"]}`
//     $.ajax({url: img_url, success: function(res){
//      var final_img_url = `http://pokeapi.co${res["image"]}`
//     $("#player1").append(`<img src="${final_img_url}">`);
//    }});
//  }});
