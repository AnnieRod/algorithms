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
    var sum = 0;
    for(var i = 0; i<arr.length; i++) {
        sum+=arr[i];
    }
    console.log(sum);
    return sum;
}

arrSum(arraySample);

//Hallar el promedio de los valores
function arrMean(arr) {
    var total = arrSum(arr);
    var length = arr.length;
    var mean = total/length;
    return mean;
}

arrMean(arraySample);

//TO DO 1: ARRAYS FROM CODING DOJO 

//Push al frente: inserta un valor al INICIO del array sin uso de funciones built-in

function pushFront(arr,num) {
    for (var i = arr.length -1; i>= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = num;
    return arr;
}

console.log(pushFront(arraySample,"hello"));


//pop al frente; elimina y retorna el valor inicial del array sin built-in methods

function popFront(arr) {
        let a = arr[0];
        let newArr = [];
        for (let i = 1; i <= arr.length - 1; i++) {
            newArr[i - 1] = arr[i];
        }
        console.log(newArr);
        console.log(a);
        return a
    }

popFront(arraySample);

//Insertar en: Inserta un valor en cierto index dado sin built-in methods

array2 = [1,2,3,4,5,6,7,8,9,10];

function pushIndex(arr,index,val) {
    for (var i = arr.length -1; i>= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[index] = val;
    return arr;
}

console.log(pushIndex(array2, 3, "bonjour"));

//

