function fibonacci(num) {
  let index = num - 1;
  let value = 0;
  let fib = [0, 1];

  if (num < 1) return 0;

  while (index > 0) {
    value = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(value);
    index--;
  }
  return fib[fib.length - 1];
}

if (require.main === module) {
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expect 3");
  console.log("=>", fibonacci(5));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

/*
Create FS generator. Compare each iteration to num (-1 as 0,1 is the starting point).
While index is greater than 0, the value var = the last element plus the second to last
elment in the fib array. Then, that value is pushed to fib array and returned when the index,
which is decremented every iteration. Another option is memoization, which is storing value in
a hash and checking
*/

// missed "Seq starts with 0 followed by 1"
// countdown to avoid issues with low parameters as inputs
