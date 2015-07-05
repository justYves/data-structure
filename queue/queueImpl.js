var Queue = require("./queue.js");

//Exercice 1:
//Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements to be added and removed from both the front and the back of the list. Test your class in a program.
function Deque() {
  Queue.call(this);
}

Deque.prototype = Object.create(Queue.prototype);

Deque.prototype.enqueue = function(element, pos) {
  if (pos == "front") {
    this.data.unshift(element);
  } else if (pos == "end") {
    this.data.push(element);
  }
};

Deque.prototype.dequeue = function(pos) {
  if (pos == "front") {
    return this.data.shift();
  } else if (pos == "end") {
    return this.data.pop();
  }
};

var deque = new Deque();
deque.enqueue("added to front", "front");
deque.enqueue("added to end", "end");
deque.enqueue("added to end2", "end");
console.log(deque.toString());
deque.dequeue("front");
console.log(deque.toString());
deque.dequeue("end");
console.log(deque.toString());
