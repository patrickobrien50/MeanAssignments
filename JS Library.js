

function multiplyByTen(num){
  num *= 10
  console.log(num)
  return num;
}

function even(num){
  if(num % 2 === 0){
    return true
  }
}

var arr = [10,2,2,3,4,5,6]

var _ = {
    each: function(arr, callback){
      for(var i = 0; i < arr.length; i++){
        callback(arr[i]);
      }
    },

    map: function(arr, callback){
      var newarr = []
      for(var i = 0; i < arr.length; i++){
        newarr.push(callback(arr[i]));
      }
      console.log(newarr)
      return newarr;
    },

    find: function(list, callback){
      for(var i = 0; i < list.length; i++){
        if(callback(list[i])){
          return list[i]
        }
      }
      return false
    },

    reduce: function(list, callback, memo){
      if(typeof(callback) === 'function'){
        if(memo == undefined){
          var start = 1;
          memo = arr[0]
        } else{
          var start = 0;
        }
        for(var i = start; i < list.length; i++){
          memo = callback(memo, list[i])
        }
    }
    return memo;
  },

  filter: function(list, callback){
    var newarr = [];
    for(var i = 0; i < list.length; i++){
      if(callback(list[i])){
        newarr.push(list[i])
      }
      return newarr
    }
    return false
  },

  reject: function(list, callback){
    var newarr = [];
    for(var i = 0; i < list.length; i++){
      if(callback(list[i])){
        newarr.push(list[i])
      }
    }
    return false
  }
 }


 _.each(arr, multiplyByTen)
 _.map(arr, multiplyByTen)
 console.log(_.reject(arr, even))
 console.log(_.find(arr, even))
 console.log(_.reduce([1,2,3,4], function(memo, num){return memo + num}, 5));
