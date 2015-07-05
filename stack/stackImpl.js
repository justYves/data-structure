var Stack = require("./stack.js");

//Exercice 1
//An example of a real-world stack is a Pez dispenser. Imagine that your virtual Pez dispenser is filled with red, yellow, and white colors and you don’t like the yellow ones. Write a program that uses a stack (and maybe more than one) to remove the yellow ones without changing the order of the other candies in the dispenser.

var dispenser = ["yellow", "red", "yellow", "white", "white", "red", "red", "white"];

console.log("dispenser: " + dispenser);

var dispenserStack = new Stack();

for (var i = dispenser.length - 1; i >= 0; i--) {
  if (dispenser[i] != "yellow") {
    dispenserStack.push(dispenser[i]);
  }
}

while (dispenserStack.length() > 0) {
  console.log(dispenserStack.pop());
}