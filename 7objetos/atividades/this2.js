const produto = {
    nome: "Mouse",
    preco: 50,
    quantidade: 10,

    calcularTotal() {
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal());