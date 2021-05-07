// Object.defineProperty()

/*
  The Object.defineProperty() and Object.defineProperties() methods are used to
  define and configure the properties of an object. It's called directly from
  the Object constructor.

  function Person(name, nick, age) {
    Object.defineProperties(this, {
      name: {
        enumerable: true,
        value: name,
        writable: false,
        configurable: false
      },

      nick: {
        enumerable: true,
        value: nick,
        writable: false,
        configurable: false
      },

      age: {
        enumerable: true,
        value: age,
        writable: false,
        configurable: false
      }
    })
  }

  The enumerable property tells if the key can appear in a for..in loop for
  example; the value property is the value of the key; the writable property
  tells if the key can be rewritten later, and the configurable property tells
  if the key can be reconfigured with the Object.defineProperty(ies) method, or deleted.
*/
