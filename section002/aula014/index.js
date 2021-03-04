// Working with numbers
let num = 10
let num2 = 0.7

// There are some methods to convert a number to string, like these:
console.log(num.toString()) // -> Just converts to a string
console.log(num.toString(2), num.toString(16)) // -> to binary and to hex

/* 
  But it we pass an radix as  argument, it converts to a base(n) number, then to a string.
  In the example above, (2) converts to binary, and (16) to hexadecimal.
*/

// Javascript numbers, specifically floating ones, are imprecise. 
console.log(num2 + 0.1) // -> 0.799...

/*
  This is mainly caused due to the standard used by Javascript to represent
  numbers, wich is IEEE 754-2008, especifically the double precision/64 bits
  format.

  Many languages tend to have other types of numbers, but JS has only one:
  Number, wich is a floating value.

  Javascript uses 64 bits to represent a number. 1 bit is to the sign, 11 bits
  to the exponent, and 51 to the number itself. So, when you do something like
  0.1 + 0.1, there's not enough storage to do such calculation, so Javascript
  kinda rounds the last bit.

  This is not a huge problem in most cases, but if you need REALLY precise
  numbers, like dealing with real money, this tends to be a problem. To solve
  this, we can use some methods, like the ones below.

  -----------------------------------------------------------------------------

  1. Multiply the value and divide by 100
  num2 = (num2 + 0.1) * 100
  num2 /= 100

  console.log(num2) // -> 0.8


  2. Use some parsing and the toFixed() function
  num2 = parseFloat((num2 + 0.1).toFixed(2))

  console.log(num2) // -> 0.8

*/

