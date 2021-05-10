// Manipulating prototypes

/*
  function Person

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.greet = function () {
    return `Hi, my name is ${this.name}`
  }

  const p2 = Object.create(Person.prototype, {
    name: {
      value: 'Wendell',
      enumerable: true,
    },

    age: {
      value: 16,
      enumerable: true
    }
  });

  console.log(p2.greet()); // -> Hi, my name is Wendell

  In this case, first we define the constructor and a method available in it's
  prototype. Then, with the Object.create() method, we first pass as argument
  the prototype of the object we are creating, and then describe the properties
  we want it to have.

  It's a simple example, but we can give objects different prototypes according
  to the situation.
*/
