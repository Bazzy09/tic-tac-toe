# Tic-Tac-Toe Game ReadMe

This readme provides an overview of the JavaScript code that implements a simple Tic-Tac-Toe game and how to use it in an HTML file.

## Introduction

This code creates a basic implementation of the classic game of Tic-Tac-Toe. Two players can take turns marking spaces on a 3x3 grid. The first player to form a horizontal, vertical, or diagonal line of their symbol (X or O) wins the game. The code uses JavaScript to handle game logic and HTML for the user interface.

## Usage

To use this code in your web application, follow these steps:

1. Download the provided HTML file (e.g., `index.html`) and make sure you have the necessary styles and scripts linked in your project, as shown in the HTML file provided.

2. Create or include the `styles.css` file in the "resources/Styles" folder to style the game board and elements.

3. Create or include the `script.js` file in the "resources/Scripts" folder to implement the JavaScript code.

4. Open the HTML file in a web browser to play the Tic-Tac-Toe game.

## Code Explanation

The JavaScript code provided in `script.js` creates the game logic and manages the game's state. Here's a brief explanation of the code:

### Players and Game Initialization

- Two players are defined using the `Player` function, with names and symbols "X" and "O."

- The `Game` object is created as an immediately invoked function expression (IIFE) to encapsulate the game logic and prevent global variable pollution.

- The game board is represented as an array of 9 empty strings, each corresponding to a cell on the 3x3 grid.

- The `currentPlayer` variable keeps track of whose turn it is.

- The `gameOver` flag is used to determine if the game has ended.

### Winning Combinations

- The `winningCombos` array contains arrays of indexes that represent the winning combinations for the game, such as horizontal, vertical, and diagonal wins.

### HTML Elements

- The code selects HTML elements by their `id` attributes, such as the game board (`boardElement`), message area (`messageElement`), and a restart button (`restartButton`).

### Displaying the Game Board

- The `displayBoard` function updates the game board's visual representation by creating and appending HTML elements for each cell, populating them with the player's symbols, and adding event listeners to handle moves.

### Checking for a Winner

- The `checkWinner` function iterates through the `winningCombos` to check if any player has won. If a win is detected, it sets `gameOver` to `true` and displays a message with the winning player's name.

- If there are no empty cells left on the board and no winner is found, the game is declared a tie.

### Making a Move

- The `makeMove` function is called when a player clicks on a cell. It updates the game board, checks for a winner, and switches the current player.

### Restarting the Game

- The `restartGame` function resets the game board, sets the current player to Player 1, clears the game-over state, and removes any messages.

### Player Initialization and Event Listeners

- Two players are initialized with their names and symbols.

- The `currentPlayer` is initially set to Player 1.

- An event listener is added to the restart button to trigger the `restartGame` function when clicked.

- Finally, the `displayBoard` function is invoked to initialize and display the game board.

## Playing the Game

After following the usage instructions and opening the HTML file in a web browser, players can take turns clicking on cells to make their moves. The game will display the current player's symbol in each cell and announce the winner or a tie when the game ends.

