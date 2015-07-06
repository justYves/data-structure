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


//Exercice 2:
//Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.

function isPalindrome(word) {
  word = word.toString().split('');
  var deque = new Deque();

  for (var i = 0; i < word.length; i++) {
    deque.enqueue(word[i], "front");
  }

  while (deque.length() > 1) {
    if (deque.dequeue("front") != deque.dequeue("end")) {
      console.log("called");
      return false;
    }
    return true;
  }
}

console.log("canal is a palindrome: " + isPalindrome("canal"));
console.log("1001 is a palindrome: " + isPalindrome(1001));
console.log("abba is a palindrome: " + isPalindrome("abba"));

//Exercice 3
//Modify the priority queue example from Example 5-5 so that the higher-priority elements have higher numbers rather than lower numbers. Test your implementation with the example in the chapter.


