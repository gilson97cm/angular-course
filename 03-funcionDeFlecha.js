var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.map(function (n) { return n + 1; }));
numeros.forEach(function (elemento, indice, array) {
    console.log("numeros [" + indice + "] = [" + elemento + "]");
});
