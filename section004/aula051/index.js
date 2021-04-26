// Function parameters

/*
  Function parameters (arguments when being passed) are stored in a variable
  called arguments, that works just like an enum. This variable exists only in
  functions declared by function declarations. It returns both the passed
  arguments as the not passed or not even expected to be passed arguments -
  functions work even with no arguments are passed, or if some are passed even
  though none were expected.

  function myArgs() {
    console.log(arguments);
  }

  myArgs('a', 'b', 'Final Fantasy', 77) // -> [Arguments] {0: 'a', 1: 'b'...}

  To functions not declared with the keyword function, there's the rest operator
  that works almost the same, with the only requirement being the rest operator
  needs to be the last argument.

  const expectedArgs = (a, b, c, ...unexpected) {
    console.log(a + b + c, unexpected);
  };

  expectedArgs(10, 20, 30, 34, 124, 192, 38, 009) // -> 60 [ 34, 124...

  Default values can be assigned to functions when the expected parameters is
  evaluated as undefined.

  const noArgs = (a = 10, b = 20, c = 30) => {
    console.log(a + b + c);
  }

  noArgs() // -> 60
*/
