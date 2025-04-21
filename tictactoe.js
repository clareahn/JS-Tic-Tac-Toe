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