/*
Use spread syntax to invoke the prod function with arr and explain what is happening as part of your answer.
*/

const arr = [1, 2, 3];

function prod(num1, num2) {
  return num1 * num2;
}

console.log(prod(...arr));

// third element in arr is entered as an obsolete argument with no parameter, so it's simply ignored


