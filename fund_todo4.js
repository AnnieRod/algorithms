//Elimina objetos excepto el que diga x
function deleteNone(arr,x) {
    arr.splice(0, arr.length - x);
    return arr
}

deleteNone([2,4,6,8,10], 3);

//Devuelve la intersección en x de Y = MX + B
function intercept(m, b) {
    return m[0] - m[1]*(b[0]-m[0])/(b[1]-m[1]);
}

var test = intercept([5, 3], [3, 4]); 
console.log(test)

//