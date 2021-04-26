// The return keyword

/*
  The keyword return tells the engine to end the execution of the running
  function, or to return a value and then end the execution.

  const exampleFunc = () => {
    return 'Hello, world!'
  }

  console.log(exampleFunc()) // -> Hello, world!

  Multiple returns can be 'nested', inside the closure of functions.

  const multiplier = (factor) => {
    const multiply = (num) => num * factor;
    return multiply;
  }

  const double = multiplier(2);
  const triple = multiplier(3);
  const quadruple = multiplier(4);
  console.log(double(4)) // -> 8
  console.log(triple(4)) // -> 12
  console.log(quadruple(4)) // -> 14
*/
