/*
In our solution for the previous problem, what do you think would happen if you replaced let delay with var delay? 
Go ahead and try it and see if you can explain the difference in behavior.
*/

function delayLog() {
  for (var i = 1; i <= 10; i += 1) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}

delayLog();

/*
ANSWER:
With let, every iteraton of the loop creates a new 'for' blook with its own i variable. This causees console.log to log the value of i in its own block. 
With var, the entire delayLog function uses the same var. The loop executes practically instantly and ends when i equals 11. When the first timer expires, it uses the value of i that's available in the function's closure at that time, which is 11.
*/