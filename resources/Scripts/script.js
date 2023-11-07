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

    const checkWinner = () => {
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                gameOver = true;
                messageElement.textContent = `${currentPlayer.name} wins!`;
                return;
            }
        }
        if (!board.includes("")) {
            gameOver = true;
            messageElement.textContent = "It's a tie!";
        }
    };

    const makeMove = (index) => {
        if (!gameOver && !board[index]) {
            board[index] = currentPlayer.symbol;
            displayBoard();
            checkWinner();
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        }
    };

    const restartGame = () => {
        board.fill("");
        currentPlayer = player1;
        gameOver = false;
        messageElement.textContent = "";
        displayBoard();
    };
    
    const player1 = Player("Player 1", "X");
    const player2 = Player("Player 2", "O");
    currentPlayer = player1;

    restartButton.addEventListener("click", restartGame);

    return { displayBoard };
}) ()

Game.displayBoard();