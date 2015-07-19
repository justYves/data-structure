function Set() {
  this.data = [];
}

Set.prototype.add = function(value) {
  if (this.data.indexOf(value) === -1) {
    this.data.push(value);
    return true;
  }
  return false;
};

Set.prototype.remove = function(value) {
  var index = this.data.indexOf(value);
  if (index > -1) {
    this.data.splice(index, 1);
    return true;
  }
  return false;
};

Set.prototype.show = function() {
  return this.data;
};

//Helper function
Set.prototype.contains = function(value) {
  if (this.data.indexOf(value) > -1) {
    return true;
  }
  return false;
};

Set.prototype.union = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.data.length; i++) {
    tempSet.add(this.data[i]);
  }
  for (var i = 0; i < set.data.length; i++) {
    tempSet.add(set.data[i]);
  }
  return tempSet;
};

Set.prototype.intersect = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.data.length; i++) {
    if (set.contains(this.data[i])) tempSet.add(this.data[i]);
  }
  return tempSet;
};

Set.prototype.size = function() {
  return this.data.length;
};

Set.prototype.subset = function(set) {
  if (this.size() > set.size()) return false;
  for (var i = 0; i < this.data.length; i++) {
    if (!set.contains(this.data[i])) return false;
  }
  return true;
};

Set.prototype.difference = function(set) {
  var tempSet = new Set();
  for (var i = 0; i < this.data.length; i++) {
    if (set.contains(this.data[i])) {
      tempSet.add(this.data[i]);
    }
    return tempSet;
  }
};


module.exports = Set;