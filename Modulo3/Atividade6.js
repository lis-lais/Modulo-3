const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número: ', (num1) => {
    num1 = parseInt(num1);
    
    let fatorial = 1;

    if (num1 < 0) {
        console.log('Não é possível calcular o fatorial de um número negativo.');
    } else {
        for (let i = 1; i <= num1; i++) {
            fatorial = fatorial * i;
    }
        console.log(`O fatorial de ${num1} é: ${fatorial}`)
    }
    rl.close();
});     