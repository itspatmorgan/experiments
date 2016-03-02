var PM = PM || {};

PM.Strings = (function() {

  function isPalindrome(str) { 
    var collapsed_str = str.replace(/[ ]/g, "");
    var reversed = reverseString(collapsed_str);

    if (collapsed_str === reversed) {
      return "true";
    } else {
      return "false";
    }  
  }

  // Takes a string (sentence or paragraph)
  // Returns string with all words capitalized
  function letterCapitalize(str) { 
    var words = str.split(" ");
    var capitalized = "";
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i].toLowerCase();
      var letters = word.split("");
      var updated;
      
      letters[0] = letters[0].toUpperCase();
      updated = letters.join("");
      capitalized += updated + " ";
    }
    
    capitalized.trim();
    
    return capitalized;      
  }

  // NOT A USEFUL METHOD, JUST A TEST FROM Coderbyte //

  function letterChanges(str) { 
    // if a lowercase letter, bump it up 1 (a to b, c to d, or z back to a)
    // if a vowel, make it uppercase
    // if some other char, leave it alone

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

  // Simple String reversal function using built in JS methods
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Simple string reversal using a loop
  function reverseStringWithLoop(str) {
    var reversed_string = "";

    for (var i = str.length - 1; i >= 0; i--) {
      reversed_string = reverseString + str.charAt(i);
    }

    return  reversed_string;
  }

  return {
    isPalindrome: isPalindrome,
    letterCapitalize: letterCapitalize,
    letterChanges: letterChanges,
    reverseString: reverseString,
    reverseStringWithLoop: reverseStringWithLoop
  };
})();


