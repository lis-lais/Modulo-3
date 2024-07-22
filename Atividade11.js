const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = [];

function mostrarMenu() {
    console.log('-----------Menu-----------');
    console.log('1. Cadastrar usuario');
    console.log('2. Pesquisar email');
    console.log('3. Exibir lista de usuários');
    console.log('4. Sair');
    rl.question('Escolha uma opção: ', (opção) => {
        switch (opção.trim()) {
            case '1':
                cadastrarUsuario();
                break;
            case '2':
                pesquisarEmail();
                break;
            case '3':
                listaUsuarios();
            case '4':
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

function cadastrarUsuario() {
    rl.question('Digite o nome do usuário: ', (nome) => {
        rl.question('Digite o email: ', (email) => {
            rl.question('Digite a idade do usuário: ', (idade) => {
                idade = parseInt(idade);
                if (isNaN(idade) || idade <= 0) {
                    console.log('Idade inválida. O valor deve ser um número positivo.')
                    mostrarMenu();
                    return;
                }
                let novoUsuario = {
                    nome: nome,
                    email: email,
                    idade: idade
                };

                usuarios.push(novoUsuario);
                console.log(`${nome} - ${email} - ${idade} anos. `);
                mostrarMenu();   
            })
            
        });
    });
}

function pesquisarEmail() {
    if (usuarios.length === 0) {
        console.log('A lista de usuários está vazia.');
        mostrarMenu();
        return;
    }

    rl.question('Digite o email que quer pesquisar: ', (emailInput) => {
        let encontrado = usuarios.find(usuarios => usuarios.email === emailInput);
        if (encontrado) {
            console.log(`Usuário encontrado: ${encontrado.nome} - ${encontrado.email} - ${encontrado.idade} anos`);
        } else {
            console.log('Usuário não encontrado.')
        }
    mostrarMenu();
    });
}

function listaUsuarios() {
    if (usuarios.length === 0) {
        console.log('A lista de usuários está vazia.');
    } else {
        console.log('Lista de Usuários: ');
        usuarios.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - ${item.email} - ${item.idade} anos`);
        });
    }
    mostrarMenu();
}

mostrarMenu();