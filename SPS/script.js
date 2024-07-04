document.addEventListener("DOMContentLoaded", () => {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreDiv = document.getElementById('player-score');
    const computerScoreDiv = document.getElementById('computer-score');
    const resultMessageDiv = document.getElementById('result-message');

    const playerImages = {
        stone: document.getElementById('Stone'),
        paper: document.getElementById('paper'),
        scissors: document.getElementById('scissors')
    };

    const computerImages = {
        stone: document.getElementById('stone-computer'),
        paper: document.getElementById('paper-computer'),
        scissors: document.getElementById('scissors-computer')
    };

    const choices = ['stone', 'paper', 'scissors'];

    function resetImages() {
        for (const key in playerImages) {
            playerImages[key].style.display = 'none';
            computerImages[key].style.display = 'none';
        }
    }

    function showPRStone() {
        playGame('stone');
    }

    function showPPaper() {
        playGame('paper');
    }

    function showPScissors() {
        playGame('scissors');
    }

    function playGame(playerChoice) {
        resetImages();
        playerImages[playerChoice].style.display = 'block';

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerImages[computerChoice].style.display = 'block';

        determineWinner(playerChoice, computerChoice);
    }

    function determineWinner(playerChoice, computerChoice) {
        let resultMessage = '';
        if (playerChoice === computerChoice) {
            resultMessage = "It's a tie!";
        } else if (
            (playerChoice === 'stone' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'stone') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            playerScore++;
            resultMessage = "You win!";
        } else {
            computerScore++;
            resultMessage = "Computer wins!";
        }

        playerScoreDiv.textContent = playerScore;
        computerScoreDiv.textContent = computerScore;
        resultMessageDiv.textContent = resultMessage;
    }

    window.showPRStone = showPRStone;
    window.showPPaper = showPPaper;
    window.showPScissors = showPScissors;
});
