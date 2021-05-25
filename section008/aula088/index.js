// Useful Promises methods

/*
  Promise.all(promises) - receives an array of promises and return another array
  containing the results of each promise. If an rejection occurs, the code
  inside the .catch() statement will be executed.

  const saySomething = (msg, time = 1) => {
    return new Promise((resolve, reject) => {
      if (typeof msg != 'string'|| time < 0) {
        reject('Invalid arguments.');
        return;
      }

      setTimeout(() => {
        resolve(msg + ' - Promised fulfilled.');
      }, time * 1000)
    });
  };

  const promises = [
    saySomething('Promise 1', 1),
    saySomething('Promise 2', 5),
    saySomething('Promise 3', 1.5)
  ];

  Promise.all(promises)
    .then(result => console.log(result))
    .catch(error => console.log(error));

  Promise.race(promises) receives an array of Promises and returns the result of
  the first fulfilled promise.

  Promise.race(promises)
    .then(result => console.log(result))  // -> Promise 1
    .catch(error => console.log(error));

  Promise.resolve() returns an already resolved Promise. It would be returned
  immediatly in a Promise.race() context, for example. It's opposite is
  Promise.reject(), wich returns an already rejected Promise.
*/
