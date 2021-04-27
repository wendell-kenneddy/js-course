// Closure

/*
  A closure function is a function that remembers the lexical scope where was
  created.

  const printName = name => {
    return function() {
      return name;
    }
  }
  const printWendell = printName('Wendell');
  const printKenneddy = printName('Kenneddy');

  console.log(printWendell());
  console.log(printKenneddy());
*/
