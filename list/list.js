//Implementation of an unordered list in JS


function List() {
  this.listSize = 0;
  this.position = 0;
  this.data = [];
}

List.prototype.find = function(element) {
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i] == element) {
      return i;
    }
  }
  return -1;
};

List.prototype.contains = function(element) {
  if (this.find(element) > -1) {
    return true;
  }
  return false;
};

List.prototype.length = function() {
  return this.listSize;
};

List.prototype.toString = function() {
  return this.data;
};

List.prototype.insert = function(element, after) {
  var insertPosition = this.find(after);
  if (insertPosition > -1) {
    this.data.splice(insertPosition + 1, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
};

List.prototype.append = function(element) {
  this.data[this.listSize++] = element;
};

List.prototype.remove = function(element) {
  var foundAtIndex = this.find(element);
  if (foundAtIndex > -1) {
    this.data.splice(foundAtIndex, 1);
    --this.listSize;
    return true;
  }
  return false;
};

List.prototype.clear = function() {
  delete this.data;
  this.data = [];
  this.listSize = this.position = 0;
};

List.prototype.front = function() {
  this.position = 0;
};

List.prototype.end = function() {
  this.position = this.listSize - 1;
};

List.prototype.previous = function() {
  if (this.position > 0) {
    --this.position;
  }
};

List.prototype.next = function() {
  if (this.position < this.listSize) {
    ++this.position;
  }
};

List.prototype.currentPosition = function() {
  return this.position;
};

List.prototype.moveTo = function(position) {
  this.position = position;
};

List.prototype.getElement = function() {
  return this.data[this.position];
};

module.exports = List;
