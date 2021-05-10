// Inheritance

/*
  Inheritance, to put it simply, is nothing but an object receiving the
  properties of other prototype.

  function Person(name, age, interest) {
    this.name = name;
    this.age = age;
    this.interest = interest;
  }

  Person.prototype.greeting = function() {
    return `Hi, my name is ${this.name}, I'm ${this.age} years old and my
    current major interest is ${this.interest}! How about yours?`;
  };

  Person.prototype.farewell = function() {
    return `Goodbye! Hope we meet again!`;
  };

  Person.prototype.birthdate = function() {
    return `I was born in ${new Date().getFullYear() - this.age}`;
  };

  All objects created by the Person constructor will have access to these three
  methods, by the prototype chain. But what if we needed to extend it to another
  constructor?

  function Teacher(name, age, interest, subject) {
    Person.call(this, name, age, interest);
    this.subject = subject;
  }

  Teacher.prototype = Object.create(Person.prototype);
  Teacher.prototype.constructor = Teacher;
  Teacher.prototype.teach function() {
    return `Today we are learning about ${this.subject}!`
  }

  With Person.call(), passing this (the current empty object at that context),
  we chained the constructors, so no need to rewrite the same properties as we
  specialize our constructor.

  To make the new object have access to the
  methods of the Person prototype, we need to specify an empty object having the
  Person.prototype as prototype, just like we did with the Teacher.prototype =
  Object.create(Person.prototype).

  By setting the prototype as the Person.prototype, we changed the constructor
  of all objects created by the Teacher constructor. To revert this, we set the
  Teacher.prototype.constructor back to Teacher.

  Then, all objects created by the Teacher constructor will have access to the
  methods of the Person.prototype object.
*/
