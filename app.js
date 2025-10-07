const gameMessage = document.getElementById(`gameMessage`);
const spinButton = document.getElementById(`spinButton`);

function startGame() {
    if (gameActive) {
        gameMessage.textContent = `Click to win!!!!`;
    }
}
