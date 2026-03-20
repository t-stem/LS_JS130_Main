// Use rest syntax to create a function sum that takes an arbitrary number of arguments and returns their sum.

function sum(...rest) {
  return [...rest].reduce((sum, num) => sum + num, 0);
}

console.log(sum(5, 5, 10));