//Suma todos los divisibles por 3 o 5 en un rango de numeros

function betterThreesFives(start, end) {
    sumup = 0;
    for (var i = start; i<= end; i++) {
        if((i % 3 == 0) && (i % 5 == 0)) {
            continue;
        }
        else if ((i % 3 == 0) || (i % 5 == 0)) {
            sumup += i;
        }
    }
    return sumup;
}

betterThreesFives(100,4000000);

//Distribuye una cantidad de dinero en monedas de pequeño valor
