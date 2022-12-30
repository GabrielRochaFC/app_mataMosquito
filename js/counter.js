var clicksCounter = 1;
var heartsCounter = 0;

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