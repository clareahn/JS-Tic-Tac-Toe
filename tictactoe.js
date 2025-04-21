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