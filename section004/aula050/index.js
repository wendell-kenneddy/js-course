// Functions

/*
  Functions are first-class objects, wich means they can be passed as a value,
  be stored as one, be pushed to an array and return a value.

  As function declaration:
    function sayHi() {
      return 'Hi';
    }

  As function expression:
    const sayHi = function() { return 'Hi'; };

  As Arrow Functions:
    const sayHi = () => 'Hi';

  Function expressions with let and const aren't hoisted.

  Functions can receive other functions as a parameter.

  const executeFunc = func => func();

  console.log(executeFunc(sayHi)); // -> Hi
*/
