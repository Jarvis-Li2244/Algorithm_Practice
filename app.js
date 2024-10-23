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