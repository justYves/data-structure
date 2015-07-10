function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList(NodeConstructor) {
  Node = NodeConstructor || Node;
  this.head = new Node("head");
}

LinkedList.prototype.find = function(value) {
  var currentNode = this.head;
  while (currentNode.value != value) {
    currentNode = currentNode.next;
  }
  return currentNode;
};

LinkedList.prototype.findPrevious = function(value) {
  var currentNode = this.head;
  while ((currentNode.next !== null) &&(currentNode.next.value != value)) {
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

LinkedList.prototype.remove = function(value) {
  var previousNode = this.findPrevious(value);
  if (previousNode.next){
    previousNode.next = previousNode.next.next;
  }
};

LinkedList.prototype.display = function() {
  var currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.next.value);
    currentNode = currentNode.next;
  }
};

module.exports = LinkedList;