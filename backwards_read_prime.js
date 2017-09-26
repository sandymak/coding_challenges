//Backwards Read Primes

// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task

// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one being greater than the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.




function backwardsPrime(start, stop){
  
  result = [];
  
  for (var j = start; j <= stop; j++) {
    
    var revJ = (j.toString().split('').reverse().join(''))*1
    
        if (j > 9 && j !== revJ && isPrime(j) && isPrime(revJ)) {
          result.push(j);
        }
  
  }
  
  return result;
  
}


  var isPrime = function (num) {
    if (num === 0 || num === 1) {
      return false;
    } else {
      for (var i = 2; i < num; i++) {
       
        if (num%i === 0) {
          return false;
        } 
      }
      return true;
    }
  };
 

// console.log(backwardsPrime(2, 100)); //=> [13, 17, 31, 37, 71, 73, 79, 97] 
console.log(backwardsPrime(9900, 10000)); // => [9923, 9931, 9941, 9967]))