let stage = document.getElementById("GameCanvas");
let context = stage.getContext("2d");
this.document.addEventListener("keydown", keyPush);

setInterval(inGame, 30);

let boardSize = 20;
let speed = 5;

let snakeX = 1;
let snakeY = 1;

let appleX = 1;
let appleY = 1;

function inGame(){
this.document.addEventListener("keydown", keyPush);
context.fillStyle = "black";
context.fillRect(0,0,600,400);

context.fillStyle = "green";
context.fillRect(snakeX, snakeY, boardSize, boardSize);

context.fillStyle = "red";
context.fillRect(appleX, appleY, boardSize, boardSize);

if (snakeX >= stage.width){
    snakeX = 0 - boardSize;
}
if (snakeX <= 0 - 2*boardSize){
    snakeX = stage.width - 1;
}
if (snakeY > stage.height){
    snakeY = 0 - boardSize;
}
if (snakeY < 0 - 2*boardSize){
    snakeY = stage.height;
}


}

function keyPush(event){

    switch (event.keyCode){
        case 37: // tecla da esquerda
        snakeX = snakeX - speed;
        break;
        case 38: // tecla de cima
        snakeY = snakeY - speed;
        break;
        case 39: // tecla de direita
        snakeX = snakeX + speed;
        break;
        case 40: // tecla de baixo
        snakeY = snakeY + speed;
        break;
        default:
            break;
    }
}
