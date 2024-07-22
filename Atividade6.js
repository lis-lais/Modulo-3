const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (num1) => {
    num1 = parseInt(num1);
    
    if (isNaN(num1) || num1 < 0) {
        console.log("Por favor, digite um número inteiro positivo.");
        rl.close();
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= num1; i++) {
        fatorial = fatorial * i;
    }
        console.log(`O fatorial de ${num1} é: ${fatorial}`);
    
    rl.close();
});     