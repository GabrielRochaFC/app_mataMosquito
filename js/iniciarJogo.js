function iniciarJogo(){
    var difficulties = document.getElementById('dificuldade').value
    // console.log(difficulties)
    if(difficulties === ''){
        window.alert("Selecione uma dificuldade")
        return false
    }
    window.location.href = "app.html?" + difficulties
}