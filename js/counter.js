var clicksCounter = 1;
var heartsCounter = 0;
var time = document.getElementById("timer");
var seconds = 15;
var countDown = setInterval(() => {
    time.innerHTML = seconds 
    if(seconds === 0){
        window.location.replace("victory.html")
    }
    seconds--;
}, 1000);

 

function verifyCounter(){
    if(clicksCounter > 0){
        clicksCounter = 0;
    } else{
        let heart = document.getElementById('heart'+[heartsCounter])
        heartsCounter++;
        if (heartsCounter === 4) {
            window.location.replace("endgame.html")
        }
        heart.setAttribute("src","img/coracao_vazio.png")
    }
}

