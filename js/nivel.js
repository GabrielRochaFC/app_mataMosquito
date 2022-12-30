function speed() {
    var nivel = window.location.search
    nivel = nivel.replace('?', '');
    console.log(nivel);

    if (nivel === 'facil') {
        speedOfFly = 1500;
    } else if (nivel === 'normal') {
        speedOfFly = 1000;
    } else if (nivel === 'dificil') {
        speedOfFly = 750;
    }
    return speedOfFly;
}