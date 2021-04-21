// For..of

/*
  For of loops iterate over iterable objects, such as arrays and strings, and
  return the value of the index.

  const myObj = {
    name: 'Wendell',
    nick: 'Kenneddy',
    age: 16
  };

  const myArray = ['Apple', 'Orange', 'Watermelon', 'Lemon']

  for (let value of myObj) {
    console.log(value);
  } // -> Throws an error

  for (let key in myObj) {
    console.log(myObj[key]);
  } // -> Works just fine

  for (let value of myArray) {
    console.log(value);
  } // -> Apple, Orange, Watermelon, Lemon

  Wich of the loops to use depends of the necessity. For..in loops return the
  key, so you can have both key and value, and for..of loops return only the value.
*/
