// The goal is to write a function that returns Fizz if the given number is
// divisible by 3, and Buzz if is divisible by 5. Is both, return FizzBuzz. If
// the given argument isn't a number, or isn't divisible by 3 or 5, return the
// given argument.

// Do it with numbers between 0 and 100.

const fizzBuzz = (num) => {
  let output = '';
  if (num % 3 === 0) output += 'Fizz';
  if (num % 5 === 0) output += 'Buzz';
  return output || num;
};

console.log(fizzBuzz('Wryyyyy'));

for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}

