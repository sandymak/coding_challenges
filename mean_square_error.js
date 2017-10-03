// Mean Square Error (codewars 5kyu)
// Complete the function that

// accepts two arrays of equal length
// compares the value each member in one array to the corresponding member in the other
// squares the absolute value difference between those two values
// and returns the average of those squared absolute value difference between each member pair.

// var solution = function(firstArray, secondArray) {
//   var sum = 0;
//     for (var i = 0; i < firstArray.length; i++) {
//       // console.log('firstArray[i]:', firstArray[i])
//       // console.log('secondArray[i]:', secondArray[i])
//       // console.log('absSqrDiff:', absSqrDiff(firstArray[i], secondArray[i])) 
//       sum += absSqrDiff(firstArray[i], secondArray[i]);
//     }
//     var avg = (sum)/(firstArray.length);
//     return avg;
// }

// var absSqrDiff = function(num1, num2) {
//     return Math.pow(Math.abs(num1-num2),2);
//   }

// SECOND SOLUTION USING ARRAY METHOD

var solution = function(firstArray, secondArray) {

  var absSqrDiff = firstArray.reduce(function(sum, currentVal, index) {
    // console.log('index:', index)
    // console.log('sum:', sum)
    // console.log('currentVal:' , currentVal)
    // console.log('secondArray[index]:' , secondArray[index])
    
    return sum += (Math.pow((currentVal-secondArray[index]),2));
    
    
  }, 0);
  
  return absSqrDiff/(firstArray.length);
 
}



console.log(solution([1,2,3], [4,5,6])); // should === 9 ((9 + 9 + 9) / 3)
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // should === 16.5 ((0 + 25 + 25 + 16) / 4)
console.log(solution([-1,0], [0,-1])); // should === 1 ((1 + 1) / 2)