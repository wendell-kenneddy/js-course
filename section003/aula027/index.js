// The ternary operator

/*
  There's not much to talk about it. It's like a shorthand to if else:
    const myNum = 10

    myNum < 11
      ? console.log('Lower than 11)
      : console.log('Higher than 11 or equals to')

    The output would be the first console.log().

    Note that we can't do everything we do with if else here, like returning values.
*/

const myNum = 10

myNum < 11
  ? console.log('Lower than 11')
  : console.log('Higher than 11 or equals to')
