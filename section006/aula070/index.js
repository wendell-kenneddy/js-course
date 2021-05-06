// Objects revision

/*
  Everything in Javascript is an Object. Arrays, strings, numbers and so on. To
  define a literal object, we can do this:

  const litObject = {
    name: 'Example',
    type: 'Literal Object'
  };

  Objects have their own constructor too, for example:

  const str = new String('i\'m a string.')
  console.log(str) // -> i'm a string.

  To use the literal object notation, in this case, we could assign the value of
  the str variable to be directly 'i\'m a string'.

  To access the propertis of an object, we can use two notations: .prop and
  ['prop']:

  const p1 = {
    name: 'Wendell',
    nick: 'Kenneddy',
    age: 16
  };

  console.log(p1.name); // -> Wendell
  console.log(p1['nick']); // -> Kenneddy

  The ['prop'] notation is more dinamic, since we can pass variables with
  diferent key names:

  const key = 'name';
  console.log(p1[key]) // -> Wendell

  We can also define our own constructor functions, that will return a object
  with the prototype inherited properties, and the properties we define to it.

  function Person(name, nick, age) {
    this.name = name;
    this.nick = nick;
    this.age = age;
    Object.defineProperty(this, 'fullname', {
      get: function() { return `${this.name} ${this.nick}` }
    });
  }

  const p1 = new Person('Wendell', 'Kenneddy', 16);
  console.log(p1.fullname) // -> Wendell Kenneddy

  The 'new' keyword will make the 'this' keyword point to the empty object
  created by the constructor function, that will be returned having it's
  referring keys pointing to the given parameters.

  We can create new objects using factory functions too:

  const createPerson = (name, nick, age) => {
    return {
      name,
      nick,
      age,
      get fullName() { return `${this.name} ${this.nick}` }
    }
  }
*/
