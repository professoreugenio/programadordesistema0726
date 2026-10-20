const produto = {
    nome: "Mouse",
    preco: 50,
    quantidade: 10
};

console.log(Object.keys(produto));
console.log(Object.values(produto));
console.log(Object.entries(produto));
console.log("=====================");
for (const [chave, valor] of Object.entries(produto)) {
    console.log(`${chave}: ${valor}`);
}