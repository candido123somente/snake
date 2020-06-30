let stage = document.getElementById("GameCanvas");
let context = stage.getContext("2d");
document.addEventListener("keydown", keyPush);
window.onload = currentScreen;


let boardPieceSize = 20;
let boardAmountX = 20;
let boardAmountY = 20;
let speed = 1/2;
let speedX = 1/2;
let speedY = 0;
let drag = [];
let tail = 3;

let snakeX = 8;     
let snakeY = 4;

let appleX = Math.floor(Math.random() * 19);
let appleY = Math.floor(Math. random() * 19);

let points = 0;

var switchscreen = "begin";

function menuGame(){
    
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "50px Helveltica";
    context.fillText("Snake", 130, 180);
    context.font = "15px Helveltica";
    context.fillText("Press space to start", 130, 320);
}

function endGame(){
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "45px Helveltica";
    context.fillText("GAME OVER", 70, 180);
    context.font = "18px Helveltica";
    context.fillText("score: " + points, 160, 210);
    context.font = "15px Helveltica";
    context.fillText("Press space to play again", 120, 310);
}

function stopGame(){
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "45px Helveltica";
    context.fillText("Continue", 100, 150);
    context.font = "15px Helveltica";
    context.fillText("Press space to go back", 115, 180);
    context.fillStyle = "white";
    context.font = "30px arial";
    context.fillText("Score " + points, 140, 255);
}

function inGame(){

context.fillStyle = "black";
context.fillRect(0,0,400,400);

context.fillStyle = "red";
context.fillRect(appleX*boardPieceSize, appleY*boardPieceSize, boardPieceSize, boardPieceSize);
context.fillStyle = "green";
for (var i = 0; i < drag.length; i++){
    context.fillRect(drag[i].dragX*boardPieceSize, drag[i].dragY*boardPieceSize, boardPieceSize, boardPieceSize);
    if (drag[i].dragX == snakeX && drag[i].dragY == snakeY){
        clearInterval(looping);
         endGame();
         points = 0;
         tail = 3; 
         appleX = Math.floor(Math.random() * 19);
         appleY = Math.floor(Math. random() * 19);  
         snakeX = 8;     
         snakeY = 4; 
         speedX = + speed;
         speedY = 0;
         switchscreen = "begin";
         
    }
};

context.fillStyle = "white";
context.font = "10px arial";
context.fillText(points, 380, 15);

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
        points = points + 5;
        tail = tail + 1;
        appleX = Math.floor(Math.random() * 19);
        appleY = Math.floor(Math. random() * 19);
    
}



}

function keyPush(event){

    switch (event.keyCode){
        case 37: // left key
        if (speedX == + speed && speedY == 0) {
            undefined;
        } else {
        speedX = - speed;
        speedY = 0;
    }
        break;
        case 38: // up key
        if (speedX == 0 && speedY == + speed){
            undefined;
        } else {
        speedX = 0;
        speedY = - speed;
        }
        break;
        case 39: // right key
        if (speedX == - speed && speedY == 0){
            undefined;
        } else {
        speedX = + speed;
        speedY = 0;
        }
        break;
        case 40: // down key
        if (speedX == 0 && speedY == - speed) {
            undefined;
        } else {
        speedX = 0;
        speedY = + speed;
        }
        break;
        case 32: //space key
        if (switchscreen == "begin") {
            switchscreen = "in";
            currentScreen();
        } else if (switchscreen == "stop"){
            switchscreen = "goToStop";
            currentScreen()
        }
        
            break;
        default:
            break;
    }

}
function currentScreen(){  
        if (switchscreen == "begin") {
        menuGame();
        } else if (switchscreen == "in") {
       looping = setInterval(inGame, 60);
        switchscreen = "stop";
        } else if (switchscreen == "goToStop") {
            clearInterval(looping);
            stopGame();
            switchscreen = "begin";
        }
}