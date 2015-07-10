var LinkedList = require("./linked-list.js");
var DoublyLinkedList = require("./doubly-linked-list.js");
var CircularLinkedList = require("./circular-linked-list.js");

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

console.log("<----- CIRCULAR LINKED LIST ----->");
var cities = new CircularLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "head");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();