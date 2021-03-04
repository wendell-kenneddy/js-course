// Short-circuit evaluation

/*
  Basically, is using the logical operators to return a value if the other is
  null (in the case of the || operator), or return the value that pretends to be
  false (in the case of the && operator.)

  To understand that, first we need to know what a falsey value is: a value that
  evaluates as false. So when we do things like 'Cloud' && 0, the return will be
  always the falsey value (using the || operator would return 'Cloud').
  Ex:
    console.log('Cloud' && 'Tifa' && 'Aerith' && 0) // -> 0
    console.log(null || undefined || 'Aerith' || 0) // -> Aerith

    const a = 0
    const b = false
    const c = 'false'
    const d = null
    const e = undefined

    console.log(a || b || c || d || e) // -> false, which is true.
*/

