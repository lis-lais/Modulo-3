const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha uma operação.");
console.log("+");
console.log("-");
console.log("*");
console.log("/");

rl.question('Operação: ', (resposta) => {
    let operacao = resposta.trim();

    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            // Verifica se num1 e num2 são números válidos
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Por favor, digite números válidos.");
            } else {
                // Realiza a operação escolhida
                if (operacao === "+") {
                    console.log(`${num1} + ${num2} = ${num1 + num2}`);
                } else if (operacao === "-") {
                    console.log(`${num1} - ${num2} = ${num1 - num2}`);
                } else if (operacao === "*") {
                    console.log(`${num1} * ${num2} = ${num1 * num2}`);
                } else if (operacao === "/") {
                    if (num2 === 0) {
                        console.log("Não é possível dividir por zero.");
                    } else {
                        console.log(`${num1} / ${num2} = ${num1 / num2}`);
                    }
                } else {
                    console.log("Operação inválida. Escolha uma operação");
                }
                rl.close();
            }
        });
    });
});
