var List = require('./list.js');

//Exercice 1:
// Write a function that inserts an element into a list only if the element to be inserted is larger than any of the elements currently in the list. Larger can mean either greater than when working with numeric values, or further down in the alphabet, when working with textual values.
console.log("Exercice 1:");

List.prototype.insertGreater = function(element){
  for (var i =0; i<this.data.length;i++){
    if(this.data[i]>element){
      return false;
    }
  }
  this.append(element);
  return true;
};

var numList = new List();
numList.insertGreater(1);
numList.insertGreater(3);
numList.insertGreater(2);
numList.insertGreater(5);
numList.insertGreater(4);

console.log(numList.toString());

//Exercice 2:
//Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the elements currently in the list.
//
console.log("Exercice 2: ");

List.prototype.insertSmaller = function(element){
  for (var i =0; i<this.data.length;i++){
    if(this.data[i]<element){
      return false;
    }
  }
  this.append(element);
  return true;
};

var numList = new List();
numList.insertSmaller(5);
numList.insertSmaller(3);
numList.insertSmaller(2);
numList.insertSmaller(1);
numList.insertSmaller(4);

console.log(numList.toString());

//Exercice 3:
//Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects. Write a function that displays all the people in the list of the same gender.

console.log("Exercice 3:");

function Person(name, gender){
this.name = name;
this.gender = gender;
}

var personList = new List();
personList.append(new Person("Yves","male"));
personList.append(new Person("Eve","female"));
personList.append(new Person("Adam","male"));
personList.append(new Person("Rose","female"));
personList.append(new Person("Jack","male"));
personList.append(new Person("Hermione","female"));
personList.append(new Person("Don","male"));
personList.append(new Person("Tina","female"));
personList.append(new Person("Keith","male"));
personList.append(new Person("Loma","female"));

console.log(personList.toString());

function display(list,gender){
  for(list.front(); list.currentPosition() < list.length(); list.next()){
    if(list.getElement().gender ==gender){
      console.log(list.getElement().name);
    }
  }
}

display(personList,"male");


