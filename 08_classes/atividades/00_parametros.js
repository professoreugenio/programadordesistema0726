class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    apresentar () {
        console.log("PRODUTO");
        console.log(`${this.nome} - Valor: ${this.preco};`);
        console.log("DESCONTO:");
    }

    calcularDesconto(percentual) {

        return this.preco * (1 - percentual / 100);
    }
}

const produto1 = new Produto("COMPUTADOR",2500);

produto1.apresentar();
console.log("PREÇO COM DESCONTO R$",produto1.calcularDesconto(30))

// ALTERAR O PREÇO DO PRODUTO
produto1.preco = 1850
produto1.apresentar();
console.log("PREÇO COM DESCONTO R$",produto1.calcularDesconto(30))

