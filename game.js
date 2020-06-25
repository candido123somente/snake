let stage = document.getElementById("GameCanvas");
let context = stage.getContext("2d");
setInterval(inGame, 60);


let boardSize = 20;

var snakeX = 5;
var snakeY = 5;

var appleX = Math.floor(Math.random()*boardSize);
var appleY = Math.floor(Math.random()*boardSize);

function inGame(){

context.fillStyle = "black";
context.fillRect(2,2,596,396);

context.fillStyle = "green";
context.fillRect(snakeX*boardSize, snakeY*boardSize, boardSize, boardSize);

context.fillStyle = "red";
context.fillRect(appleX*boardSize, appleY*boardSize, boardSize, boardSize);


}
