//Elimina objetos excepto el que diga x
function deleteNone(arr,x) {
    arr.splice(0, arr.length - x);
    return arr
}

deleteNone([2,4,6,8,10], 3);

//