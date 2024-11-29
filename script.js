//  1 - Ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 2 - Controllo se il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    // 3 - Controllo se il numero è divisibile soltanto per 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // 4 - Controllo se il numero è divisibile soltanto per 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    // 5 - Se il numero non è divisibile né per 3 né per 5, mostra il numero in console
    else {
        console.log(i);
    }
}
