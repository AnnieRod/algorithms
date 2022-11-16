// Cuenta regresiva: Regresa un arreglo que cuente de uno en uno 

function arrayCount(num) {
    var arr = []
    for (var i = num; i >= 0; i--) {
        arr.push(i)
    }
    return arr
}
var test = arrayCount(10);
console.log(test);

// Print and return: reibe un array con 2 numeros, imprime el 1 y devuelve el 2

function hitnRun(arr) {
    console.log(arr[0])
    var temp = arr[1]
    return temp
}

hitnRun([2, 3]);

//Suma + length: Suma del primer valor + longitud del arreglo

function addLength(arr) {
    var add = arr[0] + arr.length
    return add
}

addLength([1, 2, 3, 4, 5, 6, 10]);

// Regresa mayores que el segundo valor de un arreglo

function greaterTwo(arr) {
    var arr2 = []
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] > arr[1]) {
            console.log(arr[i])
            arr2.push(arr[i])
        }
    }
    return arr2
}

greaterTwo([1, 3, 5, 7, 9, 13]);

// Jinx: Devuelve un arreglo de longitud num1 con cada num2. 

