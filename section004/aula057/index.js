// Factory Functions

/*
  Factory Functions are functions that return an literal object based on the
  given arguments. The returned object can have it's own methods, getters and
  setters. Multiple objects can be created using the same Factory Function.

  When writing the object that will be returned, it's common to use the keyword
  'this', that refers to the caller of the method.

  const createPerson = (fname = 'John', lname = 'Doe', age = 20, weight = 60,   height = 1.5) => {
  return {
    fname,
    lname,
    age,
    weight,
    height,
    get fullname() {
      return `${this.fname} ${this.lname}`
    },

    get imc() {
      return (this.weight / (this.height ** 2)).toFixed(2);
    },
  }
  };

  const myMirror = createPerson('Wendell', 'Kenneddy', 16, 60, 1.7)
  console.log(myMirror.fname); // -> Wendell
  console.log(myMirror.lname); // -> Kenneddy
  console.log(myMirror.age); // -> 16
  console.log(myMirror.weight); // -> 60
  console.log(myMirror.height); // -> 1.7
  console.log(myMirror.fullname); // -> Wendell Kenneddy
  console.log(myMirror.imc); // -> 20.76

  The get and set keywords are getters and setters, respectively. A getter is
  used, to put simply, return a value based on a method. A setter is used to set
  a property of the object and run a method in the process. Both getters and
  setters are called with the obj.prop notation.
*/
