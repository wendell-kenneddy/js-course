import Person from './classPerson';

const name = 'John';
const nickname = 'Doe';
const p1 = new Person(name, nickname);

export { p1 as default, name as exampleName, nickname }
// Exports p1 as the default import (import p1 from ...)
// Exports name with the identifier exampleName
// Exports nickname as it is
// We could also export directly like this:
// export const name = 'John';
