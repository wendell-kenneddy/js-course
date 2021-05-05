// The Map method

/*
  The map method executes a callback function to each element of an array,
  modifying the original array (if you do so) and returning a new one. To avoid
  modifying the original array, since it's passed by reference, we can create a
  new object using the spread operator. The callback function accepts the same
  parameters that the filter method callback accepts.

  const objArray = [
    {name: 'Cloud', game: 'FFVII'},
    {name: 'Zidane', game: 'FFIX'},
    {name: 'Noctis', game: 'FFXV'},
    {name: 'Squall', game: 'FFVIII'},
    {name: 'Tidus', game: 'FFX'},
    {name: 'Cecil', game: 'FFIV'},
    {name: 'Warrior of Light', game: 'FF'},
    {name: 'Lightning', game: 'FFXIII'},
  ];

  const protagonists = objArray.map(obj => obj.name);
  const pertinentGame = objArray.map(obj => obj.game);
  const withIds = objArray.map((obj, i) => {
    const objClone = { ...obj };
    objClone.id = (i + 1) * 1000;
    return objClone;
  })

  console.log(protagonists); // -> Cloud, Zidane, Noctis, Squall, Tidus...
  console.log(pertinentGame); // -> FFVII, FFIX, FFXV, FFVIII, FFX
  console.log(withIds); // -> { name: 'Cloud', game: 'FFVII', id: 1000 }...
*/
