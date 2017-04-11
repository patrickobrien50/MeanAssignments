function runningLogger() {
  console.log("I am running");
}
function multiplyByTen(num) {
  return num * 10
}
function returnString1() {
  return "String 1"
}
function returnString2() {
  return "String 2"
}
function caller(param) {
  if (typeof(param) == "function"){
    param();
    console.log("calling")
  }
}
caller(runningLogger);

function DoubleConsoleLog(param1, param2) {
  if(typeof(param1) == "function" && typeof(param2) == "function"){
    console.log(param1());
    console.log(param2());
    console.log("I was right!")
  }
}

DoubleConsoleLog(returnString2, returnString1)

function caller2(param) {
  console.log("Starting")
  setTimeout(function() {
    if (typeof(param) == "function"){
      param()
    }
  },2000);
  console.log("Ending?!");
  return "Interesting"
}

caller2(runningLogger)
