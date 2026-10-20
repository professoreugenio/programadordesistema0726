const produtos = [
    {
        codigo: 101,
        nome: "Mouse",
        preco: 50,
        quantidade: 10
    },
    {
        codigo: 102,
        nome: "Teclado",
        preco: 80,
        quantidade: 5
    },
    {
        codigo: 103,
        nome: "Monitor",
        preco: 700,
        quantidade: 3
    }
];


console.log(produtos[0].nome);
console.log(produtos[0].preco);

console.log("\n\n");
for (const produto of produtos) {
    console.log(`${produto.codigo} - ${produto.nome}`);
}

console.log("\n\n");
let total = 0;

for (const produto of produtos) {
    total += produto.preco * produto.quantidade;
}

console.log("Total do estoque: R$", total);