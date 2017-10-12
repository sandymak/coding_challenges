// Using Recursion to log each elem in Array

function forEach(arr, func) {
    if (arr.length) {
      func(arr[0]);
      forEach(arr.slice(1),func)
    }
    // If arr still has length, run function (which is console.log) at arr[0]
    // then slice off the first element (which is look at a copy of arr w.o first elem)
  }

  // forEach([1,2,3], console.log);


  var myArray = [1,2,[3],[[4,5]]]

  function deepForEach(arr, func) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        deepForEach(arr[i], func)
      } else {
        func(arr[i]);
      }
    }
  }

  // deepForEach(myArray, console.log);

  function deepForEachNoLoops(arr,func) {

    if (arr.length) {
      if (Array.isArray(arr[0])) {
        deepForEachNoLoops(arr[0], func)
      } else {
        func(arr[0])
      }
     deepForEachNoLoops(arr.slice(1), func)
    }
  }

  // deepForEachNoLoops(['a', [[[9,7,'t']]], ['p'], [[[0]]]], console.log)

  // Count elements inside an array using Recursion


  function countElements(arr) {
    // return number of elements
    // return length of arr

    if (arr.length) {
      return countElements(arr.slice(1)) + 1;
    } else {
      return 0;
    }
  }

  countElements([1,2,3,4,5]) // 5

  // now what if arr is nested

  function deepCountElements(arr) {
    var count = 0;

    for (var i = 0; i < arr.length; i++) {

      if (Array.isArray(arr[i])) {
        count += deepCountElements(arr[i])
      } else {
        count++;
      }
    }
    return count;
  }


  deepCountElements([1,[2,3],[[[4]]]]) // 10


  // now find count without for deepForEachNoLoops

  function deepCountElementsNoLoops(arr) {
    if (arr.length) {
      if (Array.isArray(arr[0])) {
        return deepCountElementsNoLoops(arr[0]) + deepCountElementsNoLoops(arr.slice(1))
      } else {
        return deepCountElementsNoLoops(arr.slice(1)) + 1;
      }
    } else {
      return 0
    }
  }


  deepCountElementsNoLoops([1,2,[[3,4]],[5]]) // 5