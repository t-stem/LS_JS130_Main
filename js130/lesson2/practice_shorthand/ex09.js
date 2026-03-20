/*
Use array and object destructuring to extract the elements and properties from arr and obj into individual variables.
*/
const arr = [1, 2, 3];
const obj = { a: 'a', b: 'b', c: 'c' };

let [arr1, arr2, arr3] = arr;
let {a, b, c} = obj;

console.log(arr1, arr2, arr3);
console.log(a, b, c);


