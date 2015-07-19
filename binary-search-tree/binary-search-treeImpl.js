var BST = require('./binary-search-tree.js');

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.searchInOrder();

console.log("Preorder traversal: ");
nums.preOrder();

console.log("Postorder traversal: ");
nums.postOrder();

console.log("Min value: ");
console.log(nums.getMin());

console.log("Max value: ");
console.log(nums.getMax());

var found = nums.find(99);
if (found != null) {
  console.log("Found 99 in the BST.");
} else {
  console.log("99 was not found in the BST.");
}

var found = nums.find(4);
if (found != null) {
  console.log("Found 4 in the BST.");
} else {
  console.log("4 was not found in the BST.");
}

console.log(nums.remove(99));