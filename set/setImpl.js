var Set = require('./Set.js');

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
  console.log("Mike added")
} else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
  console.log(removed + " removed.");
} else {
  console.log(removed + " not removed.");
}

console.log("<--- UNION --->");


var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Jonathan");
dmp.add("Julie");
var it = new Set();
it = cis.union(dmp);
console.log(it.show());


console.log("<--- INTERSECTION --->");

var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var inter = cis.intersect(dmp);
console.log(inter.show());


console.log("<--- SUBSET --->");

var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
if (dmp.subset(it)) {
  console.log("DMP is a subset of IT.");
} else {
  console.log("DMP is not a subset of IT.");
}

//No Longer a subset
dmp.add("Shirley");
if (dmp.subset(it)) {
  console.log("DMP is a subset of IT.");
} else {
  console.log("DMP is not a subset of IT.");
}

console.log("<--- DIFFERENCE --->");

var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]");

console.log("<--- EXERCICE 1 --->");
// Modify the Set class so that the class stores its elements in sorted order. Write a program to test your implementation.

Set.prototype.showSorted = function() {
  return this.data.sort();
};

var cis = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");

console.log(cis.showSorted());

console.log("<--- EXERCICE 2 --->");
// Addthefunctionhigher(element)totheSetclass.Thisfunctionreturnstheleast element in the set strictly greater than the given element. Test your function in a program.


var cis = new Set();
cis.add(5);
cis.add(2);
cis.add(10);


Set.prototype.higher = function(element) {
  this.data.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i] > element) {
      return this.data[i];
    }
  }
  return false;
};

console.log(cis.higher(2));

console.log("<--- EXERCICE 3 --->");
// Addthefunctionlower(element)totheSetclass.Thisfunctionreturnsthegreat‐ est element in the set strictly less than the given element. Test your function in a program
//
Set.prototype.lower = function(element) {
  this.data.sort(function(a, b) {
    return b - a;
  });
  for (var i = 0; i < this.data.length; i++) {
    if (this.data[i] < element) {
      return this.data[i];
    }
  }
  return false;
};

console.log(cis.lower(3));