// If else

/*
  If and else are a flow control structure that depends of a given condition to
  prove be true or false.
  Ex:

  const rainyDay = true;

  if (rainyDay) {
    console.log('It\'s raining outside. Better stay at home.')
  } else {
    console.log('Isn\'t raining outside, let\'s go for a walk.')
  }

  In this case, the output would be the first cosole.log

  Now:

  const n = 12

  if (n >= 5 && <= 10) {
    console.log('Range: [0, 10]')
  } else if (n >= 11 && <= 20) {
    console.log('Range: [11, 20]')
  } else {
    console.log('Undefined range')
  }

  The output would be the second console.log. Else if can be chained until a
  else statement appears, and in this case the program would look after the
  first true condition, and execute it's code. If all conditions are false, then
  the program would execute the code at the else statement.
*/