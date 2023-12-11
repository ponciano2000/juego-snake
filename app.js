//Accedemos al dom de los elementos
const boasrd = document.getElementById("board");
const scoreBoard = documen.getElementById("scoreBoard");
const startButon = document.getElementById("start");
const gmaeOverSing = document.getElementById("gameOver");

//Game settings
const boardSize = 10;
const gameSpeed = 100;
const squareTypes = {
    emptySquare: 0,
    snakeSquare: 1, 
    foodSquare: 2
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10, 
    ArrowRight: 1, 
    ArrowLeft: -1
};

//Game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;