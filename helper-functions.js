var utility = {
  _addEventListenerByClass: function(className, event, func){
    var classlist = document.getElementsByClassName(className);

    for (var i = 0, len = classlist.length; i < len; i ++) {
      classlist[i].addEventListener(event, func, false);
    }
  },

  _removeClass: function(className, selector) {
    var x = document.querySelectorAll('.' + selector);

    [].forEach.call(x, function(n){
      n.classList.remove(className);
    });
  }
};
