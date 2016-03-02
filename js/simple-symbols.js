function SimpleSymbols(str) { 
 var is_acceptable = false;
  
  // find letters
  // get index of that letter
  // check if index before and after that letter is a +
  
  var arr = str.split("");
  var reg = /[a-zA-Z]/g;
  
  // if letter is first or last, return false right away, don't perform other check
  if (arr[0].match(reg) || arr[arr.length-1].match(reg)) {
    console.log("zero");

    is_acceptable = false;
  } else {
    // loop through index 1 to -2
    for (var i = 1, len = arr.length - 2; i <= len; i++) {
      if (arr[i].match(reg)) {
        
        if (arr[i-1].includes("+") && arr[i+1].includes("+")) {
          is_acceptable = true;
        } else {
          is_acceptable = false;
        }
      } 
    }
  }
  
  // code goes here  
  return is_acceptable;       
}
   
// keep this function call here 
SimpleSymbols("+d+");      
