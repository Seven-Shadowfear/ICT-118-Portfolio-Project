document.addEventListener('DOMContentLoaded', function () {
  const choices = ['rock', 'paper', 'scissors'];
  const buttons = document.querySelectorAll('.choice');
  const playerChoiceDisplay = document.getElementById('player-choice');
  const computerChoiceDisplay = document.getElementById('computer-choice');
  const winnerDisplay = document.getElementById('winner');
  


  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const playerChoice = button.dataset.choice;
      const computerChoice = getComputerChoice();
      const winner = getWinner(playerChoice, computerChoice);

      playerChoiceDisplay.textContent = `You chose: ${playerChoice}`;
      computerChoiceDisplay.textContent = `Computer chose: ${computerChoice}`;
      winnerDisplay.textContent = winner;
    });
  });

  function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function getWinner(player, computer) {
    if (player === computer) {
      return "It's a tie!";
    }

    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  }
});
