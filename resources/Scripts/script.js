const Player = (name, symbol) => {
    return { name, symbol };
}

const Game = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer;
    let gameOver = false;

     const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
    const restartButton = document.getElementById("restart-button");

    const displayBoard = () => {
        boardElement.innerHTML = "";
        board.forEach((cell, index) => {
            const cellElement = document.createElement("div");
            cellElement.classList.add("cell");
            cellElement.textContent = cell;
            cellElement.addEventListener("click", () => makeMove(index));
            boardElement.appendChild(cellElement);
        });
    };
})
