function reduce(arr, callback, accumulator) {
  let index;

  if (accumulator === undefined) {
    accumulator = arr[0];
    index = 1
  } else {
    index = 0;
  }

  for (index; index < arr.length; index += 1) {
    let currElement = arr[index];
    accumulator = callback(accumulator, currElement);
  }

  return accumulator
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]




function filter(arr, callback) {
  return reduce(arr, (filteredArr, currValue) => {
    if (callback(currValue) === true) {
      filteredArr.push(currValue);
    }
    return filteredArr; // FIX: THE CALLBACK HAS TO RETURN A VALUE
  }, []);
}

console.log(filter([1, 2, 3, 3], (num) => num === 3));
console.log(filter(['a', 'a', 'b', 'a', 'b', 'c'], (char) => ['b', 'c'].includes(char)));



function map(arr, callback) {
  return reduce(arr, (mappedArr, currElement) => {
      mappedArr.push(callback(currElement));
      return mappedArr;
  }, []);
}

console.log(map([1, 2, 3], (num) => num * 2));
console.log(map(['a', 'b', 'c'], (char) => char + 'x'));