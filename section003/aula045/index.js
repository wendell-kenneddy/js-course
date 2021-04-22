// Try and catch

/*
  The try..catch statement is used for treating errors, so the user won't see a
  huge mess of strange words in the screen.

  const evaluateNum = (num) => {
    if (typeof num != 'number') {
      throw new Error('The given argument must be a number.');
    }

    return `${num} is a number.`;
  }

  try {
    evaluateNum('a');
  } catch (e) {
    console.log(e.message);
  }

  In the example above, the algorithm will try to execute the function, passing
  a string as argument. The if statement of the function will then throw an
  Error object - it can be a ReferenceError, TypeError or whatever type you want
  -, wich will be given as argument to the catch statement. As it's name says,
  it will then catch the error, and execute the code inside it's block, like
  logging a specific message or the error itself. In this case, it will log the
  error of the message (remember, the error is an object).
*/
