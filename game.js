let stage = document.getElementById("GameCanvas");
let context = stage.getContext("2d");
document.addEventListener("keydown", keyPush);
setInterval(inGame, 60);


let boardPieceSize = 20;
let boardAmountX = 30;
let boardAmountY = 20;

let speed = 1/2;
let speedX = 1/2;
let speedY = 0;
let drag = [];
let tail = 3;

let snakeX = 8;
let snakeY = 4;

let appleX = Math.floor(Math.random() * 29);
let appleY = Math.floor(Math. random() * 19);

let points = 0;

function inGame(){

context.fillStyle = "black";
context.fillRect(0,0,600,400);


context.fillStyle = "red";
context.fillRect(appleX*boardPieceSize, appleY*boardPieceSize, boardPieceSize, boardPieceSize);



context.fillStyle = "green";
for (var i = 0; i < drag.length; i++){
    context.fillRect(drag[i].dragX*boardPieceSize, drag[i].dragY*boardPieceSize, boardPieceSize, boardPieceSize);
};


drag.push(
    {dragX:snakeX, dragY: snakeY}
)
while (drag.length > tail){
    drag.shift();
}

snakeX = snakeX + speedX;
snakeY = snakeY + speedY;


if (snakeX > boardAmountX -1){ 
    snakeX = 0;
}
if (snakeX < 0){
    snakeX = boardAmountX - 1;
}
if (snakeY > boardAmountY -1){
    snakeY = 0;
}
if (snakeY < 0){
    snakeY = boardAmountY - 1;
}

if (snakeX == appleX && snakeY == appleY){
    points = points + 1;
    console.log(points);
    tail = tail + 1;
    appleX = Math.floor(Math.random() * 29);
    appleY = Math.floor(Math. random() * 19);
   
}




}

function keyPush(event){

    switch (event.keyCode){
        case 37: // left key
        speedX = - speed;
        speedY = 0;
        break;
        case 38: // up key
        speedX = 0;
        speedY = - speed;
        break;
        case 39: // right key
        speedX = + speed;
        speedY = 0;
        break;
        case 40: // down key
        speedX = 0;
        speedY = + speed;
        break;
        default:
            break;
    }
}
