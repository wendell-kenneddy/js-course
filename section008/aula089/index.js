// Async await

/*
  Async/await are just syntatic sugar to what Promises already do with then and
  catch.

  const saySomething = (msg, timeInSeconds) => {
    return new Promise((resolve, reject) => {
      if (!msg || typeof msg !== 'string') {
        reject('Invalid argument for message.');
        return;
      }

      if (!timeInSeconds || timeInSeconds < 0) {
        reject('Invalid argument for time in seconds.');
        return;
      }

      const timeInMs = timeInSeconds * 1000;

      setTimeout(() => {
        resolve('Promise fulfilled: ' + msg);
      }, timeInMs)
    });
  };

  const executeSample = async () => {
    try() {
      const raceWinner = await Promise.race([
        saySomething('Promise 1', 1),
        saySomething('Promise 2', 0.5),
        saySomething('Promise 3', 3)
      ]);

      console.log('Winner: ' + raceWinner);
    } catch(e) {
      console.log('Error: ' + e);
    }
  }

  executeSample(); // -> Race winner: Promise fulfilled: Promise 1

  The try catch statement will handle any promise rejection.
*/
