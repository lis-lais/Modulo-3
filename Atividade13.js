let populacaoA = 80000;
let taxaAnualA = 0.03;
let populacaoB = 200000;
let taxaAnualB = 0.015;

let anos = 0

while ( populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaAnualA;
    populacaoB += populacaoB * taxaAnualB;
    anos++;
    console.log(`Ano ${anos}: População A = ${Math.floor(populacaoA)}. População B = ${Math.floor(populacaoB)}`);
}

console.log(`Depois de ${anos} anos, a população de A ultrapassou ou igualou a população de B`);