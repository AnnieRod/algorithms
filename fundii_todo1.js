//Suma de todos los enteros hasta el num dado

function sigma(num) {
    var newnum = 0;
    for (num; num > 0; num--) {
        newnum += num;
    }
    return newnum;
}

sigma(5);

//Muliplica todos los positivos hasta ese numero

function factorial(num) {
    var facts = 1;
    for (num; num > 0; num--) {
        facts *= num;
    }
    console.log(facts);
    return facts;
}

factorial(5);
