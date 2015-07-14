function Set(){
this.data = [];
}

Set.prototype.add = function(value) {
  if(this.data.indexOf(value) === -1){
    this.data.push(value);
    return true;
  }
  return false;
};

Set.prototype.remove = function(value) {
  var index = this.data.indexOf(value);
  if(index > -1){
    this.data.splice(index,1);
    return true;
  }
  return false;
};

Set.prototype.show = function() {
  return this.data;
};

//Helper function
Set.prototype.contains = function(value) {
  if(this.data.indexOf(value)){
    return true;
  }
  return false;
};

Set.prototype.union = function(value) {
  // body...
};

module.exports = Set;