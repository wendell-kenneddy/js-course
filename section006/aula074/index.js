// Prototypes

/*
  Javascript is a prototype based language. What this means, is that every
  object has a prototype object, from wich it inherits some of it's properties
  and methods. These properties and methods are defined by the
  <Constructor>.prototype.<prop> notation.

  Objects don't actually inherit, but they have access to the methods and
  properties that their prototype has, by the prototype chain. When some
  property or method of an object is called, first the engine searches in the
  object itself. Then, if it didn't find, goes up in the prototype chain, until
  reaching the Object prototype itself, the father of all other objects.

  function Person(fname, lname, age) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.greet = () => `Hi, my name is ${this.fname} ${this.lname}!`
  }

  In this case, for each new object created by this constructor function, a new
  greet method will be created. We can avoid this by defining the method to the
  prototype of the constructor function, so every object created will have
  access to this method in the prototype chain.

  Person.prototype.greet = () => `Hi, my name is ${this.fname} ${this.lname}!`;

  If the greet method created in the body of the constructor function remain, it
  will overwrite the one defined in the prototype, because of the prototype chain.
*/
