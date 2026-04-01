/*
Write a function named startCounting that logs a number to the console every second, starting with 1. Each output number should be one greater than the previous one.
*/

function startCounting() {
  let currNum = 1;

  setInterval(() => {
    console.log(currNum);
    currNum += 1;
  }, 1000);
}

startCounting();