// Lexical Scope

/*
  The Lexical Scope is the scope in wich the function was created. So, when a
  function is called, it will always remember the variables declared until it
  was declared, and the other functions declared before too.

  const name = 'Wendell';

  const sayHi = () => {
    const name = 'Kenneddy';
    return name;
  }

  const executeSayHi = () => {
    const name = 'Gama';
    return sayHi();
  }

  console.log(sayHi()) // -> Kenneddy
  console.log(executeSayHi()) // -> Kenneddy
  console.log(name) // -> Wendell
*/
