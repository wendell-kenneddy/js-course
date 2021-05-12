// Polymorphism

/*
  To put it simply, polymorphism is the concept of subclasses sharing methods of
  super classes, and having different behaviours for those methods, according to
  the situation.

  function Person (name, age) {
    this.name = name;
    this.age = age;
  }

  Person.prototype.showInfo = function() {
    return `Name: ${this.name}, age: ${this.age}.`
  };

  function Employee (name, age, occupation, salary) {
    Person.call(this, name, age);
    this.occupation = occupation;
    this.salary = salary;
  }

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  Employee.prototype.showInfo = function () {
    return `Name: ${this.name}, age: ${this.age}, occupation:
    ${this.occupation}, salary: U$ ${this.salary}/month.`
  }

  In this case, the showInfo method was overwritten in the subclass Employee, to
  since the subclass has properties that the superclass doesn't has.
*/
