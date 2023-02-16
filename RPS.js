window.onload=function() {buttons=document.querySelectorAll(".selectOp")
for (let i=0; i<5; i++){   
    buttons[i].addEventListener("click", event=>whoWon(i,n));
}   
document.getElementById("plus").addEventListener("click", event=>gamePlus())
}

const pcImage=document.getElementById("pcImage");
let cj=0;
var switchImage=setInterval(function(){
    pcImage.innerHTML='<img src="'+optionImages[cj]+'" width=100px>';
    cj=(cj+1)%optionImages.length;
},300);
let n=3;
gameStates=[
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, -1, 1],
    [1, -1, 1, 0, -1],
    [-1, 1, -1, 1, 0]
]
optionNames=["Rock","Paper","Scissors","Lizard","Spock"]
optionImages=["Rock.jpg","Paper.jpg","Scissors.jpg"]
optionImagesPlus=["Lizard.jpg","Spock.jpg"]

function gamePlus (){
    n=5;
    optionImages=optionImages.concat(optionImagesPlus);
    document.getElementById("title").innerHTML="Rock Paper Scissors Lizard Spock"
    document.getElementById("rules").innerHTML+=", rock smashes lizard, lizard poison Spock, Spock breaks scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock"
    hiddens=document.querySelectorAll(".secondary");
    hiddens.forEach((hidden)=>{hidden.classList.remove("secondary")});
    return n;
}
const current=document.getElementById("current");
const scores=document.getElementById("scores");
let playerScore=0;
let computerScore=0;
updateScores=()=>scores.innerHTML=`Player score: ${playerScore} <br>Computer score: ${computerScore}`; 


async function whoWon (i,n) {
clearInterval(switchImage)
let j=Math.floor(Math.random()*n);

pcImage.innerHTML='<img src="'+optionImages[j]+'" width=100px>';
await delay(500);

gameState=gameStates[j][i]
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
//pause function
const delay = ms => new Promise(res => setTimeout(res, ms));


