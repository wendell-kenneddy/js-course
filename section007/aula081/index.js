// Classes

/*
  Classes are another way to do the same things that a constructor function
  does.

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    talk(subject) {
      console.log(`${this.name} is talking about ${subject}.`);
    }
  }

  const p1 = new Person('John', 16);
  console.log(p1); // -> Person { name: 'John', age: 16 }
  p1.talk('programming'); // -> John is talking about programming.

  We don't need to set the functions to the prototype of the Person, it is
  already done.
*/
