var PM = PM || {};

PM.Maths = (function() {
  function isPrime(num) { 
    var is_prime = true;
    var bound = Math.floor(Math.sqrt(num));
    
    for (var i = 2; i <= bound; i++) {
      if (num % i === 0) {
        is_prime = false;
      }
    }
    
    return is_prime;
  }

  // Calculate factorial of num (no recursion)
  function simpleFactorial(num) {
    var product = 1;

    for (var i = num; i >= 0; i--) {
      product *= i;
    }

    return product;
  }

  // Add numbers from 1 up to num
  function sumUpTo(num) { 
    var sum = 0;
    
    for (var i = 1; i <= num; i ++) {
      sum += i;
    } 

    return sum;      
  }

  return {
    simpleFactorial: simpleFactorial,
    sumUpTo: sumUpTo
  };
})();


