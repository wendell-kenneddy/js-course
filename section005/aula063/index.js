// The splice method

/*
  The splice method is a powerful native method that allow us to do everything
  we do with push, pop, shift, unshift and much more. It takes three or more
  parameters, being the first the index to start of, the second the number of
  elements to delete from the array, starting from the given index, and the rest
  of the arguments the elements to add starting from the given index.

  const arr = ['Wendell', 'Kenneddy', 'Gama'];
  arr.splice(0, 1, 'John');
  console.log(arr) // -> John, Kenneddy, Gama

  arr.splice(-1, 1);
  console.log(arr); // -> John, Kenneddy

  arr.splice(0, 1, 'Wendell')
  arr.splice(2, 0, 'Gama', 'da', 'Silva');
  console.log(arr.join(' ')); // -> Wendell Kenneddy Gama da Silva
*/
