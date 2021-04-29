// Generator Functions

/*
  A generator function is a function that can be executed in steps. It has a
  special syntax. First, you must declare the generator using the function*
  syntax. Then, in the function body, the yield kwyord, followed by the code
  that will be executed as the function executes itself. Each step executes a
  yield.

  function* genExample() {
    yield () => console.log('First execution.');
    yield () => console.log('Second execution.');
    yield () => console.log('Third execution.');
  }

  const g1 = genExample();
  const f1 = g1.next().value;
  const f2 = g1.next().value;
  const f3 = g1.next().value;
  f1(); // -> First execution.
  f2(); // -> Second execution.
  f3(); // -> Third execution.

  In this case, the generator function returns an anonymous function at each
  execution. The function is assigned to a variable, by executing the next()
  method, that will execute the current execution step, and then using the value
  key, that will return the function.

  The keyword return, in generator functions, will end the execution and return
  the value.
*/
