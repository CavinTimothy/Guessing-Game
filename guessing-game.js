const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// let secretNumber = askRange();

const checkGuess = num => {
if(!Number(num)) return false;
return true;
}
const randomInRange = (min,max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min+1)+min)
}
const askRange = () =>{
  let mini;
  let maxi;
  rl.question("Enter a min", mini =>{
    rl.question("Enter a max", maxi =>{
      console.log(`I'm thinking of a number between ${mini} and ${maxi}`);
      console.log(randomInRange(mini,maxi));
      askGuess();
      // rl.close();
    })
  })
  // return randomInRange(mini,maxi);
}
// const randomInRange = (min,max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random()*(max-min+1)+min)
// }
let secretNumber;
const askGuess = () => {
  secretNumber = askRange();
  rl.question("Guess a number: ", guess => {

    if(!checkGuess(guess)){
      console.log("Enter an actual number");
      askGuess();
    }

    guess = Number(guess);

    if(guess === secretNumber) {
      console.log("Correct!");
      rl.close();
    }
    else if(guess > secretNumber) {
      console.log("Too high")
      askGuess();
    }
    else if(guess < secretNumber) {
      console.log("Too low");
      askGuess();
    }
  });
}

askGuess();
