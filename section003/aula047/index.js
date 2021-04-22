// setInterval and setTimeout

/*
  These functions handle the timing to execute a specific block of code, or to
  clear a running interval.

  let i = 0;
  const printNumbers = () => {
    i++;
    return i;
  };
  const printTimer = setInterval(() => console.log(printNumbers()), 1000);
  const stopTimer = setTimeout(() => clearInterval(printTimer), 5000);
  setTimeout(() => console.log('Program finished.'), 6000)

  In this case, the algorith will execute the printNumbers function each 1
  second, and after 5 seconds, the timer will be cleared. Finally, after 6
  seconds, a message will be logged in the console.

  Time is handled in miliseconds, so 1 second = 1000, 10 = 10000 and so on.
  */
