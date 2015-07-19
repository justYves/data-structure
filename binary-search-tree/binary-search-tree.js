function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.count = 1;
}

Node.prototype.show = function() {
  return this.value;
};

function BST() {
  this.root = null;
}

BST.prototype.insert = function(value) {
  var node = new Node(value);
  if (this.root === null) {
    this.root = node;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (value < current.value) {
        current = current.left;
        if (!current) {
          parent.left = node;
          break;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          break;
        }
      }
    }
  }
};


BST.prototype.searchInOrder = function(node) {
  node = node || this.root;
  if (node) {
    if (node.left) this.searchInOrder(node.left);
    console.log(node.show());
    if (node.right) this.searchInOrder(node.right);
  }
};

BST.prototype.preOrder = function(node) {
  node = node || this.root;
  if (node) {
    console.log(node.show());
    if (node.left) this.searchInOrder(node.left);
    if (node.right) this.searchInOrder(node.right);
  }
};

BST.prototype.postOrder = function(node, str) {
  node = node || this.root;
  if (node) {
    if (node.left) this.searchInOrder(node.left);
    if (node.right) this.searchInOrder(node.right);
    console.log(node.show());
  }
};

BST.prototype.getMin = function() {
  var current = this.root;
  while (current.left) {
    current = current.left;
  }
  return current.value;
};

BST.prototype.getMax = function() {
  var current = this.root;
  while (current.right) {
    current = current.right;
  }
  return current.value;
};

BST.prototype.find = function(value){
  var current = this.root;
  while(current.value !== value){
    if(value < current.value){
      current = current.left;
    } else {
      current = current.right;
    }
    if(!current){
      return null;
    }
  }
  return current;
};

BST.prototype.remove= function(value){
  root = removeNode(this.root, value);
};

BST.prototype.removeNode = function(node,value){
  if(!node) return null;

  if(value === node.value){
    if(!node.left && !node.right){
      return null;
    }
    if (!node.left){
      return node.right;
    }
    if(!node.right){
      return !node.left;
    }
    var tempNode = this.getMin(current.right);
    node.value = tempNode.value;
    node.right = removeNode(node.right,tempNode.value);
    return node;

  } else if(value < node.value){
    this.removeNode(node.left, value);
  } else {
    this.removeNode(node.right, value);
  }

};

module.exports = BST;