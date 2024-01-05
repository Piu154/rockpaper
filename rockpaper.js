let score =  JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0

};
updateScoreElement();
/*   if(!score){
score = {
    wins: 0,
    losses: 0,
    ties: 0
}
}*/

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});


document.body.addEventListener('keydown',(event)=>{

     if(event.key === 'r'){
        playGame('rock');
     }else if(event.key === 'p'){
        playGame('paper');
     }
     else if(event.key === 's'){
        playGame('scissors');
     }

});


function playGame(playerMove){
const computerMoves =  pickComputerMove();

let result = '';

if(playerMove === `scissors`){
if(computerMoves === 'rock')
{
result = 'You Lose';
}
else if(computerMoves === 'paper'){
result = 'You Win';
}
else if(computerMoves === 'scissors'){
result = 'Tie';
}
}else if(playerMove === `paper`)
{
if(computerMoves === 'rock')
{
result = 'You Win';
}
else if(computerMoves === 'paper'){
result = 'Tie';
}
else if(computerMoves === 'scissors'){
result = 'You Lose';
}else if(playerMove === `rock`){

if(computerMoves === 'rock')
{
result = 'tie';
}
else if(computerMoves === 'paper'){
result = 'You Lose';
}
else if(computerMoves === 'scissors'){
result = 'You Win';
}
}

}

if(result === 'You Win'){
score.wins = score.wins+1;
}else if(result === 'You Lose'){
score.losses = score.losses+1;
}else if(result === 'Tie'){
score.ties += 1;
}

localStorage.setItem('scores',JSON.stringify(score));
updateScoreElement();

document.querySelector(`.js-result`).innerHTML = result;
document.querySelector(`.js-moves`).innerHTML = `You
<img src="${playerMove}-emoji.png" class="moves-icon">
<img src="${computerMoves}-emoji.png"  class="moves-icon">
Computer`


}

function updateScoreElement(){

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins},Losses: ${score.losses}, Ties: ${score.ties}`;

}

function pickComputerMove(){

const randomNumber = Math.random();

let computerMoves = '';

if (randomNumber >= 0 && randomNumber < 1/3)
{
computerMoves = 'rock';
}
else if (randomNumber >= 1/3 && randomNumber < 2/3)
{
computerMoves = 'paper';
}
else if (randomNumber >= 2/3 && randomNumber < 1)
{
computerMoves = 'scissors';
}  

return  computerMoves;
}