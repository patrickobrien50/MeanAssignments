function XY(x, y) {
  var sum = 0
  if( x < y ){
    for(var i = x; i < y; i++){
      sum += i
    }
  } else {
    return false
  }
  console.log(sum);
}

function minVal(arr) {
  var min
  for( var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }
}

function avgVal(arr) {
  var sum = 0
  for( var i = 0; i < arr.length; i++){
    sum += arr[i]
    }
    return sum/arr.length
  }


var person = {
  name : "Patrick",
  distance_traveled: 0,
  say_name: function(){
    console.log(person.name);
    return person
  },
  say_something: function(string) {
    console.log(person.name + "says" + string);
    return person
  },
  walk: function() {
    console.log('${person.name} is walking!');
    person.distance_traveled += 3;
    return person
  },
  run: function() {
   console.log('${person.name} is running!');
   person.distance_traveled += 10;
   return person
  },
  crawl: function() {
    console.log('${person.name} is crawling?');
    person.distance_traveled += 1;
    return person
  }
}
person.say_name()
