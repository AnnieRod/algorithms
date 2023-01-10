arraySample = [3,6,67,6,23,11,100,8,93,2,17,24,7,2,33,45,28,120,33,23,12,99,100];

//Hallar el numero maximo en un arreglo

function arrMax(arr) {
    var maxValue = arr[0];
    for (var i = 0; i<arr.length; i++) {
        if(maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    console.log(maxValue);
}

arrMax(arraySample);

//Hallar el numero minimo en un arreglo
function arrMin(arr) {
    var minValue = arr[0];
    for (var i = 0; i<arr.length; i++) {
        if(arr[i] < minValue) {
            minValue = arr[i];
        }
    }
    console.log(minValue);
}

arrMin(arraySample);

//Hallar la suma de los valores

function arrSum(arr){
    
}

//Hallar el promedio de los valores
function arrMean(arr) {

}

