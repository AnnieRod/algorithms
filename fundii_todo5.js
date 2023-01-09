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