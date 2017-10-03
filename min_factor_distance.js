//Min Factor Distance (codewars 6kyu)

// Write a function named minDistance/MinDistance that returns the smallest distance between two factors of a number,the input will be number greater than one.

// example:

// number=13013 has factors 
// [1,7,11,13,13013]

// minDistance(number) return 2 //13-11

function minDistance(n) {
    
    var factorsArr = findFactors(n);
    var minDiff = factorsArr[1] - factorsArr[0];
      
      for (var j = 0; j < factorsArr.length; j++) {
          var diff = factorsArr[j+1] - factorsArr[j];
            if (diff !== undefined && diff < minDiff ) {
              minDiff = diff;
            }
      }
      return minDiff;
  }
  
  var findFactors = function(num) {
    var factors = [];
      for (var i = 0; i <= num; i++) {
        if (num%i === 0) {
          factors.push(i);
        }
      }
      return factors;
  }