const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Você quer quantos elementos da sequência de Fibonacci? ', (num1) => {
    num1 = parseInt(num1);
    
    if (isNaN(num1) || num1 < 0) {
        console.log('Por favor, digite um número válido maior ou igual a zero.');
        rl.close();
        return;
    }

    let fibonacci = []; // Inicializa um array vazio para armazenar a sequência de Fibonacci

    if (num1 >= 1) {
        fibonacci.push(0); // Adiciona o primeiro número da sequência de Fibonacci (0)
    }
    if (num1 >= 2) {
        fibonacci.push(1); // Adiciona o segundo número da sequência de Fibonacci (1)
    }

    for (let i = 2; i < num1; i++) {
        let nextFibonacci = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextFibonacci);
    }
    console.log(`Sequência de Fibonacci com ${num1} elementos:`, fibonacci)
    rl.close();
});    