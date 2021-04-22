// Try, catch and finally

/*
  After the try..catch statement, we can have a finally statement, that will
  always be executed, with an error being thrown or not.

  const evaluateNum = n => {
    if (typeof n != 'number') {
      throw new Error ('The parameter must be a number.')
    }

    return n;
  }

  try {
    console.log(evaluateNum('aaa'));
  } catch (e) {
    console.log(e.message)
  } finally {
    console.log('Program finished.')
  }

  In this case, the code inside the finally block will executed regardless of
  the result of the try..catch statement.
*/
