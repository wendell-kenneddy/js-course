// Object destructuring

/*
  We can do the same we did with arrays, but with objects.

  const person = {
    name: 'Wendell',
    nick: 'Kenneddy',
    age: '16',
    favoriteGame: {
      name: 'Bloodborne',
      developer: 'From Software',
      genre: 'Action RPG'
    }
  };

  const {name, nick, age} = person;
  console.log(name, nick, age); // -> Wendell, Kenneddy, 16

  Since objects are key-value things, we can specify a specific variable
  identifier to a specific key, and a default value..

  const {name: myName = 'Edwin'} = person;
  console.log(myName) // -> Wendell, but would be Edwin if the key did not
  exist.

  We can use the rest and spread operators, and the key->variable-identifier
  thing as we want.

  const {name, nick, ...rest} = person;
  console.log(name, nick, rest) // -> Wendell, Kenneddy, 16, { name:
  'Bloodborne... }
*/
