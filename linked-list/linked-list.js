function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = new Node("head");
}

LinkedList.prototype.find = function(value) {
  var currentNode = this.head;
  while (currentNode.value != value) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

LinkedList.prototype.insert = function(value, after) {
  var newNode = new Node(value);
  var currentNode = this.find(after);
  newNode.next = currentNode.next;
  currentNode.next = newNode;
};

LinkedList.prototype.display = function() {
  var currentNode = this.head;
  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;