class Produto {
    #preco;

    constructor(nome, preco) {
        this.nome = nome;
        this.#preco = preco;
    }

    get preco() {
        return this.#preco;
    }
}

const produto = new Produto("Monitor", 700);

console.log(produto.nome);
console.log(produto.preco);
