const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Escolha a opção.")
console.log("1. Converter Celsius para Fahrenheit")
console.log("2. Converter Fahrenheit para Celsius")

rl.question('Opção: ', (resultado) => {
    let conv = resultado.trim();
        
    if (conv !== "1" && conv !== "2") {
        console.log("Opção inválida, tente novamente.");
        rl.close();
        return;
    }

    rl.question('Digite a temperatura que deseja converter: ', (temp) => {
        temp = parseFloat(temp);
        
        if (isNaN(temp)) {
            console.log("Por favor, digite uma temperatura válida.");
            rl.close();
            return;
        }

        switch (conv) {
            case "1":
                const tempConv1 = ((temp * 1.8) + 32);
                console.log(`${temp}C = ${tempConv1}F`)
                break;

            case "2":
                const tempConv2 = ((temp -32) / 1.8);
                console.log(`${temp}F = ${tempConv2}C`)    
                break;
            
            default:
                console.log("Opção inválida, tente novamente.");
                break;
            }    

    rl.close();
    });
});     