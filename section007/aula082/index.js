// Getters and Setters with Classes

/*
  We can use getters and setters the same way as we use in constructor and
  factory functions, expect by the private variables. For those, we need to use
  Symbols.

  Each Symbol has an unique identifier, so each one is different from another,
  even if both have the same descriptor. This way, we can set a private property
  to a class by using the this[symbol] notation.

  const speed = Symbol('speed');
  class Car {
    constructor(name, speedLimit) {
      this.name = name;
      this[speed] = 0;
      this.speedLimit = speedLimit;
    }

    get speed() {
      return this[speed];
    }

    set speed(value) {
      if (typeof value !== 'number') {
        console.log('Please, enter a numeric value.');
        return;
      }

      if (value < 0) {
        console.log('Cannot set negative values as the car speed.');
        return;
      }

      if (value >= this.speedLimit) {
        console.log(`Cannot pass the speed limit ${this.speedLimit}.`);
        return;
      }

      this[speed] = value;
    }

    accelerate() {
      if (this[speed] >= this.speedLimit) {
        console.log('Speed limit reached.');
        return;
      }

      this[speed]++;
    }

    break() {
      if (this[speed] == 0) {
        console.log(`${this.name} already stopped.`);
        return;
      }

      this[speed]--;
    }
  }

  The getters and setters work as expected, protecting the property. The speed
  Symbol is used as a private variable of the class. If other classes access
  that same symbol, it will have a different value for each one.
*/
