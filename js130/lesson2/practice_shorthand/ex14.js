/*
Invoke your sum function using both a list of numbers and spread syntax from an array of numbers.
*/

function sum(...rest) {
  return [...rest].reduce((sum, num) => sum + num, 0);
}

console.log(sum(1, 2, 3));
let arr = [5, 5, 10];
console.log(sum(...arr));