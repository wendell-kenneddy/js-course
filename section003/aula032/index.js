// Variables by array destructuring

/*
  Array destructuring allow us to declare variables without repeating the
  process of declaring the keyword, name, array and index.

  const numArray = [10, 20, 30, 40, 50];
  const firstNum = numArray[0];
  const secondNum = numArray[1];
  const thirdNum = numArray[2];
  console.log(firstNum, secondNum, thirdNum) // -> 10, 20, 30

  This can be simplified.

  const numArray = [10, 20, 30, 40, 50];
  const [firstNum, secondNum, thirdNum] = numArray;
  console.log(firstNum, secondNum, thirdNum) // -> 10, 20, 30

  The same result, but a lot easier.

  You can skip indexes by using a , in the place of the index.

  const numArray = [10, 20, 30, 40, 50];
  const [firstNum, , thirdNum] = numArray;
  console.log(firstNum, thirdNum) // -> 10, 30

  Things get a bit complex when we have arrays inside arrays. In this case, we
  would have to skip the arrays indexes and the indexes inside the desired
  array.
*/
