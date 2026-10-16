const notas = [
    [8, 7, 9],
    [6, 5, 8],
    [9, 10, 7]
];

let soma = 0;
let quantidade = 0;

for (let i = 0; i < notas.length; i++) {

    for (let j = 0; j < notas[i].length; j++) {

        soma += notas[i][j];
        quantidade++;

    }
}

if (quantidade > 0) {

    const media = soma / quantidade;

    console.log("Média:", media.toFixed(2));

} else {

    console.log("Não existem notas para calcular.");
}
