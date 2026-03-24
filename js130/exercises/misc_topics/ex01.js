/*
How can we refactor the function definition below (without changing the function invocation)
so that we don't need to use the arguments object?
*/

function sum() {
  let values = Array.prototype.slice.call(arguments);

  return values.reduce(function(a, b) {
    return a + b;
  });
}

let num = sum2(1, 4, 5, 6); // 16
console.log(num)

function sum2(...args) {
  return args.reduce((sum, num) => sum + num, 0);
}