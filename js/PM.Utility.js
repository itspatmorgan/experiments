var PM = PM || {};

PM.Utility = (function() {

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

  return {
    reverseStringWithMethods: reverseStringWithMethods,
    reverseStringWithLoop: reverseStringWithLoop
  };
});
