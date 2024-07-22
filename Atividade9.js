const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let funcionarios = [];

function mostrarMenu() {
    console.log('-----------Menu-----------');
    console.log('1. Adicionar novo funcionário');
    console.log('2. Exibir maior salário');
    console.log('3. Exibir lista de funcionários');
    console.log('4. Sair');
    rl.question('Escolha uma opção: ', (opção) => {
        switch (opção.trim()) {
            case '1':
                addFuncionario();
                break;
            case '2':
                maiorSalario();
                break;
            case '3':
                exibirLista();
                break;
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

function addFuncionario() {
    rl.question('Digite o nome do funcionário: ', (nome) => {
        rl.question('Digite o cargo do funcionário: ', (cargo) => {
            rl.question('Digite o salário do funcionário: ', (salario) => {
                salario = parseFloat(salario);
                if (isNaN(salario) || salario <= 0) {
                    console.log('Salário inválido. O valor deve ser um número positivo.')
                    mostrarMenu();
                    return;
                }
                let novoFuncionario = {
                    nome: nome,
                    cargo: cargo,
                    salario: salario
                };

                funcionarios.push(novoFuncionario);
                console.log(`${nome} - ${cargo} - R$ ${salario.toFixed(2)}. `);
                mostrarMenu();   
            })
            
        });
    });
}

function maiorSalario() {
    if (funcionarios.length === 0) {
        console.log('A lista de funcionários está vazia.');
        mostrarMenu();
        return;
    }

    let maiorSalario = 0;
    let funcionarioComMaiorSalario = null;

    funcionarios.forEach(funcionarios => {
        if (funcionarios.salario > maiorSalario) {
            maiorSalario = funcionarios.salario;
            funcionarioComMaiorSalario = funcionarios;
        }
    });

    if (funcionarioComMaiorSalario !== null) {
        console.log(`O funcionário com o maior salário é ${funcionarioComMaiorSalario.nome}, que recebe ${funcionarioComMaiorSalario.salario} como ${funcionarioComMaiorSalario.cargo}.`);
    } else {
        console.log('Não há funcionários na lista.');
    }
    mostrarMenu();
    return;
}

function exibirLista() {
    if (funcionarios.length === 0) {
        console.log('A lista de funcionários está vazia.');
    } else {
        console.log('Lista de Funcionários: ');
        funcionarios.forEach((item, index) => {
            console.log(`${index + 1}. ${item.nome} - ${item.cargo} - R$ ${item.salario.toFixed(2)}`);
        });
    }
    mostrarMenu();
}

mostrarMenu();