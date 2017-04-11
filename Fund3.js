function makePerson(name) {
  this.name = name;

  this.distance_traveled = 0;

  this.say_name = function(){
    console.log(this.name);
    return this
  }
  this.say_something = function(string) {
    console.log(this.name + "says" + string);
    return this
  }
  this.walk = function() {
    console.log('${this.name} is walking!');
    this.distance_traveled += 3;
    return this
  }
  this.run = function() {
   console.log('${this.name} is running!');
   this.distance_traveled += 10;
   return this
  }
  this.crawl = function() {
    console.log('${this.name} is crawling?');
    this.distance_traveled += 1;
    return this
  }
}


var patrick = new makePerson("Patrick");

// function ninjaConstructor(name, cohort) {
//   this.name = name;
//
//   this.cohort = cohort;
//
//   this.level = 0;
//
//   var beltArray = ["yellow", "red", "black"]
//
//   this.belt = beltArray[this.level]
//
//   this.levelUp = function() {
//     if(this.level < 2){
//       this.level += 1
//       this.belt = beltArray[this.level]
//     }
//     return this
//   }
//   return this
// }

function ninjaConstructor(name, cohort) {
  var ninja = {}

  var beltArray = ["yellow", "red", "black"]

  ninja.name = name;

  ninja.level = 0;

  ninja.cohort = cohort;

  ninja.belt = beltArray[ninja.level]

  ninja.levelUp = function() {
    if(ninja.level < 2){
      ninja.level += 1
      ninja.belt = beltArray[ninja.level]
    }
    return ninja
  }
  return ninja
}

var patrick = ninjaConstructor("Patrick", "Jan17")

patrick.levelUp()
console.log(patrick.level);
