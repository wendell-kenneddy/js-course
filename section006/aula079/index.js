// Factory Functions and Prototypes

/*
  const greeting = {
    greeting() {
      return `Hi, my name is ${this.name}. How are you?`;
    }
  };

  const birthdate = {
    birthdate() {
      return `I was born in ${new Date().getFullYear() - this.age}`;
    }
  };

  const personProto = Object.assign({}, greeting, birthdate);

  const createPerson = (name, age) => {
    return Object.create(personProto, {
      name: {
        value: name,
        enumerable: true,
        writable: false,
        configurable: false
      },

      age: {
        value: age,
        enumerable: true,
        writable: false,
        configurable: false
      }
    });
  };

  const p1 = createPerson('John', 16);
  console.log(p1.greeting()); // -> Hi, my name is John. How are you?
  console.log(p1.birthdate()); // -> I was born in 2005.

  In this case, we didn't used inheritance, but composition. Every method can be
  globally reused, in a class or in other function, for example.
*/
