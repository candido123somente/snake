let stage = document.getElementById("GameCanvas");
let context = stage.getContext("2d");
const sound_starting = new Audio();
sound_starting.src = './SFX/starting.wav';
const sound_gaming = new Audio();
sound_gaming.src = './SFX/gaming.mp3';
const sound_death = new Audio();
sound_death.src = './SFX/death.wav';
document.addEventListener("keydown", keyPush);
window.onload = menuGame;

let boardPieceSize = 20;
let boardAmountX = 20;
let boardAmountY = 20;
let speed = 1;
let speedX = 1;
let speedY = 0;
let drag = [];
let tail = 3;

let snakeX = 8;     
let snakeY = 4;

let appleX = Math.floor(Math.random() * 19);
let appleY = Math.floor(Math. random() * 19);

let points = 0;

var switchscreen = "begin";

let mute = false;

function menuGame(){
    
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "50px Retro Gaming";
    context.fillText("Snake", 105, 160);
    context.font = "15px Retro Gaming";
    context.fillText("Press space to start", 100, 300);
}

function endGame(){
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "45px Retro Gaming";
    context.fillText("GAME OVER", 50, 180);
    context.font = "18px Retro Gaming";
    context.fillText("score: " + points, 140, 210);
    context.font = "15px Retro Gaming";
    context.fillText("Press space to play again", 75, 310);
}

function stopGame(){
    context.fillStyle = "black";
    context.fillRect(0,0, 400, 400);
    context.fillStyle = "white";
    context.font = "45px Retro Gaming";
    context.fillText("Continue", 73, 150);
    context.font = "15px Retro Gaming";
    context.fillText("Press space to go back", 88, 180);
    context.fillStyle = "white";
    context.font = "30px Retro Gaming";
    context.fillText("Score " + points, 120, 255);
    sound_gaming.pause();
}

function inGame(){
if(mute == false){
sound_gaming.play();
} else if (mute == true){
sound_gaming.pause();
}

context.fillStyle = "black";
context.fillRect(0,0,400,400);

context.fillStyle = "red";
context.fillRect(appleX*boardPieceSize, appleY*boardPieceSize, boardPieceSize, boardPieceSize);
context.fillStyle = "green";
for (var i = 0; i < drag.length; i++){
    context.fillRect(drag[i].dragX*boardPieceSize, drag[i].dragY*boardPieceSize, boardPieceSize, boardPieceSize);
    if (drag[i].dragX == snakeX && drag[i].dragY == snakeY){
        sound_gaming.pause();
        sound_gaming.currentTime = 0;
        if (mute == false) {
        sound_death.play();
        }
        clearInterval(looping);        
        switchscreen = "begin";
        endGame();
         points = 0;
         tail = 3; 
         appleX = Math.floor(Math.random() * 19);
         appleY = Math.floor(Math. random() * 19);  
         snakeX = 8;     
         snakeY = 4; 
         speedX = + speed;
         speedY = 0;
    }
};

context.fillStyle = "white";
context.font = "10px Retro Gaming";
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
            if (mute == false){
            sound_starting.play();
            }
            currentScreen();
        } else if (switchscreen == "stop"){
            switchscreen = "goToStop";
            currentScreen()
        }
            break;
        case 77: // M letter
            if (mute == true){
                mute = false;
            } else if (mute == false){
                mute = true;
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