const prompt = require('prompt-sync')();
// Initialise boardgame to have 9 empty cells
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
// Set first player as 🐐
let currentPlayer = '🐐';
// Track whether game is ongoing
let gameActive = true;

/**
 * Prints the current state of the game board to the terminal.
 */
function printBoard() {
    console.log(`
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
        ---------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
        ---------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
        `);
}

/**
 * Handles a player's move:
 * - Checks if the chosen cell is empty
 * - Places the player's symbol
 * - Checks for a win or draw
 * - Switches to the next player if the game continues
 */
function handleMove(position) {
    if (gameBoard[position] === ' ') {
        gameBoard[position] = currentPlayer;
    } else {
        console.log("Cell already taken, choose another one.");
        return false; // Don't switch player if move is invalid
    }

    // Check if the current player has won
    if (checkWin()) {
        printBoard();
        console.log(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return true;
    }
    // Check for no empty cells/ a draw.
    if (gameBoard.every(cell => cell !== ' ')) {
        printBoard();
        console.log("It's a draw!");
        gameActive = false;
        return true;
    }
    
    // Switch to other player
    currentPlayer = currentPlayer === '🐐' ? '🍇' : '🐐';
    return true;
}

/**
 * Checks if the current player has met any of the 8 win conditions.
 * Returns true if a win is found, otherwise false.
 */
function checkWin() {
    const conditions = [
        [0,1,2], [3,4,5], [6,7,8], // Rows
        [0,3,6], [1,4,7], [2,5,8], // Columns
        [0,4,8], [2,4,6]           // Diagonals
        ];
  
    return conditions.some(([a, b, c]) => 
        gameBoard[a] === currentPlayer &&
        gameBoard[b] === currentPlayer &&
        gameBoard[c] === currentPlayer
    );
}
// Game loop: keeps running until there is a win or a draw
while (gameActive) {
    printBoard();
    const position = prompt(`Player ${currentPlayer}, enter your move (0-8): `);
    
    // Validate the input is between 0 and 8
    if (position >= 0 && position <= 8) {
        handleMove(parseInt(position));
    } else {
        console.log("Invalid input. Enter a number from 0 to 8.");
    }
}