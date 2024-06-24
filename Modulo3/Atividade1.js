const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Escolha uma operação.")
console.log("+")
console.log("-")
console.log("*")
console.log("/")

rl.question('Operação: ', (resposta) => {
    let operacao = resposta.trim();

    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            /*
            switch (resposta) {
                case "+":
                    console.log(`${num1} + ${num2} = ${num1 + num2}`);
                    break;

                case "-":
                    console.log(`${num1} - ${num2} = ${num1 - num2}`);
                    break;

                case "*":
                    console.log(`${num1} * ${num2} = ${num1 * num2}`);
                    break;

                case "/":
                    console.log(`${num1} / ${num2} = ${num1 / num2}`);
                    break;    
            
                default:
                    console.log("Opção inválida");
                    break;
            }
            */

            if (resposta === "+") {
                console.log(`${num1} + ${num2} = ${num1 + num2}`);
            } else if (resposta === "-") {
                console.log(`${num1} - ${num2} = ${num1 - num2}`);
            } else if (resposta === "*") {
                console.log(`${num1} * ${num2} = ${num1 * num2}`);
            } else {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            }
            rl.close();
        });
    });
});

