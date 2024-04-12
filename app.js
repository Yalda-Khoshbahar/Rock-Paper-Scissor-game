const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win.");
    playerScore++;
  } else if (result === "computer") {
    console.log("You lose!");
    computerScore++;
  } else {
    console.log("It's a tie.");
  }

  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  console.log("------------------------------");
};

const play = () => {
  const playerChoice = prompt("Choose rock, paper, scissors");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${playerChoice}.`);
  } else {
    console.log("You cheated!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer chooses ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play();
};

play();
