const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite os números separados por espaços: ', (numeros) => {
    let array = numeros.split(' ').map(num => parseInt(num));
    let pares = array.filter(num => num % 2 === 0);
    let impares = array.filter(num => num % 2 !== 0);

    let reorganizado = pares.concat(impares);

    console.log('Array reorganizado: ', reorganizado);
    rl.close();
});