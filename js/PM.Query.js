var PM = PM || {};

PM.Query = (function(){
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

  return {
    addEventListenerByClass: addEventListenerByClass,
    removeClass: removeClass,
  };
});
