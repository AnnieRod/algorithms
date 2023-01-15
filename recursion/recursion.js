// dado un numero devuelve la suma desde 1 hasta ese numero, con RECURSIVIDAD

function recursiveSigma(num) {
    if(num > 0) {
        var result = recursiveSigma(num-1) + num;
        return result
    }
    return 0
}

recursiveSigma(8);

//Dado un numero, retorna el producto de su multplicacion desde ahi hasta el num (factorial)

function recursiveFact(num) {
    if(num > 1) {
        return rFact(num-1) * num;
    }
    return 1
}

recursiveFact(4);

