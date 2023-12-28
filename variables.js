let name = "John";
// create a variable that can be reassigned
let count = 10;
count = 0;
console.log(count); // 0
// create a variable that cannot be reassigned

let PI = 3.14;
console.log(PI); // 3.14

// create a variable that can be accessed outside the current scope

var myVar = "I am global";
function someFunction() {
  console.log(myVar); // I am global
}
someFunction();
