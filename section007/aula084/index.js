// Static methods

/*
  Static methods are methods called directly by the class, not by any instance
  of it. New instances of the class don't have access to these methods.

  Also, the 'this' keyword inside a static method will refer to the class itself.

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    sayHi() {
      console.log(`${this.name} is saying hi.`);
    }

    static exampleMethod() {
      console.log('Hi, I\'m a static method!');
    }
  }

  const p1 = new Person('John', 16);
  p1.sayHi(); // -> John is saying hi.
  p1.exampleMethod(); // -> Error
  Person.exampleMethod(); // -> Hi, I'm a static method!
*/
