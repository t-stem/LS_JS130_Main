function map(arr, callback) {
  let mappedArr = [];

  for (let index = 0; index < arr.length; index += 1) {
    let currElement = arr[index];
    let mappedElement = callback(currElement);
    mappedArr.push(mappedElement);
  }

  return mappedArr;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]