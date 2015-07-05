function Queue() {
  this.data = [];
}

Queue.prototype.enqueue = function(element) {
  this.data.push(element);
};

Queue.prototype.dequeue = function() {
  return this.data.shift();
};

Queue.prototype.front = function() {
  return this.data[0];
};

Queue.prototype.back = function() {
  return this.data[this.data.length - 1];
};

Queue.prototype.toString = function() {
  var stringToReturn = "";
  for (var i = 0; i < this.data.length; i++) {
    stringToReturn += this.data[i] + "\n";
  }
  return stringToReturn;
};

Queue.prototype.isEmpty = function() {
  if (this.data.length === 0) {
    return true;
  }
  return false;
};

module.exports = Queue;