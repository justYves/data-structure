var LinkedList = require("./linked-list.js");
var DoublyLinkedList = require("./doubly-linked-list.js");

console.log("<----- LINKED LIST ----->");

var cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "head");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

console.log("<----- DOUBLY LINKED LIST ----->");
var cities = new DoublyLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "head");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.displayReverse();

