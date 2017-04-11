
// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"].
// Log each value. Add a new value (100) in the array x using a push method.
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x.
// Log x in the console and analyze how x looks now.
// Create a simple for loop that sums all the numbers between 1 to 500.
// Have console log the final sum. Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it.
// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it.


var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]

for(var i= 0; i < x.length; i++){
  console.log(x[i])
}

x.push(100)

x.push(["hello", "world", "JavaScript is Fun"])

console.log(x)

var sum = 0

for(var i = 0; i <= 500; i++){
  sum += i
}

console.log(sum)

sum = 0

var arr = [1, 5, 90, 25, -3, 0]

var min

for(var i= 0; i < arr.length; i++){
  if(arr[i] < min || min == undefined){
    min = arr[i]
  }
  sum += arr[i]

}
console.log("Average:" + sum/arr.length, "Minimum:" + min)

var newNinja = {
 name: 'Jessica',
 profession: 'Coder',
 favorite_language: 'JavaScript', //like that's even a question!
 dojo: 'Dallas'
}

for(key in newNinja){
  console.log(key, newNinja[key])
}
