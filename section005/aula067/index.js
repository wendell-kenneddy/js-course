// The Reduce Method

/*
  The reduce method is used to reduce an array to a single value. It can imitate
  the behavior of the filter and map methods, but this isn't exactly it's
  purpose. The reduce method receives a callback function and optionally a
  initial value.

  The callback function can receive up to four arguments: the accumulator, the
  actual value, the index and the source array. If a initial value is given as
  second parameter to the reduce function, the accumulator will be initially the
  initial value passed. If it's an array, for example, the accumulator will
  start as an array.

  const numArray = [10, 2, 30, 9, 10, 99, 20, 38];
  const sum = numArray.reduce((acc, val) => acc + val, 0);

  In this case, the accumulator will be started as being 0. The accumulator
  assumes the return value of the callback function at each iteration over the
  array.

  console.log(sum) // -> 218
*/
