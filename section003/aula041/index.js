// The keywords break and continue

/*
  The continue keyword is used in a loop (for, for..in, for..of, while and
  do..while) to skip the code referring to the current iteration.

  const numArray = [10, 98, 30, 80, 77, 420];

  for (let num of numArray) {

    if (num %2 > 0) {
      continue;
    }

    console.log(num);
  }

  // -> 10, 98, 30, 80, 420

  In this case, the loop will skip the code that would be executed referring the
  number 77, since 77 %2 > 0.

  The keyword break will force the loop to stop.

  const numArray = [10, 98, 30, 80, 77, 420];

  for (let num of numArray) {

    if (num %2 > 0) {
      console.log('Found an odd number. Breaking out of the loop.')
      break;
    }

    console.log(num);
  }

  // -> 10, 98, 30, 80, Found an odd number. Breaking...

  This works just fine for while and do while loops too, but for these types of
  loops we have to be careful with the control variable update, to prevent an
  infinite loop.

  const numArray = [10, 98, 30, 80, 77, 420];
  let i = 0;

  while (i <= 10) {

    if (i === 7) {
      i++;
      console.log('Found the number 7. Skipping...')
      continue;
    }

    if (i === 9) {
      i++;
      console.log('Found the number 9. Breaking out of the loop...')
      break;
    }

    console.log(i);
    i++;
  }

  In this case, we have to update the control variable BEFORE using the continue
  or break keywords, to prevent the loop iterating the same number over and over
  again.
*/
