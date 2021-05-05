// The Filter method

/*
  The filter methods iterates over an array, executing a callback function to
  each element, and returning a new array containing the filtered elements. The
  callback function can accept three parameters: the element, the index of the
  element and the full array. The element is pushed to the result array if the
  callback returns true in the iteration.

  let numArray = [10, 2, 4, 89, 19, 11, 2, 3, 9, 14];
  let numGreaterThan10 = numArray.filter(e => e > 10);
  console.log(numGreaterThan10) // -> 89, 19, 11, 14

  In thin case, the index and the full array were not necessary to the execution
  of the callback function.
*/
