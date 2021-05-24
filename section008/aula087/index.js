// Promises

/*
  Promises are a way to work with async programming in JS.

  To create a Promise, first we declare it by using the 'new' keywords. Then, in
  the constructor, we pass two parameters, the first being the resolve and the
  second the reject.

  const p1 = new Promise((resolve, reject) => {
    if (Math.random() * 10 < 5) reject();
    resolve('p1 fulfilled.');
  });

  In this case, if the generated number is < 5, the Promise will be rejected. If
  resolved, will then be resolved. To handle the result, we use 'then'.

  p1.then((result) => console.log(result)) // -> p1 fulfilled

  To catch an error, we use the .catch() statement. Keep in mind that both
  .then() and .catch() return new Promises, so they can be all chained up.

  new Promise((resolve, reject) => {
    console.log('Automatically rejecting.');
    reject('Sample error');
  })
  .then((result) => {
    console.log(result);
    return 'Passing to the next step'; // -> This step is not executed
  })
  .catch((e) => {
    console.log('I\'ll catch any error until this point of the execution.');
    console.log(e); // -> Logs the error
  })
  .then((result) => {
    console.log('Finished.'); // -> Executes as a .then() of the previous catch
  })
*/
