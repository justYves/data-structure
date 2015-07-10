var LinkedList = require('./linked-list.js');

function DoublyLinkedList() {
  LinkedList.call(this, DoublyNode);
}

DoublyLinkedList.prototype = Object.create(LinkedList.prototype);

function DoublyNode(value, next, previous) {
  this.value = value;
  this.next = next || null;
  this.previous = previous || null;
}

DoublyLinkedList.prototype.insert = function(value, after) {
  var newNode = new DoublyNode(value);
  var currentNode = this.find(after);
  var nextNode = currentNode.next;

  newNode.next = nextNode;
  newNode.previous = currentNode;
  currentNode.next = newNode;

  if(nextNode){
    nextNode.previous = newNode;
  }
  // if (previousNode.next) {
  //   previousNode.next.previous = newNode;
  // }
};


// function insert(newElement, item) {
//   var newNode = new Node(newElement);
//   var current = this.find(item);
//   newNode.next = current.next;
//   newNode.previous = current;
//   current.next = newNode;
// }


DoublyLinkedList.prototype.remove = function(value) {
  var nodeToRemove = this.find(value);

  nodeToRemove.previous.next = nodeToRemove.next;
  if (nodeToRemove.next) {
    nodeToRemove.next.previous = nodeToRemove.previous;
  }
};

DoublyLinkedList.prototype.findLast = function() {
  var currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

DoublyLinkedList.prototype.displayReverse = function() {
  var currentNode = this.findLast();
  while (currentNode.previous !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.previous;
  }
};

module.exports = DoublyLinkedList;
