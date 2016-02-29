// take string argument
// if a lowercase letter, bump it up 1 (a to b, c to d, or z back to a)
// if a vowel, make it uppercase
// if some other char, leave it alone
// return the new string

function LetterChanges(str) { 
  var new_string = "";
  
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    var ch;
    
    if (code >= 97 && code < 122) {
      ch = String.fromCharCode(code + 1);
    } else if ( code === 122) {
      ch = String.fromCharCode(97);
    } else {
      ch = str.charAt(i);
    }

    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      ch = ch.toUpperCase();
    }
      
    new_string = new_string + ch;
  }
  
  // code goes here  
  return new_string;      
}
