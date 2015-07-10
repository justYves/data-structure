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
console.log();


// Exercice 1.
// Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
//
// Exercice 2.
// Implement the back(n) function so that when executed, the current node is moved n spaces backward in the list.
//
// Exercice 3.
// Implement the show() function, which displays the data associated with the current node.

console.log("<---- Exercice 1 2 and 3 ---->");

DoublyLinkedList.prototype.advance = function(n) {
  this.currentNode = this.currentNode || this.head;
  while (n > 0 && this.currentNode.next) {
    this.currentNode = this.currentNode.next;
    n--;
  }
  return this.currentNode;
};

DoublyLinkedList.prototype.back = function(n) {
  this.currentNode = this.currentNode || this.head;
  while (n > 0 && this.currentNode.previous) {
    this.currentNode = this.currentNode.previous;
    n--;
  }
  return this.currentNode;
};

DoublyLinkedList.prototype.show = function() {
  console.log(this.currentNode.value);
};

var people = new DoublyLinkedList();
people.currentNode = people.head;
people.insert("Albert", "head");
people.insert("Beatrix", "Albert");
people.insert("Charlie", "Beatrix");
people.insert("Dean", "Charlie");
people.insert("Erica", "Dean");
console.log(people);
people.display();
people.show();
people.advance(4);
people.show();
people.back(2);
people.show();
console.log();

//Exercice 4:
//According to legend, the first-century Jewish historian Flavius Josephus was about to be captured along with a band of 40 compatriots by Roman soldiers during the Jewish-Roman War. The Jewish soldiers decided that they preferred suicide to being captured and devised a plan for their demise. They were to form a circle and kill every third soldier until they were all dead. Josephus and one other decided they wanted no part of this and quickly calculated where they needed to place themselves so they would be the last survivors. Write a program that allows you to place n people in a circle and specify that every mth person will be killed. The program should determine the number of the last two people left in the circle. Use a circularly linked list to solve the problem.

console.log("<---- Exercice 4 ---->");
var army = new CircularLinkedList();
army.currentNode = army.head;
var armySize = 40;
while (armySize > 0) {
  army.insert(armySize, army.currentNode.value);
  armySize--;
}
army.display();

var armySize = 40;
var i = 1;
while (armySize > 2) {
  if (army.currentNode.value === "head") {
    army.currentNode = army.currentNode.next;
  }
  console.log("i%3", i % 3);
  console.log(i);
  if ((i % 3) === 0) {
    army.remove(army.currentNode.value);
    armySize--;
  }
  i++;
  army.currentNode = army.currentNode.next;
}
console.log("survirors are : ");
army.display();
