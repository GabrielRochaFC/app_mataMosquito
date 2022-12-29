// Criando função que muda a mosca de posição a cada 2 segundos:
var mostraMosquito = () => {
    // selecionando a mosca
    let mosca = document.getElementById('mosca')

    // Chamando função para nos dar as porcentagens aleatórias
    let coordenada = geraPorcentagens();
    console.log(coordenada)
    mosca.style.display = "block";
    mosca.style.top = coordenada['top'] + '%';
    mosca.style.left = coordenada['left'] + '%';
    mosca.style.width = coordenada['width'] + 'px';
    console.log(coordenada['width'])
}

// Função que gera as porcentagens aleatórias de top e left e retorna para mostraMosquito
function geraPorcentagens() {
    let porcentagens = Array();
    porcentagens['top'] = Math.round(Math.random() * 88);
    porcentagens['left'] = Math.round(Math.random() * 90);
    porcentagens['width'] = Math.round(Math.random() * (100 - 40)) + 40;
    return porcentagens;
}

var timer = setInterval(mostraMosquito, 2000)
