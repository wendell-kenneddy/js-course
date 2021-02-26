// Primitive Types

// String
const firstName = "Wendell"
console.log(firstName) // -> Wendell

// Number (int)
const count = 1 + 5;
console.log(count) // -> 2.5

// Number (float)
const totalCount = count / 1.3
console.log(totalCount) // -> 4.61538...

// Boolean
const falsStatement = 12 > 15
const trueStatement = 15 > 12
console.log(falsStatement, trueStatement) // -> false true

// These variables are primitive types, so they are assigned by value
// If I tell x = b, and change x, b would stick to it's original value, and only x would change
// This is different from assiging an array to x, cause both would point to the same value in memory
// This last case is called assign by reference. Ex:

/*
const myArray = Array.from(firstName)
console.log(myArray) // -> firstName value
let otherArray = myArray
otherArray.push('batata') // Now both myArray and otherArray have the 'batata' index at the end
console.log(myArray, otherArray)
*/