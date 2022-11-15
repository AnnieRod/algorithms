// Intercambio de variables
myNumber  = 42
myName = "Ana"

function exchange (var1, var2) {
    temporal = var1
    var1 = var2
    var2 = temporal
    console.log (var1 + " "+ var2)
}

exchange(myNumber, myName)

// Imprimir -52 a 1066
function numberRush(num1, num2) {
    for (var i = num1; i <= num2; i++)
    console.log(i)
}

numberRush (-52, 1066)

// Dont worry, be happy
function beCheerful(times) {
    for (var i = 1; i <= times; i++)  {
        (console.log ("Buenos días!")) * times
    }
}

beCheerful(98)

//Multiplo de 3, NO de todos
function multiThree() {
    for (var i = -300; i <= 0; i+=3) {
        if ( i == -6) {
            continue
        }
        else if (i == -3){
            continue
        }
        console.log(i)
    }
}

multiThree()

//Imprime enteros con While
function printNum(num1, num2) {
    while(num1 <= num2){
        console.log(num1)
        num1++
    }
}

printNum(2000,5280)

//Es tu cumpleaños...
month = 5
day = 2
function birthday(num1,num2) {
    if ((num1 == month || num1 == day) && (num2 == month || num2 == day )) {
        console.log ("¿Cómo lo supiste?")
    }
    else {
        console.log("Un día cualquiera")
    }
}

birthday(1,5)

//Año bisiesto
function leapYear(year) {
    if ((year%4 ==0) && (year%100 != 0) || (year%400 == 0)) {
        console.log("si es bisiesto")
        }
    else {
        console.log ("no es bisiesto")
    }
}

leapYear(2025)

//Imprimir y contar
function printCount() {
    total = 0
    for(var i = 512; i <=4096; i++) {
        if (i%5 == 0) {
            console.log(i)
            total++
        }
    }
    console.log(total)
}

printCount()

//Múltiplos de 6
function Multiwhile(num1, num2) {
    while(num1 <= num2){
        if (num1%6 == 0) {
            console.log(num1)
        }
        num1++
    }
}

Multiwhile(6,60000)

//Contando a la manera Dojo
function dojoCount() {
    for (var i = 1; i <= 100; i++) {
        if (i%5 == 0) {
            console.log("Codificando")
            if (i%10 == 0) {
                console.log("Dojo")
            }
        }
        else {
            console.log(i)
        }
    }
}

dojoCount()

//¿Qué sabes?
function printSomething(incoming) {
    console.log(incoming)
}

printSomething("Hello")

//Es enorme - version normal
function odd3000 (num1,num2) {
    for (var i = num1; num1 <= num2; i+=3) {
        num1+=num2
    }
    console.log(num1)
}

odd3000(-300000, 300000)

//Cuenta regresiva cada 4 
function regressiveFour(high,low,mult) {
    while(high > low) {
        console.log(high)
        high-=mult
    }
}

regressiveFour(2016,0,4)

//Cuenta regresiva flexible
function flexibleReg(low, high, mult) {
    for(var i = high; i > low; i-=mult) {
        console.log(i)
    }
}

flexibleReg(2,9,3)

//Cuenta regresiva final
// Esto se basa en "Cuenta regresiva flexible". 
// Los nombres de los parámetros no son tan útiles,
//  pero el problema es esencialmente idéntico; 
//  ¡no te dejes engañar! 
//  Dados 4 parámetros (param1, param2, param3, param4), 
//  imprime los múltiplos de param1, 
//  comenzando en param2 y extendiéndose hasta param3. 
//  Una excepción: si un múltiplo es igual a param4, omítelo (no lo imprimas).
//   Haz esto usando un WHILE. Dado (3,5,17,9), 
//   imprime 6,12,15 (que son todos los múltiplos de 3 entre 5 y 17, y excluyendo el valor 9).
function finalCount(p1, p2, p3, p4) {
    while(p2 < p3) {
        if (p2%p1 == 0){
            if (p2 == p4) {
                continue
            }       
            console.log(p2)
            p2++
        }
    }
}

finalCount(3,5,17,9)