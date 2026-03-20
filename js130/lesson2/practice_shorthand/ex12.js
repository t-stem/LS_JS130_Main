/*
Use destructuring to extract the c property of obj from a new variable called 
tail and extract the remaining properties into a new object called obj2.
*/

const obj = { a: 'a', b: 'b', c: 'c' };

let {c: tail, ...objNew} = obj;
console.log(tail, objNew);