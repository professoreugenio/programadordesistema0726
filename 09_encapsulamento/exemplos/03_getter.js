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

const produto1 = new Produto("Monitor", 700);

console.log(produto1.nome);
console.log(produto1.preco);
