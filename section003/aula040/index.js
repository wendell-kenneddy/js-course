// While and do..while loops

/*
  For loops are extremely useful in cases when we know the number of items in
  the array or object. But in cases we don't know, we use while or do..while
  loops.

  A while loop needs a external scope control variable.

  const getRandomNum = () => Math.round(Math.random() * (50 - 1) + 1);
  let i = getRandomNum();

  while (i !== 10) {
    console.log(i);
    i = getRandomNum();
  }

  In this case, we don't know when the value of the variable i will be 50, so
  it's a perfect case to use the while loop.

  The do..while loop works just the same, exepct it first executes the code, and
  then checks the condition. To put it simple, it always executes the code at
  least one time.

  do {
    console.log(i)
    i = getRandomNum()
  } while (i !== 10);

  In this case, since it will first change the value of the variable to a random
  value, the loop will continue even if we set the value of the variable to be
  initially 10.
*/
