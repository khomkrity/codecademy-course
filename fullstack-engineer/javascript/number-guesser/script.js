let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Random integer from 0 to 9
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (firstValue, secondValue) => Math.abs(firstValue - secondValue);

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  const humanClose = getAbsoluteDistance(target, currentHumanGuess);
  const computerClose = getAbsoluteDistance(target, computerGuess);
  if (humanClose <= computerClose) {
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
