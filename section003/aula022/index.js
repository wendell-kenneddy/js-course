// Logical operators

/*
  Logical operators do some logic to check if a expression returns true or
  false. They are:

  && - AND - returns true if both expressions are true
  || - OR - returns true if one of the expressions return true
  ! - NOT - negates the value. Like flipping a bit, so true turns to false and
  vice-versa
  ? : - Ternary Operator - If the given expression returns true, execute the
  code in '?', else, execute the code in ':'

  Ex:
    const a = 1
    const b = 2

    console.log(a == 1 && b == 2) // -> True
    console.log(a > 2 || b < 3) // -> True
    console.log(a == 3 && b == 2 || 3 > 1 || 3 < 1) // -> True
    console.log(a == b || b != b) // -> False
*/