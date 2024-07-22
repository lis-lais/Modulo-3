const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let listaDeCompras = [];

function mostrarMenu() {
    console.log('-----Menu-----');
    console.log('1. Adicionar item à lista');
    console.log('2. Remover item da lista');
    console.log('3. Marcar itens comprados');
    console.log('4. Exibir lista de compras');
    console.log('5. Sair');
    rl.question('Escolha uma opção: ', (opção) => {
        switch (opção.trim()) {
            case '1':
                adicionarItem();
                break;
            case '2':
                removerItem();
                break;
            case '3':
                marcarItemComprado();
                break;
            case '4':
                exibirLista();
                break;
            case '5':
                console.log('Saindo do programa.');
                rl.close();
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                mostrarMenu();
                break;
        }
    });
}

function adicionarItem() {
    rl.question('Digite o nome do produto: ', (nomedoProduto) => {
        rl.question('Digite o preço do produto: ', (precoProduto) => {
            precoProduto = parseFloat(precoProduto);
            if (isNaN(precoProduto) || precoProduto <= 0) {
                console.log('Preço inválido. O valor deve ser um número positivo.')
                mostrarMenu();
                return;
            }
            let novoItem = {
                nome: nomedoProduto,
                preco: precoProduto,
                comprado: false
            };
            listaDeCompras.push(novoItem);
            console.log(`${nomedoProduto} = ${precoProduto}. `);
            mostrarMenu();
        });
    });
}

function removerItem() {
    if (listaDeCompras.length === 0) {
        console.log('A lista de compras está vazia.');
        mostrarMenu();
        return;
    }
    
    rl.question('Digite o número do item que deseja remover: ', (numeroItem) => {
        numeroItem = parseInt(numeroItem);
        if (isNaN(numeroItem)  || numeroItem < 1 || numeroItem > listaDeCompras.length) {
            console.log('Opção inválida. Digite o número correspondente ao item.');
            mostrarMenu();
            return;
        }
        let itemRemovido = listaDeCompras.splice(numeroItem - 1, 1);
        console.log(`O item ${itemRemovido[0].nome} foi removido da lista.`);
        mostrarMenu();
    });
}

function marcarItemComprado() {
    if (listaDeCompras.length === 0) {
        console.log('A lista de compras está vazia.');
        mostrarMenu();
        return;
    }

    rl.question('Digite o número do item que deseja marcarcomo comprado: ', (numeroItem) => {
        numeroItem = parseInt(numeroItem);
        if (isNaN(numeroItem)  || numeroItem < 1 || numeroItem > listaDeCompras.length) {
            console.log('Opção inválida. Digite o número correspondente ao item.');
            mostrarMenu();
            return;
        }
        listaDeCompras[numeroItem - 1].comprado = true;
        console.log(`O item ${listaDeCompras[numeroItem - 1].nome} está marcado como comprado.`);
        mostrarMenu();
    });
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log('A lista de compras está vazia.');
    } else {
        console.log('Lista de Compras: ');
        listaDeCompras.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)} - ${item.comprado ? 'comprado' : 'pendente'}`);
        });
    }
    mostrarMenu();
}

mostrarMenu();