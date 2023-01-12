//Eliminar espacios de un string

function filltheBlank(str){
    var string = str.split(" ").join("");
    return string;
}

filltheBlank("Pl ayTha tF u nkyM usi c");

//Obtener digitos en un string: devuelve un numero entero formado por los digitos encontrados

function findDigit(str) {
    var sample = str.split("");
    var arr = [];
    for (var i = 0; i < sample.length; i++) {
        if(sample[i] >= '0' && sample[i] <= '9') {
            arr.push(sample[i]);
        }
    }
    digit = arr.join("");
    return digit;
}

findDigit("0s1a3y5w7h9a2t4? 6! 8? 0");

//Acrónimos: Devuelve las primeras letras en mayuscula de cada palabra en el string

function acronymString(str) {
    var firstString = str.split(" ");
    var upperString = [];
    for (var i = 0; i < firstString.length; i++) {
        upperString.push(firstString[i][0]);
    }
    var acronym = upperString.join("").toUpperCase();
    return acronym
}

acronymString("En vivo desde Nueva York, es sábado por la noche");

//Contar caracteres SIN espacios que hayan en un string
function outSpace(str) {
    var string = str.split("");
    var count = 0;
    for(var i=0; i < string.length;i++) {
        if (string[i] != ' ') {
            count++;
        }
    }
    return count;
}

outSpace("Amor, me estás volviendo loca");

//Elimina los strings mas cortos que un valor dado en un arreglo lleno de strings

function tooShort(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        var string = arr[i].split("")
        if (string.length < value) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

console.log(tooShort(["hello","mam", "your", "nameissomething", "no"], 4));
