var Dictionary = require("./dictionary.js");

var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
console.log("Number of entries: " + pbook.count());
console.log("David's extension: " + pbook.find("David"));
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());


console.log("<--- Sorting --->");
var pbook = new Dictionary();
pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showAll();


console.log("<--- Dictionary --->");
//Using the Dictionary class, write a program that stores the number of occurrences of words in a text. Your program should display each word in a text just once as well as the number of times the word occurs in the text. For example, given the text “the brown fox jumped over the blue fox,” the output will be:

var words = new Dictionary();
var sentence = "the brown fox jumped over the blue fox";

function wordParser(sentenceToParse){
  sentenceToParse = sentenceToParse.split(' ');
  sentenceToParse.forEach(function(word){
    if(words.find(word)){
      words.data[word]++;
    } else {
      words.add(word,1);
    }
  });
}

wordParser(sentence);
words.showAll();

// Rewrite exercise 2 so that it displays the words in sorted order.
//
console.log("<--- SORTED --->");
words.showAll = function(){
  var self = this;
  Object.keys(this.data).sort().forEach(function(key) {
    console.log(key + " -> " + self.data[key]);
  });
};

words.showAll();
