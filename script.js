
function rankear() {
    
    let victoryNumber = document.getElementById("victory").value;
    let lossNumber = document.getElementById("loss").value;
    let result = victoryNumber - lossNumber
    

    if (result <= 10){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Ferro."
    } else if (result >= 11 && result <= 20){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Bronze."
    } else if (result >= 21 && result <= 50){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Prata."
    } else if (result >= 51 && result <= 80){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Ouro."
    } else if (result >= 81 && result <= 90){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Diamante."
    } else if (result >= 91 && result <= 100){
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Lendário."
    } else {
        x = "O Herói tem " + result + " de resultado entáo ele(a) está no nível de Imortal."
    }

    document.getElementById("message").innerHTML = x
}