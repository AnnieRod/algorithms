// Playing with dices
//elige un numero al azar entre unos numeros
function rollOne(){
    return Math.floor(Math.random()*6)+1
}

//console.log(rollOne());

//Llama la función de arriba un cierto numero de veces e imprimir el valor que devuelva rollOne
//Si el valor es 5 imprime good luck! 

function playFives(num) {
    for ( var i = 1; i<=num; i++) {
        var result =rollOne();
        console.log(result);
        if (result === 5) {
            console.log("Good luck!");
        }
    }
}

playFives(3);

//Llama rollOne 8 veces pero NO imprima el resultado, solo los valors mas bajos y altos
function playStatistics(){
    var play = rollOne();
    let low = play;
    let high = play;
    for(var i = 1; i <= 8; i++){
        var result = rollOne();
        if(play < low){
            low = play;
        }
        if(play > high){
            high = play;
        }
    }
    console.log("Low: " + low + " - High: " + high);
}
playStatistics();