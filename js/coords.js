// Function that generates random percentages of top, left and width and return to showFly
function generatePercentage() {
    let percentage = Array();
    percentage['top'] = Math.round(Math.random() * 88);
    percentage['left'] = Math.round(Math.random() * 90);
    percentage['width'] = Math.round(Math.random() * (100 - 40)) + 40;
    return percentage;
}

// Function to put the coordinates in CSS
function putArrayInCss(coordenada){
    fly.style.display = "block";
    fly.style.top = coordenada['top'] + '%';
    fly.style.left = coordenada['left'] + '%';
    fly.style.width = coordenada['width'] + 'px';
}