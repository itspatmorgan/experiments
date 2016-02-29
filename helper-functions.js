var PM = PM || {};

PM.Utility = (function() {

  function addEventListenerByClass(className, event, func) {
    var classlist = document.getElementsByClassName(className);

    for (var i = 0, len = classlist.length; i < len; i ++) {
      classlist[i].addEventListener(event, func, false);
    }
  }

  function removeClass(className, selector) {
    var elementsWithClass = document.querySelectorAll('.' + selector);

    [].forEach.call(elementsWithClass, function(n){
      n.classList.remove(className);
    });
  }

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
    addEventListenerByClass: addEventListenerByClass,
    removeClass: removeClass,
    reverseStringWithMethods: reverseStringWithMethods,
    reverseStringWithLoop: reverseStringWithLoop
  };
});


