// Arithmetic and increment/decrement operatos

/*
  + -> Sum or concat operator
  - -> Subtraction operator
  * -> Multiplication operator
  / -> Division operator
  % -> Remainder operator
  ++x -> pre-increment | x++ -> post-increment
  --x -> pre-increment | x-- -> post-decrement

  Also, trying to calculate numbers alongisde with string values will return
  wrong results or NaN. It's better to convert the necessary values first.
*/

const staticNum = 2;

// Increments
let preIncremented = staticNum
console.log(++preIncremented) // -> 3
let postIncremented = staticNum
console.log(postIncremented++) // 2

// Decremenets
let preDecremented = staticNum
console.log(--preDecremented) // -> 1
let postDecremented = staticNum
console.log(postDecremented--) // -> 2
