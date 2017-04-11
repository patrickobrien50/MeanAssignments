function VehicleConstructor(name, numberOfWheels, numberOfPassengers, speed){

  var self = this;
  this.name = name;
  this.numberOfWheels = numberOfWheels;
  this.numberOfPassengers = numberOfPassengers;

  this.speed = speed;

  this.makeNoise = function(){

  };

  var distance_traveled = 0;

  function updateDistanceTravelled(){
    distance_traveled += self.speed
    console.log(distance_traveled);
  }

  this.move = function() {
    updateDistanceTravelled()
    this.makeNoise()
  }

  this.checkMiles = function(){
    console.log(distance_traveled);
  }

}

var bike =new VehicleConstructor("Bike", 2, 1, 5)

bike.makeNoise = function(){
  console.log("Ring, Ring!")
}
bike.makeNoise()

var Sedan =new VehicleConstructor("Sedan", 4, 2, 50)

Sedan.makeNoise = function(){
  console.log("Honk, Honk!");
}
Sedan.makeNoise()

var Bus =new VehicleConstructor("Bus", 4, 1, 30)

Bus.pickUp = function(num){
  this.numberOfPassengers += num
}

Bus.pickUp(4)
Bus.move()
Bus.move()
Bus.checkMiles()

console.log(Bus.numberOfPassengers);
