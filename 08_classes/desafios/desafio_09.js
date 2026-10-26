class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    moeda(valor) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }
    apresentar() {
        // Apresente nome e preço
        console.log("Produto:",this.nome,"Valor:",this.moeda(this.preco))
        console.log("-------------------------")
    }
}

const produtos = [
    new Produto("Mouse", 120),
    new Produto("Teclado", 248.90),
    new Produto("Computador", 3850.50)
];

for(let i = 0; i < produtos.length; i++) {
    produtos[i].apresentar();
}

// Percorra e apresente os produtos
