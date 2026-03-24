const countLabel = document.getElementById("countLabel"); 
const increaseButton = document.getElementById("increaseButton"); 
const resetButton = document.getElementById("resetButton"); 
const decreaseButton = document.getElementById("decreaseButton"); 
let count = 0;

function increaseFunction(){
    count++;
    countLabel.textContent = count;
}
function decreaseFunction(){
    count--; 
    countLabel.textContent = count;
}
function resetFunction(){
    count = 0 ; 
    countLabel.textContent = count;
}
/* you can create fonctions inside the block, but making them first
and calling them afterwards is the best way to write the code */

document.getElementById("increaseButton").onclick = increaseFunction;
document.getElementById("decreaseButton").onclick = decreaseFunction;
document.getElementById("resetButton").onclick = resetFunction;


