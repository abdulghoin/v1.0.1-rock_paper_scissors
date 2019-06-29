let userScore = 0;
let compScore = 0;

// DOM
const userScoreDOM = document.getElementById("user-score");
const compScoreDOM = document.getElementById("computer-score");
const scoreBoardDOM = document.querySelector(".score-board");
const resultDOM = document.querySelector(".result > p");
const rockDOM = document.getElementById("rock");
const paperDOM = document.getElementById("paper");
const scissorDOM = document.getElementById("scissor");
let choices = [
  {
    DOM: rockDOM,
    name: "rock"
  },
  {
    DOM: paperDOM,
    name: "paper"
  },
  {
    DOM: scissorDOM,
    name: "scissor"
  }
];

function main() {
  for (const iterator of choices) choiceEvent(iterator);
}

function choiceEvent({ DOM, name }) {
  DOM.addEventListener("click", () => game(name));
}

function game(userChoice) {
  const compChoice = getCompChoice();
  const choicedDOM = document.getElementById(userChoice);
  switch (`${userChoice}-${compChoice}`) {
    case "rock-scissor":
    case "paper-rock":
    case "scissor-paper":
      userWin({ DOM: choicedDOM });
      break;
    case "rock-paper":
    case "paper-scissor":
    case "scissor-rock":
      userLose({ DOM: choicedDOM });
      break;
    default:
      draw({ DOM: choicedDOM });
  }
}

function glow({ className, DOM }) {
  DOM.classList.add(className);
  setTimeout(() => DOM.classList.remove(className), 400);
}

function userWin({ DOM }) {
  userScore++;
  userScoreDOM.innerHTML = userScore;
  resultDOM.innerHTML = "You win";
  glow({ DOM, className: "win-glow" });
}

function userLose({ DOM }) {
  compScore++;
  compScoreDOM.innerHTML = compScore;
  resultDOM.innerHTML = "You lose";
  glow({ DOM, className: "lose-glow" });
}

function draw({ DOM }) {
  resultDOM.innerHTML = "Draw";
  glow({ DOM, className: "draw-glow" });
}

function getCompChoice() {
  let choicesName = choices.map(({ name }) => name);
  return choicesName[Math.floor(Math.random() * choicesName.length)];
}

main();
