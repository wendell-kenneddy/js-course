// If else part.2

/*
  If else statements depends of their previous conditions. When a condition is
  met, the program stops looking after a true condition and just executes the
  rest of the code. Also, multiple ifs can be used, being each one separate from
  another is not depending of an else if condition or if condition.
  Ex:

  const n = 10

  if (n === Number) {
    console.log('It\'s a number.')
  } else {
    console.log('It\'s NaN.')
  }

  if (n >= 5 && <= 10) {
    console.log('Range: [0, 10]')
  } else if (n >= 11 && <= 20) {
    console.log('Range: [11, 20]')
  } else {
    console.log('Undefined range')
  }

  console.log('End of the program.')

  In this case, both if statements would be executed, and the console.log at the
  end too.
*/