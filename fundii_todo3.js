//Camisetas: Si compras 2 tienes 9% de descuento, si 3 19% y si 4 o más then 35%. Redondea al valor mas cercano 

function sweatshirtPrice(num) {
    var total = num * 20;
    if (num == 2) {
        total*= 0.91;
    }
    if (num == 3) {
        total *= 0.81;
    }
    if (num >=4) {
        total *= 0.65;
    }

    var price = Math.ceil(total);
    return price 
}

console.log(sweatshirtPrice(1));
console.log(sweatshirtPrice(2));
console.log(sweatshirtPrice(3));
console.log(sweatshirtPrice(4));
console.log(sweatshirtPrice(5));

//