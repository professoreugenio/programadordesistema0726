class Produto {
    constructor(codigo, nome, preco, quantidade) {
        // Inicialize as propriedades
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }



    apresentar() {
        console.log("-------------------------------");
        console.log("Código:", this.codigo);
        console.log("Produto:", this.nome);
        console.log("Preço:", this.moeda(this.preco));
        console.log("Quantidade:", this.quantidade);
        console.log("Total:", this.moeda(this.calcularTotal()));
    }
}

const produtos = [
    new Produto(101, "Teclado", 100, 10),
    new Produto(102, "Mouse", 100, 10),
    new Produto(103, "Computador", 100, 10),
    new Produto(104, "Monitor", 100, 10)
];
console.log("PRODUTOS CADASTRADOS");


let totalEstoque = 0;
for (let i = 0; i < produtos.length; i++) {
    produtos[i].apresentar();
    totalEstoque += produtos[i].calcularTotal();
}

console.log("==============================");
console.log(
    "VALOR GERAL DO ESTOQUE:",
    produtos[0].moeda(totalEstoque)
);

