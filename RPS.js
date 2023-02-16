window.onload=function() {buttons=document.querySelectorAll(".selectOp")
for (let i=0; i<5; i++){   
    buttons[i].addEventListener("click", event=>whoWon(i,n));
}//giving each button an option to pick 
document.getElementById("plus").addEventListener("click", event=>gamePlus())
}

const pcImage=document.getElementById("pcImage");  //Image for a computer pick: switching between all available options
let cj=0;
var switchImage=setInterval(function(){
    pcImage.innerHTML='<img src="'+optionImages[cj]+'" width=100px>';
    cj=(cj+1)%optionImages.length;
},300);
let n=3; //number of options in the game (rock, paper, scissors)
gameStates=[
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, -1, 1],
    [1, -1, 1, 0, -1],
    [-1, 1, -1, 1, 0]
]//matrix of outcomes: row- player, column-pc;
optionNames=["Rock","Paper","Scissors","Lizard","Spock"]
optionImages=["Rock.jpg","Paper.jpg","Scissors.jpg"]
optionImagesPlus=["Lizard.jpg","Spock.jpg"]

function gamePlus (){//expanding the game to 5 option (not revertable until refresh)
    n=5;
    optionImages=optionImages.concat(optionImagesPlus);
    document.getElementById("title").innerHTML="Rock Paper Scissors Lizard Spock"
    document.getElementById("rules").innerHTML+=", rock smashes lizard, lizard poison Spock, Spock breaks scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock"
    hiddens=document.querySelectorAll(".secondary");
    hiddens.forEach((hidden)=>{hidden.classList.remove("secondary")});
    return n;
}
//info about current game outcome and general scores;
const current=document.getElementById("current");  
const scores=document.getElementById("scores");
let playerScore=0;
let computerScore=0;
updateScores=()=>scores.innerHTML=`Player score: ${playerScore} <br>Computer score: ${computerScore}`; 


function whoWon (i,n) {
clearInterval(switchImage) //stopping the computerPick switching between different options
let j=Math.floor(Math.random()*n); //picking random number from 0 to 2(4) defining computer pick
pcImage.innerHTML='<img src="'+optionImages[j]+'" width=100px>'; //setting image for PC pick


gameState=gameStates[j][i] //get game outcome from matrix
if (gameState===1)
{current.innerHTML="Player won! "+optionNames[i]+" beats "+optionNames[j];
playerScore++; 
updateScores()
return playerScore;
}
else if (gameState===-1)
{current.innerHTML="Computer won! "+optionNames[j]+" beats "+optionNames[i]
computerScore++;
updateScores()
return computerScore;}
else{current.innerHTML="tie! "+optionNames[i]+" = "+optionNames[j]}
}



