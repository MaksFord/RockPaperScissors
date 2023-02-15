window.onload=function() {buttons=document.querySelectorAll(".selectOp")
for (let i=0; i<5; i++){   
    buttons[i].addEventListener("click", event=>whoWon(i));
}   
}
const pcChoice=document.getElementById("pcChoice");
gameStates=[
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, -1, 1],
    [1, -1, 1, 0, -1],
    [-1, 1, 1, -1, 0]
]
optionNames=["Rock","Paper","Scissors","Lizard","Spock"]

async function whoWon (i) {
let j=Math.floor(Math.random()*5);
pcChoice.innerHTML=`${optionNames[j]}`;
await delay(1000);

gameState=gameStates[j][i]
if (gameState===1)
{alert ("player won! "+optionNames[i]+" beats "+optionNames[j])}
else if (gameState===-1)
{alert ("computer won! "+optionNames[j]+" beats "+optionNames[i])}
else{alert ("tie! "+optionNames[i]+" = "+optionNames[j])}
}
//pause function
const delay = ms => new Promise(res => setTimeout(res, ms));