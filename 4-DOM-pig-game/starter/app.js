/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,turnScore,currentplayer,dice,hold;

scores=[0,0];
turnScore =0;
currentplayer=0;
dice= Math.floor(Math.random()*6)+1;
console.log(dice);
hold=false;

turnScore=dice;

document.querySelector('#current-'+currentplayer).textContent=dice;


document.querySelector('#current-'+currentplayer).textContent=dice;

if(dice==1){
    turnScore=0;

}

scores[currentplayer]=  scores[currentplayer]+turnScore;

console.log(scores);

function togglePlayer(){
currentplayer++;
}

console.log(currentplayer);

