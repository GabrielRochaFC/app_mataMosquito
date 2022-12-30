// Creating variables
var speedOfFly = 1500;
speedOfFly = speed();
var timer = setInterval(showFly, speedOfFly)
var fly = document.getElementById('fly')

// Creating a function that changes the fly based on speedOfChange:
function showFly(){
    // Calling the function that gives us random numbers
    let coordinate = generatePercentage();
    // Calling a function to put the coordinates in CSS
    putArrayInCss(coordinate);
    // Calling a function that verify if the counter is more than 0
    verifyCounter();
}

