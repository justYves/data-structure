function Dictionary() {
  this.data = [];
}

Dictionary.prototype.add = function(key, value) {
  this.data[key] = value;
};

Dictionary.prototype.find = function(key) {
  return this.data[key];
};

Dictionary.prototype.remove = function(key) {
  delete this.data[key];
};

Dictionary.prototype.showAll = function() {
  var self = this;
  Object.keys(this.data).forEach(function(key) {
    console.log(key + " -> " + self.data[key]);
  });
};

Dictionary.prototype.clear = function(){
  this.data = [];
};

Dictionary.prototype.count = function(){
  var n = 0;
  Object.keys(this.data).forEach(function(key) {
    n++;
  });
  return n;
};




module.exports = Dictionary;
