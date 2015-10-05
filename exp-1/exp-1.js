var words = "Hey hey we're the monkeys"; 
var letters = words.split("");

var type = function() {
  for (i = 0; i < letters.length; i++) {
    setTimeout(addLetter(), 100);
  }
};

var addLetter = function() {
  $("#target").text(letters[i]);
};

$(document).ready(function() {
  type();
});
