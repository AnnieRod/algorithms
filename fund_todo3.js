// Cambia numeros positivos por "Big"
function makeitBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "Big"
        }
    }
    console.log(arr)
    return arr
}

makeitBig([- 1, 3, 5, -5]);

// Imprime el menor, regresa el mayor
function lowTop(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        else if (arr[i] > max) {
            max = arr[i];
        }
    }
    var minmax = [min, max]
    return minmax
}

lowTop([1, 2, 3, 4, 5]);

//imprime el penultimo y regresa el primer impar 
function almostLast(arr) {
    const secondLast = arr[arr.length - 2];
    console.log(secondLast);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd = arr[i];
            return odd
        }
    }
}

almostLast([2, 4, 6, 8, 7, 9, 10]);

//Devuelve un nuevo arreglo con sus valores duplicados
function doubleUp(arr) {
    var double = [];
    for (var i = 0; i < arr.length; i++) {
        var multi = arr[i] * 2;
        double.push(multi);
    }
    console.log(double);
    return double
}

doubleUp([1, 2, 3]);

// Reemplaza el ultimo valor con el total de valores positivos
function lastPositive(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total++;
        }
    }
    arr[arr.length - 1] = total;
    return arr
}

lastPositive([- 1, 1, 1, 1]);

// Tres impares o pares seguidos imprimen algo diferente
function evenOdd(arr) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            odd++;
        }
        else if (arr[i] % 2 == 0){
            even++;
        }
        if (odd == 3) {
            console.log("That's weird!");
        }
        else if (even == 3) {
            console.log("Even more weird :)")
        }
    }
}

evenOdd([1,2,3,5,7,8,10,12]);

// Agrega uno a los impares 
function addOdd(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i]  = arr[i] + 1;
        }
    }
    console.log(arr);
    return arr
}

addOdd([1,2,3,4,5,6,7,8]);

//

