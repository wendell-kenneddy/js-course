// Node modules (CommonJS)

/*
  Back in the day, Javascript didn't have import and export like we do from ES6
  and beyond, so other alternatives were created. Modules are used to separate a
  project in little and reusable chunks, and to not pollute the global scope.
  With CommonJS, wich is used by NodeJS, we export modules like this:

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greeting() {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }

  We can export using three different notations:

  module.exports.<to_be_exported> = your_variable;
  module.exports = {
    your_variable,
    some_other_variable
  };
  exports.<to_bo_exported> = your_variable;

  Referring to the 'this' keyword will refer to the module itself, so
  this.<to_be_exported> will work too.

  module.exports.Person = Person;
*/
