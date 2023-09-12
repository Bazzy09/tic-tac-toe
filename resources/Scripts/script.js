const Player = (name, symbol) => {
    return { name, symbol };
}

const Game = (() => {
    const board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer;
    let gameOver = false;
})
