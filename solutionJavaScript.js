// Node js module for CLI input
const readline = require('readline');
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function for fibonacci numbers
const fibonacci = function (num) {
  // Local variables
  let output;
  let num1 = 0;
  let num2 = 1;
  let num3;

  // handle user input for invalid input
  num <= 0
    ? (output = 'Invalid')
    : num == 1
    ? (output = '0')
    : (output = '0 1');

  if (num > 2) {
    output = '0 1';
    for (let i = 0; i < num - 2; i++) {
      num3 = num1 + num2;
      num1 = num2;
      num2 = num3;
      output += ` ${num3}`;
    }
  }

  // Print output in CLI
  console.log(`Fibonacci Sequence for ${num} elements is : ${output}`);
};

//Get user input through CLI
userInput.question('Enter number of elements required : ', (num) => {
  fibonacci(num);
  userInput.close();
});
