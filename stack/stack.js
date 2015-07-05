function Stack(){
  this.top = 0;
  this.data = [];
}

Stack.prototype.push = function(element) {
  this.data[this.top++] = element;
};

Stack.prototype.peek = function() {
  return this.data[this.top-1];
};

Stack.prototype.pop = function() {
  return this.data[--this.top];
};

Stack.prototype.clear = function() {
  this.top = 0;
};

Stack.prototype.length = function(){
  return this.top;
};

module.exports = Stack;