window.onload=function() {buttons=document.querySelectorAll(".selectOp")
for (let i=0; i<5; i++){   
    buttons[i].addEventListener("click", event=>whoWon(i));
}   
}

const pcImage=document.getElementById("pcImage");
var cj=0;
var switchImage=setInterval(function(){
    pcImage.innerHTML='<img src="'+optionImages[cj]+'" width=100px>';
    cj=(cj+1)%optionImages.length;
},300);

gameStates=[
    [0, 1, -1, -1, 1],
    [-1, 0, 1, 1, -1],
    [1, -1, 0, -1, 1],
    [1, -1, 1, 0, -1],
    [-1, 1, 1, -1, 0]
]
optionNames=["Rock","Paper","Scissors","Lizard","Spock"]
optionImages=["Rock.jpg","Paper.jpg","Scissors.jpg","Lizard.jpg","Spock.jpg"]

async function whoWon (i) {
clearInterval(switchImage)
let j=Math.floor(Math.random()*5);

pcImage.innerHTML='<img src="'+optionImages[j]+'" width=100px>';
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