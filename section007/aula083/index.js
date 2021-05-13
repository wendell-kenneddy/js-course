// Inheritance with Classes

/*
  Inheritance with classes is very simple. The subclass extends the superclass,
  and the constructor of the sublass needs to call the superclass constructor
  with the 'super' keyword, passing the necessary parameters. Then, the object
  created by the subclass will inherit all of the superclass methods.

  Polymorphism, in this case, works just the same as with constructor functions.
  If a called method is present on the subclass, it will be executed. If not,
  then the program will keep searching in the prototype chain.

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getInfo() {
      return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
  }

  class Employee extends Person {
    constructor(name, age, occupation) {
      super(name, age);
      this.occupation = occupation;
    }

    askForPromotion() {
      if (this.age < 30) return 'Age needs to be equal to or higher than 30.';

      return `${this.name} has been promoted.`;
    }
  }

  const p1 = new Person('John', 16);
  const e1 = new Employee('Mary', 31);
  console.log(p1.getInfo()); // Hi, my name is John and I'm 16 years old.
  console.log(e1.getInfo()); // Hi, my name is Mary and I'm 31 years old.
  console.log(e1.askForPromotion()); // Mary has been promoted
*/
