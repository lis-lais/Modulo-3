const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se é primo: ', (num1) => {
    num1 = parseInt(num1);
    
    if (num1 <= 1) {
        console.log(`${num1} não é um número primo.`);
        rl.close();
        return;
    }
    let primo = true;
     
    for (let i = 2; i < num1; i++) {
        if (num1 % i === 0) {
            primo = false;
            break;
        }
    }

    // Se não encontrou nenhum divisor além de 1 e ele mesmo, é primo
    if (primo) {
        console.log(`${num1} é um número primo.`);
    } else {
        console.log(`${num1} não é um número primo.`);
    }

    rl.close();
});   