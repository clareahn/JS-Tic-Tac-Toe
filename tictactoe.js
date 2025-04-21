const prompt = require('prompt-sync')();
// Initialise boardgame to have 9 empty cells
let gameBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
// Set first player as 🐐
let currentPlayer = '🐐';
// Track whether game is ongoing
let gameActive = true;