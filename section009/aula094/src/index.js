const data = [
  {
    name: 'John',
    age: 16
  },
  {
    name: 'Mary',
    age: 19
  },
  {
    name: 'Liz',
    age: 21
  }
];

const printData = () => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greeting() {
      console.log(`Hi, my name is ${this.name}. How are you?`);
    }
  }

  for (const { name, age } of data) {
    const person = new Person(name, age);
    person.greeting();
  }
};

printData();
