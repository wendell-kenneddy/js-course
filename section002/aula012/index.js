let a = 'A' // B
let b = 'B' // C
let c = 'C' // A

a = a + b
b = c
c = a.charAt(0)
a = a.charAt(1)

console.log(a, b, c)

// Solução do professor:

/* let varA = 'A'
let varB = 'B'
let varC = 'C'
const tempVar = varA

varA = varB
varB = varC
varC = tempVar

console.log(varA, varB, varC) */