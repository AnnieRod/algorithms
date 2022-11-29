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

//'Arte de estrellas': alinea a un lado u otro segun la funcion
function drawLeftStars(num, char) {
    console.log(char.repeat(num) + ' '.repeat(75 - num));
}

drawLeftStars(2, "*");

function drawRightStars(num, char) {
    console.log(' '.repeat(75 - num) + char.repeat(num));
}

drawRightStars(2, "*");

function drawCenterStars(num, char) {
    var middle = (75 - num) / 2
    console.log(' '.repeat(middle) + char.repeat(num) + ' '.repeat(middle));
}

drawCenterStars(2, "*");