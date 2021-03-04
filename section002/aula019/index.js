// Assign by value and reference

/*
  Variables assigned by value are just a copy of the value from where they took
  it's own value. So, changing one doesn't change the other. All the primitive
  types - string, number, boolean, undefined, null (symbol, bigint) - are
  assigned by value.
    let a = 'A'
    let b = a
    a = 'B'

    console.log(a, b) // -> B A

  Variables assigned by reference point to the same location in the memory as
  the value from where they're taking the value. All the non primitive types are
  assigned by reference.
    const myCar = {
      name: 'vrumVrum',
      color: 'red',
      maxSpeed: '120km/h'
    }

    const myOtherCar = myCar
    myOtherCar.name = 'bigBoy'

    Now both myCar and myOtherCar name properties are 'bigBoy'.
*/