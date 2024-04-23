let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choices");
let message = document.querySelector("#msg");
let userScoreBoard = document.querySelector("#score1");
let compScoreBoard = document.querySelector("#score2");

const getcompChoice = () => {
  let option = ["rock", "paper", "scissors"];
  randIndex = Math.floor(Math.random() * 3);
  return option[randIndex];
};

const drawGame = () => {
  // console.log("Draw the Game:");
  message.innerHTML = "The Game was Draw, Plz Try Again";
  message.style.background = "blue";
};

const showWinner = (userWin, compChoice, userChoice) => {
  if (userWin) {
    userScore++;
    userScoreBoard.innerHTML = userScore;
    message.innerHTML = `You Win the Game!, ${userChoice} beats ${compChoice}`;
    message.style.background = "green";
  } else {
    compScore++;
    compScoreBoard.innerHTML = compScore;
    message.innerHTML = `You Lose the Game! ${compChoice} beats ${userChoice}`;
    message.style.background = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userchoice selected", userChoice);
  const compChoice = getcompChoice();
  console.log("Computer Choice", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if ((userChoice === "rock")) {
      userWin = compChoice === "paper"?false:true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors"?false:true;
    } else {
      userWin = compChoice === "rock"?false:true;
    }
    showWinner(userWin, compChoice, userChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
