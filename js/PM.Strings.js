var PM = PM || {};

PM.Strings = (function() {

  function reverseStringWithMethods(str) {
    var reversed = str.split("").reverse().join("");

    return reversed;
  }

  function reverseStringWithLoop(str) {
    var reversed_string = "";

    for (var i = str.length - 1; i >= 0; i--) {
      reversed_string = reverseString + str.charAt(i);
    }

    return  reversed_string;
  }

  // take string argument
    // if a lowercase letter, bump it up 1 (a to b, c to d, or z back to a)
    // if a vowel, make it uppercase
    // if some other char, leave it alone
    // return the new string

  function letterChanges(str) { 
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

  return {
    reverseStringWithMethods: reverseStringWithMethods,
    reverseStringWithLoop: reverseStringWithLoop,
    letterChanges: letterChanges
  };
})();


