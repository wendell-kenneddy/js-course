// Getters and setters

/*
  Getters and setters are ways to isolate/protect properties of an object, or to
  dinamically calculate it's value, without calling an external function. The
  get keyword associates the property value to the return of a function. The
  setter can be used to protect the property when being modified.

  function Person(name, nick, age) {
    let privateAge = age;

    Object.defineProperties(this, {
      name: {
        value: name,
        enumerable: true,
        writable: true,
        configurable: false
      },

      nick: {
        value: nick,
        enumerable: true,
        writable: true,
        configurable: false
      },

      age: {
        enumerable: true,
        configurable: false,
        get: function() { return privateAge; },
        set: function(value) {
          if (typeof value !== 'number') {
            throw new TypeError('Age must be a number.')
          }

          privateAge = value;
        }
      },

    })
  }
*/
