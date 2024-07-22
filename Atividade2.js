const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o número que deseja realizar a tabuada: ', (num1) => {
    num1 = parseFloat(num1);
     
    if (isNaN(num1)) {
        console.log("Por favor, digite um número válido.");
        rl.close();
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = num1 * i;
        console.log(`${num1} * ${i} = ${resultado}`)
    }
    rl.close();
});        