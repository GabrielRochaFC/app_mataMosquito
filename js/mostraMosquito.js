// Creating variables
var speedOfChange = 1000;
var timer = setInterval(showFly, speedOfChange)
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

