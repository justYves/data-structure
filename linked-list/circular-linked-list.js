var LinkedList = require('./linked-list.js');

function CircularLinkedList(){
  LinkedList.call(this);
  this.head.next = this.head;
}

CircularLinkedList.prototype = Object.create(LinkedList.prototype);

CircularLinkedList.prototype.display = function() {
  var currentNode = this.head;
  while (currentNode.next !=this.head) {
    console.log(currentNode.next.value);
    currentNode = currentNode.next;
  }
};

module.exports = CircularLinkedList;
