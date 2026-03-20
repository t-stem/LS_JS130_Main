/*
OPTIONAL Write a function that takes 5 string arguments, and returns an object with 3 properties:
first: the first argument
last: the last argument
middle: the middle 3 arguments as a sorted array
After writing the function, write some code to call the function. The arguments you provide should come from an array. 

You should create local variables named first, last, and middle from the return value.
*/

function func(one, two, three, four, five) {
  let obj = {first: one, last: five, middle: [two, three, four]};
  obj.middle.sort((a, b) => a - b);
  return obj;
}

let args = ['a', 'b', 'c', 'd', 'e']
let {first, last, middle} = func(...args);
console.log(first);
console.log(last);
console.log(middle);


