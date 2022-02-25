const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 10;

const checkGuess = num => {
if(typeof num === "number") return true;
return false;
}

const askGuess = () => {
  rl.question("Guess a number: ", guess => {

    if(checkGuess(guess) === false) {
      console.log("Enter an actual number");
      askGuess();
    }

    guess = Number(guess);

    if(guess === secretNumber) {
      console.log("Correct!");
      rl.close();
    }
    else if(guess > secretNumber) {
      console.log("Too high");
      askGuess();
    }
    else if(guess < secretNumber) {
      console.log("Too low");
      askGuess();
    }
  });
  console.log("YOU WIN");
}

askGuess();
