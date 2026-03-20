d// Rewrite the final line of code in the following snippet using classic JavaScript syntax:

const obj = {
  first: "I am the first",
  second: "I am the second",
  third: [1, 2, 3],
  rest: { a: 'a', b: 'b' },
};

// const { first, second, ...rest } = obj;

let first = obj.first;
let second = obj.second;
let rest = {third: obj.third, rest: obj.rest};