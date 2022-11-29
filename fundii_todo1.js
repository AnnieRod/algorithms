//Suma de todos los enteros hasta el num dado
function sigma(num) {
    var newnum = 0;
    for (num; num > 0; num--) {
        newnum += num;
    }
    console.log(newnum);
    return newnum
}

sigma(5);

//
