class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }

    moeda(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}

    apresentar() {
        console.log(`Produto: ${this.nome}`);
        console.log(`Preço: ${this.moeda(this.#preco)}`);
    }

}

const produto = new Produto("Teclado", 175.85);

produto.preco = -100
produto.apresentar();