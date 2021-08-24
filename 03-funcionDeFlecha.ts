var numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros.map(n => n + 1));

numeros.forEach((elemento, indice, array) => {
    console.log(`numeros [${indice}] = [${elemento}]`);
});

var multiplicar = (a, b) => a * b;

var saludar = () => {
    console.log(`hola`);
};


