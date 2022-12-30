// Function that recognizes the mouse click event and restarts the timer
function changeWithClick(){
    clicksCounter++;
    clearInterval(timer)
    showFly();
    timer = setInterval(showFly, speedOfFly)
}
