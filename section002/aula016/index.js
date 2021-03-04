// Arrays

/*
  Arrays are a object type and a Data Structure ins Javascript.
  Their main reason is to store data, like a collection of strings, numbers and
  etc.

  An array looks like this:
    let myArray = []
  Now we can apply some methods on it.

  1. Adding data to the array

  Just like a string, an array is a list of elements, so we can check it's
  length and indexes. But first, we need to add some data. To do that, we can
  simply give it's values:
    myArray = ['PlayStation', 'Xbox', 'Nintendo']
  But you'll certainly need to add or remove some of them.

  1.1 Array.push()

  This method pushes a value to the end of the array. So, if an array has 3
  elements, then will have 4, and it's elements indexes will change too.
    myArrau.push('Final Fantasy VII')
    console.log(myArray) // -> ['PlayStation', 'Xbox',
  'Nintendo', 'Final Fantasy VII']

  1.2. Array[Array.length] and "ghost index"

  We can achieve this result by using Array[Array.length] = 'newItem', or
  pointing a value to a index that doesn't exist, this way it will be
  automatically created.

  1.1 Array.unshift()

  This will add a new index 0 to the Array, also changing the index order.
    myArray,unshift('Final Fantasy VII')
    console.log(myArray) // -> ['Final Fantasy VII', 'PlayStation', 'Xbox',
    'Nintendo']

  2. Removing data from the array

  We can do this pretty easily.

  2.1 Array.pop()

  This method will remove the last index of the array.
    myArray.pop()
    console.log(myArray) // -> ['PlayStation', 'Xbox']

  2.2 Array.shift()

  This method will remove the first index of the array.
    myArray.shift()
    console.log(myArray) // -> ['Xbox', 'Nintendo']

  2.2 Array.slice([start, end[)

  This method will "slice" the array, receiving two arguments: the start index
  and the end index, not including it. If you want to remove a specific element,
  use Array.slice(<index of the element to remove>, 1).
    console.log(myArray.slice(0, 2)) // -> ['PlayStation', 'Xbox']

  2.3 Array.splice([start, end[)

  This method "splices" the elements given as indexes of the array, receiving
  two arguments: start index and end index, not including it.
    myArray.splice(0, 2)
    console.log(myArray) // -> ['Nintendo']

  3. Checking the array data

  3.1 Just call the array name.

  3.2 Iterate in each element

  You can use loops to iterate in each element of the array, like forEach(),
  map() and forIn.
    Example:

    let output = ''

    for (let i = 0; i < myArray.length; i++) {
      i == 2
      ? output += `${myArray[i]}.`
      : output += `${myArray[i]}, `
    }

    console.log(output) // -> Playstation, Xbox, Nintendo.
*/