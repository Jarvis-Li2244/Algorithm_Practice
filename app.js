function factorial(x) {
    if (x < 1) {
        return;
    }
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i
    };
    return result;
}

console.log(factorial(7));

function newFactorial(y) {
    if(y > 0) {
        let result = 1;
        for (let i = 1; i <= x; i++) {
            result *= i
        };
        return result;
    } else {
        return;
    }
}

function occupiedSpaces(n,x,y) {
    let sameSpaces = 0;
    for(let i = 0; i < n; i++) {
        if(x[i] == "C" && y[i] == "C") {
            sameSpaces += 1
        }
    };
    return sameSpaces;
}

console.log(occupiedSpaces(5, "CCCCC", "C.C.."))

// Psuedocode for Decimal to Binary
function dec_binary(a) {
    let number = ""
    let y = 1
    while (y <= a) {
        y *= 2
    }
    y /= 2
    while (y > 1) {
        if (y <= a) {
            a = a % y
            number += "1"
        } else {
            number += "0"
        }
        y /= 2
    }
    if (a == 1) {
        number += "1"
    } else {
        number += "0"
    }
    return Number(number)
}

function bin_decimal(a) {
    let x = String(a)
    let number = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] == 1) {
            number += 2**(x.length - 1 - i)
        }
    }
    return number
}

