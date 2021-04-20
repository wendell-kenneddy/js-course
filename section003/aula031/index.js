// Var, let and const

/*
  All of them are keywords to declare variables. But only var can be redeclared
  and reassigned, and variables initialized with the var keyword have function
  scope only.

  var myName = 'Wendell';
  console.log(myName) // -> Wendell

  if (1 > 0) {
    myName = 'Simara';
  }

  console.log(myName) // -> Simara

  function printName () {
    var myName = 'Nicolle';
    console.log(myName);
    return
  }

  printName() // -> 'Nicolle'
  console.log(myName) // -> 'Simara'

  Let and const have block scope, that is, variables initialized with the let or
  const keyword are scoped to the block they belong, like an if statement. Also,
  they can't be reassigned, neither redeclared, and hoisting them returns a
  Reference Error.
*/
