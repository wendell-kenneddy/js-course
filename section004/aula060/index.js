// Recursion

/*
  Recursion is the action of a function calling itself until certain task is
  done. It's like a loop, but a lot easier to write and read. There's a maximum
  limit of recursions, wich is determined by the engine, and usually we can rely
  on it being 10000.

  const recursiveFunc = (max) => {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiveFunc(max);
  }

  recursiveFunc(0);
*/
