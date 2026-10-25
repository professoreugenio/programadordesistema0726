class Produto {
    constructor(preco, quantidade) {
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularTotal() {
        return this.preco * this.quantidade;
    }
    exibir() {

        console.log("Preço R$ " + this.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }) + " * Quant.:" + this.quantidade + " = " + this.calcularTotal().toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        }));
    }

}

const produtos = [
    new Produto(1250,20),
    new Produto(3500,10),
    new Produto(895.89,20),
]

for (let i = 0; i < produtos.length; i++) {    
    produtos[i].exibir()
}

// Crie uma instância e teste
