// Functions

/*
  Functions are pieces of code that execute the code inside them, which can be a
  side effect or a return value. They can also receive arguments to be used as
  parameters, and be used as values too.
    const greeting = name => `Hello, ${name}!`

    console.log(greeting('Wendell')) // -> Hello, Wendell!

    In the example above, the function returns a value. But she could just
    execute the console.log too, and this would be a side effect.

    We can assign a default value to a expected parameter, so when the function
    is called and the argument isn't passed, the default assigned value is used.
      const greeting = (name = 'Wendell') => `Hello, ${name}!`

      console.log(greeting()) // -> Hello, Wendell!

    Functions create an lexical scope, so any variable declared inside that
    scope can't be acessed outside the function.

    function createScope(value = 7) {
      const scopedConst = value
      console.log(scopedConst)
    }

    const scopedValue = 5
    console.log(scopedValue, createScope()) // -> 5, 7
*/
