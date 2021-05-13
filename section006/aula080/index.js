// Map

/*
  The Map object is a simple map of key-values entries. With objects, the keys
  names can be only strings or symbols, but in a Map, they can be any value.
  They are useful in cases that we want another data type being the key or
  values, or when the keys are unknown until run time and etc.

  const personsArray = [
    {name: 'John', id: 3},
    {name: 'Mary', id: 2},
    {name: 'Luccas', id: 4},
    {name: 'Lucy', id: 1},
  ];

  const personsCollection = new Map();

  for (const person of personsArray) {
    personsCollection.set(person.id, person) // key, value
  }

  console.log(personsCollection) // -> 3 => {name: 'John'...}...

  They keys are added by order of insertion. If it was a common object, the ids
  as keys would be reordered to a crescent order.

  Also, we can check the length of a Map object simply by calling the size
  property of it. In the case of a normal object, we would have to do this by hand.
*/
