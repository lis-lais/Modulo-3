const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const estudante = {
    nome: 'Gabriel',
    idade: 23,
    curso: 'Engenharia',
    media: 9.0
};

rl.question('Digite a chave que deseja encontrar: ', (chave) => {
    if (chave in estudante) {
        console.log(`Chave ${chave} encontrada no objeto.`)
    } else {
        console.log(`Chave ${chave} não encontrada no objeto estudante.`)
    }
    rl.close();
});